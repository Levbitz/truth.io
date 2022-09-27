import React, { useEffect } from "react";
import { FaLightbulb, FaHandshake, FaCompactDisc } from "react-icons/fa";
import UnderLine from "../UnderLine/UnderLine";
import "./coreValues.css";
import Aos from "aos";
import "aos/dist/aos.css";
function CoreValues() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div data-aos="zoom-in" className="grey lighten-4 lb_core_wrap">
      <div className="container">
        <div className="center">
          <UnderLine text={"values"} xyz="auto" />
        </div>

        <h3 className="levbitz_title center">our core values</h3>
        <div className="row">
          <div className="col l6 s12">
            <section>
              <p className="center">
                <FaLightbulb size={32} color={"#ec407a"} />
              </p>
              <h4 className="center">Our Vision</h4>
              <p>
                SERPENS TECHNOLOGY-“A trusted Business Partner”. “We believe Our
                Success is in Our Client’s Success“. “So we are here to make
                your dream come true”.
              </p>
            </section>
          </div>
          <div className="col l6 s12">
            <section>
              <p className="center">
                <FaHandshake size={42} color={"#ec407a"} />
              </p>
              <h4 className="center"> Our Mission </h4>
              <p>
                Here at SERPENS TECHNOLOGY, we view inclusion and diversity as
                the basis of success. We work collaboratively to build an
                efficient work environment with the goal to inspire each other
                as we build trust every step of the way
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoreValues;
