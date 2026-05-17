import { motion } from 'motion/react';
import { Phone } from 'lucide-react';
import Signature from './Signature';

export default function Footer() {
  const footerLinks = [
    { name: 'SERVICES', href: '#services' },
    { name: 'WORKS', href: '#works' },
    { name: 'NOTES', href: '#notes' },
    { name: 'EXPERIENCE', href: '#experience' },
  ];

  return (
    <footer className="pt-24 pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-16 mb-24">
          <div className="max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-display font-medium text-slate-900 leading-tight mb-8"
            >
              Let's make something amazing together.
            </motion.h2>
            <p className="text-3xl md:text-4xl text-slate-900 font-display mb-12">
              Start by <span className="text-brand-orange italic">saying hi</span>
            </p>
          </div>

          <div className="flex flex-col md:items-end justify-between">
            <div className="text-left md:text-right mb-8">
              <span className="block text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase mb-4">Information</span>
              <p className="text-lg font-bold text-slate-900 mb-6">KPHB, Hyderabad, 500072</p>
              
              <div className="flex flex-col gap-4 items-start md:items-end">
                <motion.a 
                  href="https://wa.me/+918008015106"
                  whileHover={{ x: -5 }}
                  className="bg-[#25D366] text-white px-6 py-3 rounded-full font-bold flex items-center gap-3 shadow-lg hover:shadow-xl transition-all text-sm"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  WhatsApp
                </motion.a>
                <motion.a 
                  href="tel:+918008015106"
                  whileHover={{ x: -5 }}
                  className="bg-slate-900 text-white px-6 py-3 rounded-full font-bold flex items-center gap-3 shadow-lg hover:shadow-xl transition-all text-sm"
                >
                  <div className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center">
                     <Phone className="w-2.5 h-2.5" />
                  </div>
                  Call Now
                </motion.a>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-1 gap-4 text-left md:text-right">
              {footerLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-xs font-bold text-slate-900 tracking-tighter hover:text-brand-orange transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6">
            <Signature className="text-3xl text-slate-900" />
            <span className="text-xs font-medium text-slate-400">© 2024. All Rights Reserved</span>
          </div>
          
          <div className="text-xs font-medium text-slate-400">
            Design by <span className="text-slate-900 font-bold">Oris Creative Agency</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
