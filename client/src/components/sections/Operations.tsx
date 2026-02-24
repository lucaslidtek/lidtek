import { motion } from "framer-motion";
import { CheckCircle } from "phosphor-react";

export function Operations() {
  const indicators = [
    { title: "SLAs Nível Enterprise", value: "99.9%" },
    { title: "Gestão de Débito Técnico", value: "Ativa" },
    { title: "Governança de Dados", value: "Strict" },
    { title: "Maturidade Operacional", value: "Tier 4" }
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-white text-black border-t border-black/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-black/40 mb-8">Governança & Estrutura</h2>
          <h3 className="text-4xl md:text-5xl font-display font-light leading-tight mb-8">
            Maturidade operacional embutida no processo.
          </h3>
          <p className="text-xl text-black/60 font-sans leading-relaxed">
            Não entregamos apenas código. Entregamos um departamento de tecnologia estruturado, com governança clara e processos auditáveis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {indicators.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              className="group p-8 liquid-glass liquid-glass-interactive rounded-2xl"
            >
              <CheckCircle size={24} weight="fill" className="text-black/20 group-hover:text-primary group-hover:scale-110 transition-all duration-500 mb-6 relative z-10" />
              <div className="text-3xl font-display font-light mb-2 text-black transition-colors duration-500 relative z-10">{item.value}</div>
              <div className="text-sm font-medium text-black/60 group-hover:text-black/80 transition-colors duration-500 relative z-10">{item.title}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
