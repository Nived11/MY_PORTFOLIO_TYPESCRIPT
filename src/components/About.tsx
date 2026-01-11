import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="min-h-screen w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl sm:text-3xl lg:text-5xl font-semibold text-white "
         style={{ fontFamily: 'oxanium, serif' }}
         >
            About Me
          </h1>
        </motion.div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-20"
        >
          <div className="max-w-8xl mx-auto space-y-2">
            <p className="text-white font-oxanium leading-relaxed text-lg sm:text-xl text-justify">
              Hi! I'm Nived, a passionate MERN Stack Developer with a strong foundation in HTML, CSS, JavaScript, 
              React, Node.js, Express, and MongoDB. I enjoy building dynamic, user-friendly web applications 
              that solve real-world problems.
            </p>
            
            <p className="text-white font-oxanium leading-relaxed text-lg sm:text-xl text-justify">
              With experience in front-end and back-end development, I create scalable and efficient solutions. 
              I focus on writing clean code and delivering seamless user experiences. My front-end expertise in 
              React allows me to build responsive interfaces, while my back-end knowledge enables me to handle 
              data and server-side logic effectively.
            </p>
            
            <p className="text-white font-oxanium leading-relaxed text-lg sm:text-xl text-justify">
              I'm constantly learning new technologies to stay ahead in the fast-evolving field of web development. 
              My goal is to become a full-stack developer and work on innovative projects that have a positive impact. 
              I value collaboration, problem-solving, and strive to improve my skills with every project I take on.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
