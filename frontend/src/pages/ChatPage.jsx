import { Button, List, ListItem, TextInput } from "flowbite-react";
import { useEffect, useRef, useState } from "react";
import { FaEraser } from "react-icons/fa";

const ChatApp = () => {
  const [inputText, setInputText] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const formRef = useRef(null);

  useEffect(() => {
    fetchChatHistory();
  }, []);

  useEffect(() => {
    formRef.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  }, [chatHistory]);

  const fetchChatHistory = async () => {
    try {
      const token = localStorage.getItem("token"); // Assuming token is stored in localStorage
      const response = await fetch("/api/chatbot/history", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch chat history");
      }
      const data = await response.json();
      setChatHistory(data);
    } catch (error) {
      console.error("Error fetching chat history:", error);
    }
  };

  const sendMessage = async () => {
    try {
      const token = localStorage.getItem("token"); // Assuming token is stored in localStorage
      const response = await fetch("/api/chatbot/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ text: inputText }),
      });
      if (!response.ok) {
        throw new Error("Failed to send message");
      }
      const { reply } = await response.json();
      const newChat = {
        question: inputText,
        answer: reply,
        date: new Date().toLocaleString(),
      };
      setChatHistory([...chatHistory, newChat]);
      setInputText("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const clearChatHistory = async () => {
    try {
      const token = localStorage.getItem("token"); // Assuming token is stored in localStorage
      const response = await fetch("/api/chatbot/clear-history", {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to clear chat history");
      }
      setChatHistory([]);
    } catch (error) {
      console.error("Error clearing chat history:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-amber-50 dark:bg-slate-700 rounded-lg shadow-md p-6 relative">
        <Button
          color="failure"
          onClick={clearChatHistory}
          className="absolute top-0 right-0 mt-2 mr-2"
        >
          <FaEraser className="" />
        </Button>
        <div className="mb-4">
          <List unstyled className="text-center ">
            {chatHistory.length > 0 ? (
              chatHistory.map((chat, index) => (
                <ListItem
                  key={index}
                  className=" flex flex-col my-8 text-black"
                >
                  <div className="py-2 px-4 dark:text-white">{chat.date}</div>
                  <div className="self-end bg-blue-300 rounded-lg py-2 px-4 my-2 max-w-xs">
                    {chat.question}
                  </div>
                  <div className="self-start bg-gray-200 rounded-lg py-2 px-4 my-2 max-w-xs">
                    {chat.answer}
                  </div>
                </ListItem>
              ))
            ) : (
              <ListItem>No chat history</ListItem>
            )}
          </List>
        </div>
        <div ref={formRef}>
          <form onSubmit={sendMessage}>
            <div className="flex gap-2 items-center">
              <TextInput
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="flex-grow"
                placeholder="Type your message here..."
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    sendMessage();
                  }
                }}
              />
              <Button type="submit" color="success">
                Send
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
