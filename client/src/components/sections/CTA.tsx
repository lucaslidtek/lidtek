import { motion } from "framer-motion";
import { ArrowRight } from "phosphor-react";
import { useLanguage } from "@/hooks/use-language";

export function CTA() {
  const { t } = useLanguage();
  const whatsappUrl = "https://wa.me/553496840966?text=Olá Rafael, gostaria de entender melhor como a Lidtek pode atuar como nosso departamento de tecnologia.";

  return (
    <section id="contact" className="py-40 px-6 md:px-12 bg-background text-white relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/2 h-full bg-white/[0.02] pointer-events-none -skew-x-12 translate-x-20" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-white/40 mb-8">{t("cta.tag")}</h2>
          <h3 className="text-5xl md:text-7xl lg:text-8xl font-display font-light tracking-tight text-white mb-16 max-w-4xl">
            {t("cta.title")}
          </h3>
          
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-10 py-5 bg-white text-black overflow-hidden rounded-full flex items-center gap-4 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-500 hover:-translate-y-1 scale-100 hover:scale-105"
          >
            <span className="relative z-10 font-medium uppercase tracking-widest text-sm transition-colors group-hover:text-white">{t("cta.btn")}</span>
            <ArrowRight size={20} className="relative z-10 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-500 group-hover:text-white" weight="bold" />
            <div className="absolute inset-0 bg-primary scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-0" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
