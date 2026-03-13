import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center z-50 relative">
              <a href="#" className="flex items-center gap-3 group" onClick={() => setIsMobileMenuOpen(false)}>
                <div className="bg-white/10 p-1.5 rounded-xl backdrop-blur-sm border border-white/20 group-hover:bg-white/20 transition-colors">
                  <img src="https://i.imgur.com/Nz82GsQ.png" alt="Rambo's Tree Service Logo" className="h-10 w-auto object-contain" referrerPolicy="no-referrer" />
                </div>
                <span className={`font-extrabold text-xl tracking-tight transition-colors duration-300 ${isScrolled || isMobileMenuOpen ? 'text-brand' : 'text-white drop-shadow-md'}`}>
                  Rambo's Tree Service
                </span>
              </a>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-bold tracking-wide uppercase transition-all hover:text-accent hover:-translate-y-0.5 ${
                    isScrolled ? 'text-stone-600' : 'text-stone-100 drop-shadow-md'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="flex items-center gap-2 bg-brand text-white px-6 py-3 rounded-xl font-bold hover:bg-accent transition-all shadow-lg shadow-brand/20 hover:shadow-accent/30 hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4" />
                <span>619-312-9861</span>
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 z-50 relative"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-7 h-7 text-brand" />
              ) : (
                <Menu className={`w-7 h-7 transition-colors ${isScrolled ? 'text-brand' : 'text-white drop-shadow-md'}`} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl flex flex-col justify-center items-center lg:hidden"
          >
            <div className="flex flex-col items-center gap-8 w-full px-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-extrabold text-stone-900 hover:text-accent transition-colors tracking-tight"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-3 bg-brand text-white px-8 py-4 rounded-2xl font-bold mt-8 w-full max-w-xs shadow-xl shadow-brand/20"
              >
                <Phone className="w-5 h-5" />
                <span>Call 619-312-9861</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
