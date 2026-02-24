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
    <section id="problem" ref={ref} className="py-32 px-6 md:px-12 bg-white text-black relative border-t border-black/10 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-black/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-black/40 mb-8">{t("problem.tag")}</h2>
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
              className={`group relative p-8 border flex flex-col gap-2 transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-xl backdrop-blur-md rounded-2xl md:ml-12 ${item.highlight ? 'border-primary/20 bg-primary/5 shadow-lg shadow-primary/10' : 'border-black/[0.08] bg-white/50 hover:bg-white'}`}
            >
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
