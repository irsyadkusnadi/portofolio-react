import React from 'react'
import './contact.css'
import { BiLogoGmail } from "react-icons/bi";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <BiLogoGmail className='contact_option-icon'/>
            <h4>Gmail</h4>
            <h5>irsyadkusnadi@gmail.com</h5>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=irsyadkusnadi@gmail.com" target='_blank'>Send a massage</a>
          </article>

          <article className="contact_option">
            <PiMicrosoftOutlookLogoFill className='contact_option-icon'/>
            <h4>Outlook</h4>
            <h5>muhammad.kusnadi@binus.ac.id</h5>
            <a href="https://outlook.office.com/mail/deeplink/compose?to=muhammad.kusnadi@binus.ac.id" target='_blank'>Send a massage</a>
          </article>

          <article className="contact_option">
            <FaWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>0813-1851-7596</h5>
            <a href="https://api.whatsapp.com/send?phone=+6281318517596">Send a massage</a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact