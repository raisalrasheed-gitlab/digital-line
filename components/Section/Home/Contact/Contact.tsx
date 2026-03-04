"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Box, ChevronDown, Send, Quote, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        option: "Business Strategy",
        message: ""
    });

    const testimonials = [
        {
            id: 1,
            rating: "4.8/out of 200",
            quote: "The results we’ve seen after partnering with Digital Line are beyond our expectations. They not only understood our vision but also brought new ideas to the table that have taken our business to the next level. Their expertise and commitment to success make them a trusted.",
            author: "Ralph Edwards",
            role: "Co. Founder",
            image: "/images/about-partner.png"
        },
        {
            id: 2,
            rating: "4.9/out of 200",
            quote: "Working with this team has been a game-changer for our marketing materials. The precision and quality of their printing services are unmatched. They always deliver on time and exceed our quality standards, making them our go-to partner for all things digital.",
            author: "Sarah Jenkins",
            role: "Marketing Director",
            image: "/images/about-partner.png"
        },
        {
            id: 3,
            rating: "5.0/out of 200",
            quote: "Exceptional service and attention to detail. Digital Line Grafics helped us rebrand our entire product line with stunning visuals and high-quality packaging. Their team is professional, creative, and truly cares about the success of their clients.",
            author: "Michael Chen",
            role: "Project Manager",
            image: "/images/about-partner.png"
        }
    ];

    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(timer);
    }, [activeTestimonial]);

    const handleNext = () => {
        setDirection(1);
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setDirection(-1);
        setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 500 : -500,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 500 : -500,
            opacity: 0
        })
    };

    return (
        <section id="contact" className="py-12 md:py-16 px-[5vw] bg-white text-black overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col gap-16 lg:gap-24">
                    {/* Top Section: Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#cfac68]/40 rounded-lg mb-8 bg-[#cfac68]/5">
                            <Box size={18} className="text-[#cfac68]" />
                            <span className="text-[#cfac68] font-bold tracking-[0.2em] uppercase text-xs">
                                Get In Touch
                            </span>
                        </div>

                        <h2 className="text-5xl md:text-6xl font-bold mb-12 leading-[1.1] text-black">
                            Drop us a Line <span className="text-black/40">Here.</span>
                        </h2>

                        <form className="space-y-8 max-w-4xl">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-black/60 ">Full Name *</label>
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="mt-2 w-full bg-black/5 border border-black/10 rounded-xl px-6 py-4 outline-none focus:border-[#cfac68] transition-colors text-black placeholder:text-black/40"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-black/60">Email Address *</label>
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="mt-2 w-full bg-black/5 border border-black/10 rounded-xl px-6 py-4 outline-none focus:border-[#cfac68] transition-colors text-black placeholder:text-black/40"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 -mt-4 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-black/60">Phone number *</label>
                                    <input
                                        type="tel"
                                        placeholder="Phone number"
                                        className="mt-2 w-full bg-black/5 border border-black/10 rounded-xl px-6 py-4 outline-none focus:border-[#cfac68] transition-colors text-black placeholder:text-black/40"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-black/60">Choose a option</label>
                                    <div className="relative mt-2">
                                        <select className="w-full bg-black/5 border border-black/10 rounded-xl px-6 py-4 outline-none appearance-none focus:border-[#cfac68] transition-colors text-black">
                                            <option>Business Strategy</option>
                                            <option>Printing Solutions</option>
                                            <option>Graphic Design</option>
                                        </select>
                                        <ChevronDown size={20} className="absolute right-6 top-1/2 -translate-y-1/2 text-black/40 pointer-events-none" />
                                    </div>
                                </div>
                            </div>

                            <div className="-mt-4">
                                <label className="text-sm font-medium text-black/60">Message here... *</label>
                                <textarea
                                    placeholder="Message here..."
                                    rows={5}
                                    className="mt-2 w-full bg-black/5 border border-black/10 rounded-xl px-6 py-4 outline-none focus:border-[#cfac68] transition-colors resize-none text-black placeholder:text-black/40"
                                />
                            </div>

                            <button className="group flex items-center gap-4 bg-[#cfac68] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:bg-[#b8955a] hover:scale-105 active:scale-95 shadow-xl shadow-[#cfac68]/20 mt-4">
                                Send Message
                                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                                    <ArrowUpRight size={20} strokeWidth={2.5} className="text-white" />
                                </div>
                            </button>
                        </form>
                    </motion.div>

                    {/* Bottom Section: Client Feedback */}
                    <div className="flex flex-col">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-black/5 backdrop-blur-sm border border-black/10 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden"
                        >
                            <h3 className="text-2xl md:text-3xl font-bold mb-8 relative z-10 text-black">
                                Client Feedback <span className="text-black/40">({testimonials[activeTestimonial].rating})</span>
                            </h3>

                            <div className="relative min-h-[300px] md:min-h-[250px]">
                                <AnimatePresence initial={false} custom={direction} mode="wait">
                                    <motion.div
                                        key={activeTestimonial}
                                        custom={direction}
                                        variants={slideVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{
                                            x: { type: "spring", stiffness: 300, damping: 30 },
                                            opacity: { duration: 0.3 }
                                        }}
                                        className="w-full"
                                    >
                                        <div className="mb-12">
                                            <Quote size={64} className="text-[#cfac68] opacity-50 mb-6" />
                                            <p className="text-lg md:text-2xl leading-relaxed text-black/90 italic font-medium">
                                                "{testimonials[activeTestimonial].quote}"
                                            </p>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-8 border-t border-black/10 relative z-10">
                                <div className="flex items-center gap-4">
                                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#cfac68]">
                                        <Image
                                            src={testimonials[activeTestimonial].image}
                                            alt={testimonials[activeTestimonial].author}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-black">{testimonials[activeTestimonial].author}</h4>
                                        <p className="text-black/40">{testimonials[activeTestimonial].role}</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <button
                                        onClick={handlePrev}
                                        className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-black/10 transition-colors"
                                    >
                                        <ChevronLeft size={20} className="text-black" />
                                    </button>
                                    <button
                                        onClick={handleNext}
                                        className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-black/10 transition-colors"
                                    >
                                        <ChevronRight size={20} className="text-black" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
