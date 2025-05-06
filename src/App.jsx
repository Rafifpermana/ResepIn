import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Landing from "./page/Landing";

function App() {
  const [messages, setMessages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [activeMode, setActiveMode] = useState("general");
  const [lastRequestParams, setLastRequestParams] = useState({});

  const sendMessage = async (input, isRetry = false) => {
    const userMessage = {
      sender: "user",
      text:
        activeMode === "category_ingredients"
          ? `Kategori: ${selectedCategory}, Bahan: ${input}`
          : input,
    };

    setMessages((prev) => [...prev, userMessage]);

    try {
      const body = {
        mode: activeMode,
        ...(activeMode === "category_ingredients" && {
          category: selectedCategory.toLowerCase(),
          ingredients: input,
        }),
        ...(activeMode === "general" && { query: input }),
      };

      if (!isRetry) setLastRequestParams(body);

      const response = await fetch("http://127.0.0.1:5000/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...body, top_n: 5 }),
      });

      const data = await response.json();

      const botMessage = {
        sender: "bot",
        text: response.ok
          ? `Menemukan ${data.recommendations?.length} resep`
          : "Error",
        data: response.ok ? data : null,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Koneksi ke server gagal",
        },
      ]);
    }
  };

  const retryLastRequest = async () => {
    if (!Object.keys(lastRequestParams).length) return;

    try {
      const response = await fetch("http://127.0.0.1:5000/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...lastRequestParams, top_n: 5 }),
      });

      const data = await response.json();

      const botMessage = {
        sender: "bot",
        text: response.ok
          ? `Menemukan ${data.recommendations?.length} resep baru`
          : "Error",
        data: response.ok ? data : null,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Koneksi ke server gagal",
        },
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
              onRetry={retryLastRequest}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
