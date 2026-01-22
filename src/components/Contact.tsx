import { motion, Variants } from 'framer-motion';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { personalInfo } from '../data/portfolio';

const Contact = () => {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm(
      'nived11',
      'template_z2m5b7f',
      e.currentTarget,
      '156D1ZevOJfFfZN3H'
    ).then(
      () => {
        toast.success('Mail sent successfully!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
      },
      (error: unknown) => {
        console.error(error);
        toast.error('Something went wrong!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
      }
    );

    e.currentTarget.reset();
  };

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
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const slideLeftVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
       transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const slideRightVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
       transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <section id="contact" className="min-h-screen w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
       {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full opacity-20"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
        >
            {/* Section Header */}
            <motion.div
            variants={itemVariants}
            className="text-center mb-12 lg:mb-16"
            >
            <h1 className="text-4xl sm:text-5xl font-bold text-white font-oxanium tracking-widest uppercase">
                Get In Touch
            </h1>
            </motion.div>

            {/* Contact Container */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Contact Form */}
            <motion.div
                variants={slideLeftVariants}
                className="bg-white/5 backdrop-blur-sm md:backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl w-full"
            >
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 font-oxanium">
                Send a Message
                </h2>

                <form onSubmit={sendEmail} className="space-y-4 sm:space-y-6">
                <div>
                    <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all font-oxanium"
                    />
                </div>

                <div>
                    <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all font-oxanium"
                    />
                </div>

                <div>
                    <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all font-oxanium"
                    />
                </div>

                <div>
                    <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all resize-none font-oxanium"
                    ></textarea>
                </div>

                <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 bg-primary text-black font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20 font-oxanium uppercase tracking-wide"
                >
                    Send Message
                </motion.button>
                </form>
            </motion.div>

            {/* Social Links */}
            <motion.div
                variants={slideRightVariants}
                className="flex flex-col justify-center gap-6 w-full"
            >
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-oxanium text-center lg:text-left">
                Connect With Me
                </h2>

                {/* WhatsApp */}
                <motion.a
                href={personalInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                className="flex items-center gap-6 p-5 sm:p-6 bg-white/5 backdrop-blur-sm md:backdrop-blur-xl border border-white/10 rounded-2xl transition-all group w-full"
                >
                <FaWhatsapp className="text-3xl sm:text-4xl text-white group-hover:text-primary transition-colors flex-shrink-0" />
                <span className="text-white font-bold text-lg sm:text-xl font-oxanium">
                    WhatsApp
                </span>
                </motion.a>

                {/* Github */}
                <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                className="flex items-center gap-6 p-5 sm:p-6 bg-white/5 backdrop-blur-sm md:backdrop-blur-xl border border-white/10 rounded-2xl transition-all group w-full"
                >
                <FaGithub className="text-3xl sm:text-4xl text-white group-hover:text-primary transition-colors flex-shrink-0" />
                <span className="text-white font-bold text-lg sm:text-xl font-oxanium">
                    GitHub
                </span>
                </motion.a>

                {/* LinkedIn */}
                <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                className="flex items-center gap-6 p-5 sm:p-6 bg-white/5 backdrop-blur-sm md:backdrop-blur-xl border border-white/10 rounded-2xl transition-all group w-full"
                >
                <FaLinkedin className="text-3xl sm:text-4xl text-white group-hover:text-primary transition-colors flex-shrink-0" />
                <span className="text-white font-bold text-lg sm:text-xl font-oxanium">
                    LinkedIn
                </span>
                </motion.a>

            </motion.div>
            </div>
        </motion.div>
      </div>

      <ToastContainer />
    </section>
  );
};

export default Contact;
