//# Components //
import Link from '../global/link.tsx'
import Img from '../global/img.tsx'
//# Classes //
import './header.scss'

export default function Header() {
    return (
        <>
            <header className='header'>

                <nav className='header__nav'>
                    <Img src='/logo.png' className='header__logo' />
                    <Link className={'header__link'}>
                        SEARCH CARS
                    </Link>
                    <Link className={'header__link'}>
                        COLLECTIONS
                    </Link>
                    <Link className={'header__link'}>
                        PARTNERSHIPS
                    </Link>
                    <Link className={'header__link'}>
                        ABOUT US
                    </Link>
                </nav>
                <hr className='header__hr' />
            </header>
        </>
    )
}