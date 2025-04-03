// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import About from './components/About'
// import Skills from './components/Skills'
// import Projects from './components/Project'
// import Academics from './components/Academics'
// import Contact from './components/Contact'
// import Footer from './components/Footer'
// import TypingText from './components/TypingText'
// import Certifications from './components/Certification'





// function App() {
//   const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

//   const toggleTheme = () => {
//     setTheme(theme === 'light' ? 'dark' : 'light');
//   };
  

//   return (
//     <>                                 
//      <div className="bg-gradient-to-r from-[#e02aff] via-[#c12127] to-[#fb8817] border-t border-gray-300  pt-2 text-center ">
//     </div>
//     <Navbar toggleTheme = {toggleTheme}/>
//     <Hero/>
//     <About/>
//     <Skills/>
//     <Certifications/>
//     <Academics/>
//     <Projects/>
//     <Contact/>
//     <Footer/>
//       <div className="bg-gradient-to-r from-[#e02aff] via-[#c12127] to-[#fb8817] border-t border-gray-300  pt-2 text-center ">
//       </div>
//     </>
//   )
// }

// export default App





import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Project from './components/Project';
import Academics from './components/Academics';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Certifications from './components/Certification';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Router>
      <div className={`app ${theme}`}>
        {/* Top Gradient Bar */}
        <div className="bg-gradient-to-r from-[#e02aff] via-[#c12127] to-[#fb8817] border-t border-gray-300 pt-2 text-center "></div>
        
        {/* Navbar */}
        <Navbar toggleTheme={toggleTheme} />

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work/>} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer */}

        <Footer />
        {/* Bottom Gradient Bar */}
        <div className="bg-gradient-to-r from-[#e02aff] via-[#c12127] to-[#fb8817] border-t border-gray-300 pt-2 text-center "></div>
      </div>
    </Router>
  );
}

export default App;
