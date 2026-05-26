//# Components //
import Link from '../global/link.tsx'
import Img from '../global/img.tsx'
//# Classes //
import './header.scss'

export default function Header() {
    return (
        <>
            <header className='header'>
                <Img src='/logo.png' className='header__logo'/>
                <nav className='header__nav'>
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
            </header>
        </>
    )
}