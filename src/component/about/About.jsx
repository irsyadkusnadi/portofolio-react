import React from 'react'
import './about.css'
import ME from '../../assets/About me.png'
import { FaAward } from "react-icons/fa"

const About = () => {
  return (
    <section id='about'>
    <h5>Get to know</h5>
    <h2>About Me</h2>
    
    <div className="container about_container">
      <div className="about_me">
        <div className="about_me-image">
          <img src={ME} alt="About Image" />
        </div>
      </div>
      
      <div className="about_content">
        {/* <div className="about_cards">
          <article className='about_card'>
            <FaAward />
            <h5>Education</h5>
            <small>Undergraduate Computer Science</small>
          </article>

          <article className='about_card'>
            <FaAward />
            <h5>Education</h5>
            <small>Undergraduate Computer Science</small>
          </article>

          <article className='about_card'>
            <FaAward />
            <h5>Education</h5>
            <small>Undergraduate Computer Science</small>
          </article>
        </div> */}

        <p>
        Saya merupakan seorang mahasiswa yang sedang menempuh Pendidikan di Universitas Bina 
        Nusantara, jurusan Computer Science. Saat ini saya telah mencapai semester 6 dan sedang 
        menjalani program Studi Independen dengan topik Data Science & AI. Saya memiliki minat 
        berkarir sebagai Front-End Developer atau Data Analyst
        </p>

        <a href="#contact" className='btn btn-primary'>Contact Me</a>
      </div>
    </div>
    </section>
  )
}

export default About