import React from "react";
import Vi from "../../assets/icons/v1.gif";
import V2 from "../../assets/icons/v2.gif";
import V3 from "../../assets/icons/v3.gif";
import V4 from "../../assets/icons/v4.gif";
import "./Icona.css";

function Icona() {
  return (
    <div className="levbitz_icona_wrap   hide-on-med-and-down">
      <div className="container-fluid center">
        <div className="row">
          <div className="col l3">
            <div>
              <img width={"50px"} src={Vi} alt="" />
              <p>
                Develop skills for real career <br /> growth
              </p>
            </div>
          </div>
          <div className="col l3 ">
            <div>
              <img width={"50px"} src={V2} alt="" />
              <p>
                Learn from experts active in their field,
                <br /> not out-of-touch trainers
              </p>
            </div>
          </div>
          <div className="col l3">
            <div>
              <img width={"50px"} src={V3} alt="" />
              <p>
                Learn by working on real-world <br /> problems
              </p>
            </div>
          </div>
          <div className="col l3">
            <div>
              <img width={"50px"} src={V4} alt="" />
              <p>
                Structured guidance ensuring learning <br /> never stops
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Icona;
