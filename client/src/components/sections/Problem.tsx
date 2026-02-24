import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";

export function Problem() {
  const { t } = useLanguage();

  return (
    <section id="problem" className="py-40 px-6 md:px-12 bg-[#050505] text-white relative border-t border-white/[0.05]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(var(--primary),0.03),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 sticky top-40"
        >
          <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-white/20 mb-8">{t("problem.tag")}</h2>
          <h3 className="text-5xl md:text-7xl font-display font-light leading-[0.9] mb-12 tracking-tighter text-balance">
            {t("problem.title")}<span className="italic text-white/20">{t("problem.title_italic")}</span>{t("problem.title_end")}
          </h3>
          <p className="text-lg text-white/30 font-sans leading-relaxed max-w-md">
            {t("problem.desc")}
          </p>
        </motion.div>
        
        <div className="lg:col-span-7 space-y-4">
          {[
            { title: t("problem.debt.title"), desc: t("problem.debt.desc") },
            { title: t("problem.generic.title"), desc: t("problem.generic.desc") },
            { title: t("problem.scale.title"), desc: t("problem.scale.desc") },
            { title: t("problem.solution.title"), desc: t("problem.solution.desc"), highlight: true }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ x: 10, transition: { duration: 0.3 } }}
              className={`p-12 border flex flex-col gap-4 transition-all duration-500 backdrop-blur-2xl group relative overflow-hidden rounded-sm ${
                item.highlight 
                ? 'border-primary/40 bg-[rgba(255,255,255,0.06)] shadow-[0_40px_80px_rgba(var(--primary),0.15)]' 
                : 'border-white/[0.06] bg-[rgba(255,255,255,0.01)] hover:border-white/20'
              }`}
            >
              {item.highlight && (
                <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
              )}
              <div className="flex justify-between items-start">
                <h4 className={`text-2xl font-bold tracking-tight ${item.highlight ? 'text-primary' : 'text-white'}`}>{item.title}</h4>
                <span className="text-[10px] font-mono text-white/10">0{i + 1}</span>
              </div>
              <p className="text-base text-white/30 font-sans group-hover:text-white/60 transition-colors leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
