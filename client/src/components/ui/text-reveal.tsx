"use client";

import { FC, ReactNode, useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

interface TextRevealByWordProps {
    headline: string;
    body: string;
    className?: string;
}

const TextRevealByWord: FC<TextRevealByWordProps> = ({
    headline,
    body,
    className,
}) => {
    const targetRef = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        // Keep it triggering early
        offset: ["start 0.8", "end 0.2"]
    });

    const headlineWords = headline.split(" ");
    const bodyWords = body.split(" ");
    const allWordsCount = headlineWords.length + bodyWords.length;

    return (
        // Height maintained to 110vh as previously requested for compactness
        <div ref={targetRef} className={cn("relative z-0 h-[110vh]", className)}>
            <div
                className={
                    "sticky top-0 mx-auto flex h-screen max-w-5xl items-center bg-transparent px-[2rem] py-0"
                }
            >
                <div
                    className={
                        "flex flex-wrap p-5 md:p-8 lg:p-10"
                    }
                >
                    {/* Headline - Larger and Bold */}
                    <div className="w-full flex flex-wrap mb-6">
                        {headlineWords.map((word, i) => {
                            // Compressing the animation: all words must finish by 0.5 (halfway through the section scroll)
                            const start = (i / allWordsCount) * 0.5;
                            const end = ((i + 1) / allWordsCount) * 0.5;
                            return (
                                <Word
                                    key={`h-${i}`}
                                    progress={scrollYProgress}
                                    range={[start, end]}
                                    className="text-3xl md:text-5xl lg:text-6xl font-display font-light tracking-tight"
                                >
                                    {word}
                                </Word>
                            );
                        })}
                    </div>

                    {/* Body - Standard size */}
                    <div className="w-full flex flex-wrap">
                        {bodyWords.map((word, i) => {
                            // Body starts right after headline and also finishes by 0.5
                            const start = ((headlineWords.length + i) / allWordsCount) * 0.5;
                            const end = ((headlineWords.length + i + 1) / allWordsCount) * 0.5;
                            return (
                                <Word
                                    key={`b-${i}`}
                                    progress={scrollYProgress}
                                    range={[start, end]}
                                    className="text-lg md:text-2xl lg:text-3xl font-display font-light leading-relaxed text-black/60"
                                >
                                    {word}
                                </Word>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

interface WordProps {
    children: ReactNode;
    progress: MotionValue<number>;
    range: [number, number];
    className?: string;
}

const Word: FC<WordProps> = ({ children, progress, range, className }) => {
    const opacity = useTransform(progress, range, [0, 1]);
    return (
        <span className={cn("xl:lg-3 relative mx-1 lg:mx-2.5", className)}>
            <span className={"absolute opacity-10 text-black"}>{children}</span>
            <motion.span
                style={{ opacity: opacity }}
                className={"text-black"}
            >
                {children}
            </motion.span>
        </span>
    );
};

export { TextRevealByWord };
