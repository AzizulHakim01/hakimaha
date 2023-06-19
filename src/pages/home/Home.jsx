import "./Home.scss"
import Header from '../../components/header/Header'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBullhorn} from "@fortawesome/free-solid-svg-icons"
import Hero from "../../components/hero/Hero"
import Category from "../../components/category/Category"

const Home = () => {
    return (
        <div className='home'>
            {/* Header part */}
            <Header/> {/* Under Header news division */}
            <div className="under__header">
                <FontAwesomeIcon icon={faBullhorn}
                    style={
                        {color: "#fff"}
                    }/>
                    &nbsp;<p>FREE SHIPPING ON ORDERS ABOVE $100</p>
            </div>

            {/* Hero area */}
            <Hero/>

            {/* Category */}
            <Category/>
        </div>
    )
}

export default Home
