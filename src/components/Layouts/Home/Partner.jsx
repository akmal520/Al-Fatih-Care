import React from 'react';
import { imgPartner } from '../../../constant/imgPartner';

const Partner = () => {
    return (
        <section className="bg-[#E2EDFF] my-8">
            <main className="container mx-auto py-12">
                <h1 className="capitalize text-center font-poppins text-xl lg:text-3xl text-[#031432] font-semibold not-italic leading-normal">
                    partner & friend
                </h1>
                {/* <div className="flex justify-center gap-4 pt-6"> */}
                <div className="flex flex-wrap lg:flex-row justify-center items-center gap-8 lg:gap-4 pt-6">
                    {imgPartner.map((item, index) => (
                        <img
                            key={index}
                            src={item}
                            alt="partner"
                            loading="lazy"
                            className="mx-auto hover:scale-105 transition-all duration-300 ease-in-out w-[78px] lg:w-[126px]"
                        />
                    ))}
                </div>
            </main>
        </section>
    );
};

export default Partner;
