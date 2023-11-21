import React, { useEffect } from 'react';
import { BsBandaid } from 'react-icons/bs';
import { PiHeartbeat, PiSyringe } from 'react-icons/pi';
import CardLayanan from '../../Fragments/CardLayanan';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Layanan = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <section className="container mx-auto my-16">
            <main className="pt-16">
                <div className="flex flex-col gap-3 lg:gap-0 lg:flex-row justify-between text-center lg:text-left">
                    <h3
                        className="text-dark text-2xl font-poppins font-semibold not-italic leading-normal capitalize flex-1"
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                    >
                        daftar layanan
                    </h3>
                    <p
                        className="text-second font-sora text-base not-italic font-normal leading-6 flex-1"
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                    >
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nam consequuntur quia temporibus, voluptate
                        voluptatum totam dolores repellendus.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 pt-12">
                    {/* <div className="bg-white flex flex-col items-center border rounded-[24px] p-8">
                        <BsBandaid className="p-2 h-14 w-14 rounded-full text-[#855FCE] bg-[#855FCE]/[0.1] overflow-visible" />
                        <h2 className="text-black text-2xl font-poppins font-medium not-italic leading-[21px] capitalize pt-6">
                            penangan luka
                        </h2>
                        <p className="text-second font-sora text-base not-italic font-normal leading-6 pt-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Corporis nobis eveniet saepe similique?
                        </p>
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
                    </div> */}
                    <CardLayanan anim="zoom-in" animDuration="1000">
                        <CardLayanan.Header
                            title="penangan luka"
                            bg="bg-[#855FCE]"
                        >
                            <BsBandaid className="p-2 h-14 w-14 rounded-full text-[#855FCE] bg-[#855FCE]/[0.1] overflow-visible" />
                        </CardLayanan.Header>
                        <CardLayanan.Body>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Corporis nobis eveniet saepe similique?
                        </CardLayanan.Body>
                        <CardLayanan.Footer />
                    </CardLayanan>
                    <CardLayanan anim="zoom-in" animDuration="1000">
                        <CardLayanan.Header
                            title="medical check up"
                            bg="bg-[#27AE60]"
                        >
                            <PiHeartbeat className="p-2 h-14 w-14 rounded-full text-[#27AE60] bg-[#27AE60]/[0.1] overflow-visible relative" />
                        </CardLayanan.Header>
                        <CardLayanan.Body>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Corporis nobis eveniet saepe similique?
                        </CardLayanan.Body>
                        <CardLayanan.Footer />
                    </CardLayanan>
                    <CardLayanan anim="zoom-in" animDuration="1000">
                        <CardLayanan.Header
                            title="profesional doctor"
                            bg="bg-[#2F80ED]"
                        >
                            <PiSyringe className="p-2 h-14 w-14 rounded-full text-[#2F80ED] bg-[#2F80ED]/[0.1] overflow-visible" />
                        </CardLayanan.Header>
                        <CardLayanan.Body>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Corporis nobis eveniet saepe similique?
                        </CardLayanan.Body>
                        <CardLayanan.Footer />
                    </CardLayanan>
                </div>
            </main>
        </section>
    );
};

export default Layanan;
