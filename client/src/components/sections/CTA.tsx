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
    <section id="contact" className="relative pt-24 md:pt-32 pb-24 px-6 md:px-12 bg-[#F8F9FA] border-t border-black/10 overflow-hidden">
      {/* Background Image & Effects - Liquid Glass Version */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-5%] right-[-5%] w-[800px] h-[800px] bg-primary/[0.15] rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[-15%] left-[-10%] w-[700px] h-[700px] bg-accent/[0.12] rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '12s' }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(101,128,225,0.08),transparent_50%)]" />
      </div>
      
      {/* Dynamic light following mouse - Adapted for Light Background */}
      {isMounted && (
        <motion.div 
          style={{ x: springX, y: springY }}
          className="fixed top-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none mix-blend-multiply z-0" 
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
            <div className="h-[1px] w-8 bg-primary/30" />
            <h2 className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold text-primary/60">{t("cta.tag")}</h2>
            <div className="h-[1px] w-8 bg-primary/30" />
          </div>

          <h3 className="text-4xl md:text-6xl lg:text-7xl font-display font-light tracking-tight text-neutral-900 mb-10 max-w-4xl leading-[1.1]">
            {t("cta.title")}
          </h3>
          
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full max-w-sm py-5 md:py-6 bg-primary text-white overflow-hidden rounded-full flex items-center justify-center transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] shadow-[0_10px_30px_rgba(var(--primary),0.3)] hover:shadow-[0_20px_40px_rgba(var(--primary),0.4)] group-hover:bg-primary/90"
            >
              <span className="relative z-10 font-bold uppercase tracking-[0.2em] text-[12px] md:text-sm">{t("cta.btn")}</span>
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>
            
            <p className="mt-8 text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-medium">Escalando o futuro de quem constrói o amanhã</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
