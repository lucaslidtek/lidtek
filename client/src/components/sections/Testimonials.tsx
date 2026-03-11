import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { Quote, Brain, Heart, Zap, Globe, Shield, Rocket, Target, Lightbulb, Monitor, Cpu } from "lucide-react";

const logos = [
    { src: "/static/logos/ago.webp", name: "AGO" },
    { src: "/static/logos/aluga-aqui.png", name: "Aluga Aqui" },
    { src: "/static/logos/casa-decor.svg", name: "Casa Decor" },
    { src: "/static/logos/clickey.svg", name: "Clickey" },
    { src: "/static/logos/fazenda-sao-bento.svg", name: "Fazenda São Bento" },
    { src: "/static/logos/gqb-consultoria.png", name: "GQB Consultoria" },
    { src: "/static/logos/iogar.png", name: "Iogar" },
    { src: "/static/logos/locacoes-sao-bento.svg", name: "Locações São Bento" },
    { src: "/static/logos/logo-italiana.png", name: "Construtora Italiana" },
    { src: "/static/logos/porsche-rio.svg", name: "Porsche Rio", style: { transform: "scale(1.8)" } },
    { src: "/static/logos/skep.svg", name: "Skep" },
    { src: "/static/logos/v5-partners.svg", name: "V5 Partners", className: "h-14 md:h-20" },
];

export function Testimonials() {
    const { t } = useLanguage();

    const julianaTestimonial = {
        text: t("testimonials.quote1.text"),
        image: "/static/images/avatar-juliana.png",
        name: t("testimonials.quote1.author"),
        role: t("testimonials.quote1.role"),
    };

    const logosRow1 = [...logos, ...logos];
    const logosRow2 = [...logos].reverse().concat([...logos].reverse());
    const logosRow3 = [...logosRow1].sort(() => Math.random() - 0.5);

    return (
        <section id="testimonials" className="py-24 md:py-32 bg-[#F8F9FA] relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none opacity-50" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none opacity-40 translate-y-1/2 -translate-x-1/2" />


            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                    duration: 1.2,
                    ease: [0.16, 1, 0.3, 1]
                }}
                className="max-w-7xl mx-auto w-full relative z-10 px-6 md:px-12"
            >
                <div className="flex flex-col items-center text-center justify-center mb-16 md:mb-24">
                    <div className="flex flex-col items-center gap-4 max-w-3xl">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-[1px] bg-primary/40" />
                            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-semibold text-primary">
                                {t("testimonials.tag")}
                            </span>
                            <div className="w-8 h-[1px] bg-primary/40" />
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-light text-black tracking-tight text-balance">
                            {t("testimonials.title")}
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                    
                    {/* Left Column: Testimonial Card */}
                    <div className="lg:col-span-6 flex justify-center lg:justify-start z-10 w-full">
                        <div className="relative group w-full max-w-xl">
                            {/* Decorative blur blob behind card */}
                            <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            
                            <motion.div
                                whileHover={{
                                    scale: 1.02,
                                    y: -8,
                                    transition: { type: "spring", stiffness: 400, damping: 25 }
                                }}
                                onClick={() => {
                                    window.open("https://www.linkedin.com/in/juliana-c-3bb590252", "_blank", "noopener,noreferrer");
                                }}
                                className="relative p-8 md:p-10 rounded-3xl border border-white/60 bg-white/40 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_0_rgba(0,0,0,0.1)] transition-all duration-500 cursor-pointer overflow-hidden"
                            >
                                {/* Glass reflection */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-white/40 to-white/5 opacity-50 pointer-events-none" />
                                
                                <blockquote className="m-0 p-0 relative z-10">
                                    <div className="flex justify-between items-start mb-8">
                                        <Quote className="w-10 h-10 fill-primary/10 text-primary/80" />
                                        <div className="flex items-center gap-1 opacity-60 group-hover:opacity-100 transition-opacity">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} className="w-4 h-4 text-emerald-500 fill-current" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>

                                    <p className="text-black/80 text-lg md:text-xl font-display font-light leading-relaxed m-0 italic">
                                        "{julianaTestimonial.text}"
                                    </p>
                                    
                                    <footer className="flex items-center gap-4 mt-10 pt-6 border-t border-black/5">
                                        <div className="w-14 h-14 rounded-full overflow-hidden bg-white/80 border border-white/60 flex flex-shrink-0 items-center justify-center p-1 shadow-sm group-hover:scale-110 transition-transform duration-500">
                                            <img
                                                src={julianaTestimonial.image}
                                                alt={julianaTestimonial.name}
                                                className="w-full h-full object-contain rounded-full"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <cite className="font-semibold not-italic text-base md:text-lg tracking-tight leading-5 text-black">
                                                {julianaTestimonial.name}
                                            </cite>
                                            {julianaTestimonial.role.includes(" - ") || julianaTestimonial.role.includes("-") ? (
                                                <div className="flex flex-col mt-1.5">
                                                    <span className="text-[11px] md:text-xs uppercase tracking-[0.15em] text-primary/80 font-bold">
                                                        {julianaTestimonial.role.split(/ - |-/)[0].trim()}
                                                    </span>
                                                    <span className="text-[10px] md:text-[11px] uppercase tracking-[0.15em] text-black/40 font-semibold mt-0.5">
                                                        {julianaTestimonial.role.split(/ - |-/)[1].trim()}
                                                    </span>
                                                </div>
                                            ) : (
                                                <span className="text-xs uppercase tracking-[0.15em] text-primary/80 mt-1.5 font-semibold">
                                                    {julianaTestimonial.role}
                                                </span>
                                            )}
                                        </div>
                                    </footer>
                                </blockquote>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Column: Marquee Logos */}
                    <div className="lg:col-span-6 flex flex-col gap-6 md:gap-10 overflow-hidden relative w-[110vw] -ml-[5vw] lg:ml-0 lg:w-[130%] lg:-mr-[30%] lg:px-4 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] mt-4 lg:mt-0 transform -rotate-2 scale-105 md:-rotate-3 md:scale-110">
                        {/* Row 1 - Left to Right */}
                        <div className="flex whitespace-nowrap overflow-hidden">
                            <motion.div 
                                className="flex gap-6 w-max"
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
                            >
                                {logosRow1.map((logo, i) => (
                                    <div key={`row1-${i}`} className="flex items-center justify-center px-10 h-20 min-w-[160px] group cursor-default">
                                        <img 
                                            src={logo.src} 
                                            alt={logo.name}
                                            className={`${(logo as any).className || "h-8 md:h-12"} w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 scale-100 group-hover:scale-110`}
                                            style={(logo as any).style || {}}
                                        />
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                        
                        {/* Row 2 - Right to Left */}
                        <div className="flex whitespace-nowrap overflow-hidden">
                            <motion.div 
                                className="flex gap-6 w-max"
                                animate={{ x: ["-50%", "0%"] }}
                                transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
                            >
                                {logosRow2.map((logo, i) => (
                                    <div key={`row2-${i}`} className="flex items-center justify-center px-10 h-20 min-w-[160px] group cursor-default">
                                        <img 
                                            src={logo.src} 
                                            alt={logo.name}
                                            className={`${(logo as any).className || "h-8 md:h-12"} w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 scale-100 group-hover:scale-110`}
                                            style={(logo as any).style || {}}
                                        />
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Row 3 - Left to Right (Hidden on mobile for space optimization) */}
                        <div className="hidden md:flex whitespace-nowrap overflow-hidden">
                            <motion.div 
                                className="flex gap-6 w-max"
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
                            >
                                {logosRow3.map((logo, i) => (
                                    <div key={`row3-${i}`} className="flex items-center justify-center px-10 h-20 min-w-[160px] group cursor-default">
                                        <img 
                                            src={logo.src} 
                                            alt={logo.name}
                                            className={`${(logo as any).className || "h-8 md:h-12"} w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 scale-100 group-hover:scale-110`}
                                            style={(logo as any).style || {}}
                                        />
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>

                </div>
            </motion.div>
        </section>
    );
}
