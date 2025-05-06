import React from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 max-w-4xl w-full text-center space-y-8">
        {/* Header */}
        <div className="space-y-4 animate-fade-in-down">
          <h1 className="text-5xl font-bold text-gray-800 mb-4 font-serif">
            <span className="text-blue-600">Resep</span>
            <span className="text-pink-500">In</span>
          </h1>
          <p className="text-xl text-gray-600">
            Platform cari resep untuk
            <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-2 my-1">
              <span className="bg-blue-100 px-3 py-1 rounded-full md:mx-2 text-blue-800 w-fit">
                🎓 Anak Kos
              </span>
              <span className="hidden md:inline">dan</span>
              <span className="md:hidden text-gray-500">dan</span>
              <span className="bg-pink-100 px-3 py-1 rounded-full md:mx-2 text-pink-800 w-fit">
                👩🍳 Ibu Rumah Tangga
              </span>
            </div>
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="text-green-600 text-3xl mb-4">🌿</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Cari bahan baku
            </h3>
            <p className="text-gray-600">
              Temukan bumbu yang sesuai dengan kebutuhanmu
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="text-orange-500 text-3xl mb-4">🍚</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Masakan khas Nusantara
            </h3>
            <p className="text-gray-600">
              Resep makanan dari berbagai daerah di Indonesia
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="text-yellow-500 text-3xl mb-4">👩🍳</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Cari ide memasak
            </h3>
            <p className="text-gray-600">
              Temukan resep yang sesuai dengan kebutuhanmu
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-8 space-y-4">
          <button
            onClick={() => navigate("/app")}
            className="bg-gradient-to-r from-blue-600 to-pink-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:scale-105 transition-transform shadow-md hover:shadow-lg"
          >
            Mulai Sekarang →
          </button>
          <p className="text-gray-500 text-sm mt-4">
            "Dengan ResepIn, masak jadi lebih mudah dan menyenangkan!"
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
