import { motion } from "framer-motion";
import { Code, Database, Shield, Cpu } from "phosphor-react";
import { useLanguage } from "@/hooks/use-language";

export function Approach() {
  const { t } = useLanguage();

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
    <section id="approach" className="py-32 px-6 md:px-12 bg-white text-black relative border-t border-black/10 overflow-hidden">
      {/* Light subtle radial gradient - Luz sutil direcionando leitura */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[800px] h-[800px] bg-black/[0.02] rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="relative">
            <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-black/40 mb-4 flex items-center gap-3">
              <div className="w-8 h-[1px] bg-black/20" />
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              className="p-10 border border-black/[0.04] bg-white hover:bg-black/[0.02] transition-all duration-500 group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-primary/0 group-hover:bg-primary transition-colors duration-500" />
              <div className="text-black/30 group-hover:text-primary transition-colors duration-500 mb-8">{feature.icon}</div>
              <h4 className="text-xl font-medium text-black mb-4">{feature.title}</h4>
              <p className="text-black/60 text-sm leading-relaxed font-sans">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
