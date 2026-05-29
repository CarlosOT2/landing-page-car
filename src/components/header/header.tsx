//# Components //
import Link from '../global/link.tsx'
import Img from '../global/img.tsx'
//# Libs //
import { useTranslation } from 'react-i18next'
//# Classes //
import './header.scss'

export default function Header() {
    const { t } = useTranslation()
    return (
        <>
            <header className='header'>

                <nav className='header__nav'>
                    <Link className='header__link--logo'>
                        <Img src='/logo.png' className='header__logo' noSelect={true}/>
                    </Link>

                    <ul className='header__link-list'>
                        <li className='header__link-list__item'>
                            <Link className='header__link'>
                                {t(`header.search`)}
                            </Link>
                        </li>
                        <li className='header__link-list__item'>
                            <Link className='header__link'>
                                {t(`header.accessories`)}
                            </Link>
                        </li>
                        <li className='header__link-list__item'>
                            <Link className='header__link'>
                                {t(`header.services`)}
                            </Link>
                        </li>
                        <li className='header__link-list__item'>
                            <Link className='header__link'>
                                {t(`header.aboutus`)}
                            </Link>
                        </li>
                    </ul>
                </nav>
                <hr className='header__hr' />
            </header>
        </>
    )
}