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


      </div>
    </section >
  );
}
