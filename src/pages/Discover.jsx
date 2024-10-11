import React from 'react'
import "../styles/discover.css"
function Discover() {
  return (
    <div className='discover_container'>
      <div className='top_header'>
       <p>Our Prestigious Clients</p>
       <h2>YOUR SATISFACTION IS OUR SUCCESS</h2>
       <div className='items'>
        <img src="https://dxminds.com/wp-content/uploads/2023/05/AIO-Games.jpg" alt="" srcset="" />
        <img src="https://dxminds.com/wp-content/uploads/2023/05/APIT.jpg" alt="" srcset="" />
        {/* <img src="https://dxminds.com/wp-content/uploads/2023/05/cozmo-group-kuwait.jpg" alt="" srcset="" /> */}
        <img src="https://dxminds.com/wp-content/uploads/2023/05/Position-Square.jpg" alt="" srcset="" />
        <img src="https://dxminds.com/wp-content/uploads/2023/05/One800.jpg" alt="" srcset="" />
        <img src="https://dxminds.com/wp-content/uploads/2023/05/Openfinance-Technologies-1-2.jpg" alt="" srcset="" />
       </div>
       <div className='down_header'>
        <p>Our Prominent Portfolio</p>
       <h2>ENDORSING YOUR BUSINESS IDEAS WITH INNOVATION
       </h2></div>
      </div>
      
    </div>
  )
}

export default Discover