import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

import { RiPsychotherapyFill } from "react-icons/ri";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { FaTooth, FaHeartbeat } from "react-icons/fa";

import { RiVirusFill } from "react-icons/ri";
import { GiMedicines } from "react-icons/gi";
import "./services.css";
import UnderLine from "../UnderLine/UnderLine";

function Services() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div id="services" className="service_wrap grey lighten-5">
      <div className="container">
        <div className="row">
          <div className="center">
            <UnderLine text={"Extraordinary Services"} xyz="auto" />
          </div>
          <h4 className="center levbitz_title">Our Services</h4>

          <div className="row">
            <SingleService
              title={"Android App Development"}
              linko="/android_app_development"
              text="Basically, Android app development is the process of building mobile applications that run on Google’s Android operating system—namely, on devices such as Android smartphones, tablets, and e-readers."
            />
            <SingleService
              text={
                "Custom software development, in essence, is translating your users’ needs and your product’s functionalities into something a computer will understand. It entails designing, building..."
              }
              linko="/custom_software_development"
              title={"Custom Software Development "}
            />
            <SingleService
              title={"IOS Development"}
              linko="/ios_development"
              text="iOS app development is the process of building mobile applications that run on Apple hardware—i.e., iPhones and iPads. These apps are accessible through the Apple App Store ..."
            />

            <SingleService
              linko={"/ecommerce_development"}
              text="eCommerce website offers you the luxury to display all the product collections on a single platform. Webomindapps is the answer you are looking for! Our team will always use the best user ..."
              title={"E-commerce Development"}
            />
            <SingleService
              title={"Web Development"}
              linko="/web_development"
              text={
                "Web development entails the process of developing websites or web-based applications. Web development is often done through CMS tools such as WordPress, or programming languages such as HTML... "
              }
            />
            <SingleService
              linko="/artificial_intelligence"
              text="AI can help us change lives for the better. We want to build solutions that impact users in a positive manner.All our products and services are easy to deploy and can be tuned to run on even basic..."
              title={"Artificial Intelligence"}
            />
            <SingleService
              linko={"digital_marketing"}
              text={
                "SEO, SEM, PPC, SMO, Content marketing and social media networking, etc. comprise a perfect digital marketing strategy. We are Google certified marketing professionals as well as ..."
              }
              title={"	Digital Marketing "}
            />
            <SingleService
              linko={"mob_development"}
              text={
                "Mobile app development is the process of developing software applications that are run and used on mobile devices such as mobile phones and tablet computers.Mobile apps are typically developed with ..."
              }
              title={"	Mobile App Development "}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;

const SingleService = ({ title, text, linko }) => {
  return (
    <div data-aos="fade-up" className="col l6 ">
      <Link to={linko}>
        <div
          style={{ margin: "5px 1px" }}
          className="row   levbitz_single_service_wrap"
        >
          {/*<div className="col l2 s3">
          <div className="lb_why_icon_wrap center">
            <RiPsychotherapyFill
              size={40}
              className="lb_why_icon_color center"
            />
          </div>
  </div>*/}
          <div className="col l12 s12">
            <h5 className="">{title}</h5>
            <p>{text.substring(0, 150)}...</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
