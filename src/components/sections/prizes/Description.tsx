import Link from "next/link";
import Button from "@/components/elements/Button";

type Questions = {
    title: string;
    description: string;
}[];

const questions: Questions = [
    {
        title: "How can I win travel prizes?",
        description: `We have a huge selection of travel prizes, simply <a href="#" class="font-bold underline hover:text-black duration-300">enter</a> our luxury holiday competition for your chance to win. With travel prizes all over the world and two weekly draws, the chances have never been higher.`,
    },
    {
        title: "What are our luxury holiday competitions?",
        description: `Entering our luxury holiday competition is really simple! Pick your winning numbers for our <a href="#" class="font-bold underline hover:text-black duration-300">Weekly Draws</a> and watch live every Friday at 5pm. If your selected numbers match ours, pick your prize and get exploring! The more numbers you match, the bigger the travel prize.`,
    },
    {
        title: "What travel prizes can I win?",
        description: `Win once in a lifetime travel prizes around the world! The opportunities for travel are endless and with DAYMADE and you’re in control of what you win. Win a year's worth of travel plans or an all expenses paid holiday adventure around one of our hot destinations.`,
    },
];

export default function Description() {
    return (
        <section className="container mx-auto px-5 py-12">
            <div className="pb-8 border-b-2 border-lightgray">
                <h2 className="mb-3.5 section-title text-green-leftline">
                    Win travel <span className="text-outline">prizes</span>
                </h2>

                <p className="mb-7 text-xs font-semibold">
                    Looking for epic travel prizes? At DAYMADE, you have the
                    chance to win an all expenses paid holiday or a trip of a
                    lifetime to one of our grand destinations around the world.
                    All our travel prizes are for 2 people and YOU get to choose
                    the date.
                    <br />
                    <br />
                    Whether you’re dreaming of a Californian Road Trip,
                    discovering the Galapagos Islands, an Asian Adventure or a
                    European city break for 2, there is a destination and trip
                    for everyone in our luxury holiday competition. With a
                    weekly competition draw, the chance of winning travel prizes
                    have never been higher.
                </p>

                <Link href="/enter" className="block w-max mx-auto">
                    <Button className="w-[180px]">Enter now</Button>
                </Link>
            </div>

            <ul>
                {questions.map((question, index) => (
                    <div
                        key={index}
                        className="py-6 border-b-2 border-lightgray text-xs font-semibold"
                    >
                        <h4 className="mb-3">{question.title}</h4>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: question.description,
                            }}
                        />
                    </div>
                ))}
            </ul>
        </section>
    );
}
