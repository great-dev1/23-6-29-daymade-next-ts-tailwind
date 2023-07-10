import Link from "next/link";
import Image from "next/image";

type Prizes = {
    title: string;
    description?: string;
    matchCount: number;
    bonus: boolean;
    isBoosted?: boolean;
}[];

const prizes: Prizes = [
    {
        title: "Any DAYMAKERboost prize",
        description: "worth up to £100k",
        matchCount: 4,
        bonus: true,
        isBoosted: true,
    },
    {
        title: "Any DAYMAKER prize",
        description: "worth up to £25k",
        matchCount: 4,
        bonus: true,
    },
    {
        title: "Any Diamond prize",
        description: "worth up to £10k",
        matchCount: 4,
        bonus: false,
    },
    {
        title: "Any Platinum prize",
        description: "worth up to £2k",
        matchCount: 3,
        bonus: true,
    },
    {
        title: "Any Gold prize",
        description: "worth up to £300",
        matchCount: 3,
        bonus: false,
    },
    {
        title: "Any Silver prize",
        description: "worth up to £50",
        matchCount: 2,
        bonus: true,
    },
    {
        title: "Any Bronze prize",
        description: "worth up to £25",
        matchCount: 2,
        bonus: false,
    },
    {
        title: "£5 DAYMADE Credit",
        matchCount: 1,
        bonus: true,
    },
    {
        title: "1 Premium Entry",
        matchCount: 1,
        bonus: false,
    },
    {
        title: "1 DAYMADE Token",
        matchCount: 0,
        bonus: true,
    },
];

export default function Prizes() {
    return (
        <section className="py-15 bg-lightgreen-gradient">
            <div className="container mx-auto px-5">
                <h2 className="mb-10 section-title text-center text-white-shadow">
                    What prizes can you{" "}
                    <span className="text-green-outline">win?</span>
                </h2>

                <div className="mb-7.5 px-4 py-5 md:px-9 md:py-6 rounded-lg bg-white">
                    <ul className="max-w-[700px] mx-auto">
                        {prizes.map((prize, index) => (
                            <li
                                key={index}
                                className={`py-4.5 ${
                                    prize.isBoosted
                                        ? "px-4 rounded-10 bg-lightgray"
                                        : "px-1.5 border-b-2 border-lightgray"
                                }`}
                            >
                                {prize.isBoosted && (
                                    <div className="flex items-center justify-center gap-x-1.5 mb-3">
                                        <Image
                                            src="/images/rocket.png"
                                            width={20}
                                            height={20}
                                            alt="rocket"
                                        />
                                        <span className="text-xs md:text-15 font-extrabold uppercase">
                                            Boosted
                                        </span>
                                    </div>
                                )}

                                <div className="flex justify-between">
                                    <div className="flex-auto">
                                        <div className="flex items-center gap-x-2 mb-1">
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
                                                    {prize.matchCount !== 0 && (
                                                        <span className="font-bold leading-none">
                                                            +
                                                        </span>
                                                    )}
                                                    <span
                                                        className={`w-2.5 h-2.5 rounded-full ${
                                                            prize.isBoosted
                                                                ? "bg-pink"
                                                                : "bg-lightgreen"
                                                        }`}
                                                    ></span>
                                                </>
                                            )}
                                        </div>

                                        <h3 className="text-xs md:text-lg font-bold uppercase">
                                            {prize.matchCount} Main number
                                            {prize.matchCount === 1 ? "" : "s"}
                                        </h3>

                                        {prize.bonus && (
                                            <p className="text-xs md:text-lg font-semibold">
                                                {prize.matchCount === 0
                                                    ? "Bonus ball only"
                                                    : "Plus the bonus ball"}
                                            </p>
                                        )}
                                    </div>

                                    <div className="text-right">
                                        <p className="mb-2 text-xs md:text-sm font-extrabold">
                                            {prize.title}
                                        </p>

                                        <p className="text-xs font-semibold italic">
                                            {prize.description}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ))}

                        <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-y-6 md:gap-x-6 mt-9 text-center md:text-left">
                            <div>
                                <h3 className="mb-3 text-lg md:text-xl font-extrabold">
                                    DAYMADE Tokens
                                </h3>
                                <p className="paragraph">
                                    Collect and redeem for FREE entries, epic
                                    gift cards, and more! Head on down to to{" "}
                                    <Link
                                        href="#"
                                        className="font-bold underline hover:text-black duration-300"
                                    >
                                        Token Town
                                    </Link>{" "}
                                    spend your tokens.
                                </p>
                            </div>

                            <Image
                                src="/images/tokens.png"
                                width={141}
                                height={99}
                                alt="token"
                            />
                        </div>
                    </ul>

                    <p className="max-w-[800px] mx-auto mt-9 mb-6 md:mt-15 md:mb-7 text-center paragraph">
                        The more numbers you match, the bigger the prize value!
                        Your chance to win a trip of a lifetime or epic prize
                        could be just a few numbers away.
                    </p>
                </div>

                <div className="grid grid-cols-12 gap-y-3 md:gap-x-5">
                    <div className="col-span-12 md:col-span-6 h-40 md:h-48 flex items-center justify-center rounded-10 text-center text-white bg-[url('/images/plant-a-tree.webp')] bg-no-repeat bg-center bg-cover">
                        <div className="max-w-[300px]">
                            <h3 className="mb-2 text-28 font-black leading-tight uppercase text-dark-shadow">
                                Plant a tree every week
                            </h3>

                            <p className="paragraph">
                                You&apos;ll plant a tree with{" "}
                                <a href="#" className="font-bold underline">
                                    Eden Reforestation Projects
                                </a>{" "}
                                every week you&apos;re subscribed.
                            </p>
                        </div>
                    </div>

                    <div className="col-span-12 md:col-span-6 h-40 md:h-48 flex items-center justify-center rounded-10 text-center text-white bg-[url('/images/winners.webp')] bg-no-repeat bg-center bg-cover">
                        <div className="max-w-[240px]">
                            <h3 className="text-40 font-black text-dark-shadow">
                                56,651
                            </h3>

                            <h4 className="mb-2 text-xl font-black uppercase text-dark-shadow">
                                Winners to date
                            </h4>

                            <p className="paragraph">Will YOU be next?</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
