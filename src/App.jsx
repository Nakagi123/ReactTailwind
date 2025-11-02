import { useState } from 'react'
import './App.css'


function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold text-sky-700">
            Intinya Ini Landing Page
          </h1>

          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-600 hover:text-sky-500">Home</a>
            <a href="#about" className="text-gray-600 hover:text-sky-500">About</a>
            <a href="/emailform" className="text-gray-600 hover:text-sky-500">Contact</a>
          </nav>

          <nav className="flex md:hidden space-x-3 text-sm">
            <a href="#home" className="text-gray-600 hover:text-sky-500">Home</a>
            <a href="#about" className="text-gray-600 hover:text-sky-500">About</a>
            <a href="/emailform" className="text-gray-600 hover:text-sky-500">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="bg-gradient-to-l from-sky-500 from-20% via-cyan-500 via-30% to-teal-500 to-80% text-white py-20 sm:py-24"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 drop-shadow-md">
            Selamat Datang di Landing Page!
          </h2>
          <p className="text-lg sm:text-xl text-cyan-50">
            Landing Page ini dibuat dengan menggunakan Tailwind CSS 🌈
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 md:px-14">
          <h3 className="text-3xl sm:text-4xl font-bold text-center text-sky-700 mb-10">
            Tentang Landing Page
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="text-center bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
              <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-sky-500 text-4xl">💡</span>
              </div>
              <h4 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">Simple</h4>
              <p className="text-gray-600">
                Landing Page ini dibuat secara simpel dengan menggunakan Tailwind CSS
              </p>
            </div>

            {/* Card 2 */}
            <div className="text-center bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-emerald-500 text-4xl">💚</span>
              </div>
              <h4 className="text-lg font-semibold sm:text-xl mb-2 text-gray-800">Educourse</h4>
              <p className="text-gray-600">
                Dibuat dengan penuh cinta kasih 💕
              </p>
            </div>

            {/* Card 3 */}
            <div className="text-center bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-500 text-4xl">⚙️</span>
              </div>
              <h4 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">Easy</h4>
              <p className="text-gray-600">
                Dengan Tailwind CSS, kita dapat membuat tampilan kustom dengan mudah!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500 text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Hubungi Kami</h3>
          <p className="text-lg sm:text-xl">
            Untuk informasi lebih lanjut mengenai web ini, silahkan hubungi kami lewat Instagram:
            <strong> @educourse.id</strong>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-6 sm:py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm sm:text-base">
            &copy; 2025 Landing Page. Dibuat dengan 💙 dan Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
