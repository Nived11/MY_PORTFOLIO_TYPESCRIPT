import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import profile from "../assets/profilee.png";

const Hero = () => {
  const titles = ["MERN STACK", "FULL STACK", ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen w-full flex items-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="container sm:mx-[6%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
        {/* Left Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center lg:text-left space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: '100%' }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="text-5xl sm:text-6xl lg:text-7xl text-white overflow-hidden whitespace-nowrap"
            style={{ fontFamily: 'Iceland, serif' }}
          >
            Hii,
          </motion.h1>
          
          <motion.h1
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: '100%' }}
            transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
            className="text-5xl sm:text-6xl lg:text-7xl text-white overflow-hidden whitespace-nowrap"
            style={{ fontFamily: 'Iceland, serif' }}
          >
            I'm Nived
          </motion.h1>
          
          <div className="h-12 sm:h-16 lg:h-20 flex items-center justify-center lg:justify-start overflow-hidden">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-[20px] sm:text-3xl lg:text-4xl font-semibold text-primary flex gap-2 sm:gap-3"
              style={{ fontFamily: 'Orbitron, serif' }}
            >
              <span className="relative inline-block min-w-[140px] sm:min-w-[220px] text-right">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute right-0"
                  >
                    {titles[index]}
                  </motion.span>
                </AnimatePresence>
                {/* Invisible placeholder to keep width stable */}
                <span className="invisible">{titles[0]}</span> 
              </span>
              <span>DEVELOPER</span>
            </motion.h3>
          </div>
        </motion.div>

        {/* Right Side - Profile Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.5, ease: 'easeOut' }}
          className="flex justify-center lg:justify-end"
        >
          <motion.div
            animate={{
              borderRadius: [
                '50% 40% 60% 50% / 50% 60% 40% 50%',
                '40% 55% 50% 65% / 60% 50% 55% 40%',
                '55% 45% 65% 45% / 50% 65% 40% 55%',
                '45% 60% 50% 55% / 65% 40% 55% 50%',
                '50% 40% 60% 50% / 50% 60% 40% 50%'
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96 overflow-hidden cursor-none"
            style={{
              boxShadow: '0 5px 30px rgba(37, 149, 102, 0.37)'
            }}
          >
            <img
              src={profile}
              alt="Nived - MERN Stack Developer"
              className="h-full w-full object-cover object-center relative z-10 pointer-events-none"
              style={{
                filter: 'brightness(0.8) contrast(1.1) drop-shadow(0 10px 30px rgba(37, 149, 102, 0.089))'
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
