import React from 'react';
import { Link } from 'react-router-dom';
import cvPdf from '../assets/cv-llt-full_compressed.pdf';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Navigation',
      links: [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Projects', href: '/projects' },
        { name: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Connect',
      links: [
        { name: 'GitHub', href: 'https://github.com/TimJuillet', external: true },
        { name: 'LinkedIn', href: 'https://linkedin.com/in/timothée-juillet', external: true },
        { name: 'Email', href: 'mailto:timotheejuillet@gmail.com', external: true },
        { name: 'Resume', href: cvPdf, external: true },
      ],
    },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Timothée Juillet
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Full-Stack / ML Engineer passionate about creating innovative solutions 
              at the intersection of software engineering and artificial intelligence.
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4 text-gray-900 dark:text-gray-100">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <div className="text-center text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} Timothée Juillet. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
