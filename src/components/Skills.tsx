import { motion } from 'framer-motion';
import { SiMongodb, SiExpress, SiReact, SiHtml5, SiCss3, SiJavascript, 
         SiBootstrap, SiTailwindcss, SiGit, SiGithub, SiNodedotjs, 
         SiAwsamplify, SiMui } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: <SiHtml5 size={30} color="#E34F26" />, link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS", icon: <SiCss3 size={30} color="#1572B6" />, link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "JavaScript", icon: <SiJavascript size={30} color="#F7DF1E" />, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "Bootstrap", icon: <SiBootstrap size={40} color="#7952B3" />, link: "https://getbootstrap.com/" },
    { name: "MongoDB", icon: <SiMongodb size={40} color="#4DB33D" />, link: "https://www.mongodb.com/" },
    { name: "Express", icon: <SiExpress size={40} color="#ffffff" />, link: "https://expressjs.com/" },
    { name: "React", icon: <SiReact size={40} color="#61DAFB" />, link: "https://react.dev/" },
    { name: "NodeJS", icon: <SiNodedotjs size={40} color="#68A063" />, link: "https://nodejs.org/" },
    { name: "Tailwind", icon: <SiTailwindcss size={40} color="#38B2AC" />, link: "https://tailwindcss.com/" },
    { name: "Material UI", icon: <SiMui size={30} color="#007FFF" />, link: "https://mui.com/" },
    { name: "Git", icon: <SiGit size={40} color="#F05032" />, link: "https://git-scm.com/" },
    { name: "GitHub", icon: <SiGithub size={40} color="#ffffff" />, link: "https://github.com/" },
    { name: "AWS", icon: <SiAwsamplify size={40} color="#FF9900" />, link: "https://aws.amazon.com/amplify/" }
  ];

  return (
    <section id="skills" className="min-h-screen w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-chakra">
            SKILLS
          </h1>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-6 sm:gap-8 lg:gap-10 justify-items-center">
          {skills.map((skill, index) => (
            <motion.a
              key={skill.name}
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ 
                scale: 1.15,
                y: -10,
                backgroundColor: 'rgba(37, 149, 102, 0.1)',
                boxShadow: '0 15px 35px rgba(37, 149, 102, 0.4)',
                transition: { duration: 0.3 }
              }}
              className="group h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28 bg-black/50 backdrop-blur-sm border border-primary/30 hover:border-primary/60 rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:bg-primary/5"
            >
              <div className="group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="mt-2 text-xs sm:text-sm lg:text-base text-white/90 group-hover:text-primary font-chakra text-center font-medium tracking-wide">
                {skill.name}
              </h3>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
