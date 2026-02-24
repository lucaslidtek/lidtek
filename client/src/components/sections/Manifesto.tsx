import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";

export function Manifesto() {
  const { t } = useLanguage();

  return (
    <section id="manifesto" className="py-32 px-6 md:px-12 bg-white text-black min-h-screen flex items-center relative">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
        <div className="lg:col-span-4">
          <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-black/40 mb-4">{t("manifesto.tag")}</h2>
          <div className="w-12 h-[1px] bg-black" />
        </div>
        
        <div className="lg:col-span-8 flex flex-col gap-12">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-display font-light leading-[1.3] text-black/90 text-balance"
          >
            {t("manifesto.main")}<span className="font-semibold">{t("manifesto.main_bold")}</span>.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <h3 className="text-xl font-medium mb-4">{t("manifesto.precision.title")}</h3>
              <p className="text-black/60 leading-relaxed font-sans">
                {t("manifesto.precision.desc")}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              <h3 className="text-xl font-medium mb-4">{t("manifesto.silent.title")}</h3>
              <p className="text-black/60 leading-relaxed font-sans">
                {t("manifesto.silent.desc")}
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-24 pt-12 border-t border-black/5 flex justify-center"
          >
            <p className="text-4xl md:text-6xl font-display font-light text-black/20 italic text-center">
              "{t("manifesto.section_quote")}"
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
