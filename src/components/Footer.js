import React from 'react'
import "./Footer.css"
import GitHub from './images/icons/GitHub.svg';
import Facebook from './images/icons/Facebook.svg';
import Instagram from './images/icons/Instagram.svg';
import Twitter from './images/icons/Twitter.svg';

function Footer() {
  return (
    <div className="footer">
        <a href="https://github.com/Fatima-hub333" target="_blank" rel="noreferrer" > <img src={GitHub} alt="" />    </a>
        <a href="https://www.linkedin.com/in/fatima-z-181583234/" target="_blank" rel="noreferrer" > <img src={Instagram} alt="" /> </a>
        <a href="https://twitter.com/Fatima_developr" target="_blank" rel="noreferrer" > <img src={Twitter} alt="" />   </a>
        <a href="https://www.facebook.com/profile.php?id=100069517839985" target="_blank" rel="noreferrer" > <img src={Facebook} alt="" />  </a>
       </div>
  )
}

export default Footer