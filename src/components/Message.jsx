import React from "react";

const Message = ({ sender, text, data }) => {
  return (
    <div className={`mb-6 ${sender === "user" ? "pr-4" : "pl-4"} clear-both`}>
      <div
        className={`inline-block p-4 rounded-xl max-w-3xl mb-6 ${
          sender === "user"
            ? "bg-blue-600 text-white float-right"
            : "bg-white border-2 border-gray-100 shadow-sm float-left"
        }`}
      >
        {data ? (
          <div className="space-y-4">
            <p className="text-sm text-gray-400 mb-3">{text}</p>

            {data.recommendations?.map((recipe, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {recipe.title}
                </h3>

                <div className="text-sm text-gray-500 mb-4">
                  <span className="font-medium">Kategori:</span>{" "}
                  {recipe.category}
                </div>

                <details className="group mb-4">
                  <summary className="flex items-center cursor-pointer list-none">
                    <span className="text-blue-600 hover:text-blue-700 font-medium">
                      Bahan-bahan ({recipe.ingredients.length})
                    </span>
                    <span className="ml-2 transition-transform duration-300 group-open:rotate-180">
                      ▼
                    </span>
                  </summary>
                  <ul className="mt-3 pl-5 space-y-2">
                    {recipe.ingredients.map((ingredient, idx) => (
                      <li
                        key={idx}
                        className="text-gray-600 before:content-['•'] before:mr-2 before:text-blue-500"
                      >
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </details>

                <details className="group">
                  <summary className="flex items-center cursor-pointer list-none">
                    <span className="text-blue-600 hover:text-blue-700 font-medium">
                      Langkah-langkah ({recipe.steps.length})
                    </span>
                    <span className="ml-2 transition-transform duration-300 group-open:rotate-180">
                      ▼
                    </span>
                  </summary>
                  <ol className="mt-3 pl-5 space-y-2">
                    {recipe.steps.map((step, idx) => (
                      <li
                        key={idx}
                        className="text-gray-600 before:content-[counter(step)] before:mr-3 before:font-medium before:text-blue-500"
                        style={{ counterIncrement: "step" }}
                      >
                        {step}
                      </li>
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
    </div>
  );
};

export default Message;
