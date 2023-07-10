import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

type HowItWorks = {
    image: string;
    title: string;
    description: string;
}[];

const howItWorks: HowItWorks = [
    {
        image: "/images/pick-numbers.svg",
        title: "1. Pick numbers",
        description:
            "Choose from our paid or free weekly membership options and then select 5 lucky numbers",
    },
    {
        image: "/images/match-to-win.svg",
        title: "2. Match to win",
        description:
            "The winning numbers will be randomly drawn every Tuesday & Friday at 5pm",
    },
    {
        image: "/images/choose-your-prize.svg",
        title: "3. Choose your prize",
        description:
            "The more numbers you match, the bigger the prize you can choose – over 200 epic prizes on offer",
    },
];

export default function HowItWorks() {
    return (
        <section className="py-15 bg-green-gradient">
            <div className="container w-[90%] mx-auto text-center">
                <h2 className="mb-6.5 section-title text-white-shadow">
                    How it <span className="text-outline">works</span>
                </h2>

                <Swiper
                    slidesPerView={1}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 36,
                        },
                    }}
                    modules={[Pagination]}
                    className="how-it-works-carousel"
                >
                    {howItWorks.map((el, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col items-center gap-y-2 mb-9 md:mb-0 p-3">
                                <Image
                                    className="w-auto h-7 md:h-[38px]"
                                    src={el.image}
                                    width={104}
                                    height={38}
                                    alt={el.title}
                                />
                                <h3 className="paragraph !font-extrabold">
                                    {el.title}
                                </h3>
                                <p className="paragraph">{el.description}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
