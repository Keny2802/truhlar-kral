import {
    Fragment,
    ReactNode
} from "react";
import clsx from "clsx";

import Wrapper from "../components/Wrapper";
import Powered from "../components/Powered";
import Year from "../components/Year";

type footerProps = {
    className?: string;
    children?: ReactNode;
};

const Footer = ({ ...props }: footerProps) => {
    return (
        <Fragment>
            <Wrapper className="bg-[#362315] w-full text-white px-24 py-8 border-t border-gray-500">
                <Wrapper className="flex flex-col items-center">
                    <Powered className="text-xl lg:text-2xl" />
                    <Year />
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default Footer;