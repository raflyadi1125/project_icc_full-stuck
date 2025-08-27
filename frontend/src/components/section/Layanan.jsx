export default function Layanan() {
  const services = [
    {
      title: "Rekrutmen Cepat",
      desc: "Temukan kandidat terbaik hanya dalam hitungan hari.",
      icon: <i class="ri-flashlight-line"></i>,
    },
    {
      title: "Talenta Terverifikasi",
      desc: "Semua kandidat sudah melewati tahap seleksi awal.",
      icon: <i class="ri-check-line"></i>,
    },
    {
      title: "Hemat Biaya",
      desc: "Proses rekrutmen lebih murah dan efisien.",
      icon: <i class="ri-money-dollar-circle-line"></i>,
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b to-gray-800 from-gray-900 text-black">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-400">Layanan Kami</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((srv, i) => (
            <div key={i} className="p-6 rounded-2xl shadow-lg hover:shadow-2xl transition bg-gray-100">
              <div className="text-4xl mb-4">{srv.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{srv.title}</h3>
              <p className="text-gray-600">{srv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
