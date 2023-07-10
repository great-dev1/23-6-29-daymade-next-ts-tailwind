import Link from "next/link";
import Image from "next/image";
import Button from "@/components/elements/Button";

export default function Hero() {
    return (
        <section className="relative mt-9 pt-[50%] pb-[10%] px-[5%] md:pt-[20%] md:pb-[4%] md:px-[20%] bg-black">
            <div className="relative z-10 flex flex-col items-center text-center text-white">
                <h1 className="md:mb-3.5 text-34 md:text-54 2xl:text-78 font-black uppercase text-dark-shadow">
                    Win <span className="text-outline">epic</span> prizes
                </h1>

                <p className="mb-6.5 md:mb-8.5 text-xl md:text-26 font-extrabold">
                    Pick numbers. Match to win.
                    <br /> Choose your prize.
                </p>

                <Link
                    href="/enter"
                    className="w-3/5 max-w-[250px] mb-6 md:mb-9.5"
                >
                    <Button className="w-full md:text-sm">Enter now</Button>
                </Link>

                <Image
                    src="/images/trustpilot-white.svg"
                    width={90}
                    height={70}
                    alt="trustpilot"
                />
            </div>

            <video
                className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
                autoPlay
                loop
                muted
            >
                <source src="/videos/hero.mp4" type="video/mp4" />
            </video>
        </section>
    );
}
