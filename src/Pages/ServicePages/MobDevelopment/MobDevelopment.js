import React from "react";
import Topbanner from "../../../components/Topbanner/Topbanner";
import DepartOne from "../../../assets/port.png";
import FedelityShit from "../../../components/FedelityShit/FedelityShit";

function MobDevelopment() {
  return (
    <div>
      <Topbanner
        Bg={DepartOne}
        title="Mobile app development "
        UrlName=" Mobile app development "
      />
      <div className="container">
        <h2 className="levbitz_title center">
          So, what is Mobile App Development?
        </h2>

        <p>
          Mobile app development is the process of developing software
          applications that are run and used on mobile devices such as mobile
          phones and tablet computers.
        </p>

        <div className="row">
          <div className="col l12">
            <p>
              Mobile apps are typically developed with platforms such as Unity,
              Rails for Ruby, Apery, Flutter, and Swift. And as we all know,
              apps serve so many user needs; anything from entertainment,
              nonprofit, and social, to lifestyle, productivity, and financial
              management purposes.
            </p>

            <h5>
              How can Serpens help your company with mobile app development
              services?
            </h5>
            <p>
              Serpens technology helps companies design, develop, and scale
              beautiful, user-centric mobile apps. We use an iterative and
              thorough approach that encompasses strategy, user research,
              design, and software development. And we build it right—the first
              time.
            </p>
          </div>
        </div>

        <FedelityShit />

        <div className="row">
          <div className="col l12">
            <h2 className="levbitz_title">
              Mobile App Development Project Plan
            </h2>

            <p>
              At Serpens Technology, we have a robust methodology for planning,
              research, and strategy for our mobile app development projects. We
              religiously invest in planning to ensure we’re working towards
              solving the right problems, on the right timelines.
            </p>

            <p>
              We start with a <b>strategy and research phase,</b> during which
              we get an in-depth understanding of your industry, user, and value
              proposition. We define the metrics and KPIs that guide our
              success. We establish our product and brand strategies based on
              extensive user research, usability testing, and competitive
              analysis. And we continually validate our assumptions.
            </p>
            <p>
              From there we move on to <b>UX design,</b> and then{" "}
              <b>visual design,</b>
              to tailor your mobile app’s functionality, look, and feel to your
              users. We start with low-fidelity wireframes and deliver
              high-fidelity wireframes that encompass precisely what your app
              will look like and how it will function.
            </p>

            <p>
              And finally—we reach mobile app development. In development, we
              use our robust findings, strategies, and high-fidelity wireframes
              to create exactly what you envisioned and what was agreed upon. We
              build the front- and back-end in parallel modules to ensure
              functionality and smooth development, and end with thorough
              testing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobDevelopment;
