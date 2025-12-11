import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import TypingText from './TypingText';
// import HeroImage from '../assets/portyash.jpg'; // Removed import
import About from './About';
import Service from './Service';
import Skills from './Skills';
import Work from './Work';
import Project from './Project';
import Certification from './Certification';
import Contact from './Contact';

const Hero = () => {
  const [showText, setShowText] = useState(false); // Renamed for clarity
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [mounted, setMounted] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setShowText(true), 2000); // Show text after delay

    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);

    return () => clearTimeout(timer);
  }, [theme]);

  const handleContactClick = () => {
    navigate('/contact'); // Navigate to contact route
  };

  if (!mounted) return null;

  return (
    <>
      <section className="relative w-full min-h-[70vh] flex flex-col justify-center items-center py-8 px-4 sm:px-6 text-white bg-black overflow-hidden" id="home">
        {/* Main content */}
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center pt-20">
          {!showText ? (
            <div className="text-center animate-fade-in">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                Hey 👋🏻 Everyone
              </h1>
              <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-300 max-w-md mx-auto">
                Crafting exceptional digital experiences with modern web technologies
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl mt-6 lg:mt-0">
              <TypingText />

              <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                Passionate front-end developer specializing in React.js with expertise in building
                responsive, performant web applications.
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4 mt-6 justify-center lg:justify-start">
                <a
                  href="public/Resumee_Yash[1] (1).pdf"
                  download
                  className="flex items-center gap-2 px-5 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  <FaFileDownload />
                  Download Resume
                </a>

                <button
                  onClick={handleContactClick}
                  className="flex items-center gap-2 px-5 py-2 sm:px-6 sm:py-3 bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500/10 font-medium rounded-full transition-all duration-300 text-sm sm:text-base"
                >
                  <HiOutlineMail />
                  Contact Me
                </button>
              </div>
            </div>
          )}

          {/* Social links */}
          <div className={`mt-8 sm:mt-10 ${showText ? 'animate-fade-in-up' : ''}`}>
            <div className="flex gap-5">
              <a
                href="https://github.com/YashMankar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-300 hover:text-white transition-colors duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/yash-mankar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Service/>
      <Skills/>
      <Work/>
      <Certification/>
      <Project/>
      <Contact/>
    </>
  );
};

export default Hero;