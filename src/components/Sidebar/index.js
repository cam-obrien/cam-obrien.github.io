import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoC from '../../assets/images/logo_c.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faSuitcase, faLaptop, faCode} from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoC} alt="logo"/>
            <img className="sub-logo"src={LogoSubtitle} alt="slobodan"/>

        </Link>


        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            
            <NavLink exact="true" activeclassname="active" className ="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className ="projects-link" to="/projects">
                <FontAwesomeIcon icon={faCode} color="#4d4d4e"/>
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>


        </nav>

        
        <ul>
            <li>
                <a target="blank" rel='noreffer' href='https://www.linkedin.com/in/cameron-obrien4/'>
                    <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target="blank" rel='noreffer' href='https://github.com/cam-obrien'>
                    <FontAwesomeIcon icon={faLaptop} color="#4d4d4e"/>
                </a>
            </li>            


        </ul>

    </div>


)

export default Sidebar