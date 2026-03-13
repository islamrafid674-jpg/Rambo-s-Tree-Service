import { motion } from 'motion/react';
import { CheckCircle2, Clock, HardHat, ShieldCheck, Star } from 'lucide-react';

const benefits = [
  {
    title: 'Zero Liability Guarantee',
    description: 'Fully licensed and insured up to $2M. We assume all risk so you have complete peace of mind.',
    icon: ShieldCheck,
  },
  {
    title: 'White-Glove Cleanup',
    description: 'We guarantee your property will be left in pristine condition, often cleaner than we found it.',
    icon: CheckCircle2,
  },
  {
    title: 'Certified Arborists',
    description: 'Our team consists of highly trained experts who understand the biology and architecture of your trees.',
    icon: HardHat,
  },
  {
    title: 'Precision & Punctuality',
    description: 'We respect your time and property, arriving on schedule and executing with surgical precision.',
    icon: Clock,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 md:py-32 bg-brand text-white overflow-hidden relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-accent font-bold tracking-widest uppercase text-xs mb-4">The Rambo Difference</h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 sm:mb-8 tracking-tight leading-tight">
                The Premium Standard in <br className="hidden sm:block" /> San Diego Tree Care
              </h3>
              <p className="text-stone-300 text-lg sm:text-xl mb-10 sm:mb-12 leading-relaxed font-light">
                We don't just cut trees; we manage the health, safety, and aesthetic value of your estate. When you hire Rambo's Tree Service, you are investing in a team that treats your property with the utmost respect and professionalism.
              </p>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10 mb-12">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={benefit.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex gap-5"
                  >
                    <div className="mt-1 shrink-0">
                      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                        <benefit.icon className="w-6 h-6 text-accent" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2 text-lg">{benefit.title}</h4>
                      <p className="text-sm text-stone-400 leading-relaxed font-light">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-white text-brand px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg hover:bg-stone-100 transition-all hover:-translate-y-1 shadow-xl w-full sm:w-auto"
              >
                Schedule Your Assessment
              </a>
            </motion.div>
          </div>

          {/* Right Image/Testimonial */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative lg:ml-10"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative shadow-2xl border border-white/10">
              <img 
                src="https://images.pexels.com/photos/8489861/pexels-photo-8489861.jpeg" 
                alt="Tree care professional at work" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand/90 via-brand/20 to-transparent"></div>
            </div>
            
            {/* Floating Testimonial Snippet */}
            <div className="absolute -bottom-6 left-4 right-4 sm:right-auto sm:-bottom-10 sm:-left-16 bg-white text-stone-900 p-6 sm:p-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] max-w-sm border border-stone-100 z-20">
              <div className="flex gap-1 mb-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-base font-medium italic mb-4 leading-relaxed text-stone-700">"Rambo's team was incredibly professional. They removed a massive, dangerous pine safely and left my estate absolutely spotless. Worth every penny."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center text-brand font-bold">SM</div>
                <div>
                  <p className="text-sm text-stone-900 font-bold">Sarah M.</p>
                  <p className="text-xs text-stone-500">Estate Owner, La Jolla</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
