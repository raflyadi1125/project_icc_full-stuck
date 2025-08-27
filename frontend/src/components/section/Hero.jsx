import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex items-center py-20">
      <div className="mx-auto max-w-7xl px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Temukan{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Talenta Terbaik
              </span>
            </h1>
            <p className="mt-6 text-gray-300 max-w-lg mx-auto md:mx-0 text-lg leading-relaxed">
              Posting lowongan kerja Anda hari ini dan dapatkan kandidat
              berkualitas hanya dalam hitungan hari. Mudah, cepat, dan efisien.
            </p>

            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-all">
                Post a Job
              </button>
              <button className="border border-gray-600 bg-gray-800/70 hover:bg-gray-700 px-8 py-3 rounded-lg font-semibold text-gray-200 transition-all">
                Browse Talent
              </button>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src="gambar.jpg"
              alt="gambar"
              className="w-[350px] md:w-[500px] lg:w-[600px] rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
