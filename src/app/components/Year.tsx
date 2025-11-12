import {
    Fragment,
    ReactNode
} from "react";
import clsx from "clsx";

import Wrapper from "./Wrapper";

type yearProps = {
    className?: string;
    children?: ReactNode | undefined;
};

const Year = ({ ...props }: yearProps) => {
    const {
        className,
        children
    } = props;

    const dynamicYear = new Date().getFullYear();

    return (
        <Fragment>
            <Wrapper className={clsx(`${className || ""} year-wrapper`)}>
                <p className="year-content">
                    {dynamicYear}
                </p>
                {children}
            </Wrapper>
        </Fragment>
    );
};

export default Year;