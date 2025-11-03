import { useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


function Home() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-cyan-50 text-gray-800 font-sans overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-gradient-to-l from-sky-500 from-20% via-cyan-500 via-30% to-teal-500 to-80% text-white py-20 sm:py-28 overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-1/2 -right-10 w-32 h-32 bg-cyan-300/20 rounded-full blur-lg animate-bounce"></div>
          <div className="absolute bottom-10 left-1/3 w-24 h-24 bg-teal-300/30 rounded-full blur-lg animate-ping"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl sm:text-6xl font-extrabold mb-6 drop-shadow-lg animate-fade-in">
            Welcome to Our <span className="text-cyan-200">Digital World</span>
          </h2>
          <p className="text-xl sm:text-2xl text-cyan-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Crafting beautiful experiences with modern design and cutting-edge technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/emailform"
              className="bg-white text-sky-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-cyan-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started 🚀
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-teal-500"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-sky-500 to-teal-500 bg-clip-text text-transparent mb-4">
              Why Choose Us?
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the features that make us stand out from the crowd
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div 
              className={`relative bg-gradient-to-br from-white to-sky-50 rounded-3xl shadow-xl p-8 transition-all duration-500 transform hover:-translate-y-2 ${
                hoveredCard === 1 ? 'shadow-2xl scale-105' : ''
              }`}
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-sky-400 to-cyan-400 rounded-full flex items-center justify-center text-white text-2xl shadow-lg">
                💡
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4 mt-4">Innovative Design</h4>
              <p className="text-gray-600 leading-relaxed">
                Crafting visually stunning interfaces with modern design principles and user experience at the forefront.
              </p>
              <div className="mt-6 w-12 h-1 bg-gradient-to-r from-sky-400 to-cyan-400 rounded-full"></div>
            </div>

            {/* Card 2 */}
            <div 
              className={`relative bg-gradient-to-br from-white to-teal-50 rounded-3xl shadow-xl p-8 transition-all duration-500 transform hover:-translate-y-2 ${
                hoveredCard === 2 ? 'shadow-2xl scale-105' : ''
              }`}
              onMouseEnter={() => setHoveredCard(2)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full flex items-center justify-center text-white text-2xl shadow-lg">
                ⚡
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4 mt-4">Lightning Fast</h4>
              <p className="text-gray-600 leading-relaxed">
                Optimized performance ensuring seamless experiences across all devices and platforms.
              </p>
              <div className="mt-6 w-12 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full"></div>
            </div>

            {/* Card 3 */}
            <div 
              className={`relative bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-xl p-8 transition-all duration-500 transform hover:-translate-y-2 ${
                hoveredCard === 3 ? 'shadow-2xl scale-105' : ''
              }`}
              onMouseEnter={() => setHoveredCard(3)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-sky-500 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg">
                🎯
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4 mt-4">Precision Built</h4>
              <p className="text-gray-600 leading-relaxed">
                Every detail meticulously crafted to deliver exceptional quality and reliability.
              </p>
              <div className="mt-6 w-12 h-1 bg-gradient-to-r from-sky-500 to-blue-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-sky-500 via-cyan-500 to-teal-500 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="text-cyan-100">Client Satisfaction</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-cyan-100">Projects Completed</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-cyan-100">Support</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-4xl font-bold mb-2">5★</div>
              <div className="text-cyan-100">Rated Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 text-white">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h3 className="text-3xl sm:text-5xl font-bold mb-6">
            Ready to Transform Your Vision?
          </h3>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Get in touch and let's start your journey.
          </p>
          <Link 
            to="/emailform"
            className="inline-block bg-gradient-to-r from-sky-400 to-cyan-400 text-white px-12 py-4 rounded-full font-bold text-lg hover:from-sky-500 hover:to-cyan-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
          >
            Start Your Project Today! 🎉
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;