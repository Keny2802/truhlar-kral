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

type servicesProps = {
    className?: string;
    id?: string;
    children?: ReactNode;
};

const services = [
    {
        label: "Služby",
        title: "Kuchyně na míru",
        href: "/kuchyne-na-miru",
        src: "/sources/services/kitchen.jpg",
        alt: "Kitchen"
    },
    {
        label: "Služby",
        title: "Nábytek na míru",
        href: "/nabytek-na-miru",
        src: "/sources/services/furniture.jpg",
        alt: "Furniture"
    },
    {
        label: "Služby",
        title: "Koupelny na míru",
        href: "/koupelny-na-miru",
        src: "/sources/services/bathroom.jpg",
        alt: "Bathroom"
    },
    {
        label: "Služby",
        title: "Střešní práce",
        href: "/stresni-prace",
        src: "/sources/services/roof.jpg",
        alt: "Roof"
    }
];

const Services = ({ ...props }: servicesProps) => {
    const {
        className,
        id,
        children
    } = props;

    return (
        <Fragment>
            <Wrapper
            className={clsx(`${className || ""} bg-[#362315] text-white px-6 md:px-24 md:py-16 py-4 w-full`)}
            attributes={{
                id: id || ""
            }}>
                <Wrapper className="mx-auto text-center">
                    <h2 className="pt-4 text-4xl md:text-5xl font-black">
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
                                                    className="w-full h-auto max-h-[500px] sm:w-full md:w-[400px] md:h-[500px] lg:w-[282px] lg:h-[426px] rounded-md cursor-pointer transition-transform duration-300 ease-in-out group-hover:scale-105"
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
        </Fragment>
    );
};

export default Services;