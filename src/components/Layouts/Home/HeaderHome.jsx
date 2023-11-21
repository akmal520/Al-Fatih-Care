import React from 'react';
import ImgHeader from '../../../assets/header.svg';
import Button from '../../Elements/Button';
import { FaStethoscope } from 'react-icons/fa';

const HeaderHome = () => {
    return (
        <section className="container mx-auto w-full min-h-[80vh] flex justify-center select-none mt-28 lg:mt-0">
            <main className="flex flex-col lg:flex-row justify-between gap-4">
                <div className="flex flex-col justify-center">
                    <h1 className="font-poppins text-2xl lg:text-4xl not-italic font-bold leading-normal bg-[#1678F2] bg-[linear-gradient(96deg,#3A8EF6_-10.84%,#6F3AFA_196.74%)] bg-clip-text text-transparent">
                        Al-Fatih Care siap melayani keluhan masyarakat selama
                        24/7.
                    </h1>

                    <span className="pt-3 text-second font-sora text-sm lg:text-base not-italic font-normal leading-6">
                        {/* Rumah sakit adalah bagian integral dari suatu organisasi
                        sosial dan kesehatan dengan fungsi menyediakan pelayanan
                        paripurna (komprehensif). */}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptates deserunt sapiente fugit ipsa nesciunt porro
                        amet architecto at.
                    </span>

                    <div className="pt-10 lg:pt-14">
                        <Button
                            path="/"
                            text="lihat layanan"
                            icon={
                                <FaStethoscope className="inline-block mr-2" />
                            }
                        />
                    </div>
                </div>

                <div className="flex justify-center">
                    <img
                        src={ImgHeader}
                        alt="doctor"
                        className="w-[270px] lg:w-[750px]"
                    />
                </div>
            </main>
        </section>
    );
};

export default HeaderHome;
