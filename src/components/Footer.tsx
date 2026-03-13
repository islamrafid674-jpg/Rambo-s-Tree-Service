export default function Footer() {
  return (
    <footer className="bg-brand text-stone-400 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-white p-2 rounded-lg inline-flex">
                <img src="https://i.imgur.com/Nz82GsQ.png" alt="Rambo's Tree Service Logo" className="h-10 w-auto object-contain" referrerPolicy="no-referrer" />
              </div>
              <span className="font-bold text-lg text-white">
                Rambo's Tree Service
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Professional, safe, and reliable tree care services for residential and commercial properties in San Diego, CA.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Project Gallery</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Tree Removal</li>
              <li>Tree Trimming & Pruning</li>
              <li>Stump Grinding</li>
              <li>Emergency Tree Care</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} Rambo's Tree Service. All rights reserved.</p>
          <p>Licensed & Insured in California</p>
        </div>
      </div>
    </footer>
  );
}
