import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navigations } from '../../../constant/navigations';
import Button from '../../Elements/Button';
import { FaStethoscope } from 'react-icons/fa';
import { AiOutlineAlignRight } from 'react-icons/ai';
import { FaXmark } from 'react-icons/fa6';

const NavbarMobile = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="container mx-auto w-full h-16 py-12 flex justify-between items-center fixed top-0 bg-white shadow-sm z-50">
            <Link to="/" className="logo">
                <h1 className="font-sora font-semibold text-xl lg:text-2xl bg-[#1678F2] bg-[linear-gradient(96deg,#3A8EF6_-10.84%,#6F3AFA_196.74%)] bg-clip-text text-transparent">
                    Al-Fatih Care
                </h1>
            </Link>

            <button onClick={() => setIsOpen(true)}>
                <AiOutlineAlignRight className="text-3xl" />
            </button>
            <div
                className={`${
                    isOpen ? 'right-0' : '-right-full'
                } bg-white fixed top-0 h-full w-full transition-all duration-300 ease-in-out overflow-hidden z-50`}
            ></div>

            <ul
                className={`${
                    isOpen ? 'right-0' : '-right-full'
                } flex gap-10 h-screen w-full flex-col items-center justify-center transition-all duration-300 ease-in-out fixed top-0 z-50`}
            >
                <div
                    onClick={() => setIsOpen(false)}
                    className="cursor-pointer absolute top-8 right-8 text-black"
                >
                    <FaXmark className="text-3xl" />
                </div>
                {navigations.map((item) => (
                    <li key={item.name}>
                        <NavLink to={item.path}>
                            {({ isActive }) => (
                                <span
                                    className={`capitalize font-sora text-lg hover:text-heading ${
                                        isActive
                                            ? 'font-bold text-heading'
                                            : 'font-normal text-second'
                                    } `}
                                >
                                    {item.name}
                                </span>
                            )}
                        </NavLink>
                    </li>
                ))}
                <div>
                    <Button
                        path="/"
                        icon={<FaStethoscope className="inline-block mr-2" />}
                        text="pendaftaran pasien"
                    />
                </div>
            </ul>
        </nav>
    );
};

export default NavbarMobile;
