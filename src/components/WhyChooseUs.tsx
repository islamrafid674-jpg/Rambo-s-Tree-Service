import { motion } from 'motion/react';
import { CheckCircle2, Clock, HardHat, ShieldCheck } from 'lucide-react';

const benefits = [
  {
    title: 'Free Estimates',
    description: 'We provide transparent, no-obligation quotes before any work begins.',
    icon: CheckCircle2,
  },
  {
    title: 'Fast & Reliable Service',
    description: 'Punctual arrivals and efficient project completion, respecting your time.',
    icon: Clock,
  },
  {
    title: 'Experienced Professionals',
    description: 'Our team consists of trained tree care experts who know local San Diego flora.',
    icon: HardHat,
  },
  {
    title: 'Safe Equipment & Techniques',
    description: 'We use industry-leading safety gear and methods to protect your property.',
    icon: ShieldCheck,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-brand text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-accent font-semibold tracking-wide uppercase text-sm mb-3">Why Choose Us</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                San Diego's Most Trusted Tree Care Experts
              </h3>
              <p className="text-stone-300 text-lg mb-8 leading-relaxed">
                At Rambo's Tree Service, we don't just cut trees; we care for your property. With years of experience serving the San Diego community, we've built a reputation for safety, reliability, and exceptional customer service. When you hire us, you're getting a team that treats your yard like their own.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={benefit.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="mt-1">
                      <benefit.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{benefit.title}</h4>
                      <p className="text-sm text-stone-400 leading-relaxed">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <a
                href="#contact"
                className="inline-block bg-white text-brand px-8 py-4 rounded-xl font-semibold hover:bg-stone-100 transition-colors"
              >
                Get Your Free Quote
              </a>
            </motion.div>
          </div>

          {/* Right Image/Testimonial */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative">
              <img 
                src="https://images.pexels.com/photos/8489861/pexels-photo-8489861.jpeg" 
                alt="Tree care professional at work" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand/80 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Testimonial Snippet */}
            <div className="absolute -bottom-8 -left-8 sm:bottom-8 sm:-left-12 bg-white text-stone-900 p-6 rounded-2xl shadow-2xl max-w-xs border border-stone-100">
              <div className="flex gap-1 mb-3 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm font-medium italic mb-2">"Rambo's team was incredibly professional. They removed a massive pine safely and left my yard spotless."</p>
              <p className="text-xs text-stone-500 font-semibold">— Sarah M., La Jolla</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
