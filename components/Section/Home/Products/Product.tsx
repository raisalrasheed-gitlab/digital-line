"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const products = [
    {
        id: 1,
        title: "Business Cards",
        category: "Essentials",
        image: "/images/printing-digital.png",
        quality: "99%"
    },
    {
        id: 2,
        title: "Stickers & Labels",
        category: "Branding",
        image: "/images/printing-uv.png",
        quality: "98%"
    },
    {
        id: 3,
        title: "Marketing Flyers",
        category: "Promotion",
        image: "/images/printing-offset.png",
        quality: "95%"
    },
    {
        id: 4,
        title: "Premium Brochures",
        category: "Marketing",
        image: "/images/binding-saddle.png",
        quality: "97%"
    },
    {
        id: 5,
        title: "Official Letterhead",
        category: "Essentials",
        image: "/images/printing-digital.png",
        quality: "100%"
    },
    {
        id: 6,
        title: "DVD & CD Printing & Covers",
        category: "Media",
        image: "/images/product-cd-dvd.png",
        quality: "99%"
    },
    {
        id: 7,
        title: "Custom Calendars",
        category: "Stationery",
        image: "/images/binding-spiral.png",
        quality: "99%"
    },
    {
        id: 8,
        title: "Hardcover Books",
        category: "Premium",
        image: "/images/binding-case.png",
        quality: "99%"
    },
    {
        id: 9,
        title: "Custom Notepads",
        category: "Branding",
        image: "/images/binding-padding.png",
        quality: "98%"
    },
    {
        id: 10,
        title: "Premium Shopping Bags",
        category: "Branding",
        image: "/images/product-shopping-bag.png",
        quality: "99%"
    },
    {
        id: 11,
        title: "Branded USB Drives",
        category: "Corporate Gifts",
        image: "/images/product-usb.png",
        quality: "97%"
    },
    {
        id: 12,
        title: "Custom Ceramic Mugs",
        category: "Corporate Gifts",
        image: "/images/product-mug.png",
        quality: "98%"
    },
    {
        id: 13,
        title: "Luxury Executive Pens",
        category: "Corporate Gifts",
        image: "/images/product-pen.png",
        quality: "100%"
    },
    {
        id: 14,
        title: "PU Leather Notebooks",
        category: "Stationery",
        image: "/images/product-notebook.png",
        quality: "99%"
    },
    {
        id: 15,
        title: "Promotional Coupons",
        category: "Promotion",
        image: "/images/product-coupons-scratch.png",
        quality: "96%"
    },
    {
        id: 16,
        title: "Custom Wall Calendars",
        category: "Stationery",
        image: "/images/product-calendar.png",
        quality: "99%"
    },
    {
        id: 17,
        title: "Marketing Materials",
        category: "Marketing",
        image: "/images/category-printing.jpg",
        quality: "98%"
    },
    {
        id: 18,
        title: "Wax & Embossing Seals",
        category: "Specialty",
        image: "/images/product-wax-embossing-seal.png",
        quality: "99%"
    },
    {
        id: 19,
        title: "ID Cards & Badges",
        category: "Corporate",
        image: "/images/product-id-lanyard-badge.png",
        quality: "98%"
    },
    {
        id: 20,
        title: "Rollup & Popup Displays",
        category: "Marketing",
        image: "/images/product-display-banners-stamps.png",
        quality: "97%"
    },
    {
        id: 21,
        title: "Exhibition Flags",
        category: "Marketing",
        image: "/images/product-exhibition-flags-backdrops.png",
        quality: "98%"
    },
    {
        id: 22,
        title: "Envelopes & Folders",
        category: "Essentials",
        image: "/images/product-stationery-pack-envelopes-folders.png",
        quality: "99%"
    }
];

const ProductCard = ({ product, isCenter }: { product: typeof products[0]; isCenter: boolean }) => {
    return (
        <div className="flex-shrink-0 w-[300px] md:w-[450px] relative snap-center group">
            <motion.div
                className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-gray-100 shadow-2xl shadow-black/10"
            >
                {/* Background Image */}
                <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />

                {/* Visual Overlay for contrast */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-10 flex flex-col items-center justify-center text-center z-10">
                    {/* Category Label */}
                    <div className="mb-6">
                        <span className="px-5 py-2 rounded-xl border border-white/30 bg-white/10 backdrop-blur-md text-white text-sm font-medium tracking-wide">
                            {product.category}
                        </span>
                    </div>

                    {/* Product Title */}
                    <h3 className="text-3xl md:text-4xl font-bold text-white leading-[1.15] mb-8 max-w-[280px]">
                        {product.title}
                    </h3>

                    {/* Bottom: Arrow Icon */}
                    <div className="mt-4">
                        <ArrowUpRight className="text-white w-20 h-20 opacity-90 transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2" strokeWidth={1} />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const ProductSection = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
            setScrollProgress(Math.max(0, Math.round(progress)));
        }
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener("scroll", handleScroll);
            return () => container.removeEventListener("scroll", handleScroll);
        }
    }, []);

    // Pagination logic: dynamic based on number of products
    const itemsPerPage = 1; // Assuming 1 main central item emphasis for mobile/desktop snap
    const totalDots = 5; // We'll show 5 dots to represent segments of the long list
    const activeDotIndex = Math.min(totalDots - 1, Math.floor((scrollProgress / 100) * totalDots));

    return (
        <section id="products" className="py-12 md:py-16 px-[5vw] bg-[#f8f9fa] relative overflow-x-hidden">
            <style dangerouslySetInnerHTML={{
                __html: `
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}} />
            <div className="max-w-7xl mx-auto overflow-x-visible text-center">
                {/* Header Section (Centered) */}
                <div className="flex flex-col items-center text-center mb-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-white px-6 py-2 rounded-lg shadow-sm mb-8"
                    >
                        <span className="text-[#cfac68] font-bold tracking-[0.2em] uppercase text-xs">
                            Our Products
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-[#1e293b] leading-[1.1] tracking-tight max-w-[900px]"
                    >
                        Breaking Boundaries,<br />
                        Building <span className="text-black/30">Dreams.</span>
                    </motion.h2>
                </div>

                {/* Slider Container with Relative Progress Ring */}
                <div className="relative">
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-12 md:pb-16"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {products.map((product, idx) => (
                            <ProductCard key={product.id} product={product} isCenter={true} />
                        ))}
                    </div>

                    {/* Floating Progress Indicator (Bottom Right of visible area roughly) */}


                    {/* Custom Pagination (Centered Bottom) */}
                    <div className="flex justify-center items-center gap-3 mt-4">
                        {Array.from({ length: totalDots }).map((_, i) => (
                            <motion.div
                                key={i}
                                initial={false}
                                animate={{
                                    width: activeDotIndex === i ? 48 : 12,
                                    height: activeDotIndex === i ? 8 : 12,
                                    backgroundColor: activeDotIndex === i ? "#cfac68" : "#cfac6833"
                                }}
                                className="rounded-full transition-all duration-500"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductSection;