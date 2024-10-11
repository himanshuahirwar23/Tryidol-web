import React from 'react'
import  "../styles/navbar.css"
// import { BsMenuButton } from 'react-icons/bs'
// import { MdMenu } from 'react-icons/md'
import { IoIosArrowRoundBack } from 'react-icons/io'

function Navbar() {
  return (
    <div>
<div className='Navbar'>
<div className='Logo'>
    <img src="https://tryidoltech.com/wp-content/uploads/2024/02/tryidol.png" alt="" />
</div>
<div className='NavItems'>
<h1>HOME</h1>
    <h1>ABOUT US</h1>
    <h1>SERVICES</h1>
    <h1>PRODUCTS</h1>
    <h1>INSIGHTS</h1>
    <h1>PORTFOLIO</h1>
    <h1>CONTACT US</h1>
</div>
<div className='menu'>
</div>
</div>

    </div>
  )
}

export default Navbar