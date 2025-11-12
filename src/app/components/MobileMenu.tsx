import {
    ChevronUp,
    ChevronDown
} from "lucide-react";
import {
    useState,
    Fragment,
    ReactNode
} from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import Wrapper from "./Wrapper";
import Powered from "./Powered";
import Year from "./Year";

type mobileMenuProps = {
    className?: string;
    isHamMenuOpen?: boolean;
    setHamMenuToOpen: (isOpen: boolean) => void;
    children?: ReactNode | undefined;
};

const MobileMenu = ({ ...props }: mobileMenuProps) => {
    const [dropDownToHover1, setDropDownToHover1] = useState<boolean>(false);
    const [dropDownToHover2, setDropDownToHover2] = useState<boolean>(false);

    const {
        className,
        isHamMenuOpen,
        setHamMenuToOpen,
        children
    } = props;

    const setLinkWithoutHash = (evt: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        evt.preventDefault();

        const targetLink = document.getElementById(id);
        
        if (targetLink) {
            targetLink.scrollIntoView({
                behavior: "smooth"
            });
        };
    };

    return (
        <Fragment>
            <Wrapper className="relative">
                <Wrapper
                className={clsx(`
                    ${isHamMenuOpen ? "translate-x-0" : "-translate-x-full"}
                    lg:hidden fixed top-0 left-0 w-80 h-screen bg-[#362315] z-30 transition-transform duration-300 ease-in-out mobile-header-wrapper`
                )}
                >
                    <Wrapper className="px-4 py-2 flex items-center gap-4 border-b border-gray-200">
                        <Image
                        height={48}
                        width={48}
                        src="/icons/Logo.png"
                        alt="Truhlář Král Logo"
                        loading="lazy"
                        decoding="async"
                        />
                        <Wrapper className="text-white mobile-header-logo-text-content-wrapper">
                            <p className="text-3xl font-black">
                                Truhlář Král
                            </p>
                            <p className="text-base text-center">
                                Truhlařinu máme v krvi
                            </p>
                        </Wrapper>
                    </Wrapper>
                    <ul className="mt-4 px-4 py-2 text-white flex flex-col gap-4 mobile-header-items-wrapper">
                        <li className="mobile-header-item">
                            <Link
                            href="#home"
                            className="transition-colors duration-100 ease-in-out hover:text-[#f8aa0e]"
                            onClick={(e) => {
                                setLinkWithoutHash(e, "home");
                                setHamMenuToOpen(false);
                            }}>
                                Domů
                            </Link>
                        </li>
                        <li className="flex items-center gap-2 mobile-header-item">
                            <Link
                            href={`/services`}
                            className="transition-colors duration-100 ease-in-out hover:text-[#f8aa0e]"
                            onClick={(e) => {
                                setHamMenuToOpen(false);
                            }}>
                                Služby
                            </Link>
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
                        </li>
                        {
                            dropDownToHover1 && (
                                <Fragment>
                                    <Wrapper className="px-2 py-1">
                                        <ul className="flex flex-col gap-2 drop-down-list">
                                            <li className="drop-down-list-item">
                                                <Link
                                                href={`/kitchens`}
                                                className="transition-colors duration-100 ease-in-out hover:text-[#f8aa0e]"
                                                onClick={(e) => {
                                                    setHamMenuToOpen(false);
                                                }}>
                                                    Kuchyně na míru
                                                </Link>
                                            </li>
                                            <li className="drop-down-list-item">
                                                <Link
                                                href={`/furniture`}
                                                className="transition-colors duration-100 ease-in-out hover:text-[#f8aa0e]"
                                                onClick={(e) => {
                                                    setHamMenuToOpen(false);
                                                }}>
                                                    Nábytek na míru
                                                </Link>
                                            </li>
                                            <li className="drop-down-list-item">
                                                <Link
                                                href={`bathrooms`}
                                                className="transition-colors duration-100 ease-in-out hover:text-[#f8aa0e]"
                                                onClick={(e) => {
                                                    setHamMenuToOpen(false);
                                                }}>
                                                    Koupelny na míru
                                                </Link>
                                            </li>
                                        </ul>
                                    </Wrapper>
                                </Fragment>
                            )
                        }
                        <li className="mobile-header-item">
                            <Link
                            href="/about"
                            className="cursor-pointer transition-colors duration-100 ease-in-out hover:text-[#f8aa0e]">
                                O nás
                            </Link>
                        </li>
                        <li className="mobile-header-item">
                            <Link
                            href="/contact"
                            className="cursor-pointer transition-colors duration-100 ease-in-out hover:text-[#f8aa0e]">
                                Kontakt
                            </Link>
                        </li>
                    </ul>
                    <Wrapper className="w-full absolute bottom-0 left-0">
                        <Wrapper className="p-4">
                            <Powered className="text-base text-gray-200 text-center tracking-wide">
                                <Year />
                            </Powered>
                        </Wrapper>
                    </Wrapper>
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default MobileMenu;