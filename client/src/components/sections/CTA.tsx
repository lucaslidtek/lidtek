import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { ArrowRight } from "lucide-react";

export function CTA() {
  const { t } = useLanguage();
  const whatsappUrl = "https://wa.me/553496840966?text=Olá Rafael, gostaria de entender melhor como a Lidtek pode atuar como nosso departamento de tecnologia.";

  return (
    <section id="contact" className="py-60 px-6 md:px-12 bg-white text-black relative overflow-hidden">
      {/* High-end Minimal Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/[0.02] to-transparent" />
      </div>
      
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="px-6 py-2 border border-black/[0.05] bg-black/[0.02] rounded-full mb-16"
          >
            <h2 className="text-[10px] uppercase tracking-[0.6em] font-black text-black/30">{t("cta.tag")}</h2>
          </motion.div>

          <h3 className="text-6xl md:text-8xl lg:text-[9rem] font-display font-light tracking-tighter text-black mb-24 max-w-6xl text-balance leading-[0.8] mix-blend-multiply">
            {t("cta.title")}
          </h3>
          
          <motion.a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-16 py-8 bg-black text-white overflow-hidden rounded-full flex items-center gap-6 transition-all duration-700 shadow-2xl hover:shadow-black/20"
          >
            <span className="relative z-10 font-bold uppercase tracking-[0.4em] text-xs">{t("cta.btn")}</span>
            <div className="relative z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-2 transition-transform duration-700 ease-out">
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
            <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1] z-0" />
          </motion.a>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.2 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="mt-20 flex items-center gap-4 text-[10px] uppercase tracking-[0.5em] font-bold"
          >
            <div className="w-12 h-px bg-black" />
            <span>Operational Maturity</span>
            <div className="w-12 h-px bg-black" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
