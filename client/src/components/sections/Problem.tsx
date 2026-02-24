import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { useRef } from "react";

export function Problem() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="problem" ref={ref} className="py-32 px-6 md:px-12 bg-[#F8F9FA] text-black relative border-t border-black/10 overflow-hidden">
      <div className="absolute top-[-15%] right-[-10%] w-[800px] h-[800px] bg-primary/[0.15] rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[-15%] w-[700px] h-[700px] bg-black/[0.08] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-accent/[0.12] rounded-full blur-[130px] pointer-events-none animate-pulse" style={{ animationDuration: '10s' }} />
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-primary mb-8 flex items-center gap-3">
            <div className="w-8 h-[1px] bg-primary/40" />
            {t("problem.tag")}
          </h2>
          <h3 className="text-4xl md:text-6xl font-display font-light leading-tight mb-8 text-balance">
            {t("problem.title")}<span className="italic font-serif text-black/50">{t("problem.title_italic")}</span>{t("problem.title_end")}
          </h3>
          <p className="text-xl text-black/60 font-sans leading-relaxed text-balance">
            {t("problem.desc")}
          </p>
        </motion.div>
        
        <motion.div style={{ y: y1 }} className="space-y-6 relative">
          {/* Linha lateral conectando (progressão) */}
          <div className="absolute left-4 top-8 bottom-8 w-[1px] bg-gradient-to-b from-transparent via-black/10 to-transparent hidden md:block" />
          
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
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              className={`group relative p-8 flex flex-col gap-2 liquid-glass liquid-glass-interactive rounded-2xl md:ml-12 ${item.highlight ? 'ring-2 ring-primary/40 bg-primary/20 shadow-[0_12px_48px_rgba(101,128,225,0.25)]' : 'shadow-lg border-white/40'}`}
            >
              {/* Focal light spot under the item */}
              <div className="absolute -bottom-2 left-10 w-32 h-6 bg-primary/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="absolute inset-0 border border-black/0 rounded-2xl opacity-0 group-hover:opacity-100 group-hover:border-black/5 transition-all duration-500 pointer-events-none" />
              {/* Ponto na linha */}
              <div className="absolute -left-[3.25rem] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-black/10 group-hover:bg-primary transition-colors duration-500 hidden md:block" />
              
              <h4 className={`text-lg font-medium tracking-wide relative z-10 ${item.highlight ? 'text-primary' : 'text-black'}`}>{item.title}</h4>
              <p className="text-sm text-black/60 font-sans relative z-10">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
