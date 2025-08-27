import React from "react";

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex items-center py-20">
      <div className="mx-auto max-w-7xl px-6 w-full">
        <div className="text-center md:text-left max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Temukan{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Talenta Terbaik
            </span>{" "}
            Untuk Perusahaan Anda
          </h2>

          {/* Divider Accent */}
          <div className="mt-4 mb-6 w-20 h-1 bg-cyan-400 rounded-full mx-auto md:mx-0"></div>

          <p className="text-gray-300 text-lg leading-relaxed">
            Posting lowongan kerja Anda hari ini dan dapatkan kandidat berkualitas
            hanya dalam hitungan hari. Proses rekrutmen jadi lebih{" "}
            <span className="text-cyan-400 font-semibold">mudah</span>,{" "}
            <span className="text-cyan-400 font-semibold">cepat</span>, dan{" "}
            <span className="text-cyan-400 font-semibold">efisien</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
