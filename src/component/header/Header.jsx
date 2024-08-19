import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/porto.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Muhammad Irsyad Satriaji Kusnadi</h1>
        <h5 className="text-light">Student of Computer Science BINUS University</h5>
        <CTA />
        <HeaderSocial />

        <div className='me'>
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header