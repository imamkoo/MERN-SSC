import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchChatHistory, sendMessage } from "../redux/chat/chatSlice";

const Chat = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const chatHistory = useSelector((state) => state.chat.history);

  useEffect(() => {
    dispatch(fetchChatHistory()); // Fetch chat history when component mounts
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendMessage(message));
    setMessage("");
  };

  return (
    <div>
      <h1>Chat</h1>
      <div>
        {chatHistory.map((chat, index) => (
          <div key={index}>
            <p>{chat.question}</p>
            <p>{chat.answer}</p>
            <p>{chat.date}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
