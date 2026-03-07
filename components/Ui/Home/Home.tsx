import Header from "@/components/Section/Header/Header";
import Hero from "@/components/Section/Home/Hero/Hero";
import About from "@/components/Section/Home/About/About";
import VisionMission from "@/components/Section/Home/About/VisionMission";
import Service from "@/components/Section/Home/Service/Service";
import Product from "@/components/Section/Home/Products/Product";
import Process from "@/components/Section/Home/Process/Process";
import WhyChooseUs from "@/components/Section/Home/WhyChooseUs/WhyChooseUs";
import Contact from "@/components/Section/Home/Contact/Contact";
import InstagramSection from "@/components/Section/Home/Instagram/Instagram";
import Map from "@/components/Section/Home/Map/Map";
import Footer from "@/components/Section/Footer/Footer";
import WhatsAppButton from "@/components/Ui/WhatsAppButton";

const HomeSection = () => {
    return (
        <main>
            <Header />
            <Hero />
            <About />
            <VisionMission />
            <Service />
            <Product />
            <Process />
            <WhyChooseUs />
            <InstagramSection />
            <Map />
            <Contact />
            <Footer />
            <WhatsAppButton />
        </main>
    );
};

export default HomeSection;
