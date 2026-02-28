import Header from "@/components/Section/Header/Header";
import Hero from "@/components/Section/Home/Hero/Hero";
import About from "@/components/Section/Home/About/About";
import Service from "@/components/Section/Home/Service/Service";
import Product from "@/components/Section/Home/Products/Product";
import Process from "@/components/Section/Home/Process/Process";

const HomeSection = () => {
    return (
        <main>
            <Header />
            <Hero />
            <About />
            <Service />
            <Product />
            <Process />
        </main>
    );
};

export default HomeSection;
