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
  "REST APIs": <div className="text-xl font-bold font-oxanium text-primary">API</div>,
  "Git": <SiGit className="text-[#F05032]" />,
  "VS Code": <div className="text-[#007ACC] font-bold text-lg">VS</div>,
  "Postman": <SiPostman className="text-[#FF6C37]" />,
  "Cloudinary": <div className="text-[#3448C5] font-bold text-xs">Cloud</div>,
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
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 10
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
           initial={{ opacity: 0, y: -50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           viewport={{ once: false, amount: 0.3 }}
           className="text-center mb-16 sm:mb-24"
         >
           <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white font-oxanium tracking-widest uppercase mb-4">
             Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Stack</span>
           </h1>
           <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
         </motion.div>

        {/* Organic Floating Cloud Grid */}
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10"
        >
            {skillsList.map((skill, index) => (
                <SkillItem 
                    key={skill} 
                    name={skill} 
                    index={index}
                    variants={itemVariants}
                />
            ))}
        </motion.div>

      </div>
    </section>
  );
};

const SkillItem = ({ name, variants, index }: { name: string, variants: Variants, index: number }) => {
    const icon = iconMap[name] || <div className="w-full h-full bg-gray-500 rounded-full" />;

    // Generate random floating params based on index to avoid sync
    const randomDuration = 3 + (index % 3); 
    const randomDelay = index * 0.1;

    return (
        <motion.div
            variants={variants}
            className="relative group cursor-pointer"
        >
             <motion.div
                animate={{ 
                    y: [0, -10, 0],
                }}
                transition={{
                    duration: randomDuration, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: randomDelay
                }}
                className={`
                    w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 
                    bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl
                    flex flex-col items-center justify-center gap-3
                    group-hover:bg-white/10 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(37,149,102,0.3)]
                    transition-all duration-300
                `}
            >
                <div className="text-4xl sm:text-5xl md:text-6xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 drop-shadow-lg">
                    {icon}
                </div>
                
                <span className="text-xs sm:text-sm font-oxanium text-gray-400 group-hover:text-white transition-colors">
                    {name}
                </span>
            </motion.div>
        </motion.div>
    );
};

export default Skills;
