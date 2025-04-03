import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoSparklesOutline } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa6";
import { CiMobile4 } from "react-icons/ci";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "UI/UX Design",
      description:
        "Crafting visually stunning and intuitive interfaces that prioritize user experience through thoughtful design principles.",
      icon: <IoSparklesOutline className="text-pink-400 text-3xl" />,
      color: "pink-400",
    },
    {
      id: 2,
      title: "Web Development",
      description:
        "Building responsive, performant websites using modern technologies like React, Next.js, and Tailwind CSS.",
      icon: <FaLaptopCode className="text-green-400 text-3xl" />,
      color: "green-400",
    },
    {
      id: 3,
      title: "Responsive Design",
      description:
        "Ensuring seamless experiences across all devices with mobile-first approaches and adaptive layouts.",
      icon: <CiMobile4 className="text-blue-400 text-3xl" />,
      color: "blue-400",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out-quad'
    });
  }, []);

  return (
    <section 
      className="py-20 bg-black text-white px-4 sm:px-6"
      id="services"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h2
            id="services-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
            data-aos="fade-down"
          >
            My Services
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto" data-aos="fade-up">
            Professional solutions tailored to your digital needs
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <article
              key={service.id}
              className="relative bg-gray-900 rounded-lg p-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg"
              data-aos="fade-up"
              data-aos-delay={index * 150}
              aria-labelledby={`service-${service.id}-title`}
            >
              <div 
                className={`absolute -top-6 left-1/2 transform -translate-x-1/2 w-14 h-14 flex items-center justify-center bg-gray-800 rounded-full shadow-lg border-2 border-${service.color}`}
              >
                {service.icon}
              </div>
              <h3 
                id={`service-${service.id}-title`}
                className="text-2xl font-semibold text-center mt-10 mb-4 text-white"
              >
                {service.title}
              </h3>
              <p className="text-gray-300 text-center text-base leading-relaxed">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;