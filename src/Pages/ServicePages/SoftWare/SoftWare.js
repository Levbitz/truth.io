import React from "react";
import Topbanner from "../../../components/Topbanner/Topbanner";
import DepartOne from "../../../assets/port.png";
import FedelityShit from "../../../components/FedelityShit/FedelityShit";

function SoftWare() {
  return (
    <div>
      <Topbanner Bg={DepartOne} title="SoftWare " UrlName=" SoftWare " />
      <div className="container">
        <h2 className="levbitz_title center">
          So, what is Custom Software Development?
        </h2>

        <p>
          Custom software development, in essence, is translating your users’
          needs and your product’s functionalities into something a computer wil
          understand. It entails designing, building, deploying, and maintaining
          software specific to your designated group of users, organizations,
          and functions.
        </p>

        <div className="row">
          <div className="col l12">
            <h5> Custom Software Development Best Practices At Serpens</h5>

            <p>
              We’re big believers in combining industry best practices with our
              robust custom software development methodology.
            </p>
            <p>
              Some custom software development best practices we follow are:
            </p>

            <p>
              <b>Extensive planning and strategy:</b> to know exactly what your
              business’ needs are, and pinpoint exactly which problems, unique
              to your business, you’re trying to solve.
            </p>

            <p>
              <b> Use cases:</b> to tailor our design and development processes
              precisely to your users.
            </p>
            <p>
              <b>Competitive research:</b> to learn from and understand how your
              competitors might be solving similar problems.
            </p>

            <p>
              <b>Thorough UX Design process:</b> to ensure the tools you build
              will make life easier for your stakeholders—not more difficult.
            </p>
            <p>
              <b> Building scalable and flexibly:</b> to make your software
              something that your in-house teams can adjust and maintain as you
              scale.
            </p>
          </div>
        </div>

        <FedelityShit />
      </div>
    </div>
  );
}

export default SoftWare;
