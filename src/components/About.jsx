



import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import Academics from './Academics';
import FloatingButtons from './FloatingButtons';
import AboutImage from '../assets/About.jpeg';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS
  }, []);

  return (
    <div>
      {/* About Section */}
      <section className="py-32 text-gray bg-black" id="about">
        <div className="container mx-auto px-8 md:px-16 lg:px-24 flex flex-col md:flex-row items-center justify-between">
          {/* Left Section - Image */}
          <div className="flex-1 flex justify-center md:justify-start mb-12 md:mb-0" data-aos="fade-left">
            <img
              src={AboutImage}
              alt="About Yash Mankar"
              className="w-72 h-80 rounded-full object-cover shadow-2xl transform hover:scale-105 transition-all duration-500"
            />
          </div>

          {/* Right Section - Text */}
          <div className="flex-1 text-center md:text-left md:pl-16" data-aos="fade-right">
            <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              About Me
            </h2>
            <p className="text-lg mb-8 text-gray-400" data-aos="fade-up" data-aos-delay="300">
              Hello! My name is <span className='font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500'>Yash Mankar</span>, a passionate and enthusiastic learner diving deep into software development. 
              I completed my graduation in 2022 (BCA) from RTMNU University, Nagpur.
              <br /><br />
              With a keen interest in both Frontend and Backend development, I’m always looking to expand my skill set. Let’s connect and create something amazing together!
            </p>
            <div className="flex justify-center md:justify-start mt-8" data-aos="zoom-in" data-aos-delay="500">
              <button onClick={() => window.open("https://www.linkedin.com/in/yash-mankar-50625825b/")} className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
                Connect with Me
              </button>
            </div>
          </div>
        </div>
      </section>
      <FloatingButtons/>
    </div>
  );
};

export default About;
