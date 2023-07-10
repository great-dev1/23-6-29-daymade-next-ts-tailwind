import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Button from "@/components/elements/Button";

type Quotes = {
    author: string;
    description: string;
}[];

const quotes: Quotes = [
    {
        author: "Naomi",
        description:
            "Out of all the draws so far, I have only had 1 that I didn't win on",
    },
    {
        author: "Karin",
        description:
            "Thank you Daymade for being honest, fun and adding a bit of sparkle to the week!!",
    },
    {
        author: "Lussy",
        description:
            "I managed to win vouchers for £150 twice & even one of the £2500 prizes 🎉",
    },
    {
        author: "Misha",
        description: "I’ve never won anything before but I’ve won 3 times!",
    },
];

export default function Winners() {
    return (
        <section>
            <Image
                className="w-full h-25 xl:h-36 2xl:h-48 object-cover"
                src="/images/winner-grid-upper.webp"
                width={1600}
                height={231}
                alt="winners"
            />

            <div className="container mx-auto px-5 py-12 md:py-15 text-center">
                <h2 className="mb-3.5 section-title">
                    56,302
                    <br />
                    <p className="text-green-underline">
                        Winners to<span className="text-outline">date</span>
                    </p>
                </h2>

                <p className="mb-7 paragraph">Will you be next?</p>

                <div className="mb-6 pl-5 lg:pl-0">
                    <Swiper
                        pagination={{
                            clickable: true,
                        }}
                        slidesPerView={"auto"}
                        spaceBetween={12}
                        breakpoints={{
                            1024: {
                                slidesPerView: 4,
                            },
                        }}
                        modules={[Pagination]}
                        className="winners-carousel"
                    >
                        {quotes.map((quote, index) => (
                            <SwiperSlide
                                key={index}
                                className="mb-15 lg:mb-6 px-3 py-6 border border-[#E1E1E1] rounded shadow-md"
                            >
                                <div className="flex flex-col h-full paragraph">
                                    <Image
                                        className="w-full h-7.5 mb-3"
                                        src="/images/quote.svg"
                                        width={70}
                                        height={52}
                                        alt="quotes"
                                    />
                                    <p className="mb-4 font-extrabold">
                                        {quote.description}
                                    </p>
                                    <p className="mb-4 italic">
                                        &ndash; {quote.author}
                                    </p>
                                    <Image
                                        className="w-full h-5 mt-auto"
                                        src="/images/trustpilot.svg"
                                        width={66}
                                        height={14}
                                        alt="quotes"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <Link href="#">
                    <Button className="w-[220px]">Enter now</Button>
                </Link>
            </div>

            <Image
                className="w-full h-50 md:h-auto object-cover"
                src="/images/winner-grid-lower.webp"
                width={1600}
                height={462}
                alt="winners"
            />
        </section>
    );
}
