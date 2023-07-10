import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Button from "@/components/elements/Button";

type WinPrizesSlides = {
    title: string;
    image: string;
}[];

const winPrizesSlides: WinPrizesSlides = [
    {
        title: "/images/win-trips-and-stays.svg",
        image: "/images/win-trips-and-stays-bg.webp",
    },
    {
        title: "/images/win-tech-prizes.svg",
        image: "/images/win-tech-prizes-bg.webp",
    },
    {
        title: "/images/win-lifestyle-prizes.svg",
        image: "/images/win-lifestyle-prizes-bg.webp",
    },
    {
        title: "/images/win-experiences.svg",
        image: "/images/win-experiences-bg.webp",
    },
];

export default function CarouselWithText() {
    return (
        <section className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-6 px-[6%] py-[12%] md:py-[15%] md:pr-[10%] md:pl-[7%]">
                <div className="h-full flex flex-col items-center md:items-start justify-center gap-y-4 text-center md:text-left">
                    <h2 className="section-title">
                        Win prizes
                        <br />
                        <p className="text-green-underline">
                            every <span className="text-outline">week</span>
                        </p>
                    </h2>

                    <p className="paragraph">
                        Fancy chasing the Northern Lights in Iceland or soaking
                        up some sun with your family in the Maldives? Or is a
                        California roadtrip with your bestie more your thing?
                    </p>

                    <p className="paragraph">
                        Travel plans already sorted? No worries! We got you
                        covered with a great selection of prizes (big and small)
                        from your favourite lifestyle, fashion, beauty and tech
                        brands.
                    </p>

                    <p className="paragraph">
                        Just enter DAYMADE&apos;s weekly prize draw for a chance
                        to win and choose from 200+ prizes. Join the fun every
                        Tuesday & Friday at 5pm.
                    </p>

                    <Link href="/enter" className="w-3/5 max-w-[250px] mt-3">
                        <Button className="w-full">Enter now</Button>
                    </Link>
                </div>
            </div>

            <div className="md:order-first col-span-12 md:col-span-6 h-full min-h-[220px] md:min-h-[580px]">
                <Swiper
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination]}
                    className="win-prizes-carousel"
                >
                    {winPrizesSlides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative w-full h-full flex items-center justify-center">
                                <Image
                                    className="relative z-10 max-w-[70%] max-h-[50%] md:max-h-[40%]"
                                    src={slide.title}
                                    width={700}
                                    height={500}
                                    alt={slide.title}
                                />

                                <Image
                                    className="absolute z-0 top-0 left-0 w-full h-full object-cover"
                                    src={slide.image}
                                    width={1500}
                                    height={1120}
                                    alt={slide.title}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
