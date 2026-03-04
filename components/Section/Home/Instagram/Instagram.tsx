"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Instagram, Play, Heart, MessageCircle, Send, Bookmark } from "lucide-react";

const reels = [
    {
        id: 1,
        image: "/images/instagram/reel-1.png",
        likes: "1.2k",
        comments: "45",
        title: "Precision Printing in Action"
    },
    {
        id: 2,
        image: "/images/instagram/reel-2.png",
        likes: "856",
        comments: "28",
        title: "Inside the Creative Studio"
    },
    {
        id: 3,
        image: "/images/instagram/reel-3.png",
        likes: "2.4k",
        comments: "112",
        title: "Premium Finish Showcase"
    },
    {
        id: 4,
        image: "/images/instagram/reel-4.png",
        likes: "1.1k",
        comments: "34",
        title: "Excellence in Packaging"
    }
];

const InstagramSection = () => {
    return (
        <section id="instagram" className="py-12 md:py-20 px-[5vw] bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
                    <div className="space-y-6 max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 border border-[#cfac68]/40 rounded-lg bg-[#cfac68]/5"
                        >
                            <span className="text-[#cfac68] font-bold tracking-[0.2em] uppercase text-xs">
                                Digital Line Social
                            </span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-bold text-black leading-tight"
                        >
                            Follow Our Journey <br />
                            <span className="text-black/20">on Instagram.</span>
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center gap-4 px-8 py-4 bg-white border-2 border-transparent rounded-2xl font-bold transition-all duration-500 overflow-hidden"
                        >
                            <div className="absolute inset-0 p-[2px] rounded-2xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]">
                                <div className="absolute inset-0 bg-white rounded-[14px]" />
                            </div>
                            <Instagram className="relative z-10 w-6 h-6 text-[#ee2a7b]" />
                            <span className="relative z-10 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] bg-clip-text text-transparent">
                                @digitallinegraphics
                            </span>
                        </a>
                    </motion.div>
                </div>

                {/* Reels Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reels.map((reel, idx) => (
                        <motion.div
                            key={reel.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative aspect-[9/16] rounded-3xl overflow-hidden bg-gray-100 cursor-pointer"
                        >
                            {/* Reel Background */}
                            <Image
                                src={reel.image}
                                alt={reel.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlays */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                            {/* Play Icon */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                                    <Play className="text-white fill-white w-8 h-8 ml-1" />
                                </div>
                            </div>

                            {/* Bottom Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 space-y-4">
                                <h3 className="text-white font-semibold text-lg line-clamp-2">
                                    {reel.title}
                                </h3>

                                <div className="flex justify-between items-center text-white/90">
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-1.5">
                                            <Heart size={18} className="group-hover:text-red-500 transition-colors" />
                                            <span className="text-sm font-medium">{reel.likes}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <MessageCircle size={18} />
                                            <span className="text-sm font-medium">{reel.comments}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Send size={18} className="hover:text-[#cfac68] transition-colors" />
                                        <Bookmark size={18} className="hover:text-[#cfac68] transition-colors" />
                                    </div>
                                </div>
                            </div>

                            {/* Instagram Icon Badge */}
                            <div className="absolute top-6 left-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                                <Instagram size={20} className="text-white" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InstagramSection;
