
export const personalInfo = {
  name: "Nived",
  title: "MERN Stack Developer",
  email: "your.email@example.com",
  github: "https://github.com/Nived11",
  linkedin: "https://www.linkedin.com/in/nived11/",
  whatsapp: "https://wa.me/9539106813",
  location: "Calicut, Kerala, India"
};

export const skills = {
  frontend: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Shadcn UI", "Figma", "HTML5", "CSS3", "JavaScript"],
  backend: ["Node.js", "Express", "MongoDB", "REST APIs"],
  tools: ["Git", "VS Code", "Postman", "Cloudinary", "Vercel", "Netlify", "Render"]
};

import Qubitx from "../assets/QubitxThumbnail.png"
import Findfortune from "../assets/FindFortune.png"
import Blackstorieez from "../assets/BlackStorieez.png"
import Exclusive from "../assets/exclusive.png"
import somethingforu from "../assets/somethingforu.png"
import Listify from "../assets/listify.png"
import Neurospace from "../assets/neurospace.png"

export const projects = [
  {
    id: 1,
    title: "Find Fortune - Spin & Win",
    description: "Spin & Win web application where users register, spin a fortune wheel, and receive instant rewards with unique codes.",
    tech: ["React","TypeScript", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    github: "https://github.com/Nived11/spin-wheel-project",
    live: "https://find-fortune.netlify.app/",
    image: Findfortune
  },
  {
    id: 2,
    title: "QUBITX - E-commerce website",
    description: "Online electronics shopping website where users can explore products and place orders through a smooth checkout process.",
    tech: ["React", "TypeScript", "Node.js", "MongoDB", "Express", "Tailwind CSS","Razorpay"],
    github: "https://github.com/Nived11/QUBITX",
    live: "https://qubitx.netlify.app/", // Using repo as live if not available, user can update
    image: Qubitx
  }, {
    id: 3,
    title: "Neurospace - Portfolio Demo Template",
    description: "Static portfolio demo website template designed for a web development agency to present design ideas to clients.",
   tech: ["React", "TypeScript", "Tailwind CSS",],
    github: "https://github.com/Nived11/Neurospace/",
    live: "https://neurospacex.netlify.app/",
    image: Neurospace
  },{
    id: 4,
    title: "Something For You - Birthday Wish Website",
    description: "Birthday wish website featuring a 3D character on the home page to create a fun and interactive greeting experience.",
    tech: ["React", "TypeScript", "Node.js", "MongoDB", "Express", "Tailwind CSS","Framer Motion", "Three.js",],
    github: "https://github.com/Nived11/somethingForyou",
    live: "https://somethng.netlify.app/",
    image: somethingforu
  },{
    id: 5,
    title: "Exclusive E-Commerce UI Design",
    description: "Modern e-commerce platform UI design focused on clean layouts, smooth navigation, and a premium shopping experience.",
    tech: ["React", "TypeScript", "Tailwind CSS",],
    github: "https://github.com/Nived11/EXCLUSIVE-ECOM-WEBSITE",
    live: "https://excluzive.netlify.app/",
    image: Exclusive
  },
  
  {
    id: 6,
    title: "BlackStorieez - Photo Showcase & Event Booking",
    description: "Photo showcase and event booking website featuring organized galleries and smooth animations for weddings and events.",
    tech: ["HTML5","React","CSS3","JavaScript",],
    github: "https://github.com/Nived11/Black-Storieez",
    live: "https://blackstoriez.netlify.app/",
    image: Blackstorieez
  },
  {
    id: 7,
    title: "Listify - Task Management App",
    description: "Task management application that allows users to add, edit, update, and delete daily tasks using simple CRUD operations.",
    tech: ["React", "CSS3", "JavaScript", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/Nived11/Task-Management-Application",
    live: "https://listifi.netlify.app/",
    image: Listify
  }, 
];
