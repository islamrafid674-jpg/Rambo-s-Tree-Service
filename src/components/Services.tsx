import { motion } from 'motion/react';
import { TreePine, Scissors, Axe, Leaf, AlertTriangle, Trash2 } from 'lucide-react';

const services = [
  {
    title: 'Tree Removal',
    description: 'Safe and efficient removal of dead, diseased, or hazardous trees from your property.',
    icon: Axe,
  },
  {
    title: 'Tree Trimming & Pruning',
    description: 'Promote healthy growth and improve the aesthetic appeal of your trees with expert pruning.',
    icon: Scissors,
  },
  {
    title: 'Stump Grinding',
    description: 'Complete removal of unsightly tree stumps to reclaim your yard space.',
    icon: Trash2,
  },
  {
    title: 'Palm Tree Trimming',
    description: 'Specialized care for San Diego palm trees, removing dead fronds and seed pods.',
    icon: TreePine,
  },
  {
    title: 'Emergency Tree Removal',
    description: '24/7 rapid response for fallen or dangerous trees threatening your home or safety.',
    icon: AlertTriangle,
  },
  {
    title: 'Yard & Debris Cleanup',
    description: 'Thorough cleanup and hauling of branches, brush, and green waste.',
    icon: Leaf,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand font-semibold tracking-wide uppercase text-sm mb-3">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6 tracking-tight">
            Comprehensive Tree Care Solutions
          </h3>
          <p className="text-lg text-stone-600">
            From routine maintenance to emergency removals, our experienced team handles all your tree care needs with precision and safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-stone-50 rounded-2xl p-8 border border-stone-100 hover:shadow-xl hover:border-brand/10 transition-all group"
            >
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-brand" />
              </div>
              <h4 className="text-xl font-bold text-stone-900 mb-3">{service.title}</h4>
              <p className="text-stone-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
