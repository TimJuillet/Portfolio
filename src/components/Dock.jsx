import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const Dock = ({ items }) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <div className="fixed bottom-4 left-0 right-0 flex justify-center z-50">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="flex h-16 items-end gap-4 rounded-2xl bg-gray-800/90 dark:bg-gray-900/90 backdrop-blur-md px-4 pb-3 border border-gray-700 dark:border-gray-600"
      >
        {items.map((item, i) => (
          <DockIcon 
            key={item.id} 
            mouseX={mouseX} 
            item={item}
            isActive={item.isActive}
          />
        ))}
      </motion.div>
    </div>
  );
};

function DockIcon({ mouseX, item }) {
  const ref = React.useRef(null);
  const [hovered, setHovered] = useState(false);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [40, 60, 40]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="aspect-square w-10 relative"
    >
      <motion.button
        onClick={item.onClick}
        className={`
          flex aspect-square w-full items-center justify-center rounded-xl
          ${item.isActive 
            ? 'bg-white text-gray-900' 
            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }
        `}
        whileTap={{ scale: 0.95 }}
      >
        {item.icon}
        
        {/* Tooltip */}
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            className="absolute bottom-full mb-2 px-2 py-1 text-xs bg-gray-900 text-white rounded whitespace-nowrap pointer-events-none"
          >
            {item.label}
          </motion.div>
        )}
      </motion.button>
    </motion.div>
  );
}

// Floating Dock with magnetic effect
export const FloatingDock = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMousePosition({ x: x * 0.1, y: y * 0.1 });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <motion.div
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
      }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative"
        animate={{ scale: isHovered ? 1.05 : 1 }}
        transition={{ duration: 0.2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-purple-500/20 blur-xl rounded-full" />
        <div className="relative bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-full p-4 shadow-2xl">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
};
