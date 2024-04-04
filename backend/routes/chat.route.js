import { SessionsClient } from "@google-cloud/dialogflow";
import express from "express";
import { v4 as uuidv4 } from "uuid";
import Chat from "../models/chat.model.js";
import { errorHandler } from "../utils/error.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/send-message", verifyToken, async (req, res, next) => {
  try {
    const { text } = req.body;
    const projectId = process.env.GOOGLE_PROJECT_ID;
    const sessionId = uuidv4();
    const languageCode = "id";
    const sessionClient = new SessionsClient({
      credentials: {
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
      },
    });
    const sessionPath = sessionClient.projectAgentSessionPath(
      projectId,
      sessionId
    );

    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          text: text,
          languageCode: languageCode,
        },
      },
    };

    const responses = await sessionClient.detectIntent(request);
    const result = responses[0].queryResult;
    const chat = new Chat({
      question: text,
      answer: result.fulfillmentText,
      userId: req.user.id, // Assuming you store user id in req.user
    });
    await chat.save();
    res.json({ reply: result.fulfillmentText });
  } catch (err) {
    console.error("ERROR:", err);
    next(errorHandler(500, "Error processing your request"));
  }
});

router.get("/history", verifyToken, async (req, res, next) => {
  try {
    const userId = req.user.id; // Assuming you store user id in req.user
    const chats = await Chat.find({ userId }).sort({ date: 1 });

    const formattedChats = chats.map((chat) => ({
      question: chat.question,
      answer: chat.answer,
      date: chat.date.toLocaleString(),
    }));

    res.json(formattedChats);
  } catch (err) {
    console.error(err);
    next(errorHandler(500, "Failed to get chat history."));
  }
});

router.delete("/clear-history", verifyToken, async (req, res, next) => {
  try {
    const userId = req.user.id; // Assuming you store user id in req.user
    await Chat.deleteMany({ userId });

    res.json({ message: "Chat history cleared successfully." });
  } catch (err) {
    console.error("ERROR:", err);
    next(errorHandler(500, "Failed to clear chat history."));
  }
});

export default router;
