import { AnimatePresence } from 'framer-motion';

import Header from './Components/Header';
import Hero from './Components/Hero';
import Services from './Components/Services';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="bg-dark text-light min-h-screen">
      <AnimatePresence mode="wait">
        <Header />
        <main>
          <Hero />
          <Services />
          <About />
          <Contact />
       
        </main>
        <Footer />
      </AnimatePresence>
    </div>
  );
}

export default App;