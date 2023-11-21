import React, { useEffect } from 'react';
import Button from '../Elements/Button';
import { IoLogoWhatsapp } from 'react-icons/io5';
import Aos from 'aos';
import 'aos/dist/aos.css';

const CardLayanan = (props) => {
    const { children, anim, animDuration } = props;
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <div
            className="bg-white flex flex-col items-center rounded-[24px] shadow-[0px_24px_32px_-3px_rgba(3,9,50,0.04)]  hover:shadow-[0px_24px_32px_-3px_rgba(3,9,50,0.22)] hover:!scale-105 hover:cursor-pointer transition-all duration-75 ease-in-out p-8 select-none group"
            data-aos={anim}
            data-aos-duration={animDuration}
        >
            {children}
        </div>
    );
};

const Header = (props) => {
    const { children, title, bg } = props;
    return (
        <>
            <div className="relative">
                <span
                    className={`group-hover:animate-ping group-hover:opacity-30 absolute inline-flex h-full w-full rounded-full opacity-0 ${bg}`}
                ></span>
                {children}
            </div>
            <h2 className="text-black text-2xl font-poppins font-medium not-italic leading-[21px] capitalize pt-6">
                {title}
            </h2>
        </>
    );
};

const Body = (props) => {
    const { children } = props;
    return (
        <p className="text-second font-sora text-base not-italic font-normal leading-6 pt-3 text-center">
            {children}
        </p>
    );
};

const Footer = () => {
    return (
        <div className="pt-6">
            <Button
                text="reservasi"
                icon={
                    <IoLogoWhatsapp className="inline-flex mr-2 mb-1 text-xl" />
                }
                path="/"
                classes="!w-full"
            />
        </div>
    );
};

CardLayanan.Header = Header;
CardLayanan.Body = Body;
CardLayanan.Footer = Footer;

export default CardLayanan;
