import React, { useEffect } from 'react';
import Ava from '../../../assets/ava.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Testimoni = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <section className="container mx-auto my-16" id="testimoni">
            <main className="pt-24 flex flex-col items-center gap-10">
                <div className="text-center inline-flex flex-col gap-4 lg:w-[676px]">
                    <h1
                        className="text-dark text-2xl lg:text-3xl font-poppins font-semibold not-italic leading-normal capitalize"
                        data-aos="fade-down"
                        data-aos-offset="200"
                        data-aos-duration="500"
                    >
                        testimonial by pasien
                    </h1>
                    <p
                        className="text-second font-sora text-sm lg:text-base not-italic font-normal leading-6"
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-duration="500"
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perspiciatis vero incidunt eligendi saepe dolorum quia
                        perferendis ipsum molestias.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {[1, 2, 3, 4].map((item, index) => (
                        <div
                            className=" lg:w-[471px] p-8 bg-white hover:shadow-[0px_24px_32px_-3px_rgba(3,9,50,0.15)] rounded-[32px] inline-flex flex-col items-start gap-3 border border-gray-100 hover:!scale-105 transition-all duration-75 ease-in-out select-none"
                            data-aos="flip-down"
                            data-aos-offset="200"
                            data-aos-duration="500"
                        >
                            <p className="text-dark text-base font-poppins italic font-light leading-normal tracking-[0.04em]">
                                Click edit button to change this text. Lorem
                                ipsum dolor sit amet, consectetur adipiscing
                                elit. Ut elit tellus, luctus nec ullamcorper
                                mattis, pulvinar dapibus leo.
                            </p>
                            <div className="inline-flex items-center">
                                <img
                                    src={Ava}
                                    alt="Ava"
                                    width={72}
                                    height={72}
                                    className="rounded-full"
                                />
                                <div className="ml-4">
                                    <h3 className="text-[#3A8EF6] text-base font-poppins font-medium not-italic leading-normal">
                                        Akmal Bentar S
                                    </h3>
                                    <p className="text-second font-sora text-sm not-italic font-normal leading-normal">
                                        Web Designer
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </section>
    );
};

export default Testimoni;
