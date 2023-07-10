import { useState } from "react";
import Link from "next/link";

type Faqs = {
    title: string;
    description: string;
}[];

const faqs: Faqs = [
    {
        title: "Has anyone ever won?",
        description: `We've had more than 50,000 players win prizes since we launched, of which 1000+ won a travel prize! We highlight a winner on our Instagram every week and we highlight some winners right here on our website on the <a href="#" class="font-bold hover:text-black duration-300">Winners page</a>. More of our winners have won lower value prizes (Bronze, Silver or Gold), as the chances of matching up to 3 numbers are so much better.`,
    },
    {
        title: "How do I know if I've won?",
        description:
            "We'll always email all winners within two hours of the draw. If you don't reply within 2 weeks, we'll send you a reminder. Although we advise you to check your account page every now and then to see if you've won anything, in case our emails to you have ended up in your spam folder. If you want to check if you have the winning numbers, simply log in and visit our Results page.",
    },
    {
        title: "Who are DAYMADE?",
        description: `DAYMADE is a prize platform where players can win incredible at-home prizes and all-inclusive holidays and local experiences, while supporting a good cause. DAYMADE was born of the belief that experiences are more valuable than money, and we work hard to offer our players a wide range of prizes that are fun and memorable.
            <br /><br />
            Our weekly draws offers players a chance to win epic prizes big and small - from afternoon tea for two or a DIY doughnut kit to an all-inclusive holiday to South Africa or a full home make-over. You pick your prize and we handle the rest!
            <br /><br />
            Aside from our weekly draws, we also host a Pound Raffle as well as a free daily draw with a chance to win an epic holiday.
            <br /><br />
            At DAYMADE, our players are at the heart of everything we do, and we pride ourselves on great customer service, credibility, and transparency. Over time, we have built a great community of players with equal passion for travel, the environment and making memories! All our draws, prizes and products are sourced with input from players. More recently, we have introduced a leaderboard, to reward our community for their loyalty and give them even more chances to win.
            <br /><br />
            Tune into our Instagram live draw, every Friday at 5pm, to see how the winning numbers are drawn.
            <br /><br />
            We are a team of 5 travel-lovers based in London who work tirelessly to deliver a great experience. We are also backed by Zeal Network - a publicly traded company in the gaming space. For questions, you can reach us anytime!
            <br /><br />
            <a href="#" class="font-bold hover:text-black duration-300">Learn more <i class="fa-solid fa-arrow-right-long"></i></a>
            `,
    },
];

export default function Faq() {
    const [openFaqNumbers, setOpenFaqNumbers] = useState<number[]>([]);

    const handleClick = (index: number) => {
        if (openFaqNumbers.includes(index)) {
            let temp = openFaqNumbers;
            const idx = openFaqNumbers.findIndex((el) => el === index);
            temp.splice(idx, 1);
            setOpenFaqNumbers([...temp]);
        } else {
            setOpenFaqNumbers([...openFaqNumbers, index]);
        }
    };

    return (
        <section className="container mx-auto px-5 py-12">
            <h2 className="mb-8 section-title text-green-leftline">
                A few <span className="text-outline">faqs</span>
            </h2>

            <ul className="paragraph">
                {faqs.map((faq, index) => (
                    <li key={index} className="p-6 border-t-2 border-lightgray">
                        <div
                            className="flex items-center justify-between cursor-pointer"
                            onClick={() => handleClick(index)}
                        >
                            <h3 className="font-bold">{faq.title}</h3>
                            <i
                                className={`fa-solid fa-chevron-down duration-300 ${
                                    openFaqNumbers.includes(index)
                                        ? "rotate-180"
                                        : ""
                                }`}
                            ></i>
                        </div>

                        {openFaqNumbers.includes(index) && (
                            <p
                                className="mt-6"
                                dangerouslySetInnerHTML={{
                                    __html: faq.description,
                                }}
                            />
                        )}
                    </li>
                ))}
            </ul>

            <Link
                href="#"
                className="flex items-center gap-x-2 w-max mx-auto mt-6 text-center text-sm font-bold hover:text-black duration-300"
            >
                <span className="italic">View more FAQs</span>
                <i className="fa-solid fa-chevron-right"></i>
            </Link>
        </section>
    );
}
