import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { Quote } from "lucide-react";

// --- Sub-Components ---
const TestimonialsColumn = (props: {
    className?: string;
    testimonials: any[];
    duration?: number;
}) => {
    return (
        <div className={props.className}>
            <motion.ul
                animate={{
                    translateY: "-50%",
                }}
                transition={{
                    duration: props.duration || 10,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                }}
                className="flex flex-col gap-6 pb-6 bg-transparent transition-colors duration-300 list-none m-0 p-0"
            >
                {[
                    ...new Array(2).fill(0).map((_, index) => (
                        <React.Fragment key={index}>
                            {props.testimonials.map(({ text, image, name, role }, i) => (
                                <motion.li
                                    key={`${index}-${i}`}
                                    aria-hidden={index === 1 ? "true" : "false"}
                                    tabIndex={index === 1 ? -1 : 0}
                                    whileHover={{
                                        scale: 1.02,
                                        y: -5,
                                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)",
                                        transition: { type: "spring", stiffness: 400, damping: 17 }
                                    }}
                                    onClick={() => {
                                        if (name === "Juliana Cobo") {
                                            window.open("https://www.linkedin.com/in/juliana-c-3bb590252", "_blank", "noopener,noreferrer");
                                        }
                                    }}
                                    className={`p-8 md:p-10 rounded-3xl border border-black/5 shadow-lg shadow-black/5 max-w-sm w-full bg-white/40 backdrop-blur-md transition-all duration-300 select-none group focus:outline-none focus:ring-2 focus:ring-primary/30 ${name === "Juliana Cobo" ? "cursor-pointer" : "cursor-default"}`}
                                >
                                    <blockquote className="m-0 p-0">
                                        <Quote className="w-6 h-6 fill-primary/10 text-primary/20 mb-6" />
                                        <p className="text-black/80 text-base md:text-lg font-display font-light leading-relaxed m-0 italic">
                                            "{text}"
                                        </p>
                                        <footer className="flex items-center gap-4 mt-8 pt-6 border-t border-black/5">
                                            <div className="w-12 h-12 rounded-full overflow-hidden bg-white border border-black/10 flex flex-shrink-0 flex-grow-0 items-center justify-center p-1.5 shadow-sm">
                                                <img
                                                    src={image}
                                                    alt={name}
                                                    className="w-full h-full object-contain"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="flex flex-col">
                                                <cite className="font-semibold not-italic text-sm md:text-base tracking-tight leading-5 text-black">
                                                    {name}
                                                </cite>
                                                <span className="text-[10px] md:text-xs leading-5 tracking-widest uppercase text-black/50 mt-1 font-semibold">
                                                    {role}
                                                </span>
                                            </div>
                                        </footer>
                                    </blockquote>
                                </motion.li>
                            ))}
                        </React.Fragment>
                    )),
                ]}
            </motion.ul>
        </div>
    );
};

export function Testimonials() {
    const { t } = useLanguage();

    // Create an array of identical testimonials based on the requested volume
    const singleTestimonial = {
        text: t("testimonials.quote1.text"),
        image: "/static/images/avatar-juliana.png",
        name: t("testimonials.quote1.author"),
        role: t("testimonials.quote1.role"),
    };

    // We need 12 items for 3 columns of 4 items each
    const allTestimonials = Array(12).fill(singleTestimonial);

    const firstColumn = allTestimonials.slice(0, 4);
    const secondColumn = allTestimonials.slice(4, 8);
    const thirdColumn = allTestimonials.slice(8, 12);

    return (
        <section id="testimonials" className="py-24 md:py-32 bg-[#F8F9FA] relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none opacity-40" />

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
                <div className="flex flex-col items-center text-center mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-[1px] bg-primary/40" />
                        <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-semibold text-primary">
                            {t("testimonials.tag")}
                        </span>
                        <div className="w-8 h-[1px] bg-primary/40" />
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-light text-black tracking-tight text-balance max-w-3xl">
                        {t("testimonials.title")}
                    </h2>
                </div>

                <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] h-[600px] md:h-[740px] overflow-hidden" role="region" aria-label="Scrolling Testimonials">
                    <TestimonialsColumn testimonials={firstColumn} duration={25} />
                    <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={30} />
                    <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={22} />
                </div>
            </motion.div>
        </section>
    );
}
