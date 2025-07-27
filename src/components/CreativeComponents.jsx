import React, { useEffect, useRef } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

// 3D Card Component
export const Card3D = ({ children, className = '' }) => {
  const cardRef = useRef(null);
  const x = useSpring(0, { stiffness: 300, damping: 30 });
  const y = useSpring(0, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(y, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = (e.clientX - centerX) / rect.width;
    const distanceY = (e.clientY - centerY) / rect.height;
    
    x.set(distanceX);
    y.set(distanceY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={`relative ${className}`}
    >
      <div className="relative z-10" style={{ transform: 'translateZ(50px)' }}>
        {children}
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-purple-500/20 blur-xl" 
        style={{ transform: 'translateZ(-50px)' }} 
      />
    </motion.div>
  );
};

// Blob Background Component
export const BlobBackground = ({ color = 'primary' }) => {
  const colors = {
    primary: 'from-primary-500/20 to-purple-500/20',
    secondary: 'from-blue-500/20 to-cyan-500/20',
    accent: 'from-pink-500/20 to-orange-500/20',
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className={`absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br ${colors[color]} rounded-full blur-3xl`}
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className={`absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl ${colors[color]} rounded-full blur-3xl`}
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 10,
        }}
      />
    </div>
  );
};

// Terminal Component
export const Terminal = ({ commands = [], className = '' }) => {
  const [currentLine, setCurrentLine] = React.useState(0);
  const [currentChar, setCurrentChar] = React.useState(0);
  const [displayedCommands, setDisplayedCommands] = React.useState([]);

  useEffect(() => {
    if (currentLine >= commands.length) return;

    const currentCommand = commands[currentLine];
    const timeout = setTimeout(() => {
      if (currentChar < currentCommand.text.length) {
        setCurrentChar(currentChar + 1);
      } else {
        setDisplayedCommands([...displayedCommands, currentCommand]);
        setCurrentLine(currentLine + 1);
        setCurrentChar(0);
      }
    }, 50);

    return () => clearTimeout(timeout);
  }, [currentLine, currentChar, commands, displayedCommands]);

  return (
    <div className={`bg-gray-900 rounded-lg overflow-hidden shadow-2xl ${className}`}>
      <div className="flex items-center gap-2 px-4 py-2 bg-gray-800">
        <div className="w-3 h-3 bg-red-500 rounded-full" />
        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
        <div className="w-3 h-3 bg-green-500 rounded-full" />
        <span className="ml-2 text-sm text-gray-400">terminal</span>
      </div>
      <div className="p-4 font-mono text-sm">
        {displayedCommands.map((cmd, index) => (
          <div key={index} className="mb-2">
            <span className="text-green-400">$</span>
            <span className="text-gray-100 ml-2">{cmd.text}</span>
            {cmd.output && (
              <div className="text-gray-400 mt-1 ml-4">{cmd.output}</div>
            )}
          </div>
        ))}
        {currentLine < commands.length && (
          <div>
            <span className="text-green-400">$</span>
            <span className="text-gray-100 ml-2">
              {commands[currentLine].text.slice(0, currentChar)}
              <span className="inline-block w-2 h-4 bg-gray-100 animate-pulse ml-1" />
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

// Marquee Component
export const Marquee = ({ children, speed = 50, className = '' }) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className="flex gap-8"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          x: {
            duration: speed,
            repeat: Infinity,
            ease: 'linear',
          },
        }}
      >
        <div className="flex gap-8 flex-shrink-0">{children}</div>
        <div className="flex gap-8 flex-shrink-0">{children}</div>
      </motion.div>
    </div>
  );
};

// Sparkles Effect
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

// Confetti Component
export const Confetti = ({ active = false }) => {
  const colors = ['#f87171', '#fbbf24', '#34d399', '#60a5fa', '#a78bfa', '#f472b6'];
  
  if (!active) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2"
          style={{
            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
            left: `${Math.random() * 100}%`,
          }}
          initial={{ y: -20, opacity: 1, rotate: 0 }}
          animate={{
            y: window.innerHeight + 20,
            opacity: 0,
            rotate: Math.random() * 360,
          }}
          transition={{
            duration: Math.random() * 2 + 1,
            delay: Math.random() * 0.5,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
};
