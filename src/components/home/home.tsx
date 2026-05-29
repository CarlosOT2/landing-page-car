//# Components //
import Img from "../global/img"
import Text from "../global/text"
import Button from "../global/button"
import Animation from "../global/animation"
//# Libs //
import { useTranslation } from "react-i18next"
//# Classes //
import './home.scss'
//# Icons //
import { FaCar } from "react-icons/fa";
import { FaCarAlt } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";


export default function Home() {
    const { t } = useTranslation()
    return (
        <>
            <section className="home">
                <div className="home__content">
                    <section className="home__hero">

                        <Img src="./img/herobg.jpeg" className="home__hero__bg" noSelect={true} />
                        <div className="home__hero__left-shadow" aria-hidden={true}></div>

                        <Animation type="right" className="home__hero__container">
                            <Text tag="h1" className="home__hero__title">
                                {t('home.hero.discover.title')}
                            </Text>
                            <Button type="button" className="home__hero__button">
                                {t('home.hero.discover.button')}
                            </Button>
                        </Animation>
                    </section>
                    <section className="home__vehicles">
                        <Text tag="h2" className="home__vehicles__title">
                            {t('home.vehicles.title')}
                        </Text>

                        <ul className="home__vehicles__cards-list">
                            <li className="home__vehicles__cards-list-item">
                                <FaCar className="home__vehicles__cards-icon" />
                                <Text tag="span" className="home__vehicles__cards-text">
                                    {t('home.vehicles.cards.newvehicles.title')}
                                </Text>
                                <Button type="button" className="home__vehicles__cards-button">
                                    {t('home.vehicles.cards.newvehicles.button')}
                                </Button>
                            </li>
                            <li className="home__vehicles__cards-list-item">
                                <FaCarAlt className="home__vehicles__cards-icon" />
                                <Text tag="span" className="home__vehicles__cards-text">
                                    {t('home.vehicles.cards.preowned.title')}
                                </Text>
                                <Button type="button" className="home__vehicles__cards-button">
                                    {t('home.vehicles.cards.preowned.button')}
                                </Button>
                            </li>
                            <li className="home__vehicles__cards-list-item">
                                <FaCartPlus className="home__vehicles__cards-icon" />
                                <Text tag="span" className="home__vehicles__cards-text">
                                    {t('home.vehicles.cards.financing.title')}
                                </Text>
                                <Button type="button" className="home__vehicles__cards-button">
                                    {t('home.vehicles.cards.financing.button')}
                                </Button>
                            </li>
                        </ul>
                    </section>
                </div>
            </section>
        </>
    )
}