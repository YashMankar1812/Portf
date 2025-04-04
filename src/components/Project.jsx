import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import ShopNow from "../assets/ShopNow.png";
import ProjectModal from "../components/ProjectModal"; // You'll need to create this component

const projects = [
  {
    id: 1,
    title: "ShopNow App",
    description: "A complete e-commerce solution with product listings, cart functionality, and secure checkout process.",
    longDescription: "Built with React and Node.js, this e-commerce platform features user authentication, product search, inventory management, and payment gateway integration. The responsive design ensures seamless shopping across all devices.",
    image: "src/assets/ShopNow.png",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    github: "https://github.com/yashmankar/shopnow",
    demo: {ShopNow},
    featured: true
  },
  {
    id: 2,
    title: "The PurplePlate App ",
    description: "A food delivery platform that connects customers with local restaurants.",
    longDescription: "Built with React and Node.js, this food delivery platform features user authentication,",
    image: "src/assets/Restaurent.png",
    technologies: ["Next.js", "Three.js", "Contentful"],
    github: "https://github.com/yashmankar/life-of-chai",
    demo: "https://the-purple-plate.vercel.app/tps://life-of-chai.vercel.app",
    featured: false
  },
  // {
  //   id: 3,
  //   title: "Restaurant Management",
  //   description: "Full-stack solution for restaurant operations including reservations and menu management.",
  //   longDescription: "Includes table reservation system, digital menu with real-time updates, staff management dashboard, and customer feedback system. The admin panel provides comprehensive analytics.",
  //   image: "https://source.unsplash.com/400x300/?restaurant,food",
  //   technologies: ["React", "Express", "PostgreSQL", "Socket.io"],
  //   github: "https://github.com/yashmankar/restaurant-system",
  //   demo: "https://restaurant-demo.vercel.app",
  //   featured: true
  // }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    AOS.init({ 
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.featured === (filter === "featured"));

  return (
    <section id="projects" className="relative bg-black py-28 px-4 sm:px-8 lg:px-16 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20" data-aos="fade-down">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 mb-4">
            My Projects
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Showcasing innovative solutions and cutting-edge implementations
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12" data-aos="fade-up">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={`px-6 py-2 text-sm font-medium rounded-l-lg ${
                filter === "all" 
                  ? "bg-yellow-500 text-black" 
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              All Projects
            </button>
            <button
              type="button"
              onClick={() => setFilter("featured")}
              className={`px-6 py-2 text-sm font-medium rounded-r-lg ${
                filter === "featured" 
                  ? "bg-yellow-500 text-black" 
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Featured
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-red-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative h-full bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 shadow-xl">
                {/* <div className="h-60 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div> */}
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    {project.featured && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-500 text-black">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-400 mb-6">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-700 rounded-full text-xs text-yellow-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center px-4 py-2 border border-gray-600 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition"
                      >
                        <FiGithub className="mr-2" />
                        Code
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 flex items-center justify-center px-4 py-2 bg-yellow-500 rounded-lg text-black font-medium hover:bg-yellow-600 transition"
                    >
                      <FiExternalLink className="mr-2" />
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-16" data-aos="fade-up">
          <a
            href="https://github.com/YashMankar1812"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-gray-600 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition"
          >
            View All Projects on GitHub
            <FiGithub className="ml-2" />
          </a>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;