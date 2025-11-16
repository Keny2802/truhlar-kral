"use client";

import {
    Fragment,
    ReactNode
} from "react";
import {
    ArrowRightIcon
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import setLinkWithoutHash from "../functions/setLinkWithoutHash";

import Wrapper from "../components/Wrapper";
import Header from "../components/Header";
import DarkOverlayWrapper from "../components/DarkOverlayWrapper";
import PageLabel from "../components/PageLabel";
import HeroOverlayWrapper from "../components/HeroOverlayWrapper";
import Services from "../sections/Services";
import Footer from "../sections/Footer";

const App = () => {
    return (
        <Fragment>
            <Header
            key="services"
            whichPage="sluzby"
            />
            <Image
            height={1000}
            width={1000}
            src="/sources/Hero_1.jpg"
            alt="Hero Fotka Truhlář Král"
            loading="lazy"
            decoding="async"
            className="w-full max-h-screen lg:object-cover backdrop-blur-sm"
            />
            <DarkOverlayWrapper />
            <HeroOverlayWrapper>
                <PageLabel pageLabelText="Služby" />
                <h2 className="text-5xl md:text-8xl font-black">
                    Služby
                </h2>
                <p className="mt-4 text-base max-w-3xl">
                    Služby to je to nejdůležítější co dělá truhlařství opravdovým truhlářstvím.
                </p>
                <Wrapper className="mt-8 w-full flex justify-center items-center flex-col md:flex-row gap-4 p-4 cta-wrapper">
                    <Link
                    href={`#services`}
                    className="p-4 bg-[#362315] rounded-md cursor-pointer w-full md:w-max"
                    onClick={(e) => {
                        setLinkWithoutHash(e, "services");
                    }}>
                        Podívat se na služby
                    </Link>
                    <Link
                    href={`/o-nas`}
                    className="p-4 bg-white text-black rounded-md cursor-pointer w-full md:w-max">
                        Zjistit o Nás více
                    </Link>
                </Wrapper>
            </HeroOverlayWrapper>
            <Wrapper className="bg-[#362315] text-white px-12 lg:px-24 py-8 lg:py-16 border-b border-gray-200">
                <Wrapper className="flex flex-col items-center gap-4">
                    <p className="text-4xl md:text-5xl font-black">
                        Služby
                    </p>
                    <Link
                    href={`#services`}
                    className="flex gap-2 transition-colors duration-300 ease-in-out hover:text-[#f8aa0e]"
                    onClick={(e) => {
                        setLinkWithoutHash(e, "services");
                    }}>
                        Přejít
                        <ArrowRightIcon />
                    </Link>
                </Wrapper>
            </Wrapper>
            <Services id="services" />
            <Footer />
        </Fragment>
    );
};

export default App;