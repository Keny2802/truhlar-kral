import {
    Fragment,
    ReactNode
} from "react";
import clsx from "clsx";
import Link from "next/link";

import Wrapper from "./Wrapper";

type pageLabelProps = {
    className?: string | null;
    pageLabelHref: string | null;
    pageLabelText?: string | null;
    pageLabelServicesText?:
    "Služby"
    | "Kuchyně na míru"
    | "Nábytek na míru"
    | "Koupelny na míru"
    | "Střešní práce";
    pageLabelServiceText?: string | null;
    pageLabelServiceTextClassName?: string | null;
    pageLabelTextClassName?: string | null;
    children?: ReactNode | null;
};

const PageLabel = ({ ...props }: pageLabelProps) => {
    const {
        className,
        pageLabelHref,
        pageLabelText,
        pageLabelServicesText,
        pageLabelServiceText,
        pageLabelServiceTextClassName,
        pageLabelTextClassName,
        children
    } = props;

    return (
        <Fragment>
            <Wrapper className={clsx(`${className || ""} mb-2 flex justify-center items-center`)}>
                <Wrapper className={clsx(`
                px-4 py-3
                ${String(className).includes("bg-") ? className : "bg-[#362315]"}
                ${String(className).includes("text-") || String(className).includes("text-[") ? className : "text-white"}
                rounded-full`)}>
                    {/* <span className={clsx(`${pageLabelTextClassName || ""} page-label-text`)}>
                        {pageLabelText}
                    </span> */}
                    {/* {
                        pageLabelServicesText === "Služby" && (
                            <Fragment>
                                <Link
                                href={`/services`}
                                className={clsx(`${pageLabelServiceTextClassName || ""} transition-colors duration-300 ease-in-out hover:text-[#f8aa0e] page-label-text-link`)}>
                                    Služby
                                </Link>
                            </Fragment>
                        )
                    } */}
                    {
                        pageLabelHref && pageLabelText && (
                            <Fragment>
                                <Link
                                href={`${pageLabelHref.includes("/") ? pageLabelHref : `/${pageLabelHref}`}`}
                                className={clsx(`${pageLabelTextClassName || ""} transition-colors duration-300 ease-in-out hover:text-[#f8aa0e] page-label-text-link`)}>
                                    {pageLabelText}
                                </Link>
                            </Fragment>
                        )
                    }
                    {
                        pageLabelServicesText && pageLabelServicesText !== "Služby" && (
                            <Fragment>
                                <Link
                                href={`/sluzby`}
                                className={clsx(`${pageLabelServiceTextClassName || ""} transition-colors duration-300 ease-in-out hover:text-[#f8aa0e] page-label-text-link`)}
                                >
                                    Služby
                                </Link>
                                {" "}
                                /
                                {" "}
                                <Link
                                href={`/${pageLabelHref}`}
                                className={clsx(`${pageLabelTextClassName || ""} transition-colors duration-300 ease-in-out hover:text-[#f8aa0e] page-label-text-link`)}
                                >
                                    {/* {pageLabelText} */}
                                    {pageLabelServicesText}
                                </Link>
                            </Fragment>
                        )
                    }
                    {children}
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default PageLabel;