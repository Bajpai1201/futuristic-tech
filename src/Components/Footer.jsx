import { motion } from 'framer-motion';

const Footer = () => {
  const links = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const socials = [
    { name: "Twitter", href: "#" },
    { name: "LinkedIn", href: "#" },
    { name: "Dribbble", href: "#" },
    { name: "GitHub", href: "#" },
  ];

  return (
    <footer className="bg-[#0a0a1a] border-t border-light/10">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 glow">
              FUTURE<span className="text-primary">TECH</span>
            </h3>
            <p className="text-light/60 max-w-md">
              Creating the future with innovative technologies and stunning solutions.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-light font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5, color: '#00f0ff' }}
                    transition={{ duration: 0.2 }}
                  >
                    <a href={link.href} className="text-light/60 hover:text-primary transition-colors">
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-light font-medium mb-4">Connect</h4>
              <ul className="space-y-2">
                {socials.map((social, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5, color: '#00f0ff' }}
                    transition={{ duration: 0.2 }}
                  >
                    <a href={social.href} className="text-light/60 hover:text-primary transition-colors">
                      {social.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        <div className="border-t border-light/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-light/50 text-sm"
          >
            © {new Date().getFullYear()} FutureTech. All rights reserved.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {['www.website.com', 'www.website.com', 'www.website.com'].map((url, index) => (
              <motion.a
                key={index}
                href={`https://${url}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ color: '#00f0ff' }}
                className="text-light/60 hover:text-primary text-sm transition-colors"
              >
                {url}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;