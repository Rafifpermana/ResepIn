import React, { useState, useEffect } from "react";
import ChatWindow from "../components/ChatWindow";
import CategorySelector from "../components/CategorySelector";
import ChatInput from "../components/ChatInput";
import Hamburger from "hamburger-react";

const Layout = ({
  selectedCategory,
  setSelectedCategory,
  setActiveMode,
  messages,
  onSend,
  activeMode,
}) => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const checkMobileView = () => {
      setIsMobileView(window.innerWidth < 400);
      if (window.innerWidth >= 400) {
        setIsBurgerOpen(false);
      }
    };

    checkMobileView();
    window.addEventListener("resize", checkMobileView);
    return () => window.removeEventListener("resize", checkMobileView);
  }, []);

  const toggleBurger = () => {
    setIsBurgerOpen((prev) => !prev);
  };

  return (
    <div className="h-screen ">
      {/* Header */}
      <header className="w-full fixed top-0 inset-x-0 bg-white border-b">
        <div className="mx-auto p-4">
          <span className="text-2xl font-bold ">🍳 ResepIn</span>
        </div>
      </header>
      {/* Main Content */}
      <main className="p-4 h-full flex justify-center   items-center ">
        <div
          className={`w-full flex flex-col ${
            messages?.length > 0 ? "justify-between" : "justify-center"
          } pt-[50px] h-full`}
        >
          <ChatWindow messages={messages} />
          <div className="flex max-w-3xl mx-auto flex-col justify-center ">
            {!isMobileView && (
              <CategorySelector
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                setActiveMode={setActiveMode}
              />
            )}
            <div className="flex  items-center w-full max-w-3xl space-x-2">
              {isMobileView && (
                <Hamburger
                  size={15}
                  toggled={isBurgerOpen}
                  toggle={setIsBurgerOpen}
                />
              )}
              <ChatInput
                onSend={onSend}
                activeMode={activeMode}
                selectedCategory={selectedCategory}
              />
            </div>
            {isMobileView && isBurgerOpen && (
              <>
                {/* Backdrop */}
                <div
                  className="fixed inset-0 bg-black bg-opacity-50 z-20"
                  onClick={toggleBurger}
                />
                {/* Popup */}
                <div className="fixed top-1/2 left-1/2 z-30 w-11/12 max-w-sm -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-4 shadow-lg">
                  <CategorySelector
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    setActiveMode={setActiveMode}
                  />
                  <button
                    onClick={toggleBurger}
                    className="mt-4 w-full rounded-md bg-blue-500 text-white py-2 hover:bg-blue-600 transition"
                  >
                    Close
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
