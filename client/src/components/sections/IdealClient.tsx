import { motion } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export function IdealClient() {
  const { t } = useLanguage();

  const positiveCriteria = [
    "Crescem e precisam de direção tecnológica",
    "Querem previsibilidade, não improviso",
    "Enxergam tecnologia como estrutura estratégica",
    "Valorizam governança e maturidade operacional"
  ];

  const negativeCriteria = [
    "Buscam apenas um orçamento pontual",
    "Execução sem visão de longo prazo",
    "Tecnologia como custo, não investimento",
    "Processos sem documentação ou estratégia"
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-[#080808] border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02),transparent_70%)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest font-bold text-primary/80 font-sans">Perfil de Parceria</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-display font-light text-white mb-6 tracking-tight">
            Para quem é a <span className="text-primary font-medium italic">Lidtek?</span>
          </h2>
          <p className="text-white/40 text-lg font-light max-w-2xl mx-auto">
            Não somos uma fábrica de software comum. Somos o braço tecnológico de empresas que buscam maturidade e escala.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Ideal Profile */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group h-full"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-b from-primary/20 to-transparent rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000" />
            <div className="relative bg-white/5 backdrop-blur-[32px] saturate-[180%] border border-white/10 rounded-[2rem] p-8 md:p-10 h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-primary/10 rounded-2xl border border-primary/20">
                  <CheckCircle className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-display text-white">Perfil Ideal</h3>
                  <p className="text-white/40 text-xs uppercase tracking-widest mt-1">Pronto para o crescimento</p>
                </div>
              </div>
              
              <ul className="space-y-5">
                {positiveCriteria.map((item, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-4 items-start group/item"
                  >
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/40 group-hover/item:bg-primary transition-colors" />
                    <span className="text-white/70 text-sm md:text-base font-light leading-relaxed group-hover/item:text-white transition-colors">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Not the moment Profile */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group h-full"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-b from-white/5 to-transparent rounded-[2rem] blur opacity-10 group-hover:opacity-20 transition duration-1000" />
            <div className="relative bg-[#0c0c0c] border border-white/10 rounded-[2rem] p-8 md:p-10 h-full backdrop-blur-xl group-hover:border-white/20 transition-colors duration-500">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-white/5 rounded-2xl border border-white/10 group-hover:border-white/20 transition-colors">
                  <XCircle className="text-white/60" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-display text-white/90">Não somos o ideal se...</h3>
                  <p className="text-white/40 text-xs uppercase tracking-widest mt-1 font-sans">Foco diferente</p>
                </div>
              </div>
              
              <ul className="space-y-5">
                {negativeCriteria.map((item, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-4 items-start group/item"
                  >
                    <div className="mt-2 w-1 h-1 rounded-full bg-white/30 group-hover/item:bg-white/60 transition-colors" />
                    <span className="text-white/60 text-sm md:text-base font-light leading-relaxed group-hover/item:text-white/90 transition-colors">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-12 pt-8 border-t border-white/5 group-hover:border-white/10 transition-colors text-center">
                <p className="text-[11px] text-white/30 italic leading-relaxed group-hover:text-white/50 transition-colors inline-block relative px-4">
                  Preferimos ser transparentes agora do que entregar menos do que o seu negócio merece no futuro.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
