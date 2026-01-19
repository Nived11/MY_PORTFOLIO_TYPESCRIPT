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
  "REST APIs": <div className="text-sm font-bold font-oxanium text-primary">API</div>,
  "Git": <SiGit className="text-[#F05032]" />,
  "VS Code": <div className="text-[#007ACC] font-bold text-lg">VS</div>,
  "Postman": <SiPostman className="text-[#FF6C37]" />,
  "Cloudinary": <div className="text-[#3448C5] font-bold text-xs">Cloud</div>,
  "Vercel": <SiVercel className="text-[#000000] dark:text-white" />,
  "Netlify": <SiNetlify className="text-[#00C7B7]" />,
};

const Skills = () => {
  // Symmetric Butterfly Pattern (19 items)
  // Row 1: 2 items (Wing tips)
  // Row 2: 4 items
  // Row 3: 7 items (Center HTML5)
  // Row 4: 4 items
  // Row 5: 2 items (Wing tips)

  const butterflyLayout = [
    ["HTML5", "Git"], // Row 1: 2
    ["Postman", "Figma", "Shadcn UI", "CSS3"], // Row 2: 4
    ["Tailwind CSS", "Framer Motion", "React", "VS Code", "TypeScript", "JavaScript", "Node.js"], // Row 3: 7 (HTML5 Center)
    ["Express", "MongoDB", "REST APIs", "Cloudinary"], // Row 4: 4
    ["Vercel", "Netlify"] // Row 5: 2
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const rowVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  return (
    <section id="skills" className="min-h-screen w-full py-2 px-4 flex flex-col items-center justify-center relative overflow-hidden">
      
       {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]  blur-[120px] rounded-full opacity-40"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Section Header */}
        <motion.div
           initial={{ opacity: 0, y: -50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 1 }}
           viewport={{ once: false, amount: 0.3 }}
           className="text-center mb-20"
         >
           <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white font-oxanium tracking-widest uppercase">
             Skills
           </h1>
         </motion.div>

        {/* Symmetric Butterfly Grid */}
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-col items-center gap-6 sm:gap-8"
        >
            {butterflyLayout.map((row, rowIndex) => (
                <motion.div 
                    key={rowIndex} 
                    variants={rowVariants}
                    className={`
                        flex justify-center items-center gap-4 sm:gap-8 w-full flex-wrap
                        ${rowIndex === 0 || rowIndex === 4 ? 'gap-32 sm:gap-64' : ''} 
                        ${rowIndex === 1 || rowIndex === 3 ? 'gap-12 sm:gap-24' : ''}
                    `}
                    // Varying gaps create the "wing" separation effect
                >
                    {row.map((skill) => (
                        <SkillItem 
                            key={skill} 
                            name={skill} 
                            isCenter={skill === "VS Code"} 
                            variants={itemVariants}
                        />
                    ))}
                </motion.div>
            ))}
        </motion.div>

      </div>
    </section>
  );
};

const SkillItem = ({ name, isCenter, variants }: { name: string, isCenter?: boolean, variants: Variants }) => {
    const icon = iconMap[name] || <div className="w-full h-full bg-gray-500 rounded-full" />;

    return (
        <motion.div
            variants={variants}
            className={`
                relative group cursor-pointer flex items-center justify-center
                ${isCenter ? 'w-28 h-28 sm:w-36 sm:h-36' : 'w-16 h-16 sm:w-24 sm:h-24'}
                rounded-full bg-white/5 backdrop-blur-sm border border-white/5
                hover:bg-white/2 hover:border-primary/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]
                transition-all duration-500
            `}
        >
             <motion.div
                animate={{ 
                    y: [0, -6, 0],
                }}
                transition={{
                    duration: 3 + Math.random(), 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: Math.random() * 2
                }}
                className={`
                    w-full h-full flex items-center justify-center p-3
                `}
            >
                <div className={`
                    ${isCenter ? 'text-6xl sm:text-7xl' : 'text-3xl sm:text-5xl'}
                    transition-transform duration-300 group-hover:scale-110 drop-shadow-md
                `}>
                    {icon}
                </div>
            </motion.div>
            
            {/* Tooltip Name */}
            <div className="absolute -bottom-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-20 pointer-events-none">
                <span className="text-white/80 font-oxanium text-sm bg-black/80 px-3 py-1 rounded-full border border-white/10 backdrop-blur-md">
                    {name}
                </span>
            </div>
        </motion.div>
    );
};

export default Skills;
