import React from "react";

const categories = [
  "Ayam",
  "Ikan",
  "Kambing",
  "Sapi",
  "Tahu",
  "Telur",
  "Tempe",
  "Udang",
];

const CategoryDropdown = ({
  selectedCategory,
  setSelectedCategory,
  setActiveMode,
}) => {
  return (
    <div className="flex gap-4 items-center">
      <select
        value={selectedCategory}
        onChange={(e) => {
          setSelectedCategory(e.target.value);
          setActiveMode("category_ingredients");
        }}
        className="px-4 py-2 border-2 border-blue-500 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-300 w-64"
      >
        <option value="">Pilih Kategori</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      {selectedCategory && (
        <button
          onClick={() => {
            setSelectedCategory("");
            setActiveMode("general");
          }}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          Hapus
        </button>
      )}
    </div>
  );
};

export default CategoryDropdown;
