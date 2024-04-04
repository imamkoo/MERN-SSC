import { Button, List, ListItem, Modal, TextInput } from "flowbite-react";
import { useEffect, useRef, useState } from "react";
import { FaEraser } from "react-icons/fa";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { RingLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
};

const ChatApp = () => {
  const [inputText, setInputText] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchChatHistory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    formRef.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  }, [chatHistory]);

  const fetchChatHistory = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("/api/chatbot/history", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error(
          `Failed to fetch chat history: ${response.status} ${response.statusText}`
        );
      }
      const data = await response.json();
      setChatHistory(data);
    } catch (error) {
      console.error("Error fetching chat history:", error);
      setShowModal(true);
    } finally {
      setLoading(false);
    }
  };

  const sendMessage = async () => {
    try {
      const token = localStorage.getItem("token");
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
      const token = localStorage.getItem("token");
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

  const handleModalClose = () => {
    setShowModal(false);
    navigate("/");
  };
  const handleModalSignin = () => {
    setShowModal(false);
    navigate("/sign-in");
  };
  const handleModalSignup = () => {
    setShowModal(false);
    navigate("/sign-up");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 mt-16">
      {loading && (
        <RingLoader
          color={"#123abc"}
          loading={loading}
          css={override}
          size={50}
        />
      )}
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 opacity- backdrop-blur-3xl z-50"></div>
      )}
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
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage();
            }}
          >
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

      <Modal show={showModal} onClose={handleModalClose} popup size="md">
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto" />
            <h3 className="mb-5 text-lg text-gray-500 dark:text-gray-400">
              You must login to access chatbot!
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={handleModalSignup}>
                Sign Up
              </Button>
              <Button color="success" onClick={handleModalSignin}>
                Sign In
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ChatApp;
