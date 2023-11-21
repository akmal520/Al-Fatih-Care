import React, { useEffect } from 'react';
import { IoLogoWhatsapp } from 'react-icons/io5';
import { LuCalendarDays } from 'react-icons/lu';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Pelayanan = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <section
            className="container mx-auto my-16"
            data-aos="flip-down"
            data-aos-duration="1000"
        >
            <main className="mt-32 lg:mt-24 bg-[linear-gradient(96deg,#3A8EF6_-10.84%,#6F3AFA_196.74%)] shadow-[0px_20px_24px_0px_rgba(65,132,247,0.24)] rounded-[32px] py-10 px-6 lg:py-16 lg:px-56 flex flex-col items-center justify-center select-none">
                <h1 className="text-xl lg:text-3xl text-center lg:text-left text-white font-poppins font-semibold not-italic leading-normal capitalize">
                    reservasi pelayanan kami sekarang
                </h1>
                <p className="text-white font-sora text-sm lg:text-base not-italic font-normal leading-6 mt-2 opacity-80 text-center">
                    Rumah sakit adalah bagian integral dari suatu organisasi
                    sosial dan kesehatan dengan fungsi menyediakan pelayanan
                    paripurna (komprehensif).
                </p>

                <div className="flex flex-row gap-4 lg:gap-8 mt-10">
                    <button className="border border-white rounded-full text-white capitalize font-sora text-sm lg:text-lg not-italic font-normal leading-normal px-2 py-2 lg:py-4 lg:px-7 hover:bg-white hover:text-[#1678F2] transition-all duration-300 ease-in-out">
                        <LuCalendarDays className="inline-flex mr-2 mb-1 text-base lg:text-xl" />
                        cek jadwal dokter
                    </button>
                    <button className="bg-white text-[#1678F2] border border-white rounded-full capitalize font-sora text-sm lg:text-lg not-italic font-normal leading-normal px-2 py-2 lg:py-4 lg:px-7 hover:bg-white/80 transition-all duration-300 ease-in-out">
                        <IoLogoWhatsapp className="inline-flex mr-2 mb-1 text-base lg:text-xl" />
                        reservasi
                    </button>
                </div>
            </main>
        </section>
    );
};

export default Pelayanan;
