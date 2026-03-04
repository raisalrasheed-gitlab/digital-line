"use client";

import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

const VisionMission = () => {
    const items = [
        {
            title: "Our Vision",
            content: "To become the foremost designer & printer in the UAE area capable of delivering high quality print jobs for both small & medium enterprises as well as the large industrial organizations in the region.",
            icon: <Eye size={32} />,
            delay: 0.1,
        },
        {
            title: "Our Mission",
            content: "To provide you with the highest-quality products and services possible in a timely fashion and at a competitive price. We promise to listen to you and help you achieve your business goals. We will always be there with honest, expert advice and quick, friendly customer service. Our goal is to meet and exceed your expectations.",
            icon: <Target size={32} />,
            delay: 0.2,
        },
    ];

    return (
        <section className="py-12 md:py-20 px-[5vw] bg-[#f8f9fa]">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: item.delay, ease: "easeOut" }}
                            className="relative group p-8 lg:p-12 bg-white rounded-[2.5rem] border border-black/5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                        >
                            {/* Decorative Background Element */}
                            <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#cfac68]/5 rounded-full blur-3xl group-hover:bg-[#cfac68]/10 transition-colors duration-500" />

                            <div className="relative z-10 flex flex-col gap-6">
                                <div className="w-16 h-16 rounded-2xl bg-black text-[#cfac68] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                                    {item.icon}
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-3xl font-bold text-black tracking-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-lg text-black/70 leading-relaxed">
                                        {item.content}
                                    </p>
                                </div>

                                <div className="w-12 h-1 bg-[#cfac68] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VisionMission;
