import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaUser, FaCode, FaFolderOpen, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const navItems = [
    { name: 'Home', icon: <FaHome /> },
    { name: 'About', icon: <FaUser /> },
    { name: 'Skills', icon: <FaCode /> },
    { name: 'Projects', icon: <FaFolderOpen /> },
    { name: 'Contact', icon: <FaEnvelope /> },
  ];

  // Hide/Show navbar on scroll
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 10 || currentScrollY < lastScrollY) {
        setHidden(false);
      } 
      else if (currentScrollY > lastScrollY) {
        setHidden(true);
        setIsOpen(false);
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Nived_S_Resume.pdf';
    link.download = 'Nived_S_Resume.pdf';
    link.click();
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: hidden ? -100 : 0, opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-0 w-full backdrop-blur-md z-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center">
        {/* Logo - Left Side */}
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          className="text-2xl sm:text-4xl font-bold text-primary cursor-pointer z-20"
          style={{ fontFamily: 'Iceland, serif' }}
        >
          &lt;NIVED/&gt;
        </motion.h1>

        {/* Desktop Menu - Center */}
        <div className="hidden lg:flex gap-2 absolute left-1/2 transform -translate-x-1/2 px-3 py-2 border rounded-full bg-black/50 backdrop-blur-lg border-primary/30">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={`#${item.name.toLowerCase()}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.08 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 xl:px-5 py-2 text-sm xl:text-base text-gray-300 hover:text-primary hover:bg-primary/20 rounded-full transition-all duration-300 font-oxanium tracking-wide font-medium group"
            >
              <span className="text-lg group-hover:text-primary transition-colors">{item.icon}</span>
              {item.name}
            </motion.a>
          ))}
        </div>

        {/* Resume Button - Right Side */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0 0 25px rgba(37, 149, 102, 0.5)'
          }}
          whileTap={{ scale: 0.95 }}
          onClick={handleDownloadResume}
          className="hidden lg:flex items-center gap-2 px-4 xl:px-6 py-2 xl:py-2.5 bg-primary/10 backdrop-blur-lg border border-primary/40 text-primary text-sm xl:text-base font-semibold rounded-full hover:bg-primary/20 transition-all duration-300 z-20 font-oxanium tracking-wider"
        >
          <svg 
            className="w-4 h-4 xl:w-5 xl:h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" 
            />
          </svg>
          <span className="xl:inline">Resume</span>
        </motion.button>

        {/* Tablet & Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-primary z-20 flex-shrink-0 p-1"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </motion.button>
      </div>

      {/* Tablet & Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden mx-4 mt-2 mb-4 bg-black/60 backdrop-blur-xl border border-primary/20 rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="p-3 sm:p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={`#${item.name.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-3 px-4 py-3 text-center text-gray-300 hover:bg-primary/20 hover:text-primary transition-all duration-300 rounded-2xl font-oxanium font-medium tracking-wide"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  <span className="text-xl">{item.icon}</span>
                  {item.name}
                </motion.a>
              ))}
            </div>
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                handleDownloadResume();
                setIsOpen(false);
              }}
              className="w-full px-6 py-3 mt-3 flex items-center justify-center gap-2 bg-primary/10 border border-primary/40 text-primary font-semibold rounded-2xl hover:bg-primary/20 transition-all font-oxanium tracking-wider"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" 
                />
              </svg>
              Download Resume
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
