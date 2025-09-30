import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronUp } from 'lucide-react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { Services } from './components/pages/Services';
import { Products } from './components/pages/Products';
import { Contact } from './components/pages/Contact';
import { Careers } from './components/pages/Careers';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll to show/hide scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Page navigation with smooth transitions
  const navigateToPage = (page: string) => {
    setCurrentPage(page);
    scrollToTop();
  };

  // Render current page component
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'products':
        return <Products />;
      case 'contact':
        return <Contact />;
      case 'careers':
        return <Careers />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-[#051014] text-white">
      <Header currentPage={currentPage} onNavigate={navigateToPage} />
      
      <main className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-[#0E79B2] to-[#BF1363] hover:from-[#BF1363] hover:to-[#0E79B2] p-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronUp className="h-6 w-6 text-white" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;