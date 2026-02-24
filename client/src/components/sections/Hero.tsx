import { motion } from "framer-motion";
import { ArrowDownRight } from "phosphor-react";
import { LidtekSVG } from "@/components/ui/magic/lidtek-svg";
import { useLanguage } from "@/hooks/use-language";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-end pb-24 px-6 md:px-12 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute -right-1/4 -top-1/4 w-[150%] h-[150%] md:w-full md:h-full text-white pointer-events-none origin-center"
      >
        <LidtekSVG className="w-full h-full object-contain" />
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2 }}
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary rounded-full blur-[120px] pointer-events-none mix-blend-screen" 
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-start gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="flex items-center gap-3 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md bg-white/5"
        >
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(101,128,225,0.8)]" />
          <span className="text-xs uppercase tracking-[0.2em] font-medium text-white/80">{t("hero.tag")}</span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-light leading-[1.1] tracking-tight text-white max-w-5xl">
          <motion.span 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="block"
          >
            {t("hero.title1")}<span className="italic text-white/60">{t("hero.title1_italic")}</span>
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="block"
          >
            {t("hero.title2")}
          </motion.span>
        </h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex items-center gap-6 mt-12 group cursor-pointer"
          onClick={() => {
            document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-500">
            <ArrowDownRight size={20} weight="regular" />
          </div>
          <span className="uppercase tracking-widest text-sm text-white/60 group-hover:text-white transition-colors duration-500">{t("hero.explore")}</span>
        </motion.div>
      </div>
    </section>
  );
}
