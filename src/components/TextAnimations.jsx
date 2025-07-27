import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

// Split Text Animation Component
export const SplitText = ({ children, className = '', delay = 0, stagger = 0.05 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const words = children.split(' ');

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block">
          {word.split('').map((char, charIndex) => {
            const index = wordIndex * 10 + charIndex;
            return (
              <span
                key={charIndex}
                className={`inline-block transition-all duration-700 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`}
                style={{
                  transitionDelay: `${delay + index * stagger}s`,
                }}
              >
                {char}
              </span>
            );
          })}
          <span className="inline-block">&nbsp;</span>
        </span>
      ))}
    </span>
  );
};

// Blur Text Reveal Component
export const BlurText = ({ children, className = '', delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <span
      ref={ref}
      className={`inline-block transition-all duration-1000 ${className} ${
        isVisible 
          ? 'opacity-100 blur-0 translate-y-0' 
          : 'opacity-0 blur-sm translate-y-4'
      }`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </span>
  );
};

// Typewriter Effect Component
export const TypewriterText = ({ text, speed = 50, className = '', onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, speed, onComplete]);

  return (
    <span className={className}>
      {displayedText}
      {currentIndex < text.length && (
        <span className="inline-block w-[2px] h-5 bg-current animate-pulse ml-0.5" />
      )}
    </span>
  );
};

// Glitch Text Component
export const GlitchText = ({ children, className = '' }) => {
  const [glitchActive, setGlitchActive] = useState(false);

  const triggerGlitch = () => {
    setGlitchActive(true);
    setTimeout(() => setGlitchActive(false), 200);
  };

  useEffect(() => {
    const interval = setInterval(triggerGlitch, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span 
      className={`relative inline-block ${className}`}
      onMouseEnter={triggerGlitch}
    >
      <span className="relative z-10">{children}</span>
      {glitchActive && (
        <>
          <span 
            className="absolute top-0 left-0 text-primary-500 opacity-70"
            style={{ transform: 'translate(-2px, -2px)' }}
          >
            {children}
          </span>
          <span 
            className="absolute top-0 left-0 text-cyan-500 opacity-70"
            style={{ transform: 'translate(2px, 2px)' }}
          >
            {children}
          </span>
        </>
      )}
    </span>
  );
};

// Gradient Text Component
export const GradientText = ({ children, className = '', gradient = 'from-primary-500 via-pink-500 to-purple-500' }) => {
  return (
    <span className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
};

export const Sparkles = ({ children }) => {
  const [sparkles, setSparkles] = React.useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const sparkle = {
        id: Date.now(),
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
      };
      setSparkles((prev) => [...prev, sparkle]);
      
      setTimeout(() => {
        setSparkles((prev) => prev.filter((s) => s.id !== sparkle.id));
      }, 1000);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-block">
      {children}
      {sparkles.map((sparkle) => (
        <motion.span
          key={sparkle.id}
          className="absolute pointer-events-none"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
          }}
        >
          <svg
            width={sparkle.size * 2}
            height={sparkle.size * 2}
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-yellow-400"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </motion.span>
      ))}
    </span>
  );
};

// Animated Counter Component
export const AnimatedCounter = ({ value, duration = 2000, className = '' }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [value, duration, isVisible]);

  return <span ref={ref} className={className}>{count}</span>;
};
