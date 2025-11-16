"use client"

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
import bathroomPricingSet from "../sets/bathroomPricingSet";

import Wrapper from "../components/Wrapper";
import Header from "../components/Header";
import DarkOverlayWrapper from "../components/DarkOverlayWrapper";
import HeroOverlayWrapper from "../components/HeroOverlayWrapper";
import SectionBanner from "../components/SectionBanner";
import PageLabel from "../components/PageLabel";
import Footer from "../sections/Footer";

const App = () => {
    return (
        <Fragment>
            <Header
            key="bathrooms"
            whichPage="koupelny-na-miru"
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
                {/* <PageLabel pageLabelText="Služby / Koupelny na míru" /> */}
                <PageLabel
                pageLabelHref="koupelny-na-miru"
                pageLabelServicesText="Koupelny na míru"
                />
                <h2 className="text-5xl md:text-8xl font-black">
                    Koupelny na míru
                </h2>
                <p className="mt-4 text-base max-w-3xl">
                    Děláme koupelny na míru, přesně podle Vašich představ, snů a hlavně podle Vašeho očekávání.
                </p>
                <Wrapper className="mt-8 w-full flex justify-center items-center flex-col md:flex-row gap-4 p-4 cta-wrapper">
                    <Link
                    href={`#bathroom-pricing`}
                    className="p-4 bg-[#362315] rounded-md cursor-pointer w-full md:w-max"
                    onClick={(e) => {
                        setLinkWithoutHash(e, "bathroom-pricing");
                    }}
                    >
                        Chci koupelnu na míru
                    </Link>
                    <Link
                    href={`#order-form`}
                    className="p-4 bg-white text-black rounded-md cursor-pointer w-full md:w-max"
                    onClick={(e) => {
                        setLinkWithoutHash(e, "order-form");
                    }}
                    >
                        Objednat koupelnu na míru
                    </Link>
                </Wrapper>
            </HeroOverlayWrapper>
            {/* <Wrapper className="bg-[#362315] text-white px-12 lg:px-24 py-8 lg:py-16">
                <Wrapper className="flex flex-col items-center gap-4">
                    <p className="text-4xl md:text-5xl font-black">
                        Koupelny na míru
                    </p>
                    <Link
                    href={`#furniture-pricing`}
                    className="flex gap-2 transition-colors duration-300 ease-in-out hover:text-[#f8aa0e]"
                    onClick={(e) => {
                        setLinkWithoutHash(e, "bathroom-pricing");
                    }}>
                        Přejít
                        <ArrowRightIcon />
                    </Link>
                </Wrapper>
            </Wrapper> */}
            <SectionBanner
            bannerMainText="Koupelny na míru"
            bannerHref="bathroom-pricing"
            />
            <Wrapper
            className="bg-white shadow-md px-12 md:px-24 py-8 md:py-16"
            attributes={{
                id: "bathroom-pricing"
            }}>
                <Wrapper className="flex justify-center items-center">
                    <h2 className="pb-4 text-4xl md:text-5xl font-black uppercase">
                        Koupelny na míru - Truhlář na míru
                    </h2>
                </Wrapper>
                <Wrapper className="mt-4 flex justify-between gap-8 flex-col md:flex-row">
                    <Image
                    height={1000}
                    width={1000}
                    src="/sources/services/bathroom.jpg"
                    alt="Kitchen"
                    className="w-full h-auto md:w-[400px] md:h-[350px] lg:w-[500px] lg:h-[450px] rounded-md"
                    loading="lazy"
                    decoding="async"
                    />
                    <Wrapper className="bathroom-text-content-wrapper">
                        <h2 className="text-2xl md:text-3xl font-black">
                            Koupelna i pro ty nejtajemnější radovánky
                        </h2>
                        <Wrapper className="mt-4 flex flex-col gap-4">
                            <p className="text-base italic">
                                koupelna je místo každodenního klidu a regenerace - proto věříme, že si zaslouží stejnou pozornost jako
                                kterýkoli jiný prostor v domě. Každý prvek vyrábíme na míru tak, aby ladil s Vaším stylem, prostorem
                                i potřebami. Kombinujeme moderní design s funkčností a dlouhou životností, abyste si mohli užívat komfort i krásu v jednom.
                            </p>
                            <p className="text-base italic">
                                Používáme odolné materiály určené pro vlhké prostředí, kvalitní povrchové úpravy a kování, které zaručí dlouhou
                                životnost a snadnou údržbu.
                                Dřevo ošetřujeme tak, aby si zachovalo svůj přirozený vzhled, ale zároveň bylo chráněno proti vlhkosti a opotřebení.
                            </p>
                            <p className="text-base italic">
                                Na míru vyrábíme koupelnové skříňky, umyvadlové desky, zrcadlové sestavy i úložné systémy,
                                které dokonale zapadnou do Vašeho prostoru. Pomůžeme Vám sladit barvy, dekory i rozměry tak, aby vše působilo jednotně a elegantně.
                                Ať už preferujete moderní minimalismus, přírodní styl nebo rustikální atmosféru, přizpůsobíme každý kus Vašemu kusu.
                            </p>
                            <p className="text-base italic">
                                Postaráme se o celý proces - od zaměření a návrhu až po finální montáž. Spolupracujeme s ověřenými dodavateli umyvadel, desek a kování,
                                takže Vám dodáme kompletní řešení připravené k používání. S námi získáte koupelnum která bude nejen krásná na pohled, ale i dokonale
                                praktická a vyrobená s péčí jakou si Váš domov zaslouží.
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
                                    🪚 Ceník koupelen na míru
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
                                            bathroomPricingSet.map((service, serviceIndex) => (
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
                                            Každou koupelnu navrhujeme individuálně, aby přesně seděla Vašemu prostoru i stylu.
                                            Proto jsou ceny uvedené pouze jako orientační - konečnou nabídku vždy připravíme na míru
                                            spolu s návrhem a doporučením nejvhodnějších materiálů.
                                        </p>
                                        <p className="mt-0.5">
                                            Stačí nám poslat rozměry nebo se domluvit na osobní konzultaci.
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