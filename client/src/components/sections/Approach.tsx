import { motion, useScroll, useTransform } from "framer-motion";
import { Code, Database, Shield, Cpu } from "phosphor-react";
import { useLanguage } from "@/hooks/use-language";
import { useRef } from "react";

const LogoIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 1080 942" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M542.929 686.185C539.727 682.983 534.533 682.988 531.337 686.197L279.092 939.425C273.938 944.6 265.101 940.949 265.101 933.646L265.101 784.028C265.101 781.808 266.003 779.683 267.6 778.14L501.471 552.119C506.766 547.002 502.802 539.317 495.439 539.317L7.84729 539.317C3.32465 539.317 3.01622e-05 534.375 3.03599e-05 529.853L4.07268e-05 411.269C4.09244e-05 406.747 4.2138 402.533 8.73645 402.533L419.472 402.533C421.644 402.533 423.179 403.943 424.715 405.479L796.218 776.983C797.754 778.519 798.617 780.602 798.617 782.774L798.617 922.104C798.617 929.399 789.796 933.053 784.637 927.894L542.929 686.185Z" fill="currentColor"/>
    <path d="M537.071 255.669C540.273 258.871 545.467 258.866 548.663 255.658L800.908 2.42914C806.062 -2.7451 814.899 0.905115 814.899 8.20842L814.899 157.826C814.899 160.046 813.997 162.172 812.4 163.715L578.529 389.735C573.234 394.852 577.198 402.538 584.561 402.538L1072.15 402.538C1076.68 402.538 1080 407.479 1080 412.002L1080 530.585C1080 535.108 1075.79 539.321 1071.26 539.321L660.528 539.321C658.356 539.321 656.821 537.911 655.285 536.376L283.782 164.871C282.246 163.335 281.384 161.253 281.384 159.081L281.384 19.7508C281.384 12.4552 290.204 8.80153 295.363 13.9603L537.071 255.669Z" fill="currentColor"/>
  </svg>
);

export function Approach() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [10, -10]);

  const features = [
    {
      icon: <Code size={32} weight="light" />,
      title: t("approach.code.title"),
      description: t("approach.code.desc")
    },
    {
      icon: <Database size={32} weight="light" />,
      title: t("approach.data.title"),
      description: t("approach.data.desc")
    },
    {
      icon: <Shield size={32} weight="light" />,
      title: t("approach.security.title"),
      description: t("approach.security.desc")
    },
    {
      icon: <Cpu size={32} weight="light" />,
      title: t("approach.perf.title"),
      description: t("approach.perf.desc")
    }
  ];

  return (
    <section id="approach" ref={ref} className="py-32 px-6 md:px-12 bg-[#F8F9FA] text-black relative border-t border-black/10 overflow-hidden">
      {/* Liquid Glass Background Elements */}
      <div className="absolute top-[-5%] right-[-5%] w-[800px] h-[800px] bg-primary/[0.15] rounded-full blur-[100px] pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-[-15%] left-[-10%] w-[700px] h-[700px] bg-accent/[0.12] rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: '12s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(101,128,225,0.08),transparent_50%)] pointer-events-none" />
      
      {/* Logo Icon as background element for Liquid Glass effect */}
      <motion.div 
        style={{ y: y1, rotate }}
        className="absolute top-1/4 left-[-10%] w-[600px] h-[600px] text-primary/5 pointer-events-none z-0"
      >
        <LogoIcon className="w-full h-full" />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="absolute bottom-0 right-[5%] w-[500px] h-[500px] text-black/[0.03] pointer-events-none z-0"
      >
        <LogoIcon className="w-full h-full rotate-[15deg]" />
      </motion.div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="relative">
            <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-primary mb-4 flex items-center gap-3">
              <div className="w-8 h-[1px] bg-primary/40" />
              {t("approach.tag")}
            </h2>
            <h3 className="text-4xl md:text-6xl font-display font-light text-black max-w-2xl text-balance relative z-10">
              {t("approach.title")}
            </h3>
          </div>
          <p className="text-black/60 max-w-md font-sans text-lg">
            {t("approach.desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {features.map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ 
                duration: typeof window !== 'undefined' && window.innerWidth < 768 ? 0.4 : 0.8, 
                ease: [0.16, 1, 0.3, 1], 
                delay: typeof window !== 'undefined' && window.innerWidth < 768 ? i * 0.05 : i * 0.1 
              }}
              className="p-8 md:p-10 liquid-glass liquid-glass-interactive group rounded-[1.5rem] md:rounded-[2rem] relative"
            >
              {/* Focal light spot under the card */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="absolute top-0 left-0 w-full h-[2px] bg-primary/0 group-hover:bg-primary transition-colors duration-500 z-10" />
              <div className="text-primary md:text-black/30 md:group-hover:text-primary transition-colors duration-500 mb-8 relative z-10">{feature.icon}</div>
              <h4 className="text-xl font-medium text-black mb-4 relative z-10">{feature.title}</h4>
              <p className="text-black/60 text-sm leading-relaxed font-sans relative z-10">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
