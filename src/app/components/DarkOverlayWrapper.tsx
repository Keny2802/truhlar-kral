import {
    Fragment,
    ReactNode
} from "react";
import clsx from "clsx";

import Wrapper from "./Wrapper";

/*
možná přidání children nebo spíše parent jako react node | null
že ten rodič který bude relative a to dáme v další komponentě
ten daný wrapper s relative
*/

type darkOverlayWrapperProps = {
    className?: string;
    children?: ReactNode;
};

const DarkOverlayWrapper = ({ ...props }: darkOverlayWrapperProps) => {
    const {
        className,
        children
    } = props;

    return (
        <Fragment>
            <Wrapper className={clsx(`${className || null} absolute inset-0 bg-black/40`)}></Wrapper>
            {children}
        </Fragment>
    );
};

export default DarkOverlayWrapper;