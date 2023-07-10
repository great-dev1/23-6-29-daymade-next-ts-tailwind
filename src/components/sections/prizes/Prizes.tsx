import Link from "next/link";
import Image from "next/image";
import Button from "@/components/elements/Button";

type Prizes = {
    title: string;
    description: string;
    image: string;
    category: string;
    isBoosted?: boolean;
    url: string;
}[];

const prizes: Prizes = [
    {
        title: "£100k Virgin Gift Card",
        description: "The world of Virgin in your wallet",
        image: "/images/boost-1.jpg",
        category: "daymaker",
        isBoosted: true,
        url: "#",
    },
    {
        title: "£100k Virgin Gift Card",
        description: "The world of Virgin in your wallet",
        image: "/images/boost-2.jpg",
        category: "daymaker",
        isBoosted: true,
        url: "#",
    },
    {
        title: "£100k Virgin Gift Card",
        description: "The world of Virgin in your wallet",
        image: "/images/daymaker-1.jpg",
        category: "daymaker",
        url: "#",
    },
    {
        title: "£100k Virgin Gift Card",
        description: "The world of Virgin in your wallet",
        image: "/images/daymaker-2.jpg",
        category: "daymaker",
        url: "#",
    },
    {
        title: "£100k Virgin Gift Card",
        description: "The world of Virgin in your wallet",
        image: "/images/diamond-1.jpg",
        category: "diamond",
        url: "#",
    },
    {
        title: "£100k Virgin Gift Card",
        description: "The world of Virgin in your wallet",
        image: "/images/diamond-2.jpg",
        category: "diamond",
        url: "#",
    },
    {
        title: "£100k Virgin Gift Card",
        description: "The world of Virgin in your wallet",
        image: "/images/platinum-1.jpg",
        category: "platinum",
        url: "#",
    },
];

export default function Prizes() {
    const getColor = (category: string, isBoosted?: boolean) => {
        if (category === "daymaker") {
            if (isBoosted) return "text-pink";
            return "text-darkgreen";
        }

        if (category === "diamond") return "text-purple";
        if (category === "platinum") return "text-blue";
        if (category === "gold") return "text-gold";
        if (category === "silver") return "text-silver";
        if (category === "bronze") return "text-bronze";
    };

    const getIcon = (category: string, isBoosted?: boolean) => {
        if (category === "daymaker") {
            if (isBoosted) return "/images/daymaker-boost.png";
            return "/images/daymaker.png";
        }

        if (category === "diamond") return "/images/diamond.png";
        if (category === "platinum") return "/images/platinum.png";
        if (category === "gold") return "/images/gold.png";
        if (category === "silver") return "/images/silver.png";
        if (category === "bronze") return "/images/bronze.png";
    };

    return (
        <section className="container mx-auto">
            <div className="px-5 py-8 text-center">
                <p className="mb-7.5 text-15 font-semibold">
                    EPIC holidays and escapes for 2 (unless specified otherwise)
                    where{" "}
                    <span className="font-extrabold">YOU choose the dates</span>
                </p>

                <Button className="w-[180px] mb-12">Enter now</Button>

                <div className="max-w-[300px] mx-auto flex items-center justify-between px-6 py-4.5 border-2 border-lightgray rounded-full bg-[#F6F6F6]">
                    <span className="font-extrabold">
                        Filter by Prize Level
                    </span>
                    <i className="fa-solid fa-chevron-down"></i>
                </div>
            </div>

            <div className="flex justify-center flex-wrap gap-y-6 px-1 md:px-5">
                {prizes.map((prize, index) => (
                    <Link
                        key={index}
                        href={prize.url}
                        className="w-1/2 md:w-1/3 px-1.5"
                    >
                        <div className="relative h-40 md:h-56 lg:h-[300px] rounded-2xl bg-black overflow-hidden">
                            <Image
                                className="w-full h-full object-cover opacity-80"
                                src={prize.image}
                                width={300}
                                height={300}
                                alt="boost"
                            />

                            <div className="absolute top-3 left-2 md:top-4 md:left-3">
                                <div className="relative pl-8 pr-2 py-1 md:pl-10 md:pr-4 md:py-1.5 rounded-full bg-white">
                                    <Image
                                        className="absolute -top-[3px] left-0 md:-top-1 w-7.5 h-7.5 md:w-9 md:h-9"
                                        src={
                                            getIcon(
                                                prize.category,
                                                prize.isBoosted
                                            ) || ""
                                        }
                                        width={36}
                                        height={36}
                                        alt={prize.category}
                                    />

                                    <p
                                        className={`text-10 md:text-xs ${getColor(
                                            prize.category,
                                            prize.isBoosted
                                        )}`}
                                    >
                                        <span className="font-extrabold uppercase">
                                            {prize.category}
                                        </span>
                                        {prize.isBoosted && (
                                            <span className="font-semibold italic">
                                                boost
                                            </span>
                                        )}
                                    </p>
                                </div>
                            </div>

                            <span className="absolute top-3 right-2 md:top-4 md:right-5 md:text-lg text-white">
                                <i className="fa-solid fa-plus"></i>
                            </span>

                            <Image
                                className="absolute bottom-3 left-3 md:bottom-4 md:left-4"
                                src="/images/favourite-heart.svg"
                                width={28}
                                height={28}
                                alt="heart"
                            />
                        </div>

                        <div className="p-2 hover:text-black duration-300">
                            <h4 className="mb-1 text-sm md:text-base font-extrabold">
                                {prize.title}
                            </h4>
                            <p className="paragraph !font-bold">
                                {prize.description}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="px-5 py-6 text-center">
                <Button className="w-[180px] mb-6">Enter now</Button>
                <p className="text-xs font-semibold italic">
                    All listed travel itineraries (including flights, hotels,
                    activities, and other expenditures) are subject to change
                    based on availability, price fluctuations, and unforeseen
                    travel restrictions. We will work with you to create the
                    most epic adventure possible!
                </p>
            </div>
        </section>
    );
}
