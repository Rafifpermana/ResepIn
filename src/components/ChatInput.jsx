import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ChatInput = ({ onSend, activeMode, selectedCategory }) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!validateInput()) return;
    onSend(input);
    setInput("");
  };

  const validateInput = () => {
    if (!input.trim()) {
      alert("Silakan tulis bahan yang ingin dicari 😊");
      return false;
    }

    if (activeMode === "category_ingredients" && !selectedCategory) {
      alert("Pilih kategori dulu yuk! 🥦");
      return false;
    }

    return true;
  };

  return (
    <div className="w-full sm:mb-2 sm:mt-2">
      <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-2">
        <input
          type="text"
          className="w-full bg-transparent h-3 px-3 py-2 focus:outline-none min-h-[40px]"
          placeholder={
            activeMode === "category_ingredients"
              ? "Masukkan bahannya"
              : "Cari resep (contoh: sop ayam, tumis sayur)..."
          }
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="p-2 aspect-square bg-blue-500 text-white rounded-full hover:bg-blue-600"
        >
          <FaArrowUp />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
