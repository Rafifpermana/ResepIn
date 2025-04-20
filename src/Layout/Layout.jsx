import Header from "./Header";
import Footer from "./Footer";
import ChatWindow from "../components/ChatWindow";
const Layout = ({
  selectedCategory,
  setSelectedCategory,
  setActiveMode,
  messages,
  onSend,
  activeMode,
}) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header
        className="bg-white shadow-sm p-4 sticky top-0 z-10"
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        setActiveMode={setActiveMode}
      />

      <main className="flex-1 overflow-y-auto p-4">
        <div className="max-w-6xl mx-auto h-full">
          <ChatWindow messages={messages} />
        </div>
      </main>

      <Footer
        className="sticky bottom-0 bg-white border-t z-10"
        onSend={onSend}
        activeMode={activeMode}
        selectedCategory={selectedCategory}
      />
    </div>
  );
};

export default Layout;
