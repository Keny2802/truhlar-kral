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
import HeroOverlayWrapper from "../components/HeroOverlayWrapper";
import PageLabel from "../components/PageLabel";
import SectionBanner from "../components/SectionBanner";
import Footer from "../sections/Footer";

const App = () => {
    return (
        <Fragment>
            <Header
            key="about"
            whichPage="o-nas"
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
                {/* <PageLabel pageLabelText="O nás" /> */}
                <PageLabel
                pageLabelHref="o-nas"
                pageLabelText="O nás"
                />
                <h2 className="text-5xl md:text-8xl font-black">
                    O nás
                </h2>
                <p className="mt-4 text-base max-w-3xl">
                    Dozvěděte se o nás více informací, díky kterým je Naše truhlářství.
                </p>
                <Wrapper className="mt-8 w-full flex justify-center items-center flex-col md:flex-row gap-4 p-4 cta-wrapper">
                    <Link
                    href={`#about-us`}
                    className="p-4 bg-[#362315] rounded-md cursor-pointer w-full md:w-max"
                    onClick={(e) => {
                        setLinkWithoutHash(e, "about-us");
                    }}>
                        Dozvědět se o nás Více
                    </Link>
                    <Link
                    href={`/`}
                    className="p-4 bg-white text-black rounded-md cursor-pointer w-full md:w-max">
                        Zpět na hlavní stránku
                    </Link>
                </Wrapper>
            </HeroOverlayWrapper>
            {/* <Wrapper className="bg-[#362315] text-white px-12 lg:px-24 py-8 lg:py-16">
                <Wrapper className="flex flex-col items-center gap-4">
                    <p className="text-4xl md:text-5xl font-black">
                        O nás
                    </p>
                    <Link
                    href={`#about-us`}
                    className="flex gap-2 transition-colors duration-300 ease-in-out hover:text-[#f8aa0e]"
                    onClick={(e) => {
                        setLinkWithoutHash(e, "about-us");
                    }}>
                        Přejít
                        <ArrowRightIcon />
                    </Link>
                </Wrapper>
            </Wrapper> */}
            <SectionBanner
            bannerMainText="O nás"
            bannerHref="about-us"
            />
            <Wrapper
            className="bg-white shadow-md px-12 md:px-24 py-8 md:py-16 about-us-wrapper"
            attributes={{
                id: "about-us"
            }}>
                <Wrapper className="my-4 flex justify-center items-center">
                    <h2 className="pb-4 text-4xl md:text-5xl font-black uppercase">
                        o nás -
                        {" "}
                        <span className="lowercase">
                            z
                        </span>
                        {" "}
                        Truhlářství Král
                    </h2>
                </Wrapper>
                <Wrapper className="flex justify-between flex-col md:flex-row gap-8">
                    <Image
                    height={1000}
                    width={1000}
                    src="/sources/Hero_1.jpg"
                    alt="Hero Fotka Truhlář Král"
                    loading="lazy"
                    decoding="async"
                    className="w-full max-h-screen lg:object-cover backdrop-blur-sm"
                    />
                    <Wrapper className="about-us-text-content-wrapper">
                        <h2 className="text-2xl md:text-3xl font-black">
                            Pár upřímných slov ze srdce
                        </h2>
                        <Wrapper className="mt-4 flex flex-col gap-4">
                            <p className="text-base italic">
                                Nevyrábíme jen kuchyně - tvoříme prostor, kde vznikají zážitky, vůně a rodinná pohoda. Každá kuchyň, kterou navrhujeme a vyrábíme, je originál - přesně podle Vašeho stylu, prostoru a hlavně těch největších představ.
                            </p>
                            <p className="text-base italic">
                                Používáme kvalitní materiály, poctivé řemeslné postupy a dbáme na každý detail, který dělá kuchyň nejen krásnou, ale i praktickou. Od prvního návrhu přes výrobu až po montáž se postaráme o vše, abyste si mohli užít výsledek bez starostí.
                            </p>
                            <p className="text-base italic">
                                Spolupracujeme s prověřenými dodavateli pracovních desek, kování i spotřebičů, takže vám dodáme kuchyň kompletně připravenou k používání. Ať už jde o malý byt, rodinný dům nebo moderní prostor, vytvoříme kuchyň, která bude ladit s vaším životem - trvanlivá, funkční a s osobitým stylem.
                            </p>
                            <p className="text-base italic">
                                Věříme, že kuchyň má sloužit vám, ne vy jí. Proto se zaměřujeme na chytrá řešení, úložné prostory, pohodlné pracovní zóny a praktické vychytávky, které každý den zpříjemní vaření i společné stolování. Každý detail má svůj smysl a celkový výsledek je promyšlený do posledního centimetru.
                            </p>
                            <p className="text-base italic">
                                Ať už toužíte po minimalistické moderně, teplém rustikálním stylu nebo nadčasové klasice, vždy vytvoříme kuchyň, která vám bude dělat radost mnoho let. S námi získáte prostor, který bude nejen krásný na pohled, ale hlavně dokonale funkční pro váš každodenní život.
                            </p>
                        </Wrapper>
                        <Wrapper className="mt-2">
                            <p className="text-base italic">
                                Každý detail - od úchytky po spáru - je výsledkem precizní truhlářské práce.
                            </p>
                            <p className="mt-1">
                                Roman Král
                            </p>
                        </Wrapper>
                    </Wrapper>
                </Wrapper>
            </Wrapper>
            <Footer />
        </Fragment>
    );
};

export default App;