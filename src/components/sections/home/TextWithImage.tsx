import Link from "next/link";
import Button from "@/components/elements/Button";

export default function TextWithImage() {
    return (
        <section className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-6 px-[6%] py-[12%] md:py-[15%] md:pr-[10%] md:pl-[7%]">
                <div className="h-full flex flex-col items-center md:items-start justify-center gap-y-4 text-center md:text-left">
                    <h2 className="section-title text-green-underline">
                        Plant <span className="text-outline">Trees</span>
                    </h2>

                    <p className="paragraph">
                        We’ve partnered with{" "}
                        <a
                            href="https://edenprojects.org/"
                            className="font-bold underline hover:text-black duration-300"
                        >
                            Eden Reforestation Projects
                        </a>{" "}
                        who will plant a tree with every purchase made on our
                        site.
                    </p>

                    <p className="paragraph">
                        Tree planting not only helps the planet and future
                        generations, but it also immediately impacts the lives
                        of families in need.{" "}
                        <Link
                            href="#"
                            className="font-bold underline hover:text-black duration-300"
                        >
                            See how
                        </Link>
                    </p>

                    <Link href="/enter" className="w-3/5 max-w-[250px] mt-3">
                        <Button className="w-full">Enter now</Button>
                    </Link>
                </div>
            </div>

            <div className="col-span-12 md:col-span-6 h-full min-h-[220px] md:min-h-[580px] bg-[url('/images/plant-trees-bg.webp')] bg-no-repeat bg-center bg-cover">
                <div className="h-full flex flex-col items-center justify-center text-white">
                    <h2 className="text-54 md:text-6xl xl:text-84 !leading-tight font-black text-outline">
                        827,953
                    </h2>
                    <p className="text-xl lg:text-2xl xl:text-3xl font-bold italic drop-shadow">
                        trees planted to date
                    </p>
                </div>
            </div>
        </section>
    );
}
