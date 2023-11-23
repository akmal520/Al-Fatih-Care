import React from 'react';
import { FiFacebook, FiInstagram } from 'react-icons/fi';
import { IoLogoWhatsapp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { footerNav } from '../../../constant/footerNav';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="bg-[#0A0E31] mt-40">
            <main className="container mx-auto py-12 select-none">
                <div className="flex flex-col lg:flex-row lg:justify-center items-center lg:items-start">
                    <div className="flex flex-col items-center lg:items-start lg:w-[671px]">
                        <h1 className="text-white text-2xl font-sora font-semibold not-italic leading-normal">
                            Al-Fatih Care
                        </h1>
                        <a
                            href="https://maps.app.goo.gl/LqjZiV37japn9t9A6"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <p className="text-white text-sm font-poppins font-light italic leading-normal opacity-70 hover:opacity-90 transition-all duration-300 ease-in-out mt-4 text-center lg:text-left lg:w-2/3">
                                Jl. Tengah Kp. Ragamukti Ds. Citayam Kec.
                                Tajurhalang, Bogor, Indonesia 16320
                            </p>
                        </a>
                        <div className="flex gap-4 mt-6">
                            <Link to="#">
                                <FiInstagram className="text-white opacity-70 hover:opacity-100 transition-all duration-300 ease-in-out text-xl" />
                            </Link>

                            <Link to="#">
                                <FiFacebook className="text-white opacity-70 hover:opacity-100 transition-all duration-300 ease-in-out text-xl" />
                            </Link>

                            <Link to="#">
                                <IoLogoWhatsapp className="text-white opacity-70 hover:opacity-100 transition-all duration-300 ease-in-out text-xl" />
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-wrap lg:flex-row justify-center items-center lg:items-start lg:justify-between w-full mt-12 lg:mt-0 gap-12">
                        {footerNav.map(({ title, items }, key) => (
                            <div key={key}>
                                <h2 className="text-white text-lg font-poppins font-semibold not-italic leading-normal capitalize">
                                    {title}
                                </h2>

                                <ul className="flex flex-col ">
                                    {items.map((item, index) => (
                                        <li key={index}>
                                            <Link to={item.path}>
                                                <p className="text-white text-sm font-poppins font-normal not-italic leading-normal opacity-70 mt-4 hover:opacity-100 hover:underline transition-all duration-300 ease-in-out capitalize">
                                                    {item.name}
                                                </p>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full">
                    <hr className="my-10" />
                    <div className="flex flex-row justify-center items-center">
                        <span className="text-white text-sm font-sora font-normal not-italic leading-normal opacity-80">
                            Copyright © Al-Fatih Care {year}.
                        </span>
                    </div>
                </div>
            </main>
        </footer>
    );
};

export default Footer;
