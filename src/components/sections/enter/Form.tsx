import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Switch from "@/components/elements/Switch";
import Button from "@/components/elements/Button";

type Categories = {
    title: string;
    url: string;
    image: string;
}[];

const categories: Categories = [
    {
        title: "Trips & stays",
        url: "#",
        image: "/images/trips-and-stays.webp",
    },
    {
        title: "Tech prizes",
        url: "#",
        image: "/images/tech-prizes.webp",
    },
    {
        title: "Lifestyle prizes",
        url: "#",
        image: "/images/lifestyle-prizes.webp",
    },
    {
        title: "Experiences",
        url: "#",
        image: "/images/experiences.webp",
    },
];

type Entries = {
    title: string;
    price: string;
    isPopular?: boolean;
}[];

const entries: Entries = [
    {
        title: "1 Entry",
        price: "£3",
    },
    {
        title: "2 Entries",
        price: "£2.75 each",
        isPopular: true,
    },
    {
        title: "3 Entries",
        price: "£2.60 each",
    },
    {
        title: "4 Entries",
        price: "£2.50 each",
    },
];

type OrderSummaries = {
    image: string;
    description: string;
}[];

const orderSummaries: OrderSummaries = [
    {
        image: "/images/ticket-icon.svg",
        description: "1 entry per draw",
    },
    {
        image: "/images/calendar-icon.svg",
        description: "1 draw per week (Tuesday)",
    },
    {
        image: "/images/tree-planted-icon.svg",
        description: "1 tree planted per week",
    },
];

export default function Form() {
    return (
        <section className="container mx-auto lg:-mt-50 px-5 pb-12">
            <div className="flex flex-col lg:flex-row lg:gap-x-22">
                <div className="lg:w-[350px] py-12 lg:pt-64">
                    <div className="w-max mx-auto mb-3">
                        <h3 className="text-center text-lg md:text-xl font-bold">
                            Pick numbers, <br />
                            match to win, <br />& choose from
                        </h3>
                        <Image
                            className="ml-auto translate-x-[100%]"
                            src="/images/arrow-green.svg"
                            width={30}
                            height={43}
                            alt="arrow"
                        />
                    </div>

                    <>
                        <div className="lg:hidden">
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
                                {categories.map((category, index) => (
                                    <SwiperSlide key={index}>
                                        <Link
                                            href={category.url}
                                            className="relative flex items-center justify-center h-40 md:h-56 rounded-10 bg-gray overflow-hidden"
                                        >
                                            <h3 className="relative z-10 text-center text-28 font-black uppercase text-white text-dark-shadow">
                                                {category.title}
                                            </h3>
                                            <Image
                                                className="absolute top-0 left-0 w-full h-full object-cover"
                                                src={category.image}
                                                width={350}
                                                height={150}
                                                alt={category.title}
                                            />
                                        </Link>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        <div className="hidden lg:flex flex-col gap-y-3">
                            {categories.map((category, index) => (
                                <Link
                                    key={index}
                                    href={category.url}
                                    className="relative flex items-center justify-center h-[150px] rounded-10 bg-gray overflow-hidden"
                                >
                                    <h3 className="relative z-10 text-center text-28 font-black uppercase text-white text-dark-shadow">
                                        {category.title}
                                    </h3>
                                    <Image
                                        className="absolute top-0 left-0 w-full h-full object-cover"
                                        src={category.image}
                                        width={350}
                                        height={150}
                                        alt={category.title}
                                    />
                                </Link>
                            ))}
                        </div>
                    </>
                </div>

                <div className="relative flex-grow md:px-12.5 md:py-15 md:rounded-10 bg-white md:shadow-md">
                    <span className="hidden lg:block absolute top-0 left-[50%] px-7.5 py-2.5 rounded-md text-xs font-semibold uppercase text-white bg-gray -translate-x-[50%] -translate-y-3">
                        50% off 1st entry
                    </span>

                    <div className="flex flex-col gap-y-5 text-center">
                        <h2 className="self-center section-title text-green-underline">
                            Enter <span className="text-outline">now</span>
                        </h2>

                        <div>
                            <h3 className="mb-2.5 text-lg md:text-xl font-bold">
                                Select your weekly entries
                            </h3>
                            <p className="paragraph">
                                The more entries, the more chances to win!
                            </p>
                        </div>

                        <div className="grid grid-cols-12 gap-3">
                            {entries.map((entry, index) => (
                                <button
                                    key={index}
                                    className="col-span-6 relative py-4 border-3 border-lightgray rounded font-bold text-gray/60"
                                >
                                    <h4 className="mb-1.5 text-lg md:text-xl uppercase">
                                        {entry.title}
                                    </h4>
                                    <p className="text-sm italic">
                                        {entry.price}
                                    </p>

                                    {entry.isPopular && (
                                        <span className="absolute top-0 left-[50%] px-3 py-1 md:py-1.5 rounded-full text-10 md:text-xs font-bold uppercase text-white bg-gray -translate-x-[50%] -translate-y-[50%]">
                                            Popular
                                        </span>
                                    )}
                                </button>
                            ))}
                        </div>

                        <div className="px-5 md:px-7 py-9 border-3 border-lightgray rounded-10">
                            <h3 className="text-lg md:text-xl font-bold">
                                Choose your lucky numbers
                            </h3>

                            <ul className="py-6 border-b-2 border-lightgray">
                                <li className="flex items-center justify-center gap-x-2">
                                    <button className="flex items-center justify-center w-[38px] h-[38px] md:w-[52px] md:h-[52px] rounded-full bg-orange">
                                        <Image
                                            className="w-5 md:w-6.5"
                                            src="/images/shuffle-entry.svg"
                                            width={26}
                                            height={24}
                                            alt="shuffle entry"
                                        />
                                    </button>

                                    {[...Array(4)].map((el, index) => (
                                        <button
                                            key={index}
                                            className="flex items-center justify-center w-10 h-10 md:w-14 md:h-14 border-2 border-gray rounded-full text-32 font-medium"
                                        >
                                            +
                                        </button>
                                    ))}

                                    <button className="flex items-center justify-center w-10 h-10 md:w-14 md:h-14 border-2 border-lightgreen rounded-full text-32 font-medium text-lightgreen">
                                        +
                                    </button>
                                </li>
                            </ul>

                            <button className="mt-6 paragraph !font-bold">
                                <h4 className="mb-3.5 uppercase underline">
                                    Add another entry
                                </h4>
                                <span className="px-3 py-1.5 rounded-full bg-lightgreen">
                                    & save 50p per entry
                                </span>
                            </button>
                        </div>

                        <div className="px-7 py-3 border-3 border-lightgray rounded-10">
                            <h3 className="mb-6 text-lg md:text-xl font-bold">
                                Which draw days?
                            </h3>

                            <div className="flex items-center justify-around paragraph !font-bold">
                                <div className="flex items-center gap-x-2.5">
                                    <Switch />
                                    <span>Tuesday</span>
                                </div>

                                <div className="flex items-center gap-x-2.5">
                                    <Switch checked />
                                    <span>Friday</span>
                                </div>
                            </div>
                        </div>

                        <div className="px-5 py-9 md:px-9 border-3 border-lightgray rounded-10">
                            <h3 className="mb-5 text-lg md:text-xl font-bold">
                                Order summary
                            </h3>

                            <div className="py-2.5 border-b-2 border-lightgray">
                                <ul className="w-max mx-auto">
                                    {orderSummaries.map((summary, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center gap-x-3.5 mb-3.5"
                                        >
                                            <Image
                                                className="w-5"
                                                src={summary.image}
                                                width={20}
                                                height={20}
                                                alt={summary.description}
                                            />
                                            <p className="paragraph">
                                                {summary.description}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-6 paragraph">
                                <div className="flex items-center justify-between mb-1.5">
                                    <p className="font-bold">
                                        Weekly subscription
                                    </p>
                                    <p>
                                        £3{" "}
                                        <span className="italic">/ week</span>
                                    </p>
                                </div>

                                <div className="flex items-center justify-between mb-7.5">
                                    <p className="font-bold">This week</p>
                                    <p>
                                        <del>£3</del> <span>£1.50</span>
                                    </p>
                                </div>

                                <p className="font-extrabold">
                                    👋 Cancel anytime 👋
                                </p>
                            </div>
                        </div>

                        <Button className="w-full">Secure checkout</Button>

                        <Link
                            href="#"
                            className="text-xs font-extrabold underline hover:text-black duration-300"
                        >
                            Or... enter by post
                        </Link>
                    </div>
                </div>
            </div>

            <Link
                href="#"
                className="flex items-center gap-x-3 w-max mx-auto mt-10 text-15 md:text-lg font-bold"
            >
                <i className="fa-solid fa-chevron-left"></i>
                <span>Back</span>
            </Link>
        </section>
    );
}
