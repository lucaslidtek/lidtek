import { motion } from "framer-motion";
import { Code, Database, Shield, Cpu, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export function Approach() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Code size={32} strokeWidth={1} />,
      title: t("approach.code.title"),
      description: t("approach.code.desc")
    },
    {
      icon: <Database size={32} strokeWidth={1} />,
      title: t("approach.data.title"),
      description: t("approach.data.desc")
    },
    {
      icon: <Shield size={32} strokeWidth={1} />,
      title: t("approach.security.title"),
      description: t("approach.security.desc")
    },
    {
      icon: <Cpu size={32} strokeWidth={1} />,
      title: t("approach.perf.title"),
      description: t("approach.perf.desc")
    }
  ];

  return (
    <section id="approach" className="py-40 px-6 md:px-12 bg-[#050505] relative border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-32 flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-white/20 mb-8">{t("approach.tag")}</h2>
            <h3 className="text-5xl md:text-8xl font-display font-light text-white max-w-3xl text-balance tracking-tighter leading-[0.85]">
              {t("approach.title")}
            </h3>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-white/20 max-w-md font-sans text-lg leading-relaxed lg:mb-4"
          >
            {t("approach.desc")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.05] border border-white/[0.05] rounded-sm overflow-hidden">
          {features.map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="p-16 bg-[#050505] hover:bg-white/[0.02] transition-all duration-700 group relative"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="text-primary group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-700 ease-out">
                  {feature.icon}
                </div>
                <ArrowUpRight className="w-5 h-5 text-white/10 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
              </div>
              <h4 className="text-3xl font-bold text-white mb-6 tracking-tight">{feature.title}</h4>
              <p className="text-white/30 text-lg leading-relaxed font-sans group-hover:text-white/50 transition-colors max-w-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
