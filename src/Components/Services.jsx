import { motion } from 'framer-motion';

const services = [
  {
    title: "PROVIDED DEVELOPMENT",
    description: "End-to-end development solutions tailored to your needs"
  },
  {
    title: "MOBILE DEVELOPMENT",
    description: "Cutting-edge mobile applications for all platforms"
  },
  {
    title: "QUALITY ASSURANCE",
    description: "Rigorous testing to ensure flawless performance"
  },
  {
    title: "BACKEND DEVELOPMENT",
    description: "Robust and scalable backend architectures"
  },
  {
    title: "UP & RESEARCH",
    description: "Innovation-driven research for future technologies"
  },
  {
    title: "PRODUCT DESIGN",
    description: "User-centric design that delights and engages"
  },
  {
    title: "DRAWINGS",
    description: "Conceptual visualizations for your ideas"
  },
  {
    title: "APP DEVELOPMENT",
    description: "Custom applications that drive business value"
  }
];

const Services = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-dark to-[#0a0a2a] relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="grid grid-cols-4 gap-4 w-full h-full">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="border border-light/10 rounded-lg"></div>
          ))}
        </div>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            We Provide Clients With <span className="text-primary">Stunning Solutions</span>
          </h2>
          <p className="text-light/70 max-w-3xl mx-auto text-lg">
            Designed with skill and passion to transform your ideas into reality
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ 
                y: -10,
                boxShadow: "0 10px 25px rgba(0, 240, 255, 0.15)"
              }}
              className="bg-dark/50 border border-light/10 rounded-xl p-8 backdrop-blur-sm hover:border-primary/30 transition-all"
            >
              <h3 className="text-xl font-bold mb-4 text-primary glow">{service.title}</h3>
              <p className="text-light/80">{service.description}</p>
              <div className="mt-6 h-1 w-10 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-block px-6 py-2 bg-dark border border-primary/20 rounded-full">
            <span className="text-primary font-mono">Agency Of The Year *49</span>
            <span className="text-light/80 ml-2">According To Awwwards</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;