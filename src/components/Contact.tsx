import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm(
      'nived11',
      'template_z2m5b7f',
      e.currentTarget,
      '156D1ZevOJfFfZN3H'
    ).then(
      (result) => {
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
      (error) => {
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

  return (
    <section id="contact" className="min-h-screen w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-chakra">
            Get In Touch
          </h1>
        </motion.div>

        {/* Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl w-full"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 font-chakra">
              Contact Me
            </h2>

            <form onSubmit={sendEmail} className="space-y-4 sm:space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all font-oxanium"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all font-oxanium"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all font-oxanium"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all resize-none font-oxanium"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-primary text-black font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/50 font-chakra"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col justify-center space-y-6 w-full"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-chakra">
              Connect With Me
            </h2>

            <motion.a
              href="https://github.com/Nived11"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 10, backgroundColor: 'rgba(37, 149, 102, 0.1)' }}
              className="flex items-center gap-4 p-5 sm:p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl transition-all group w-full"
            >
              <FaGithub className="text-2xl sm:text-3xl text-primary group-hover:scale-110 transition-transform flex-shrink-0" />
              <span className="text-white font-semibold text-base sm:text-lg font-oxanium">
                Github
              </span>
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/nived11"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 10, backgroundColor: 'rgba(37, 149, 102, 0.1)' }}
              className="flex items-center gap-4 p-5 sm:p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl transition-all group w-full"
            >
              <FaLinkedin className="text-2xl sm:text-3xl text-primary group-hover:scale-110 transition-transform flex-shrink-0" />
              <span className="text-white font-semibold text-base sm:text-lg font-oxanium">
                LinkedIn
              </span>
            </motion.a>

            <motion.a
              href="mailto:nived4148@gmail.com"
              whileHover={{ x: 10, backgroundColor: 'rgba(37, 149, 102, 0.1)' }}
              className="flex items-center gap-4 p-5 sm:p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl transition-all group w-full"
            >
              <FaEnvelope className="text-2xl sm:text-3xl text-primary group-hover:scale-110 transition-transform flex-shrink-0" />
              <span className="text-white font-semibold text-base sm:text-lg font-oxanium">
                Email
              </span>
            </motion.a>
          </motion.div>
        </div>
      </div>

      <ToastContainer />
    </section>
  );
};

export default Contact;
