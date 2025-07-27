import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './Button';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Concept Identification in CNN Features",
      description: "Research project developing a novel methodology for identifying and clustering visual concepts in CNN features",
      longDescription: "Developed a novel methodology for identifying and clustering visual concepts (eyes, paws, horns) in CNN features. Implemented double-clustering approach on VGG16 to automatically detect and group similar activation patterns across different animal classes.",
      tags: ["Python", "PyTorch", "KMeans", "LRP", "Research"],
      category: "ml",
      github: "https://github.com/TimJuillet/PER",
      features: [
        "Layer-wise Relevance Propagation (LRP) implementation",
        "Double-clustering approach for concept identification",
        "Automatic detection of visual patterns across classes",
        "VGG16 feature analysis and visualization"
      ],
      date: "Feb 2025",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "AI-Powered Log Analysis Tool",
      description: "Enterprise application for automated log analysis and error extraction at Amadeus",
      longDescription: "Development of an AI-powered application for automated log analysis and error extraction from the Front Office Reservation division products. Implementation of a data pipeline using Splunk, Jenkins, and Python scripts on Microsoft Azure. Integration of chatbot APIs for intelligent pattern recognition.",
      tags: ["Python", "Azure", "Splunk", "Jenkins", "AI/ML"],
      category: "ml",
      features: [
        "Automated log analysis and error extraction",
        "Data pipeline implementation on Azure",
        "Intelligent pattern recognition with chatbot APIs",
        "Automatic Splunk rule generation"
      ],
      date: "2025",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Vietnam Landmarks Recognition App",
      description: "Mobile application using CNN to recognize Vietnam's most visited places with tourist recommendations",
      longDescription: "Created a CNN model in Python able to recognise Vietnam's most visited places using Tensorflow and Jupyter. Developed a complete mobile application using React Native, Vite and Tailwind implementing the model with TensorflowJS and an API.",
      tags: ["React Native", "TensorFlow.js", "Python", "CNN", "Tailwind"],
      category: "mobile",
      features: [
        "CNN model for landmark recognition",
        "Real-time image classification",
        "Tourist recommendations and location info",
        "Cross-platform mobile application"
      ],
      date: "2024",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "Interactive Data Visualization Dashboard",
      description: "School project creating an interactive dashboard for complex data visualization",
      longDescription: "Implementation of multiple chart types with real-time filtering and responsive design. Created dynamic visualizations for complex datasets with interactive controls.",
      tags: ["D3.js", "JavaScript", "HTML/CSS", "Data Viz"],
      category: "web",
      github: "https://github.com/TimJuillet/Data_Visu_Rendu",
      features: [
        "Multiple interactive chart types",
        "Real-time data filtering",
        "Responsive design for all devices",
        "Dynamic data updates"
      ],
      date: "Jun 2024",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Olympic Games Management System",
      description: "Comprehensive system for managing Olympic Games events, athletes, and results",
      longDescription: "Implementation of complex database architecture with real-time updates. Full-stack application for managing all aspects of Olympic Games including events, athletes, schedules, and results.",
      tags: ["Java", "MySQL", "JavaFX", "JDBC"],
      category: "web",
      github: "https://github.com/TimJuillet/ProjetJO",
      features: [
        "Complex database architecture",
        "Real-time result updates",
        "Athlete and event management",
        "JavaFX desktop interface"
      ],
      date: "Apr 2024",
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 6,
      title: "AI Dinosaur Image Generator",
      description: "Personal project implementing generative AI to create dinosaur images",
      longDescription: "Exploration of GANs and diffusion models for creative image generation. Built a system capable of generating unique dinosaur images using state-of-the-art generative AI techniques.",
      tags: ["Python", "TensorFlow", "GANs", "Deep Learning"],
      category: "ml",
      github: "https://github.com/TimJuillet/Dinosaures_generate",
      features: [
        "GAN implementation for image generation",
        "Custom dataset preparation",
        "Model training and optimization",
        "Creative AI exploration"
      ],
      date: "Dec 2023",
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 7,
      title: "Polyquiz - Elderly-Friendly Quiz Platform",
      description: "User-centered quiz website designed specifically for elderly users",
      longDescription: "Group school project on Github to create a quiz website for the elderly using a user-centered approach. Focused on accessibility and ease of use.",
      tags: ["Angular", "Docker", "Playwright", "TypeScript"],
      category: "web",
      features: [
        "Elderly-friendly UI/UX design",
        "Accessibility features",
        "Docker containerization",
        "E2E testing with Playwright"
      ],
      date: "Jun 2023",
      color: "from-pink-500 to-rose-500"
    },
    {
      id: 8,
      title: "Takenoko Board Game",
      description: "Complex board game implementation with AI bots",
      longDescription: "Group school project implementing the Takenoko board game with intelligent bots. Focus on clean architecture, continuous integration, and object-oriented design principles.",
      tags: ["Java", "Maven", "GitHub Actions", "OOP"],
      category: "web",
      features: [
        "AI bot implementation",
        "Clean architecture (GRASP, SOLID)",
        "Continuous integration pipeline",
        "Comprehensive testing with Mockito"
      ],
      date: "Mar 2023",
      color: "from-teal-500 to-green-500"
    },
    {
      id: 9,
      title: "The March of the Ants",
      description: "Interactive web application simulating ant colony optimization algorithms",
      longDescription: "Developed for Terra Numerica at Inria Sophia Antipolis. Interactive visualization of ant colony optimization algorithms for pathfinding with real-time simulation.",
      tags: ["TypeScript", "HTML/CSS", "Algorithms", "Visualization"],
      category: "web",
      features: [
        "Real-time algorithm visualization",
        "Interactive pathfinding simulation",
        "Educational tool for algorithm learning",
        "Optimized performance for smooth animations"
      ],
      date: "2022",
      color: "from-amber-500 to-yellow-500"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'ml', label: 'AI/ML', count: projects.filter(p => p.category === 'ml').length },
    { id: 'web', label: 'Web', count: projects.filter(p => p.category === 'web').length },
    { id: 'mobile', label: 'Mobile', count: projects.filter(p => p.category === 'mobile').length },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            A selection of projects showcasing my work in machine learning, full-stack development, and research.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex gap-2 mb-12 flex-wrap"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-md font-medium transition-all ${
                filter === cat.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {cat.label} <span className="text-sm opacity-70">({cat.count})</span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid with Tilted Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative"
                style={{ perspective: "1000px" }}
              >
                <motion.div
                  className="relative h-full"
                  whileHover={{ 
                    rotateY: -5, 
                    rotateX: 5,
                    scale: 1.02,
                    z: 50
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Card background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 dark:opacity-20 rounded-xl blur-xl group-hover:opacity-20 dark:group-hover:opacity-30 transition-opacity`}></div>
                  
                  {/* Card content */}
                  <div className="relative h-full bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col">
                    {/* Project Header */}
                    <div className="mb-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all">
                          {project.title}
                        </h3>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{project.date}</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-full">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 mt-auto">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className={`text-sm font-medium bg-gradient-to-r ${project.color} text-white px-4 py-2 rounded-md hover:shadow-lg transition-all transform hover:scale-105`}
                      >
                        Learn more
                      </button>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors flex items-center gap-1"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", duration: 0.3 }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white dark:bg-gray-900 p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{selectedProject.title}</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{selectedProject.date}</span>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {selectedProject.longDescription}
                </p>

                {selectedProject.features && (
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-2"
                        >
                          <span className={`text-transparent bg-clip-text bg-gradient-to-r ${selectedProject.color} mt-1`}>•</span>
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {selectedProject.github && (
                  <div className="flex gap-3">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-4 py-2 bg-gradient-to-r ${selectedProject.color} text-white rounded-md font-medium hover:shadow-lg transition-all inline-flex items-center gap-2 transform hover:scale-105`}
                    >
                      View on GitHub
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor">
                        <path d="M6 2L14 2L14 10M14 2L2 14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
