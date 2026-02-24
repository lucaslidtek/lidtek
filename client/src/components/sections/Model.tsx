import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { useLanguage } from "@/hooks/use-language";

export function Model() {
  const { t } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  const steps = [
    { step: "I", title: t("model.step1.title"), desc: t("model.step1.desc") },
    { step: "D", title: t("model.step2.title"), desc: t("model.step2.desc") },
    { step: "E", title: t("model.step3.title"), desc: t("model.step3.desc") },
    { step: "A", title: t("model.step4.title"), desc: t("model.step4.desc") },
    { step: "L", title: t("model.step5.title"), desc: t("model.step5.desc") }
  ];

  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="model" className="py-20 md:py-40 px-6 md:px-12 bg-background text-white border-t border-white/10 relative overflow-hidden" ref={containerRef}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[400px] md:h-[600px] bg-primary/5 rounded-full blur-[100px] md:blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="mb-16 md:mb-32 text-center flex flex-col items-center">
          <h2 className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-semibold text-primary mb-6">{t("model.tag")}</h2>
          <h3 className="text-3xl md:text-6xl font-display font-light text-white max-w-3xl text-balance mb-6 md:mb-8">Nosso Método</h3>
          <p className="text-white/60 max-w-xl font-sans text-base md:text-lg italic font-serif">
            {t("model.subtitle")}
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-8 left-0 w-full h-[1px] bg-white/10 hidden md:block" />
          <motion.div 
            style={{ scaleX, transformOrigin: "left" }}
            className="absolute top-8 left-0 w-full h-[2px] bg-primary hidden md:block z-0" 
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-0 relative z-10">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    duration: typeof window !== 'undefined' && window.innerWidth < 768 ? 0.4 : 0.8, 
                    delay: typeof window !== 'undefined' && window.innerWidth < 768 ? i * 0.05 : i * 0.15, 
                    ease: [0.215, 0.61, 0.355, 1] 
                  }
                }}
                viewport={{ once: true, margin: "-50px" }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="px-0 md:px-6 relative group cursor-default"
              >
                <div className="hidden md:flex absolute top-8 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border border-white/20 bg-background items-center justify-center transition-all duration-500 z-10 group-hover:border-primary group-hover:scale-150">
                   <div className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${hoveredIndex === i ? 'bg-primary shadow-[0_0_10px_hsl(var(--primary))] scale-150' : 'bg-transparent'}`} />
                </div>

                <motion.div 
                  whileInView={{ 
                    backgroundColor: typeof window !== 'undefined' && window.innerWidth < 768 ? "rgba(101,128,225,0.1)" : "transparent",
                    transition: { 
                      delay: typeof window !== 'undefined' && window.innerWidth < 768 ? i * 0.1 + 0.2 : i * 0.2 + 0.5, 
                      duration: 0.3 
                    }
                  }}
                  viewport={{ once: true }}
                  className={`mt-0 md:mt-24 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${hoveredIndex === i ? 'bg-black/60 backdrop-blur-[32px] saturate-[180%] border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] md:translate-y-[-8px]' : 'bg-white/5 md:bg-transparent'}`}
                >
                  <div className="relative inline-block mb-4 md:mb-6">
                    <motion.span 
                      whileInView={{ 
                        color: typeof window !== 'undefined' && window.innerWidth < 768 ? "hsl(var(--primary))" : "rgba(255,255,255,0.2)",
                        transition: { 
                          delay: typeof window !== 'undefined' && window.innerWidth < 768 ? i * 0.1 + 0.2 : i * 0.2 + 0.5, 
                          duration: 0.3 
                        }
                      }}
                      viewport={{ once: true }}
                      className={`text-4xl md:text-6xl font-display font-light block transition-colors duration-500 ${hoveredIndex === i ? 'text-primary' : 'text-white/20'}`}
                    >
                      {step.step}
                    </motion.span>
                    <motion.div 
                      whileInView={{ 
                        opacity: typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 0,
                        transition: { 
                          delay: typeof window !== 'undefined' && window.innerWidth < 768 ? i * 0.1 + 0.2 : i * 0.2 + 0.5, 
                          duration: 0.3 
                        }
                      }}
                      viewport={{ once: true }}
                      className={`absolute inset-0 blur-xl transition-opacity duration-500 bg-primary/30 ${hoveredIndex === i ? 'opacity-100' : 'opacity-0'} pointer-events-none`} 
                    />
                  </div>
                  <h4 className={`text-lg md:text-xl font-medium mb-3 md:mb-4 leading-tight transition-colors duration-500 ${hoveredIndex === i ? 'text-white' : 'text-white/80'}`}>{step.title}</h4>
                  <p className={`font-sans text-xs md:text-sm leading-relaxed transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${hoveredIndex === i ? 'text-white/70' : 'text-white/40'}`}>{step.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
