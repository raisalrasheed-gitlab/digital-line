"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    Instagram,
    Facebook,
    Linkedin,
    Twitter,
    Mail,
    Phone,
    MapPin,
    ArrowUpRight,
    Send,
    MessageCircle,
    MessageSquareText
} from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[#041414] text-white py-12 md:py-16 px-[5vw] overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-20">
                    {/* Brand & Contact Info */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="relative w-60 h-12">
                            <Image
                                src="/logo/logo-new.png"
                                alt="Digital Line Logo"
                                fill
                                className="object-contain "
                            />
                        </div>
                        <p className="text-white/60 text-lg leading-relaxed max-w-sm">
                            Digital Line Graphics LLC - Providing excellence in digital printing and creative solutions since 2022.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4 text-white/80 hover:text-[#cfac68] transition-colors cursor-pointer">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                    <MapPin size={20} />
                                </div>
                                <span className="text-sm">
                                    Maliha Road<br />
                                    Muweilah Commercial<br />
                                    Near National Paint Factory<br />
                                    Sharjah, UAE
                                </span>
                            </div>
                            <div className="flex items-start gap-4 text-white/80 hover:text-[#cfac68] transition-colors cursor-pointer">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                    <Phone size={20} />
                                </div>
                                <div className="flex flex-col gap-1 text-sm">
                                    <div className="flex items-center gap-2 group/wa">
                                        <span>+971 6577 8411 | </span>
                                        <a
                                            href="https://wa.me/97167043572"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 text-[#25D366] hover:underline font-bold"
                                        >
                                            <MessageCircle size={14} fill="#25D366" />
                                            +971 6704 3572
                                        </a>
                                    </div>
                                    <span>+971 56161 9111 | +971 50134 6467</span>
                                    <span>+971 50 555 2194</span>
                                </div>
                            </div>
                            <a href="mailto:dlinegraphics@gmail.com" className="flex items-center gap-4 text-white/80 hover:text-[#cfac68] transition-colors cursor-pointer">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                    <Mail size={20} />
                                </div>
                                <span className="text-sm">dlinegraphics@gmail.com</span>

                            </a>    <a href="mailto:digitalline2022@gmail.com" className="flex items-center gap-4 text-white/80 hover:text-[#cfac68] transition-colors cursor-pointer">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                    <MessageSquareText size={20} />
                                </div>

                                <span className="text-sm">digitalline2022@gmail.com</span>
                            </a>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="lg:col-span-2 space-y-8">
                        <h4 className="text-xl font-bold">Services</h4>
                        <ul className="space-y-4 text-white/60">
                            <li><Link href="#services" className="hover:text-[#cfac68] transition-colors">Digital Printing</Link></li>
                            <li><Link href="#services" className="hover:text-[#cfac68] transition-colors">Offset Printing</Link></li>
                            <li><Link href="#services" className="hover:text-[#cfac68] transition-colors">UV Printing</Link></li>
                            <li><Link href="#services" className="hover:text-[#cfac68] transition-colors">Binding Solutions</Link></li>
                            <li><Link href="#services" className="hover:text-[#cfac68] transition-colors">Graphic Design</Link></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2 space-y-8">
                        <h4 className="text-xl font-bold">Quick Links</h4>
                        <ul className="space-y-4 text-white/60">
                            <li><Link href="#about" className="hover:text-[#cfac68] transition-colors">About Us</Link></li>
                            <li><Link href="#products" className="hover:text-[#cfac68] transition-colors">Our Products</Link></li>
                            <li><Link href="#process" className="hover:text-[#cfac68] transition-colors">Our Process</Link></li>
                            <li><Link href="#contact" className="hover:text-[#cfac68] transition-colors">Contact Us</Link></li>
                            <li><Link href="#" className="hover:text-[#cfac68] transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter Card */}
                    {/* <div className="lg:col-span-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-[#cfac68] rounded-[2rem] p-8 md:p-10 space-y-8 relative overflow-hidden group shadow-2xl shadow-[#cfac68]/20"
                        >

                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-black/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />

                            <h3 className="text-3xl md:text-3xl font-bold leading-tight relative z-10 text-black">
                                Subscribe to Our Newsletter.
                            </h3>

                            <div className="space-y-6 relative z-10">
                                <div className="relative">
                                    <input
                                        type="email"
                                        placeholder="Enter email"
                                        className="w-full bg-white rounded-full py-5 px-8 text-black placeholder:text-black/40 outline-none pr-32"
                                    />
                                </div>

                                <div className="flex items-center gap-3 cursor-pointer group/check">
                                    <div className="w-5 h-5 rounded border-2 border-black/20 flex items-center justify-center transition-colors group-hover/check:border-black">
                                        <div className="w-2.5 h-2.5 bg-black scale-0 group-hover/check:scale-100 transition-transform rounded-[1px]" />
                                    </div>
                                    <span className="text-sm font-bold text-black/80">Agree to our <span className="underline">Terms & Condition?</span></span>
                                </div>

                                <button className="w-full sm:w-auto flex items-center justify-between gap-6 bg-black text-white pl-8 pr-2 py-2 rounded-full font-bold transition-all duration-300 hover:bg-white hover:text-black group/btn">
                                    <span className="text-lg">Subscribe</span>
                                    <div className="w-12 h-12 rounded-full bg-[#cfac68] flex items-center justify-center transition-transform duration-300 group-hover/btn:rotate-45">
                                        <ArrowUpRight size={24} className="text-white" />
                                    </div>
                                </button>
                            </div>
                        </motion.div>
                    </div> */}
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-white/40 text-sm">
                        © 2026 Digital Line Graphics LLC. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">
                        <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#cfac68] hover:border-[#cfac68] transition-all duration-300">
                            <Instagram size={18} />
                        </Link>
                        <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#cfac68] hover:border-[#cfac68] transition-all duration-300">
                            <Facebook size={18} />
                        </Link>
                        <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#cfac68] hover:border-[#cfac68] transition-all duration-300">
                            <Linkedin size={18} />
                        </Link>
                        <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#cfac68] hover:border-[#cfac68] transition-all duration-300">
                            <Twitter size={18} />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
