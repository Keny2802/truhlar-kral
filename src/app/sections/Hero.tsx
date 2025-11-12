import {
    ReactNode,
    Fragment
} from "react";
import Image from "next/image";
import Link from "next/link";

import Wrapper from "../components/Wrapper";
import Header from "../components/Header";

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
                <Wrapper className="absolute top-[30%] left-[5%] lg:top-[25%] lg:left-[25%] text-white text-center max-w-6xl mx-auto">
                    <h1 className="text-5xl lg:text-8xl font-black">
                        Truhlářství Král
                    </h1>
                    <p className="mt-2 text-base max-w-3xl">
                        Vyrábíme nábytek s důrazem na kvalitu, preciznost,
                        včasné časové dodání a hlavně na to nejdůležitější radost zákazníka.
                        Naše specializace je nábytek a kuchyně na míru. Stavební práce jako jsou práce na střechách.
                    </p>
                    <Wrapper className="mt-15 flex justify-center items-center gap-4 cta-wrapper">
                        <Link
                            href={`/contact`}
                            className="p-4 bg-[#362315] rounded-md cursor-pointer">
                            Kontaktujte nás
                        </Link>
                        <Link
                            href={`/contact`}
                            // href={`/offer`}
                            className="p-4 bg-white text-black rounded-md cursor-pointer">
                            Nabídka zdarma
                        </Link>
                    </Wrapper>
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default Hero;