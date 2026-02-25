import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDownRight } from "phosphor-react";
import { LidtekSVG } from "@/components/ui/magic/lidtek-svg";
import { useLanguage } from "@/hooks/use-language";

export function Hero() {
  const { t, language } = useLanguage();
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
    <section className="relative min-h-[100vh] flex flex-col justify-center py-20 px-6 md:px-12 bg-background overflow-hidden">
      {/* Background Image - Pawel Czerwinski abstract glass */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="/static/images/pawel-czerwinski-uA6x_MXI_fE-unsplash_1771968246269.jpg" 
          alt="Abstract dark background"
          className="w-full h-full object-cover opacity-20 md:opacity-30 mix-blend-luminosity"
          fetchpriority="high"
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
      
      {/* Dynamic light following mouse - Disabled on mobile for performance */}
      {isMounted && (
        <motion.div 
          style={{ x: springX, y: springY }}
          className="fixed top-0 left-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen z-0 hidden md:block" 
        />
      )}

      {/* SVG drawing animation */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ 
          rotateX: typeof window !== 'undefined' && window.innerWidth < 768 ? 0 : rotateX, 
          rotateY: typeof window !== 'undefined' && window.innerWidth < 768 ? 0 : rotateY, 
          x: typeof window !== 'undefined' && window.innerWidth < 768 ? 0 : translateX, 
          y: typeof window !== 'undefined' && window.innerWidth < 768 ? 0 : translateY,
          transformPerspective: 1000
        }}
        className="absolute -right-1/4 top-0 md:-top-[35%] w-[150%] h-auto aspect-square md:w-full md:h-full text-white pointer-events-none origin-center z-0 mix-blend-screen overflow-hidden opacity-20 md:opacity-100"
      >
        <div className="relative w-full h-full opacity-40 md:opacity-60">
           {/* SVG container - Using CSS filter to tint the white SVG to the primary brand color */}
           <div className="absolute inset-0" style={{ filter: "drop-shadow(0 0 20px hsl(var(--primary) / 0.3))" }}>
             <LidtekSVG className="w-full h-full object-contain text-primary" />
           </div>
        </div>
      </motion.div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-start gap-6 md:gap-12">
        <div
          className="flex items-center gap-3 border border-white/10 rounded-full px-4 py-1.5 liquid-glass-dark"
        >
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_hsl(var(--primary))]" />
          <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium text-white/80">{t("hero.tag")}</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-light leading-[1.1] tracking-tight text-white max-w-5xl">
          <div className="flex flex-col items-start overflow-hidden">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            >
              {language === 'pt' ? 'Sua empresa já' : 'Your company already'}
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, filter: "blur(8px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
              className="italic text-white/60 font-serif"
            >
              {language === 'pt' ? 'tem tecnologia.' : 'has technology.'}
            </motion.span>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className="flex flex-col items-start mt-4"
          >
            <span>{language === 'pt' ? 'A questão é:' : 'The question is:'}</span>
            <span>{language === 'pt' ? 'ela tem direção?' : 'does it have direction?'}</span>
          </motion.div>
        </h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex items-center gap-4 md:gap-6 mt-8 md:mt-12 group cursor-pointer"
          onClick={() => {
            document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm group-hover:bg-primary group-hover:border-primary group-hover:text-black transition-all duration-500 relative overflow-hidden">
            <ArrowDownRight size={20} weight="regular" className="relative z-10 text-white md:group-hover:text-background" />
          </div>
          <span className="uppercase tracking-widest text-[10px] md:text-sm text-white/60 group-hover:text-white transition-colors duration-500 font-medium">{t("hero.explore")}</span>
        </motion.div>
      </div>
    </section>
  );
}
