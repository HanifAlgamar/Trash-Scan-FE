import React, { useState, useRef } from 'react';
import Webcam from "react-webcam";
import './App.css'; // Pastikan file App.css Anda ada dan mungkin berisi animasi seperti animate-fadeIn
import axios from 'axios';
import daurdata from "./daur.json";

const videoConstraints = {
  facingMode: "user", // kamera depan
};

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setResult(null);
    setError(null); // Hapus error saat file baru dipilih
  };

  const uploadRef = useRef(null);
  const scrollToUpload = () => {
    uploadRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleUpload = async () => {
  if (!selectedFile) {
  setError('Silakan masukkan atau ambil gambar terlebih dahulu.');
  return;
  }


    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('https://hanifalgamar-trash-scan.hf.space/', formData);
      setResult(response.data);
      setError(null); // Hapus error jika upload berhasil
      setIsOpen(true); // buka popup setelah berhasil
    } catch (err) { 
      setError('Gagal melakukan klasifikasi. Silakan coba lagi.');
      console.error(err);
    }
  };

  const [kameraAktif, setKameraAktif] = useState(false);
  const webcamRef = useRef(null);

  const ambilFoto = () => {
    const screenshot = webcamRef.current.getScreenshot();
    if (screenshot) {
      const byteString = atob(screenshot.split(',')[1]);
      const mimeString = screenshot.split(',')[0].split(':')[1].split(';')[0];
      const ab = new ArrayBuffer(byteString.length);
      const ia = new Uint8Array(ab);
      for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      const blob = new Blob([ab], { type: mimeString });
      const file = new File([blob], "captured-image.jpg", { type: mimeString });
      setSelectedFile(file);
      setKameraAktif(false);
      setResult(null); 
      setError(null); // Hapus error saat foto diambil
    }
  };

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
            className="text-emerald-600 border-orange-500 pb-1 font-medium transition-all duration-300 ease-in-out border-b-2" /* Aktif */
          >
            Beranda
          </a>
          <a
            href="/about"
            className="text-gray-600 border-transparent hover:text-teal-700 hover:border-orange-500 pb-1 font-medium transition-all duration-300 ease-in-out border-b-2" /* Inaktif */
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

      {/* Hero Section */}
      <div className="flex flex-col-reverse gap-10 lg:flex-row justify-between items-center px-8 py-24">
        <div className="lg:w-1/2 space-y-7 text-left max-w-[700px]">
          <h1 className="text-7xl font-bold text-teal-600 leading-tight animate-fadeIn">
            Garbage <br /> Classification
          </h1>
          <p className="text-2xl font-semibold text-gray-800">
            Klasifikasi 5 jenis sampah dengan <br /> Machine Learning End-to-End.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Website yang dapat mengintegrasikan model Machine Learning Image Classification untuk klasifikasi 5 jenis sampah yaitu Plastic, Battery, Clothes, Biological, dan Metal secara End-to-End bagi pengguna.
          </p>
          <button
            onClick={scrollToUpload}
            className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl text-lg font-medium"
          >
            Mulai Sekarang
          </button>
        </div>

        <div className="lg:w-1/2 flex justify-center relative mt-10 lg:mt-0">
          <div className="max-w-[640px] max-h-[375px] rounded-xl shadow-2xl flex items-center justify-center overflow-hidden">
            <div className="border-8 border-white rounded-lg overflow-hidden">
              <video
                autoPlay
                loop
                muted
                className="plain-video w-full h-full object-cover" // pastikan styling video
                src={"/sampah.mp4"}
              />
            </div>
          </div>
        </div>
      </div>


      {/* Cara Kerja Section */}
      <div className="flex flex-col items-center justify-center mt-36 mb-20 py-16 bg-white rounded-xl shadow-lg mx-4 md:mx-8">
        <h2 className="text-4xl font-bold text-center mb-4">
          Bagaimana kerja <span className="text-teal-600">Trash Scan AI</span>?
        </h2>
        <p className="text-gray-600 mt-2 text-center text-lg mb-12">Lakukan klasifikasi dalam tiga langkah mudah</p>

        <div className="flex flex-col lg:flex-row gap-8 mt-10">
          <div className="flex flex-col items-center bg-white border border-gray-200 rounded-xl p-8 shadow-md transition-all duration-300 max-w-xs hover:border-emerald-500 hover:shadow-xl hover:scale-105 transform">
            <div className="bg-emerald-100 text-emerald-600 rounded-full p-5 mb-5 transition-transform duration-300 transform group-hover:scale-110">
              <img src="/upload-icon.svg" alt="Upload Gambar" className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Unggah Gambar</h3>
            <p className="text-gray-600 text-center">Pilih atau ambil gambar sampah untuk diidentifikasi.</p>
          </div>

          <div className="flex flex-col items-center bg-white border border-gray-200 rounded-xl p-8 shadow-md transition-all duration-300 max-w-xs hover:border-emerald-500 hover:shadow-xl hover:scale-105 transform">
            <div className="bg-emerald-100 text-emerald-600 rounded-full p-5 mb-5 transition-transform duration-300 transform group-hover:scale-110">
              <img src="/object-scan.svg" alt="Analisis AI" className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Analisis AI</h3>
            <p className="text-gray-600 text-center">Lakukan analisis gambar dengan AI untuk mendapatkan hasil klasifikasi.</p>
          </div>

          <div className="flex flex-col items-center bg-white border border-gray-200 rounded-xl p-8 shadow-md transition-all duration-300 max-w-xs hover:border-emerald-500 hover:shadow-xl hover:scale-105 transform">
            <div className="bg-emerald-100 text-emerald-600 rounded-full p-5 mb-5 transition-transform duration-300 transform group-hover:scale-110">
              <img src="/check.svg" alt="Dapatkan Hasil" className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Dapatkan Hasil</h3>
            <p className="text-gray-600 text-center">Anda akan mendapatkan hasil klasifikasi beserta hasil daur ulang.</p>
          </div>
        </div>
      </div>

      {/* Section Keuntungan */}
      <div className="flex flex-col items-center mt-24 justify-center my-20 px-4">
        <div className="w-full max-w-6xl text-center">
          <h2 className="text-4xl font-bold mb-3">
            Mengapa Memilih <span className="text-teal-600">Trash Scan</span>?
          </h2>
          <p className="text-gray-600 mb-12 text-lg">
            Alasan menggunakan AI klasifikasi sampah
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl gap-12">
          <div className="flex flex-col gap-6 w-full lg:w-1/2">
            {[
              { icon: "/trash-icon-green.svg", text: "Umumnya sampah biological, plastik, dan metal dibuang ke dalam tong warna hijau", borderColor: "hover:border-green-500" },
              { icon: "/trash-icon-red.svg", text: "Umumnya sampah battery dibuang ke dalam tong warna merah", borderColor: "hover:border-red-500" },
              { icon: "/trash-icon-yellow.svg", text: "Umumnya sampah clothes dibuang ke dalam tong warna kuning", borderColor: "hover:border-yellow-500" }
            ].map((item, index) => (
              <div key={index} className={`flex items-center gap-4 bg-white transition-all duration-300 ease-in-out hover:shadow-xl shadow-lg border-2 border-transparent ${item.borderColor} p-5 rounded-xl hover:scale-105 transform`}>
                <img src={item.icon} alt="Check" className="w-14 h-14 flex-shrink-0" />
                <p className="text-gray-700 text-base text-left leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="/trash-person.jpg"
              alt="Ilustrasi"
              className="max-w-full h-auto rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>


      {/* Upload Section (Section 2) */}
      <div ref={uploadRef} className="mt-20 bg-gradient-to-br from-teal-50 via-emerald-50 to-green-50 flex flex-col items-center px-8 py-20 gap-8 rounded-2xl shadow-xl mx-4 md:mx-8">
        <h2 className="text-3xl font-bold text-teal-700 mb-6">Unggah atau Ambil Foto Sampah Anda</h2>
        <div
          className={`relative flex items-center justify-center border-2 border-gray-400 border-dashed h-[400px] w-full max-w-2xl rounded-xl shadow-lg overflow-hidden transition-colors duration-300 ease-in-out ${selectedFile || kameraAktif ? 'bg-white' : 'bg-gray-100 hover:bg-gray-200'
            }`}
        >
          {!kameraAktif && !selectedFile && (
            <label
              htmlFor="image-upload"
              className="flex flex-col items-center justify-center w-full h-full cursor-pointer text-center p-5"
            >
              <img
                src="/cloud-upload.svg"
                alt="Upload"
                className="w-16 h-16 mb-3 text-gray-500 transition-transform duration-300 transform hover:scale-110"
              />
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: 'none' }}
              />
              <p className="mt-2 text-lg font-medium text-gray-600">Klik untuk Upload Gambar</p>
              <p className="text-sm text-gray-500">atau tarik dan lepas gambar di sini</p>
            </label>
          )}

          {kameraAktif && (
            <div className="relative w-full h-[400px]">
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-4">
                <button
                  onClick={ambilFoto}
                  className="bg-emerald-500 text-white px-5 py-2 rounded-lg hover:bg-emerald-600 transition-all duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-opacity-75 shadow-sm text-sm font-semibold"
                >
                  Ambil Foto
                </button>
                <button
                  onClick={() => {
                     setKameraAktif(false);
                     setError(null); // Hapus error saat kamera dibatalkan
                  }}
                  className="bg-red-500 text-white px-5 py-2 rounded-lg transition-all duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-opacity-75 shadow-sm text-sm font-semibold"
                >
                  Batal
                </button>
              </div>
            </div>
          )}

          {selectedFile && !kameraAktif && (
            <>
              <img
                src={URL.createObjectURL(selectedFile)}
                alt="Preview"
                className="absolute top-0 left-0 w-full h-full object-contain rounded-lg p-2"
              />
              <button
                onClick={() => {
                  setSelectedFile(null);
                  setResult(null);
                  setError(null); // Hapus error saat menghapus gambar
                }}
                className="absolute top-3 right-3 bg-red-500 text-white rounded-full p-2.5 hover:bg-red-600 shadow-md transition-all duration-200 ease-in-out transform hover:scale-110"
                title="Hapus gambar"
              >
                <img src="/trash.svg" alt="Hapus" className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        <div className="flex flex-row items-center gap-5 mt-4">
          <button
            className="flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-7 py-3 rounded-lg font-medium text-base h-12 min-w-[150px] transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl"
            onClick={handleUpload}
          >
            <img src="/object-scan.svg" alt="Scan" className="w-5 h-5 filter invert" />
            Klasifikasi
          </button>

          <button
            onClick={() => {
              setKameraAktif(true);
              setSelectedFile(null); 
              setResult(null);
              setError(null); // Hapus error saat membuka kamera
            }}
            className="flex items-center justify-center gap-2 border-2 border-blue-500 text-blue-600 px-7 py-3 rounded-lg font-medium text-base cursor-pointer hover:bg-blue-500 hover:text-white h-12 min-w-[150px] transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Buka Kamera
            <img src="/camera.svg" alt="Camera Icon" className="w-5 h-5" />
          </button>
        </div>

        {/* Tempat untuk menampilkan pesan error */}
        <div className="min-h-[24px] mt-5">
          {error && (
            <p className="text-red-600 text-md text-center font-medium bg-red-100 px-4 py-2 rounded-md shadow">
              {error}
            </p>
          )}
        </div>


        {/* Modal hasil klasifikasi */}
        {isOpen && result && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full p-8 mx-4 relative animate-fadeIn">

              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 text-3xl transition-transform duration-200 ease-in-out hover:scale-125"
              >
                <img src="/xmark-circle.svg" alt="Tutup" className="w-7 h-7" />
              </button>

              <h2 className="text-3xl font-extrabold text-center mb-8 text-teal-700">Hasil Klasifikasi</h2>

              {selectedFile && (
                <div className="flex justify-center mb-8">
                  <img
                    src={URL.createObjectURL(selectedFile)}
                    alt="Uploaded preview"
                    className="w-52 h-52 object-contain rounded-xl shadow-lg border-2 border-gray-200"
                  />
                </div>
              )}

              <div className="text-center mb-6">
                <p className="text-xl font-semibold mb-2 text-gray-700">Jenis Sampah:</p>
                <p
                  className={`text-5xl font-bold tracking-wide ${
                    ['biological', 'plastic', 'metal'].includes(result.predicted_class.toLowerCase())
                      ? 'text-green-600'
                      : result.predicted_class.toLowerCase() === 'clothes'
                        ? 'text-yellow-500'
                        : result.predicted_class.toLowerCase() === 'battery'
                          ? 'text-red-600'
                          : 'text-gray-800' 
                    }`}
                >
                  {result.predicted_class.charAt(0).toUpperCase() + result.predicted_class.slice(1)}
                </p>
              </div>

              <div className="bg-teal-600 text-white p-5 rounded-lg mt-6 text-center text-lg leading-relaxed shadow-md">
                Hasil klasifikasi menunjukkan jenis sampah Anda adalah <strong>{result.predicted_class.charAt(0).toUpperCase() + result.predicted_class.slice(1)}</strong> dengan tingkat kepercayaan <strong>{(result.confidence * 100).toFixed(2)}%</strong>.
              </div>

              <div className="flex justify-center mt-10 gap-5">
                <button
                  className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Tutup
                </button>

                <button
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-3 rounded-xl text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg"
                  onClick={() => {
                    setIsOpen(false);
                    setTimeout(() => {
                      const section = document.getElementById('hasil-daur-ulang');
                      if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 300);
                  }}
                >
                  Lihat Daur Ulang
                </button>
              </div>
            </div>
          </div>
        )}
      </div>


      {/* Hasil Daur Ulang Section */}
      <section id="hasil-daur-ulang" className="bg-slate-50 p-6 md:p-16 lg:p-24 relative mt-12">
        <div className="container mx-auto text-center relative">
          <div className="absolute top-0 right-0 md:top-2 md:right-2 z-10 mt-2 mr-2 md:mt-0 md:mr-0">
            <img
              src="/reload.svg"
              alt="Reload"
              className="w-7 h-7 cursor-pointer opacity-70 hover:opacity-100 transition-all duration-200 ease-in-out hover:scale-110 transform active:rotate-180"
              title="Muat ulang hasil"
              onClick={() => {
                if (result) {
                  window.location.reload(); // Atau implementasi reset state yang lebih spesifik
                } else {
                  if (typeof scrollToUpload === 'function') { // Memeriksa apakah scrollToUpload terdefinisi
                    scrollToUpload();
                  }
                }
              }}
            />
          </div>

          <h2 className="text-4xl font-bold mb-16 text-gray-800">
            Hasil Daur<span className="text-teal-600"> Ulang </span> <span className="text-2xl">♻️</span>
          </h2>
          
          <div className="pl-4 pr-4 md:pl-6 md:pr-6"> {/* Wrapper untuk padding horizontal */}
            <div className={`flex overflow-x-auto snap-x snap-mandatory scroll-smooth 
                           space-x-6 md:space-x-8 
                           pb-6 
                           scrollbar-thin scrollbar-thumb-teal-400 scrollbar-track-teal-100 
                           ${!result?.predicted_class ? 'justify-center' : ''}`}> {/* */}
              
              {Array.from({ length: 5 }).map((_, index) => {
                const isFallback = !result?.predicted_class;
                const predictedClass = result?.predicted_class?.toLowerCase();

                const imageSrc = predictedClass
                  ? `/${predictedClass}/${predictedClass}-daur${index === 0 ? '' : index + 1}.jpeg`
                  : '/media-image.svg';

                const dataItem = predictedClass
                  ? daurdata.find((item) => item.type.toLowerCase() === predictedClass)
                  : null;

                const productData = dataItem?.data?.[index];

                return (
                  <div
                    key={index}
                    className={`snap-start bg-white border border-gray-200 min-w-[240px] md:min-w-[300px] p-5 md:p-7 rounded-xl shadow-lg text-left flex flex-col items-center transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105 transform ${isFallback ? 'opacity-70' : ''}`} //
                  >
                    {isFallback ? (
                      <div className="w-full h-36 md:h-48 flex items-center justify-center bg-gray-100 rounded-lg mb-5">
                        <img
                          src={imageSrc}
                          alt={`Placeholder ${index + 1}`}
                          className="w-16 h-16 opacity-50"
                        />
                      </div>
                    ) : (
                      <img
                        src={imageSrc}
                        alt={`Produk ${index + 1} - ${productData?.product_name || predictedClass}`}
                        className="w-full h-36 md:h-48 object-cover rounded-lg mb-5 shadow-md"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = '/media-image.svg'; 
                          e.target.alt = 'Gambar tidak tersedia';
                          e.target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-gray-100');
                          e.target.classList.remove('object-cover', 'shadow-md');
                          e.target.classList.add('w-16', 'h-16', 'opacity-50');
                        }}
                      />
                    )}

                    <h3 className="text-lg md:text-xl font-bold mb-2 text-teal-700 self-start">
                      {productData?.product_name || `Produk Contoh ${String.fromCharCode(65 + index)}`}
                    </h3>

                    <p className="text-gray-600 mb-3 text-sm self-start">
                      Produk hasil daur ulang {predictedClass ? (predictedClass.charAt(0).toUpperCase() + predictedClass.slice(1)) : 'sampah'}.
                    </p>

                    {predictedClass ? (
                      <a
                        href={productData?.link || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-emerald-500 inline-block text-white text-center px-5 py-2.5 mt-auto rounded-lg w-full hover:bg-emerald-600 transition-all duration-300 ease-in-out transform hover:scale-105 shadow hover:shadow-md text-base font-medium"
                      >
                        Kunjungi
                      </a>
                    ) : (
                      <button
                        disabled
                        className="bg-gray-300 text-gray-500 text-center px-5 py-2.5 mt-auto rounded-lg w-full cursor-not-allowed text-base font-medium"
                      >
                        Kunjungi
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {!result?.predicted_class && (
            <p className="mt-10 text-gray-500 text-lg">
              Unggah gambar terlebih dahulu untuk melihat contoh hasil daur ulang.
            </p>
          )}
        </div>
      </section>

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

export default App;