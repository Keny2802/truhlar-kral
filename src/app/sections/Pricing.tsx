import {
    Fragment,
    ReactNode
} from "react";
import clsx from "clsx";
import pricingSet from "../sets/pricingSet";

import Wrapper from "../components/Wrapper";

type pricingProps = {
    className?: string;
    children?: ReactNode;
};

const Pricing = ({ ...props }: pricingProps) => {
    const {
        className,
        children
    } = props;

    return (
        <Fragment>
            <Wrapper className={clsx(`
                ${className || ""}
                ${String(className).includes("bg-") ? className : "bg-white"}
                px-12 md:px-24 py-8 md:py-16`)}>
                <Wrapper className="flex flex-col">
                    <Wrapper className="mb-2 flex flex-col items-center">
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-black uppercase">
                            🪚 Ceník služeb - truhlářství král
                        </h2>
                        <p className="mt-4 text-sm text-gray-500">
                            Ceny služeb jsou pouze orientační a mohou se lišit podle rozsahu a náročnosti,
                            pro přesnou kalkulaci nás neváhejte jakkoliv kontaktovat.
                        </p>
                    </Wrapper>
                    <Wrapper className="pricing-wrapper">
                        <Wrapper className="mt-4 p-4 border-b border-gray-200 flex justify-between items-center pricing-table-header-wrapper">
                            <p className="text-[17px]">
                                Ceník
                            </p>
                            <p className="text-[17px]">
                                Služba
                            </p>
                            <p className="text-[17px]">
                                Popis
                            </p>
                            <p className="text-[17px]">
                                Cena
                                {" "}
                                <span className="italic">
                                    (bez DPH)
                                </span>
                            </p>
                        </Wrapper>
                        <Wrapper className="mt-4 flex flex-col">
                            {
                                pricingSet.map((price, priceIndex) => (
                                    <Fragment key={priceIndex}>
                                        <Wrapper className="flex justify-between gap-2 flex-wrap flex-col md:flex-row w-full bg-white even:bg-[#362315] even:text-white shadow-md even:shadow-none p-4">
                                            <p className="text-lg">
                                                {price.serviceIcon}
                                                {" "}
                                                {price.serviceParent}
                                            </p>
                                            <p className="text-[17px]">
                                                {price.service}
                                            </p>
                                            <p className="text-[17px]">
                                                {price.serviceDescription}
                                            </p>
                                            <p className="text-[17px]">
                                                {price.servicePrice}
                                            </p>
                                        </Wrapper>
                                    </Fragment>
                                ))
                            }
                        </Wrapper>
                    </Wrapper>
                    {children}
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default Pricing;