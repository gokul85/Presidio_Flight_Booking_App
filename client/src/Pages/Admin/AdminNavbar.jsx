import React, { useState } from "react";
import { SiConsul } from "react-icons/si";
import { BsGrid3X3GapFill } from "react-icons/bs";
import logo from '../../assets/Images/logo.png'
import { Link, useNavigate } from "react-router-dom";

const AdminNavbar = () => {
    const navigate = useNavigate();
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
                <div className="flex" style={{ alignItems: "center", gap: "1rem" }}>
                    <SiConsul className="icon" />
                    Admin DashBoard
                </div>
                <div className="atb flex">
                    <span onClick={handlelogout} className="flex">Sign Out</span>
                </div>
            </div>
            <div className="navBarTwo">
                <div className="logoDiv">
                    <img src={logo} className="logo" />
                </div>
                <div className={`navBarMenu ${active ? 'showNavbar' : ''}`}>
                    <ul className="menu flex">
                        <Link to="/admin/addflight" className="listItem">AddFlight</Link>
                        <Link to="/admin/showflight" className="listItem">ShowFlights</Link>
                    </ul>
                </div>
                <div onClick={showNavbar} className="toggleIcon">
                    <BsGrid3X3GapFill className="icon" />
                </div>
            </div>
        </div>
    )
}

export default AdminNavbar