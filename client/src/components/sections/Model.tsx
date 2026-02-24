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
    <section id="model" className="py-32 px-6 md:px-12 bg-white text-black border-t border-black/10">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-24 text-center flex flex-col items-center">
          <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-black/40 mb-6">{t("model.tag")}</h2>
          <h3 className="text-4xl md:text-6xl font-display font-light text-black max-w-3xl text-balance mb-8">Método IDEAL</h3>
          <p className="text-black/60 max-w-xl font-sans text-lg italic">
            IDEAL
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-0 border-y border-black/10 divide-y md:divide-y-0 md:divide-x divide-black/10">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.215, 0.61, 0.355, 1] }}
              className="p-10 lg:p-12 hover:bg-black/[0.02] transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-black/0 group-hover:bg-black transition-colors duration-700" />
              <span className="text-4xl font-display font-light text-black/10 mb-10 block group-hover:text-black/30 transition-colors duration-500">{step.step}</span>
              <h4 className="text-xl font-medium mb-6 leading-tight">{step.title}</h4>
              <p className="text-black/60 font-sans text-sm leading-relaxed">{step.desc}</p>
              
              <motion.div 
                className="absolute -bottom-1 -right-1 w-12 h-12 bg-black/5 rounded-tl-full translate-x-12 translate-y-12 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
