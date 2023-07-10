import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, HashNavigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Button from "@/components/elements/Button";

type Prizes = {
    image: string;
    title: string;
    description: string;
    matchCount: number;
    bonus: boolean;
    isBoosted?: boolean;
    items: {
        image: string;
        title: string;
        description: string;
    }[];
}[];

const prizes: Prizes = [
    {
        image: "/images/daymaker-boost.png",
        title: "Daymaker",
        description: "worth up to £100k",
        matchCount: 4,
        bonus: true,
        isBoosted: true,
        items: [
            {
                image: "/images/boost-1.jpg",
                title: "Win a live-in camper van",
                description: "+ £20,000 spending money!",
            },
            {
                image: "/images/boost-2.jpg",
                title: "Win a live-in camper van",
                description: "+ £20,000 spending money!",
            },
            {
                image: "/images/boost-3.jpg",
                title: "Win a live-in camper van",
                description: "+ £20,000 spending money!",
            },
            {
                image: "/images/boost-4.jpg",
                title: "Win a live-in camper van",
                description: "+ £20,000 spending money!",
            },
            {
                image: "/images/boost-5.jpg",
                title: "Win a live-in camper van",
                description: "+ £20,000 spending money!",
            },
            {
                image: "/images/boost-6.jpg",
                title: "Win a live-in camper van",
                description: "+ £20,000 spending money!",
            },
            {
                image: "/images/boost-7.jpg",
                title: "Win a live-in camper van",
                description: "+ £20,000 spending money!",
            },
            {
                image: "/images/boost-8.jpg",
                title: "Win a live-in camper van",
                description: "+ £20,000 spending money!",
            },
        ],
    },
    {
        image: "/images/daymaker.png",
        title: "Daymaker",
        description: "worth up to £25k",
        matchCount: 4,
        bonus: true,
        items: [
            {
                image: "/images/daymaker-1.jpg",
                title: "Your Year's Travel Plans Covered",
                description: "Where will £25,000 take you?",
            },
            {
                image: "/images/daymaker-2.jpg",
                title: "Your Year's Travel Plans Covered",
                description: "Where will £25,000 take you?",
            },
            {
                image: "/images/daymaker-3.jpg",
                title: "Your Year's Travel Plans Covered",
                description: "Where will £25,000 take you?",
            },
            {
                image: "/images/daymaker-4.jpg",
                title: "Your Year's Travel Plans Covered",
                description: "Where will £25,000 take you?",
            },
            {
                image: "/images/daymaker-5.jpg",
                title: "Your Year's Travel Plans Covered",
                description: "Where will £25,000 take you?",
            },
        ],
    },
    {
        image: "/images/diamond.png",
        title: "Diamond",
        description: "worth up to £10k",
        matchCount: 4,
        bonus: false,
        items: [
            {
                image: "/images/diamond-1.jpg",
                title: "7-night Disney Cruise",
                description:
                    "Take the Caribbean on this bucket-list family adventure",
            },
            {
                image: "/images/diamond-2.jpg",
                title: "7-night Disney Cruise",
                description:
                    "Take the Caribbean on this bucket-list family adventure",
            },
            {
                image: "/images/diamond-3.jpg",
                title: "7-night Disney Cruise",
                description:
                    "Take the Caribbean on this bucket-list family adventure",
            },
            {
                image: "/images/diamond-4.jpg",
                title: "7-night Disney Cruise",
                description:
                    "Take the Caribbean on this bucket-list family adventure",
            },
            {
                image: "/images/diamond-5.jpg",
                title: "7-night Disney Cruise",
                description:
                    "Take the Caribbean on this bucket-list family adventure",
            },
        ],
    },
    {
        image: "/images/platinum.png",
        title: "Platinum",
        description: "worth up to £2k",
        matchCount: 3,
        bonus: true,
        items: [
            {
                image: "/images/platinum-1.jpg",
                title: "Family Exclusive: Weekend Getaway to The Efteling",
                description: "TExplore the most magical theme park in Europe",
            },
            {
                image: "/images/platinum-2.jpg",
                title: "Family Exclusive: Weekend Getaway to The Efteling",
                description: "TExplore the most magical theme park in Europe",
            },
            {
                image: "/images/platinum-3.jpg",
                title: "Family Exclusive: Weekend Getaway to The Efteling",
                description: "TExplore the most magical theme park in Europe",
            },
            {
                image: "/images/platinum-4.jpg",
                title: "Family Exclusive: Weekend Getaway to The Efteling",
                description: "TExplore the most magical theme park in Europe",
            },
            {
                image: "/images/platinum-5.jpg",
                title: "Family Exclusive: Weekend Getaway to The Efteling",
                description: "TExplore the most magical theme park in Europe",
            },
        ],
    },
    {
        image: "/images/gold.png",
        title: "Gold",
        description: "worth up to £300",
        matchCount: 3,
        bonus: false,
        items: [
            {
                image: "/images/gold-1.jpg",
                title: "Le Creuset",
                description: "Mix & Match",
            },
            {
                image: "/images/gold-2.jpg",
                title: "Le Creuset",
                description: "Mix & Match",
            },
            {
                image: "/images/gold-3.jpg",
                title: "Le Creuset",
                description: "Mix & Match",
            },
            {
                image: "/images/gold-4.jpg",
                title: "Le Creuset",
                description: "Mix & Match",
            },
            {
                image: "/images/gold-5.jpg",
                title: "Le Creuset",
                description: "Mix & Match",
            },
        ],
    },
    {
        image: "/images/silver.png",
        title: "Silver",
        description: "worth up to £50",
        matchCount: 2,
        bonus: true,
        items: [
            {
                image: "/images/silver-1.png",
                title: "Spa Day with Afternoon Tea",
                description: "For 1",
            },
            {
                image: "/images/silver-2.png",
                title: "Spa Day with Afternoon Tea",
                description: "For 1",
            },
            {
                image: "/images/silver-3.png",
                title: "Spa Day with Afternoon Tea",
                description: "For 1",
            },
            {
                image: "/images/silver-4.png",
                title: "Spa Day with Afternoon Tea",
                description: "For 1",
            },
            {
                image: "/images/silver-5.png",
                title: "Spa Day with Afternoon Tea",
                description: "For 1",
            },
        ],
    },
    {
        image: "/images/bronze.png",
        title: "Bronze",
        description: "worth up to £25",
        matchCount: 2,
        bonus: false,
        items: [
            {
                image: "/images/bronze-1.png",
                title: "Etsy Gift Card",
                description: "£15 to spend on handmade goodies",
            },
            {
                image: "/images/bronze-2.png",
                title: "Etsy Gift Card",
                description: "£15 to spend on handmade goodies",
            },
            {
                image: "/images/bronze-3.png",
                title: "Etsy Gift Card",
                description: "£15 to spend on handmade goodies",
            },
            {
                image: "/images/bronze-4.png",
                title: "Etsy Gift Card",
                description: "£15 to spend on handmade goodies",
            },
            {
                image: "/images/bronze-5.png",
                title: "Etsy Gift Card",
                description: "£15 to spend on handmade goodies",
            },
        ],
    },
];

export default function Prizes() {
    return (
        <section className="container mx-auto lg:mb-9 px-5 lg:px-0 py-12 md:py-15">
            <div className="mb-6 text-center">
                <h2 className="mb-3.5 section-title">
                    What prizes <br />
                    <p className="text-green-underline">
                        can I <span className="text-outline">win?</span>
                    </p>
                </h2>
                <p className="max-w-[700px] mx-auto paragraph">
                    The more numbers you match in our weekly draw, the bigger
                    the prize you can choose. Check out our collection of over
                    200 epic prizes below.
                </p>
            </div>

            <ul>
                {prizes.map((prize, index) => (
                    <li key={index} className="py-5">
                        <div className="flex gap-x-2 md:gap-x-3 mb-5">
                            <Image
                                className="flex-none w-[45px] md:w-[55px]"
                                src={prize.image}
                                width={55}
                                height={55}
                                alt={prize.title}
                            />

                            <div className="flex-grow grid grid-cols-12">
                                <p className="col-span-6 flex items-center paragraph">
                                    <span className="font-black uppercase">
                                        {prize.title}
                                    </span>
                                    {prize.isBoosted && (
                                        <span className="italic">boost</span>
                                    )}
                                </p>

                                <div className="col-span-6 flex items-center justify-end gap-x-2">
                                    {[...Array(prize.matchCount)].map(
                                        (el, index) => (
                                            <span
                                                key={index}
                                                className="w-2.5 h-2.5 rounded-full bg-gray"
                                            ></span>
                                        )
                                    )}
                                    {prize.bonus && (
                                        <>
                                            <span className="font-bold">+</span>
                                            <span
                                                className={`w-2.5 h-2.5 rounded-full border-2 bg-transparent ${
                                                    prize.isBoosted
                                                        ? "border-pink"
                                                        : "border-gray"
                                                }`}
                                            ></span>
                                        </>
                                    )}
                                </div>

                                <p className="col-span-6 flex items-center paragraph !font-bold italic">
                                    {prize.description}
                                </p>

                                <p className="col-span-6 flex items-center justify-end gap-x-0.5 text-13 font-bold text-right">
                                    Match {prize.matchCount}
                                    {prize.bonus && <span>+ bonus</span>}
                                </p>
                            </div>
                        </div>

                        <div className="pl-5 md:pl-0">
                            <Swiper
                                navigation={true}
                                hashNavigation={{
                                    watchState: true,
                                }}
                                slidesPerView={"auto"}
                                slidesPerGroupSkip={1}
                                spaceBetween={12}
                                breakpoints={{
                                    768: {
                                        slidesPerGroup: 2,
                                    },
                                    1024: {
                                        slidesPerGroup: 3,
                                    },
                                }}
                                modules={[Navigation, HashNavigation]}
                                className="prizes-carousel"
                            >
                                {prize.items.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <Link href="/prizes">
                                            <div className="relative h-[250px] rounded-2xl overflow-hidden bg-black">
                                                <Image
                                                    className="w-full h-full object-cover opacity-80"
                                                    src={item.image}
                                                    width={250}
                                                    height={250}
                                                    alt={item.title}
                                                />
                                                <span className="absolute top-2 right-3 text-3xl text-white">
                                                    +
                                                </span>
                                            </div>

                                            <div className="paragraph p-2 hover:text-black duration-300">
                                                <h4 className="mb-1.5 font-extrabold">
                                                    {item.title}
                                                </h4>
                                                <p className="font-bold">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </Link>
                                    </SwiperSlide>
                                ))}

                                <SwiperSlide className="my-auto">
                                    <Link
                                        href="#"
                                        className="flex items-center gap-x-2 px-5 py-3 font-bold"
                                    >
                                        <span className="text-sm italic">
                                            See more
                                        </span>
                                        <i className="fa-solid fa-chevron-right"></i>
                                    </Link>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </li>
                ))}
            </ul>

            <div className="md:mx-10 pt-8 mb:pt-10 border-t-2 border-lightgray text-center paragraph italic">
                <p className="max-w-[800px] mx-auto mb-7.5">
                    We’re passionate about providing prizes you want to win.
                    That’s why we add prizes and offer the best selection of
                    online prizes, worth different values, based on your
                    feedback. Choose from epic{" "}
                    <Link href="#" className="font-bold underline">
                        holidays
                    </Link>
                    , unforgettable{" "}
                    <Link href="#" className="font-bold underline">
                        experiences
                    </Link>
                    ,{" "}
                    <Link href="#" className="font-bold underline">
                        family getaways
                    </Link>
                    , your favourite{" "}
                    <Link href="#" className="font-bold underline">
                        tech
                    </Link>
                    , and prizes to fit your{" "}
                    <Link href="#" className="font-bold underline">
                        lifestyles
                    </Link>
                    .
                </p>

                <p className="mb-6">See a prize you like?</p>

                <Link href="/enter">
                    <Button className="w-full max-w-[300px]">Enter now</Button>
                </Link>
            </div>
        </section>
    );
}
