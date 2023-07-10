type Features = {
    title: string;
    description: string;
}[];

const features: Features = [
    {
        title: "56,127",
        description: "Winners to date",
    },
    {
        title: "700+",
        description: "5 star reviews",
    },
    {
        title: "200+",
        description: "Epic prizes",
    },
];

export default function Features() {
    return (
        <section className="py-5 md:py-9 bg-green-gradient">
            <ul className="container mx-auto grid grid-cols-12 divide-x-2 divide-gray">
                {features.map((feature, index) => (
                    <li key={index} className="col-span-4 text-center">
                        <h2 className="text-22 md:text-40 font-black text-white-shadow-lg text-green-outline">
                            {feature.title}
                        </h2>
                        <p className="text-10 md:text-base font-bold uppercase text-white-shadow-sm">
                            {feature.description}
                        </p>
                    </li>
                ))}
            </ul>
        </section>
    );
}
