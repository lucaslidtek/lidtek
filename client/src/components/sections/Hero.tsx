import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { LidtekSVG } from "@/components/ui/magic/lidtek-svg";
import { useLanguage } from "@/hooks/use-language";
import { useEffect, useState } from "react";

export function Hero() {
  const { t } = useLanguage();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-end pb-24 px-6 md:px-12 overflow-hidden bg-background">
      {/* Background Animation - Inspired by 1Code/21st.dev style */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
        <motion.div 
          animate={{ 
            x: mousePosition.x * -1,
            y: mousePosition.y * -1,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary),0.05),transparent_50%)]"
        />
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute -right-1/4 -top-1/4 w-[150%] h-[150%] md:w-full md:h-full text-white pointer-events-none origin-center z-0"
      >
        <LidtekSVG className="w-full h-full object-contain" />
      </motion.div>
      
      <motion.div 
        animate={{ 
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: "spring", stiffness: 30, damping: 20 }}
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary rounded-full blur-[120px] pointer-events-none mix-blend-screen opacity-10 z-0" 
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-start gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="flex items-center gap-3 border border-white/[0.08] rounded-full px-4 py-1.5 backdrop-blur-md bg-white/[0.04] shadow-sm"
        >
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(101,128,225,0.8)]" />
          <span className="text-xs uppercase tracking-[0.2em] font-medium text-white/80">{t("hero.tag")}</span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-9xl font-display font-light leading-[1] tracking-tighter text-white max-w-6xl">
          <motion.span 
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="block"
          >
            {t("hero.title1")}<span className="italic text-white/40 font-light">{t("hero.title1_italic")}</span>
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className="block"
          >
            {t("hero.title2")}
          </motion.span>
        </h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex items-center gap-6 mt-12 group cursor-pointer"
          onClick={() => {
            document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all duration-500 overflow-hidden relative"
          >
            <motion.div 
              className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
            />
            <ArrowDownRight className="w-6 h-6 group-hover:rotate-45 transition-transform duration-500" />
          </motion.div>
          <span className="uppercase tracking-[0.3em] text-xs font-semibold text-white/40 group-hover:text-white transition-colors duration-500">{t("hero.explore")}</span>
        </motion.div>
      </div>
      
      {/* Scroll indicator - 21st.dev style */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/20 to-white/0" />
      </motion.div>
    </section>
  );
}
