"use client";

import {
    Fragment,
    ReactNode
} from "react";
import {
    usePathname
} from "next/navigation";
import {
    Phone,
    Home
} from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

import Wrapper from "../components/Wrapper";
import Logo from "../components/Logo";
import Powered from "../components/Powered";
import Year from "../components/Year";

type footerProps = {
    className?: string;
    children?: ReactNode;
};

const Footer = ({ ...props }: footerProps) => {
    const pathName = usePathname();
    const isHome = pathName === "/";

    const {
        className,
        children
    } = props;

    return (
        <Fragment>
            <Wrapper className={clsx(`${className || ""} bg-[#362315] w-full text-white px-24 py-8 border-t border-gray-500`)}>
                <Wrapper className="my-4 flex justify-between gap-4 flex-col md:flex-row">
                    <Wrapper className="footer-group-wrapper">
                        <p className="text-lg uppercase font-black border-b border-gray-200 w-max">
                            Navigace
                        </p>
                        <Wrapper className="mt-2 flex flex-col gap-2">
                            <Link
                            href={`${isHome ? "" : "/"}`}
                            className="transition-colors duration-300 ease-in-out hover:text-[#f8aa0e]">
                                Domů
                            </Link>
                            <Link
                            href={`/sluzby`}
                            className="transition-colors duration-300 ease-in-out hover:text-[#f8aa0e]">
                                Služby
                            </Link>
                            <Link
                            href={`/o-nas`}
                            className="transition-colors duration-300 ease-in-out hover:text-[#f8aa0e]">
                                O nás
                            </Link>
                            <Link
                            href={`/kontakt`}
                            className="transition-colors duration-300 ease-in-out hover:text-[#f8aa0e]">
                                Kontakt
                            </Link>
                        </Wrapper>
                    </Wrapper>
                    <Wrapper className="footer-group-wrapper">
                        <p className="text-lg uppercase font-black border-b border-gray-200 w-max">
                            Služby
                        </p>
                        <Wrapper className="mt-2 flex flex-col gap-2">
                            <Link
                            href={`/kuchyne-na-miru`}
                            className="transition-colors duration-300 ease-in-out hover:text-[#f8aa0e]">
                                Kuchyně na míru
                            </Link>
                            <Link
                            href={`/nabytek-na-miru`}
                            className="transition-colors duration-300 ease-in-out hover:text-[#f8aa0e]">
                                Nábytek na míru
                            </Link>
                            <Link
                            href={`/koupelny-na-miru`}
                            className="transition-colors duration-300 ease-in-out hover:text-[#f8aa0e]">
                                Koupelny na míru
                            </Link>
                            <Link
                            href={`/stresni-prace`}
                            className="transition-colors duration-300 ease-in-out hover:text-[#f8aa0e]">
                                Střešní práce
                            </Link>
                        </Wrapper>
                    </Wrapper>
                    <Wrapper className="footer-group-wrapper"></Wrapper>
                    <Wrapper className="footer-group-wrapper">
                        <p className="text-lg uppercase font-black border-b border-gray-200 w-max">
                            Kontakt
                        </p>
                        <Wrapper className="mt-2 flex flex-col gap-2">
                            <Wrapper className="flex items-center gap-2 my-2">
                                <Logo
                                className="h-9 w-9"
                                />
                                <p className="text-base">
                                    Roman Král
                                </p>
                            </Wrapper>
                            <Wrapper>
                                <Link
                                href={`tel:737337737`}
                                className="flex items-center gap-2">
                                    <Phone
                                    strokeWidth={2.5}
                                    className="cursor-pointer"
                                    />
                                    737 337 737
                                </Link>
                            </Wrapper>
                            <p className="text-base"></p>
                            <p className="text-base flex items-center gap-2">
                                <Home
                                strokeWidth={2.5}
                                className="cursor-pointer"
                                />
                                Tyršova 111, Šestajovice, 250 92
                            </p>
                        </Wrapper>
                    </Wrapper>
                </Wrapper>
                <Wrapper className="flex flex-col items-center border-t border-gray-200 pt-4">
                    <Powered className="text-sm lg:text-2xl" />
                    <Year />
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default Footer;