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

const Message = ({ sender, text, data }) => {
  return (
    <div
      className={`mb-6 flex ${
        sender === "user" ? "justify-end" : "justify-start"
      }`}
    >
      {sender === "bot" && <div className="mr-3">{botAvatar}</div>}
      <div
        className={`inline-block p-5 rounded-2xl max-w-3xl mb-6 shadow-lg ${
          sender === "user"
            ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white"
            : "bg-white border border-gray-200"
        }`}
        style={{ wordBreak: "break-word" }}
      >
        {data ? (
          <div className="space-y-5">
            <p className="text-sm text-gray-500 mb-4">{text}</p>

            {data.recommendations?.map((recipe, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg p-5 shadow-inner border border-gray-200"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {recipe.title}
                </h3>

                <div className="text-sm text-gray-600 mb-5">
                  <span className="font-semibold">Kategori:</span>{" "}
                  {recipe.category}
                </div>

                <details className="group mb-5">
                  <summary className="flex items-center cursor-pointer list-none font-semibold text-blue-600 hover:text-blue-700">
                    Bahan-bahan ({recipe.ingredients.length})
                    <span className="ml-2 transition-transform duration-300 group-open:rotate-180">
                      ▼
                    </span>
                  </summary>
                  <ul className="mt-4 pl-6 space-y-3 list-disc text-gray-700">
                    {recipe.ingredients.map((ingredient, idx) => (
                      <li key={idx}>{ingredient}</li>
                    ))}
                  </ul>
                </details>

                <details className="group">
                  <summary className="flex items-center cursor-pointer list-none font-semibold text-blue-600 hover:text-blue-700">
                    Langkah-langkah ({recipe.steps.length})
                    <span className="ml-2 transition-transform duration-300 group-open:rotate-180">
                      ▼
                    </span>
                  </summary>
                  <ol className="mt-4 pl-6 space-y-3 list-decimal text-gray-700">
                    {recipe.steps.map((step, idx) => (
                      <li key={idx}>{step}</li>
                    ))}
                  </ol>
                </details>
              </div>
            ))}
          </div>
        ) : (
          <div className="whitespace-pre-wrap">{text}</div>
        )}
      </div>
      {sender === "user" && <div className="ml-3">{userAvatar}</div>}
    </div>
  );
};

export default Message;
