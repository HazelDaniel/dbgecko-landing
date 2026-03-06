import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Download } from './components/Download';
import { Plugins } from './components/Plugins';
import { Footer } from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Download />
        <Plugins />
      </main>
      <Footer />
    </div>
  );
}

export default App;
