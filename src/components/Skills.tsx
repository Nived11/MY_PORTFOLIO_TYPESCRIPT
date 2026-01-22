import { motion, Variants } from 'framer-motion';
import React from 'react';
import { 
  SiReact, SiTypescript, SiTailwindcss, SiFramer, SiHtml5, SiCss3, SiJavascript,
  SiNodedotjs, SiExpress, SiMongodb, 
  SiGit, SiPostman, SiVercel, SiNetlify, SiFigma,
  SiShadcnui
} from "react-icons/si";

// Icon mapping
const iconMap: Record<string, React.ReactNode> = {
  "React": <SiReact className="text-[#61DAFB]" />,
  "TypeScript": <SiTypescript className="text-[#3178C6]" />,
  "Tailwind CSS": <SiTailwindcss className="text-[#06B6D4]" />,
  "Framer Motion": <SiFramer className="text-[#0055FF]" />,
  "Shadcn UI": <SiShadcnui className="text-[#000000] dark:text-white" />,
  "Figma": <SiFigma className="text-[#F24E1E]" />,
  "HTML5": <SiHtml5 className="text-[#E34F26]" />,
  "CSS3": <SiCss3 className="text-[#1572B6]" />,
  "JavaScript": <SiJavascript className="text-[#F7DF1E]" />,
  "Node.js": <SiNodedotjs className="text-[#339933]" />,
  "Express": <SiExpress className="text-[#000000] dark:text-white" />,
  "MongoDB": <SiMongodb className="text-[#47A248]" />,
  "REST APIs": <div className="text-lg font-bold font-oxanium text-primary">API</div>,
  "Git": <SiGit className="text-[#F05032]" />,
  "VS Code": <div className="text-[#007ACC] font-bold text-lg">VS</div>,
  "Postman": <SiPostman className="text-[#FF6C37]" />,
  "Cloudinary": <div className="text-[#3448C5] font-bold text-[10px]">Cloud</div>,
  "Vercel": <SiVercel className="text-[#000000] dark:text-white" />,
  "Netlify": <SiNetlify className="text-[#00C7B7]" />,
};

const Skills = () => {
    // Flat list of skills for the organic cloud
    const skillsList = [
        "HTML5", "CSS3", "JavaScript", "TypeScript", "React", 
        "Node.js", "Express", "MongoDB", "Tailwind CSS", "Framer Motion",
        "Git", "VS Code", "Postman", "Figma", "Shadcn UI", 
        "REST APIs", "Cloudinary", "Vercel", "Netlify"
    ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="skills" className="min-h-screen w-full py-20 px-4 flex flex-col items-center justify-center relative overflow-hidden bg-black">
      
       {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[150px] rounded-full opacity-30 animate-pulse"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Section Header */}
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.7, ease: "easeOut" }}
           viewport={{ once: false, amount: 0.1 }}
           className="text-center mb-16 sm:mb-20"
         >
           <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white font-oxanium tracking-widest uppercase mb-4">
             Skills
           </h1>
           {/* Restored subtext placeholder or simply kept simple as per original */}
         </motion.div>

        {/* Organic Floating Cloud Grid */}
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8"
        >
            {skillsList.map((skill) => (
                <SkillItem 
                    key={skill} 
                    name={skill} 
                    variants={itemVariants}
                />
            ))}
        </motion.div>

      </div>
    </section>
  );
};

const SkillItem = ({ name, variants }: { name: string, variants: Variants }) => {
    const icon = iconMap[name] || <div className="w-full h-full bg-gray-500 rounded-full" />;

    return (
        <motion.div
            variants={variants}
            className="relative group cursor-pointer"
        >
             <div
                className={`
                    w-20 h-20 sm:w-24 sm:h-24
                    bg-white/10 border border-white/10 rounded-full
                    flex flex-col items-center justify-center gap-2
                    group-hover:bg-white/10 group-hover:border-primary/50 group-hover:shadow-[0_0_25px_rgba(37,149,102,0.4)]
                    transition-all duration-300
                `}
            >
                <div className="text-3xl sm:text-4xl transition-transform duration-300 group-hover:scale-110 drop-shadow-lg">
                    {icon}
                </div>
                
                
                <span className="text-[9px] sm:text-[10px] font-oxanium text-gray-300 group-hover:text-white transition-colors text-center px-1 leading-none">
                    {name}
                </span>
            </div>
        </motion.div>
    );
};

export default Skills;
