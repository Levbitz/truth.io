import React from "react";
import Topbanner from "../../../components/Topbanner/Topbanner";
import DepartOne from "../../../assets/aboutSho.jpeg";
import Static from "../../../assets/static.jfif";
import FedelityShit from "../../../components/FedelityShit/FedelityShit";

function WebDev() {
  return (
    <div>
      <Topbanner
        Bg={DepartOne}
        title="Web Development "
        UrlName=" Web Development "
      />
      <div className="container">
        <div className="row">
          <h2 className="levbitz_title center">So, what is Web Development?</h2>

          <div className="col l12">
            <div>
              <p>
                Web development entails the process of developing websites or
                web-based applications. Web development is often done through
                CMS tools such as WordPress, or programming languages such as
                HTML, React, Java or Objective-C.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col l12">
            <p>
              {" "}
              <p>
                Web development serves companies and organizations by giving
                them a platform to connect with users, build brand reputation,
                sell their products, or even provide their products through
                their web-based applications
              </p>
            </p>
          </div>
        </div>

        <div className="row">
          <h5>What is the Web Development Process?</h5>

          <p>
            At Serpens Technologies, our typical web development process looks
            like this:
          </p>

          <h5>Discovery: 1 – 2 Days</h5>

          <p>
            Conducting an internal stakeholder workshop to understand your
            product vision and business goals
          </p>
          <p>
            Researching your industry, competitive landscape, and end-users to
            validate assumptions
          </p>
          <p>Creating a data-driven, robust product and go-to-market strateg</p>
          <p>Defining KPIs to track progress</p>

          <h5>Design: 1 – 8 Days</h5>
          <p>
            Designing your website or web-based application according to
            user-centered design principles
          </p>
          <p>
            Conducting brand discovery calls, user research, usability testing
          </p>
          <p>Delivering high-fidelity prototypes and designs</p>

          <h5>Development: 1 – 15 Days</h5>
          <p>
            Creating the website or web-based app according to our finalized
            spec
          </p>
          <p>
            Building the front- and back-end in module-based, parallel
            development
          </p>
          <p>
            Weekly check-ins to ensure transparency, keep you up-to-date, and
            receive your feedback
          </p>

          <h5>QA testing: 1 – 2 Days</h5>
          <p>
            Systems testing to ensure your website or web-based application is
            running smoothly before launch
          </p>
        </div>

        <FedelityShit />
      </div>
    </div>
  );
}

export default WebDev;
