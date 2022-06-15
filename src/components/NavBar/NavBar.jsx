import React from 'react'
import { Link } from "react-router-dom";
import "./index.scss"
import FlashOnIcon from '@mui/icons-material/FlashOn';

function NavBar() {
  return (
    <div className='navbar'>
          <Link className='link' to="/" >
            <FlashOnIcon className="flash-icon"/>
            <p>
              Electrician
            </p>
          </Link>
          <Link className='link' to="/" >Home</Link>
          <Link className='link' to="/about" >About Us</Link>
          <Link className='link' to="/services" >Services</Link>
          <Link className='link' to="/prices" >Prices</Link>
          <Link className='link' to="/gallery" >Gallery</Link>
          <Link className='link' to="/blog" >Blog</Link>
          <Link className='link' to="/shop" >Shop</Link>
          <Link className='link' to="/faq" >Faq</Link>
          <Link className='link' to="/contact" >Contact</Link>
          <Link className='link' to="/appointment" >Appointment</Link>
    </div>
  )
}

export default NavBar