import React, { useEffect } from "react";
import About from "../../components/About/About";
import Countdown from "../../components/Countdown/Countdown";
import Showcase from "../../components/HomeCompoents/ShowCase/Showcase";
import Services from "../../components/Services/Services";
import AutoScroll from "../../components/HomeCompoents/Scrollers/AutoScroll/AutoScroll";
import { AutoScrollThree } from "../../components/HomeCompoents/Scrollers/AutoScroll/AutoScroll";
import AutoScrollTwo from "../../components/HomeCompoents/Scrollers/AutoScrollTwo/AutoScrollTwo";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Aos from "aos";
import "aos/dist/aos.css";

function HomePage() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        opacity: 1,
      });
      if (!inView) {
        animation.start({
          opacity: 100,
          x: -2000,
        });
      }
    }
  }, [inView]);

  return (
    <div>
      <Showcase />

      <div data-aos="zoom-in" ref={ref}>
        <motion.h2
          animate={animation}
          transition={{
            duration: 3,
          }}
          className="levbitz_title center"
        >
          Technologies we use
        </motion.h2>
        <AutoScroll />
        <AutoScrollTwo />
        <AutoScrollThree />
      </div>

      <Services />
      <About />
      <Countdown />
    </div>
  );
}

export default HomePage;
