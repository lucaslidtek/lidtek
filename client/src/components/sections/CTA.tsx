import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { ArrowRight } from "lucide-react";

export function CTA() {
  const { t } = useLanguage();
  const whatsappUrl = "https://wa.me/553496840966?text=Olá Rafael, gostaria de entender melhor como a Lidtek pode atuar como nosso departamento de tecnologia.";

  return (
    <section id="contact" className="py-40 px-6 md:px-12 bg-background text-foreground relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute left-0 top-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,rgba(var(--primary),0.05),transparent_40%)]" />
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-primary opacity-[0.03] blur-[150px] rounded-full translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 border border-white/[0.08] bg-white/[0.04] backdrop-blur-md rounded-full mb-12"
          >
            <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-foreground/40">{t("cta.tag")}</h2>
          </motion.div>

          <h3 className="text-5xl md:text-7xl lg:text-8xl font-display font-light tracking-tighter text-foreground mb-16 max-w-4xl text-balance leading-[0.9]">
            {t("cta.title")}
          </h3>
          
          <motion.a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-10 py-5 bg-foreground text-background overflow-hidden rounded-full flex items-center gap-4 transition-all duration-500 shadow-2xl hover:shadow-primary/20"
          >
            <span className="relative z-10 font-bold uppercase tracking-[0.2em] text-xs">{t("cta.btn")}</span>
            <div className="relative z-10 w-8 h-8 rounded-full bg-background/10 flex items-center justify-center group-hover:translate-x-1 transition-transform duration-500">
              <ArrowRight className="w-4 h-4 text-background" />
            </div>
            <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] z-0" />
          </motion.a>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.4 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-xs uppercase tracking-[0.3em] font-medium"
          >
            Conversa segura e confidencial
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
