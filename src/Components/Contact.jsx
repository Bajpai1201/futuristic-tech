import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section id="contact" className="py-20 bg-dark relative overflow-hidden">
      {/* Animated grid */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        className="absolute inset-0 grid grid-cols-8 gap-1"
      >
        {[...Array(64)].map((_, i) => (
          <div key={i} className="border border-light/10"></div>
        ))}
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
            <span className="text-primary">Have An Idea?</span> Tell Us About It
          </h2>
          <p className="text-light/70 max-w-2xl mx-auto">
            We're excited to hear about your project and help bring it to life with our cutting-edge solutions.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.form
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6 relative"
          >
            {/* Floating elements */}
            <motion.div 
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-20 -left-20 w-10 h-10 bg-primary rounded-full blur-xl opacity-20"
            />
            <motion.div 
              animate={{
                y: [0, 15, 0],
                rotate: [0, -8, 8, 0]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute -bottom-20 -right-20 w-16 h-16 bg-secondary rounded-full blur-xl opacity-20"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileFocus={{ scale: 1.02 }}
                className="relative"
              >
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-dark/50 border border-light/20 rounded-lg px-4 py-3 text-light focus:outline-none focus:border-primary transition-all"
                  placeholder="Your Name"
                  required
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileFocus={{ scale: 1.02 }}
                className="relative"
              >
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-dark/50 border border-light/20 rounded-lg px-4 py-3 text-light focus:outline-none focus:border-primary transition-all"
                  placeholder="Your Email"
                  required
                />
              </motion.div>
            </div>

            <motion.div
              whileHover={{ scale: 1.01 }}
              className="relative"
            >
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full bg-dark/50 border border-light/20 rounded-lg px-4 py-3 text-light focus:outline-none focus:border-primary transition-all"
                placeholder="Your Message"
                required
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(0, 240, 255, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full text-dark font-bold text-lg glow"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;