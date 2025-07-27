import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TypewriterText, GradientText, BlurText, Sparkles } from './TextAnimations';
import { Button, MagneticButton } from './Button';
import { Terminal } from './CreativeComponents';
import profilePic from '../assets/pp.jpg';
import cvPdf from '../assets/cv-llt-full_compressed.pdf';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  
  // Parallax effects
  const y1 = useTransform(scrollY, [0, 300], [0, 50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const titles = [
    "Full-Stack Engineer",
    "ML Engineer",
    "AI Enthusiast",
    "Problem Solver",
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Terminal commands
  const terminalCommands = [
    { text: 'whoami', output: 'Timothée Juillet' },
    { text: 'cat skills.txt', output: 'Python, Java, React, AI/ML, Cloud...' },
    { text: 'ls projects/', output: 'AI-Research/ Log-Analyzer/ Vietnam-App/' },
    { text: 'echo "Let\'s build something amazing!"', output: 'Let\'s build something amazing!' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />
        
        {/* Gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary-500/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 2,
            y: mousePosition.y * 2,
          }}
          transition={{ type: "spring", stiffness: 50 }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
          animate={{
            x: -mousePosition.x * 2,
            y: -mousePosition.y * 2,
          }}
          transition={{ type: "spring", stiffness: 50 }}
        />
        
        {/* Noise texture */}
        <div className="noise" />
      </div>

      {/* Floating elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 left-10 w-20 h-20 border-2 border-primary-500/20 rounded-lg"
        animate={{
          rotate: 360,
          borderRadius: ["20%", "40%", "20%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <span className="inline-block px-4 py-2 bg-primary-500/10 dark:bg-primary-500/20 text-primary-500 rounded-full text-sm font-medium">
                <Sparkles>👋 Welcome to my portfolio</Sparkles>
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            >
              <BlurText delay={0.2}>
                I'm <GradientText>Timothée Juillet</GradientText>
              </BlurText>
            </motion.h1>

            {/* Dynamic Title */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl sm:text-2xl md:text-3xl font-medium mb-8 h-10"
            >
              <TypewriterText
                key={currentTitleIndex}
                text={titles[currentTitleIndex]}
                speed={50}
                className="text-gray-700 dark:text-gray-300"
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed"
            >
              Full-Stack / ML Engineer at Amadeus. Final year Computer Science student
              at Polytech Nice-Sophia, specialized in AI and data engineering. 
              Passionate about developing innovative solutions combining software engineering and machine learning.
            </motion.p>

            {/* Current Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 text-green-600 dark:text-green-400 rounded-full text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Currently at Amadeus
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-sm">
                📍 Sophia Antipolis, France
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full text-sm">
                🎓 Polytech Nice-Sophia
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <MagneticButton
                variant="gradient"
                size="lg"
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                icon={
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                    <path d="M10 4v12m0 0l-6-6m6 6l6-6" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                }
              >
                View my projects
              </MagneticButton>
              
              <Button
                variant="secondary"
                size="lg"
                onClick={() => window.open(cvPdf, '_blank')}
                icon={
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                    <path d="M12 10v6m0 0l-3-3m3 3l3-3m2-5v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                }
              >
                Download CV
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="mt-8 flex justify-center lg:justify-start gap-4"
            >
              {[
                { icon: 'github', href: 'https://github.com/TimJuillet' },
                { icon: 'linkedin', href: 'https://linkedin.com/in/timothée-juillet' },
                { icon: 'email', href: 'mailto:timotheejuillet@gmail.com' },
              ].map((social, index) => (
                <motion.a
                  key={social.icon}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon === 'github' && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  )}
                  {social.icon === 'linkedin' && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  )}
                  {social.icon === 'email' && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Profile & Terminal */}
          <div className="hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="relative"
            >
              {/* Profile Image Container */}
              <motion.div
                className="relative w-64 h-64 mx-auto mb-8"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full blur-2xl opacity-50" />
                <div className="relative w-full h-full bg-gradient-to-r from-primary-500 to-purple-500 rounded-full p-1">
                  <img 
                    src={profilePic} 
                    alt="Timothée Juillet"
                    className="w-full h-full object-cover object-center rounded-full"
                  />
                </div>
              </motion.div>

              {/* Terminal */}
              <Terminal commands={terminalCommands} className="max-w-md mx-auto" />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center text-gray-400 dark:text-gray-600"
        >
          <span className="text-sm mb-2">Scroll</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 5v14m0 0l7-7m-7 7l-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
