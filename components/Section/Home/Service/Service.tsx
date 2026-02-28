"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Printer, Zap, Layers, Maximize, CheckCircle2, Plus, Minus } from "lucide-react";

type PrinterModel = {
    id: string;
    name: string;
    description: string;
    image: string;
    features: string[];
};

type PrinterCategory = {
    id: string;
    title: string;
    image: string;
    icon: any;
    printers: PrinterModel[];
};

const printerCategories: PrinterCategory[] = [
    {
        id: "production",
        title: "Printing Services",
        image: "/images/category-printing.jpg",
        icon: Printer,
        printers: [
            {
                id: "digital",
                name: "Digital Printing",
                description: "Fast, high-quality printing for short runs and personalized documents. We utilize advanced digital presses to ensure sharp detail and vibrant colors with rapid turnaround times.",
                image: "/images/printing-digital.png",
                features: ["Quick Turnaround", "On-Demand Printing", "Personalization"]
            },
            {
                id: "offset",
                name: "Offset Printing",
                description: "The gold standard for high-volume, cost-effective printing. Our offset facilities handle large-scale jobs with unparalleled consistency and professional finish.",
                image: "/images/printing-offset.png",
                features: ["High Volume", "Cost-Effective", "Consistent Quality"]
            },
            {
                id: "uv",
                name: "UV Printing",
                description: "Cutting-edge technology that uses UV light to instantly cure ink on a vast range of substrates. Perfect for specialty materials and high-durability requirements.",
                image: "/images/printing-uv.png",
                features: ["Instant Curing", "Specialty Materials", "Vibrant Finishes"]
            }
        ]
    },
    {
        id: "binding",
        title: "Binding Services",
        image: "/images/category-binding.jpg",
        icon: Maximize,
        printers: [
            {
                id: "padding",
                name: "Padding",
                description: "Want Removable note pads? No problem. We can create padded sheets of any our stocks of paper in a similar way to our perfect bound books, just without the burring. Great to make branded note pads.",
                image: "/images/binding-padding.png",
                features: ["Removable Sheets", "Branded Notepads", "Any Paper Stock"]
            },
            {
                id: "perfect-binding",
                name: "Perfect Binding",
                description: "Using special Planamelt R glue, we create long-lasting and professional-quality multi-page books. Ideal for booklets over 24 pages, achieving a wide range of textures and finishes.",
                image: "/images/binding-perfect.png",
                features: ["Planamelt R Glue", "Professional Quality", "24-200+ Pages"]
            },
            {
                id: "saddle-stitch",
                name: "Saddle Stitch",
                description: "Our fastest and most cost-effective bookbinding process. Excellent for company profiles, advertisements, and magazines. Supports up to 200 pages at 80 GSM.",
                image: "/images/binding-saddle.png",
                features: ["Fast Turnaround", "Cost-Effective", "Up to 200 Pages"]
            },
            {
                id: "spiral-binding",
                name: "Spiral Binding",
                description: "Perfect for books that need to lay flat. Durable plastic bind allows for 360-degree rotation. Great choice for diaries, technical documents, and office environments.",
                image: "/images/binding-spiral.png",
                features: ["Lays Flat", "Durable Plastic Bind", "Technical Docs"]
            },
            {
                id: "case-binding",
                name: "Case Binding (Hardcover)",
                description: "Premium presentation with a stiff board cover wrapped in printed sheet or cloth. The book block is glued into the inside for a high-end nipped profile.",
                image: "/images/binding-case.png",
                features: ["Hardcover Premium", "Cloth/Printed Wrap", "Custom Quotes"]
            }
        ]
    },
    {
        id: "design",
        title: "Graphic Design",
        image: "/images/category-design.jpg",
        icon: Layers,
        printers: [
            {
                id: "661uf",
                name: "Mutoh XpertJet 661UF",
                description: "Direct-to-object UV printer for materials like wood, acrylic, metal, and plastic. Perfect for customized products and sharp details.",
                image: "/images/printer-nature-concept.jpg",
                features: ["Multi-Material Support", "LED UV Curing", "Precision Printing"]
            }
        ]
    }
];

const Service = () => {
    const [expandedPrinterId, setExpandedPrinterId] = useState<string | null>(null);

    const togglePrinter = (id: string) => {
        setExpandedPrinterId(prev => (prev === id ? null : id));
    };

    // Animation variants for staggered reveal
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <section id="services" className="py-12 md:py-16 px-[5vw] bg-[#fafaf9] relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-[#cfac68]/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[30%] bg-[#cfac68]/3 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section (Centered to match Products) */}
                <div className="flex flex-col items-center text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-white px-6 py-2 rounded-lg shadow-sm mb-8"
                    >
                        <span className="text-[#cfac68] font-bold tracking-[0.2em] uppercase text-xs">
                            Our Solutions & Expertise
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-7xl font-bold text-[#1e293b] leading-[1.1] tracking-tight max-w-[900px]"
                    >
                        Advanced Technology <br />
                        <span className="text-black/30">Precision Results.</span>
                    </motion.h2>
                </div>

                {/* Categories and Printers */}
                <div className="flex flex-col gap-10">
                    {printerCategories.map((category, catIdx) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: catIdx * 0.1 }}
                            className="flex flex-col gap-8"
                        >
                            <div className="relative h-[200px] md:h-[300px] w-full rounded-3xl overflow-hidden shadow-2xl shadow-black/10">
                                <Image
                                    src={category.image}
                                    alt={category.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

                                <div className="absolute inset-0 flex items-center px-8 md:px-12">
                                    <div className="flex items-center gap-6">
                                        <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl flex items-center justify-center text-white shadow-xl">
                                            <category.icon size={36} strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">{category.title}</h3>
                                            <p className="text-white/70 font-medium uppercase text-[10px] md:text-xs tracking-[0.2em] mt-2">
                                                {category.printers.length} Premium Solutions
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4">
                                {category.printers.map((printer, pIdx) => {
                                    const isExpanded = expandedPrinterId === printer.id;
                                    return (
                                        <motion.div
                                            key={printer.id}
                                            initial={{ opacity: 0, x: 50 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true, amount: 0.2 }}
                                            transition={{ duration: 0.6, delay: pIdx * 0.1 }}
                                            className={`group relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${isExpanded
                                                ? "bg-white shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] rounded-2xl"
                                                : "bg-white/40 hover:bg-white backdrop-blur-sm rounded-2xl border border-black/5 hover:border-[#cfac68]/20 hover:shadow-xl hover:shadow-black/5"
                                                }`}
                                        >
                                            <div className="p-6 md:p-10">
                                                {/* Header Info */}
                                                <div className="flex items-center justify-between gap-6">
                                                    <h4 className={`text-lg md:text-2xl font-bold transition-colors duration-500 ${isExpanded ? "text-black" : "text-black/80 group-hover:text-black"}`}>
                                                        {printer.name}
                                                    </h4>
                                                    <button
                                                        onClick={() => togglePrinter(printer.id)}
                                                        className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-500 ${isExpanded
                                                            ? "bg-[#cfac68] text-white rotate-0 shadow-lg shadow-[#cfac68]/30"
                                                            : "bg-white text-[#cfac68] border border-black/5 group-hover:border-[#cfac68]/30 group-hover:scale-110"
                                                            }`}
                                                    >
                                                        <AnimatePresence mode="wait">
                                                            <motion.div
                                                                key={isExpanded ? "minus" : "plus"}
                                                                initial={{ opacity: 0, rotate: -45 }}
                                                                animate={{ opacity: 1, rotate: 0 }}
                                                                exit={{ opacity: 0, rotate: 45 }}
                                                                transition={{ duration: 0.3 }}
                                                            >
                                                                {isExpanded ? <Minus size={24} /> : <Plus size={24} />}
                                                            </motion.div>
                                                        </AnimatePresence>
                                                    </button>
                                                </div>

                                                {/* Expandable Content */}
                                                <AnimatePresence>
                                                    {isExpanded && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                                                            className="overflow-hidden"
                                                        >
                                                            <motion.div
                                                                variants={containerVariants}
                                                                initial="hidden"
                                                                animate="visible"
                                                                className="pt-10 border-t border-black/5 mt-6 flex flex-col lg:flex-row gap-12"
                                                            >
                                                                {/* Image */}
                                                                <motion.div
                                                                    variants={itemVariants}
                                                                    className="relative w-full lg:w-[400px] aspect-[16/10] lg:aspect-square rounded-3xl overflow-hidden bg-gray-50 flex-shrink-0 shadow-2xl shadow-black/5"
                                                                >
                                                                    <Image
                                                                        src={printer.image}
                                                                        alt={printer.name}
                                                                        fill
                                                                        className="object-cover"
                                                                    />
                                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                                                </motion.div>

                                                                {/* Details */}
                                                                <div className="flex flex-col flex-grow py-2">
                                                                    <motion.p
                                                                        variants={itemVariants}
                                                                        className="text-black/60 text-xl leading-relaxed mb-10 font-normal"
                                                                    >
                                                                        {printer.description}
                                                                    </motion.p>

                                                                    <motion.div
                                                                        variants={itemVariants}
                                                                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4"
                                                                    >
                                                                        {printer.features.map((feature, i) => (
                                                                            <motion.div
                                                                                key={i}
                                                                                whileHover={{ x: 5 }}
                                                                                className="flex items-center gap-4 text-base font-semibold text-[#6b7071] bg-black/[0.02] p-4 rounded-2xl border border-transparent hover:border-[#cfac68]/20 hover:bg-[#cfac68]/5 transition-all duration-300"
                                                                            >
                                                                                <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                                                                                    <CheckCircle2 size={18} className="text-[#cfac68]" strokeWidth={1.5} />
                                                                                </div>
                                                                                {feature}
                                                                            </motion.div>
                                                                        ))}
                                                                    </motion.div>
                                                                </div>
                                                            </motion.div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Service;
