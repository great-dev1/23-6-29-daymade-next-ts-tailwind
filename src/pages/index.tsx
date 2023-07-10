import Layout from "@/Layout";
import Hero from "@/components/sections/home/Hero";
import Features from "@/components/sections/home/Features";
import CarouselWithText from "@/components/sections/home/CarouselWithText";
import TextWithImage from "@/components/sections/home/TextWithImage";
import HowItWorks from "@/components/sections/home/HowItWorks";
import Prizes from "@/components/sections/home/Prizes";
import Winners from "@/components/sections/home/Winners";
import Plans from "@/components/sections/home/Plans";
import Faq from "@/components/sections/home/Faq";
import Blogs from "@/components/sections/home/Blogs";
import GetToKnow from "@/components/sections/home/GetToKnow";

export default function Home() {
    return (
        <Layout>
            <Hero />
            <Features />
            <CarouselWithText />
            <TextWithImage />
            <HowItWorks />
            <Prizes />
            <Winners />
            <Plans />
            <Faq />
            <Blogs />
            <GetToKnow />
        </Layout>
    );
}
