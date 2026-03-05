"use client";

import { motion, useInView, animate } from "framer-motion";
import { CheckCircle2, Globe, TrendingUp, Sparkles, Plus } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Counter = ({ value, suffix = "" }: { value: string; suffix?: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (isInView) {
            const numericValue = parseFloat(value);
            const controls = animate(0, numericValue, {
                duration: 2,
                ease: "easeOut",
                onUpdate: (latest) => {
                    setCount(latest);
                },
            });
            return () => controls.stop();
        }
    }, [isInView, value]);

    return (
        <span ref={ref}>
            {value.includes(".") ? count.toFixed(1) : Math.round(count)}
            {suffix}
        </span>
    );
};

const stats = [
    {
        id: "01.",
        title: "Projects Completed.",
        value: "93",
        suffix: "%",
        icon: <CheckCircle2 className="text-[#cfac68]" size={32} />,
        image: "/images/stat-projects.png",
        delay: 0.1
    },
    {
        id: "02.",
        title: "Reach Worldwide",
        value: "20",
        suffix: "M",
        icon: <Globe className="text-[#cfac68]" size={32} />,
        image: "/images/stat-worldwide.png",
        delay: 0.2
    },
    {
        id: "03.",
        title: "Faster Growth",
        value: "8.5",
        suffix: "X",
        icon: <TrendingUp className="text-[#cfac68]" size={32} />,
        image: "/images/stat-growth.png",
        delay: 0.3
    }
];

const WhyChooseUs = () => {
    return (
        <section id="why-choose-us" className="py-16 md:py-24 px-[5vw] bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left: Content */}
                    <div className="lg:col-span-12 xl:col-span-5 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 border border-[#cfac68]/40 rounded-lg bg-[#cfac68]/5"
                        >
                            <span className="text-[#cfac68] font-bold tracking-[0.2em] uppercase text-xs">
                                Why Choose Us
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#061e1e] leading-[1.1]"
                        >
                            We Deliver Excellence <br />
                            <span className="text-black/20">Every Time.</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-black/60 max-w-xl leading-relaxed"
                        >
                            With over two decades of experience, Digital Line Graphics LLC is your trusted partner for premium printing and design. Our commitment to quality and innovation ensures your business stands out.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="relative w-full aspect-[16/9] rounded-[2rem] overflow-hidden shadow-2xl shadow-[#cfac68]/10 group"
                        >
                            <Image
                                src="/images/printing-production.png"
                                alt="Printing Production Facility"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </motion.div>
                    </div>

                    {/* Right: Stats Grid */}
                    <div className="lg:col-span-12 xl:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Highlights Card */}
                        {/* <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="md:col-span-2 lg:col-span-1 bg-[#cfac68] rounded-[2rem] p-8 relative overflow-hidden group shadow-xl shadow-[#cfac68]/20 flex flex-col justify-between min-h-[300px]"
                        >


                            <div className="flex justify-between items-start relative z-10">
                                <div className="flex -space-x-4">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                                            <Image
                                                src={`/images/user-${i}.jpg`}
                                                alt={`User ${i}`}
                                                width={48}
                                                height={48}
                                                className="object-cover"
                                            />
                                        </div>
                                    ))}
                                    <div className="w-12 h-12 rounded-full border-2 border-white bg-[#061e1e] flex items-center justify-center text-white">
                                        <Plus size={20} />
                                    </div>
                                </div>
                                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white animate-pulse">
                                    <Sparkles size={24} />
                                </div>
                            </div>

                            <div className="relative z-10 mt-auto">
                                <h3 className="text-3xl font-bold text-white leading-tight">
                                    We have 100+ happy <br /> customer.
                                </h3>
                            </div>
                        </motion.div> */}

                        {/* Stat Cards */}
                        <div className="grid grid-cols-1 gap-6">
                            {stats.map((stat) => (
                                <motion.div
                                    key={stat.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: stat.delay }}
                                    className="relative bg-white border border-[#061e1e]/5 rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col justify-between overflow-hidden min-h-[220px]"
                                >
                                    {/* background image */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 0.2 }}
                                        whileHover={{ opacity: 0.5 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: stat.delay + 0.3, duration: 1 }}
                                        className="absolute inset-0 transition-opacity duration-700 pointer-events-none"
                                    >
                                        <Image
                                            src={stat.image}
                                            alt={stat.title}
                                            fill
                                            className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-transparent" />
                                    </motion.div>

                                    <div className="flex justify-between items-start relative z-10">
                                        <div className="w-14 h-14 rounded-full bg-[#061e1e]/5 flex items-center justify-center group-hover:bg-[#cfac68]/20 transition-colors duration-500">
                                            {stat.icon}
                                        </div>
                                        <span className="text-black/10 font-bold text-2xl group-hover:text-[#cfac68]/20 transition-colors translate-y-[-5px] pr-2">
                                            {stat.id}
                                        </span>
                                    </div>
                                    <div className="mt-6 relative z-10">
                                        <p className="text-black/40 font-medium mb-1 group-hover:text-[#061e1e]/60 transition-colors">{stat.title}</p>
                                        <h4 className="text-4xl font-bold text-[#061e1e] group-hover:text-[#cfac68] transition-colors duration-500">
                                            <Counter value={stat.value} suffix={stat.suffix} />
                                        </h4>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
