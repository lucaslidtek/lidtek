import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight } from "phosphor-react";
import { useLanguage } from "@/hooks/use-language";
import { useEffect, useState } from "react";

export function CTA() {
  const { t } = useLanguage();
  const whatsappUrl = "https://wa.me/553496840966?text=Olá Rafael, gostaria de entender melhor como a Lidtek pode atuar como nosso departamento de tecnologia.";

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate relative to the window to match Hero's fixed light behavior
      mouseX.set(e.clientX - 300); 
      mouseY.set(e.clientY - 300);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section id="contact" className="relative pt-24 md:pt-32 pb-12 px-6 md:px-12 bg-background border-t border-white/5 overflow-hidden">
      {/* Background Image & Effects - Matching Hero Style */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(var(--primary-rgb),0.12),transparent_70%)] opacity-40" />
        
        {/* Animated Procedural Grid Background - Matching Hero */}
        <div className="absolute inset-0 opacity-10">
          <motion.div 
            animate={{ backgroundPosition: ["0px 0px", "0px 32px"] }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
            className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem]"
          />
        </div>
      </div>
      
      {/* Dynamic light following mouse - Exactly like Hero */}
      {isMounted && (
        <motion.div 
          style={{ x: springX, y: springY }}
          className="fixed top-0 left-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen z-0" 
        />
      )}

      <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-8 bg-primary/50" />
            <h2 className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold text-primary/80">{t("cta.tag")}</h2>
            <div className="h-[1px] w-8 bg-primary/50" />
          </div>

          <h3 className="text-4xl md:text-6xl lg:text-7xl font-display font-light tracking-tight text-white mb-10 max-w-4xl leading-[1.1]">
            {t("cta.title")}
          </h3>
          
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-12 py-5 bg-white text-black overflow-hidden rounded-full flex items-center gap-4 transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(var(--primary),0.3)]"
            >
              <span className="relative z-10 font-bold uppercase tracking-[0.15em] text-xs">{t("cta.btn")}</span>
              <ArrowRight size={18} className="relative z-10 transition-transform duration-500 group-hover:translate-x-1" weight="bold" />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>
            
            <p className="mt-8 text-[10px] uppercase tracking-[0.2em] text-white/30 font-medium">Disponibilidade limitada para novos projetos</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
