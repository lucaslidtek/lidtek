import { motion } from "framer-motion";
import { ArrowRight } from "phosphor-react";
import { useLanguage } from "@/hooks/use-language";

export function CTA() {
  const { t } = useLanguage();
  const whatsappUrl = "https://wa.me/553496840966?text=Olá Rafael, gostaria de entender melhor como a Lidtek pode atuar como nosso departamento de tecnologia.";

  return (
    <section id="contact" className="py-40 px-6 md:px-12 bg-white text-black relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/2 h-full bg-black/[0.02] pointer-events-none -skew-x-12 translate-x-20" />
      
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-black/40 mb-8">{t("cta.tag")}</h2>
          <h3 className="text-5xl md:text-7xl lg:text-8xl font-display font-light tracking-tight text-black mb-12 max-w-4xl">
            {t("cta.title")}
          </h3>
          
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-black text-white overflow-hidden rounded-sm flex items-center gap-4 hover:pr-6 transition-all duration-300"
          >
            <span className="relative z-10 font-medium uppercase tracking-widest text-sm">{t("cta.btn")}</span>
            <ArrowRight size={16} className="relative z-10 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" weight="bold" />
            <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
