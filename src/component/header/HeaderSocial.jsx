import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const HeaderSocial = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/muhammad-irsyad-satriaji-kusnadi-28953221a/" target="_blank"><FaLinkedin /></a>
        <a href="https://github.com/irsyadkusnadi" target="_blank"><FaGithub /></a>
    </div>
  )
}

export default HeaderSocial