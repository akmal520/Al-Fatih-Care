import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navigations } from '../../../constant/navigations';
import { FaStethoscope } from 'react-icons/fa';
import Button from '../../Elements/Button';

const Navbar = () => {
    return (
        <nav className="container mx-auto w-full h-16 py-12 flex justify-between items-center">
            <Link to="/" className="logo">
                <h1 className="font-sora font-semibold text-2xl bg-[#1678F2] bg-[linear-gradient(96deg,#3A8EF6_-10.84%,#6F3AFA_196.74%)] bg-clip-text text-transparent">
                    Al-Fatih Care
                </h1>
            </Link>

            <ul className="flex gap-10">
                {navigations.map((item) => (
                    <li key={item.name}>
                        <NavLink to={item.path}>
                            {({ isActive }) => (
                                <span
                                    className={`capitalize font-sora text-base hover:text-heading ${
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
            </ul>

            <div>
                <Button
                    path="/"
                    icon={<FaStethoscope className="inline-block mr-2" />}
                    text="pendaftaran pasien"
                />
            </div>
        </nav>
    );
};

export default Navbar;
