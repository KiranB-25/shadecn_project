import  { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Download, ExternalLink } from 'lucide-react';

const PortfolioNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/10 backdrop-blur-lg shadow-lg shadow-purple-500/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo/Brand */}
          <div className="flex-shrink-0 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-black rounded-lg px-4 py-2">
                <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Portfolio
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative px-4 py-2 text-gray-300 hover:text-white transition-all duration-300 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100"></div>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 group-hover:w-full transition-all duration-500"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Social Links & CTA - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <a 
                href="https://github.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:contact@example.com"
                className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12"
              >
                <Mail size={20} />
              </a>
            </div>
            
            {/* CTA Button */}
            <button className="relative group ml-4">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative px-6 py-2 bg-black rounded-lg leading-none flex items-center space-x-2">
                <span className="text-white group-hover:text-gray-100 transition duration-200">
                  Resume
                </span>
                <Download size={16} className="text-white group-hover:text-gray-100 group-hover:animate-bounce" />
              </div>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white transition-colors duration-300 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isOpen 
          ? 'max-h-96 opacity-100' 
          : 'max-h-0 opacity-0 pointer-events-none'
      }`}>
        <div className="bg-black/90 backdrop-blur-lg border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-gray-300 hover:text-white transition-all duration-300 rounded-lg hover:bg-gradient-to-r hover:from-pink-500/10 hover:via-purple-500/10 hover:to-blue-500/10"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.name}
              </a>
            ))}
            
            {/* Mobile Social Links */}
            <div className="flex items-center justify-center space-x-6 pt-4 pb-2">
              <a 
                href="https://github.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:contact@example.com"
                className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </div>
            
            {/* Mobile CTA Button */}
            <div className="px-4 pt-2">
              <button className="w-full relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative w-full px-6 py-3 bg-black rounded-lg flex items-center justify-center space-x-2">
                  <span className="text-white">Download Resume</span>
                  <Download size={16} className="text-white" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient background for the entire page */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/50 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-900/30 via-transparent to-blue-900/30"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
    </nav>
  );
};

export default PortfolioNavbar;