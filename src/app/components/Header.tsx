"use client"

import {
    useState,
    Fragment,
    ReactNode,
    useEffect
} from "react";
import {
    Menu,
    ChevronUp,
    ChevronDown,
    Minus
} from "lucide-react";
import clsx from "clsx";
import Link from "next/link";

import Wrapper from "./Wrapper";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import Logo from "./Logo";

type headerProps = {
    key: string;
    className?: string;
    whichPage?: "home" | "about" | "contact" | "kitchens" | "furniture" | "bathroom";
    children?: ReactNode;
};

const headerSet = [
    {
        labelLink: "Domů",
        // href: "home",
        href: "/",
        page: "home",
        type: "fragment link"
    },
    {
        labelLink: "Služby",
        href: "/services",
        page: "services",
        type: "page drop down",
        dropDownList: [
            {
                label: "Kuchyně na míru",
                href: "/kitchens"
            },
            {
                label: "Nábytek na míru",
                href: "/furniture"
            },
            {
                label: "Koupelny na míru",
                href: "/bathroom"
            }
        ]
    },
    {
        labelLink: "O nás",
        href: "/about",
        page: "about",
        type: "page"
    },
    {
        labelLink: "Kontakt",
        href: "/contact",
        page: "contact",
        type: "page"
    },
];

const Header = ({ ...props }: headerProps) => {
    const [dropDownToHover1, setDropDownToHover1] = useState<boolean>(false);
    const [isHamMenuOpen, setHamMenuToOpen] = useState<boolean>(false);
    const [isHeaderMoving, setHeaderIsMoving] = useState<boolean>(false);

    const {
        key,
        className,
        whichPage,
        children
    } = props;
    
    return (
        <Fragment>
            <header className={clsx(`${className || ""} fixed text-white px-4 py-2 w-full z-10 bg-[#362315] header`)}
            key={`${key}-header`}>
                <Wrapper className="flex justify-between items-center">
                    <Wrapper className="flex items-center gap-4">
                        <Logo />
                        <Wrapper className={clsx(`
                            
                            logo-wrapper`)}>
                            <p className="md:text-4xl text-3xl font-black logo">
                                Truhlářství Král
                            </p>
                            <p className="text-base md:p-2 sub-logo">
                                Truhlařinu máme v krvi
                            </p>
                        </Wrapper>
                    </Wrapper>
                    <ul className="hidden lg:flex lg:gap-8 header-items-wrapper">
                        {
                            headerSet.map((headerItem, headerItemIndex) => (
                                <Fragment key={headerItemIndex}>
                                    {
                                        headerItem.page === whichPage ? "" : (
                                            <li className="header-item">
                                                <Link
                                                href={headerItem.href}
                                                className="transition-colors duration-100 ease-in-out hover:text-[#f8aa0e]">
                                                    {headerItem.labelLink}
                                                </Link>
                                            </li>
                                        )
                                    }
                                    {
                                        headerItem.type === "page drop down" && (
                                            <Fragment>
                                                <li className="flex gap-2 header-item">
                                                    <Link
                                                    href={headerItem.href}
                                                    className="transition-colors duration-100 ease-in-out hover:text-[#f8aa0e]">
                                                        {headerItem.labelLink}
                                                    </Link>
                                                </li>
                                                {
                                                    dropDownToHover1 ? (
                                                        <Fragment>
                                                            <ChevronUp
                                                            className="h-6 w-6 cursor-pointer transition-colors duration-100 ease-in-out hover:text-[#f8aa0e]"
                                                            onClick={(e) => {
                                                                setDropDownToHover1(false);
                                                            }}
                                                            />
                                                        </Fragment>
                                                    ) : (
                                                        <Fragment>
                                                            <ChevronDown
                                                            className="h-6 w-6 cursor-pointer transition-colors duration-100 ease-in-out hover:text-[#f8aa0e]"
                                                            onClick={(e) => {
                                                                setDropDownToHover1(true);
                                                            }}
                                                            />
                                                        </Fragment>
                                                    )
                                                }
                                                {
                                                    dropDownToHover1 && (
                                                        <Fragment>
                                                            <Wrapper className="absolute top-18 right-10 px-3 py-2 bg-[#362315] shadow-md rounded-md">
                                                                <ul className="flex flex-col gap-3 drop-down-list">
                                                                    {
                                                                        headerItem.dropDownList?.map((listItem, listItemIndex) => (
                                                                            <Fragment>
                                                                                <li className="p-1 border-b border-gray-200 drop-down-list-item">
                                                                                    <Link
                                                                                    href={listItem.href}
                                                                                    className="transition-colors duration-100 ease-in-out hover:text-[#f8aa0e]"
                                                                                    onClick={(e) => {
                                                                                        setHamMenuToOpen(false);
                                                                                    }}>
                                                                                        {listItem.label}
                                                                                    </Link>
                                                                                </li>
                                                                            </Fragment>
                                                                        ))
                                                                    }
                                                                </ul>
                                                            </Wrapper>
                                                        </Fragment>
                                                    )
                                                }
                                            </Fragment>
                                        )
                                    }
                                </Fragment>
                            ))
                        }
                    </ul>
                    {
                        isHamMenuOpen ? (
                            <Fragment>
                                <Minus
                                className="lg:hidden h-8 w-8 cursor-pointer"
                                onClick={(e) => {
                                    setHamMenuToOpen(false);
                                }}
                                />
                            </Fragment>
                        ) : (
                            <Fragment>
                                <Menu
                                className="lg:hidden h-8 w-8 cursor-pointer"
                                onClick={(e) => {
                                    setHamMenuToOpen(true);
                                }}
                                />
                            </Fragment>
                        )
                    }
                </Wrapper>
            </header>
            <MobileMenu
            isHamMenuOpen={isHamMenuOpen}
            setHamMenuToOpen={setHamMenuToOpen}/>
            {children}
        </Fragment>
    );
};

export default Header;