"use client";

import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { usePathname } from "next/navigation";
import { IconContext } from "react-icons";
import { AiOutlineMail, AiFillCustomerService, AiFillLinkedin, AiOutlineAlignCenter, AiOutlineDash } from "react-icons/ai";
import { FaPenNib, FaWaveSquare } from "react-icons/fa6";
import IconToggle from "./icon-toggle";


// subcomponent : individual navigation item
interface NavItemProps {
    to: string,
    delay: string,
    children: React.ReactNode,
};

const NavItem: React.FC<NavItemProps> = ({ to, delay, children }) => {
    return (
        <div className={`opacity-0 animate-fadeIn duration-700 ${delay} text-right font-nunitosans font-bold tracking-wide text-sm py-[0.25rem] pointer-events-auto`}>
            <Link href="#" to={to} spy={true} smooth={true} duration={500}>{children}</Link>
        </div>
    );
};

// subcomponent : individual icons
interface IconLinkProps {
    href?: string,
    delay: string,
    children: React.ReactNode,
};

const IconLink: React.FC<IconLinkProps> = ({ href, delay, children }) => {
    return (
        <main>
            <a href={href} target="_blank" className={`opacity-0 animate-fadeIn duration-700 ${delay}`}>
                <IconContext.Provider value={{ className:"hover:size-7 duration-100 ease-out" }}>
                    {children}
                </IconContext.Provider>
            </a>
        </main>
    );
};

interface NavbarProps {
   handleMusic: Function
   isPlaying: Boolean
}

const Navbar: React.FC<NavbarProps> = ({ handleMusic, isPlaying }) => {
    
    // setting the color of the navbar based on pathname
    const pathname = usePathname();
    const [color, setColor] = useState<string>("text-transparent");

    useEffect(() => {
        const isWhite = pathname === "/" || pathname === "/archive" || pathname === "/work";
        setColor(isWhite ? "text-white" : "text-black");
    }, [pathname]);

    // animating the music icon
    const [flipped, setFlipped] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setFlipped(prev => !prev)
        }, 1500)
        return () => clearInterval(interval)
    })

    return (
        <main className={`fixed w-full z-50 top-0 left-0 ${color}`}>
            <div className="fixed top-[-.25rem] left-[-.25rem] m-nav p-1 drop-shadow">
                <IconToggle />
            </div>
            <div className="fixed top-[-.25rem] right-0 m-nav drop-shadow"> 
                <ul>
                    <NavItem to="/" delay="delay-600">ABOUT</NavItem>
                    <NavItem to="work" delay="delay-700">WORK</NavItem>
                    <NavItem to="contact" delay="delay-800">CONTACT</NavItem>
                </ul>
            </div>
            <div className="fixed bottom-0 left-0 m-nav drop-shadow">
                <IconLink href="https://open.spotify.com/user/christianwu000" delay="delay-1500">
                    <AiFillCustomerService size={22} />
                </IconLink>
                <div className="h-6" />
                <IconLink href="https://wuyirenn.substack.com/" delay="delay-1600">
                    <FaPenNib size={22} />
                </IconLink>
                <div className="h-6" />
                <IconLink href="https://www.linkedin.com/in/wuyirenn/" delay="delay-1700">
                    <AiFillLinkedin size={22} />
                </IconLink>
                <div className="h-6" />
                <IconLink href="mailto:wuyirenn@gmail.com" delay="delay-1800">
                    <AiOutlineMail size={22} />
                </IconLink>
            </div>
            <div className={`fixed bottom-0 right-0 rotate-180 m-nav drop-shadow ${ flipped ? "-scale-x-100" : "scale-x-100"}`} onClick={() => handleMusic()}>
                <IconLink delay="delay-1900">
                    <button>{isPlaying ? <FaWaveSquare size={24}/> : <AiOutlineDash size={22}/> }</button>
                </IconLink>
            </div>
        </main>
    );
};

export default Navbar;