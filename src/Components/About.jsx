import { motion } from 'framer-motion';

const About = () => {
  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-20 bg-[#0a0a2a] relative overflow-hidden">
      {/* Animated background */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="text-[20vw] font-bold opacity-10 text-center whitespace-nowrap">
          FUTURE TECHNOLOGIES
        </div>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-xl opacity-20 blur"></div>
              <div className="relative bg-dark/80 border border-light/10 rounded-xl p-8 backdrop-blur-sm">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">About</h2>
                <p className="text-light/80 mb-6 leading-relaxed">
                  We are creating a front-end development suite, dedicated for advanced staffing, 
                  specialists providing visibility appropriate and in order to work with friends,
                  work in food and other areas and contribute to mental healthcare.
                </p>
                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center glow"
                  >
                    <span className="text-dark font-bold">E</span>
                  </motion.div>
                  <span className="text-light/80">Emotion</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              From <span className="text-primary">Project Specification</span> To <span className="text-secondary">Biology Laboratory</span> And <span className="text-primary">Information</span>
            </h2>
            <p className="text-light/80 mb-8 leading-relaxed">
              Our comprehensive approach ensures that every project, from initial concept to final 
              implementation, meets the highest standards of quality and innovation.
            </p>
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255, 0, 240, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border border-secondary text-secondary rounded-full font-medium hover:bg-secondary/10 transition-all glow-secondary"
            >
              Learn More About Us
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;