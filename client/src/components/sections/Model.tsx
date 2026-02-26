import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useLanguage } from "@/hooks/use-language";

function LogoIcon({ active }: { active: boolean }) {
  return (
    <svg width="24" height="24" viewBox="0 0 1080 942" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
      <motion.path
        d="M542.929 686.185C539.727 682.983 534.533 682.988 531.337 686.197L279.092 939.425C273.938 944.6 265.101 940.949 265.101 933.646L265.101 784.028C265.101 781.808 266.003 779.683 267.6 778.14L501.471 552.119C506.766 547.002 502.802 539.317 495.439 539.317L7.84729 539.317C3.32465 539.317 3.01622e-05 534.375 3.03599e-05 529.853L4.07268e-05 411.269C4.09244e-05 406.747 4.2138 402.533 8.73645 402.533L419.472 402.533C421.644 402.533 423.179 403.943 424.715 405.479L796.218 776.983C797.754 778.519 798.617 780.602 798.617 782.774L798.616 922.104C798.616 929.399 789.796 933.053 784.637 927.894L542.929 686.185Z"
        animate={{
          fill: active ? "hsl(var(--primary))" : "rgba(255,255,255,0)",
          stroke: active ? "hsl(var(--primary))" : "rgba(255,255,255,0.3)",
          strokeWidth: active ? 0 : 40
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
      <motion.path
        d="M537.071 255.669C540.273 258.871 545.467 258.866 548.663 255.658L800.908 2.42914C806.062 -2.7451 814.899 0.905115 814.899 8.20842L814.899 157.826C814.899 160.046 813.997 162.172 812.4 163.715L578.529 389.735C573.234 394.852 577.198 402.538 584.561 402.538L1072.15 402.538C1076.68 402.538 1080 407.479 1080 412.002L1080 530.585C1080 535.108 1075.79 539.321 1071.26 539.321L660.528 539.321C658.356 539.321 656.821 537.911 655.285 536.376L283.782 164.871C282.246 163.335 281.384 161.253 281.384 159.081L281.384 19.7508C281.384 12.4552 290.204 8.80153 295.363 13.9603L537.071 255.669Z"
        animate={{
          fill: active ? "hsl(var(--primary))" : "rgba(255,255,255,0)",
          stroke: active ? "hsl(var(--primary))" : "rgba(255,255,255,0.3)",
          strokeWidth: active ? 0 : 40
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    </svg>
  );
}

export function Model() {
  const { t } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Calculate percentage of progress based on columns (0.1 for first center, 0.9 for last center)
  const scrollTarget = useTransform(scrollYProgress, [0, 1], [0.1, 0.9]);

  // Custom motion value to handle both scroll and hover
  const progressValue = useMotionValue(0.1);
  const smoothProgress = useSpring(progressValue, {
    damping: 30,
    stiffness: 150,
    mass: 0.5
  });

  useEffect(() => {
    if (hoveredIndex !== null) {
      // Set to center of corresponding column: 10%, 30%, 50%, 70%, 90%
      progressValue.set(0.1 + (hoveredIndex * 0.2));
    } else {
      progressValue.set(scrollTarget.get());
    }
  }, [hoveredIndex, scrollTarget, progressValue]);

  // Ensure scroll updates the value if not hovering
  useEffect(() => {
    return scrollTarget.onChange((v) => {
      if (hoveredIndex === null) {
        progressValue.set(v);
      }
    });
  }, [scrollTarget, hoveredIndex, progressValue]);

  const steps = [
    { step: "I", title: t("model.step1.title"), desc: t("model.step1.desc") },
    { step: "D", title: t("model.step2.title"), desc: t("model.step2.desc") },
    { step: "E", title: t("model.step3.title"), desc: t("model.step3.desc") },
    { step: "A", title: t("model.step4.title"), desc: t("model.step4.desc") },
    { step: "L", title: t("model.step5.title"), desc: t("model.step5.desc") }
  ];

  return (
    <section id="model" className="py-20 md:py-40 px-6 md:px-12 bg-background text-white border-t border-white/10 relative overflow-hidden" ref={containerRef}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[400px] md:h-[600px] bg-primary/5 rounded-full blur-[100px] md:blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="mb-16 md:mb-32 text-center flex flex-col items-center">
          <h2 className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-semibold text-primary mb-6">{t("model.tag")}</h2>
          <h3 className="text-3xl md:text-6xl font-display font-light text-white max-w-3xl text-balance mb-6 md:mb-8">{t("model.method")}</h3>
          <p className="text-white/60 max-w-xl font-sans text-base md:text-lg italic font-serif">
            {t("model.subtitle")}
          </p>
        </div>

        <div className="relative">
          {/* Progress Line Wrapper with precise transparent gaps centered at each column (10%, 30%, 50%, 70%, 90%) */}
          <div
            className="absolute top-8 left-0 w-full h-[2px] hidden md:block overflow-visible"
            style={{
              maskImage: `linear-gradient(to right, 
                white 0%, white 8%, transparent 8%, transparent 12%, 
                white 12%, white 28%, transparent 28%, transparent 32%, 
                white 32%, white 48%, transparent 48%, transparent 52%, 
                white 52%, white 68%, transparent 68%, transparent 72%, 
                white 72%, white 88%, transparent 88%, transparent 92%, 
                white 92%, white 100%)`,
              WebkitMaskImage: `linear-gradient(to right, 
                white 0%, white 8%, transparent 8%, transparent 12%, 
                white 12%, white 28%, transparent 28%, transparent 32%, 
                white 32%, white 48%, transparent 48%, transparent 52%, 
                white 52%, white 68%, transparent 68%, transparent 72%, 
                white 72%, white 88%, transparent 88%, transparent 92%, 
                white 92%, white 100%)`
            }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-[1px] bg-white/10" />
            <motion.div
              style={{ scaleX: smoothProgress, transformOrigin: "left" }}
              className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-[2px] bg-primary z-0 shadow-[0_0_10px_rgba(var(--primary-rgb),0.3)]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-0 relative z-10">
            {steps.map((step, i) => {
              const columnCenter = 0.1 + (i * 0.2);
              // Active if either hovered OR progress is past this dot's center
              const isActive = hoveredIndex === i || smoothProgress.get() >= (columnCenter - 0.01);

              return (
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
                  <div className="hidden md:flex absolute top-8 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center z-20 w-8 h-8 pointer-events-none">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <LogoIcon active={isActive} />
                    </div>
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
                        animate={{
                          color: hoveredIndex === i || isActive || (typeof window !== 'undefined' && window.innerWidth < 768)
                            ? "hsl(var(--primary))"
                            : "rgba(255,255,255,0.2)"
                        }}
                        transition={{ duration: 0.3 }}
                        className="text-4xl md:text-6xl font-display font-light block"
                      >
                        {step.step}
                      </motion.span>
                      <motion.div
                        animate={{
                          opacity: hoveredIndex === i || (typeof window !== 'undefined' && window.innerWidth < 768) ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 blur-xl bg-primary/30 pointer-events-none"
                      />
                    </div>
                    <h4 className={`text-lg md:text-xl font-medium mb-3 md:mb-4 leading-tight transition-colors duration-500 ${hoveredIndex === i ? 'text-white' : 'text-white/80'}`}>{step.title}</h4>
                    <p className={`font-sans text-xs md:text-sm leading-relaxed transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${hoveredIndex === i ? 'text-white/70' : 'text-white/40'}`}>{step.desc}</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
