//# Components //
import Img from "../global/img"
import Text from "../global/text"
import Button from "../global/button"
import Animation from "../global/animation"
//# Libs //
import { useTranslation } from "react-i18next"
import { useState, useEffect } from "react"
//# API //
import { GetAllVehicles } from '../../shared/api/FetchVehicles'
//# Types //
import type { Vehicle, Vehicles } from "../../shared/types/vehiclesdata"
//# Classes //
import './home.scss'
//# Icons //
import { FaCar } from "react-icons/fa";
import { FaCarAlt } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";




export default function Home() {
    const { t } = useTranslation()

    //.. States //
    const [vehicles, setVehicles] = useState<Vehicles | undefined>(undefined)

    //.. useEffects //
    useEffect(() => {
        (async () => {
            setVehicles(await GetAllVehicles())
        })()
    }, []);

    return (
        <>
            <section className="home">
                <div className="home__content">
                    <section className="home__hero">

                        <Img src="./img/herobg.jpeg" className="home__bg--hero" noSelect={true} />
                        <div className="home__left-shadow--hero" aria-hidden={true}></div>

                        <Animation type="right" className="home__hero__content">
                            <Text tag="h1" className="home__hero__title">
                                {t('home.hero.discover.title')}
                            </Text>
                            <Button type="button" className="home__hero__button">
                                {t('home.hero.discover.button')}
                            </Button>
                        </Animation>
                    </section>
                    <section className="home__find-vehicles">
                        <Text tag="h2" className="home__find-vehicles__title">
                            {t('home.find-vehicles.title')}
                        </Text>

                        <ul className="home__find-vehicles__cards-list">
                            <li className="home__find-vehicles__cards-list-item">
                                <FaCar className="home__find-vehicles__cards-icon" />
                                <Text tag="span" className="home__find-vehicles__cards-text" no_wrap={true}>
                                    {t('home.find-vehicles.cards.newvehicles.title')}
                                </Text>
                                <Button type="button" className="home__find-vehicles__cards-button">
                                    {t('home.find-vehicles.cards.newvehicles.button')}
                                </Button>
                            </li>
                            <li className="home__find-vehicles__cards-list-item">
                                <FaCarAlt className="home__find-vehicles__cards-icon" />
                                <Text tag="span" className="home__find-vehicles__cards-text" no_wrap={true}>
                                    {t('home.find-vehicles.cards.preowned.title')}
                                </Text>
                                <Button type="button" className="home__find-vehicles__cards-button">
                                    {t('home.find-vehicles.cards.preowned.button')}
                                </Button>
                            </li>
                            <li className="home__find-vehicles__cards-list-item">
                                <FaEarthAmericas className="home__find-vehicles__cards-icon" />
                                <Text tag="span" className="home__find-vehicles__cards-text" no_wrap={true}>
                                    {t('home.find-vehicles.cards.visitus.title')}
                                </Text>
                                <Button type="button" className="home__find-vehicles__cards-button">
                                    {t('home.find-vehicles.cards.visitus.button')}
                                </Button>
                            </li>
                        </ul>
                    </section>
                    <section className="home__vehicles">

                        <ul className="home__vehicles__list">
                            {vehicles?.map((vehicle: Vehicle) => (
                                <li key={vehicle.id} className="home__vehicles__list-item">
                                    <Img src={vehicle.src} className="home__bg--vehicles" noSelect={true} />
                                    <div className="home__left-shadow--vehicles" aria-hidden={true}></div>
                                    <Animation type="right" className="home__vehicles__list-wrapper">
                                        <Text tag="h3" className="home__vehicles__list-title">
                                            {vehicle.title}
                                        </Text>
                                        <Text tag="span" className="home__vehicles__list-desc">
                                            {vehicle.desc}
                                        </Text>
                                        <Button type="button" className="home__vehicles__list-button">
                                            {t('home.vehicles.cards.button')}
                                        </Button>
                                    </Animation>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
            </section>
        </>
    )
}