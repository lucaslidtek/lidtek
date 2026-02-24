import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDownRight } from "phosphor-react";
import { LidtekSVG } from "@/components/ui/magic/lidtek-svg";
import { useLanguage } from "@/hooks/use-language";

export function Hero() {
  const { t } = useLanguage();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 120 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Parallax and rotation for the SVG background
  const rotateX = useTransform(springY, [-300, 800], [10, -10]);
  const rotateY = useTransform(springX, [-300, 1500], [-10, 10]);
  const translateX = useTransform(springX, [-300, 1500], [-30, 30]);
  const translateY = useTransform(springY, [-300, 800], [-30, 30]);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate relative to the window
      mouseX.set(e.clientX - 300); // 300 is half the width of the glow
      mouseY.set(e.clientY - 300);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-end pb-24 px-6 md:px-12 bg-background">
      {/* Background Image - Pawel Czerwinski abstract glass */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="/static/images/pawel-czerwinski-uA6x_MXI_fE-unsplash_1771968246269.jpg" 
          alt="Abstract dark background"
          className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-background/60 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
      </div>

      {/* Animated Procedural Grid Background - Blueprint feel */}
      <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
        <motion.div 
          animate={{ backgroundPosition: ["0px 0px", "0px 32px"] }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)]"
        />
      </div>
      
      {/* Dynamic light following mouse */}
      {isMounted && (
        <motion.div 
          style={{ x: springX, y: springY }}
          className="fixed top-0 left-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen z-0" 
        />
      )}

      {/* SVG drawing animation */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ 
          rotateX, 
          rotateY, 
          x: translateX, 
          y: translateY,
          transformPerspective: 1000
        }}
        className="absolute -right-1/4 -top-[35%] w-[150%] h-[150%] md:w-full md:h-full text-white pointer-events-none origin-center z-0 mix-blend-screen overflow-hidden"
      >
        <div className="relative w-full h-full opacity-60">
           {/* SVG container - Using CSS filter to tint the white SVG to the primary brand color */}
           <div className="absolute inset-0" style={{ filter: "drop-shadow(0 0 40px hsl(var(--primary) / 0.4))" }}>
             <LidtekSVG className="w-full h-full object-contain text-primary" />
           </div>
        </div>
      </motion.div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-start gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="flex items-center gap-3 border border-white/10 rounded-full px-4 py-1.5 liquid-glass-dark liquid-glass-interactive"
        >
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_hsl(var(--primary))]" />
          <span className="text-xs uppercase tracking-[0.2em] font-medium text-white/80">{t("hero.tag")}</span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-light leading-[1.1] tracking-tight text-white max-w-5xl">
          <div className="flex flex-col items-start overflow-hidden">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            >
              Sua empresa já
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, filter: "blur(8px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
              className="italic text-white/60 font-serif"
            >
              tem tecnologia.
            </motion.span>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className="flex flex-col items-start mt-4"
          >
            <span>A questão é:</span>
            <span>ela tem direção?</span>
          </motion.div>
        </h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex items-center gap-6 mt-12 group cursor-pointer hover:-translate-y-0.5 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
          onClick={() => {
            document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm group-hover:bg-primary group-hover:border-primary group-hover:text-black group-hover:scale-105 shadow-[0_0_0_hsl(var(--primary))] group-hover:shadow-[0_10px_40px_-10px_hsl(var(--primary))] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] relative overflow-hidden">
            <ArrowDownRight size={24} weight="regular" className="relative z-10 text-white group-hover:text-background transition-colors" />
            <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 rounded-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] opacity-0 group-hover:opacity-100" />
          </div>
          <span className="uppercase tracking-widest text-sm text-white/60 group-hover:text-white transition-colors duration-500 font-medium">{t("hero.explore")}</span>
        </motion.div>
      </div>
    </section>
  );
}
