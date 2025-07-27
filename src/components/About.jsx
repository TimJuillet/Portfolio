import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';
import cvPdf from '../assets/cv-llt-full_compressed.pdf';

const About = () => {
  const navigate = useNavigate();
  
  const skills = {
    'Programming Languages': [
      { name: 'Python', icon: '🐍' },
      { name: 'Java', icon: '☕' },
      { name: 'JavaScript/TypeScript', icon: '🟨' },
      { name: 'C/C++', icon: '⚡' },
      { name: 'SQL', icon: '🗄️' },
    ],
    'AI & Machine Learning': [
      { name: 'Deep Learning (CNNs, GANs)', icon: '🧠' },
      { name: 'TensorFlow & PyTorch', icon: '🔥' },
      { name: 'Computer Vision', icon: '👁️' },
      { name: 'MLOps', icon: '🔄' },
      { name: 'Data Science', icon: '📊' },
    ],
    'Web & DevOps': [
      { name: 'React & React Native', icon: '⚛️' },
      { name: 'Docker & CI/CD', icon: '🐳' },
      { name: 'Cloud (Azure)', icon: '☁️' },
      { name: 'Git/GitHub', icon: '📚' },
      { name: 'Jenkins & Splunk', icon: '🔧' },
    ],
  };

  const timeline = [
    {
      year: '2025 - Present',
      title: 'Full-Stack / ML Engineer',
      company: 'Amadeus',
      location: 'Sophia Antipolis',
      description: 'Development of AI-powered applications for automated log analysis and error extraction. Implementation of data pipelines using Splunk, Jenkins, and Python scripts on Microsoft Azure.',
      tech: ['Python', 'Azure', 'Splunk', 'Jenkins', 'AI/ML'],
    },
    {
      year: '2024',
      title: 'AI/ML Research Intern',
      company: 'DNIIT',
      location: 'Vietnam 🇻🇳',
      description: 'Created CNN model for Vietnam landmarks recognition. Developed complete mobile application with React Native implementing the model with TensorflowJS.',
      tech: ['TensorFlow', 'React Native', 'Python', 'Computer Vision'],
    },
    {
      year: '2022',
      title: 'Software Engineering Intern',
      company: 'Inria Sophia Antipolis',
      location: 'France',
      description: 'Developed "The March of the Ants", an interactive web application simulating ant colony optimization algorithms for Terra Numerica.',
      tech: ['TypeScript', 'HTML/CSS', 'Algorithms'],
    },
  ];

  const education = [
    {
      period: '2022 - 2025',
      degree: 'Engineering Degree in Computer Science',
      school: 'Polytech Nice-Sophia',
      details: 'Specialization: Artificial Intelligence & Data Engineering',
    },
    {
      period: '2024',
      degree: 'Exchange Student',
      school: 'Hong Kong City University 🇭🇰',
      details: 'Studied at the 62nd best university worldwide, focusing on artificial intelligence, cloud computing and cybersecurity.',
    },
    {
      period: '2020 - 2022',
      degree: 'DUT in Computer Science',
      school: 'IUT Nice Côte d\'Azur',
      details: 'Ranked 4th out of 89 students',
    },
  ];

  const achievements = [
    { icon: '🏆', title: 'Hackathon Polytech Nice 2024', description: 'Finalist' },
    { icon: '⚔️', title: 'Thalès Battle Dev 2024', description: 'Ranked 15/334' },
    { icon: '🎯', title: 'TOEIC Score', description: '965/990 (C1 Level)' },
    { icon: '🤖', title: 'Pobot Junior Cup Winner', description: '2016 Robotics Competition' },
  ];

  const languages = [
    { name: 'French', level: 'Native', flag: '🇫🇷' },
    { name: 'English', level: 'C1 (TOEIC 965)', flag: '🇬🇧' },
    { name: 'Italian', level: 'Basic', flag: '🇮🇹' },
    { name: 'Japanese', level: 'Basic', flag: '🇯🇵' },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Final year Computer Science student at Polytech Nice-Sophia, 
            passionate about combining software engineering with machine learning to create innovative solutions.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Bio & Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Who I am</h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 mb-8">
              <p>
                I'm a Full-Stack / ML Engineer currently working at Amadeus while completing my 
                final year at Polytech Nice-Sophia. My journey in tech has taken me from France 
                to Vietnam 🇻🇳 and Hong Kong 🇭🇰, where I've developed AI-powered solutions and contributed 
                to cutting-edge research.
              </p>
              <p>
                My expertise spans from deep learning and computer vision to full-stack development 
                and cloud architecture. I'm particularly passionate about creating intelligent systems 
                that solve real-world problems, whether it's automating log analysis at enterprise 
                scale or building mobile apps that recognize landmarks.
              </p>
              <p>
                Beyond coding, I believe in continuous learning and knowledge sharing. I've participated 
                in multiple hackathons and competitions, always pushing myself to learn new technologies 
                and approaches.
              </p>
            </div>

            {/* Education */}
            <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">Education</h4>
            <div className="space-y-4 mb-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex justify-between items-start mb-1">
                    <h5 className="font-semibold text-gray-900 dark:text-gray-100">{edu.degree}</h5>
                    <span className="text-sm text-gray-500">{edu.period}</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">{edu.school}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{edu.details}</p>
                </motion.div>
              ))}
            </div>

            {/* Languages */}
            <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">Languages</h4>
            <div className="grid grid-cols-2 gap-3">
              {languages.map((lang, index) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700"
                >
                  <span className="text-2xl">{lang.flag}</span>
                  <div>
                    <p className="font-medium text-sm text-gray-900 dark:text-gray-100">{lang.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{lang.level}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Experience</h3>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-8 border-l-2 border-gray-300 dark:border-gray-700"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-900 dark:bg-gray-100 rounded-full" />
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-1">{item.year}</div>
                  <h4 className="text-lg font-semibold mb-1 text-gray-900 dark:text-gray-100">{item.title}</h4>
                  <div className="text-gray-600 dark:text-gray-400 mb-2">
                    {item.company} • {item.location}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">Technical Skills</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700"
              >
                <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">{category}</h4>
                <div className="space-y-3">
                  {items.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                    >
                      <span className="text-xl">{skill.icon}</span>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">Achievements & Awards</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg text-center border border-gray-200 dark:border-gray-700"
              >
                <div className="text-4xl mb-3">{achievement.icon}</div>
                <h4 className="font-semibold mb-1 text-gray-900 dark:text-gray-100">{achievement.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-800 rounded-lg p-8 border border-purple-100 dark:border-gray-700">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Let's Work Together</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, 
              or potential collaborations in AI/ML and full-stack development.
            </p>
            <div className="flex gap-4 justify-center">
              <Button
                variant="primary"
                onClick={() => window.open(cvPdf, '_blank')}
                icon={
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                    <path d="M12 10v6m0 0l-3-3m3 3l3-3m2-5v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                }
              >
                Download CV
              </Button>
              <Button
                variant="secondary"
                onClick={() => navigate('/contact')}
              >
                Contact Me
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
