import React from "react";

const userAvatar = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 rounded-full bg-blue-600 text-white p-1"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.121 17.804A9 9 0 1118.88 6.196 9 9 0 015.12 17.804z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const botAvatar = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 rounded-full bg-gray-300 text-gray-600 p-1"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4v1m0 14v1m8-8h1M4 12H3m15.364-6.364l.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707"
    />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const Message = ({ sender, text, data, onRetry }) => {
  return (
    <div
      className={`mb-6 flex ${
        sender === "user" ? "justify-end" : "justify-start"
      }`}
    >
      {/* Avatar */}
      {sender === "bot" && (
        <div className="mr-3 hidden sm:block">{botAvatar}</div>
      )}

      {/* Message Bubble */}
      <div
        className={`inline-block p-4 rounded-2xl max-w-full sm:max-w-3xl mb-4 shadow-lg ${
          sender === "user"
            ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white"
            : "bg-white border border-gray-200"
        }`}
      >
        {data ? (
          <div className="space-y-4">
            {/* Header - Mobile vs Desktop */}
            <div className="bg-orange-50 p-3 sm:p-4 rounded-lg">
              <h2 className="text-xl sm:text-2xl font-bold text-orange-600">
                🍲 {text}
              </h2>
            </div>

            {data.recommendations?.map((recipe, index) => (
              <div key={index} className="p-3 sm:p-4 border-b last:border-b-0">
                {/* Recipe Header */}
                <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="bg-yellow-100 p-1 sm:p-2 rounded-full">
                    <span className="text-lg sm:text-xl">🍳</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                      {recipe.title}
                    </h3>
                    <div className="badge bg-green-100 text-green-600 text-xs sm:text-sm mt-1">
                      #{recipe.category}
                    </div>
                  </div>
                </div>

                {/* Accordion - Responsive */}
                <details className="group">
                  <summary className="list-none cursor-pointer bg-gray-50 p-2 sm:p-3 rounded-lg">
                    <div className="flex items-center justify-between text-sm sm:text-base">
                      <div className="flex items-center">
                        <span className="mr-2">📋</span>
                        Bahan & Cara ({recipe.ingredients.length} bahan,{" "}
                        {recipe.steps.length} langkah)
                      </div>
                      <span className="transform transition-transform group-open:rotate-180">
                        ▼
                      </span>
                    </div>
                  </summary>

                  {/* Content - Responsive */}
                  <div className="mt-2 sm:mt-3 space-y-3 sm:space-y-4">
                    {/* Bahan */}
                    <div className="bg-white p-2 sm:p-3 rounded border">
                      <div className="flex items-center mb-1 sm:mb-2">
                        <span className="text-green-500 mr-1 sm:mr-2">🛒</span>
                        <h4 className="text-sm sm:text-base font-medium">
                          Bahan-bahan:
                        </h4>
                      </div>
                      <ul className="list-disc pl-4 sm:pl-6 text-xs sm:text-sm space-y-1 sm:space-y-2">
                        {recipe.ingredients.map((ingredient, idx) => (
                          <li key={idx}>{ingredient}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Langkah */}
                    <div className="bg-white p-2 sm:p-3 rounded border">
                      <div className="flex items-center mb-1 sm:mb-2">
                        <span className="text-blue-500 mr-1 sm:mr-2">👩🍳</span>
                        <h4 className="text-sm sm:text-base font-medium">
                          Cara Membuat:
                        </h4>
                      </div>
                      <ol className="list-decimal pl-4 sm:pl-6 text-xs sm:text-sm space-y-1 sm:space-y-2">
                        {recipe.steps.map((step, idx) => (
                          <li key={idx}>{step}</li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </details>
              </div>
            ))}

            {/* Tombol - Responsive */}
            <button
              onClick={onRetry}
              className="w-full sm:w-auto py-2 px-4 bg-orange-100 text-orange-600 rounded-full text-sm sm:text-base hover:bg-orange-200 transition-colors flex items-center justify-center gap-2"
            >
              <span>Lihat Resep Lainnya</span>
              <span className="text-xl">🥘</span>
            </button>
          </div>
        ) : (
          <div className="whitespace-pre-wrap text-sm sm:text-base">{text}</div>
        )}
      </div>

      {sender === "user" && (
        <div className="ml-3 hidden sm:block">{userAvatar}</div>
      )}
    </div>
  );
};

export default Message;
