import { motion } from "framer-motion";

export function Problem() {
  return (
    <section id="problem" className="py-32 px-6 md:px-12 bg-black text-white relative border-t border-white/10">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-white/40 mb-8">Market Reality</h2>
          <h3 className="text-4xl md:text-6xl font-display font-light leading-tight mb-8">
            The era of <span className="italic text-white/50">fragile</span> software is over.
          </h3>
          <p className="text-xl text-white/60 font-sans leading-relaxed text-balance">
            Most agencies deliver generic templates and spaghetti code that buckle under real-world pressure. They build for the launch, not for the legacy.
          </p>
        </motion.div>
        
        <div className="space-y-6">
          {[
            { title: "Technical Debt", desc: "Accumulated by rushing features without architectural planning." },
            { title: "Generic Aesthetics", desc: "Templates that dilute brand authority and fail to differentiate." },
            { title: "Scalability Failures", desc: "Systems that crash exactly when market demand peaks." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-8 border border-white/10 bg-white/5 flex flex-col gap-2"
            >
              <h4 className="text-lg font-medium tracking-wide">{item.title}</h4>
              <p className="text-sm text-white/50 font-sans">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
