// components/ChatInput/ChatInput.jsx
import React, { useState } from "react";

const ChatInput = ({ onSend, activeMode, selectedCategory }) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!validateInput()) return;
    onSend(input);
    setInput("");
  };

  const validateInput = () => {
    if (!input.trim()) {
      alert("Input bahan tidak boleh kosong!");
      return false;
    }

    if (activeMode === "category_ingredients" && !selectedCategory) {
      alert("Silakan pilih kategori terlebih dahulu!");
      return false;
    }

    return true;
  };

  return (
    <div className="bg-white p-4 border-t">
      <div className="max-w-6xl mx-auto relative">
        {activeMode === "category_ingredients" ? (
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-gray-600">
              <span className="font-medium">Kategori:</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                {selectedCategory}
              </span>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Contoh: jahe, tomat, bawang putih..."
                className="flex-1 border-2 border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
              <button
                onClick={handleSend}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
                Cari
              </button>
            </div>
          </div>
        ) : (
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Cari resep (contoh: tumis sawi tahu)..."
              className="flex-1 border-2 border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
            <button
              onClick={handleSend}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Cari
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatInput;
