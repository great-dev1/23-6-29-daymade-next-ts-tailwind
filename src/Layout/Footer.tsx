import Link from "next/link";
import Image from "next/image";
import Button from "@/components/elements/Button";

const logoVertical = "/images/logo-vertical.png";
const facebookIcon = "/images/facebook-circle.svg";
const instagramIcon = "/images/instagram-circle.svg";
const youtubeIcon = "/images/youtube-circle.svg";
const twitterIcon = "/images/twitter-circle.svg";
const tiktokIcon = "/images/tiktok-circle.svg";
const gamcareLogo = "/images/gamcare-logo.svg";
const trustpilot = "/images/trustpilot.svg";
const eighteenplus = "/images/18-plus.png";

type SocialLinks = {
    title: string;
    url: string;
    icon: string;
}[];

const socialLinks: SocialLinks = [
    { title: "facebook", url: "#", icon: facebookIcon },
    { title: "instagram", url: "#", icon: instagramIcon },
    { title: "youtube", url: "#", icon: youtubeIcon },
    { title: "twitter", url: "#", icon: twitterIcon },
    { title: "tiktok", url: "#", icon: tiktokIcon },
];

type FooterLinks = {
    title: string;
    url: string;
}[];

const footerLinks: FooterLinks = [
    { title: "About us", url: "#" },
    { title: "Blog", url: "#" },
    { title: "Gift cards", url: "#" },
    { title: "How it works", url: "#" },
    { title: "Faq", url: "#" },
    { title: "Contact us", url: "#" },
    { title: "Terms & Conditions", url: "#" },
    { title: "Privacy Policy", url: "#" },
    { title: "Influencers/affiliates", url: "#" },
];

export default function Header() {
    return (
        <footer className="max-w-[1300px] mx-auto lg:mt-10 px-5 py-7.5">
            <div className="grid grid-cols-12 lg:py-6.5 divide-y-2 lg:divide-x-2 lg:divide-y-0 divide-lightgray">
                <div className="col-span-12 lg:col-span-4 flex flex-col items-center justify-center py-8 lg:px-8 lg:py-4">
                    <Link href="#" className="mb-5.5">
                        <Image
                            src={logoVertical}
                            width={131}
                            height={80}
                            alt="logo"
                        />
                    </Link>

                    <div className="flex items-center justify-center gap-x-5 mb-2.5">
                        {socialLinks.map((link, index) => (
                            <a href={link.url} key={index}>
                                <Image
                                    src={link.icon}
                                    width={28}
                                    height={28}
                                    alt={link.title}
                                />
                            </a>
                        ))}
                    </div>

                    <p className="text-center text-xs font-bold italic">
                        Interested in an affiliate partnership?{" "}
                        <a href="#">Get in touch!</a>
                    </p>
                </div>

                <div className="col-span-12 lg:col-span-4 flex flex-col items-center justify-center py-8 lg:px-8 lg:py-4">
                    <div className="grid grid-cols-12 text-center lg:text-left">
                        {footerLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.url}
                                className="col-span-12 lg:col-span-6 m-2.5 lg:m-1.5 text-sm font-bold uppercase"
                            >
                                {link.title}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="col-span-12 lg:col-span-4 flex flex-col items-center justify-center py-8 lg:px-8 lg:py-4">
                    <div className="max-w-[350px] flex flex-col justify-center gap-y-3">
                        <h3 className="text-sm font-bold uppercase">
                            Sign up & save
                        </h3>
                        <p className="text-xs font-semibold">
                            Sign up to our newsletter for{" "}
                            <strong>50% off</strong> your 1st entry.
                        </p>
                        <input
                            type="text"
                            className="px-4 py-1.5 border-2 border-lightgray rounded"
                            placeholder="Email Address"
                        />
                        <Button className="w-full !bg-gray hover:!bg-darkgray">
                            Sign up to newsletter
                        </Button>
                    </div>
                </div>
            </div>

            <div className="max-w-[700px] mx-auto my-6 flex flex-col lg:flex-row items-center justify-around gap-y-3">
                <Link href="#">
                    <Image
                        src={gamcareLogo}
                        width={76}
                        height={22}
                        alt="gamcare"
                    />
                </Link>

                <Link href="#" className="flex items-center gap-x-3">
                    <span className="text-lg font-medium">Excellent</span>
                    <Image
                        src={trustpilot}
                        width={113}
                        height={24}
                        alt="trustpilot"
                    />
                </Link>

                <Link href="#">
                    <Image
                        src={eighteenplus}
                        width={22}
                        height={22}
                        alt="18+"
                    />
                </Link>
            </div>

            <p className="text-center text-xs font-semibold">
                DAYMADE is an associated brand of, and operated by, TH Travel
                Limited (registered in England & Wales, company number
                <br />
                <br />
                Please note that DAYMADE is an operator of prize draws. Our
                online contests to win prizes include a method of entry via
                post. No purchase is necessary to enter but the intention of the
                draws is that people enter to win prizes and support a worthy
                charitable cause.
            </p>
        </footer>
    );
}
