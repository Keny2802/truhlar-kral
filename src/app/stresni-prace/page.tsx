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
import roofPricingSet from "../sets/roofPricingSet";

import Wrapper from "../components/Wrapper";
import Header from "../components/Header";
import DarkOverlayWrapper from "../components/DarkOverlayWrapper";
import HeroOverlayWrapper from "../components/HeroOverlayWrapper";
import PageLabel from "../components/PageLabel";
import Footer from "../sections/Footer";

const App = () => {
    return (
        <Fragment>
            <Header
            key="roof"
            whichPage="stresni-prace"
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
                <PageLabel pageLabelText="Služby / Střešní práce" />
                <h2 className="text-5xl md:text-8xl font-black">
                    Střešní práce
                </h2>
                <p className="mt-4 text-base max-w-3xl">
                    Střešní práce pouze a jen s kvalitou a bezpečností, přesně podle Vašich představ a očekávání.
                </p>
                <Wrapper className="mt-8 w-full flex justify-center items-center flex-col md:flex-row gap-4 p-4 cta-wrapper">
                    <Link
                    href={`#roof-pricing`}
                    className="p-4 bg-[#362315] rounded-md cursor-pointer w-full md:w-max"
                    onClick={(e) => {
                        setLinkWithoutHash(e, "roof-pricing");
                    }}>
                        Chci novou střechu
                    </Link>
                    <Link
                    href={`#order-form`}
                    className="p-4 bg-white text-black rounded-md cursor-pointer w-full md:w-max"
                    onClick={(e) => {
                        setLinkWithoutHash(e, "order-form");
                    }}>
                        Chci objednat novou střechu
                    </Link>
                </Wrapper>
            </HeroOverlayWrapper>
            <Wrapper className="bg-[#362315] text-white px-12 lg:px-24 py-8 lg:py-16">
                <Wrapper className="flex flex-col items-center gap-4">
                    <p className="text-4xl md:text-5xl font-black">
                        Střešní práce
                        {/* Střešní práce s kvalitou */}
                    </p>
                    <Link
                    href={`#roof-pricing`}
                    className="flex gap-2 transition-colors duration-300 ease-in-out hover:text-[#f8aa0e]"
                    onClick={(e) => {
                        setLinkWithoutHash(e, "roof-pricing");
                    }}>
                        Přejít
                        <ArrowRightIcon />
                    </Link>
                </Wrapper>
            </Wrapper>
            <Wrapper
            className="bg-white shadow-md px-12 md:px-24 py-8 md:py-16"
            attributes={{
                id: "roof-pricing"
            }}>
                <Wrapper className="my-4 flex justify-center items-center">
                    <h2 className="pb-4 text-4xl md:text-5xl font-black uppercase">
                        Střešní práce - Truhlář Král
                    </h2>
                </Wrapper>
                <Wrapper className="flex justify-between gap-8 flex-col md:flex-row">
                    <Image
                    height={1000}
                    width={1000}
                    src="/sources/services/roof.jpg"
                    alt="Roof"
                    className="w-full h-auto md:w-[400px] md:h-[350px] lg:w-[500px] lg:h-[450px] rounded-md"
                    loading="lazy"
                    decoding="async"
                    />
                    <Wrapper className="roof-text-content-wrapper">
                        <h2 className="text-2xl md:text-3xl font-black">
                            Každá střecha má svoje kouzlo - stejně jako VY
                        </h2>
                        <Wrapper className="mt-4 flex flex-col gap-4">
                            <p className="text-base italic">
                                Střecha je jednou z nejdůležitějších částí domů - chrání před počasím,
                                zajišťuje komfort a ovlivňuje dlouhodobou životnost stavby.
                                Proto ke každé zakázce přistupujeme s maximální pečlivostí a důrazem na detail.
                                Vyrábíme a montujeme střechy tak, aby byly odolné, bezpečné a spolehlivé na dlouhé roky dopředu.
                            </p>
                            <p className="text-base italic">
                                Pracujeme pouze s kvalitními a ověřenými materiály, které odolají větru, sněhu, dešti i vysokým teplotám.
                                Doporučíme Vám nejvhodnější typ krytiny podle charakteru stavby - od tradičních pálených tašek až po moderní
                                plechové systémy. Každý detail střechy, od latí po oplechování, řešíme tak, aby plnil svoji funkci na 100 %.
                            </p>
                            <p className="text-base italic">
                                Zajišťujeme kompletní realizaci střech, rekonstrukce starších krovů, výměnu krytiny, montáž střešních oken i drobné opravy.
                                Postaráme se o precizní provedení od prvního zaměření až po finální dokončení.
                                Díky zkušenostem Víme, jak správně navrhnout řešením, které prodlouží životnost střechy a zároveň zlepší její vzhled i funkčnost.
                            </p>
                            <p className="text-base italic">
                                Naše práce stojí na spolehlivosti, zodpovědnosti a férovém jednání.
                                Každý projekt bereme jako závazek - aby se majitel domu mohl na střechu spolehnout v jakémkoli počasí.
                                S námi získáte střechu, která není jen dobře udělaná, ale také kvalitně navržená a promyšlená do posledního detailu.
                            </p>
                            <Wrapper className="mt-2">
                                <p className="text-base italic">
                                    Každý detail - od úchytky po spáru - je výsledkem precizní truhlářské práce.
                                </p>
                                <p className="mt-1">
                                    Roman Král
                                </p>
                            </Wrapper>
                            <Wrapper className="mt-4 border-t border-gray-200 flex flex-col gap-4">
                                <h2 className="mt-4 text-2xl md:text-3xl font-black bg-[#362315] text-white px-2 py-1 rounded-md">
                                    🪚 Ceník kuchyní na míru
                                </h2>
                                <Wrapper>
                                    <h3 className="text-xl italic">
                                        Ceny jsou pouze orientační
                                    </h3>
                                    <Wrapper className="mt-4 flex justify-between md:flex-row border-b border-gray-200">
                                        <p className="text-[17px]">
                                            Typ kuchyně
                                        </p>
                                        <p className="text-[17px]">
                                            Popis
                                        </p>
                                        <p className="text-[17px]">
                                            Cena od
                                            {" "}
                                            <span className="italic">
                                                (bez DPH)
                                            </span>
                                        </p>
                                    </Wrapper>
                                    <Wrapper className="mt-4">
                                        {
                                            roofPricingSet.map((service, serviceIndex) => (
                                                <Fragment key={serviceIndex}>
                                                    <Wrapper className="w-full bg-white even:bg-[#362315] even:text-white p-4 flex justify-between gap-4 flex-wrap flex-col md:flex-row">
                                                        {/* <p className="text-[17px]">
                                                            {}
                                                        </p> */}
                                                        <p className="text-[17px]">
                                                            {service.serviceIcon}
                                                            {" "}
                                                            {service.service}
                                                        </p>
                                                        <p className="text-[17px]">
                                                            {service.serviceDescription}
                                                        </p>
                                                        <p className="text-[17px]">
                                                            {service.servicePrice}
                                                        </p>
                                                    </Wrapper>
                                                </Fragment>
                                            ))
                                        }
                                    </Wrapper>
                                    <Wrapper className="mt-2 pt-2 border-t border-gray-200">
                                        <h3 className="text-2xl md:text-3xl font-black">
                                            🪚 Ceník je orientační, protože:
                                        </h3>
                                        <p className="mt-1 text-base italic">
                                            Každou střechu řešíme individuálně, aby přesně odpovídala Vašemu domu, podmínkám i požadavkům na životnost a estetiku.
                                            Proto jsou uvedené ceny pouze orientační - finální nabídku vždy připrávíme na míru společně s doporučením
                                            nejvhodnějších materiálů a technického řešení.
                                        </p>
                                        <p className="mt-0.5">
                                            Stačí Nám poslat základní informace nebo se domluvit na osobní konzultaci.
                                            Rádi pro Vás zpracujeme nezávaznou kalkulaci.
                                        </p>
                                    </Wrapper>
                                </Wrapper>
                            </Wrapper>
                        </Wrapper>
                    </Wrapper>
                </Wrapper>
            </Wrapper>
            <Footer />
        </Fragment>
    );
};

export default App;