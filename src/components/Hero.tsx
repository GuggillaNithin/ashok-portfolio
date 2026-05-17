import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-display font-medium text-slate-900 leading-tight mb-6"
            >
              Hey <br />
              There, <br />
              I'm Ashok
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-xl md:text-2xl font-display font-light italic text-slate-600 leading-relaxed mb-10 max-w-md mx-auto lg:mx-0"
            >
              "I design high-quality digital marketing solutions that drive growth."
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <a 
                href="mailto:ashokpandrinki075@gmail.com"
                className="text-lg font-medium text-slate-500 hover:text-brand-orange transition-colors border-b border-slate-300 pb-1"
              >
                ashokpandrinki075@gmail.com
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-16 flex items-baseline gap-4 justify-center lg:justify-start"
            >
              <span className="text-6xl font-display font-bold text-slate-900">5+</span>
              <span className="text-xs font-semibold text-slate-400 tracking-widest uppercase leading-tight">
                Years of <br /> Experience
              </span>
            </motion.div>
          </div>

          {/* Right Content - Visual */}
          <div className="lg:w-1/2 relative flex justify-center">
            {/* Decorative BG */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-slate-100 rounded-full -z-10 opacity-50"
            />
            
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.02, rotate: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative z-10 w-72 h-96 md:w-96 md:h-[32rem] rounded-full overflow-hidden border-8 border-white shadow-2xl cursor-pointer"
              >
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
                  alt="Ashok"
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                />
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute -bottom-6 -right-6 md:-right-12 bg-white p-4 md:p-6 rounded-2xl shadow-xl z-20 max-w-[200px]"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center mb-3">
                    <span className="text-slate-500 text-xl">🏆</span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 tracking-tighter uppercase mb-1">Expert Certified</span>
                  <p className="text-xs font-bold text-slate-900">DIGITAL MARKETER</p>
                </div>
              </motion.div>

              {/* Side Info */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute -right-32 bottom-1/4 hidden xl:block max-w-[240px]"
              >
                <div>
                  <span className="block text-[10px] font-bold text-slate-400 tracking-widest uppercase mb-2">Location</span>
                  <p className="text-sm font-semibold text-slate-800">KPHB, Hyderabad</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
