import React from "react";

const categories = [
  "🐓 Ayam",
  "🐟 Ikan",
  "🐐 Kambing",
  "🐄 Sapi",
  "🧈 Tahu",
  "🥚 Telur",
  "🍄 Tempe",
  "🦐 Udang",
];

const CategorySelector = ({
  selectedCategory,
  setSelectedCategory,
  setActiveMode,
}) => {
  const handleCategoryClick = (category) => {
    const cleanedCategory = category.replace(/[^a-zA-Z]/g, "");

    if (selectedCategory === cleanedCategory) {
      // Jika kategori yang sama diklik lagi, reset
      setSelectedCategory("");
      setActiveMode("general");
    } else {
      // Jika kategori berbeda, set kategori baru
      setSelectedCategory(cleanedCategory);
      setActiveMode("category_ingredients");
    }
  };

  return (
    <div className="flex mt-4 flex-wrap gap-2 w-full ">
      <div className="flex justify-center items-center flex-wrap gap-2">
        {categories.map((category) => {
          const cleanedCategory = category.replace(/[^a-zA-Z]/g, "");
          const isSelected = selectedCategory === cleanedCategory;

          return (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`px-3 py-2 sm:mb-1 mb-3 rounded-full text-sm flex items-center gap-2 
                transition-colors border ${
                  isSelected
                    ? "border-blue-500 bg-blue-50 text-blue-800"
                    : "border-gray-200 bg-white hover:bg-gray-50"
                }`}
            >
              {category}
              {isSelected}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategorySelector;
