import { motion } from "framer-motion";
import { ArrowRight } from "phosphor-react";
import { useLanguage } from "@/hooks/use-language";

export function CTA() {
  const { t } = useLanguage();
  const whatsappUrl = "https://wa.me/553496840966?text=Olá Rafael, gostaria de entender melhor como a Lidtek pode atuar como nosso departamento de tecnologia.";

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 bg-background text-white relative overflow-hidden border-t border-white/5">
      {/* Background animado estrutural - Grid mais denso e técnico */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <motion.div 
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full -translate-y-1/2 scale-150"
        />
      </div>

      {/* Linhas técnicas de fechamento */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-8 bg-primary/50" />
            <h2 className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold text-primary/80">{t("cta.tag")}</h2>
            <div className="h-[1px] w-8 bg-primary/50" />
          </div>

          <h3 className="text-4xl md:text-6xl lg:text-7xl font-display font-light tracking-tight text-white mb-10 max-w-4xl leading-[1.1]">
            {t("cta.title")}
          </h3>
          
          <div className="relative group">
            {/* Efeito de profundidade no botão */}
            <div className="absolute -inset-4 bg-primary/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-12 py-5 bg-white text-black overflow-hidden rounded-full flex items-center gap-4 transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(var(--primary),0.3)]"
            >
              <span className="relative z-10 font-bold uppercase tracking-[0.15em] text-xs">{t("cta.btn")}</span>
              <ArrowRight size={18} className="relative z-10 transition-transform duration-500 group-hover:translate-x-1" weight="bold" />
              
              {/* Brilho técnico interno */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>
            
            <p className="mt-8 text-[10px] uppercase tracking-[0.2em] text-white/30 font-medium">Disponibilidade limitada para novos projetos</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
