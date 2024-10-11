import React from "react";
import { MdArrowForward } from "react-icons/md";
import "../styles/hero.css";
function Hero() {
  return (
    <div>
      <div className="hero_container ">
        <div className="hero_section">
          <div className="right_section">
            <div>
              {/* <h2>
              Pursue Excellence with #Tryidol.
              </h2> */}
              <h1>
              Manifest Your Aspirations into Existence.
              </h1>
              <p>
                Unlock your business potential with Tryidol. Whether it’s
                streamlining daily operations or strategizing for future
                success, we handle the tech intricacies so you can concentrate
                on your passions. Let us be your trusted partner in driving
                growth and innovation.
              </p>
              <button>CONNENT WITH US</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
