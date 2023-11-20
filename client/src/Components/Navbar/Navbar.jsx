import React, { useState } from "react";
import { SiConsul } from "react-icons/si";
import { BsPhoneVibrate, BsGrid3X3GapFill } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import logo from '../../assets/Images/logo.png'
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();

    const isAuth = !!localStorage.getItem('token');

    const [active, setActive] = useState(false);
    const showNavbar = () => {
        if (active) {
            setActive(false)
        } else {
            setActive(true)
        }
    }
    const handlelogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        navigate('/login');
    }
    return (
        <div className="navBar flex">
            <div className="navBarOne flex">
                <div>
                    <SiConsul className="icon" />
                </div>
                <div className="atb flex">
                    {isAuth ? (<span onClick={handlelogout} className="flex">Sign Out</span>) : (<span className="flex"><Link to="/login">Sign in</Link></span>)}
                </div>
            </div>
            <div className="navBarTwo">
                <div className="logoDiv">
                    <img src={logo} className="logo" />
                </div>
                <div className={`navBarMenu ${active ? 'showNavbar' : ''}`}>
                    <ul className="menu flex">
                        <li className="listItem">Home</li>
                        <li className="listItem">About</li>
                        <li className="listItem">Offers</li>
                        <li className="listItem">Seats</li>
                        <li className="listItem">Destinations</li>
                    </ul>
                    <button className="btn flex btnOne">Contact</button>
                </div>
                <div onClick={showNavbar} className="toggleIcon">
                    <BsGrid3X3GapFill className="icon" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
