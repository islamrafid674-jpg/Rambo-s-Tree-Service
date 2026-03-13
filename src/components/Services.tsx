import { motion } from 'motion/react';
import { TreePine, Scissors, Axe, Leaf, AlertTriangle, Trash2 } from 'lucide-react';

const services = [
  {
    title: 'Hazardous Tree Removal',
    description: 'Surgical dismantling of dangerous or diseased trees, ensuring zero impact on your surrounding landscape and structures.',
    icon: Axe,
  },
  {
    title: 'Aesthetic Pruning & Shaping',
    description: 'Architectural pruning to enhance the natural beauty of your trees while promoting long-term structural integrity.',
    icon: Scissors,
  },
  {
    title: 'Complete Stump Eradication',
    description: 'Deep-root stump grinding that completely removes unsightly remnants, allowing for immediate replanting or landscaping.',
    icon: Trash2,
  },
  {
    title: 'Specialized Palm Care',
    description: 'Expert maintenance for San Diego’s iconic palm species, including precise skinning and hazardous frond removal.',
    icon: TreePine,
  },
  {
    title: '24/7 Emergency Response',
    description: 'Immediate, priority dispatch for fallen or compromised trees threatening your home, family, or property value.',
    icon: AlertTriangle,
  },
  {
    title: 'Pristine Estate Cleanup',
    description: 'Comprehensive debris removal and hauling. We guarantee your property will look better than when we arrived.',
    icon: Leaf,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-stone-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-bold tracking-widest uppercase text-xs mb-4"
          >
            Our Expertise
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 mb-6 tracking-tight"
          >
            Exclusive Arboricultural Services
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-stone-600 font-light leading-relaxed"
          >
            We provide specialized, high-end tree care designed to enhance the beauty, safety, and value of your property.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] border border-stone-100 transition-all duration-500 group hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand transition-colors duration-500">
                <service.icon className="w-8 h-8 text-brand group-hover:text-accent transition-colors duration-500" />
              </div>
              <h4 className="text-2xl font-bold text-stone-900 mb-4 tracking-tight">{service.title}</h4>
              <p className="text-stone-600 leading-relaxed font-light">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
