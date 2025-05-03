"use client";

import React from "react";
import ChatWindow from "../components/ChatWindow";
import CategorySelector from "../components/CategorySelector";
import ChatInput from "../components/ChatInput";

const Layout = ({
  selectedCategory,
  setSelectedCategory,
  setActiveMode,
  messages,
  onSend,
  activeMode,
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full border-b">
        <div className=" mx-auto p-4">
          <span className="text-2xl font-bold">🍳 ResepIn</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-4">
        <div className="  h-[calc(100vh-100px)] flex-col w-full   flex items-center justify-center ">
          <div className="w-full ">
            <ChatWindow messages={messages} />
            <div className="flex max-w-3xl mx-auto flex-col justify-center items-center">
              <ChatInput
                onSend={onSend}
                activeMode={activeMode}
                selectedCategory={selectedCategory}
              />
              <CategorySelector
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                setActiveMode={setActiveMode}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
