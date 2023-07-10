import Image from "next/image";

export default function Intro() {
    return (
        <section className="relative mt-[110px] bg-green-gradient py-7.5 lg:py-9">
            <div className="relative z-10 container mx-auto flex flex-col items-center lg:items-start gap-y-4 lg:gap-y-5 px-5 text-center lg:text-left">
                <h2 className="section-title text-28 lg:!text-34 text-white-shadow">
                    Play <span className="text-green-outline">premium</span>
                </h2>

                <p className="max-w-xs paragraph">
                    Your weekly chance to win any of our 200+ prizes!
                </p>

                <button className="px-14 py-1.5 border-2 border-gray rounded-full text-xs font-bold uppercase hover:text-white hover:bg-gray/60 duration-300">
                    How to play
                </button>

                <Image
                    src="/images/trustpilot-dark.svg"
                    width={190}
                    height={17}
                    alt="trustpilot"
                />
            </div>

            <Image
                className="absolute z-0 top-0 left-0"
                src="/images/firework-bg.svg"
                width={337}
                height={274}
                alt="firework"
            />

            <Image
                className="lg:hidden absolute z-0 top-0 left-0"
                src="/images/discount.png"
                width={105}
                height={105}
                alt="discount"
            />
        </section>
    );
}
