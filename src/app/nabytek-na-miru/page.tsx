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
import furniturePricingSet from "../sets/furniturePricingSet";

import Wrapper from "../components/Wrapper";
import Header from "../components/Header";
import PageLabel from "../components/PageLabel";
import DarkOverlayWrapper from "../components/DarkOverlayWrapper";
import HeroOverlayWrapper from "../components/HeroOverlayWrapper";
import Footer from "../sections/Footer";

const App = () => {
    return (
        <Fragment>
            <Header
            key="furniture"
            whichPage="nabytek-na-miru"
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
                <PageLabel pageLabelText="Služby / Nábytek na míru" />
                <h2 className="text-5xl md:text-8xl font-black">
                    Nábytek na míru
                </h2>
                <p className="mt-4 text-base max-w-3xl">
                    Vyrábíme nábytek na zakázku, přesně podla Vaších představ a snů.
                </p>
                <Wrapper className="mt-8 w-full flex justify-center items-center flex-col md:flex-row gap-4 p-4 cta-wrapper">
                    <Link
                    href={`#furniture-pricing`}
                    className="p-4 bg-[#362315] rounded-md cursor-pointer w-full md:w-max"
                    onClick={(e) => {
                        setLinkWithoutHash(e, "furniture-pricing");
                    }}>
                        Chci nábytek na míru
                    </Link>
                    <Link
                    href={`#order-form`}
                    className="p-4 bg-white text-black rounded-md cursor-pointer w-full md:w-max"
                    onClick={(e) => {
                        setLinkWithoutHash(e, "order-form");
                    }}>
                        Objednat nábytek na míru
                    </Link>
                </Wrapper>
            </HeroOverlayWrapper>
            <Wrapper className="bg-[#362315] text-white px-12 lg:px-24 py-8 lg:py-16">
                <Wrapper className="flex flex-col items-center gap-4">
                    <p className="text-4xl md:text-5xl font-black">
                        Nábytek na míru
                    </p>
                    <Link
                    href={`#furniture-pricing`}
                    className="flex gap-2 transition-colors duration-300 ease-in-out hover:text-[#f8aa0e]"
                    onClick={(e) => {
                        setLinkWithoutHash(e, "furniture-pricing");
                    }}>
                        Přejít
                        <ArrowRightIcon />
                    </Link>
                </Wrapper>
            </Wrapper>
            <Wrapper
            className="bg-white shadow-md px-12 lg:px-24 py-8 lg:py-16"
            attributes={{
                id: "furniture-pricing"
            }}
            >
                <Wrapper className="flex justify-center items-center">
                    <h2 className="pb-4 text-4xl md:text-5xl font-black uppercase">
                        Nábytek na míru - Truhlář Král
                    </h2>
                </Wrapper>
                <Wrapper className="mt-4 flex justify-between gap-8 flex-col md:flex-row">
                    <Image
                    height={1000}
                    width={1000}
                    src="/sources/services/furniture.jpg"
                    alt="Kitchen"
                    className="w-full h-auto md:w-[400px] md:h-[350px] lg:w-[500px] lg:h-[450px] rounded-md"
                    loading="lazy"
                    decoding="async"
                    />
                    <Wrapper className="furniture-text-content-wrapper">
                        <h2 className="text-2xl md:text-3xl font-black">
                            Poctivý nábytek - který promění váš interiér
                        </h2>
                        <Wrapper className="mt-4 flex flex-col gap-4">
                            <p className="text-base italic">
                                Každý kus nábytku, který vyrábíme, vzniká s důrazem na detail, funkčnost a dlouhou životnost.
                                Tvoříme nábytek, který přesně odpovídá Vašim představám, prostoru i životnímu stylu - bez kompromisů.
                            </p>
                            <p className="text-base italic">
                                Používáme kvalitní materiály, moderní technologie a tradiční truhlářské postupy.
                                Díky tomu vznikají originální kousky, které jsou krásné nejen na pohled, ale také dokonale praktické v každodenním životě.
                                {/* používání */}
                            </p>
                            <Wrapper className="mt-2 flex flex-col gap-4">
                                <h3 className="text-xl md:text-2xl font-black">
                                    Co pro Vás vyrobíme?
                                </h3>
                                <ul className="flex flex-col gap-2">
                                    <li className="text-base italic">
                                        <span className="font-bold not-italic">
                                            Obývací stěny a knihovny
                                        </span>
                                        {" "}
                                        -
                                        Promyšlené kombinace estetiky a funkce, které ladí s vaším interiérem.
                                    </li>
                                    <li className="text-base italic">
                                        <span className="font-bold not-italic">
                                            Komody, skříně a skříňky
                                        </span>
                                        {" "}
                                        -
                                        Od jednoduchých linií po designové solitéry, vždy s důrazem na kvalitu a detail.
                                    </li>
                                    <li className="text-base italic">
                                        <span className="font-bold not-italic">
                                            Pracovní stoly a kancelářský nábytek
                                        </span>
                                        {" "}
                                        -
                                        Ergonomická a stylová řešení pro domácí i firemní prostory.
                                    </li>
                                    <li className="text-base italic">
                                        <span className="font-bold not-italic">
                                            Dětský a studentský nábytek
                                        </span>
                                        {" "}
                                        -
                                        Odolný, bezpečný a navržený tak, aby rostl s vašimi dětmi.
                                    </li>
                                    <li className="text-base italic">
                                        <span className="font-bold not-italic">
                                            Vestavěný nábytek a úložné systémy
                                        </span>
                                        {" "}
                                        -
                                        Na míru každému prostoru, s maximálním využitím místa.
                                    </li>
                                </ul>
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
                                        🪚 Ceník nábytku na míru
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
                                                furniturePricingSet.map((service, serviceIndex) => (
                                                    <Fragment key={serviceIndex}>
                                                        <Wrapper className="w-full bg-white even:bg-[#362315] even:text-white p-4 flex justify-between gap-4 flex-wrap flex-col">
                                                            {/* md:flex-row */}
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