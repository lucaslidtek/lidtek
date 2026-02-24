import { motion } from "framer-motion";
import { Code, Database, Shield, Cpu } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export function Approach() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Code size={24} />,
      title: t("approach.code.title"),
      description: t("approach.code.desc")
    },
    {
      icon: <Database size={24} />,
      title: t("approach.data.title"),
      description: t("approach.data.desc")
    },
    {
      icon: <Shield size={24} />,
      title: t("approach.security.title"),
      description: t("approach.security.desc")
    },
    {
      icon: <Cpu size={24} />,
      title: t("approach.perf.title"),
      description: t("approach.perf.desc")
    }
  ];

  return (
    <section id="approach" className="py-32 px-6 md:px-12 bg-background relative border-t border-white/[0.05]">
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none mix-blend-overlay" />
      
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/30 mb-4">{t("approach.tag")}</h2>
            <h3 className="text-4xl md:text-6xl font-display font-light text-white max-w-2xl text-balance tracking-tighter leading-tight">
              {t("approach.title")}
            </h3>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/40 max-w-md font-sans text-sm leading-relaxed"
          >
            {t("approach.desc")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="p-10 border border-white/[0.08] bg-[rgba(255,255,255,0.02)] backdrop-blur-xl hover:bg-[rgba(255,255,255,0.05)] hover:border-white/20 transition-all duration-500 group relative overflow-hidden rounded-sm"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="text-primary mb-8 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">{feature.icon}</div>
              <h4 className="text-lg font-bold text-white mb-4 tracking-tight">{feature.title}</h4>
              <p className="text-white/30 text-xs leading-relaxed font-sans group-hover:text-white/50 transition-colors">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
