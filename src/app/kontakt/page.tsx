"use client";

import {
    useState,
    Fragment,
    ReactNode
} from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import setLinkWithoutHash from "../functions/setLinkWithoutHash";

import Wrapper from "../components/Wrapper";
import Logo from "../components/Logo";
import Header from "../components/Header";
import DarkOverlayWrapper from "../components/DarkOverlayWrapper";
import HeroOverlayWrapper from "../components/HeroOverlayWrapper";
import PageLabel from "../components/PageLabel";
import SectionBanner from "../components/SectionBanner";
import Footer from "../sections/Footer";
import Powered from "../components/Powered";
import Year from "../components/Year";

type contactProps = {
    className?: string;
    children?: ReactNode;
};

const Contact = ({ ...props }: contactProps) => {
    const [activeTab, setActiveTab] = useState<"contact" | "order" | "inquiry">("contact");

    const {
        className,
        children
    } = props;

    return (
        <Fragment>
            <Wrapper className={clsx(`${className || ""} contact-wrapper`)}>
                <Header
                    key="kontakt"
                    whichPage="kontakt"
                />
                <Wrapper className="relative">
                    <Image
                        height={1000}
                        width={1000}
                        src="/sources/Hero_1.jpg"
                        alt="Hero Fotka Truhlář Král"
                        loading="lazy"
                        decoding="async"
                        className="w-full max-h-screen lg:object-cover backdrop-blur-sm"
                    />
                    {/* absolute top-[30%] lg:top-[25%] left-[12%] lg:left-[25%] text-white text-center max-w-6xl mx-auto */}
                    <DarkOverlayWrapper />
                    <HeroOverlayWrapper className="absolute inset-0 flex flex-col justify-center items-center max-w-6xl mx-auto text-center text-white">
                        {/* <PageLabel pageLabelText="Kontakt" /> */}
                        <PageLabel
                        pageLabelHref="kontakt"
                        pageLabelText="Kontakt"
                        />
                        <h2 className="text-5xl lg:text-8xl font-black">
                            Kontaktujte nás
                        </h2>
                        <p className="mt-4 text-base max-w-3xl">
                            S jakýmkoliv Vaším dotazem nás kontaktujte.
                        </p>
                        <Wrapper className="mt-8 w-full flex justify-center items-center flex-col md:flex-row gap-4 p-4 cta-wrapper">
                            <Link
                                href="#contact"
                                className="p-4 bg-[#362315] rounded-md cursor-pointer"
                                onClick={(e) => {
                                    setLinkWithoutHash(e, "contact");
                                }}>
                                Kontaktujte nás
                            </Link>
                            <Link
                                href="#multi-step-form"
                                className="p-4 bg-white text-black rounded-md cursor-pointer"
                                onClick={(e) => {
                                    setLinkWithoutHash(e, "multi-step-form");
                                }}>
                                Vyplňte Formulář
                            </Link>
                        </Wrapper>
                    </HeroOverlayWrapper>
                </Wrapper>
                <SectionBanner
                bannerMainText="Kontakt"
                bannerHref="contact"
                />
                <Wrapper
                    className="bg-white shadow-md p-8 lg:px-24 lg:py-16 contact-form-wrapper">
                    <Wrapper className="flex justify-between gap-4 flex-col lg:flex-row">
                        <form className="bg-white shadow-md w-full lg:w-1/2 rounded-md p-4" id="multi-step-form">
                            <Wrapper className="flex items-center gap-4">
                                <Logo />
                                <h3 className="text-[#362315] text-2xl lg:text-3xl font-black label">
                                    Kontaktní Formulář
                                </h3>
                            </Wrapper>
                            <p className="mt-2 text-[15px]">
                                Pro kontakt / objednávku / poptávku, prosíme vyplnit následující formulář
                            </p>
                            <Wrapper className="flex justify-between lg:items-center flex-col lg:flex-row mt-4 border-b border-gray-200 p-2 tabs-wrapper">
                                <button
                                    type="button"
                                    className={clsx(`${activeTab === "contact" && "bg-[#362315] text-white"} text-sm cursor-pointer px-4 py-2 rounded-md`)}
                                    onClick={(e) => {
                                        setActiveTab("contact");
                                    }}
                                >
                                    Kontakt / Dotaz
                                </button>
                                <button
                                    type="button"
                                    className={clsx(`${activeTab === "order" && "bg-[#362315] text-white"} text-sm cursor-pointer px-4 py-2 rounded-md`)}
                                    onClick={(e) => {
                                        setActiveTab("order");
                                    }}
                                >
                                    Objednávka
                                </button>
                                <button
                                    type="button"
                                    className={clsx(`${activeTab === "inquiry" && "bg-[#362315] text-white"} text-sm cursor-pointer px-4 py-2 rounded-md`)}
                                    onClick={(e) => {
                                        setActiveTab("inquiry");
                                    }}
                                >
                                    Poptávka
                                </button>
                            </Wrapper>
                            {
                                activeTab === "contact" && (
                                    <Fragment>
                                        <Wrapper className="mt-4">
                                            <h3>
                                                Kontaktujte nás
                                            </h3>
                                            {/* flex-col */}
                                            <Wrapper className="mt-2 flex flex-col lg:flex-row gap-2">
                                                <Wrapper className="relative">
                                                    <input
                                                        type="text"
                                                        placeholder="Jan Novák"
                                                        autoComplete="off"
                                                        spellCheck="false"
                                                        className="w-full rounded-md border border-gray-200 pl-12 p-2 focus:outline-none"
                                                    />
                                                    <span className="absolute top-2 left-4 text-lg font-black border-b border-[#362315]">
                                                        1
                                                    </span>
                                                </Wrapper>
                                                <Wrapper className="relative">
                                                    <input
                                                        type="email"
                                                        placeholder="jan.novak@seznam.cz"
                                                        autoComplete="off"
                                                        spellCheck="false"
                                                        className="w-full rounded-md border border-gray-200 pl-12 p-2 focus:outline-none"
                                                    />
                                                    <span className="absolute top-2 left-4 text-lg font-black border-b border-[#362315]">
                                                        2
                                                    </span>
                                                </Wrapper>
                                            </Wrapper>
                                            <Wrapper className="relative mt-2">
                                                <textarea
                                                    placeholder="Dobrý den, pane Králi, mám zájem o Vaše truhlářské služby. Prosím o Vaše laskavé zaslání cenové nabídky těchto služeb. Týká se o skříň na zakázku. Přeji hezký den Jan Novák"
                                                    autoComplete="off"
                                                    spellCheck="false"
                                                    className="h-52 w-full rounded-md border border-gray-200 pl-12 p-2 focus:outline-none resize-none placeholder:text-[15.5px] text-sm"></textarea>
                                                <span className="absolute top-2 left-4 text-lg font-black border-b border-[#362315]">
                                                    3
                                                </span>
                                                <button
                                                    type="submit"
                                                    className="mt-2 p-4 bg-[#362315] text-white w-full rounded-md cursor-pointer">
                                                    Dokončit
                                                </button>
                                            </Wrapper>
                                        </Wrapper>
                                    </Fragment>
                                )
                            }
                            {
                                activeTab === "order" && (
                                    <Fragment>
                                        <Wrapper className="mt-2 flex flex-col lg:flex-row gap-2">
                                            <Wrapper className="relative">
                                                <input
                                                    type="text"
                                                    placeholder="Jan Novák"
                                                    autoComplete="off"
                                                    spellCheck="false"
                                                    className="w-full rounded-md border border-gray-200 pl-12 p-2 focus:outline-none"
                                                />
                                                <span className="absolute top-2 left-4 text-lg font-black border-b border-[#362315]">
                                                    1
                                                </span>
                                            </Wrapper>
                                            <Wrapper className="relative">
                                                <input
                                                    type="email"
                                                    placeholder="jan.novak@seznam.cz"
                                                    autoComplete="off"
                                                    spellCheck="false"
                                                    className="w-full rounded-md border border-gray-200 pl-12 p-2 focus:outline-none"
                                                />
                                                <span className="absolute top-2 left-4 text-lg font-black border-b border-[#362315]">
                                                    2
                                                </span>
                                            </Wrapper>
                                        </Wrapper>
                                        <Wrapper className="relative mt-2">
                                            <input
                                                type="adress"
                                                placeholder="Pražská 111, Šestajovice"
                                                autoComplete="off"
                                                spellCheck="false"
                                                className="w-full rounded-md border border-gray-200 pl-12 p-2 focus:outline-none"
                                            />
                                            <span className="absolute top-2 left-4 text-lg font-black border-b border-[#362315]">
                                                3
                                            </span>
                                        </Wrapper>
                                        <Wrapper className="relative mt-2">
                                            <textarea
                                                placeholder="Dobrý den, pane Králi, objednávám si koupelnu na míru od Vás. Přeji hezký den Jan Novák"
                                                autoComplete="off"
                                                spellCheck="false"
                                                className="h-52 w-full rounded-md border border-gray-200 pl-12 p-2 focus:outline-none resize-none placeholder:text-[15.5px] text-sm"></textarea>
                                            <span className="absolute top-2 left-4 text-lg font-black border-b border-[#362315]">
                                                4
                                            </span>
                                            <button
                                                type="submit"
                                                className="mt-2 p-4 bg-[#362315] text-white w-full rounded-md cursor-pointer">
                                                Dokončit
                                            </button>
                                        </Wrapper>
                                    </Fragment>
                                )
                            }
                            {
                                activeTab === "inquiry" && (
                                    <Fragment>
                                        <Wrapper className="mt-2 flex flex-col lg:flex-row gap-2">
                                            <Wrapper className="relative">
                                                <input
                                                    type="text"
                                                    placeholder="Jan Novák"
                                                    autoComplete="off"
                                                    spellCheck="false"
                                                    className="w-full rounded-md border border-gray-200 pl-12 p-2 focus:outline-none"
                                                />
                                                <span className="absolute top-2 left-4 text-lg font-black border-b border-[#362315]">
                                                    1
                                                </span>
                                            </Wrapper>
                                            <Wrapper className="relative">
                                                <input
                                                    type="email"
                                                    placeholder="jan.novak@seznam.cz"
                                                    autoComplete="off"
                                                    spellCheck="false"
                                                    className="w-full rounded-md border border-gray-200 pl-12 p-2 focus:outline-none"
                                                />
                                                <span className="absolute top-2 left-4 text-lg font-black border-b border-[#362315]">
                                                    2
                                                </span>
                                            </Wrapper>
                                        </Wrapper>
                                        <Wrapper className="relative mt-2">
                                            <textarea
                                                placeholder="Dobrý den, pane Králi, poptávám po nové střeše. Prosím o Vaše laskavé zaslání cenové nabídky o novou střechu. Mockrát Vám děkuji a přeji krásný den, Jan Novák"
                                                autoComplete="off"
                                                spellCheck="false"
                                                className="h-52 w-full rounded-md border border-gray-200 pl-12 p-2 focus:outline-none resize-none placeholder:text-[15.5px] text-sm"></textarea>
                                            <span className="absolute top-2 left-4 text-lg font-black border-b border-[#362315]">
                                                3
                                            </span>
                                            <button
                                                type="submit"
                                                className="mt-2 p-4 bg-[#362315] text-white w-full rounded-md cursor-pointer">
                                                Dokončit
                                            </button>
                                        </Wrapper>
                                    </Fragment>
                                )
                            }
                            <Wrapper className="mt-4 flex flex-col justify-center items-center gap-2">
                                <Powered className="text-base md:text-xl" />
                                <Year />
                            </Wrapper>
                        </form>

                        <Wrapper
                            className="flex flex-col"
                            attributes={{
                                id: "contact"
                            }}>
                            <p className="text-[#362315] text-3xl lg:text-4xl font-black border-b border-gray-200 label">
                                Kontaktní údaje
                            </p>
                            <Wrapper className="mt-4">
                                <p className="text-xl">
                                    Kontakt
                                </p>
                                <Wrapper className="mt-4">
                                    <Wrapper>
                                        <p className="text-base">
                                            Roman Král
                                        </p>
                                    </Wrapper>
                                    <Wrapper>
                                        <Link
                                            href={`tel:737337737`}
                                            className="text-base">
                                            737 337 737
                                        </Link>
                                    </Wrapper>
                                    <Wrapper>
                                        <Link
                                            href={`mailto:roman.kral@truhlarstvikral.cz`}
                                            className="text-base">
                                            roman.kral@truhlarstvikral.cz
                                        </Link>
                                    </Wrapper>
                                </Wrapper>
                            </Wrapper>
                            <Wrapper className="mt-4">
                                <p className="text-xl">
                                    {/* Sídlo naší truhlářské dílny */}
                                    Sídlo
                                </p>
                                <Wrapper className="mt-4">
                                    <Wrapper>
                                        <p className="text-base">
                                            Tyršova 111, Šestajovice, 250 92
                                        </p>
                                    </Wrapper>
                                </Wrapper>
                            </Wrapper>
                        </Wrapper>
                    </Wrapper>
                </Wrapper>
                <Footer />
            </Wrapper>
        </Fragment>
    );
};

export default Contact;