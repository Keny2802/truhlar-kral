import {
    Fragment,
    ReactNode
} from "react";
import Link from "next/link";

import Wrapper from "../components/Wrapper";

type servicesContactProps = {};

const ServiceContact = ({ ...props }) => {
    return (
        <Wrapper className="px-12 md:px-24 py-8 md:py-16 bg-white">
            <Wrapper className="flex justify-between flex-col md:flex-row">
                <h2 className="text-2xl md:text-[32px] font-bold leading-tight">
                    Nevíte si rady / potřebujete konzultaci?
                    {/* <br />
                    Kontaktujte Nás. */}
                </h2>
                <Wrapper className="flex flex-col gap-4">
                    <p className="text-base text-gray-500">
                        Potřebujte konzultaci nebo radu, neváhejte se na Nás a naše truhlářství obrátit a společně vytvoříme Váš projekt podle Vašich představ.
                    </p>
                    <Link
                    href={`/contact`}
                    className="bg-[#c49b5d] text-white p-4 rounded-md cursor-pointer w-max transition-colors duration-300 ease-in-out hover:bg-[#362315]">
                        Potřebuji konzultaci
                    </Link>
                </Wrapper>
            </Wrapper>
        </Wrapper>
    );
};

export default ServiceContact;