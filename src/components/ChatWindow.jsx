// ChatWindow.jsx
import React from "react";
import Message from "./Message";

const ChatWindow = ({ messages }) => {
  return (
    <div className="space-y-6 pb-24">
      {messages.map((msg, index) => (
        <Message
          key={index}
          sender={msg.sender}
          text={msg.text}
          data={msg.data}
        />
      ))}
    </div>
  );
};

export default ChatWindow;
