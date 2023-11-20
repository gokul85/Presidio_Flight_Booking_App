import React from 'react'
import logo from '../../assets/Images/logo.png'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sectionContainer container grid">
        <div className="gridOne">
          <div className="logoDiv">
            <img src={logo} alt="" className="logo" />
          </div>
          <p>Your mind should be stronger than your feelings, fly!</p>
          <div className="socialIcon flex">
            <FaFacebook className='icon' />
            <FaInstagram className='icon' />
            <FaXTwitter className='icon' />
          </div>
        </div>
        <div className="footerlinkclass">
          <div className="footerLinks">
            <span className="linkTitle">
              Informartion
            </span>
            <li>
              <a>Home</a>
              <a>Explore</a>
              <a>Flight Status</a>
              <a>Travel</a>
              <a>Manage Your Bookings</a>

            </li>
          </div>

          <div className="footerLinks">
            <span className="linkTitle">
              Quick Links
            </span>
            <li>
              <a>FAQ</a>
              <a>How to</a>
              <a>Features</a>
              <a>Baggage</a>
              <a>Route Map</a>
              <a>Our Communities</a>
            </li>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer