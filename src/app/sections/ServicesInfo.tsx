import {
    Fragment,
    ReactNode
} from "react";


import Wrapper from "../components/Wrapper";

type servicesInfoProps = {};

const ServicesInfo = ({ ...props }: servicesInfoProps) => {
    return (
        <Wrapper className="px-12 md:px-24 py-8 md:py-16 bg-[#362315]">
            <Wrapper className="flex justify-between flex-col md:flex-row gap-8">
                <p className="text-2xl md:text-3xl text-white font-bold leading-tight tracking-wide max-w-[500px]">
                    {/* Poctivá truhlařská práce, co jiného než spolehlivá výroba */}
                    Poctivá truhlařská práce, co jiného si přít než spolehlivou výrobu
                </p>
                <p className="text-[15px] text-[#b6b3b0] leading-tight tracking-wide">
                    Naše Šestajovická truhlářská dílna, Vám zaručí kvalitu a jistotu, že jí budete mít na spoustu let funkční a spolehlivou.
                </p>
            </Wrapper>
        </Wrapper>
    );
};

export default ServicesInfo;