import React from 'react';

// Asumsi Anda memiliki App.css yang mendefinisikan animasi ini,
// atau Anda bisa menambahkannya ke file CSS global Anda.
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


function About() {
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
            className="text-emerald-600 border-orange-500 pb-1 font-medium transition-all duration-300 ease-in-out border-b-2" /* Aktif */
          >
            Tentang Kami
          </a>
          <a
            href="/edukasi"
            className="text-gray-600 border-transparent hover:text-teal-700 hover:border-orange-500 pb-1 font-medium transition-all duration-300 ease-in-out border-b-2" /* Inaktif */
          >
            Edukasi
          </a>
        </div>
        <button className="bg-emerald-500 text-white px-5 py-2.5 rounded-lg hover:bg-emerald-600 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg">
          Selamat Datang
        </button>
      </nav>

      {/* Konten Utama */}
      <div className="w-full px-6 md:px-12 lg:px-20 py-16 text-gray-800">
        <div className="max-w-screen-lg mx-auto"> {/* Kontainer untuk membatasi lebar konten */}
          <header className="text-center mb-16 animate-fadeInUp"> {/* Animasi untuk header */}
            <h1 className="text-5xl font-extrabold mb-3 text-teal-700"> {/* Ukuran dan warna judul ditingkatkan */}
              Tentang <span className="text-emerald-500">Kami</span>
            </h1>
            <p className="text-xl text-gray-600">
              Mengenal lebih dekat <span className="text-emerald-600 font-semibold">Trash Scan</span>
            </p>
          </header>

          {/* Wrapper untuk konten teks dengan gaya kartu */}
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-2xl space-y-10 animate-fadeInUp" style={{animationDelay: '0.2s'}}>

            <section className="animate-fadeInUp" style={{animationDelay: '0.3s'}}>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Selamat datang di <strong className="text-emerald-600">Trash Scan</strong>, platform pintar berbasis AI yang membantu Anda mengidentifikasi jenis sampah dengan cepat dan akurat.
                Kami hadir untuk mendorong kesadaran lingkungan dengan mempermudah proses klasifikasi sampah daur ulang.
                Dengan <strong className="text-emerald-600">Trash Scan</strong>, setiap orang bisa berkontribusi pada keberlanjutan bumi melalui tindakan sederhana namun berdampak besar.
              </p>
            </section>

            {/* Menggunakan grid untuk layout Misi & Visi jika bersebelahan, atau tumpuk dengan space-y */}
            <div className="grid md:grid-cols-2 gap-10">
              <section className="animate-fadeInUp" style={{animationDelay: '0.4s'}}> {/* Removed text-left from section */}
                <h2 className="text-3xl font-bold text-teal-600 mb-4 border-l-4 border-emerald-500 pl-3 text-center">Misi Kami</h2> {/* Added text-center */}
                <p className="text-gray-700 mb-3 text-lg text-center">Kami berkomitmen untuk:</p> {/* Added text-center */}
                <ul className="list-none space-y-3 text-left"> {/* Added text-left to ul */}
                  {[
                    "Mendorong kesadaran masyarakat terhadap pentingnya pemilahan sampah.",
                    "Menyediakan teknologi klasifikasi sampah berbasis AI yang mudah diakses oleh semua kalangan.",
                    "Meningkatkan efisiensi proses daur ulang melalui identifikasi jenis sampah secara instan.",
                    "Mendukung pelestarian lingkungan dan pengurangan limbah yang mencemari bumi."
                  ].map((item, index) => (
                    <li key={index} className="flex items-start text-lg text-gray-700 leading-relaxed">
                      <svg className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="animate-fadeInUp" style={{animationDelay: '0.5s'}}>
                <h2 className="text-3xl font-bold text-teal-600 mb-4 border-l-4 border-emerald-500 pl-3">Visi Kami</h2>
                <p className="text-lg leading-relaxed text-gray-700 italic bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-300"> {/* Gaya kutipan untuk visi */}
                  "Menjadi platform terdepan dalam edukasi dan klasifikasi sampah yang berkontribusi nyata terhadap lingkungan berkelanjutan."
                </p>
              </section>
            </div>


            <section className="animate-fadeInUp" style={{animationDelay: '0.6s'}}>
              <h2 className="text-3xl font-bold text-teal-600 mb-6 border-l-4 border-emerald-500 pl-3">Mengapa Memilih Kami?</h2>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-6"> {/* Grid untuk poin-poin */}
                {[
                  { title: "Berbasis AI", description: "Didukung teknologi Machine Learning untuk klasifikasi 5 jenis sampah secara otomatis." },
                  { title: "Akses Mudah", description: "Cukup unggah gambar atau gunakan kamera — tanpa instalasi tambahan." },
                  { title: "Edukasi Lingkungan", description: "Membantu masyarakat mengenal jenis sampah dan cara penanganannya." },
                  { title: "Dukung Daur Ulang", description: "Memberi rekomendasi hasil daur ulang dari jenis sampah yang terdeteksi." }
                ].map((item, index) => (
                  <div key={index} className="bg-slate-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <h3 className="text-xl font-semibold text-emerald-600 mb-2">{item.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="animate-fadeInUp" style={{animationDelay: '0.7s'}}>
              <h2 className="text-3xl font-bold text-teal-600 mb-4 border-l-4 border-emerald-500 pl-3">Hubungi Kami</h2>
              <p className="text-lg leading-relaxed text-gray-700">
                Kami terbuka untuk pertanyaan, masukan, atau kolaborasi lingkungan.
                Jangan ragu menghubungi kami melalui email atau media sosial yang tersedia di platform Trash Scan. Kunjungi bagian footer untuk detail kontak.
              </p>
            </section>
          </div>
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
            </div>
          </div>
          <div className="text-sm">
            <h3 className="font-semibold mb-3 text-gray-800">Kontak Kami</h3>
            <div className="flex items-center gap-3 mb-2">
              <img src="/mail.svg" alt="email" className="w-5 h-5 text-emerald-600" />
              <a href="mailto:trashscan@gmail.com" className="hover:text-emerald-600 transition-colors duration-200 ease-in-out">trashscan@gmail.com</a> {/* Membuat email bisa diklik */}
            </div>
            <div className="flex items-center gap-3">
              <img src="/instagram.svg" alt="ig" className="w-5 h-5 text-emerald-600" />
              <a href="#" className="hover:text-emerald-600 transition-colors duration-200 ease-in-out">@trashscan.id</a> {/* Asumsi link placeholder */}
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

export default About;