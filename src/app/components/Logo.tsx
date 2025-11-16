import {
    Fragment,
    ReactNode
} from "react";
import {
    usePathname
} from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import Wrapper from "./Wrapper";

type logoProps = {
    width?: number;
    height?: number;
    className?: string;
    children?: ReactNode;
};

const Logo = ({ ...props }: logoProps) => {
    const pathName = usePathname();
    const isHome = pathName === "/";

    const {
        width,
        height,
        className,
        children
    } = props;

    return (
        <Fragment>
            <Wrapper className={clsx(`${children ? "flex items-center gap-4" : null} logo-wrapper`)}>
                <Link
                href={`${isHome ? "" : "/"}`}>
                    <Image
                    width={48}
                    height={48}
                    src="/icons/Logo.png"
                    alt="Truhlář Král Logo"
                    loading="lazy"
                    decoding="async"
                    className={clsx(`${className || ""} logo`)}
                    />
                </Link>
                {children}
            </Wrapper>
        </Fragment>
    );
};

export default Logo;