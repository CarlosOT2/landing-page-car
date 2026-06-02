//# Components //
import Link from '../global/link'
import Text from '../global/text'
import Img from '../global/img'
//# Libs //
import { useTranslation } from 'react-i18next'
//# Config //
import footerRoutes from '../../config/navigation/footerRoutes'
//# Classes //
import './footer.scss'

export default function Footer() {
    const { t } = useTranslation()

    return (
        <>
            <footer className='footer'>
                <section className='footer__banner'>
                    <Img src='./img/logo/logooutline.png' className='footer__banner-img' noSelect={true} />
                    <Text tag='span' className='footer__banner-text'>
                        {t(`general.companyname`)}
                    </Text>
                </section>
                <hr className='footer__hr' />
                <nav className='footer__nav'>
                    <ul className='footer__nav__list'>
                        {footerRoutes.map((col) => (
                            <li key={col.key} className='footer__nav__list-item'>
                                <ul className='footer__nav__list-item__list'>
                                    <Text tag='h3' className='footer__nav__list-title'>
                                        {t(`footer.nav.cols.${col.key}.title`)}
                                    </Text>
                                    <ul className='footer__nav__intern-list'>
                                        {col.links.map((link) => (
                                            <li key={link.key} className='footer__nav__intern-list-item'>
                                                <Link to={link.to} className='footer__nav__intern-list-link'>
                                                    {t(`footer.nav.cols.${col.key}.links.${link.key}`)}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </ul>
                            </li>
                        ))}
                    </ul>
                </nav>

                <hr className='footer__hr--bottom' />
                <section className='footer__bottom'>
                    <Text tag='span' className='footer__bottom__copyright'>
                        Copyright © {t('general.companyname')} {new Date().getFullYear()}
                    </Text>
                    <nav className='footer__bottom__nav'>
                        <ul className='footer__bottom__list'>
                            <li className='footer__bottom__list-item'>
                                <Link to='#' className='footer__bottom__list-link'>
                                    <Img src='/img/socials/facebook.png' className='footer__bottom__list-img' noSelect={true}></Img>
                                </Link>
                            </li>
                            <li className='footer__bottom__list-item'>
                                <Link to='#' className='footer__bottom__list-link'>
                                    <Img src='/img/socials/instagram.png' className='footer__bottom__list-img' noSelect={true}></Img>
                                </Link>
                            </li>
                            <li className='footer__bottom__list-item'>
                                <Link to='#' className='footer__bottom__list-link'>
                                    <Img src='/img/socials/whatsapp.png' className='footer__bottom__list-img' noSelect={true}></Img>
                                </Link>
                            </li>
                            <li className='footer__bottom__list-item'>
                                <Link to='#' className='footer__bottom__list-link'>
                                    <Img src='/img/socials/youtube.png' className='footer__bottom__list-img' noSelect={true}></Img>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </section>

            </footer>
        </>
    )
}