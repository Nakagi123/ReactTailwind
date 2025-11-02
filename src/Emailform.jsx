import { useNavigate } from "react-router-dom";

function Emailform() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent! 💌");
  };

    const navigate = useNavigate();

    const handleBackToHome = () => {
    navigate("/");
    };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-l from-sky-500 from-20% via-cyan-500 via-30% to-teal-500 to-80%">
      <section className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 m-4 transform hover:scale-[1.05] transition-transform duration-300">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-center mb-10 text-3xl font-bold">Contact Me!</h2>
            <div className="space-y-2">
                <label className="block text-md font-bold text-gray-700 mb-1">Full Name</label>
                <input
                type="text"
                placeholder="Enter Full Name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                />
            </div>

            <div className="space-y-2">
                <label className="block text-md font-bold text-gray-700 mb-1">Email Address</label>
                <input
                type="email"
                placeholder="Enter Email Address"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                />
            </div>

            <div>
                <label className="block text-md font-bold text-gray-700 mb-1">Message</label>
                <textarea
                placeholder="Enter your message"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                ></textarea>
            </div>

            <button
                type="submit"
                className="w-full font-medium bg-gradient-to-l from-sky-500 from-20% via-cyan-500 via-30% to-teal-500 to-80% py-3 rounded-2xl hover:from-cyan-500 hover:via-sky-400 hover:to-blue-600 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl">
                Send Message
            </button>
            <div className="text-center pt-4">
                <button
                type="button"
                onClick={handleBackToHome}
                className="text-gray-600 hover:text-cyan-600 font-medium transition-colors duration-200 underline hover:no-underline"
                >
                ← Back to Home
                </button>
            </div>

        </form>
      </section>
    </div>
  );
}

export default Emailform;
