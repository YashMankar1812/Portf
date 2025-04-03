import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHtml5, 
  faCss3Alt, 
  faJs, 
  faGitAlt, 
  faGithub, 
  faReact, 
  faNodeJs, 
  faBootstrap, 
  faJava 
} from '@fortawesome/free-brands-svg-icons';
import { faWind } from '@fortawesome/free-solid-svg-icons';
import { SiFirebase, SiMongodb } from 'react-icons/si';
import { BiLogoVisualStudio } from "react-icons/bi";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out-quad'
    });
  }, []);

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", icon: faHtml5, color: "text-orange-500" },
        { name: "CSS3", icon: faCss3Alt, color: "text-blue-500" },
        { name: "JavaScript", icon: faJs, color: "text-yellow-400" },
        { name: "React", icon: faReact, color: "text-cyan-400" },
        { name: "Bootstrap", icon: faBootstrap, color: "text-purple-500" },
        { name: "Tailwind CSS", icon: faWind, color: "text-teal-400" }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: faNodeJs, color: "text-green-500" },
        { name: "Firebase", icon: SiFirebase, color: "text-yellow-400" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
        { name: "Java", icon: faJava, color: "text-red-500" }
      ]
    },
    {
      title: "Development Tools",
      skills: [
        { name: "Git", icon: faGitAlt, color: "text-red-500" },
        { name: "GitHub", icon: faGithub, color: "text-gray-300" },
        { name: "VS Code", icon: BiLogoVisualStudio, color: "text-blue-400" }
      ]
    }
  ];

  return (
    <section 
      id="skills"
      className="py-20 bg-black"
      aria-labelledby="skills-heading"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 
            id="skills-heading"
            className="text-4xl md:text-5xl font-bold text-gray-300 dark:text-white mb-4"
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-500">Skills</span>
          </h2>
          <p className="text-lg text-gray-400 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I've mastered to build modern web applications
          </p>
        </div>

        {skillCategories.map((category, index) => (
          <div 
            key={index} 
            className="mb-16"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-300 dark:text-white mb-8 text-center">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {category.skills.map((skill, skillIndex) => (
                <div 
                  key={skillIndex}
                  className="flex flex-col items-center p-6 bg-gray-700 dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  data-aos="zoom-in"
                  data-aos-delay={skillIndex * 50}
                  aria-label={skill.name}
                >
                  {typeof skill.icon === 'object' ? (
                    <FontAwesomeIcon 
                      icon={skill.icon} 
                      className={`text-5xl ${skill.color} mb-3`} 
                    />
                  ) : (
                    <skill.icon 
                      size={40} 
                      className={`${skill.color} text-5xl mb-3`} 
                    />
                  )}
                  <span className="text-gray-300 dark:text-gray-200 font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;