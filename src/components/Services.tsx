import { motion } from 'motion/react';
import { Palette, Search, Share2, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    { title: 'Brand Identity', projects: 47, icon: Palette, color: 'bg-orange-50', iconColor: 'text-orange-500' },
    { title: 'SEO Strategy', projects: 62, icon: Search, color: 'bg-blue-50', iconColor: 'text-blue-500' },
    { title: 'Social Marketing', projects: 85, icon: Share2, color: 'bg-purple-50', iconColor: 'text-purple-500' },
  ];

  const stats = [
    { label: 'PROJECT COMPLETED', value: '285+' },
    { label: 'HAPPY CLIENTS', value: '190+' },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left: Cards */}
          <div className="lg:w-1/2 grid grid-cols-1 gap-6 w-full">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-10 rounded-3xl ${service.color} flex items-center justify-between group cursor-pointer hover:shadow-lg transition-all`}
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{service.title}</h3>
                    <p className="text-sm text-slate-500 font-medium">{service.projects} Projects</p>
                  </div>
                </div>
                <div className="w-10 h-10 border border-slate-200 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-slate-900 group-hover:text-white transition-all">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Text & Stats */}
          <div className="lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-display font-medium text-slate-900 mb-8"
            >
              What do I help?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-slate-500 leading-relaxed max-w-xl mb-12"
            >
              I will help you with finding a solution and solve your problems. We use process design to create digital products. Besides that also help their business. We use process design to create digital products.
            </motion.p>

            <div className="flex gap-12 border-t border-slate-100 pt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                >
                  <span className="block text-4xl font-display font-bold text-slate-900 mb-2">{stat.value}</span>
                  <span className="block text-[10px] font-bold text-slate-400 tracking-[0.2em]">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
