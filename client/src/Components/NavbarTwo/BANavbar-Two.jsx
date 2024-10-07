import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useRef, useState } from "react";
import './Navbar-two.css'
import { Link, useNavigate } from 'react-router-dom';
import { faDroplet, faHouse, faHandHoldingDollar, faVials, faHandHoldingDroplet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ButtonComponent from '../Button/BAButton';
import Logo from "../../Images/Logo.png"

export default function NavbarTwo() {

    const [isNavbarFixed, setIsNavbarFixed] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsNavbarFixed(true);
            } else {
                setIsNavbarFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div>
                {/* <div className={`navbar${isNavbarFixed ? ' fixed-navbar' : ''}`}> */}
                <div className= "navbar">
                    <div className="navbar-container">
                        <div className="navbar-logo">
                            <img src={Logo} alt="Logo" />
                        </div>
                        <div className="navbar-links">
                            <Link to="/" className="nav-link">
                                <FontAwesomeIcon icon={faHouse} className='icon'/>
                                Home
                            </Link>
                            <Link to="/sample-collection" className="nav-link">
                                <FontAwesomeIcon icon={faVials} className='icon'/>
                                Sample Collection
                            </Link>
                            <Link to="/donate-blood" className="nav-link">
                                <FontAwesomeIcon icon={faHandHoldingDroplet} className='icon'/>
                                Donate Blood
                            </Link>
                            <Link to="/donate-money" className="nav-link">
                                <FontAwesomeIcon icon={faHandHoldingDollar} className='icon'/>
                                Donate Money
                            </Link>
                            <div className='mx-2'>
                                <ButtonComponent
                                    buttonText="Host Blood Drive"
                                    buttonType="contained"
                                    onclick= {()=>{navigate('/host-blood-drive')}}
                                    />
                            </div>
                            
                        </div>
                    </div>
                </div>
                {/* Your main content goes here */}
            </div>
        </>
    )
}