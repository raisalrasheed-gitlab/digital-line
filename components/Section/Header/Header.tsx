"use client";

import Image from "next/image";
import { Menu } from "lucide-react";

const Header = () => {
    return (
        <header className="fixed h-20 top-0 left-0 right-0 z-50 flex items-center justify-between  py-4 bg-white backdrop-blur-md border-b border-white/10">
            <div className="flex items-center justify-between pl-2 pr-2  w-full h-full">
                <div className="relative w-[80%] sm:w-[60%] md:w-[35%] lg:w-[25%]  h-full  overflow-hidden">
                    <Image
                        src="/logo/logo-new.png"
                        alt="Bexon Logo"
                        fill
                        className="object-cover"
                    />
                </div>



                <button className="bg-[#cfac68] p-3 rounded-xl text-white 
hover:opacity-90
transition-all duration-300
active:scale-95">

                    <Menu className="text-[#6b7071]" size={24} />

                </button>
            </div>
        </header>
    );
};

export default Header;
