//# Components //
import Img from "../global/img"
import Text from "../global/text"
//# Classes //
import './home.scss'

export default function Home() {
    return (
        <section className="home">
            <Img src="./img/homebg.avif" className="home__bg" />
            <div>
                <Text tag="span">
                    Template Name Car
                </Text>
                <button>

                </button>
            </div>
        </section>
    )
}