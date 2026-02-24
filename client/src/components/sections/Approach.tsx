import { motion } from "framer-motion";
import { Code, Database, Shield, Cpu } from "phosphor-react";

const features = [
  {
    icon: <Code size={24} weight="regular" />,
    title: "Structural Code",
    description: "Type-safe, highly modular codebases. No spaghetti, no technical debt accumulation."
  },
  {
    icon: <Database size={24} weight="regular" />,
    title: "Scalable Data",
    description: "Database architectures built to handle volume without compromising latency."
  },
  {
    icon: <Shield size={24} weight="regular" />,
    title: "Enterprise Security",
    description: "Security by design, not as an afterthought. Protecting your core intellectual property."
  },
  {
    icon: <Cpu size={24} weight="regular" />,
    title: "Performance Focus",
    description: "Lightning-fast execution. Rendering speeds that keep users engaged and convert."
  }
];

export function Approach() {
  return (
    <section id="approach" className="py-32 px-6 md:px-12 bg-background relative border-t border-white/10">
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none mix-blend-overlay" />
      
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-white/40 mb-4">Structural Proposal</h2>
            <h3 className="text-4xl md:text-5xl font-display font-light text-white max-w-2xl text-balance">
              Building systems, not just features.
            </h3>
          </div>
          <p className="text-white/50 max-w-md font-sans">
            We abandon the fragmented agency model for a unified, deeply integrated technological partnership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-primary/0 group-hover:bg-primary/100 transition-colors duration-500" />
              <div className="text-primary mb-6">{feature.icon}</div>
              <h4 className="text-lg font-medium text-white mb-3">{feature.title}</h4>
              <p className="text-white/50 text-sm leading-relaxed font-sans">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
