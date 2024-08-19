import React, { useState } from 'react'
import './nav.css'
import { MdHomeFilled } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { FaBookOpenReader } from "react-icons/fa6";
import { IoDocumentTextSharp } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><MdHomeFilled /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserAlt /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaBookOpenReader /></a>
      <a href="#portofolio" onClick={() => setActiveNav('#portofolio')} className={activeNav === '#portofolio' ? 'active' : ''}><IoDocumentTextSharp /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiFillMessage /></a>
    </nav>
  )
}

export default Nav