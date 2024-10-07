import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useRef, useState } from "react";
import './Navbar-one.css'
import { Link, useNavigate } from 'react-router-dom';
import { faPhone, faLocationCrosshairs, faHandHoldingDollar, faVials, faHandHoldingDroplet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ButtonComponent from '../Button/BAButton';

export default function NavbarOne() {

    const navigate = useNavigate()

    const [isNavbarFixed, setIsNavbarFixed] = useState(false);

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
                <div className="navbar">
                    <div className="navbar-container">
                        <div className="navbar-links">
                            <Link to="/" className="nav-link text-danger">
                                <FontAwesomeIcon icon={faPhone} className='icon' />
                                +92 321 1234567
                            </Link>
                            <Link to="/" className="nav-link">
                                <FontAwesomeIcon icon={faLocationCrosshairs} className='icon' />
                                Location
                            </Link>
                            <div className='mx-2'>
                                <ButtonComponent
                                    buttonText="Need Blood"
                                    buttonType="outlined"
                                    buttonLink="/need-blood"
                                    onclick={() => { navigate("/need-blood") }}
                                />
                            </div>
                            <div className='mx-2'>
                                <ButtonComponent
                                    buttonText="Sample Collection"
                                    buttonType="contained"
                                    onclick={() => { navigate("/sample-collection") }}
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