
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CiLight, CiDark } from 'react-icons/ci';
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope, FaCertificate } from 'react-icons/fa';

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('keydown', handleEscapeKey);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('keydown', handleEscapeKey);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-8 py-3 md:px-16 lg:px-24 transition-all duration-300 ${
        scrolled
          ? 'bg-gray-900 text-white'
          : theme === 'light'
          ? 'bg-black text-white shadow-lg w-full'
          : 'bg-transparent text-white'
      }`}
    >
      <div className="py-2 flex justify-between items-center">
        <div className="text-2xl tracking-wide font-poppins">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 group-hover:scale-x-100 transition-all duration-300">
            <Link to="/">Yash Mankar</Link>
          </span>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden ml-auto">
          <button
            onClick={toggleMenu}
            className="focus:outline-none"
            aria-label="Toggle navigation"
            aria-expanded={isOpen ? 'true' : 'false'}
          >
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-3xl pr-5`}></i>
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-2 ">
          <div className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="text-gray-400 hover:text-gray-200 transition-all duration-300 group pt-2 flex items-center space-x-2"
            >
              <FaHome />
              <span className="relative">
                Home
                <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-gradient-to-r from-pink-500 to-yellow-500 scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
              </span>
            </Link>
            <Link
              to="/about"
              className="text-gray-400 hover:text-gray-200 transition-all duration-300 group pt-2 flex items-center space-x-2"
            >
              <FaUser />
              <span className="relative">
                About
                <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-gradient-to-r from-pink-500 to-yellow-500 scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
              </span>
            </Link>
            <Link
              to="/work"
              className="text-gray-400 hover:text-gray-200 transition-all duration-300 group pt-2 flex items-center space-x-2"
            >
              <FaProjectDiagram />
              <span className="relative">
                Work
                <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-gradient-to-r from-pink-500 to-yellow-500 scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
              </span>
            </Link>
            <Link
              to="/certifications"
              className="text-gray-400 hover:text-gray-200 transition-all duration-300 group pt-2 flex items-center space-x-2"
            >
              <FaCertificate />
              <span className="relative">
                Certifications
                <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-gradient-to-r from-pink-500 to-yellow-500 scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
              </span>
            </Link>
            <Link
              to="/contact"
              className="text-gray-400 hover:text-gray-200 transition-all duration-300 group pt-2 flex items-center space-x-2"
            >
              <FaEnvelope />
              <span className="relative">
                Contact
                <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-gradient-to-r from-pink-500 to-yellow-500 scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
              </span>
            </Link>
          </div>
          {/* <button onClick={toggleTheme} className="focus:outline-none text-xl text-white">
            {theme === 'light' ? <CiDark /> : <CiLight />}
          </button> */}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
      className={`fixed inset-0 z-40 w-full flex flex-col items-center justify-center bg-gray-900 text-white space-y-8 p-6 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Close Button */}
      <div className="absolute top-6 right-6">
        <button onClick={toggleMenu} className="focus:outline-none" aria-label="Close navigation">
          <FaTimes className="text-3xl" />
        </button>
      </div>

      {/* Mobile Links */}
      <nav className="flex flex-col items-center space-y-8">
        <Link to="/" onClick={closeMenu} className="hover:text-gray-400 text-xl font-semibold">
          Home
        </Link>
        <Link to="/about" onClick={closeMenu} className="hover:text-gray-400 text-xl font-semibold">
          About
        </Link>
        <Link to="/work" onClick={closeMenu} className="hover:text-gray-400 text-xl font-semibold">
          Work
        </Link>
        <Link to="/certifications" onClick={closeMenu} className="hover:text-gray-400 text-xl font-semibold">
          Certifications
        </Link>
        <Link to="/contact" onClick={closeMenu} className="hover:text-gray-400 text-xl font-semibold">
          Contact
        </Link>
        {/* You can add more mobile-specific elements here if needed */}
      </nav>
    </div>
    </nav>
  );
};

export default Navbar;

