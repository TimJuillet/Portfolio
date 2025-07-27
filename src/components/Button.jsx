import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  disabled = false,
  className = '',
  icon,
  loading = false,
  type = 'button',
  ...props 
}) => {
  const variants = {
    primary: 'bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200',
    secondary: 'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700',
    ghost: 'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        inline-flex items-center justify-center font-medium rounded-md 
        transition-colors duration-200
        ${variants[variant]} 
        ${sizes[size]} 
        ${disabled || loading ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}
        ${className}
      `}
      whileHover={!disabled && !loading ? { scale: 1.02 } : {}}
      whileTap={!disabled && !loading ? { scale: 0.98 } : {}}
      {...props}
    >
      {/* Content */}
      <span className="inline-flex items-center gap-2">
        {loading && (
          <motion.svg
            className="w-4 h-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="12" cy="12" r="10" strokeWidth="2" opacity="0.25" />
            <path d="M12 2a10 10 0 0 1 10 10" strokeWidth="2" strokeLinecap="round" />
          </motion.svg>
        )}
        {icon && !loading && <span className="flex-shrink-0">{icon}</span>}
        {children}
      </span>
    </motion.button>
  );
};

// Floating Action Button
export const FloatingButton = ({ children, onClick, className = '' }) => {
  return (
    <motion.button
      onClick={onClick}
      className={`
        fixed bottom-8 right-8 w-12 h-12 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 
        rounded-full shadow-lg flex items-center justify-center
        hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors z-40
        ${className}
      `}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      {children}
    </motion.button>
  );
};

// Icon Button
export const IconButton = ({ icon, onClick, className = '', ariaLabel }) => {
  return (
    <motion.button
      onClick={onClick}
      aria-label={ariaLabel}
      className={`
        p-2 rounded-md bg-gray-100 dark:bg-gray-800 
        text-gray-700 dark:text-gray-300
        hover:bg-gray-200 dark:hover:bg-gray-700
        transition-colors ${className}
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
    </motion.button>
  );
};
