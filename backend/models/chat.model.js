import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  question: String,
  answer: String,
  date: { type: Date, default: Date.now },
});

const Chat = mongoose.model("Chat", chatSchema);

export default Chat;
