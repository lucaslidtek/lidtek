import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";

export function Problem() {
  const { t } = useLanguage();

  return (
    <section id="problem" className="py-32 px-6 md:px-12 bg-black text-white relative border-t border-white/10">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-white/40 mb-8">{t("problem.tag")}</h2>
          <h3 className="text-4xl md:text-6xl font-display font-light leading-tight mb-8 text-balance">
            {t("problem.title")}<span className="italic text-white/50">{t("problem.title_italic")}</span>{t("problem.title_end")}
          </h3>
          <p className="text-xl text-white/60 font-sans leading-relaxed text-balance">
            {t("problem.desc")}
          </p>
        </motion.div>
        
        <div className="space-y-6">
          {[
            { title: t("problem.debt.title"), desc: t("problem.debt.desc") },
            { title: t("problem.generic.title"), desc: t("problem.generic.desc") },
            { title: t("problem.scale.title"), desc: t("problem.scale.desc") },
            { title: t("problem.solution.title"), desc: t("problem.solution.desc"), highlight: true }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`p-8 border flex flex-col gap-2 transition-all duration-300 backdrop-blur-xl group ${item.highlight ? 'border-primary/30 bg-[rgba(255,255,255,0.08)] shadow-[0_20px_40px_rgba(var(--primary),0.1)]' : 'border-white/[0.08] bg-[rgba(255,255,255,0.02)] hover:border-white/20'}`}
            >
              <h4 className={`text-lg font-bold tracking-tight ${item.highlight ? 'text-primary' : 'text-white'}`}>{item.title}</h4>
              <p className="text-sm text-white/40 font-sans group-hover:text-white/60 transition-colors">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
