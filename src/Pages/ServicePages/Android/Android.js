import React from "react";
import Topbanner from "../../../components/Topbanner/Topbanner";
import DepartOne from "../../../assets/port.png";
import AndroidImg from "../../../assets/android.png";
import FedelityShit from "../../../components/FedelityShit/FedelityShit";

function Android() {
  return (
    <div>
      <Topbanner
        Bg={DepartOne}
        title="Android Development"
        UrlName=" android development "
      />
      <div className="container">
        <h2 className="levbitz_title ">
          Android & Mobile Apps Development Company
        </h2>

        <div className="row">
          <div className="col l8">
            <div>
              <p>
                Basically, Android app development is the process of building
                mobile applications that run on Google’s Android operating
                system—namely, on devices such as Android smartphones, tablets,
                and e-readers. Android Apps are written in the Kotlin, Java, and
                C++ languages programming languages. And, users access these
                apps through the Google Play App Store.
              </p>
            </div>
          </div>
          <div className="col l4">
            <div>
              <img className="responsive-img" src={AndroidImg} alt="" />
            </div>
          </div>
        </div>

        <FedelityShit />
        <div className="row">
          <div className="col l12">
            <h2 className="levbitz_title center">
              How long does it take to develop an Android App?
            </h2>
            <p>
              The timeline for Android App Development varies, depending on the
              scope and complexity of the project. At Serpens, Android app
              development typically ranges between 3 weeks and 5 months
            </p>
            <p>
              The Serpens methodology follows a four-phase development
              structure:
            </p>
            <p>
              {" "}
              <b>Discovery, 1 – 2 weeks:</b> During which we conduct a discovery
              stakeholder workshop, as well as our own research to assess your
              product idea, market, competitors, business goals, and users
            </p>
            <p>
              <b>Design, 1 – 8 weeks:</b> Using a user-centered design process
              that begins with brand discovery calls with stakeholders, user
              research, usability testing, and high-fidelity prototyping and
              design
            </p>
            <p>
              {" "}
              <b>Development, 1 – 16 weeks</b> : Developing the app according to
              specs finalized in collaboration with Serpens and your
              stakeholders. We use parallel development of the front-end and
              back-end in modules to ensure functionality and smooth
              development. We stick to weekly check-ins to update you on
              progress and get screen-by-screen feedback.
            </p>

            <p>
              <b>QA Testing, 1 – 2 weeks:</b> Thorough systems testing to make
              sure your Android app is performing and functioning perfectly
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Android;
