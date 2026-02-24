import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle } from "phosphor-react";
import { useRef } from "react";

const LogoIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 1080 942" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M542.929 686.185C539.727 682.983 534.533 682.988 531.337 686.197L279.092 939.425C273.938 944.6 265.101 940.949 265.101 933.646L265.101 784.028C265.101 781.808 266.003 779.683 267.6 778.14L501.471 552.119C506.766 547.002 502.802 539.317 495.439 539.317L7.84729 539.317C3.32465 539.317 3.01622e-05 534.375 3.03599e-05 529.853L4.07268e-05 411.269C4.09244e-05 406.747 4.2138 402.533 8.73645 402.533L419.472 402.533C421.644 402.533 423.179 403.943 424.715 405.479L796.218 776.983C797.754 778.519 798.617 780.602 798.617 782.774L798.617 922.104C798.617 929.399 789.796 933.053 784.637 927.894L542.929 686.185Z" fill="currentColor"/>
    <path d="M537.071 255.669C540.273 258.871 545.467 258.866 548.663 255.658L800.908 2.42914C806.062 -2.7451 814.899 0.905115 814.899 8.20842L814.899 157.826C814.899 160.046 813.997 162.172 812.4 163.715L578.529 389.735C573.234 394.852 577.198 402.538 584.561 402.538L1072.15 402.538C1076.68 402.538 1080 407.479 1080 412.002L1080 530.585C1080 535.108 1075.79 539.321 1071.26 539.321L660.528 539.321C658.356 539.321 656.821 537.911 655.285 536.376L283.782 164.871C282.246 163.335 281.384 161.253 281.384 159.081L281.384 19.7508C281.384 12.4552 290.204 8.80153 295.363 13.9603L537.071 255.669Z" fill="currentColor"/>
  </svg>
);

export function Operations() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 15]);

  const indicators = [
    { title: "SLAs definidos e formalizados em contrato", value: "Controle" },
    { title: "Roadmap contínuo com priorização clara", value: "Processo" },
    { title: "Indicadores de performance acompanhados mensalmente", value: "Clareza" },
    { title: "Processos auditáveis e governança documentada", value: "Auditoria" }
  ];

  return (
    <section ref={ref} className="py-32 px-6 md:px-12 bg-[#F8F9FA] text-black border-t border-black/10 relative overflow-hidden">
      {/* Dynamic Background Elements for Liquid Glass Visibility */}
      <div className="absolute top-1/2 right-[-15%] w-[900px] h-[900px] bg-primary/[0.12] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-30%] left-[5%] w-[800px] h-[800px] bg-accent/[0.1] rounded-full blur-[120px] pointer-events-none animate-pulse" />
      
      {/* Additional mobile-specific floating elements to enhance glass refraction */}
      <div className="absolute top-[20%] left-[10%] w-[150px] h-[150px] bg-primary/20 rounded-full blur-[40px] md:hidden animate-bounce" style={{ animationDuration: '10s' }} />
      <div className="absolute bottom-[20%] right-[10%] w-[200px] h-[200px] bg-accent/15 rounded-full blur-[50px] md:hidden animate-pulse" style={{ animationDuration: '7s' }} />
      <div className="absolute top-[50%] left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/10 to-transparent md:hidden" />
      
      {/* Logo Icon as background element for Liquid Glass effect */}
      <motion.div 
        style={{ y: y1, rotate }}
        className="absolute top-0 right-[-5%] w-[700px] h-[700px] text-primary/8 pointer-events-none z-0 opacity-40 md:opacity-100"
      >
        <LogoIcon className="w-full h-full" />
      </motion.div>
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-primary mb-8 flex items-center gap-3">
            <div className="w-8 h-[1px] bg-primary/40" />
            Governança & Estrutura
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-light leading-tight mb-8">
            Maturidade operacional embutida no processo.
          </h3>
          <p className="text-xl text-black/60 font-sans leading-relaxed">
            Não entregamos apenas código. Entregamos um departamento de tecnologia estruturado, com governança clara e processos auditáveis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
          {indicators.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ 
                duration: typeof window !== 'undefined' && window.innerWidth < 768 ? 0.4 : 0.6, 
                ease: [0.16, 1, 0.3, 1], 
                delay: typeof window !== 'undefined' && window.innerWidth < 768 ? i * 0.05 : i * 0.1 
              }}
              className="group p-6 md:p-8 bg-white/40 backdrop-blur-[32px] saturate-[180%] border border-white/40 rounded-2xl relative transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
            >
              {/* Focal light spot under the card */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-accent/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <CheckCircle size={24} weight="fill" className="text-primary/60 group-hover:text-primary group-hover:scale-110 transition-all duration-500 mb-6 relative z-10" />
              <div className="text-3xl font-display font-light mb-2 text-black transition-colors duration-500 relative z-10">{item.value}</div>
              <div className="text-sm font-medium text-black/60 group-hover:text-black/80 transition-colors duration-500 relative z-10">{item.title}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
