import React from "react";
import Topbanner from "../../../components/Topbanner/Topbanner";
import DepartOne from "../../../assets/port.png";
import IsoImg from "../../../assets/ios.jpeg";
import FedelityShit from "../../../components/FedelityShit/FedelityShit";
import { Link } from "react-router-dom";
import { HiChevronDoubleRight } from "react-icons/hi";

function Ios() {
  return (
    <div>
      <Topbanner
        Bg={DepartOne}
        title="iOS "
        children={"iOS"}
        UrlName="  Development  "
      />
      <div>
        <div className="container">
          <h1 className="levbitz_title center">
            So, what is iOS App Development?
          </h1>
          <div className="row">
            <div className="col l8">
              <div>
                <p>
                  iOS app development is the process of building mobile
                  applications that run on Apple hardware—i.e., iPhones and
                  iPads. These apps are accessible through the Apple App Store
                  and written in the Swift or Objective-C programming languages.
                </p>
                <p>
                  Our team of developers take iOS app development to an enhanced
                  level. We adopt a step by step process to make our
                  deliverables error free and universally compatible across
                  different mobile formats.
                </p>
              </div>
            </div>
            <div className="col l4">
              <div>
                <img className="responsive-img" src={IsoImg} alt="" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col l12">
              <h2 className="levbitz_title center">
                How long does it take to develop an iOS App?
              </h2>
              <p>
                The timeline of developing an iOS app depends on the complexity
                and scope of the app. At Serpens, our projects typically range
                between 3 weeks and 5 months.
              </p>
              <p>We structure our iOS app development process like this</p>
              <p>
                {" "}
                <b>Discovery Workshop, 2 – 8 hours:</b>
                we learn and align ourselves with your vision so that we can
                build a user-centered iOS app exactly to your expectations and
                your users’ needs.
              </p>
              <p>
                <b>Discovery, 1 – 2 weeks:</b> assessing your product idea,
                business goals, industry competitors, and end-users.
              </p>
              <p>
                {" "}
                <b>Design, 1 – 8 weeks:</b> a user-centered design process that
                begins with brand discovery team calls, user research, and then
                high-fidelity design, prototyping, and usability testing.
              </p>

              <p>
                <b> Development, 1 – 16 weeks:</b>
                building pages to specs through module-based, parallel
                development of the front-end and back-end; weekly check-ins
                during which we update you on progress, get your
                screen-by-screen look, and functionality feedback.
              </p>

              <p>
                <b>QA testing, 1 – 2 weeks:</b> comprehensive testing to ensure
                your iOS app performs and functions exactly as it should.
              </p>
            </div>
          </div>

          <FedelityShit />
        </div>
      </div>
    </div>
  );
}

export default Ios;
