import React from 'react';
import "../styles/navbar.css";
import { Link,NavLink } from "react-router-dom";
import { BsMenuButton } from 'react-icons/bs';
import { MdMenu } from 'react-icons/md';
import { IoIosArrowRoundBack } from 'react-icons/io';
import Home from '../pages/Home';

function Navbar() {
  return (
    <div className='Navbar'>
      <div className='Logo'>
        <img src="https://tryidoltech.com/wp-content/uploads/2024/02/tryidol.png" alt="Tryidol Logo" />
      </div>
      <div className='NavItems'>
      <NavLink to="/home">
        <div className="heading">HOME</div>
      </NavLink>
      <NavLink to="/about">
        <div className="heading">ABOUT US</div>
      </NavLink>
      <NavLink to="/services">
        <div className="heading">SERVICES</div>
      </NavLink>
      <NavLink to="/products">
        <div className="heading">PRODUCTS</div>
      </NavLink>
      <NavLink to="/insights">
        <div className="heading">INSIGHTS</div>
      </NavLink>
      <NavLink to="/portfolio">
        <div className="heading">PORTFOLIO</div>
      </NavLink>
      <NavLink to="/contact">
        <div className="heading">CONTACT</div>
      </NavLink>
       
      </div>
      <div className='menu'>
        <MdMenu size={20}/>
      </div>
    </div>
  );
}

export default Navbar;
