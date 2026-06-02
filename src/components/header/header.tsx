//# Components //
import Link from '../global/link.tsx'
import Img from '../global/img.tsx'
import Button from '../global/button.tsx'
//# Config //
import headerRoutes from '../../config/navigation/headerRoutes.tsx'
//# Libs //
import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'
import LockBodyScroll from '../../shared/utils/hooks/useLockBodyScroll.ts'
//# Classes //
import './header.scss'
//# Icons //
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";


function DefaultHeaderLogo() {
    return (
        <>
            <Link className='header__link--logo'>
                <Img src='/img/logo/logo.png' className='header__logo' noSelect={true} />
            </Link>
        </>
    )
}
function HamburgerClosedLogo() {
    return (
        <>
            <DefaultHeaderLogo />
        </>
    )
}
function HamburgerOpenedLogo() {
    return (
        <>
            <Link className='header__hamburger-opened__link--logo'>
                <Img src='/img/logo/logooutline.png' className='header__hamburger-opened__logo' noSelect={true} />
            </Link>
        </>
    )
}
function HamburgerMenuClosed({ setOpen }: { setOpen: any }) {
    const { t } = useTranslation()
    return (
        <nav className='header__nav--hamburger-closed'>
            <HamburgerClosedLogo />

            <Button
                type='button'
                onClick={() => setOpen(true)}
                className='header__hamburger-closed__button'
            >
                <IoIosMenu className='header__hamburger-closed__icon' />
            </Button>
        </nav>
    )
}

function HamburgerMenuOpened({ setOpen }: { setOpen: any }) {
    const { t } = useTranslation()
    return (
        <nav className='header__nav--hamburger-opened'>
            <section className='header__hamburger-opened__top'>
                <HamburgerOpenedLogo />
                <Button
                    type='button'
                    onClick={() => setOpen(false)}
                    className='header__hamburger-opened__button'
                >
                    <IoMdClose />
                </Button>
            </section>
            <hr className='header__hamburger-opened__hr' />
            <section className='header__hamburger-opened__content'>
                <ul className='header__hamburger-opened__link-list'>
                    {Object.entries(headerRoutes).map(([key, route]) => (
                        <li key={key} className='header__hamburger-opened__link-list__item'>
                            <Link to={route} className='header__hamburger-opened__link' no_wrap={true}>
                                {t(`header.${key}`)}
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </nav>
    )
}

export default function Header() {
    const { t } = useTranslation()
    const hamburgerBreakpoint = parseInt(
        getComputedStyle(document.documentElement)
            .getPropertyValue('--screen-tablet-large')
            .trim(),
        10
    );
    const [open, setOpen] = useState(false)
    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setScreenSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    LockBodyScroll(open)

    return (
        <>
            <header className='header'>
                {
                    hamburgerBreakpoint < screenSize.width
                        ?
                        <>
                            <nav className='header__nav'>
                                <DefaultHeaderLogo />

                                <ul className='header__link-list'>
                                    {Object.entries(headerRoutes).map(([key, route]) => (
                                        <li key={key} className='header__link-list__item'>
                                            <Link to={route} className='header__link' no_wrap={true}>
                                                {t(`header.${key}`)}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                            <hr className='header__hr' />
                        </>


                        :
                        !open ?
                            <>
                                <HamburgerMenuClosed setOpen={setOpen} />
                                <hr className='header__hr' />
                            </>

                            :
                            <HamburgerMenuOpened setOpen={setOpen} />


                }

            </header>
        </>
    )
}