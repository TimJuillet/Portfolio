import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Folder = ({ title, children, defaultOpen = false, className = '' }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`folder ${className}`}>
      <motion.div
        className="folder-header cursor-pointer select-none"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-t-lg border border-gray-200 dark:border-gray-700">
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
            className="flex-shrink-0"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-gray-500 dark:text-gray-400">
              <path d="M7.5 10L12.5 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d={isOpen ? "" : "M10 7.5L10 12.5"} stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </motion.div>
          
          <div className="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary-500">
              <path d="M3 7C3 5.89543 3.89543 5 5 5H9L10.5 7H19C20.1046 7 21 7.89543 21 9V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V7Z" 
                fill="currentColor" 
                fillOpacity="0.2" 
                stroke="currentColor" 
                strokeWidth="2"
              />
            </svg>
            <span className="font-medium text-gray-700 dark:text-gray-200">{title}</span>
          </div>
        </div>
      </motion.div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-4 bg-white dark:bg-gray-900 border-x border-b border-gray-200 dark:border-gray-700 rounded-b-lg">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// File Component to use inside Folder
export const File = ({ name, icon, onClick, className = '' }) => {
  return (
    <motion.div
      className={`flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors ${className}`}
      whileHover={{ x: 4 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      <div className="flex-shrink-0 text-gray-400">
        {icon || (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 4C4 2.89543 4.89543 2 6 2H11L13 4H14C15.1046 4 16 4.89543 16 6V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" 
              stroke="currentColor" 
              strokeWidth="2"
            />
          </svg>
        )}
      </div>
      <span className="text-gray-700 dark:text-gray-300">{name}</span>
    </motion.div>
  );
};

// Fancy Folder with 3D effect
export const Folder3D = ({ title, children, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`relative perspective-1000 ${className}`}>
      <motion.div
        className="relative transform-style-preserve-3d cursor-pointer"
        animate={{ rotateX: isOpen ? -30 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Folder Back */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg transform rotateX-30 translate-z-10" />
        
        {/* Folder Front */}
        <div className="relative bg-gradient-to-br from-yellow-300 to-orange-400 rounded-lg p-6 shadow-xl">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <motion.svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none"
              animate={{ rotate: isOpen ? 180 : 0 }}
              className="text-white"
            >
              <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </motion.svg>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="mt-4 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-2xl"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Add framer-motion as a dependency for these components to work
// npm install framer-motion
