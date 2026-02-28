"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { useRef } from "react";

const steps = [
    {
        id: "01",
        title: "Discovery & Planning",
        description: "The first step in our process is understanding your unique business needs, objectives, and our customer challenges.",
        progress: 38
    },
    {
        id: "02",
        title: "Execution & Delivery",
        description: "Once the plan is in place, our team moves forward with execution, turning strategies into action to deliver results.",
        progress: 41
    },
    {
        id: "03",
        title: "Strategy & Creative Design",
        description: "Crafting visual identities and strategic roadmaps that resonate with your target audience and drive growth.",
        progress: 65
    },
    {
        id: "04",
        title: "Quality Assurance & Launch",
        description: "Rigorous testing and final refinements to ensure every detail is perfect before the official deployment.",
        progress: 100
    }
];

const ProcessStep = ({ step, isLast }: { step: typeof steps[0]; isLast: boolean }) => {
    return (
        <div className="relative flex flex-col items-center">
            {/* Step Card */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full max-w-2xl bg-white rounded-2xl p-6 md:p-16 shadow-xl shadow-black/5 relative group border border-black/[0.03]"
            >
                {/* Large Faint Number */}
                <div className="text-[120px] md:text-[180px] font-bold text-[#cfac68]/10 absolute top-4 left-6 leading-none select-none">
                    {step.id}
                </div>

                <div className="relative z-10">
                    <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
                        {step.title}
                    </h3>
                    <p className="text-black/60 text-lg md:text-xl leading-relaxed max-w-lg font-medium">
                        {step.description}
                    </p>
                </div>



            </motion.div>

            {/* Connecting Arrow Circle */}
            {!isLast && (
                <div className="relative z-20 w-full flex items-center justify-center">
                    {/* Horizontal Decorative Lines */}
                    <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex items-center justify-center gap-0 pointer-events-none">

                        <div className="w-16 h-16 rounded-full  bg-[#f0f7f7] flex-shrink-0" />

                    </div>

                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                        className="relative z-10 w-10 h-10 rounded-full bg-white  flex items-center justify-center text-[#cfac68]"
                    >
                        <ArrowDown size={20} strokeWidth={1.5} />
                    </motion.div>
                </div>
            )}
        </div>
    );
};

const Process = () => {
    return (
        <section id="process" className="py-12 md:py-16 px-[5vw] bg-[#f0f7f7] overflow-hidden relative">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#cfac68]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-white px-6 py-2 rounded-lg shadow-sm mb-8"
                    >
                        <span className="text-[#cfac68] font-bold tracking-[0.2em] uppercase text-xs">
                            Our Process
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-bold text-[#1e293b] leading-[1.1] tracking-tight max-w-[900px] mb-8"
                    >
                        Seamless Process,<br />
                        <span className="text-black/30">Great Results.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-black/60 text-lg md:text-xl max-w-xl mb-12 font-medium"
                    >
                        Developing personalized customer journeys to increase satisfaction and loyalty.
                    </motion.p>

                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="group flex items-center gap-4 bg-[#cfac68] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:bg-[#b8955a] hover:scale-105 active:scale-95 shadow-xl shadow-[#cfac68]/20"
                    >
                        Request a Call
                        <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                            <ArrowUpRight size={18} strokeWidth={2.5} />
                        </div>
                    </motion.button>
                </div>

                {/* Steps List */}
                <div className="flex flex-col gap-0 items-center">
                    {steps.map((step, idx) => (
                        <ProcessStep
                            key={step.id}
                            step={step}
                            isLast={idx === steps.length - 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;