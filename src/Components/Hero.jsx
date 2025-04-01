import { motion } from 'framer-motion';

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section id="development" className="min-h-screen flex items-center justify-center bg-dark text-light pt-20">
      <div className="container mx-auto px-6 py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={textVariants} className="mb-8">
            <h2 className="text-secondary text-xl md:text-2xl font-mono mb-4">Development of</h2>
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary animate-gradient"
              whileInView={{ opacity: 1, y: 0 }}
            >
              FUTURE <span className="block">TECHNOLOGIES</span>
            </motion.h1>
            <p className="text-light/80 text-lg md:text-xl max-w-2xl mx-auto">
              Our dialogues shape the technology of tomorrow
            </p>
          </motion.div>

          <motion.div 
            variants={textVariants}
            className="mt-12"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 15px rgba(0, 240, 255, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-full text-dark font-bold text-lg glow"
            >
              Explore Our Work
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Animated floating elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.3, 0],
              y: [0, -100],
              x: Math.random() > 0.5 ? [0, 50] : [0, -50]
            }}
            transition={{ 
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
            className="absolute w-1 h-1 bg-primary rounded-full glow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;