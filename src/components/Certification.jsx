import React, { useState, useRef, useEffect } from 'react';
import Academics from './Academics';
import freecodecamp from '../assets/freecodecamp.png';
import skyscanner from '../assets/Skyscanner.png';
import gitgithub from '../assets/Git_Github.png';
import Java from '../assets/Java.png';

const certifications = [
  {
    id: 1,
    title: 'Responsive Web Design',
    organization: 'freeCodeCamp',
    imgSrc: freecodecamp,
    details: 'Mastered HTML, CSS, and responsive design principles.',
  },
  {
    id: 2,
    title: 'Front End Development Libraries',
    organization: 'Skyscanner',
    imgSrc: skyscanner,
    details: 'Proficient in React, Redux, and modern front-end tools.',
  },
  {
    id: 3,
    title: 'Java Basic',
    organization: 'Geekster',
    imgSrc: Java,
    details: 'Solid foundation in Java programming and OOP concepts.',
  },
  {
    id: 4,
    title: 'Git & GitHub',
    organization: 'Geekster',
    imgSrc: gitgithub,
    details: 'Expertise in version control and collaborative development workflows.',
  },
];

const Certifications = () => {
  const [activeCert, setActiveCert] = useState(certifications[0]);
  const detailsRef = useRef(null);

  const handleCertClick = (cert) => {
    setActiveCert(cert);
    if (detailsRef.current) {
      detailsRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (detailsRef.current) {
      detailsRef.current.style.transition = 'opacity 0.3s ease-in-out';
    }
  }, []);

  return (
    <>
      <section className="py-20 bg-black text-gray-200 h-screen
      " id="certificate">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
            My Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Certification List */}
            <aside className="md:col-span-1 p-6 rounded-lg shadow-md">
              <nav>
                <ul className="space-y-4">
                  {certifications.map((cert) => (
                    <li
                      key={cert.id}
                      className={`cursor-pointer py-3 px-5 rounded-lg transition-colors duration-200 ${
                        activeCert.id === cert.id
                          ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white'
                          : 'hover:bg-slate-700'
                      }`}
                      onClick={() => handleCertClick(cert)}
                    >
                      <button className="w-full text-left font-medium">{cert.title}</button>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* Certification Details */}
            <article
              ref={detailsRef}
              className="md:col-span-2 p-8  overflow-y-auto max-h-[500px]"
            >
              <div className="flex flex-col items-center">
                <img
                  src={activeCert.imgSrc}
                  alt={activeCert.title}
                  className="w-64 h-auto object-contain rounded-lg mb-6"
                />
                <h3 className="text-2xl font-semibold mb-2 text-white">{activeCert.title}</h3>
                <p className="text-yellow-400 mb-4">{activeCert.organization}</p>
                <p className="text-gray-300">{activeCert.details}</p>
              </div>
            </article>
          </div>
        </div>
      </section>
      <Academics />
    </>
  );
};

export default Certifications;