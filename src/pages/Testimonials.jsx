import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import default carousel styles
import "../styles/Testimonials.css"; // Import your custom styles

function Testimonials() {
  return (
    <div className="Testimonials">
      <div className="Testimonials-card">
        <p>Testimonials</p>
        <h1>SUCCESS STORIES NARRATING OUR PROFICIENCIES</h1>
        <Carousel
          showThumbs={false} // Hides the thumbnail navigation
          showStatus={false} // Hides the status like "1/3"
          infiniteLoop // Makes the carousel loop infinitely
          autoPlay // Automatically transitions between slides
          interval={2000} // Auto slide every 5 seconds
          stopOnHover // Stops auto slide when hovered
        >
          {/* Testimonial 1 */}
          <div className="card_1">
            <h6 className="card2">
              It was a great pleasure to come into partnership with Tryidol. I
              appreciate their attention to details and their creativity in
              bringing my idea to life. I am so thankful in the ways they
              supported me in making this dream a reality.
            </h6>
            <div className='Tectimonials_after'></div>

            <div className="founder">
              <div className="img-profile"></div>
              <div className="founder-details">
                <h3>Mahamadu Hambali</h3>
                <p>Founder & CEO, Preventera</p>
              </div>
            </div>
          </div>

          {/* Additional Testimonials */}
          <div className="card_1">
            <h6 className="card2">
              It was a great pleasure to come into partnership with Tryidol. I
              appreciate their attention to details and their creativity in
              bringing my idea to life. I am so thankful in the ways they
              supported me in making this dream a reality.
            </h6>
            <div className='Tectimonials_after'></div>

            <div className="founder">
              <div className="img-profile"></div>
              <div className="founder-details">
                <h3>Mahamadu Hambali</h3>
                <p>Founder & CEO, Preventera</p>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Testimonials;
