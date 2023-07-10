import Image from "next/image";

export default function Banner() {
    return (
        <section className="relative flex items-center justify-center h-[135px] bg-lightgreen-gradient">
            <h2 className="relative z-10 section-title text-white-shadow">
                Trips & <span className="text-outline">stays</span>
            </h2>

            <Image
                className="absolute top-0 left-0 md:left-auto md:right-[calc(50%+80px)]"
                src="/images/trophy-bg.svg"
                width={147}
                height={135}
                alt="trophy"
            />
        </section>
    );
}
