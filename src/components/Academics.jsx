// import React from 'react';

// const Academics = () => {
//   const educationDetails = [
//     {
//       level: "SSC-X (2017-2018)",
//       school: "Om Sai International Public School Sausar",
//       board: "CBSE School Education",
//       percentage: "8.6 CGPA",
//     },
//     {
//       level: "HSC-XII (2019-2020)",
//       school: "New Sunflower Higher Secondary School Sausar",
//       board: "State Board of Education",
//       percentage: "69.9%",
//     },
//     {
//       level: "BCA (2020-2022)",
//       school: "Santaji Mahavidhyalay Nagpur University",
//       board: "RTMNU University Nagpur",
//       percentage: "79.96%",
//     },
//   ];

//   return (
//     <div 
//     // style={{
//     //   background: 'linear-gradient(to bottom, #1a1a2e, #16213e, #0f3460)',    }}
//      className=" text-gray-200 py-20 bg-slate-800 dark:bg-black">
//     <div className="max-w-6xl mx-auto px-4">
//       <h2 className="text-4xl font-bold text-gray-400 dark:text-white text-center py-8">
//         My <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to to-blue-500">Academics</span>
//       </h2>
//       {/* Responsive grid layout for displaying divs in a row */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {educationDetails.map((education, index) => (
//           <div
//             key={index}
//             className="p-6 bg-trasnparent shadow-lg rounded-lg border border-gray-200  dark:border-gray-200 transition-transform duration-300 hover:scale-105"
//           >
//             <h3 className="text-2xl font-semibold mb-2 text-yellow-200 dark:text-yellow-600">{education.level}</h3>
//             <p className="text-gray-100 dark:text-gray-00">{education.school}</p>
//             <p className="text-gray-500 dark:text-gray-400">{education.board}</p>
//             <p className="font-semibold text-green-500 dark:text-pink-200 mt-4">Per :   {education.percentage}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>
  
    
//   );
// };

// export default Academics;





import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Academics = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const educationDetails = [
    {
      level: "Secondary School (X)",
      period: "2017-2018",
      school: "Om Sai International Public School",
      location: "Sausar, Madhya Pradesh",
      board: "CBSE Board",
      percentage: "8.6 CGPA",
      icon: "🎓",
    },
    {
      level: "Higher Secondary (XII)",
      period: "2019-2020",
      school: "New Sunflower Higher Secondary School",
      location: "Sausar, Madhya Pradesh",
      board: "MP State Board",
      percentage: "69.9%",
      icon: "📚",
    },
    {
      level: "Bachelor of Computer Applications",
      period: "2020-2023",
      school: "Santaji Mahavidyalaya",
      location: "Nagpur, Maharashtra",
      board: "RTM Nagpur University",
      percentage: "79.96%",
      icon: "💻",
    },
  ];

  return (
    <section id="academics" className="py-20 bg-black font-mono">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-600">
            Academic Journey
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-emerald-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
          {educationDetails.map((education, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="relative bg-gray-800 rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-emerald-500/20 hover:-translate-y-2 border border-gray-700"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-emerald-600"></div>
              <div className="p-6">
                <div className="flex items-start">
                  <span className="text-3xl mr-4">{education.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{education.level}</h3>
                    <p className="text-sm text-cyan-400 font-medium">{education.period}</p>
                  </div>
                </div>
                
                <div className="mt-5 space-y-3">
                  <div>
                    <p className="text-xs text-gray-400">Institution</p>
                    <p className="text-white font-medium">{education.school}</p>
                    <p className="text-sm text-gray-400">{education.location}</p>
                  </div>
                  
                  <div>
                    <p className="text-xs text-gray-400">Board/University</p>
                    <p className="text-white font-medium">{education.board}</p>
                  </div>
                  
                  <div>
                    <p className="text-xs text-gray-400">Performance</p>
                    <p className="text-emerald-400 font-bold text-lg">{education.percentage}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-16 text-center" data-aos="fade-up">
          <p className="text-gray-400 max-w-2xl mx-auto">
            My academic journey reflects my dedication to learning and adapting to new challenges in the field of technology.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default Academics;