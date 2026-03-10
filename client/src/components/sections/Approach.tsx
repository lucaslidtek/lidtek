import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2, Users, LayoutTemplate } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { useRef } from "react";

const LogoIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 1080 942" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M542.929 686.185C539.727 682.983 534.533 682.988 531.337 686.197L279.092 939.425C273.938 944.6 265.101 940.949 265.101 933.646L265.101 784.028C265.101 781.808 266.003 779.683 267.6 778.14L501.471 552.119C506.766 547.002 502.802 539.317 495.439 539.317L7.84729 539.317C3.32465 539.317 3.01622e-05 534.375 3.03599e-05 529.853L4.07268e-05 411.269C4.09244e-05 406.747 4.2138 402.533 8.73645 402.533L419.472 402.533C421.644 402.533 423.179 403.943 424.715 405.479L796.218 776.983C797.754 778.519 798.617 780.602 798.617 782.774L798.617 922.104C798.617 929.399 789.796 933.053 784.637 927.894L542.929 686.185Z" fill="currentColor" />
    <path d="M537.071 255.669C540.273 258.871 545.467 258.866 548.663 255.658L800.908 2.42914C806.062 -2.7451 814.899 0.905115 814.899 8.20842L814.899 157.826C814.899 160.046 813.997 162.172 812.4 163.715L578.529 389.735C573.234 394.852 577.198 402.538 584.561 402.538L1072.15 402.538C1076.68 402.538 1080 407.479 1080 412.002L1080 530.585C1080 535.108 1075.79 539.321 1071.26 539.321L660.528 539.321C658.356 539.321 656.821 537.911 655.285 536.376L283.782 164.871C282.246 163.335 281.384 161.253 281.384 159.081L281.384 19.7508C281.384 12.4552 290.204 8.80153 295.363 13.9603L537.071 255.669Z" fill="currentColor" />
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

  const whoItems = [
    t("approach.who.item1"),
    t("approach.who.item2"),
    t("approach.who.item3"),
    t("approach.who.item4"),
    t("approach.who.item5"),
  ];

  return (
    <section id="approach" ref={ref} className="py-24 md:py-32 px-6 md:px-12 bg-[#F8F9FA] text-black relative border-t border-black/10 overflow-hidden">
      {/* Liquid Glass Background Elements */}
      <div className="absolute top-[-5%] right-[-5%] w-[800px] h-[800px] bg-primary/[0.15] rounded-full blur-[100px] pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-[-15%] left-[-10%] w-[700px] h-[700px] bg-accent/[0.12] rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: '12s' }} />

      {/* Logo Icon as background element for Liquid Glass effect */}
      <motion.div
        style={{ y: y1, rotate }}
        className="absolute top-1/4 left-[-10%] w-[600px] h-[600px] text-primary/5 pointer-events-none z-0"
      >
        <LogoIcon className="w-full h-full" />
      </motion.div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <h2 className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-semibold text-primary mb-8 flex items-center gap-3">
          <div className="w-8 h-[1px] bg-primary/40" />
          {t("approach.what.title")}
        </h2>

        {/* Superior part: A Lidtek é para quem? */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-light text-black mb-10 tracking-tight">
            {t("approach.who.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            {whoItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-black/[0.02] transition-colors"
              >
                <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={24} />
                <span className="text-black/80 text-lg font-sans leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="w-full h-px bg-black/10 mb-20" />

        {/* Inferior part: Nossa Atuação */}
        <div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 bg-white/60 backdrop-blur-xl border border-white/40 rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform duration-500">
                <Users size={32} />
              </div>
              <h3 className="text-2xl font-medium text-black mb-4">{t("approach.what.item1.title")}</h3>
              <p className="text-black/60 text-lg leading-relaxed">{t("approach.what.item1.desc")}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 md:p-12 bg-white/60 backdrop-blur-xl border border-white/40 rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform duration-500">
                <LayoutTemplate size={32} />
              </div>
              <h3 className="text-2xl font-medium text-black mb-4">{t("approach.what.item2.title")}</h3>
              <p className="text-black/60 text-lg leading-relaxed">{t("approach.what.item2.desc")}</p>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
