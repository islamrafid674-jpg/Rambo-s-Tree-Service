import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-brand font-semibold tracking-wide uppercase text-sm mb-3">Get In Touch</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6 tracking-tight">
              Ready for a Free Estimate?
            </h3>
            <p className="text-lg text-stone-600 mb-10 leading-relaxed">
              Whether you need an emergency tree removal, routine trimming, or stump grinding, our team is ready to help. Contact Rambo's Tree Service today for professional tree care in San Diego.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                  <Phone className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900 mb-1">Call Us Directly</h4>
                  <a href="tel:619-312-9861" className="text-xl font-bold text-brand hover:text-brand-light transition-colors">
                    619-312-9861
                  </a>
                  <p className="text-sm text-stone-500 mt-1">Available 24/7 for emergencies</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                  <Mail className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900 mb-1">Email Us</h4>
                  <a href="mailto:info@rambostreeservice.com" className="text-stone-600 hover:text-brand transition-colors">
                    info@rambostreeservice.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                  <MapPin className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900 mb-1">Service Area</h4>
                  <p className="text-stone-600">San Diego, CA & Surrounding Areas</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                  <Clock className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900 mb-1">Business Hours</h4>
                  <p className="text-stone-600">Mon - Sat: 7:00 AM - 6:00 PM<br/>Sun: Emergency Service Only</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-stone-100"
          >
            <h4 className="text-2xl font-bold text-stone-900 mb-6">Request Your Free Estimate Today</h4>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all"
                    placeholder="(619) 555-0123"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-stone-700 mb-2">Service Needed</label>
                <select
                  id="service"
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all bg-white"
                >
                  <option>Tree Removal</option>
                  <option>Tree Trimming</option>
                  <option>Stump Grinding</option>
                  <option>Emergency Service</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">Message / Project Details</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all resize-none"
                  placeholder="Tell us about the trees you need serviced..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-brand hover:bg-brand-light text-white font-semibold py-4 rounded-xl transition-colors shadow-lg shadow-brand/20"
              >
                Send Request
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
