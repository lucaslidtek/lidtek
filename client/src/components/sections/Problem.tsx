import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { useRef } from "react";

const LogoIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 1080 942" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M542.929 686.185C539.727 682.983 534.533 682.988 531.337 686.197L279.092 939.425C273.938 944.6 265.101 940.949 265.101 933.646L265.101 784.028C265.101 781.808 266.003 779.683 267.6 778.14L501.471 552.119C506.766 547.002 502.802 539.317 495.439 539.317L7.84729 539.317C3.32465 539.317 3.01622e-05 534.375 3.03599e-05 529.853L4.07268e-05 411.269C4.09244e-05 406.747 4.2138 402.533 8.73645 402.533L419.472 402.533C421.644 402.533 423.179 403.943 424.715 405.479L796.218 776.983C797.754 778.519 798.617 780.602 798.617 782.774L798.617 922.104C798.617 929.399 789.796 933.053 784.637 927.894L542.929 686.185Z" fill="currentColor" />
    <path d="M537.071 255.669C540.273 258.871 545.467 258.866 548.663 255.658L800.908 2.42914C806.062 -2.74451 814.899 0.905115 814.899 8.20842L814.899 157.826C814.899 160.046 813.997 162.172 812.4 163.715L578.529 389.735C573.234 394.852 577.198 402.538 584.561 402.538L1072.15 402.538C1076.68 402.538 1080 407.479 1080 412.002L1080 530.585C1080 535.108 1075.79 539.321 1071.26 539.321L660.528 539.321C658.356 539.321 656.821 537.911 655.285 536.376L283.782 164.871C282.246 163.335 281.384 161.253 281.384 159.081L281.384 19.7508C281.384 12.4552 290.204 8.80153 295.363 13.9603L537.071 255.669Z" fill="currentColor" />
  </svg>
);

export function Problem() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
  };

  return (
    <section id="problem" className="relative bg-[#F8F9FA] border-t border-black/10 overflow-hidden py-16 md:py-32 lg:py-40">
      {/* Texture Layer - Settle grid dots */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      {/* Decorative Glows */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-primary/[0.08] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[5%] right-[-5%] w-[400px] h-[400px] bg-accent/[0.06] rounded-full blur-[120px] pointer-events-none" />

      {/* Mobile Watermark Icon - Exactly like Approach section style */}
      <div className="block lg:hidden absolute top-10 right-[-10%] w-[400px] h-[400px] text-primary/5 pointer-events-none z-0">
        <LogoIcon className="w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24 items-center"
        >
          {/* Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6 md:gap-8 relative z-10">
            <motion.div variants={itemVariants}>
              <h2 className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-primary mb-2 md:mb-4 flex items-center gap-3">
                <div className="w-8 h-[1px] bg-primary/40" />
                {t("problem.tag")}
              </h2>
            </motion.div>

            <motion.h3 
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-light tracking-tight text-black leading-[1.05]"
            >
              {t("problem.title")}
            </motion.h3>

            <motion.div variants={itemVariants} className="flex flex-col gap-4 md:gap-6 max-w-2xl">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-display font-light text-black/70 leading-relaxed">
                {t("problem.desc")}
              </p>
            </motion.div>
          </div>

          {/* Right Column: Liquid Glass Element (Desktop only) */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <motion.div
              variants={itemVariants}
              className="relative w-full aspect-square max-w-[450px] mx-auto"
            >
              {/* Floating Glass Panel with Hover effect */}
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotateZ: [0, 1, 0]
                }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 10,
                  transition: { duration: 0.4 }
                }}
                transition={{ 
                  y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                  rotateZ: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                }}
                className="w-full h-full relative cursor-pointer"
              >
                <div className="w-full h-full rounded-[2.5rem] bg-white/40 backdrop-blur-2xl border border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden">
                  {/* Subtle internal glows */}
                  <div className="absolute top-[-20%] right-[-20%] w-full h-full bg-primary/10 rounded-full blur-[60px]" />
                  <div className="absolute bottom-[-20%] left-[-20%] w-full h-full bg-accent/10 rounded-full blur-[60px]" />
                  
                  {/* Icon centered in glass */}
                  <div className="absolute inset-0 flex items-center justify-center p-16">
                    <LogoIcon className="w-full h-full text-primary drop-shadow-[0_10px_20px_rgba(0,0,0,0.1)]" />
                  </div>
                </div>

                {/* Outer decorative rings */}
                <div className="absolute inset-[-20px] rounded-[3.5rem] border border-black/[0.03] pointer-events-none" />
                <div className="absolute inset-[-40px] rounded-[4.5rem] border border-black/[0.01] pointer-events-none" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
