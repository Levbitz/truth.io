import React, { useEffect } from "react";
import Jumbotron from "../../components/Jumbotron/Jumbotron";

import Topbanner from "../../components/Topbanner/Topbanner";
import CoreValues from "../../components/CoreValues/CoreValues";
import Team from "../../components/Team/Team";
import { Parallax } from "react-parallax";
import paroBg from "../../assets/banner/count.avif";
import AboutBg from "../../assets/abt.jfif";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";

import DepartOne from "../../assets/port.png";

function AboutPage() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <motion.div
      exit={{
        x: "-100vw",
        transition: {
          ease: "easeInOut",
          duration: 0.5,
        },
      }}
    >
      <Topbanner Bg={DepartOne} title="About" UrlName="about page" />
      <Jumbotron
        Jumbo={AboutBg}
        title="About Us "
        text="Our team of design and app development experts crafts beautiful,
            scalable, and world-class web and mobile solutions. Consider us your technical co-founders: a natural extension of your
            team. We learn your operation, inside and out. By precisely
            understanding your vision, we tailor-make digital products that
            drive success in your market."
      />

      <div className="container">
        <h2 className="levbitz_title center">
          We bring digital products to market.
        </h2>
        <div className="row">
          <p></p>

          <h4>What we do</h4>
          <p></p>

          <p>
            We bring the technical expertise and develop the domain expertise to
            complement yours; we handle the technical side of things while you
            focus on expanding your impact and realizing your mission.
          </p>

          <p>
            As your technical partners, we demystify tech and neatly sidestep
            risk, ensuring that you achieve your goals on time and on budget. We
            also help you navigate strategy, branding, and how to tell your
            story.
          </p>
          <p>
            We use the highest standards of your industry and best practices of
            ours; from concept to launch, we build beautiful products right—the
            first time.
          </p>

          <h4>People Come First</h4>
          <p>
            Our employees represent our work. We provide an environment that
            cultivates personal and professional growth.
          </p>

          <h4>We're Curious</h4>
          <p>
            We establish a culture of remarkable talent that delivers
            exceptional results
          </p>
          <h4>Fast-paced Environment</h4>
          <p>
            No time is wasted. We tackle issues head on and give you your
            money’s worth.
          </p>

          <h4>We Value Trust</h4>
          <p>
            We practice open communication and honesty because transparency
            makes everything so much better
          </p>
          {/* <p>
            SERPENS TECHNOLOGY, where your ideas shape into reality, we are one
            of the best emerging Lead generation, IT service company providing
            the broad range of services and solutions in Website design,
            development, logo & branding, UI Design, PHP Development, WordPress
            Development , SEO & Digital Marketing.
    </p>*/}

          {/* <p>
            Our digital Marketing is focused on the latest and the most
            effective strategies and systems that are put our client's Website
            in the top rankings of various search engine result's. Our Online
            Marketing strategies use innovative and tested methods that engage
            people and bring them to your Webpage
          </p>
          <p>
            We are Bangalore based Lead generation ,Web Designing and
            Development Company Dedicated to provide Web Based Solutions to
            small and large sized businesses and to wide variety of clients
            across India and other part of the world. We understand every
            company has a different requirement and unique parameter when it
            comes to web designing. That is what we projects that uniqueness and
            make your website stand out from your competitor's. Our Expert Web
            Designers and Development personel ensures that you get a search
            engine friendly, user friendly and aesthetically appealing website.
            We start with your given parameter and work till your satisfaction.
  </p>*/}
        </div>
      </div>
      <CoreValues />
      <Parallax
        className="lb_appointment_parallax z-depth-0"
        bgImage={paroBg}
        bgImageStle={{
          background: "red",
        }}
        blur={3}
        bgImageAlt="the cat"
        strength={100}
      >
        <div className="">
          <div
            style={{
              padding: "20px 10px",
            }}
          >
            <div className="row">
              <div className="col l12 s12">
                <div>
                  <h3 className="levbitz_title center">
                    Planned Approach of Our Professionals
                  </h3>
                  <p className="white-text">
                    Planning always makes a work perfect. The most professional
                    approach starts with a discussion of the project with the
                    client in presence of the team members assigned to do the
                    task. Clients’ requirements and preferences are taken into
                    consideration – most important is studying the nature of
                    client business and what kind of web designing service is
                    being sought after.
                  </p>
                  <p className="white-text">
                    The team members, comprising of graphic we designers and
                    developers, create a basic flowchart and lay out a skeletal
                    site architecture and plan out on which development platform
                    to work upon (PHP, Magento, OpenCart) and what
                    technicalities to add to the site
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Parallax>

      {/*  <Team />*/}
    </motion.div>
  );
}

export default AboutPage;
