import {
    Fragment,
    ReactNode
} from "react";
import Image from "next/image";
import clsx from "clsx";

import Wrapper from "./Wrapper";

type logoProps = {
    className?: string;
    children?: ReactNode;
};

const Logo = ({ ...props }: logoProps) => {
    const {
        className,
        children
    } = props;

    return (
        <Fragment>
            <Image
            height={48}
            width={48}
            src="/icons/Logo.png"
            alt="Truhlář Král Logo"
            loading="lazy"
            decoding="async"
            className={clsx(`${className || ""} logo`)}
            />
        </Fragment>
    );
};

export default Logo;