//# Components //
import Link from '../global/link.tsx'
import Img from '../global/img.tsx'
import Button from '../global/button.tsx'
//# Config //
import headerRoutes from '../../config/navigation/headerRoutes.tsx'
//# Libs //
import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'
//# Classes //
import './header.scss'
//# Icons //
import { IoIosMenu } from "react-icons/io";

export default function Header() {
    const { t } = useTranslation()
    const hamburguerBreakpoint = parseInt(
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

    return (
        <>
            <header className='header'>
                {
                    hamburguerBreakpoint < screenSize.width
                        ?
                        <nav className='header__nav'>
                            <Link className='header__link--logo'>
                                <Img src='/img/logo/logoheader.png' className='header__logo' noSelect={true} />
                            </Link>

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
                        :
                        <nav className='header__nav--hamburguer'>
                            <Link className='header__link--logo'>
                                <Img src='/img/logo/logoheader.png' className='header__logo' noSelect={true} />
                            </Link>

                            <Button
                                type='button'
                                onClick={() => setOpen(!open)}
                                className='header__nav--hamburguer-button'
                            >
                                <IoIosMenu className='header__nav--hamburguer-icon' />
                            </Button>
                        </nav>
                }
                <hr className='header__hr' />
            </header>
        </>
    )
}