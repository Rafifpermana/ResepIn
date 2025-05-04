import React from "react";
import Message from "./Message";

const ChatWindow = ({ messages }) => {
  return (
    <div className="w-full space-y-4 overflow-y-auto">
      {messages.length === 0 ? (
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <span className="text-heading-2 font-heading-2 text-default-font text-center">
            👋 Halo, Selamat Datang di ResepIn
          </span>
          <span className="text-heading-3 font-heading-3 text-default-font text-center mb-5">
            Masak apa hari ini?
          </span>
        </div>
      ) : (
        <div className="space-y-4 p-4 sm:p-6   scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-gray-100">
          {messages.map((msg, index) => (
            <Message
              key={index}
              sender={msg.sender}
              text={msg.text}
              data={msg.data}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ChatWindow;
