import React from 'react';
import Navbar from '../Navbar';
import HeaderHome from './HeaderHome';
import Partner from './Partner';
import Layanan from './Layanan';
import AboutHome from './AboutHome';
import Pelayanan from './Pelayanan';
import Testimoni from './Testimoni';
import Footer from '../Footer';
import NavbarMobile from '../NavbarMobile';

const HomeLayout = () => {
    return (
        <>
            <div className="hidden lg:block">
                <Navbar />
            </div>
            <div className="block lg:hidden">
                <NavbarMobile />
            </div>
            <HeaderHome />
            <Partner />
            <Layanan />
            <AboutHome />
            <Pelayanan />
            <Testimoni />
            <Footer />
        </>
    );
};

export default HomeLayout;
