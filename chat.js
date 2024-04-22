import React, { useState } from "react";
import { FaComments, FaPaperPlane, FaTimes } from "react-icons/fa";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      setChatHistory([
        ...chatHistory,
        { message: message.trim(), sender: "user" },
      ]);
      setMessage("");
    }
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="chat-widget-container">
      <button className="chat-widget-button" onClick={toggleModal}>
        <FaComments size={24} />
      </button>
      {isOpen && (
        <div className="chat-modal">
          <div className="chat-header">
            <span> How can I help you </span>
            <button className="close-button" onClick={handleCloseModal}>
              <FaTimes size={18} />
            </button>
          </div>
          <div className="chat-messages-container">
            <div className="chat-messages">
              {chatHistory.map((msg, index) => (
                <div
                  key={index}
                  className={`chat-message ${
                    msg.sender === "user" ? "user-message" : "admin-message"
                  }`}
                >
                  {msg.message}
                </div>
              ))}
            </div>
          </div>
          <div className="chat-input-container">
            <input
              type="text"
              value={message}
              onChange={handleMessageChange}
              placeholder="Type your message..."
              className="chat-input"
            />
            <button onClick={handleSendMessage} className="send-button">
              <FaPaperPlane size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
