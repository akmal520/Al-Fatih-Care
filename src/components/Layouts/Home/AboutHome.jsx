import React from 'react';
import ImgBuilding from '../../../assets/building-cropped.svg';
import ImgCircle from '../../../assets/Group 9419.svg';
import Button from '../../Elements/Button';
import { IoLogoWhatsapp } from 'react-icons/io5';

const AboutHome = () => {
    return (
        <section className="container mx-auto my-16" id="about">
            <main className="pt-24">
                <div className="flex flex-col-reverse lg:flex-row justify-between items-center">
                    <div className="rounded-[24px] group">
                        <img
                            src={ImgBuilding}
                            alt="img"
                            className="group-hover:scale-105 transition-all duration-300 ease-in-out hidden lg:block lg:w-[583px] lg:h-[405px]"
                        />
                    </div>

                    <div className="inline-flex flex-col items-start lg:w-[485px] lg:h-[272px]">
                        <h1 className="text-3xl text-dark font-poppins font-semibold not-italic leading-normal">
                            Pelayanan terbaik dari para Ahli Medis
                        </h1>
                        <p className="text-second font-sora text-base not-italic font-normal leading-6 mt-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dolorem voluptatibus facilis, architecto
                            libero eos ducimus modi repudiandae quam aut?
                        </p>
                        <Button
                            text="reservasi"
                            icon={
                                <IoLogoWhatsapp className="inline-flex mr-2 mb-1 text-xl" />
                            }
                            path="/"
                            classes="mt-8"
                        />
                    </div>
                </div>

                <div className="flex lg:flex-row-reverse justify-between items-center mt-36">
                    <div className="rounded-[24px] group">
                        <img
                            src={ImgCircle}
                            alt="img"
                            width={518}
                            height={510}
                            className="group-hover:scale-105 transition-all duration-300 ease-in-out hidden lg:block"
                        />
                    </div>

                    <div className="inline-flex flex-col items-start w-[485px] h-[272px]">
                        <h1 className="text-3xl text-dark font-poppins font-semibold not-italic leading-normal">
                            Fasilitas Mewah yang memanusiakan manusia
                        </h1>
                        <p className="text-second font-sora text-base not-italic font-normal leading-6 mt-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dolorem voluptatibus facilis, architecto
                            libero eos ducimus modi repudiandae quam aut?
                        </p>
                        <Button
                            text="reservasi"
                            icon={
                                <IoLogoWhatsapp className="inline-flex mr-2 mb-1 text-xl" />
                            }
                            path="/"
                            classes="mt-8"
                        />
                    </div>
                </div>
            </main>
        </section>
    );
};

export default AboutHome;
