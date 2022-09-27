import React from "react";
import "./showcase.css";
import People from "../../../assets/people.png";
import Icona from "../../Icona/Icona";
import { motion } from "framer-motion";

function Showcase() {
  return (
    <>
      <div className="lb_showcase_wrap">
        <div className="container">
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{ delay: 1 }}
            className="row"
          >
            <div className="col l9">
              <motion.h2
                initial={{
                  x: "-100vw",
                }}
                animate={{
                  x: 0,
                }}
                transition={{ delay: 1.5 }}
              >
                We're SERPENS - Full Service Development Company
              </motion.h2>
              <p className="white-text">
                We take real problems and turn them into scalable solutions that
                take your business to the next level with custom software
                development
              </p>

              <div
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              ></div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Showcase;
