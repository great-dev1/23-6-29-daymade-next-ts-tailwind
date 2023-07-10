import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

type Blogs = {
    url: string;
    image: string;
    title: string;
    description: string;
    date: string;
}[];

const blogs: Blogs = [
    {
        url: "#",
        image: "/images/blog-1.webp",
        title: "How daymade celebrates international women's day 2023",
        description: "A spotlight on our female founded prizes",
        date: "08/03/23",
    },
    {
        url: "#",
        image: "/images/blog-2.webp",
        title: "Travel on a budget",
        description: "DAYMADE to the rescue!",
        date: "27/02/23",
    },
    {
        url: "#",
        image: "/images/blog-3.webp",
        title: "National tree week: an update from daymade",
        description: "Let's celebrate the heroes of nature",
        date: "01/12/22",
    },
];

export default function Blogs() {
    return (
        <section className="container mx-auto px-5">
            <div className="py-12 border-t-2 border-lightgray">
                <div className="grid grid-cols-12 gap-x-3 gap-y-6 mb-8">
                    <h2 className="col-span-12 md:col-span-6 self-start section-title text-green-leftline">
                        Check out our <span className="text-outline">Blog</span>
                    </h2>

                    <p className="col-span-12 md:col-span-6 paragraph">
                        Discover more DAYMADE with{" "}
                        <Link
                            href="#"
                            className="font-bold underline hover:text-black duration-300"
                        >
                            our blog
                        </Link>
                        , featuring our top prize picks, travel guides, and
                        more.
                    </p>
                </div>

                <div className="mb-6 pl-5 lg:pl-0">
                    <Swiper
                        pagination={{
                            clickable: true,
                        }}
                        slidesPerView={"auto"}
                        spaceBetween={12}
                        breakpoints={{
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 24,
                            },
                        }}
                        modules={[Pagination]}
                        className="blogs-carousel"
                    >
                        {blogs.map((blog, index) => (
                            <SwiperSlide
                                key={index}
                                className="relative mb-12 lg:mb-4 px-10 py-5 rounded bg-black shadow-md overflow-hidden"
                            >
                                <Link
                                    href={blog.url}
                                    className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white"
                                >
                                    <h3 className="mb-3 pb-5 border-b-2 border-white text-xl font-black uppercase">
                                        {blog.title}
                                    </h3>
                                    <p className="paragraph italic">
                                        {blog.description}
                                        <br />
                                        <br />
                                        {blog.date}
                                    </p>
                                </Link>

                                <Image
                                    className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
                                    src={blog.image}
                                    width={280}
                                    height={240}
                                    alt={blog.title}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <Link
                    href="#"
                    className="flex items-center gap-x-2 w-max mx-auto text-center text-sm font-bold hover:text-black duration-300"
                >
                    <span className="italic">View more FAQs</span>
                    <i className="fa-solid fa-chevron-right"></i>
                </Link>
            </div>
        </section>
    );
}
