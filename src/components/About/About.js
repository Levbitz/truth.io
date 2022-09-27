import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import UnderLine from "../UnderLine/UnderLine";

function About() {
  return (
    <div className="container lb_about_comp">
      <div className="row">
        <div className="col l5 s12">
          <div>
            <UnderLine text={"ABOUT US"} />
            <h4 className="pink-text lighten-1-text">
              {" "}
              Read About{" "}
              <span
                style={{
                  color: "#050585",
                }}
              >
                SERPENS
              </span>{" "}
              TECHNOLOGY,
            </h4>
          </div>
          <div className=" lb_abt_comp_btn_wrap">
            <Link to="/about" className=" lb_abt_comp_btn hide-on-small-only ">
              Read More
            </Link>
          </div>
        </div>
        <motion.div
          initial={{ x: 2500 }}
          animate={{ x: 0 }}
          transition={{
            delay: 0.5,
            type: "spring",
            stiffness: 120,
          }}
          className="col l7 s12"
        >
          <div>
            <p>
              SERPENS TECHNOLOGY, where your ideas shape into reality, we are
              one of the best emerging IT service company providing the broad
              range of services and solutions in Website design, development,
              logo & branding, UI Design, PHP Development, WordPress Development
              , SEO & Digital Marketing
            </p>
            <p>
              Our digital Marketing is focused on the latest and the most
              effective strategies and systems that are put our client's Website
              in the top rankings of various search engine result's. Our Online
              Marketing strategies use innovative and tested methods that engage
              people and bring them to your Webpage
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
