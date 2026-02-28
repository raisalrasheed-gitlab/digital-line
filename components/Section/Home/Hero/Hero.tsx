"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const printerData = [
    {
        id: 1,
        title: "Ricoh Pro C9200sx",
        desc: "5 COLOR PRODUCTION PRINTER",
        smallDesc: "The Ricoh Pro C9200sx is a high-performance 5-color production printer designed for commercial printing. It delivers premium print quality, specialty color options, and reliable high-volume production for professional print businesses.",
        image: "/images/home-hero-printer-1.png"
    },
    {
        id: 2,
        title: "Ricoh Pro C7200sx",
        desc: "5 COLOR PRODUCTION PRINTER",
        smallDesc: "The Ricoh Pro C7200sx production printer offers outstanding color accuracy and supports heavy media up to 360 gsm. Ideal for short-run commercial printing, it enables double-sided oversized printing with consistent professional results.",
        image: "/images/home-hero-printer-2.png"
    },
    {
        id: 3,
        title: "Mutoh XpertJet 1641SR ",
        desc: "ECO-SOLVENT PRINTER",
        smallDesc: "The Mutoh XpertJet 1641SR RIP eco-solvent printer delivers high-resolution large-format printing for banners, signage, and vehicle graphics. It provides fast printing speed, vibrant colors, and durable outdoor prints.",
        image: "/images/home-hero-printer-3.png"
    },
    {
        id: 4,
        title: "Mutoh XpertJet 661UF",
        desc: "FLATBED UV PRINT & LED PRINTER",
        smallDesc: "The Mutoh XpertJet 661UF flatbed UV printer enables direct printing on materials like wood, acrylic, metal, and plastic. Perfect for customized products, it delivers sharp details and long-lasting UV prints.",
        image: "/images/home-hero-printer-4.png"
    }
];

const Hero = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % printerData.length);
        }, 5000); // Slide every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-[680px] md:h-[800px] min-h-screen w-full flex flex-col justify-center px-[5vw] pt-20 overflow-hidden bg-[#0a0a0a]">
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 z-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-10" />
                    <Image
                        src={printerData[activeIndex].image}
                        alt="Printer Concept"
                        fill
                        className="object-cover opacity-80"
                        priority
                    />
                </motion.div>
            </AnimatePresence>

            <div className="relative z-20 max-w-2xl">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-medium text-white leading-[1.1] mb-6 whitespace-pre-line">
                            {printerData[activeIndex].title}
                        </h1>

                        <p className="text-lg md:text-xl text-white/80 mb-4 max-w-lg leading-relaxed uppercase tracking-wider font-semibold">
                            {printerData[activeIndex].desc}
                        </p>

                        <p className="text-base md:text-lg text-white/60 mb-10 max-w-lg leading-relaxed">
                            {printerData[activeIndex].smallDesc}
                        </p>
                    </motion.div>
                </AnimatePresence>

                <button className="group flex items-center gap-4 bg-[#cfaf6a] text-white pl-8 pr-4 py-2 rounded-full font-medium text-lg hover:bg-[#6d6d6f] transition-all duration-300 active:scale-95 shadow-xl shadow-teal-900/30">
                    Get Started
                    <div className="bg-[#6d6d6f] p-3 rounded-full group-hover:bg-[#cfaf6a] transition-colors duration-300">
                        <ArrowUpRight size={24} />
                    </div>
                </button>
            </div>

            {/* Bottom Thumbnails Navigation */}
            <div className="absolute bottom-4 left-[5vw] z-20 flex gap-4">
                {printerData.map((printer, i) => (
                    <motion.div
                        key={printer.id}
                        onClick={() => setActiveIndex(i)}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + (i * 0.1) }}
                        className={`relative w-16 h-16 md:w-32 md:h-32 rounded-2xl overflow-hidden border-2 transition-all duration-300 cursor-pointer shadow-2xl ${activeIndex === i ? 'border-[#cfaf6a] scale-105' : 'border-white/20 hover:border-white/50'
                            }`}
                    >
                        <div className={`absolute inset-0 bg-black/40 z-10 ${activeIndex === i ? 'bg-transparent' : ''}`} />
                        <Image
                            src={printer.image}
                            alt={printer.title}
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Hero;
