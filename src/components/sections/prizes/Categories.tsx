import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

type Categories = {
    title: string;
    url: string;
    image: string;
    icon?: string;
    isActive?: boolean;
}[];

const categories: Categories = [
    {
        title: "Trips",
        url: "#",
        image: "/images/trips-bg.png",
        icon: "/images/trips-icon.png",
        isActive: true,
    },
    {
        title: "Lifestyle",
        url: "#",
        image: "/images/lifestyle-bg.jfif",
        icon: "/images/lifestyle-icon.png",
    },
    {
        title: "Tech",
        url: "#",
        image: "/images/tech-bg.jfif",
        icon: "/images/tech-icon.png",
    },
    {
        title: "Experiences",
        url: "#",
        image: "/images/experiences-bg.webp",
        icon: "/images/experiences-icon.png",
    },
    {
        title: "Family",
        url: "#",
        image: "/images/family-bg.jfif",
        icon: "/images/family-icon.png",
    },
    {
        title: "All",
        url: "#",
        image: "/images/trophy-icon.svg",
    },
    {
        title: "Wish List",
        url: "#",
        image: "/images/heart-icon.svg",
    },
];

export default function Categories() {
    return (
        <section className="max-w-[700px] mx-auto mt-[110px] pt-5 pb-3 px-5">
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={24}
                breakpoints={{
                    768: {
                        slidesPerView: 7,
                    },
                }}
                className="categories-carousel"
            >
                {categories.map((category, index) => (
                    <SwiperSlide key={index}>
                        <Link
                            href={category.url}
                            className="flex flex-col items-center gap-y-"
                        >
                            <div
                                className={`relative flex items-center justify-center my-1.5 rounded-full overflow-hidden ${
                                    category.isActive
                                        ? "w-16 h-16 box-green-shadow"
                                        : "w-15 h-15"
                                }`}
                            >
                                <Image
                                    className={`absolute top-0 left-0 w-full h-full object-cover ${
                                        category.isActive ? "brightness-50" : ""
                                    }`}
                                    src={category.image}
                                    width={66}
                                    height={66}
                                    alt={category.title}
                                />

                                {category.isActive && category.icon && (
                                    <Image
                                        className="relative z-10 max-w-[50px] max-h-[50px]"
                                        src={category.icon}
                                        width={55}
                                        height={55}
                                        alt={category.title}
                                    />
                                )}
                            </div>

                            <h6
                                className={`text-center text-xs font-bold ${
                                    category.isActive ? "text-green-shadow" : ""
                                }`}
                            >
                                {category.title}
                            </h6>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
