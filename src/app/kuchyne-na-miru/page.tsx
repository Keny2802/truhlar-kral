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
import kitchensPricingSet from "../sets/kitchensPricingSet";

import Wrapper from "../components/Wrapper";
import Header from "../components/Header";
import DarkOverlayWrapper from "../components/DarkOverlayWrapper";
import HeroOverlayWrapper from "../components/HeroOverlayWrapper";
import PageLabel from "../components/PageLabel";
import Footer from "../sections/Footer";

const Page = () => {
    return (
        <Fragment>
            <Header
            key="kitchen"
            whichPage="kuchyne-na-miru"
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
            <HeroOverlayWrapper className="absolute inset-0 flex flex-col justify-center items-center text-white text-center max-w-6xl mx-auto">
                <PageLabel pageLabelText="Služby / Kuchyně na míru" />
                <h2 className="text-5xl md:text-8xl font-black">
                    Kuchyně na míru
                </h2>
                <p className="mt-4 text-base max-w-3xl">
                    Vyrábíme kuchyně na zakázku, přesně podle Vašich představ a snů.
                </p>
                <Wrapper className="flex justify-center items-center gap-4 mt-8">
                    <Link
                        href={`#kitchens-pricing`}
                        className="p-4 bg-[#362315] rounded-md cursor-pointer"
                        onClick={(e) => {
                            setLinkWithoutHash(e, "kitchens-pricing");
                        }}>
                        Chci kuchyň na míru
                    </Link>
                    <Link
                        href={`#order-form`}
                        className="p-4 bg-white text-black rounded-md cursor-pointer"
                        onClick={(e) => {
                            setLinkWithoutHash(e, "order-form");
                        }}>
                        Objednat kuchyň na míru
                    </Link>
                </Wrapper>
            </HeroOverlayWrapper>
            <Wrapper className="bg-[#362315] text-white px-12 lg:px-24 py-8 lg:py-16">
                <Wrapper className="flex flex-col items-center gap-4">
                    <p className="text-4xl md:text-5xl font-black">
                        Kuchyně na míru
                    </p>
                    <Link
                    href={`#kitchens-pricing`}
                    className="flex gap-2 transition-colors duration-300 ease-in-out hover:text-[#f8aa0e]"
                    onClick={(e) => {
                        setLinkWithoutHash(e, "kitchens-pricing");
                    }}>
                        Přejít
                        <ArrowRightIcon />
                    </Link>
                </Wrapper>
            </Wrapper>
            <Wrapper
                className="bg-white shadow-md px-12 lg:px-24 py-8 lg:py-16 kitchen-wrapper"
                attributes={{
                    id: "kitchens-pricing"
                }}>
                <Wrapper className="my-4 flex justify-center items-center">
                    <h2 className="pb-4 text-4xl md:text-5xl font-black uppercase">
                        Kuchyně na míru - Truhlář král
                    </h2>
                </Wrapper>
                <Wrapper className="flex justify-between gap-8 flex-col md:flex-row">
                    <Image
                    height={1000}
                    width={1000}
                    src="/sources/services/kitchen.jpg"
                    alt="Kitchen"
                    className="w-full h-auto md:w-[400px] md:h-[350px] lg:w-[500px] lg:h-[450px] rounded-md"
                    loading="lazy"
                    decoding="async"
                    />
                    <Wrapper className="kitchen-text-content-wrapper">
                        <h2 className="text-2xl md:text-3xl font-black">
                            Každá kuchyň je originál - stejně jako vy
                        </h2>
                        <Wrapper className="mt-4 flex flex-col gap-4">
                            <p className="text-base italic">
                                Nevyrábíme jen kuchyně - tvoříme prostor, kde vznikají zážitky, vůně a rodinná pohoda.
                                Každá kuchyň, kterou navrhujeme a vyrábíme, je originál - přesně podle Vašeho stylu, prostoru a představ.
                            </p>
                            <p className="text-base italic">
                                Používáme kvalitní materiály, poctivé řemeslné postupy a dbáme na každý detail, který dělá kuchň nejen krásnou, ale i praktickou.
                                Od prvního návrhu přes výrobu až po montáž se postaráme o všechno, abyste si mohli užít výsledek bez starostí.
                            </p>
                            <p className="text-base italic">
                                Spolupracujeme s prověřenými dodavateli pracovních desek, kování i spotřebičů, takže Vám dodáme kuchyň kompletně připravenou k používání.
                                Ať už jde o malý byt, rodinný dům nebo moderní prostor, vytvoříme kuchyň, která bude ladit s Vaším životem - trvanlivá, funkční a osobitým stylem.
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
                                            kitchensPricingSet.map((service, serviceIndex) => (
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

export default Page;