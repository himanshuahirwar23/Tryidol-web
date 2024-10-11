import React from 'react'
import"../styles/Testimonials.css"

function Testimonials(){
  return (
    <div className='Testimonials'>
        <div className='Testimonials-card'>
            <p>Testimonials</p>
            <h1>SUCCESS STORIES NARRATING OUR PROFICIENCIES</h1>
            <div className='card_1'>
                <h6>It was a great pleasure to come into partnership with Tryidol. I appreciate their attention to details and their creativity in bringing my idea to life. I am so thankful in the ways they supported me in making this dream a reality.</h6>
                <div className='Tectimonials_after'></div>
                <div className='founder'>
                    <img src="https://dxminds.com/wp-content/uploads/2016/01/preventera-testimonial-50x50.jpg" alt="" />
                    <div>
                        <h3>Mahamadu Hambali</h3>
                        <p>Founder & CEO, Preventera</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials