import {
    Fragment,
    ReactNode
} from "react";
import clsx from "clsx";

import Wrapper from "./Wrapper";

type pageLabelProps = {
    className?: string | null;
    pageLabelText: string | null;
    children?: ReactNode | null;
};

const PageLabel = ({ ...props }: pageLabelProps) => {
    const {
        className,
        pageLabelText,
        children
    } = props;

    return (
        <Fragment>
            <Wrapper className={clsx(`${className || ""} flex justify-center items-center`)}>
                <Wrapper className={clsx(`
                px-4 py-3
                ${String(className).includes("bg-") ? className : "bg-[#362315]"}
                ${String(className).includes("text-") || String(className).includes("text-[") ? className : "text-white"}
                rounded-full`)}>
                    <span>
                        {pageLabelText}
                    </span>
                    {children}
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default PageLabel;