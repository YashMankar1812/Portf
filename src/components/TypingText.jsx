import React, { useEffect, useState } from 'react';

const TypingText = () => {
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  // Professional text variations
  const texts = [
    "Hello, I'm Yash Mankar",
    "Front-End Developer",
    "UI/UX Enthusiast",
    "React Specialist",
    "Web Technologies Expert",
    "Responsive Design Advocate",
    "Clean Code Practitioner",
    "User Experience Focused",
    "Performance Optimizer",
    "Interactive Web Solutions",
    "Modern Web Applications",
    "Cross-Platform Developer"
  ];

  // Animation timing configuration
  const animationConfig = {
    typingDelay: 10,       // Slightly slower for better readability
    erasingDelay: 30,
    newTextDelay: 1500,
    // initialDelay: 500      // Added initial delay for better UX
  };

  useEffect(() => {
    setIsMounted(true); // Track component mount state
    
    const { typingDelay, erasingDelay, newTextDelay, initialDelay } = animationConfig;
    let typingTimeout;
    let erasingTimeout;
    let initialTimeout;

    const handleTyping = () => {
      if (!isMounted) return;
      
      if (isTyping && charIndex < texts[index].length) {
        typingTimeout = setTimeout(() => {
          setCharIndex(prev => prev + 1);
        }, typingDelay);
      } else if (!isTyping && charIndex > 0) {
        erasingTimeout = setTimeout(() => {
          setCharIndex(prev => prev - 1);
        }, erasingDelay);
      } else if (isTyping && charIndex === texts[index].length) {
        setTimeout(() => setIsTyping(false), newTextDelay);
      } else if (!isTyping && charIndex === 0) {
        setIsTyping(true);
        setIndex(prev => (prev + 1) % texts.length);
      }
    };

    // Initial delay before starting animation
    initialTimeout = setTimeout(handleTyping, initialDelay);

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(erasingTimeout);
      clearTimeout(initialTimeout);
      setIsMounted(false);
    };
  }, [charIndex, isTyping, index, isMounted]);

  return (
    <div className="typing-text-container w-full max-w-4xl mx-auto px-4">
      <div className="text-wrapper">
        <span 
          className="
            text-2xl sm:text-3xl md:text-4xl 
            font-bold 
            text-transparent bg-clip-text 
            bg-gradient-to-r from-blue-400 to-purple-600
            dark:from-pink-400 dark:to-blue-500
            transition-colors duration-300
            inline-block min-h-[2.5rem] sm:min-h-[3rem] md:min-h-[3.5rem]
          "
          aria-live="polite"
        >
          {texts[index].substring(0, charIndex)}
          <span className="cursor animate-pulse">|</span>
        </span>
      </div>
      
      <style jsx>{`
        .cursor {
          opacity: 0;
          animation: blink 1s infinite;
        }
        
        @keyframes blink {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default TypingText;