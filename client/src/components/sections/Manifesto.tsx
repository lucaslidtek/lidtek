import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";

export function Manifesto() {
  const { t } = useLanguage();

  return (
    <section id="manifesto" className="py-32 px-6 md:px-12 bg-background text-white min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 relative z-10">
        <div className="lg:col-span-4">
          <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-white/40 mb-4">{t("manifesto.tag")}</h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-[1px] bg-white" 
          />
        </div>
        
        <div className="lg:col-span-8 flex flex-col gap-12">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-display font-light leading-[1.3] text-white/90 text-balance"
          >
            {t("manifesto.main")}<span className="font-semibold text-white">{t("manifesto.main_bold")}</span>.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
            <div
              className="p-8 liquid-glass-dark rounded-[2rem]"
            >
              <h3 className="text-xl font-medium mb-4 text-white/90 relative z-10">{t("manifesto.precision.title")}</h3>
              <p className="text-white/60 leading-relaxed font-sans relative z-10">
                {t("manifesto.precision.desc")}
              </p>
            </div>
            
            <div
              className="p-8 liquid-glass-dark rounded-[2rem]"
            >
              <h3 className="text-xl font-medium mb-4 text-white/90 relative z-10">{t("manifesto.silent.title")}</h3>
              <p className="text-white/60 leading-relaxed font-sans relative z-10">
                {t("manifesto.silent.desc")}
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="mt-24 pt-12 border-t border-white/10 flex justify-center"
          >
            <p className="text-4xl md:text-6xl font-display font-light text-white/30 italic text-center font-serif">
              "{t("manifesto.section_quote")}"
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
