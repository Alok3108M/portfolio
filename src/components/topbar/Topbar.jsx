import React from 'react';
import "./topbar.scss";
import {Person,Mail,Twitter,YouTube, GitHub, Instagram} from "@material-ui/icons"

export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={'topbar ' + (menuOpen && "active")}>
      <div className='wrapper'>
        <div className='left'>
        <a href="#intro" className='logo'>chalokoina.</a>
        
        {/* <div className='itemContainer'>
          <Person className="icon"/>
          <a href="#intro">
          <span>+91 7123456789</span>
          </a>
        </div> */}

        <div className='itemContainer'>
          <Mail className="icon"/>          
          <span>aloksinghthakurcse1@gmail.com</span>          
        </div>

        {/* <div className='itemContainer'>
          <YouTube className="icon"/>
        </div> */}

        <div className='itemContainer'>
          <a href="https://twitter.com/chalokoina08">
          <Twitter className="icon"/>
          </a>
        </div>

        <div className='itemContainer'>
          <a href="https://github.com/Alok3108M">
          <GitHub className="icon"/>
          </a>
        </div>

        {/* <div className='itemContainer'>
          <a>
          <Instagram className="icon"/>
          </a>
        </div> */}



        </div>
        <div className='right '>
          <div className='hamburger' onClick={()=>setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>

      </div>
    </div>
  )
}
