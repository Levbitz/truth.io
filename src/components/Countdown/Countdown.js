import React, { useEffect } from "react";
import CountUp from "react-countup";
import UnderLine from "../UnderLine/UnderLine";
import "./countdown.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Countdown() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div data-aos="zoom-in" className="lb_countdown_wrap">
      <div className="container-fluid">
        <h4 className="levbitz_title center">journey So far</h4>
        <div className="row">
          <div className="col l3 s6 center">
            <CountUp
              className="lb_count_num white-text"
              end={90}
              duration={5}
            />{" "}
            <span
              style={{
                fontSize: 35,
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              +
            </span>
            <h5 className="lb_countdown_text white-text">Projects Completed</h5>
          </div>
          <div className="col l3 s6 center">
            <CountUp className="lb_count_num white-text" end={4} duration={5} />
            <h5 className="lb_countdown_text white-text">
              {" "}
              years of exprience
            </h5>
          </div>
          <div className="col l3 s6 center">
            <CountUp
              className="lb_count_num white-text"
              end={72}
              duration={8}
            />
            <h5 className="lb_countdown_text white-text">Different Clients</h5>
          </div>
          <div className="col l3 s6 center">
            <CountUp
              className="lb_count_num white-text"
              end={18}
              duration={5}
            />
            <span
              style={{
                fontSize: 35,
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              +
            </span>
            <h5 className="lb_countdown_text white-text"> Team Members</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Countdown;
