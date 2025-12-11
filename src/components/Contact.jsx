import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name?.trim()) newErrors.name = 'Please enter your name';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.subject?.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message?.trim()) {
      newErrors.message = 'Message cannot be empty';
    } else if (formData.message.length < 20) {
      newErrors.message = 'Message should be at least 20 characters long';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error('Please fix the errors in the form.', { autoClose: 3000 });
      return;
    }
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success('✅ Message sent! I will reply soon.', { autoClose: 4000 });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast.error('❌ Failed to send message. Try again.', { autoClose: 3000 });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-black text-white py-20 px-4 sm:px-8 lg:px-16 min-h-screen flex items-center"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      <div className="container max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        {/* Left Info */}
        <div
          className="information space-y-8 flex flex-col items-start justify-center"
          data-aos="fade-right"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-600">
            Let's Connect
          </h1>
          <p className="text-lg text-gray-300 max-w-lg">
            Interested in working together or have questions? I’m available for freelance & full-time opportunities.
          </p>

          <div className="space-y-6 mt-4">
            <a
              href="mailto:mankaryash25@gmail.com"
              className="flex items-center space-x-4 text-gray-200 hover:text-cyan-400 transition duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-cyan-500/10 transition duration-300">
                <FontAwesomeIcon icon={faEnvelope} className="text-xl text-cyan-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-lg">mankaryash25@gmail.com</p>
              </div>
            </a>

            <a
              href="https://maps.google.com/?q=Nagpur,Maharashtra"
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-4 text-gray-200 hover:text-emerald-400 transition duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-emerald-500/10 transition duration-300">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xl text-emerald-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-lg">Nagpur, Maharashtra, India</p>
              </div>
            </a>
          </div>
        </div>

        {/* Right Form */}
        <div
          className="form bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 shadow-2xl"
          data-aos="fade-left"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-600">
            Send Me a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Your Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter name"
                className={`w-full px-4 py-3 rounded-lg bg-gray-700 border ${
                  errors.name ? 'border-red-500' : 'border-gray-600'
                } focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white`}
              />
              {errors.name && <p className="text-sm text-red-400">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className={`w-full px-4 py-3 rounded-lg bg-gray-700 border ${
                  errors.email ? 'border-red-500' : 'border-gray-600'
                } focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white`}
              />
              {errors.email && <p className="text-sm text-red-400">{errors.email}</p>}
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Subject *
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter subject"
                className={`w-full px-4 py-3 rounded-lg bg-gray-700 border ${
                  errors.subject ? 'border-red-500' : 'border-gray-600'
                } focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white`}
              />
              {errors.subject && <p className="text-sm text-red-400">{errors.subject}</p>}
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Your Message *
              </label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Hello, I'd like to discuss..."
                className={`w-full px-4 py-3 rounded-lg bg-gray-700 border ${
                  errors.message ? 'border-red-500' : 'border-gray-600'
                } focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white`}
              ></textarea>
              <div className="flex justify-between mt-1">
                {errors.message && <p className="text-sm text-red-400">{errors.message}</p>}
                <p className="text-xs text-gray-400">{formData.message.length}/500</p>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting || !formData.name || !formData.email || !formData.subject || !formData.message}
              className={`w-full py-3 px-6 rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-600 text-white font-medium flex items-center justify-center space-x-2 transition-all duration-300 ${
                isSubmitting || !formData.name || !formData.email || !formData.subject || !formData.message
                  ? 'opacity-60 cursor-not-allowed'
                  : 'hover:from-cyan-600 hover:to-emerald-700'
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
      <ToastContainer theme="dark" position="top-right" autoClose={4000} />
    </section>
  );
};

export default Contact;
