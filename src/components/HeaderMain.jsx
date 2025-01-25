import React, { useState } from 'react'
import eventory from '../assets/eventory.png';
import logo from '../assets/logo.png';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import Button from './Button';
import MenuSvg from '../assets/svg/MenuSvg';
import { HamburgerMenu } from "./design/Header";
import QRPopup from './Qrcode';
import { Link } from 'react-router-dom';

const Header = () => {
    const [openNavigation, setopenNavigation] = useState(false);

    const togglenavigation = () => {
        if (openNavigation) {
            setopenNavigation(false);
            enablePageScroll();
        } else {
            setopenNavigation(true);
            disablePageScroll();
        }
    };

    const handleClick = () => {
        if (!openNavigation) {
            return;
        }
        enablePageScroll();
        setopenNavigation(false);

    };


    return (
        <div className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? 'bg-n-8' : 'bg-n-8/90 backdrop-blur-sm'}`}>

            <div className='flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4'>
                <Link className='flex items-start w-[12rem] xl:mr-8' to='/'>
                    <img src={logo} width={190} className='h-[64px] mr-1' alt="logo" />
                    <img src={eventory} width={190} height={40} className='mt-1' alt="eventory" />
                </Link>
                <nav className={`${openNavigation ? "flex" : "hidden"} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:ml-auto lg:bg-transparent`}>
                    <div className='relative z-2 flex flex-col items-center justify-center lg:flex-row font-code text-2xl uppercase px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1 xl:px-12'>


                        <a href="#account" className='button hidden mr-8 lg:text-n-1 hover:text-color-1 transition-colors lg:block'>
                            My Account
                        </a>

                        <QRPopup/>

                    </div>
                    <HamburgerMenu />
                </nav>


                <Button className='ml-auto lg:hidden' px='px-3' onClick={togglenavigation}>
                    <MenuSvg openNavigation={openNavigation} />
                </Button>

            </div>

        </div>
    )
}

export default Header