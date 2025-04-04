import { useEffect, useState } from "react";
import { FaWhatsapp, FaArrowUp } from "react-icons/fa";

const FloatingButtons = () => {
  const [showButton, setShowButton] = useState(false);

  // Scroll event listener to show/hide the button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-5 right-5 flex flex-col space-y-3 z-50">
      {/* WhatsApp Button */}
      {/* <a
        href="https://wa.me/yourphonenumber"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-red-700 hover:bg-red-800 text-white p-3 rounded-lg shadow-lg transition duration-300"
      >
        <FaWhatsapp className="text-2xl" />
      </a> */}

      {/* Scroll to Top Button (only show when scrolled) */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="bg-sky-400 hover:bg-orange-500 text-white p-3 rounded-full shadow-lg transition duration-300"
        >
          <FaArrowUp className="text-2xl" />
        </button>
      )}
    </div>
  );
};

export default FloatingButtons;
