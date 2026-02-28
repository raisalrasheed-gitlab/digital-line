"use client";

import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Play } from "lucide-react";

const About = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.85", "end 0.3"],
    });

    const [isExpanded, setIsExpanded] = useState(false);

    const paragraphs = [
        "Digital Line Graphics LLC have with us the most capable individuals, computers, pre-press infrastructure and latest printing machines to execute the jobs entrusted to us.We are sure that you will give us an opportunity to prove to your entire satisfaction the worth of our venture.",
        "Digital Line Graphics LLC is a sister concern of Al Fajr Graphic, which has been working in this field since 2003 in Sharjah and has made its own mark in the field of digital printing, graphic designing and all kinds of printing jobs.",
    ];

    // Flatten all paragraphs to calculate total words for global indexing
    const allWords = paragraphs.join(" ").split(" ");
    let wordIdxCounter = 0;

    const paragraphsWithRanges = paragraphs.map((para) => {
        const words = para.split(" ");
        return words.map((word) => {
            const currentGlobalIdx = wordIdxCounter++;
            const start = currentGlobalIdx / allWords.length;
            const end = start + (1 / allWords.length);
            return { word, range: [start, end] as [number, number] };
        });
    });

    return (
        <section className="py-12 md:py-16 px-[5vw] bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                {/* Left Content */}
                <div ref={containerRef} className="flex flex-col gap-10">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex flex-col"
                    >
                        <span className="text-[#cfac68] font-bold tracking-widest uppercase text-sm mb-4 block">
                            Get to know us
                        </span>
                        <h2 className="text-4xl md:text-5xl font-medium text-black leading-tight">
                            Driving into Excellence <br /> & Innovation
                        </h2>
                    </motion.div>

                    <div className="flex flex-col gap-0">
                        {paragraphsWithRanges.map((paraWords, pIdx) => {
                            const isFirst = pIdx === 0;
                            const content = (
                                <h2 key={pIdx} className="text-xl md:text-2xl lg:text-3xl font-medium leading-[1.6] text-black text-justify">
                                    {paraWords.map((wordData, wIdx) => (
                                        <Char key={wIdx} range={wordData.range} progress={scrollYProgress}>
                                            {wordData.word}
                                        </Char>
                                    ))}
                                    {isFirst && !isExpanded && (
                                        <button
                                            onClick={() => setIsExpanded(true)}
                                            className="md:hidden text-[#cfac68] font-bold ml-2 hover:underline focus:outline-none"
                                        >
                                            ... more
                                        </button>
                                    )}
                                </h2>
                            );

                            if (isFirst) return content;

                            return (
                                <div key={pIdx}>
                                    {/* Desktop View: Always show */}
                                    <div className="hidden md:block">
                                        {content}
                                    </div>

                                    {/* Mobile View: Collapsible with Scroll Reveal */}
                                    <AnimatePresence>
                                        {isExpanded && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                                className="md:hidden overflow-hidden"
                                            >
                                                {content}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex items-center gap-6 cursor-pointer group w-fit"
                    >
                        <span className="text-xl md:text-2xl font-bold text-black group-hover:text-[#2d7d7d] transition-colors duration-300">
                            Learn More
                        </span>
                        <div className="bg-black text-white p-4 rounded-full group-hover:bg-[#2d7d7d] group-hover:rotate-45 transition-all duration-300 shadow-lg group-active:scale-95">
                            <ArrowUpRight size={24} />
                        </div>
                    </motion.div>
                </div>

                {/* Right Media */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, x: 20 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative aspect-[3/4.5] lg:aspect-[3/4] rounded-[2.5rem] overflow-hidden  group"
                >
                    <Image
                        src="/images/about-partner.png"
                        alt="About Us Partner"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <button className="absolute inset-0 m-auto w-24 h-24 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center text-white border border-white/30 hover:bg-white/40 hover:scale-110 transition-all duration-300 shadow-2xl">
                        <div className="bg-white/30 p-4 rounded-full">
                            <Play size={40} fill="white" className="ml-1" />
                        </div>
                    </button>

                    {/* Decorative element */}
                    <div className="absolute top-8 right-8 w-24 h-24 border-t-2 border-r-2 border-white/30 rounded-tr-3xl" />
                    <div className="absolute bottom-8 left-8 w-24 h-24 border-b-2 border-l-2 border-white/30 rounded-bl-3xl" />
                </motion.div>
            </div>
        </section>
    );
};

const Char = ({ children, range, progress, isDescription }: { children: string; range: [number, number]; progress: any, isDescription?: boolean }) => {
    const opacity = useTransform(progress, range, [0.15, 1]);

    return (
        <span className="relative mr-[0.3em] inline-block mb-1">
            <span className="absolute select-none opacity-[0.15] text-black/10">
                {children}
            </span>
            <motion.span style={{ opacity }}>
                {children}
            </motion.span>
        </span>
    );
};

export default About;