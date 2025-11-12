"use client";

import {
    useState,
    useEffect,
    Fragment,
    ReactNode
} from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import Wrapper from "../components/Wrapper";

const services = [
    {
        label: "Služby",
        title: "Kuchyně na míru",
        href: "/kitchens",
        src: "/sources/services/kitchen.jpg",
        alt: "Kitchen"
    },
    {
        label: "Služby",
        title: "Nábytek na míru",
        href: "/furniture",
        src: "/sources/services/furniture.jpg",
        alt: "Furniture"
    },
    {
        label: "Služby",
        title: "Koupelny na míru",
        href: "/bathroom",
        src: "/sources/services/bathroom.jpg",
        alt: "Bathroom"
    },
    {
        label: "Služby",
        title: "Střešní práce",
        href: "/roof",
        src: "/sources/services/roof.jpg",
        alt: "Roof"
    }
];

const Services = () => {
    return (
        <Fragment>
            <Wrapper className="bg-[#362315] text-white px-8 md:px-24 py-16 w-full">
                <Wrapper className="mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-black">
                        Naše Služby
                    </h2>
                    <p className="my-2">
                        Vyberte si z naší nabídky poskytovaných služeb
                    </p>
                    <Wrapper className="flex justify-center items-center gap-8 flex-col md:flex-row mt-4 services-wrapper">
                        {
                            services.map((service, serviceIndex) => (
                                <Fragment key={serviceIndex}>
                                    <Wrapper
                                    className="w-full lg:w-auto service-wrapper"
                                    key={serviceIndex}>
                                        <Link
                                        href={service.href}>
                                            <Wrapper className="relative group">
                                                <Image
                                                height={1000}
                                                width={1000}
                                                src={service.src}
                                                alt={service.alt}
                                                loading="lazy"
                                                decoding="async"
                                                className="w-[95%] h-auto max-h-[500px] sm:w-full md:w-[400px] md:h-[500px] lg:w-[282px] lg:h-[426px] rounded-md cursor-pointer transition-transform duration-300 ease-in-out group-hover:scale-105"
                                                />
                                               <Wrapper className="absolute inset-0 bg-black/40 rounded-md opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                                                    <p className="text-lg tracking-wide absolute left-10 lg:left-5 bottom-5 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100">
                                                        Zjistit více
                                                    </p>
                                               </Wrapper>
                                               <Wrapper className="absolute left-10 lg:left-2.5 bottom-5 flex flex-col transition-all duration-300 ease-in-out group-hover:-translate-y-10">
                                                    <p className="text-lg lg:text-2xl font-black tracking-wide text-start text-[#f8aa0e]">
                                                        {service.label}
                                                    </p>
                                                    <p className="text-2xl lg:text-3xl font-black">
                                                        {service.title}
                                                    </p>
                                               </Wrapper>
                                            </Wrapper>
                                        </Link>
                                    </Wrapper>
                                </Fragment>
                            ))
                        }
                </Wrapper>
                </Wrapper>
            </Wrapper>
            <Wrapper className="md:px-24 md:py-16 bg-[#362315]">
                <Wrapper className="flex justify-between flex-col md:flex-row gap-8">
                    <p className="text-2xl md:text-3xl text-white font-bold leading-tight tracking-wide max-w-[500px]">
                        {/* Poctivá truhlařská práce, co jiného než spolehlivá výroba */}
                        Poctivá truhlařská práce, co jiného si přít než spolehlivou výrobu
                    </p>
                    <p className="text-[15px] text-[#b6b3b0] leading-tight tracking-wide">
                        Naše Šestajovická truhlářská dílna, Vám zaručí kvalitu a jistotu, že jí budete mít na spoustu let funkční a spolehlivou.
                    </p>
                </Wrapper>
            </Wrapper>
            <Wrapper className="md:px-24 md:py-16 bg-white">
                <Wrapper className="flex justify-between flex-col md:flex-row">
                    <h2 className="text-2xl md:text-[32px] font-bold leading-tight">
                        Nevíte si rady / potřebujete konzultaci?
                        {/* <br />
                        Kontaktujte Nás. */}
                    </h2>
                    <Wrapper className="flex flex-col gap-4">
                        <p className="text-base text-gray-500">
                            Potřebujte konzultaci nebo radu, neváhejte se na Nás a naše truhlářství obrátit a společně vytvoříme Váš projekt podle Vašich představ.
                        </p>
                        <Link
                        href={`/contact`}
                        className="bg-[#c49b5d] text-white p-4 rounded-md cursor-pointer w-max transition-colors duration-300 ease-in-out hover:bg-[#362315]">
                            Potřebuji konzultaci
                        </Link>
                    </Wrapper>
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default Services;