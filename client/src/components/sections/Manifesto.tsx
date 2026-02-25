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
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-primary/80">{t("manifesto.tag")}</h2>
          </div>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-[1px] bg-gradient-to-r from-primary to-transparent" 
          />
        </div>
        
        <div className="lg:col-span-8 flex flex-col gap-12">
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: typeof window !== 'undefined' && window.innerWidth < 768 ? 0.4 : 0.8, 
              ease: "easeOut" 
            }}
            className="text-2xl sm:text-3xl md:text-5xl font-display font-light leading-[1.3] text-white/90 text-balance"
          >
            {t("manifesto.main")}<span className="font-semibold text-primary">{t("manifesto.main_bold")}</span>.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-4 md:mt-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ 
                duration: typeof window !== 'undefined' && window.innerWidth < 768 ? 0.4 : 0.8, 
                delay: typeof window !== 'undefined' && window.innerWidth < 768 ? 0.1 : 0.2 
              }}
              className="p-6 md:p-8 liquid-glass-dark rounded-[1.5rem] md:rounded-[2rem] border border-primary/5 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-center gap-3 mb-3 md:mb-4 relative z-10">
                <div className="w-1 h-1 rounded-full bg-primary/70" />
                <h3 className="text-lg md:text-xl font-medium text-white/90">{t("manifesto.precision.title")}</h3>
              </div>
              <p className="text-sm text-white/60 leading-relaxed font-sans relative z-10">
                {t("manifesto.precision.desc")}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ 
                duration: typeof window !== 'undefined' && window.innerWidth < 768 ? 0.4 : 0.8, 
                delay: typeof window !== 'undefined' && window.innerWidth < 768 ? 0.2 : 0.4 
              }}
              className="p-6 md:p-8 liquid-glass-dark rounded-[1.5rem] md:rounded-[2rem] border border-primary/5 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-center gap-3 mb-3 md:mb-4 relative z-10">
                <div className="w-1 h-1 rounded-full bg-primary/70" />
                <h3 className="text-lg md:text-xl font-medium text-white/90">{t("manifesto.silent.title")}</h3>
              </div>
              <p className="text-sm text-white/60 leading-relaxed font-sans relative z-10">
                {t("manifesto.silent.desc")}
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mt-12 md:mt-24 pt-8 md:pt-12 border-t border-primary/10 flex justify-center relative"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-[1px] bg-primary/30 blur-[0.5px]" />
            <p className="text-2xl md:text-6xl font-display font-light text-white/30 italic text-center font-serif leading-tight">
              <span className="text-primary/30">"</span>{t("manifesto.section_quote")}<span className="text-primary/30">"</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
