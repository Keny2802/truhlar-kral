"use client";

import {
    useState,
    Fragment,
    ReactNode
} from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import Wrapper from "../components/Wrapper";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Footer from "../sections/Footer";
import setLinkWithoutHash from "../components/setLinkWithoutHash";

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
                key="contact"
                whichPage="contact"
                className="lg:bg-transparent"
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
                    <Wrapper className="absolute top-[30%] lg:top-[25%] left-[12%] lg:left-[25%] text-white text-center max-w-6xl mx-auto">
                        <h2 className="text-5xl lg:text-8xl font-black">
                            Kontaktujte nás
                        </h2>
                        <p className="mt-4 text-base max-w-3xl">
                            S jakýmkoliv Vaším dotazem nás kontaktujte.
                        </p>
                        <Wrapper className="flex justify-center items-center gap-4 mt-8">
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
                    </Wrapper>
                </Wrapper>
                <Wrapper
                className="bg-white shadow-md p-8 lg:px-24 lg:py-16 contact-form-wrapper"
                attributes={{
                    id: "contact"
                }}>
                    <Wrapper className="flex justify-between items-center gap-4 flex-col lg:flex-row">
                        <Wrapper>
                            <p className="text-[#362315] text-3xl lg:text-4xl font-black label">
                                Kontakt
                            </p>
                            <Wrapper className="flex justify-center items-center gap-4 mt-4">
                                <Logo />
                                <p className="text-2xl tracking-tight font-black">
                                    Truhlářství Král
                                </p>
                            </Wrapper>
                        </Wrapper>
                        <form className="bg-white shadow-md w-full lg:w-1/2 rounded-md p-4">
                            <Wrapper className="flex items-center gap-4">
                                <Logo />
                                <h3 className="text-[#362315] text-2xl lg:text-3xl font-black label">
                                    Kontaktní Formulář
                                </h3>
                            </Wrapper>
                            <p className="mt-2 text-[15px]">
                                Pro kontakt / objednávku / poptávku, prosíme vyplnit následující formulář
                            </p>
                            <Wrapper className="flex justify-between items-center mt-4 border-b border-gray-200 p-2 tabs-wrapper">
                                <button
                                type="button"
                                className={clsx(`${activeTab === "contact" && "bg-[#362315] text-white"} text-sm cursor-pointe px-4 py-2 rounded-md cursor-pointer`)}
                                onClick={(e) => {
                                    setActiveTab("contact");
                                }}
                                >
                                    Kontakt / Dotaz
                                </button>
                                <button
                                type="button"
                                className={clsx(`${activeTab === "order" && "bg-[#362315] text-white"} text-sm cursor-pointe px-4 py-2 rounded-md cursor-pointer`)}
                                onClick={(e) => {
                                    setActiveTab("order");
                                }}
                                >
                                    Objednávka
                                </button>
                                <button
                                type="button"
                                className={clsx(`${activeTab === "inquiry" && "bg-[#362315] text-white"} text-sm cursor-pointe px-4 py-2 rounded-md cursor-pointer`)}
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
                                            <Wrapper className="mt-2 flex gap-2">
                                                <input
                                                type="text"
                                                placeholder="Jan Novák"
                                                autoComplete="off"
                                                spellCheck="false"
                                                className="w-full rounded-md border border-gray-200 p-2 focus:outline-none"
                                                />
                                                <input
                                                type="email"
                                                placeholder="jan.novak@seznam.cz"
                                                autoComplete="off"
                                                spellCheck="false"
                                                className="w-full rounded-md border border-gray-200 p-2 focus:outline-none"
                                                />
                                            </Wrapper>
                                            <Wrapper className="mt-2">
                                                <textarea
                                                placeholder="Dobrý den, pane Králi, mám zájem o Vaše truhlářské služby. Prosím o Vaše laskavé zaslání cenové nabídky těchto služeb. Týká se o skříň na zakázku. Přeji hezký den Jan Novák"
                                                autoComplete="off"
                                                spellCheck="false"
                                                className="h-52 w-full rounded-md border border-gray-200 p-2 focus:outline-none resize-none placeholder:text-[15.5px] text-sm"></textarea>
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
                                    <Fragment></Fragment>
                                )
                            }
                            {
                                activeTab === "inquiry" && (
                                    <Fragment></Fragment>
                                )
                            }
                        </form>
                    </Wrapper>
                </Wrapper>
                <Footer />
            </Wrapper>
        </Fragment>
    );
};

export default Contact;