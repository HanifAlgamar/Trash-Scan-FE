import React, { useState,useRef } from 'react';
import Webcam from "react-webcam";
import './App.css';
import axios from 'axios';


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
    setError(null);
  };


  const [isOpen, setIsOpen] = useState(false);


  const handleUpload = async () => {
    if (!selectedFile) {
      setError('Silakan pilih gambar terlebih dahulu.');
      return;
    }
  
    const formData = new FormData();
    formData.append('file', selectedFile);
  
    try {
      const response = await axios.post('http://127.0.0.1:8000/predict', formData);
      setResult(response.data);
      setError(null);
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
  }
};

  return (
    <div className="min-h-screen font-sans bg-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center py-4 px-8">
        <div className="flex items-center space-x-2">
          <img src="/vite.svg" alt="logo" className="w-8 h-8" />
          <span className="text-lg font-semibold ">Garbage Classification</span>
        </div>
        <div className="space-x-3">
          <a href="#" className="text-teal-600 border-b-2 border-orange-500 pb-1">Beranda</a>
          <a href="#" className="text-gray-600 hover:text-teal-600">Tentang Kami</a>
        </div>
        <button className="bg-amber-400 text-white px-4 py-2 rounded hover:bg-teal-700">
          Selamat Datang
        </button>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col-reverse gap-5 lg:flex-row justify-between items-center px-8 py-20">
        <div className="mt-2.5 lg:w-1/2 space-y-6 text-left max-w-[700px]">
          <h1 className="text-6xl font-bold text-teal-600 leading-tight">
            Garbage <br /> Classification
          </h1>
          <p className="text-xl font-semibold text-gray-800">
            Klasifikasi 5 jenis sampah dengan <br /> Machine Learning End-to-End.
          </p>
          <p className="text-gray-600">
            Website yang dapat mengintegrasikan model Machine Learning Image Classification untuk klasifikasi 5 jenis sampah yaitu Plastic, Battery, Clothes, Biological, dan Metal secara End-to-End bagi pengguna.
          </p>
          <button className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700">
            Mulai Sekarang
          </button>
        </div>

        <div className="lg:w-1/2 flex justify-center relative mt-10 lg:mt-0">
          <div className="max-w-[640px] max-h-[375px] bg-[#1F4C57] rounded-lg shadow-md flex items-center justify-center">
            <div className="border-4 border-white rounded-lg overflow-hidden">
              <video
                objectFit="cover"
                autoPlay
                loop
                muted
                controls
                className="plain-video"
                src={"/sampah.mp4"}
              />
            </div>
          </div>
        </div>
      </div>


{/* Cara Kerja Section */}
<div className="flex flex-col items-center justify-center mt-32 mb-10">
  <h2 className="text-3xl font-bold text-center">
    Bagaimana kerja <span className="text-teal-600">Trash Scan AI</span>?
  </h2>
  <p className="text-gray-600 mt-2 text-center">Lakukan klasifikasi dalam tiga langkah mudah</p>

  {/* 3 Langkah */}
  <div className="flex flex-col lg:flex-row gap-6 mt-10">
    {/* Step 1 */}
    <div className="flex flex-col items-center bg-white border border-gray-300 rounded-lg p-6 shadow transition-all duration-300 max-w-xs hover:border-emerald-500 hover:shadow-lg">
      <div className="bg-emerald-400 text-white rounded-full p-4 mb-4">
        <img src="/upload-icon.svg" alt="Upload Gambar" className="w-8 h-8" />
      </div>
      <h3 className="text-lg font-semibold mb-2">Unggah Gambar</h3>
      <p className="text-gray-600 text-center">Pilih atau ambil gambar sampah untuk diidentifikasi.</p>
    </div>

    {/* Step 2 */}
    <div className="flex flex-col items-center bg-white border border-gray-300 rounded-lg p-6 shadow transition-all duration-300 max-w-xs hover:border-emerald-500 hover:shadow-lg">
      <div className="bg-emerald-400 text-white rounded-full p-4 mb-4">
        <img src="/object-scan.svg" alt="Analisis AI" className="w-8 h-8" />
      </div>
      <h3 className="text-lg font-semibold mb-2">Analisis AI</h3>
      <p className="text-gray-600 text-center">Lakukan analisis gambar dengan AI untuk mendapatkan hasil klasifikasi.</p>
    </div>

    {/* Step 3 */}
    <div className="flex flex-col items-center bg-white border border-gray-300 rounded-lg p-6 shadow transition-all duration-300 max-w-xs hover:border-emerald-500 hover:shadow-lg">
      <div className="bg-emerald-400 text-white rounded-full p-4 mb-4">
        <img src="/check.svg" alt="Dapatkan Hasil" className="w-8 h-8" />
      </div>
      <h3 className="text-lg font-semibold mb-2">Dapatkan Hasil</h3>
      <p className="text-gray-600 text-center">Anda akan mendapatkan hasil klasifikasi beserta hasil daur ulang.</p>
    </div>
  </div>
</div>

{/* Section Keuntungan */}
<div className="flex flex-col items-center mt-36 justify-center my-20 px-4">
  {/* Judul */}
  <div className="w-full max-w-6xl">
    <h2 className="text-3xl font-bold mb-2">
      Mengapa Memilih <span className="text-teal-600">Trash Scan</span>?
    </h2>
    <p className="text-gray-500 mb-10">
      Alasan menggunakan AI klasifikasi sampah
    </p>
  </div>

  {/* Konten utama */}
  <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl gap-10">

    {/* Kiri: List keuntungan */}
    <div className="flex flex-col gap-6 w-full lg:w-1/2">
      {/* Item 1 */}
        <div className="flex items-center gap-3 bg-white transition-all hover:border-emerald-500 hover:shadow-lg shadow-sm border p-4 rounded-lg">
        <img src="/trash-icon-green.svg" alt="Check" className="w-12 h-12" />
        <p className="text-black text-base text-left">
         Umumnya sampah biological, plastik, dan metal dibuang ke dalam tong warna hijau
        </p>
        </div>

      {/* Item 1 */}
      <div className="flex items-center gap-3 bg-white transition-all hover:border-emerald-500 hover:shadow-lg shadow-sm border p-4 rounded-lg">
        <img src="/trash-icon-red.svg" alt="Check" className="w-12 h-12" />
        <p className="text-black text-base">
        Umumnya sampah battery dibuang ke dalam tong warna merah
        </p>
        </div>

      {/* Item 1 */}
      <div className="flex items-center gap-3 bg-white transition-all hover:border-emerald-500 hover:shadow-lg shadow-sm border p-4 rounded-lg">
        <img src="/trash-icon-yellow.svg" alt="Check" className="w-12 h-12" />
        <p className="text-black text-base">
        Umumnya sampah clothes dibuang ke dalam tong warna kuning
        </p>
        </div>
    </div>

    {/* Kanan: Gambar */}
    <div className="w-full lg:w-1/2 flex justify-center">
      <img 
        src="/trash-person.jpg" // ganti path gambarmu di sini
        alt="Ilustrasi"
        className="max-w-full h-auto rounded-lg shadow-lg" 
      />
    </div>
  </div>
</div>


{/* Section 2 */}
<div className="mt-32 bg-white-100 flex flex-col items-center px-8 py-20 gap-6">


{/* Upload Gambar Button + Preview + Kamera */}
<div
  className={`relative flex items-center justify-center border-2 border-gray-400 border-dashed min-h-[400px] min-w-[400px] rounded-lg shadow-xl overflow-hidden ${
    selectedFile ? 'bg-white' : 'bg-white hover:bg-gray-300'
  }`}
>
  {/* Upload Label */}
  {!kameraAktif && !selectedFile && (
    <label
      htmlFor="image-upload"
      className="flex flex-col items-center justify-center w-full h-full cursor-pointer text-center"
    >
      <img
        src="/cloud-upload.svg"
        alt="Upload"
        style={{ width: 50, height: 55 }}
      />
      <input
        id="image-upload"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      <p className="mt-2">Upload Gambar</p>
    </label>
  )}

{kameraAktif && (
  <div className="relative w-[400px] h-[400px]">
    <Webcam
      audio={false}
      ref={webcamRef}
      screenshotFormat="image/jpeg"
      videoConstraints={videoConstraints}
      className="w-full h-full object-cover rounded-lg"
    />
    
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
      <button
        onClick={ambilFoto}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Ambil Foto
      </button>
      <button
        onClick={() => setKameraAktif(false)}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Batal
      </button>
    </div>
  </div>
)}



  {/* Preview Gambar */}
  {selectedFile && !kameraAktif && (
    <>
      <img
        src={URL.createObjectURL(selectedFile)}
        alt="Preview"
        className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
      />
      <button
        onClick={() => setSelectedFile(null)}
        className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 shadow"
        title="Hapus gambar"
      >
         <img src="/trash.svg" alt="Hapus" className="w-5 h-5" />
      </button>
    </>
  )}
</div>


  {/* Tombol Aksi */}
  <div className="flex flex-row items-center gap-4">
    {/* Tombol Klasifikasi */}
    <button
      className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md font-medium text-sm h-10 min-w-[130px]"
      onClick={handleUpload}
    >
      Klasifikasi
    </button>

    {/* Tombol Buka Kamera */}
    <button
      onClick={() => setKameraAktif(true)}
      className="flex items-center justify-center gap-1 border border-blue-400 px-4 py-2 rounded-md font-medium text-sm text-black cursor-pointer hover:bg-blue-100 h-10 min-w-[130px]"
    >
      Buka Kamera
      <img src="/camera.svg" alt="Camera Icon" className="w-4 h-4" />
    </button>
  </div>

  {/* Error Message */}
  {error && <p className="text-red-500 mt-4">{error}</p>}


{/* Modal hasil klasifikasi */}
{isOpen && result && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-10 mx-4 relative animate-fadeIn">

      {/* Tombol Close (X) */}
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-3xl"
      >
        ✕
      </button>

      {/* Judul */}
      <h2 className="text-3xl font-extrabold text-center mb-6">Hasil Klasifikasi</h2>

      {/* Gambar Preview */}
      {selectedFile && (
        <div className="flex justify-center mb-6">
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Uploaded preview"
            className="w-48 h-48 object-contain rounded-lg shadow-md"
          />
        </div>
      )}

      {/* Prediksi */}
      <div className="text-center">
        <p className="text-xl font-semibold mb-2">Jenis Sampah:</p>
        <p
          className={`text-4xl font-bold ${
            ['biological', 'plastic', 'metal'].includes(result.predicted_class)
              ? 'text-green-500'
              : result.predicted_class === 'clothes'
              ? 'text-yellow-500'
              : result.predicted_class === 'battery'
              ? 'text-red-500'
              : ''
          }`}
        >
          {result.predicted_class}
        </p>
      </div>

      {/* Confidence */}
      <div className="bg-teal-600 text-white p-6 rounded-md mt-6 text-center text-lg leading-relaxed">
        Hasil klasifikasi menunjukkan jenis sampah anda adalah <strong>{result.predicted_class}</strong> dengan tingkat kepercayaan <strong>{(result.confidence * 100).toFixed(2)}%</strong>.
      </div>

      {/* Tombol Aksi */}
      <div className="flex justify-center mt-8 gap-4">
        {/* Button Tutup */}
        <button
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-xl text-lg"
          onClick={() => setIsOpen(false)}
        >
          Tutup
        </button>

        {/* Button Daur Ulang */}
        <button
          className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-xl text-lg"
          onClick={() => {
            setIsOpen(false);
            setTimeout(() => {
              const section = document.getElementById('hasil-daur-ulang');
              if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
              }
            }, 300); // tunggu modal ketutup
          }}
        >
          Daur Ulang
        </button>
      </div>
    </div>
  </div>
)}
</div>



     {/* Section 3 */}
<section id="hasil-daur-ulang" className="bg-[#ffffff] p-6 md:p-24">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-bold mb-12">
      Hasil Daur Ulang
    </h2>
    {/* Container Scrollable */}
    <div className="flex overflow-x-auto space-x-4 md:space-x-8 pb-4">
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="bg-teal-100 border border-2 min-w-[200px] md:min-w-[300px] p-4 md:p-6 rounded-lg shadow-lg text-left">
              <img
              src={
                result?.predicted_class
                  ? `/${result.predicted_class}/${result.predicted_class}-daur${index === 0 ? '' : index + 1}.jpeg`
                  : '/media-image.svg'
              }
              alt={`Produk ${index + 1}`}
              className={`mx-auto mb-4 ${result?.predicted_class ? 'w-full h-32 md:h-48 object-cover' : 'w-24 h-24'} rounded-md`}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/no-image.png';
              }}
            />
          <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">
            Produk {String.fromCharCode(65 + index)}
          </h3>
          <p className="text-gray-600 mb-1 md:mb-2">
            Produk hasil daur ulang {result?.predicted_class || 'sampah'}.
          </p>
          <button className="bg-[#075852] text-white px-4 py-2 mt-4 rounded-lg w-full hover:bg-[#26BE71] transition duration-300">
            Kunjungi
          </button>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="border-t border-gray-200 py-4 text-center text-gray-400 text-sm">
        &copy; 2025 Garbage Classification
      </footer>
    </div>
  );
}

export default App;
