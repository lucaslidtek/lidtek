import { motion } from "framer-motion";
import { ArrowRight } from "phosphor-react";
import { useLanguage } from "@/hooks/use-language";

export function CTA() {
  const { t } = useLanguage();
  const whatsappUrl = "https://wa.me/553496840966?text=Olá Rafael, gostaria de entender melhor como a Lidtek pode atuar como nosso departamento de tecnologia.";

  return (
    <section id="contact" className="pt-24 md:pt-32 pb-12 px-6 md:px-12 bg-[#050505] text-white relative overflow-hidden border-t border-white/5">
      {/* Background de Alta Performance - Engenharia Visual */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid Refinado com Perspectiva */}
        <div 
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '4rem 4rem',
            maskImage: 'radial-gradient(circle at 50% 50%, black, transparent 80%)'
          }}
        />
        
        {/* Feixes de Luz Cinéticos (Linhas que cruzam a tela) */}
        <motion.div 
          animate={{ 
            x: ['-100%', '100%'],
            opacity: [0, 1, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent rotate-[-5deg]"
        />
        <motion.div 
          animate={{ 
            x: ['100%', '-100%'],
            opacity: [0, 0.8, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute bottom-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-[3deg]"
        />

        {/* Orbes de Profundidade */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-20%] left-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"
          />
          <motion.div 
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[-20%] right-[10%] w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[140px]"
          />
        </div>
      </div>

      {/* Moldura Técnica */}
      <div className="absolute top-8 left-8 bottom-8 right-8 border border-white/[0.03] pointer-events-none rounded-sm" />
      <div className="absolute top-8 left-8 w-4 h-4 border-t border-l border-primary/40 pointer-events-none" />
      <div className="absolute bottom-8 right-8 w-4 h-4 border-b border-r border-primary/40 pointer-events-none" />

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
