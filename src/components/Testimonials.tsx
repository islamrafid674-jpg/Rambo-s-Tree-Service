import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Michael T.',
    location: 'Estate Owner, Point Loma',
    text: 'Rambo’s Tree Service executed a flawless removal of a massive, hazardous eucalyptus leaning over our guest house. Their precision, safety protocols, and immaculate cleanup were worth every penny. True professionals.',
  },
  {
    id: 2,
    name: 'Jessica R.',
    location: 'Property Manager, Chula Vista',
    text: 'Managing multiple high-end properties means I need reliable, top-tier contractors. Rambo’s team consistently delivers architectural pruning that enhances our landscapes while mitigating liability. They are my only call.',
  },
  {
    id: 3,
    name: 'David L.',
    location: 'Homeowner, North Park',
    text: 'After a severe storm, we had a 40-foot branch threatening our roof. They responded immediately in the middle of the night, secured the area, and safely dismantled the hazard. Their emergency response is unmatched.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-stone-100 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-bold tracking-widest uppercase text-xs mb-4"
          >
            Client Success Stories
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 mb-6 tracking-tight"
          >
            Trusted by San Diego's Finest Estates
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-stone-100 relative hover:-translate-y-1 transition-transform duration-500"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-stone-100" />
              <div className="flex gap-1 mb-6 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-stone-600 italic mb-8 leading-relaxed relative z-10 font-light text-lg">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4 border-t border-stone-100 pt-6">
                <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-brand font-bold text-lg">
                  {testimonial.name.split(' ')[0][0]}{testimonial.name.split(' ')[1][0]}
                </div>
                <div>
                  <h4 className="font-bold text-stone-900">{testimonial.name}</h4>
                  <p className="text-sm text-stone-500 font-medium">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
