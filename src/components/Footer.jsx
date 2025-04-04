import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black text-white py-12 px-4 sm:px-8 lg:px-16 border-t border-gray-700">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Branding */}
          <div 
            className="text-center md:text-left"
            data-aos="fade-right"
          >
            <a 
              href="#" 
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-600 hover:from-pink-500 hover:to-yellow-500 transition-all duration-300"
            >
              Yash Mankar
            </a>
            <p className="text-gray-400 mt-2">Full Stack Developer</p>
          </div>

          {/* Social Links */}
          <div 
            className="flex justify-center"
            data-aos="fade-up"
          >
            <div className="flex space-x-6">
              <a 
                href="https://github.com/YashMankar1812" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-cyan-500/10 transition duration-300 group"
                aria-label="GitHub"
              >
                <FontAwesomeIcon 
                  icon={faGithub} 
                  className="text-xl text-gray-400 group-hover:text-cyan-400 transition duration-300" 
                />
              </a>
              <a 
                href="https://www.linkedin.com/in/yash-mankar-50625825b/" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-500/10 transition duration-300 group"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon 
                  icon={faLinkedin} 
                  className="text-xl text-gray-400 group-hover:text-blue-500 transition duration-300" 
                />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-sky-500/10 transition duration-300 group"
                aria-label="Twitter"
              >
                <FontAwesomeIcon 
                  icon={faTwitter} 
                  className="text-xl text-gray-400 group-hover:text-sky-400 transition duration-300" 
                />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-500/10 transition duration-300 group"
                aria-label="Instagram"
              >
                <FontAwesomeIcon 
                  icon={faInstagram} 
                  className="text-xl text-gray-400 group-hover:text-pink-500 transition duration-300" 
                />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div 
            className="text-center md:text-right"
            data-aos="fade-left"
          >
            <p className="text-gray-400 text-sm">
              © {currentYear} All rights reserved.
              <span className="block sm:inline"> Made with </span>
              <FontAwesomeIcon 
                icon={faHeart} 
                className="text-red-500 mx-1 animate-pulse" 
              />
              <span> in India</span>
            </p>
          </div>
        </div>


      </div>
    </footer>
  );
};

export default Footer;