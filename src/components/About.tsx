import { motion, Variants } from 'framer-motion';
import { FaCode, FaLaptopCode, FaRocket } from 'react-icons/fa';

const About = () => {
  const stats = [
    { number: "0-1", label: "Years Experience", icon: <FaLaptopCode /> },
    { number: "10+", label: "Projects Completed", icon: <FaCode /> },
    { number: "15+", label: "Technologies", icon: <FaRocket /> },
  ];

  // Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.2, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="min-h-screen w-full py-20 px-4 sm:px-6 lg:px-8 flex items-center relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full opacity-30"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full opacity-30"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <div className="text-center lg:text-left space-y-8">
                <motion.h1 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={containerVariants}
                    className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white font-oxanium tracking-widest uppercase leading-tight"
                >
                    <motion.span variants={itemVariants} className="block">
                        Code.
                    </motion.span>
                    <motion.span variants={itemVariants} className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/20">
                        Create.
                    </motion.span>
                    <motion.span variants={itemVariants} className="block">
                        Innovate.
                    </motion.span>
                </motion.h1>
                
                <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="text-gray-400 font-oxanium text-lg max-w-lg mx-auto lg:mx-0"
                >
                    Turning ideas into reality through clean code and modern design.
                </motion.p>

                {/* Quick Stats Row */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={containerVariants}
                    className="flex flex-wrap justify-center lg:justify-start gap-8 pt-4"
                >
                    {stats.map((stat, index) => (
                        <motion.div 
                            key={index}
                            variants={itemVariants}
                            className="text-center lg:text-left"
                        >
                            <div className="text-3xl font-bold text-white font-oxanium flex items-center justify-center lg:justify-start gap-2">
                                <span className="text-primary text-xl">{stat.icon}</span>
                                {stat.number}
                            </div>
                            <div className="text-sm text-gray-400 font-oxanium uppercase tracking-wider mt-1">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Right Side: Bio Card */}
            <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ duration: 0.3, ease: "easeOut" }}
               viewport={{ once: false, amount: 0.3 }}
               className="relative"
            >
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-green-900 rounded-2xl blur opacity-20"></div>
            <div className="relative bg-black/40 backdrop-blur-md md:backdrop-blur-xl border border-white/10 p-8 sm:p-10 rounded-2xl">
                <h3 className="text-2xl font-bold text-white font-oxanium mb-6 flex items-center gap-3">
                        <span className="w-2 h-8 bg-primary rounded-full"></span>
                        About Me
                    </h3>
                    
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={containerVariants}
                        className="space-y-6 text-gray-300 font-oxanium leading-relaxed text-justify"
                    >
                        <motion.p variants={itemVariants}>
                            Hi! I'm <span className="text-primary font-bold">Nived</span>, a passionate MERN Stack Developer. 
                            I specialize in building dynamic, user-friendly web applications that solve real-world problems.
                        </motion.p>
                        <motion.p variants={itemVariants}>
                            With a strong foundation in modern web technologies, I bridge the gap between design and 
                            functionality. Whether it's crafting responsive front-end interfaces with <span className="text-white">React</span> or 
                            architecting robust back-end systems with <span className="text-white">Node.js</span>, I love every part of the stack.
                        </motion.p>
                        <motion.p variants={itemVariants}>
                            I'm constantly learning and evolving. My goal is to work on innovative projects that make a 
                            positive impact, pushing the boundaries of what's possible on the web.
                        </motion.p>
                    </motion.div>

                    {/* Highlights Pills */}
                    <div className="flex flex-wrap gap-3 mt-8">
                        {['Problem Solver', 'Full Stack', 'Creative', 'Learner'].map((tag) => (
                            <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-oxanium text-primary/80">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
