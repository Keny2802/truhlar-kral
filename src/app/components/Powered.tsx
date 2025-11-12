import {
    ReactNode,
    Fragment
} from "react";
import Wrapper from "./Wrapper";
import clsx from "clsx";


type poweredProps = {
    className?: string;
    children?: ReactNode | undefined;
};

const Powered = ({ ...props }: poweredProps) => {
    const {
        className,
        children
    } = props;

    return (
        <Fragment>
            <Wrapper className={clsx(`${className || ""} powered-wrapper`)}>
                <p className="powered-content">
                    Powered By
                    {" "}
                    <span className="font-black">
                        Truhlářství Král
                    </span>
                </p>
                {children}
            </Wrapper>
        </Fragment>
    );
};

export default Powered;