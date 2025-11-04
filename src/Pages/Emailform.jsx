import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import emailjs from "emailjs-com";

function Emailform() {
  const navigate = useNavigate();
  
  // ✅ Step 1: Initialize form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // ✅ Step 2: For showing success/error messages
  const [status, setStatus] = useState('');

  // ✅ Step 3: Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ Step 4: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS keys
    const serviceID = 'service_ern56er';
    const templateID = 'template_etejf99';
    const publicKey = '-Xe7XNxLnufhuEfdH';

    // Send the email
    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('✅ Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setStatus('❌ Failed to send message. Please try again later.');
      });
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-l from-sky-500 via-cyan-500 to-teal-500 p-4">
        <div className="flex flex-col lg:flex-row gap-8 w-full max-w-4xl">
          {/* Contact Info Board */}
          <section className="w-full lg:w-1/2 bg-white rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Get in Touch</h2>

            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold text-cyan-600 mb-2">Phone Number</h3>
                <p className="text-gray-700 text-md">+62 858 0311 7870</p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold text-cyan-600 mb-2">Email</h3>
                <p className="text-gray-700 text-md">elianstemba2610@gmail.com</p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold text-cyan-600 mb-2">LinkedIn</h3>
                <p className="text-gray-700 text-md">
                  linkedin.com/in/elian-malik-achmad-uluelang
                </p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold text-cyan-600 mb-2">Instagram</h3>
                <p className="text-gray-700 text-md">@nakagi_123</p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold text-cyan-600 mb-2">Github</h3>
                <p className="text-gray-700 text-md">github.com/Nakagi123</p>
              </div>

              <div className="pt-4">
                <h3 className="text-lg font-semibold text-cyan-600 mb-2">Location</h3>
                <p className="text-gray-700 text-md">Semarang, Indonesia</p>
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <section className="w-full lg:w-1/2 bg-white rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-center mb-8 text-3xl font-bold text-gray-800">Send a Message</h2>

              <div className="space-y-2">
                <label className="block text-md font-bold text-gray-700 mb-1">Full Name</label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter Full Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-md font-bold text-gray-700 mb-1">Email Address</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter Email Address"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-md font-bold text-gray-700 mb-1">Message</label>
                <textarea
                  name="message"
                  placeholder="Enter your message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full font-medium bg-gradient-to-l from-sky-500 via-cyan-500 to-teal-500 text-white py-3 rounded-2xl hover:from-cyan-500 hover:to-blue-600 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>

              {/* Back to Home */}
              <p
                onClick={handleBackToHome}
                className="text-center mt-4 text-cyan-600 font-semibold cursor-pointer hover:underline"
              >
                ← Back to Home
              </p>
            </form>

            {status && <p className="text-center mt-4 font-medium text-gray-700">{status}</p>}
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Emailform;