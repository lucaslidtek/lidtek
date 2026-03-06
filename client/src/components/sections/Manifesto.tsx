import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";

export function Manifesto() {
  const { t } = useLanguage();

  return (
    <section id="manifesto" className="py-32 px-6 md:px-12 bg-background text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full flex flex-col items-center relative z-10 px-4 sm:px-0">

        {/* Topo - Título Principal Centralizado */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16 md:mb-24">
          <h2 className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-semibold text-primary mb-8 flex items-center gap-3">
            <div className="w-8 h-[1px] bg-primary/40" />
            {t("manifesto.tag")}
            <div className="w-8 h-[1px] bg-primary/40" />
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-display font-light leading-[1.15] tracking-tight text-white/90 text-balance"
          >
            {t("manifesto.main")}<br className="hidden md:block" /><span className="md:hidden"> </span>
            <span className="font-semibold text-primary">{t("manifesto.main_bold")}</span>
          </motion.p>
        </div>

        {/* Meio - Layout dos Cards lado a lado */}
        <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{
              duration: 0.8,
              delay: 0.1
            }}
            className="p-8 md:p-10 liquid-glass-dark rounded-[1.5rem] md:rounded-[2rem] border border-primary/5 relative overflow-hidden group flex flex-col h-full justify-between"
          >
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="w-1.5 h-1.5 rounded-full bg-primary/80" />
              <h3 className="text-xl md:text-2xl font-medium text-white/90">{t("manifesto.precision.title")}</h3>
            </div>
            <p className="text-base md:text-lg text-white/60 leading-relaxed font-sans relative z-10">
              {t("manifesto.precision.desc")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{
              duration: 0.8,
              delay: 0.3
            }}
            className="p-8 md:p-10 liquid-glass-dark rounded-[1.5rem] md:rounded-[2rem] border border-primary/5 relative overflow-hidden group flex flex-col h-full justify-between"
          >
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="w-1.5 h-1.5 rounded-full bg-primary/80" />
              <h3 className="text-xl md:text-2xl font-medium text-white/90">{t("manifesto.silent.title")}</h3>
            </div>
            <p className="text-base md:text-lg text-white/60 leading-relaxed font-sans relative z-10">
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
          <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display font-light text-white/80 italic text-center font-serif leading-tight drop-shadow-sm max-w-5xl mx-auto w-full px-4 text-balance">
            <span className="text-primary/80 mr-1">"</span>
            {t("manifesto.section_quote")}
            <span className="text-primary/80 ml-1">"</span>
          </p>
        </motion.div>

        {/* Merged History Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-16 md:mt-24 pt-12 md:pt-16 border-t border-primary/10 flex flex-col justify-center relative items-center text-center w-full"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-[1px] bg-primary/30 blur-[0.5px]" />

          <div className="flex flex-col items-center w-full max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8 w-full">
              <div className="w-8 h-[1px] bg-primary/40" />
              <h2 className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-semibold text-primary/80">
                {t("history.tag")}
              </h2>
              <div className="w-8 h-[1px] bg-primary/40" />
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-light text-white mb-8 tracking-tight text-balance">
              {t("history.title")}
            </h3>

            <div className="p-6 sm:p-8 md:p-12 rounded-[2rem] bg-white/[0.02] border border-white/10 backdrop-blur-xl relative group overflow-hidden w-full">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <p className="text-base sm:text-lg md:text-xl text-white/70 font-light leading-relaxed mb-8 md:mb-10 max-w-2xl mx-auto text-balance">
                {t("history.desc")}
              </p>

              <div className="h-[1px] w-12 bg-primary/30 mx-auto mb-6 md:mb-8" />

              <p className="text-xs sm:text-sm md:text-base text-primary/80 italic font-serif tracking-wide max-w-xl mx-auto text-balance">
                {t("history.footer")}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section >
  );
}
