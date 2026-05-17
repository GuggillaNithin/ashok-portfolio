import { motion } from 'motion/react';

export default function Testimonials() {
  const reviews = [
    {
      text: "Ashok's attention to detail in our SEO campaign was transformative. Our organic traffic doubled in just 4 months.",
      name: "John Allendane",
      role: "CREATIVE MANAGER",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
    },
    {
      text: "A complete search of the internet has found these results satisfactory. The most popular phrase on the web is Ashok.",
      name: "Anamika Sandula",
      role: "PRODUCT MANAGER",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
      featured: true
    },
    {
      text: "The LinkedIn Ads campaign Ashok built for us yielded a 300% ROI. Highly recommend his methodical approach.",
      name: "Souther Hakcax",
      role: "MARKETING DIRECTOR",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
    }
  ];

  return (
    <section id="notes" className="py-24 bg-bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-medium text-slate-900 mb-4"
          >
            People talk about us
          </motion.h2>
          <p className="text-slate-500 font-medium">Verified feedback from business owners and marketing partners.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`p-10 rounded-[2.5rem] bg-white shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center ${review.featured ? 'scale-105 shadow-md py-14' : ''}`}
            >
              <div className="w-16 h-16 rounded-full overflow-hidden mb-8 border-2 border-slate-100">
                <img src={review.avatar} alt={review.name} className="w-full h-full object-cover grayscale" />
              </div>
              <p className="text-lg font-display font-light italic text-slate-600 leading-relaxed mb-8">
                "{review.text}"
              </p>
              <div>
                <h4 className="text-base font-bold text-slate-900 mb-1">{review.name}</h4>
                <p className="text-[10px] font-bold text-slate-400 tracking-widest">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
