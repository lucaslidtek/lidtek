import { motion } from "framer-motion";

export function Manifesto() {
  return (
    <section id="manifesto" className="py-32 px-6 md:px-12 bg-white text-black min-h-screen flex items-center relative">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
        <div className="lg:col-span-4">
          <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-black/40 mb-4">The Manifesto</h2>
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
            We are not a software house. We are not an agency. We are your dedicated <span className="font-semibold">Technology Department</span>.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <h3 className="text-xl font-medium mb-4">Precision over speed</h3>
              <p className="text-black/60 leading-relaxed font-sans">
                While others rush to build fragile MVPs, we construct robust architectural foundations designed for scale, security, and market dominance.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              <h3 className="text-xl font-medium mb-4">Silent dominance</h3>
              <p className="text-black/60 leading-relaxed font-sans">
                Our technology operates invisibly yet powerfully behind the scenes, elevating your brand without drawing attention to the machinery.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
