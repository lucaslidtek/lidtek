import { motion } from "framer-motion";
import { CheckCircle, Info } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export function IdealClient() {
  const { t } = useLanguage();

  const criteria = [
    "Crescem e precisam de direção tecnológica",
    "Querem previsibilidade, não improviso",
    "Enxergam tecnologia como estrutura estratégica",
    "Valorizam governança e maturidade operacional"
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-[#080808] border-y border-white/5 relative overflow-hidden">
      {/* Subtle Background Detail */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02),transparent_70%)] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] uppercase tracking-widest font-bold text-primary/80">Filtro de Parceria</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-display font-light text-white mb-6 leading-tight">
              A Lidtek é para empresas que buscam <span className="text-primary font-medium italic">maturidade.</span>
            </h2>
            
            <p className="text-white/50 text-sm md:text-base leading-relaxed mb-8 max-w-md">
              Não somos uma fábrica de software comum. Somos o braço tecnológico de empresas que entenderam que tecnologia é o alicerce do crescimento.
            </p>

            <div className="relative pl-6 max-w-md group">
              <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/10 group-hover:bg-primary/50 transition-colors duration-500" />
              <p className="text-xs md:text-sm text-white/30 leading-relaxed font-light group-hover:text-white/50 transition-colors duration-500">
                Se você busca apenas um orçamento pontual ou execução sem estratégia, provavelmente não somos o modelo ideal para o seu momento.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm shadow-2xl"
          >
            <h3 className="text-white font-medium mb-8 text-lg">Perfil Ideal</h3>
            <ul className="space-y-6">
              {criteria.map((item, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + 0.3 }}
                  className="flex gap-4 items-start"
                >
                  <div className="mt-1 bg-primary/20 p-1 rounded-full">
                    <CheckCircle className="text-primary" size={16} weight="fill" />
                  </div>
                  <span className="text-white/80 text-sm md:text-base font-light leading-snug">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
