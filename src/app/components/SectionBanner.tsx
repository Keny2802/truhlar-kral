"use client";

import {
    Fragment,
    ReactNode
} from "react";
import {
    ArrowRightIcon
} from "lucide-react";
import clsx from "clsx";
import setLinkWithoutHash from "../functions/setLinkWithoutHash";
import Link from "next/link";

import Wrapper from "./Wrapper";

type sectionBannerProps = {
    className?: string;
    bannerMainText: string;
    bannerHref: string;
    children?: ReactNode;
};

const SectionBanner = ({ ...props }: sectionBannerProps) => {
    const {
        className,
        bannerMainText,
        bannerHref,
        children
    } = props;

    return (
        <Fragment>
            <Wrapper className={clsx(`
                ${className || ""}
                ${String(className).includes("bg-") ? className : "bg-[#362315]"}
                ${String(className).includes("bg-[") ? className : "bg-[#362315]"}
                text-white px-12 lg:px-24 py-8 lg:py-16`)}>
                <Wrapper className="flex flex-col items-center gap-4">
                    <p className="text-4xl md:text-5xl font-black">
                        {bannerMainText}
                    </p>
                    <Link
                    href={`#${bannerHref}`}
                    className="flex gap-2 transition-colors duration-300 ease-in-out hover:text-[#f8aa0e]"
                    onClick={(e) => {
                        setLinkWithoutHash(e, bannerHref);
                    }}>
                        Přejít
                        <ArrowRightIcon />
                    </Link>
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default SectionBanner;