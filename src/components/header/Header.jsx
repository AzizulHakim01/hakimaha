import {Link} from "react-router-dom"
import "./header.scss"
import { faCartShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleUser } from "@fortawesome/free-regular-svg-icons"

const Header = () => {
    return (
        <div className='header'>
            <div className="logo">
                <img src="/logo.png" alt=""/>
            </div>
            <div className="navbar">
                <ul>
                    <li>
                        <Link>Shop</Link>
                    </li>
                    <li>
                        <Link>Parts</Link>
                    </li>
                    <li>
                        <Link>Maintenance</Link>
                    </li>
                    <li>
                        <Link>Inside Yamaha</Link>
                    </li>
                    <li>
                        <Link>Find a Dealer</Link>
                    </li>
                </ul>
            </div>
            <div className="right__menu">
                <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#fff",fontSize:"1.4em"}} />
                <FontAwesomeIcon icon={faCircleUser} style={{color: "#fff",fontSize:"1.4em"}}/>
                <FontAwesomeIcon icon={faCartShopping} style={{color: "#fff",fontSize:"1.4em"}}/>
            </div>
        </div>
    )
}

export default Header
