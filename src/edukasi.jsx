import React from 'react';

// Asumsi Anda memiliki App.css atau index.css yang mendefinisikan animasi ini:
// @keyframes fadeIn {
//   from { opacity: 0; transform: translateY(10px); }
//   to { opacity: 1; transform: translateY(0); }
// }
// .animate-fadeIn {
//   animation: fadeIn 0.7s ease-out forwards;
// }
// @keyframes fadeInUp {
//   from { opacity: 0; transform: translateY(20px); }
//   to { opacity: 1; transform: translateY(0); }
// }
// .animate-fadeInUp {
//   animation: fadeInUp 0.8s ease-out forwards;
// }

// Komponen ikon sederhana (bisa diganti dengan SVG/gambar yang lebih detail)
// const IconRecycle = () => (
//   <svg className="w-12 h-12 text-emerald-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0zM2.81 8.81L5.64 6m12.72 0l-2.83 2.81M12 22V18"></path>
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16H5m14 0h-2M12 18a6 6 0 006-6H6a6 6 0 006 6z"></path>
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 10l-4-4-4 4"></path>
//   </svg>
// );

// IconLightBulb tidak digunakan lagi, bisa dihapus atau dibiarkan jika ada penggunaan lain di masa depan.
// Untuk saat ini, saya akan menghapusnya karena sudah digantikan.
// const IconLightBulb = () => (
//   <svg className="w-12 h-12 text-yellow-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m12.728 0l-.707.707M12 21v-1m0-16a4 4 0 00-4 4h8a4 4 0 00-4-4z"></path>
//   </svg>
// );

const IconGlobe = () => (
  <svg className="w-12 h-12 text-blue-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.737 16.95l.01-.01M3.055 11a10.001 10.001 0 0117.89 0M12 21a9.012 9.012 0 01-7.21-3.592M12 3a9.012 9.012 0 017.21 3.592"></path>
  </svg>
);


function Edukasi() {
  const benefits = [
    {
      icon: <img src="/droplet.svg" alt="Menjaga Lingkungan" className="w-12 h-12 mb-4"/>,
      title: "Menjaga Lingkungan",
      description: "Mengurangi jumlah sampah yang berakhir di TPA, mengurangi polusi tanah, air, dan udara. Daur ulang membantu menghemat sumber daya alam karena bahan baku dapat digunakan kembali.",
      delay: '0.3s'
    },
    {
      icon: <img src="/seedling2.svg" alt="Menghemat Energi" className="w-12 h-12 mb-4"/>,
      title: "Menghemat Energi",
      description: "Memproduksi barang dari bahan daur ulang membutuhkan energi yang jauh lebih sedikit dibandingkan memproduksi dari bahan mentah. Misalnya, daur ulang aluminium menghemat hingga 95% energi.",
      delay: '0.4s'
    },
    {
      icon: <img src="/bulb.svg" alt="Manfaat Ekonomi" className="w-12 h-12 mb-4" />, // MODIFIED ICON HERE
      title: "Manfaat Ekonomi",
      description: "Menciptakan lapangan kerja di industri daur ulang dan pengolahan sampah. Selain itu, dapat mengurangi biaya pengadaan bahan baku bagi produsen.",
      delay: '0.5s'
    }
  ];

  const tips = [
    { text: "Pisahkan sampah organik, anorganik, dan B3 (Bahan Berbahaya dan Beracun) di rumah.", delay: '0.2s' },
    { text: "Cari tahu jenis sampah apa saja yang diterima oleh fasilitas daur ulang di daerah Anda.", delay: '0.3s' },
    { text: "Bersihkan kemasan bekas makanan atau minuman sebelum didaur ulang.", delay: '0.4s' },
    { text: "Gunakan kembali (reuse) barang yang masih layak pakai sebelum dibuang.", delay: '0.5s' },
    { text: "Ajak keluarga dan teman untuk ikut mendaur ulang.", delay: '0.6s' }
  ];

  return (
    <div className="min-h-screen font-sans">
      {/* Navbar */}
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md shadow-sm flex justify-between items-center py-4 px-8">
        <div className="flex items-center space-x-2">
          <img src="/logo4.svg" alt="logo" className="w-8 h-8" />
          <span className="text-xl font-semibold text-emerald-700">Trash Scan</span>
        </div>
        <div className="space-x-4"> {/* Konsisten menggunakan space-x-4 */}
          <a
            href="/"
            className="text-gray-600 border-transparent hover:text-teal-700 hover:border-orange-500 pb-1 font-medium transition-all duration-300 ease-in-out border-b-2" /* Inaktif */
          >
            Beranda
          </a>
          <a
            href="/about"
            className="text-gray-600 border-transparent hover:text-teal-700 hover:border-orange-500 pb-1 font-medium transition-all duration-300 ease-in-out border-b-2"
          >
            Tentang Kami
          </a>
          <a
            href="/edukasi"
            className="text-emerald-600 border-orange-500 pb-1 font-medium transition-all duration-300 ease-in-out border-b-2" /* Aktif */
          >
            Edukasi
          </a>
        </div>
        <button className="bg-emerald-500 text-white px-5 py-2.5 rounded-lg hover:bg-emerald-600 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg">
          Selamat Datang
        </button>
      </nav>

      {/* Konten Utama Edukasi */}
      <div className="w-full px-6 md:px-12 lg:px-20 py-16 text-gray-800">
        <div className="max-w-screen-lg mx-auto">
          <header className="text-center mb-16 animate-fadeInUp">
            <h1 className="text-5xl font-extrabold mb-4 text-teal-700">
              Mengapa <span className="text-emerald-500">Daur Ulang</span> Itu Penting?
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Daur ulang bukan hanya tren, tapi kebutuhan. Mari kita pahami bersama dampak positifnya bagi bumi dan generasi mendatang.
            </p>
          </header>

          <section className="mb-20">
            <h2 className="text-3xl font-bold text-teal-600 mb-10 text-center animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              Manfaat Luar Biasa dari Daur Ulang
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-2 animate-fadeInUp flex flex-col items-center text-center"
                  style={{ animationDelay: benefit.delay }}
                >
                  {benefit.icon}
                  <h3 className="text-2xl font-semibold text-emerald-600 mb-3">{benefit.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-emerald-500 text-white p-10 md:p-16 rounded-xl shadow-xl animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <h2 className="text-4xl font-bold mb-8 text-center">
              Mulai <span className="border-b-4 border-yellow-400">Sekarang</span>, Langkah Kecil Dampak Besar!
            </h2>
            <ul className="space-y-6 max-w-2xl mx-auto">
              {tips.map((tip, index) => (
                <li
                  key={index}
                  className="flex items-start text-lg leading-relaxed animate-fadeInUp opacity-0" // Opacity 0 ditambahkan agar animasi fadeIn bekerja
                  style={{ animationDelay: `${0.7 + index * 0.15}s`, animationFillMode: 'forwards' }} // animationFillMode ditambahkan
                >
                  <svg className="w-7 h-7 text-yellow-400 mr-4 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  {/* Perubahan di sini: membungkus teks dengan span dan menambahkan text-left */}
                  <span className="text-left">{tip.text}</span>
                </li>
              ))}
            </ul>
            <div className="text-center mt-10 animate-fadeInUp" style={{ animationDelay: `${0.7 + tips.length * 0.15 + 0.2}s`, animationFillMode: 'forwards' }}> {/* animationFillMode ditambahkan */}
              <button className="bg-yellow-400 text-emerald-700 font-semibold px-8 py-3 rounded-lg hover:bg-yellow-300 transition-all duration-300 ease-in-out transform hover:scale-105 text-lg shadow-md hover:shadow-lg">
                Pelajari Lebih Lanjut (Contoh)
              </button>
            </div>
          </section>

        </div>
      </div>

      {/* Footer */}
      <footer className="border-t pt-12 pb-8 px-6 bg-white text-gray-700 mt-16">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <img src="/logo4.svg" alt="logo" className="w-9 h-9" />
              <span className="text-xl font-semibold text-emerald-700">Trash Scan</span>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 text-gray-600">
              <a href="/" className="hover:text-emerald-600 transition-colors duration-200 ease-in-out">Beranda</a>
              <a href="/about" className="hover:text-emerald-600 transition-colors duration-200 ease-in-out">Tentang Kami</a>
              <a href="/edukasi" className="hover:text-emerald-600 transition-colors duration-200 ease-in-out">Edukasi</a>
            </div>
          </div>
          <div className="text-sm">
            <h3 className="font-semibold mb-3 text-gray-800">Kontak Kami</h3>
            <div className="flex items-center gap-3 mb-2">
              <img src="/mail.svg" alt="email" className="w-5 h-5 text-emerald-600" />
              <a href="mailto:trashscan@gmail.com" className="hover:text-emerald-600 transition-colors duration-200 ease-in-out">trashscan@gmail.com</a>
            </div>
            <div className="flex items-center gap-3">
              <img src="/instagram.svg" alt="ig" className="w-5 h-5 text-emerald-600" />
              <a href="#" className="hover:text-emerald-600 transition-colors duration-200 ease-in-out">@trashscan.id</a>
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-gray-500 mt-12 mb-4">
          © {new Date().getFullYear()} Trash Scan, All rights reserved
        </div>
      </footer>
    </div>
  );
}

export default Edukasi;