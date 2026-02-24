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
    <section id="approach" className="py-32 px-6 md:px-12 bg-[#F8F9FA] text-black relative border-t border-black/10 overflow-hidden">
      {/* Liquid Glass Background Elements */}
      <div className="absolute top-[-5%] right-[-5%] w-[800px] h-[800px] bg-primary/[0.15] rounded-full blur-[100px] pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-[-15%] left-[-10%] w-[700px] h-[700px] bg-accent/[0.12] rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: '12s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(101,128,225,0.08),transparent_50%)] pointer-events-none" />
      
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              className="p-10 liquid-glass liquid-glass-interactive group rounded-[2rem] relative"
            >
              {/* Focal light spot under the card */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="absolute top-0 left-0 w-full h-[2px] bg-primary/0 group-hover:bg-primary transition-colors duration-500 z-10" />
              <div className="text-black/30 group-hover:text-primary transition-colors duration-500 mb-8 relative z-10">{feature.icon}</div>
              <h4 className="text-xl font-medium text-black mb-4 relative z-10">{feature.title}</h4>
              <p className="text-black/60 text-sm leading-relaxed font-sans relative z-10">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
