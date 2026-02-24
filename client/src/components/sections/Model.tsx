import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";

export function Model() {
  const { t } = useLanguage();

  const steps = [
    { step: "I", title: t("model.step1.title"), desc: t("model.step1.desc") },
    { step: "D", title: t("model.step2.title"), desc: t("model.step2.desc") },
    { step: "E", title: t("model.step3.title"), desc: t("model.step3.desc") },
    { step: "A", title: t("model.step4.title"), desc: t("model.step4.desc") },
    { step: "L", title: t("model.step5.title"), desc: t("model.step5.desc") }
  ];

  return (
    <section id="model" className="py-40 px-6 md:px-12 bg-white text-black border-t border-black/[0.05] overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-32 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="px-4 py-1 border border-black/[0.05] bg-black/[0.02] rounded-full mb-8"
          >
            <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-black/40">{t("model.tag")}</h2>
          </motion.div>
          <h3 className="text-5xl md:text-7xl font-display font-light text-black max-w-4xl text-balance mb-12 tracking-tighter leading-[0.9]">Nosso Método</h3>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-black/40 max-w-xl font-sans text-base italic leading-relaxed"
          >
            {t("model.subtitle")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-0 border border-black/[0.08] divide-y md:divide-y-0 md:divide-x divide-black/[0.08] rounded-sm overflow-hidden bg-black/[0.01]">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-12 hover:bg-black/[0.03] transition-all duration-700 group relative overflow-hidden backdrop-blur-sm"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              <span className="text-5xl font-display font-light text-black/5 mb-12 block group-hover:text-black/10 transition-all duration-700 group-hover:-translate-y-2">{step.step}</span>
              <h4 className="text-lg font-bold mb-6 leading-tight tracking-tight">{step.title}</h4>
              <p className="text-black/40 font-sans text-xs leading-relaxed group-hover:text-black/60 transition-colors">{step.desc}</p>
              
              <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: i * 0.1 + 0.5 }}
                className="absolute bottom-0 left-0 w-full h-[1px] bg-black/5 origin-left"
              />
              
              <motion.div 
                className="absolute -bottom-2 -right-2 w-16 h-16 bg-black/[0.02] rounded-full blur-xl group-hover:bg-black/[0.05] transition-all duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
