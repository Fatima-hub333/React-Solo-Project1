import React from 'react'
import './info.css'
import image from './images/profile/profile-me.jpg'
import email from './images/buttons/email.svg'
import linkedin from './images/buttons/linkedin.svg'

export default function Information() {
  return (
      <div className="Wrapper">
        <img src={image}  alt="Profile" />
        <div className="contact-section">
          <div className="cardBody">
            <h1>Fatima Zahir</h1>
          <h3>Full Stack Developer</h3>
          <h4>fatimaazahir.website</h4>
            <div className="buttons">
              <a href='fatimaazahir@gmail.com'> <img className="email" src={email} alt="Email Button" /> </a>
              <a href='https://www.linkedin.com/in/fatima-z-181583234/'> <img className="linkedin" src={linkedin} alt="Linkedin Button" /> </a>
            </div>
          </div>
        </div>
      </div>
  )
}