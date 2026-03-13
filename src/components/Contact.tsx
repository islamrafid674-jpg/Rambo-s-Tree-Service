import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-accent font-bold tracking-widest uppercase text-xs mb-4">Take Action</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 mb-6 sm:mb-8 tracking-tight leading-tight">
              Request Your Comprehensive Property Assessment
            </h3>
            <p className="text-lg sm:text-xl text-stone-600 mb-10 sm:mb-12 leading-relaxed font-light">
              Protect your property value and eliminate hazards. Contact Rambo's Tree Service today to schedule a consultation with a certified arboricultural expert.
            </p>

            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-stone-50 rounded-2xl flex items-center justify-center shadow-sm shrink-0 border border-stone-100">
                  <Phone className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1 text-lg">Direct Line</h4>
                  <a href="tel:619-312-9861" className="text-2xl font-extrabold text-brand hover:text-accent transition-colors">
                    619-312-9861
                  </a>
                  <p className="text-sm text-accent font-medium mt-1 uppercase tracking-wide">Available 24/7 for emergencies</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-stone-50 rounded-2xl flex items-center justify-center shadow-sm shrink-0 border border-stone-100">
                  <Mail className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1 text-lg">Email Us</h4>
                  <a href="mailto:info@rambostreeservice.com" className="text-stone-600 hover:text-brand transition-colors text-lg">
                    info@rambostreeservice.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-stone-50 rounded-2xl flex items-center justify-center shadow-sm shrink-0 border border-stone-100">
                  <MapPin className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1 text-lg">Service Area</h4>
                  <p className="text-stone-600 text-lg">San Diego, CA & Surrounding Exclusive Communities</p>
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
            className="bg-stone-50 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-12 shadow-[0_20px_50px_rgb(0,0,0,0.05)] border border-stone-100 relative mt-8 lg:mt-0"
          >
            <div className="absolute top-0 right-0 translate-x-2 -translate-y-4 sm:-top-6 sm:-right-6 sm:translate-x-0 sm:translate-y-0 bg-brand text-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl flex items-center gap-2 sm:gap-3 transform rotate-3 z-10">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
              <span className="font-bold text-xs sm:text-sm">100% Secure</span>
            </div>

            <h4 className="text-3xl font-bold text-stone-900 mb-8 tracking-tight">Secure Your Assessment</h4>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-stone-700 mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-5 py-4 rounded-2xl border border-stone-200 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all bg-white shadow-sm"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-stone-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-5 py-4 rounded-2xl border border-stone-200 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all bg-white shadow-sm"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-stone-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-5 py-4 rounded-2xl border border-stone-200 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all bg-white shadow-sm"
                    placeholder="(619) 555-0123"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-bold text-stone-700 mb-2">Primary Concern</label>
                <select
                  id="service"
                  className="w-full px-5 py-4 rounded-2xl border border-stone-200 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all bg-white shadow-sm appearance-none"
                >
                  <option>Hazardous Tree Removal</option>
                  <option>Aesthetic Pruning & Shaping</option>
                  <option>Stump Eradication</option>
                  <option>Emergency Response</option>
                  <option>Comprehensive Estate Assessment</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-stone-700 mb-2">Project Details</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-5 py-4 rounded-2xl border border-stone-200 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all resize-none bg-white shadow-sm"
                  placeholder="Please provide details about your property and specific concerns..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-brand hover:bg-brand-light text-white font-bold text-lg py-5 rounded-2xl transition-all shadow-[0_10px_20px_rgba(36,25,19,0.2)] hover:shadow-[0_15px_30px_rgba(36,25,19,0.3)] hover:-translate-y-1"
              >
                Submit Request
              </button>
              <p className="text-center text-xs text-stone-500 font-medium mt-4">We respect your privacy. Your information is secure.</p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
