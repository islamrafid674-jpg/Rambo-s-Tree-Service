import { motion } from 'motion/react';
import { Phone, ArrowRight, ShieldCheck, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center pt-24 pb-12 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.imgur.com/0cnDm7T.jpeg"
          alt="Professional tree trimming in a residential yard"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand/95 via-brand/80 to-brand/30"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex flex-col justify-center py-12 md:py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 sm:mb-8 shadow-2xl"
          >
            <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent" />
            <span>Fully Licensed & Insured up to $2M</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 sm:mb-8 tracking-tight"
          >
            Protecting San Diego's <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-100 to-stone-400">Most Valuable Estates.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-stone-200 mb-8 sm:mb-12 max-w-2xl leading-relaxed font-light"
          >
            Premium tree care, hazard removal, and landscape preservation by expert arborists. We deliver pristine results with zero liability for the homeowner.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-5"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent/90 text-white px-6 sm:px-8 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg transition-all shadow-[0_0_40px_-10px_rgba(74,93,35,0.5)] hover:shadow-[0_0_60px_-15px_rgba(74,93,35,0.7)] hover:-translate-y-1 group"
            >
              <Phone className="w-5 h-5" />
              <span>Request Property Assessment</span>
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 backdrop-blur-md text-white border border-white/20 px-6 sm:px-8 py-4 sm:py-5 rounded-xl font-semibold text-base sm:text-lg transition-all hover:-translate-y-1 group"
            >
              <span>View Premium Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 sm:mt-16 flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-y-3 gap-x-6 text-white/90 text-sm font-medium"
          >
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-stone-300">5.0 Average Rating</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-white/30 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-stone-300">24/7 Emergency Response</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-white/30 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-accent" />
              <span className="text-stone-300">100% Satisfaction Guarantee</span>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-stone-50 to-transparent z-10 pointer-events-none"></div>
    </section>
  );
}
