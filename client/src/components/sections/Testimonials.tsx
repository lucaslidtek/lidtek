import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { Quote } from "lucide-react";

export function Testimonials() {
    const { t } = useLanguage();

    return (
        <section id="testimonials" className="py-24 md:py-32 px-6 md:px-12 bg-[#F8F9FA] relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none opacity-40" />

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="flex flex-col items-center text-center mb-16 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 mb-6"
                    >
                        <div className="w-8 h-[1px] bg-primary/40" />
                        <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-semibold text-primary">
                            {t("testimonials.tag")}
                        </span>
                        <div className="w-8 h-[1px] bg-primary/40" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-display font-light text-black tracking-tight text-balance max-w-3xl"
                    >
                        {t("testimonials.title")}
                    </motion.h2>
                </div>

                <div className="flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full max-w-4xl relative"
                    >
                        {/* The single featured testimonial card */}
                        <div className="relative p-8 md:p-16 rounded-[2.5rem] liquid-glass group overflow-hidden border-black/5">
                            {/* Animated top border */}
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            {/* Quote Icon */}
                            <div className="mb-8 md:mb-12">
                                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                                    <Quote className="w-6 h-6 md:w-8 md:h-8 fill-primary/20" />
                                </div>
                            </div>

                            <blockquote className="mb-10 md:mb-12">
                                <p className="text-xl md:text-2xl lg:text-3xl font-display font-light text-black/90 leading-tight md:leading-snug italic text-balance">
                                    "{t("testimonials.quote1.text")}"
                                </p>
                            </blockquote>

                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-10 border-t border-black/5">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center text-primary font-display text-xl">
                                        {t("testimonials.quote1.author").charAt(0)}
                                    </div>
                                    <div>
                                        <cite className="not-italic block text-lg font-medium text-black">
                                            {t("testimonials.quote1.author")}
                                        </cite>
                                        <span className="text-xs text-black/40 uppercase tracking-widest font-semibold">
                                            {t("testimonials.quote1.role")}
                                        </span>
                                    </div>
                                </div>

                                {/* Optional verified badge or subtle element */}
                                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-pulse" />
                                    <span className="text-[10px] uppercase tracking-wider text-black/50 font-bold">Diagnóstico Concluído</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
