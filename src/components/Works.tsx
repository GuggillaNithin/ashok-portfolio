import { motion } from 'framer-motion';

export default function Works() {
  const projects = [
    {
      title: 'Search Dominance',
      category: 'SEO CAMPAIGNS',
      color: 'bg-amber-100',
      image: '/1.png'
    },
    {
      title: 'Google Ads ROI',
      category: 'PAID ADS',
      color: 'bg-blue-100',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'
    },
    {
      title: 'Social Growth',
      category: 'SMM',
      color: 'bg-rose-100',
      image: '/3.png'
    }
  ];

  return (
    <section id="works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-16">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-medium text-slate-900 mb-4"
            >
              My Latest Works
            </motion.h2>
            <p className="text-slate-500 font-medium">Perfect solution for digital marketing experience</p>
          </div>
          <div className="flex flex-col items-end gap-4">
            <motion.a 
              href="#" 
              whileHover={{ x: 5 }}
              className="text-xs font-bold text-brand-orange tracking-widest uppercase border-b-2 border-brand-orange pb-1"
            >
              Explore More Works
            </motion.a>
          </div>
        </div>

        {/* Decorative Animated Line */}
        <div className="relative h-20 mb-12 flex justify-center">
            <motion.div 
                initial={{ height: 0, opacity: 0 }}
                whileInView={{ height: '100%', opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="w-px bg-slate-200"
            />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className={`aspect-[4/5] rounded-[2.5rem] ${project.color} p-10 overflow-hidden relative mb-6 transition-all duration-500 group-hover:scale-[0.98]`}>
                <div className="mb-6">
                  <span className="block text-[10px] font-bold text-slate-400 tracking-widest uppercase mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
                </div>
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-110">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
