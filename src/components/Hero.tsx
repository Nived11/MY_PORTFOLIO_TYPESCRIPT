import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { personalInfo } from '../data/portfolio';
import profile from "../assets/profilee.png";

const Hero = () => {
    // Rotating Titles Logic
    const titles = ["MERN STACK", "FULL STACK"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    // HTML/Code Rain Effect
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Code snippets to rain down
        const tags = ['<html>', '<body>', '<div>', '</span>', '</h1>', '{ }',  'console.log()', 'npm', '<Code />', '&&', '||', '=>', '</>'];
        const fontSize = 16;
        const columns = canvas.width / fontSize;

        const drops: number[] = [];
        for (let i = 0; i < columns; i++) drops[i] = 1;

        const draw = () => {
             // Slower fade for trail effect
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#259566'; // Primary Green
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = tags[Math.floor(Math.random() * tags.length)];
                ctx.fillText(text, i * fontSize * 3, drops[i] * fontSize); // Spaced out columns

                // Reset drop randomly to create variation
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.98) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        const interval = setInterval(draw, 50); // Slightly slower for better readability
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);
        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

  return (
    <section id="home" className="min-h-screen w-full flex items-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        
        {/* Code Rain Background */}
        <canvas 
            ref={canvasRef} 
            className="absolute inset-0 opacity-15 pointer-events-none will-change-transform"
        />

        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent pointer-events-none lg:via-black/70"></div>

      <div className="container sm:mx-[6%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Side - Text */}
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center lg:text-left space-y-6"
        >
            <motion.h1
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                }}
                className="text-5xl sm:text-6xl lg:text-7xl text-white"
                style={{ fontFamily: 'Iceland, serif' }}
            >
                Hii,
            </motion.h1>
            
            <motion.h1
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                    duration: 0.6,
                    delay: 0.3,
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                }}
                className="text-5xl sm:text-6xl lg:text-7xl text-white"
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
                        <span className="invisible">{titles[0]}</span> 
                    </span>
                    <span>DEVELOPER</span>
                </motion.h3>
            </div>

            {/* Social Icons */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex gap-6 justify-center lg:justify-start pt-4"
            >
                <SocialLink href={personalInfo.github} icon={<FaGithub />} />
                <SocialLink href={personalInfo.linkedin} icon={<FaLinkedin />} />
                <SocialLink href={personalInfo.whatsapp} icon={<FaWhatsapp />} />
            </motion.div>
        </motion.div>

        {/* Right Side - Profile Image (Restored Morphing Animation + Hover Color) */}
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
            className="h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96 overflow-hidden cursor-none group"
            style={{
              boxShadow: '0 5px 30px rgba(37, 149, 102, 0.37)',
              border: '2px solid rgba(37, 149, 102, 0.3)'
            }}
          >
            <img
              src={profile}
              alt="Nived"
              className="h-full w-full object-cover object-center relative z-10 transition-all duration-700 filter grayscale contrast-125 brightness-110 drop-shadow-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Helper Components
const SocialLink = ({ href, icon }: { href: string, icon: React.ReactNode }) => (
    <a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-3xl text-gray-400 hover:text-primary hover:scale-110 transition-all duration-300"
    >
        {icon}
    </a>
);

export default Hero;
