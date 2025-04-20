import ChatInput from "../components/ChatInput";

const Footer = ({ onSend, activeMode, selectedCategory, className }) => {
  return (
    <footer className={`bg-white border-t ${className ? className : ""}`}>
      <div className="max-w-6xl mx-auto">
        <ChatInput
          onSend={onSend}
          activeMode={activeMode}
          selectedCategory={selectedCategory}
        />
      </div>
    </footer>
  );
};

export default Footer;
