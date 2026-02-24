import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";

export function Model() {
  const { t } = useLanguage();

  const steps = [
    { step: "01", title: t("model.step1.title"), desc: t("model.step1.desc") },
    { step: "02", title: t("model.step2.title"), desc: t("model.step2.desc") },
    { step: "03", title: t("model.step3.title"), desc: t("model.step3.desc") },
    { step: "04", title: t("model.step4.title"), desc: t("model.step4.desc") }
  ];

  return (
    <section id="model" className="py-32 px-6 md:px-12 bg-white text-black border-t border-black/10">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-20 text-center flex flex-col items-center">
          <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-black/40 mb-4">{t("model.tag")}</h2>
          <h3 className="text-4xl md:text-5xl font-display font-light text-black max-w-2xl text-balance">
            {t("model.title")}
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
