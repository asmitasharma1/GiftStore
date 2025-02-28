import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/logoo.png'
import navProfile from '../../assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav-logo'>
                <img src={navlogo} alt="" />
                <p>GIFT STORE</p>
        </div>
        <img src={navProfile} alt="" className='nav-profile' />
    </div>
  )
}

export default Navbar