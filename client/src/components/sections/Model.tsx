import { motion } from "framer-motion";

const steps = [
  { step: "01", title: "Audit & Architecture", desc: "We map your requirements to a scalable infrastructure." },
  { step: "02", title: "Silent Execution", desc: "Our engineers build the core systems with military precision." },
  { step: "03", title: "Integration", desc: "Seamless deployment into your operational ecosystem." },
  { step: "04", title: "Continuous Dominance", desc: "Ongoing optimization and strategic scaling of the technology." }
];

export function Model() {
  return (
    <section id="model" className="py-32 px-6 md:px-12 bg-white text-black border-t border-black/10">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-20 text-center flex flex-col items-center">
          <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-black/40 mb-4">Operating Model</h2>
          <h3 className="text-4xl md:text-5xl font-display font-light text-black max-w-2xl text-balance">
            How we integrate with your brand.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-0 border-y border-black/10 divide-y md:divide-y-0 md:divide-x divide-black/10">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-10 lg:p-12 hover:bg-black/[0.02] transition-colors group relative"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-black/0 group-hover:bg-primary transition-colors duration-500" />
              <span className="text-4xl font-display font-light text-black/20 mb-8 block group-hover:text-black transition-colors">{step.step}</span>
              <h4 className="text-xl font-medium mb-4">{step.title}</h4>
              <p className="text-black/60 font-sans text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
