"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const Map = () => {
    return (
        <section className="py-12 md:py-16 px-[5vw] bg-white text-black overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#cfac68]/40 rounded-lg mb-8 bg-[#cfac68]/5">
                        <MapPin size={18} className="text-[#cfac68]" />
                        <span className="text-[#cfac68] font-bold tracking-[0.2em] uppercase text-xs">
                            Find Us
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-12 leading-[1.1] text-black">
                        Our <span className="text-black/40">Location.</span>
                    </h2>

                    <div className="relative w-full h-[450px] rounded-3xl overflow-hidden border border-black/10 shadow-2xl shadow-black/5">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28854.58666526976!2d55.42028641327312!3d25.310139031103475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f19c13eebaf%3A0xdc335de3c3172998!2sDigital%20Line%20Graphics%20LLC!5e0!3m2!1sen!2sin!4v1772866446691!5m2!1sen!2sin"
                            className="w-full h-full border-0"
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Map;
