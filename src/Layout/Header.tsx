import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/elements/Button";

const logoWhite = "/images/logo-white.png";
const logoDark = "/images/logo-dark.png";
const logoMobileWhite = "/images/logo-mobile-white.png";
const logoMobileDark = "/images/logo-mobile-dark.png";

export default function Header() {
    const [isMobile, setMobile] = useState<boolean>(false);
    const [isBgWhite, setBgWhite] = useState<boolean>(false);
    const [isButtonShow, setButtonShow] = useState<boolean>(false);
    const { pathname } = useRouter();

    // handle Window resize
    const handleResize = () => {
        if (window.innerWidth < 768) {
            setMobile(true);
        } else {
            setMobile(false);
        }
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    });

    // handle scroll
    const handleScroll = () => {
        if (pathname !== "/") return;

        if (window.scrollY > 100) {
            setBgWhite(true);
            setButtonShow(true);
        } else {
            setBgWhite(false);
            setButtonShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    // handle mouse enter
    const handleMouseEnter = () => {
        if (pathname !== "/") return;

        setBgWhite(true);
    };

    // handle mouse leave
    const handleMouseLeave = () => {
        if (pathname !== "/") return;

        if (window.scrollY < 100) {
            setBgWhite(false);
        }
    };

    const getLogo = () => {
        if (isMobile) {
            if (pathname !== "/" || isBgWhite) {
                return logoMobileDark;
            }

            return logoMobileWhite;
        }

        if (pathname !== "/" || isBgWhite) {
            return logoDark;
        }

        return logoWhite;
    };

    useEffect(() => {
        handleResize();
        handleScroll();
    }, []);

    return (
        <header className="fixed z-20 top-0 w-full">
            {/* Topbar */}
            <div className="p-2.5 bg-green">
                <p className="text-center text-xs font-bold">
                    {isMobile ? (
                        <span>
                            🏆&nbsp;&nbsp;More winners
                            in:&nbsp;&nbsp;0d&nbsp;&nbsp;12h&nbsp;&nbsp;23m&nbsp;&nbsp;45s&nbsp;&nbsp;🏆
                        </span>
                    ) : (
                        <span>
                            🏆&nbsp;&nbsp;More winners in:&nbsp;&nbsp;0
                            days&nbsp;&nbsp;12 hrs&nbsp;&nbsp;23
                            mins&nbsp;&nbsp;45 secs&nbsp;&nbsp;🏆
                        </span>
                    )}
                </p>
            </div>

            {/* Navbar */}
            <nav
                className={`px-5.5 py-4.5 hover:bg-white duration-300 ${
                    pathname !== "/" || isBgWhite
                        ? "bg-white shadow-md"
                        : "bg-transparent"
                }`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="flex items-center justify-between">
                    <Link href="/">
                        <Image
                            src={getLogo()}
                            width={isMobile ? 37 : 156}
                            height={40}
                            alt="logo"
                        />
                    </Link>

                    <Link href="#">
                        <Button className={isButtonShow ? "" : "hidden"}>
                            Enter now
                        </Button>
                    </Link>

                    <div
                        className={`flex items-center gap-x-4 ${
                            pathname !== "/" || isBgWhite ? "" : "text-white"
                        }`}
                    >
                        <Link href="#">
                            <i className="fa-regular fa-user text-26"></i>
                        </Link>

                        <Link href="#">
                            <i className="fa-solid fa-bars text-3xl"></i>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}
