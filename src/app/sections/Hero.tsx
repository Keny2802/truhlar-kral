import {
    ReactNode,
    Fragment
} from "react";
import Image from "next/image";
import Link from "next/link";

import Wrapper from "../components/Wrapper";
import DarkOverlayWrapper from "../components/DarkOverlayWrapper";
import HeroOverlayWrapper from "../components/HeroOverlayWrapper";
import PageLabel from "../components/PageLabel";

// opravdu na sobě makat nedělat věci lážo plážo

const Hero = () => {
    return (
        <Fragment>
            <Wrapper
            className="relative hero-wrapper"
            attributes={{
                id: "home"
            }}>
                <Image
                height={1000}
                width={1000}
                src="/sources/Hero_1.jpg"
                alt="Hero Fotka Truhlář Král"
                loading="lazy"
                decoding="async"
                className="w-full max-h-screen lg:object-cover backdrop-blur-sm"
                />
                {/* absolute top-[30%] left-[5%] lg:top-[25%] lg:left-[25%] text-white text-center max-w-6xl mx-auto */}
                <DarkOverlayWrapper />
                <HeroOverlayWrapper className="absolute inset-0 flex flex-col justify-center items-center text-white text-center max-w-6xl mx-auto p-4">
                    {/* <PageLabel pageLabelText="Domovská stránka" /> */}
                    <PageLabel
                    pageLabelHref="/"
                    pageLabelText="Domů"
                    />
                    <h1 className="text-5xl lg:text-8xl font-black">
                        Truhlářství Král
                    </h1>
                    <p className="mt-2 text-base max-w-3xl">
                        Vyrábíme nábytek s důrazem na kvalitu, preciznost,
                        včasné časové dodání a hlavně na to nejdůležitější radost zákazníka.
                        Naše specializace je nábytek a kuchyně na míru. Stavební práce jako jsou práce na střechách.
                    </p>
                    <Wrapper className="mt-8 w-full flex justify-center items-center flex-col md:flex-row gap-4 cta-wrapper">
                        <Link
                            href={`/kontakt`}
                            className="p-4 bg-[#362315] rounded-md cursor-pointer w-full md:w-max">
                            Kontaktujte nás
                        </Link>
                        <Link
                            href={`/kontakt`}
                            // href={`/offer`}
                            className="p-4 bg-white text-black rounded-md cursor-pointer w-full md:w-max">
                            Nabídka zdarma
                        </Link>
                    </Wrapper>
                </HeroOverlayWrapper>
            </Wrapper>
        </Fragment>
    );
};

export default Hero;