import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      company: 'Maple Learning Solutions',
      period: 'June 2025 – Present',
      role: 'Digital Marketing Specialist',
      description: 'Owned and executed end-to-end digital marketing strategy across four business verticals, focusing on SEO and LinkedIn marketing. Drove 50%+ growth in organic website traffic.',
      side: 'right'
    },
    {
      company: 'MDN Edify & DRS International',
      period: 'Oct 2024 – Apr 2025',
      role: 'Digital Marketer',
      description: 'Google Ads Expert: Ran PPC campaigns for four schools. Improved website performance implementing SEO best practices and technical SEO initiatives.',
      side: 'left'
    },
    {
      company: 'Freelance Digital Marketer',
      period: '2023 – 2024',
      role: 'Digital Marketing Strategist',
      description: 'Worked for several companies as a freelancer providing SEO audits, social media engagement tracking, and lead generation campaigns.',
      side: 'right'
    },
    {
      company: 'Calvary Hospital',
      period: 'Jan 2022 – May 2023',
      role: 'Marketing Executive',
      description: 'Developed client intake process for financial assessment and counselling. Negotiated Patient referral agreements. Managed Search Engine Optimization.',
      side: 'left'
    }
  ];

  return (
    <section id="experience" className="py-24 bg-bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-medium text-slate-900"
          >
            My Work Experience
          </motion.h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-slate-200" />
          
          {/* Animated Line Overlay */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-1/2 -translate-x-1/2 w-px bg-brand-orange z-0"
          />

          <div className="space-y-24">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative flex items-center justify-between gap-8 md:gap-16 flex-row"
              >
                {/* Left Side: Company Info (Right Aligned) */}
                <div className="w-1/2 flex flex-col items-end text-right px-4">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{exp.company}</h3>
                  <p className="text-sm font-semibold text-brand-orange">{exp.period}</p>
                </div>

                {/* Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-2 border-brand-orange rounded-full z-10 shadow-sm" />

                {/* Right Side: Role & Description (Left Aligned) */}
                <div className="w-1/2 flex flex-col items-start px-4">
                   <h4 className="text-xl font-bold text-slate-900 mb-1">{exp.role}</h4>
                   <p className="text-sm text-slate-500 leading-relaxed max-w-xs">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
