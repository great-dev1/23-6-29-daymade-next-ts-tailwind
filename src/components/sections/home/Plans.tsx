import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Button from "@/components/elements/Button";

type Plans = {
    url: string;
    title: string;
    description: string;
    buttonText: string;
    underlineColor: string;
    isDiscount?: boolean;
}[];

const plans: Plans = [
    {
        url: "#",
        title: "Premium",
        description: "Best chances & prize selection",
        buttonText: "Play For £3",
        underlineColor: "green",
        isDiscount: true,
    },
    {
        url: "#",
        title: "Lite",
        description: "Great chances & prize selection",
        buttonText: "Play For £1.50",
        underlineColor: "orange",
    },
    {
        url: "#",
        title: "Postal",
        description: "No purchase necessary",
        buttonText: "Enter by post",
        underlineColor: "pink",
    },
];

export default function Plans() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <section className="py-12 bg-green-gradient">
            <div className="container mx-auto px-5 text-center">
                <h2 className="mb-3 section-title text-white-shadow">
                    Choose your <span className="text-outline">plan</span>
                </h2>

                <p className="max-w-[400px] mx-auto mb-9 paragraph">
                    Select from our paid and free membership options.{" "}
                    <span className="font-extrabold">Cancel anytime</span>
                </p>

                <div className="mb-6 pl-5 lg:pl-0">
                    <Swiper
                        pagination={{
                            clickable: true,
                        }}
                        slidesPerView={"auto"}
                        spaceBetween={12}
                        breakpoints={{
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 24,
                            },
                        }}
                        modules={[Pagination]}
                        className="plans-carousel"
                    >
                        {plans.map((plan, index) => (
                            <SwiperSlide
                                key={index}
                                className="relative mb-14 lg:mb-4 px-7.5 py-12 rounded-10 bg-white shadow-md"
                            >
                                <Link
                                    href={plan.url}
                                    className="flex flex-col items-center h-full"
                                >
                                    <h3
                                        className={`inline-block text-32 lg:text-45 font-black uppercase text-outline text-${plan.underlineColor}-underline`}
                                    >
                                        {plan.title}
                                    </h3>

                                    <p className="m-3 lg:m-4 text-xl font-extrabold">
                                        {plan.description}
                                    </p>

                                    <Button className="w-[200px] mt-3">
                                        {plan.buttonText}
                                    </Button>
                                </Link>

                                {plan.isDiscount && (
                                    <Image
                                        className="absolute top-0 left-0"
                                        src="/images/discount.png"
                                        width={90}
                                        height={90}
                                        alt="discount"
                                    />
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <Link href="#" className="inline-block mb-10 paragraph">
                    <span className="font-extrabold">TRY FOR FREE</span>
                    <span className="text-lg"> | </span>
                    toughest odds, jackpot only{" "}
                    <i className="fa-solid fa-chevron-right"></i>
                </Link>

                <button
                    className="flex flex-col items-center gap-y-2 mx-auto"
                    onClick={scrollToTop}
                >
                    <span className="flex items-center justify-center w-10 h-10 rounded-full border-2 text-xl">
                        <i className="fa-solid fa-chevron-up"></i>
                    </span>
                    <span className="paragraph !font-bold uppercase">
                        Return to top
                    </span>
                </button>
            </div>
        </section>
    );
}
