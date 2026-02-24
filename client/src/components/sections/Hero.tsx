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
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center items-center px-6 md:px-12 overflow-hidden bg-[#050505]">
      {/* Dynamic Background Shader Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary),0.08),transparent_70%)]" />
        <div className="absolute inset-0 bg-grid opacity-[0.15] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
        <motion.div 
          animate={{ 
            x: mousePosition.x * -1.2,
            y: mousePosition.y * -1.2,
          }}
          className="absolute inset-0 opacity-[0.03] text-white"
        >
          <LidtekSVG className="w-full h-full object-cover scale-150 rotate-12" />
        </motion.div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="px-4 py-1 border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl rounded-full mb-4"
        >
          <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-primary/80">{t("hero.tag")}</span>
        </motion.div>

        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-display font-light leading-[0.85] tracking-tighter text-white max-w-7xl">
          <motion.span 
            initial={{ opacity: 0, y: 100, filter: "blur(20px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="block"
          >
            {t("hero.title1")}
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, y: 100, filter: "blur(20px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="block italic text-white/30 font-extralight"
          >
            {t("hero.title1_italic")}
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, y: 100, filter: "blur(20px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            className="block"
          >
            {t("hero.title2")}
          </motion.span>
        </h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.2 }}
          className="flex flex-col items-center gap-12 mt-16"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-12 py-6 bg-white text-black rounded-full overflow-hidden transition-all duration-500 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
          >
            <span className="relative z-10 font-bold uppercase tracking-[0.3em] text-[10px]">{t("hero.explore")}</span>
            <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
          </motion.button>
        </motion.div>
      </div>
      
      {/* Scroll indicator - 21st.dev kinetic style */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-b from-white/0 via-primary/50 to-white/0"
      />
    </section>
  );
}
