import React from 'react'
import './footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>MISK</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portofolio">Portofolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href=""><FaFacebook /></a>
        <a href=""><FaInstagram /></a>
        <a href=""><FaXTwitter /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Muhammad Irsyad Satriaji Kusnadi. All right reserved.</small>
      </div>
    </footer>
  )
}

export default Footer