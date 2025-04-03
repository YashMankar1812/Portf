import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faCode } from '@fortawesome/free-solid-svg-icons';

import AOS from 'aos';
import 'aos/dist/aos.css';

// Import all images at the top
import BurgerKing from '../assets/BurgerKing.png';
import EmojiApp from '../assets/Emoji.png';
import Calci from '../assets/Calci.png';
import GymProject from '../assets/Gym.png';
import BusinessPage from '../assets/Bussiness.png';
import AmazonUI from '../assets/Amazon.png';
import YouTubeUI from '../assets/youtube.png';
import DiviTeam from '../assets/Divi.png';
import PokemonApp from '../assets/Pokemon.png';
import MovieApp from '../assets/MovieApp.png';
import ImageGenerator from '../assets/ImageGeneration.png';
import Ecommerce from '../assets/Ecommerce.png';
import PeopleManagement from '../assets/PeopleManagement.png';

const Work = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const projects = [
    {
      title: 'Gym Project',
      imgSrc: GymProject,
      liveDemo: 'https://gym-project-green-delta.vercel.app/',
      githubRepo: '',
      description: 'A fully responsive gym website with modern UI and animations',
      language: 'HTML/CSS',
      tags: ['Responsive', 'Modern UI'],
    },
    {
      title: 'Business Page',
      imgSrc: BusinessPage,
      liveDemo: 'https://yashmankar1812.github.io/BussinessPage/',
      githubRepo: '',
      description: 'Sleek business page showcasing company services with smooth transitions',
      language: 'HTML/Tailwind',
      tags: ['Tailwind CSS', 'Business'],
    },
    // {
    //   title: 'Amazon UI Clone',
    //   imgSrc: AmazonUI,
    //   liveDemo: 'https://yashmankar1812.github.io/Weekly_Test-5/',
    //   githubRepo: '',
    //   description: 'High-fidelity Amazon UI clone with product listings',
    //   language: 'HTML/CSS',
    //   tags: ['UI Clone', 'E-commerce'],
    // },
    // {
    //   title: 'YouTube UI Clone',
    //   imgSrc: YouTubeUI,
    //   liveDemo: 'https://youtube-ui-ten.vercel.app/',
    //   githubRepo: '',
    //   description: 'Responsive YouTube interface with dark mode support',
    //   language: 'HTML/CSS',
    //   tags: ['Dark Mode', 'Responsive'],
    // },
    {
      title: 'Divi Team Work',
      imgSrc: DiviTeam,
      liveDemo: 'https://aditya234892.github.io/ELEGANT-THEMES-Team/divi/divi',
      githubRepo: '',
      description: 'Collaborative project with Divi theme integration',
      language: 'JavaScript',
      tags: ['Team Project', 'Theme Integration'],
    },
    {
      title: 'Basic Calculator',
      imgSrc: Calci,
      liveDemo: 'https://unified-mentor-4gmv.vercel.app/',
      githubRepo: '',
      description: 'Interactive calculator with keyboard support',
      language: 'JavaScript',
      tags: ['Interactive', 'Utility'],
    },
    {
      title: 'Emoji App',
      imgSrc: EmojiApp,
      liveDemo: 'https://emogi.netlify.app/',
      githubRepo: '',
      description: 'Search and share emojis with category filters',
      language: 'JavaScript',
      tags: ['API', 'Fun'],
    },
    {
      title: 'Burger King Clone',
      imgSrc: BurgerKing,
      liveDemo: 'https://burger-king-chi.vercel.app/',
      githubRepo: '',
      description: 'Food ordering interface with cart functionality',
      language: 'JavaScript',
      tags: ['Food App', 'Ordering'],
    },
    {
      title: 'Pokémon App',
      imgSrc: PokemonApp,
      liveDemo: 'https://yashmankar1812.github.io/Pokemon/',
      githubRepo: '',
      description: 'Pokémon encyclopedia with search and details',
      language: 'JavaScript',
      tags: ['API', 'Gaming'],
    },
    {
      title: 'Movie Search App',
      imgSrc: MovieApp,
      liveDemo: 'https://moviesearchappp.netlify.app/',
      githubRepo: '',
      description: 'Find movies with details, ratings and trailers',
      language: 'JavaScript',
      tags: ['API', 'Entertainment'],
    },
    {
      title: 'AI Image Generator',
      imgSrc: ImageGenerator,
      liveDemo: 'https://geekster-react-js-ft43.vercel.app/',
      githubRepo: '',
      description: 'Generate custom images with different AI styles',
      language: 'React',
      tags: ['AI', 'Image Generation'],
    },
    {
      title: 'E-commerce Cart',
      imgSrc: Ecommerce,
      liveDemo: 'https://geekster-react-js-a8ls.vercel.app/',
      githubRepo: '',
      description: 'Shopping cart with product management',
      language: 'React',
      tags: ['E-commerce', 'State Management'],
    },
    {
      title: 'People Management',
      imgSrc: PeopleManagement,
      liveDemo: 'https://geekster-react-js-36l9.vercel.app/',
      githubRepo: '',
      description: 'CRUD application for managing user information',
      language: 'React',
      tags: ['CRUD', 'Management'],
    },
  ];

  const filteredProjects = selectedLanguage === 'All' 
    ? projects 
    : projects.filter(project => project.language.includes(selectedLanguage));

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  return (
    <section id="work" className="relative py-20 bg-black overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-600 mb-4">
            My Work
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A collection of my work showcasing different technologies and solutions
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center gap-3 mb-12" data-aos="fade-up">
          {['All', 'HTML/CSS', 'JavaScript', 'React'].map((language) => (
            <button
              key={language}
              onClick={() => {
                setSelectedLanguage(language);
                setCurrentPage(1);
              }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedLanguage === language
                  ? 'bg-gradient-to-r from-cyan-500 to-emerald-600 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {language}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 100}
              className="relative group overflow-hidden rounded-xl bg-gray-800 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-gray-700"
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Project Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 flex flex-col justify-end">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-700/50 text-xs rounded-full text-cyan-400">
                        {tag}
                      </span>
                    ))}
                    <span className="px-2 py-1 bg-gray-700/50 text-xs rounded-full text-emerald-400">
                      {project.language}
                    </span>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-emerald-600 hover:from-cyan-600 hover:to-emerald-700 text-white text-sm font-medium py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-all"
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} className="text-xs" />
                      Live Demo
                    </a>
                    {project.githubRepo && (
                      <a
                        href={project.githubRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-all"
                      >
                        <FontAwesomeIcon icon={faCode} className="text-xs" />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-16" data-aos="fade-up">
            <nav className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                &lt;
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 flex items-center justify-center rounded-full ${
                    currentPage === page
                      ? 'bg-gradient-to-r from-cyan-500 to-emerald-600 text-white'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  } transition-all`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                &gt;
              </button>
            </nav>
          </div>
        )}
      </div>
    </section>
  );
};

export default Work;





// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub } from '@fortawesome/free-brands-svg-icons';
// // import { AiFillEye } from 'react-icons/ai'; // Example using Ant Design icons
// import GymProjectImage from '../assets/Gym.png';



// const Projects = () => {
//   const [selectedLanguage, setSelectedLanguage] = useState('All');
//   const [currentPage, setCurrentPage] = useState(1);
//   const projectsPerPage = 6; // Number of projects per page

//   const projects = [
//     {
//       title: 'Gym Project',
//       imgSrc: GymProjectImage ,
//       liveDemo: 'https://gym-project-green-delta.vercel.app/',
//       // githubRepo: 'https://github.com/username/gym-project',
//       description: 'A fully responsive gym website with modern UI .',
//       language: 'HTML/CSS', // Add language here
//     },
//     {
//       title: 'Business Page',
//       imgSrc: '../assets/Bussiness.png',
//       liveDemo: 'https://yashmankar1812.github.io/BussinessPage/',
//       // githubRepo: 'https://github.com/yashmankar1812/BussinessPage',
//       description: 'A sleek business page to showcase company services and products.',
//       language: 'HTML/Tailwind',
//     },
//     // {
//     //   title: 'Camping Services',
//     //   imgSrc: '../assets/Camping.png',
//     //   liveDemo: 'https://weekly-t-4.vercel.app',
//     //   githubRepo: 'https://github.com/username/camping-services',
//     //   description: 'A landing page for camping services with booking options.',
//     //   language: 'Html/CSS',
//     // },
//     {
//       title: 'Amazon UI',
//       imgSrc: '../assets/Amazon.png',
//       liveDemo: 'https://yashmankar1812.github.io/Weekly_Test-5/',
//       // githubRepo: 'https://github.com/yashmankar1812/Weekly_Test-5',
//       description: 'A replica of the Amazon UI with responsive features.',
//       language: 'HTML/CSS',
//     },
//     {
//       title: 'YouTube UI',
//       imgSrc: '../assets/youtube.png',
//       liveDemo: 'https://youtube-ui-ten.vercel.app/',
//       // githubRepo: 'https://github.com/YashMankar1812/Youtube_UI',
//       description: 'A UI clone of YouTube with dark mode support.',
//       language: 'Html/CSS',
//     },


//     // Javascript 
//     {
//       title: 'Divi Team Work',
//       imgSrc: '../assets/Divi.png',
//       liveDemo: 'https://aditya234892.github.io/ELEGANT-THEMES-Team/divi/divi',
//       // githubRepo: 'https://github.com/aditya234892/ELEGANT-THEMES-Team',
//       description: 'A collaborative project with the Divi Elegant theme integration.',
//       language: 'Javascript',
//     },
//     {
//       title : 'Basic Calulator',
//       imgSrc: 'src/assets/Calci.png',
//       liveDemo : 'https://unified-mentor-4gmv.vercel.app/',
//       // githubRepo: 'https://github.com/YashMankar1812/Unified_Mentor/tree/main/0_Basic_Calculator',
//       description: 'A basic calculator web app.',
//       language: 'Javascript',
//     },
//     {
//       title: 'Emoji App',
//       imgSrc: 'src/assets/Emoji.png',
//       liveDemo: 'https://emogi.netlify.app/',
//       // githubRepo: 'https://github.com/YashMankar1812/Emoji',
//       description: 'A web app to find and share emojis.',
//       language: 'Javascript',
//     },
//     {
//       title: 'BurgerKing',
//       imgSrc: 'src/assets/BurgerKing.png',
//       liveDemo: 'https://burger-king-chi.vercel.app/',
//       // githubRepo: 'https://github.com/YashMankar1812/Burger-King',
//       description: 'A web app for ordering burgers at Burger King.',
//       language: 'Javascript',
//     },
//     {
//       title: 'Pokemon App',
//       imgSrc: '../assets/Pokemon.png',
//       liveDemo: ' https://yashmankar1812.github.io/Pokemon/',
//       // githubRepo: 'https://github.com/YashMankar1812/Pokemon',
//       description: 'A web app to explore and search for Pokémon information.',
//       language: 'Javascript',
//     },
    
//     {
//       title: 'Movie App',
//       imgSrc: '../assets/MovieApp.png',
//       liveDemo: 'https://moviesearchappp.netlify.app/',
//       // githubRepo: 'https://github.com/YashMankar1812/Movie-Search',
//       description: 'A web app for searching movies, displaying details, and user reviews.',
//       language: 'Javascript',
//     },



//     // React projects 

//     {
//       title: 'Image Generator',
//       imgSrc: '../assets/ImageGeneration.png',
//       liveDemo: 'https://geekster-react-js-ft43.vercel.app/',
//       // githubRepo: 'https://github.com/YashMankar1812/Geekster-React_JS/tree/main/Axios_hlw',
//       description: 'An image generator that lets users create and customize images with different styles.',
//       language: 'React',
//     },
//     {
//       title: 'Cart Management',
//       imgSrc: '../assets/Ecommerce.png',
//       liveDemo: 'https://geekster-react-js-a8ls.vercel.app/',
//       // githubRepo: 'https://github.com/YashMankar1812/Geekster-React_JS/tree/main/Day_6_Hlw',
//       description: 'Managing a shopping cart, allowing users to add products and adjust quantities.',
//       language: 'React',
//     },
//     {
//       title: 'People Info Management',
//       imgSrc: '../assets/PeopleManagement.png',
//       liveDemo: 'https://geekster-react-js-36l9.vercel.app/ ',
//       // githubRepo: 'https://github.com/YashMankar1812/Geekster-React_JS/tree/main/Weekly-T-3',
//       description: 'A web app for managing and displaying user information.',
//       language: 'React',
//     }
//   ];

//   // Filter projects by language
//   const filteredProjects = selectedLanguage === 'All' 
//     ? projects 
//     : projects.filter(project => project.language === selectedLanguage);

//   // Calculate total pages
//   const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

//   // Get current projects based on pagination
//   const indexOfLastProject = currentPage * projectsPerPage;
//   const indexOfFirstProject = indexOfLastProject - projectsPerPage;
//   const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

//   return (
//     <section 
//     // style={{
//     //   background: 'linear-gradient(to top, #1a1a2e, #16213e, #0f3460)',    }}
//     className="project-section py-16  h-full bg-slate-800 dark:bg-black " id="project">
//       <div className="text-center justify-evenly">
//         <h2 className="text-4xl font-bold text-gray-400 dark:text-white mt-5">
//           My <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-500">Projects</span>
//         </h2>

//         {/* Language Filter Buttons */}
//         <div className="my-4 flex justify-center space-x-4 mb-10">
//   {['All', 'HTML/CSS', 'Javascript', 'React','Mern'].map((language) => (
//     <button
//       key={language}
//       onClick={() => {
//         setSelectedLanguage(language);
//         setCurrentPage(1); // Reset to the first page
//       }}
//       className={`relative bg-transparent flex text-gray-200 px-2 py-2 rounded transition duration-300 ease-in-out ${
//         selectedLanguage === language ? 'bg-blue-600' : ''
//       } group`}
//     >
//       {language}
//       {/* Gradient underline */}
//       <span
//         className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-gradient-to-r from-pink-500 to-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
//       ></span>
//     </button>
//   ))}
// </div>


//         {/* Language Filter Buttons */}


//       </div>
  
//       <div className="project-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 md:px-16">
//       {/* <div className="project-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 md:px-16"> */}
//         {currentProjects.map((project, index) => (
//           <div key={index} className="project-item group relative overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
//             <img
//               src={project.imgSrc}
//               alt={project.title }
//               className="w-full h-53 object-cover transition-transform duration-500 transform group-hover:scale-105"
//             />

//             <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 flex flex-col justify-center items-center">
//             <a
//   href={project.liveDemo}
//   target="_blank"
//   rel="noopener noreferrer"
//   className=" text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2  transition"
// >
// <i className="fas fa-eye text-xl"></i> 
// </a>
//               <h3 className="text-white text-2xl font-semibold mb-4">{project.title}</h3>

//               <p className="text-gray-300 text-sm text-center mb-4">{project.description}</p>
//               <div className="flex space-x-4">
//                 {/* <a
//                   href={project.githubRepo}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-gradient-to-r from-pink-400 to-purple-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-600 transition flex items-center space-x-2"
//                 >
//                   <FontAwesomeIcon icon={faGithub} />
//                 </a> */}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-center mx-6 my-6">
//         <button
//           onClick={() => setCurrentPage(currentPage - 1)}
//           disabled={currentPage === 1}
//           className="bg-gray-800 text-white px-4 py-2 rounded mx-2 disabled:opacity-50"
//         >
//           Previous
//         </button>
        
//         <span className="text-white">{`${currentPage} of ${totalPages}`}</span>
//         <button
//           onClick={() => setCurrentPage(currentPage + 2)}
//           disabled={currentPage === totalPages}
//           className="bg-gray-800 text-white px-4 py-2 rounded mx-2 disabled:opacity-50"
//         >
//           Next
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Projects;
