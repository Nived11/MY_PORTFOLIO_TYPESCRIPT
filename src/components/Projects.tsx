import { motion } from 'framer-motion';
// import ecom from '../assets/qubit.png';
// import blackstoriez from '../assets/blackstoriez.png';
// import talkio from '../assets/talkio.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce [ QUBIT ]",
      description: "A full-stack e-commerce platform built with the MERN stack. Features include user authentication, product catalog, shopping cart, payment integration, and order management. Implements responsive design and modern UI/UX principles.",
    //   image: ecom,
      github: "https://github.com/Nived11/E-COMMERCE-QUBIT-",
      reverse: false
    },
    {
      id: 2,
      title: "Talkio – Real-Time Chat Application",
      description: "Talkio is a real-time chat application developed using React, Node.js, Express, and Socket.io. It enables users to communicate instantly through a clean and responsive interface. The app supports live messaging, smooth interactions, and provides a seamless chatting experience with efficient message delivery.",
    //   image: talkio,
      github: "https://github.com/Nived11/TalkiO",
      reverse: true
    },
    {
      id: 3,
      title: "Black Storieez – Event Showcase",
      description: "A creative event booking and photo showcase website built using React. Features include categorized reels and image galleries for functions like weddings and photoshoots, with a smooth and immersive UI experience.",
    //   image: blackstoriez,
      github: "https://github.com/Nived11/Black-Storieez",
      reverse: false
    }
  ];

  return (
    <section id="projects" className="min-h-screen w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-chakra">
            Projects
          </h1>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-12 lg:space-y-16">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: project.reverse ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              className={`flex flex-col ${project.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-6 lg:gap-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300`}
            >
              
              {/* Project Image */}
              <div className="lg:w-1/2 flex items-center justify-center p-4 sm:p-6 lg:p-8">
                <motion.img
                //   src={project.image}
                  alt={project.title}
                  loading="lazy"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className={`w-full max-w-full h-auto rounded-xl shadow-lg object-contain ${project.id === 3 ? 'border border-white/10' : ''}`}
                />
              </div>

              {/* Project Details */}
              <div className="lg:w-1/2 p-6 lg:p-8 xl:p-10 flex flex-col justify-center">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: false }}
                  className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 font-chakra"
                >
                  {project.title}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: false }}
                  className="text-gray-300 font-oxanium leading-relaxed mb-6 text-sm sm:text-base"
                >
                  {project.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: false }}
                  className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-400 font-oxanium text-sm"
                >
                  <span className="font-semibold whitespace-nowrap">GitHub:</span>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 hover:underline transition-colors break-all"
                  >
                    {project.github}
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
