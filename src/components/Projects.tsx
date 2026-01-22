import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../data/portfolio";

const Projects = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="projects"
      className="w-full py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full opacity-20"></div>
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-white/5 blur-[100px] rounded-full opacity-10"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.05 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white font-oxanium tracking-widest uppercase">
            Projects
          </h1>
          <p className="mt-4 text-gray-400 font-oxanium tracking-wide">
            Latest works & contributions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.05 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              variants={itemVariants}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// ---------------- PROJECT CARD ----------------

const ProjectCard = ({
  project,
  variants,
}: {
  project: any;
  variants: Variants;
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      variants={variants}
      className="group relative flex flex-col bg-white/5 backdrop-blur-sm md:backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 hover:shadow-xl transition-all duration-300 h-full"
    >
      {/* Image Area */}
      <a
        href={project.live}
        target="_blank"
        rel="noopener noreferrer"
        className="relative h-48 w-full overflow-hidden cursor-pointer block"
      >
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
          <span className="flex items-center gap-2 text-white font-oxanium font-bold border border-white/30 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/10 transition-colors">
            Visit Site <FaExternalLinkAlt className="text-sm" />
          </span>
        </div>

        {/* IMAGE (only if exists) */}
        {!imageError && (
          <img
            src={project.image}
            alt={project.title}
            onError={() => setImageError(true)}
            className="w-full h-full  transition-transform duration-500 group-hover:scale-110"
          />
        )}

        {/* FALLBACK (only if image fails) */}
        {imageError && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
            <div className="text-4xl font-bold text-white/10 font-oxanium uppercase tracking-widest select-none">
              {project.title.split(" ")[0]}
            </div>
          </div>
        )}
      </a>

      {/* Content Area */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex justify-between items-start gap-4 mb-3">
          <h3 className="text-xl font-bold text-white font-oxanium line-clamp-1 break-words group-hover:text-primary transition-colors">
            {project.title}
          </h3>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-full"
            title="View Source Code"
          >
            <FaGithub size={22} />
          </a>
        </div>

        <p className="text-gray-400 text-sm font-oxanium leading-relaxed line-clamp-3 mb-4 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((tech: string) => (
            <span
              key={tech}
              className="text-xs font-medium text-primary/80 bg-primary/10 px-2 py-1 rounded-md border border-primary/20 font-oxanium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
