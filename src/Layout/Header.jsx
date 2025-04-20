import CategoryDropdown from "../components/CategoryDropdown";

const Header = ({
  selectedCategory,
  setSelectedCategory,
  setActiveMode,
  className,
}) => {
  return (
    <header className={`bg-white shadow-sm p-4 ${className ? className : ""}`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-600">ResepIn</h1>
        <CategoryDropdown
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          setActiveMode={setActiveMode}
        />
      </div>
    </header>
  );
};

export default Header;
