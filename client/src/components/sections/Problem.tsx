import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { useRef } from "react";

const LogoIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 1080 942" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M542.929 686.185C539.727 682.983 534.533 682.988 531.337 686.197L279.092 939.425C273.938 944.6 265.101 940.949 265.101 933.646L265.101 784.028C265.101 781.808 266.003 779.683 267.6 778.14L501.471 552.119C506.766 547.002 502.802 539.317 495.439 539.317L7.84729 539.317C3.32465 539.317 3.01622e-05 534.375 3.03599e-05 529.853L4.07268e-05 411.269C4.09244e-05 406.747 4.2138 402.533 8.73645 402.533L419.472 402.533C421.644 402.533 423.179 403.943 424.715 405.479L796.218 776.983C797.754 778.519 798.617 780.602 798.617 782.774L798.617 922.104C798.617 929.399 789.796 933.053 784.637 927.894L542.929 686.185Z" fill="currentColor"/>
    <path d="M537.071 255.669C540.273 258.871 545.467 258.866 548.663 255.658L800.908 2.42914C806.062 -2.7451 814.899 0.905115 814.899 8.20842L814.899 157.826C814.899 160.046 813.997 162.172 812.4 163.715L578.529 389.735C573.234 394.852 577.198 402.538 584.561 402.538L1072.15 402.538C1076.68 402.538 1080 407.479 1080 412.002L1080 530.585C1080 535.108 1075.79 539.321 1071.26 539.321L660.528 539.321C658.356 539.321 656.821 537.911 655.285 536.376L283.782 164.871C282.246 163.335 281.384 161.253 281.384 159.081L281.384 19.7508C281.384 12.4552 290.204 8.80153 295.363 13.9603L537.071 255.669Z" fill="currentColor"/>
  </svg>
);

export function Problem() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);

  return (
    <section id="problem" ref={ref} className="py-32 px-6 md:px-12 bg-[#F8F9FA] text-black relative border-t border-black/10 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-[-15%] right-[-10%] w-[800px] h-[800px] bg-primary/[0.15] rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[-15%] w-[700px] h-[700px] bg-black/[0.08] rounded-full blur-[100px] pointer-events-none" />
      
      {/* Logo Icon as background element for Liquid Glass effect */}
      <motion.div 
        style={{ y: y1, rotate }}
        className="absolute top-1/4 right-[5%] w-[600px] h-[600px] text-primary/5 pointer-events-none z-0"
      >
        <LogoIcon className="w-full h-full" />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="absolute bottom-1/4 left-[-5%] w-[500px] h-[500px] text-black/[0.03] pointer-events-none z-0"
      >
        <LogoIcon className="w-full h-full rotate-[-15deg]" />
      </motion.div>
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-primary mb-8 flex items-center gap-3">
            <div className="w-8 h-[1px] bg-primary/40" />
            {t("problem.tag")}
          </h2>
          <h3 className="text-4xl md:text-6xl font-display font-light leading-tight mb-8 text-balance">
            {t("problem.title")}<span className="italic font-serif text-black/50">{t("problem.title_italic")}</span>{t("problem.title_end")}
          </h3>
          <p className="text-xl text-black/60 font-sans leading-relaxed text-balance">
            {t("problem.desc")}
          </p>
        </motion.div>
        
        <motion.div style={{ y: y1 }} className="space-y-6 relative">
          {/* Linha lateral conectando (progressão) */}
          <div className="absolute left-4 top-8 bottom-8 w-[1px] bg-gradient-to-b from-transparent via-black/10 to-transparent hidden md:block" />
          
          {[
            { title: t("problem.debt.title"), desc: t("problem.debt.desc") },
            { title: t("problem.generic.title"), desc: t("problem.generic.desc") },
            { title: t("problem.scale.title"), desc: t("problem.scale.desc") },
            { title: t("problem.solution.title"), desc: t("problem.solution.desc"), highlight: true }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              className={`group relative p-8 flex flex-col gap-2 liquid-glass liquid-glass-interactive rounded-2xl md:ml-12 ${item.highlight ? 'ring-2 ring-primary/40 bg-primary/20 shadow-[0_12px_48px_rgba(101,128,225,0.25)]' : 'shadow-lg border-white/40'}`}
            >
              {/* Focal light spot under the item */}
              <div className="absolute -bottom-2 left-10 w-32 h-6 bg-primary/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="absolute inset-0 border border-black/0 rounded-2xl opacity-0 group-hover:opacity-100 group-hover:border-black/5 transition-all duration-500 pointer-events-none" />
              {/* Ponto na linha */}
              <div className="absolute -left-[3.25rem] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-black/10 group-hover:bg-primary transition-colors duration-500 hidden md:block" />
              
              <h4 className={`text-lg font-medium tracking-wide relative z-10 ${item.highlight ? 'text-primary' : 'text-black'}`}>{item.title}</h4>
              <p className="text-sm text-black/60 font-sans relative z-10">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
