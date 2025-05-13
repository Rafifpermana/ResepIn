import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Landing from "./page/Landing";

function App() {
  const [messages, setMessages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [activeMode, setActiveMode] = useState("general");

  const sendMessage = async (input) => {
    // Tambahkan pesan user
    const userMessage = {
      sender: "user",
      text:
        activeMode === "category_ingredients"
          ? `Kategori: ${selectedCategory}, Bahan: ${input}`
          : input,
    };

    setMessages((prev) => [...prev, userMessage]);

    try {
      // Siapkan parameter request
      const requestBody = {
        mode: activeMode,
        page: 0, // Selalu mulai dari halaman 0
        ...(activeMode === "category_ingredients" && {
          category: selectedCategory.toLowerCase(),
          ingredients: input,
        }),
        ...(activeMode === "general" && { query: input }),
      };

      // Kirim request ke backend
      const response = await fetch(import.meta.env.VITE_BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...requestBody, top_n: 5 }),
      });

      const responseData = await response.json();

      // Tambahkan pesan bot
      const botMessage = {
        sender: "bot",
        text: response.ok
          ? `Menemukan ${responseData.recommendations?.length} resep`
          : "Error",
        data: response.ok ? responseData : null,
        requestParams: requestBody, // Simpan parameter awal
        pagination: response.ok ? responseData.pagination : null,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Koneksi ke server gagal" },
      ]);
    }
  };

  // Fungsi untuk memuat lebih banyak resep
  const loadMoreRecipes = async (messageIndex) => {
    const targetMessage = messages[messageIndex];

    // Validasi
    if (
      !targetMessage?.pagination ||
      targetMessage.pagination.current_page + 1 >=
        targetMessage.pagination.total_pages
    ) {
      return;
    }

    try {
      // Hitung halaman berikutnya
      const nextPage = targetMessage.pagination.current_page + 1;

      // Kirim request dengan parameter yang sama
      const response = await fetch(import.meta.env.VITE_BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...targetMessage.requestParams,
          page: nextPage,
          top_n: 5,
        }),
      });

      const newData = await response.json();

      // Update pesan yang spesifik
      setMessages((prev) =>
        prev.map((msg, idx) => {
          if (idx === messageIndex) {
            return {
              ...msg,
              data: {
                ...newData,
                recommendations: [
                  ...(msg.data?.recommendations || []),
                  ...newData.recommendations,
                ],
              },
              pagination: newData.pagination,
            };
          }
          return msg;
        })
      );
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Gagal memuat resep tambahan" },
      ]);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/app"
          element={
            <Layout
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              setActiveMode={setActiveMode}
              messages={messages}
              onSend={sendMessage}
              activeMode={activeMode}
              onLoadMore={loadMoreRecipes}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
