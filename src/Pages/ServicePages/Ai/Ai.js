import React from "react";
import Topbanner from "../../../components/Topbanner/Topbanner";
import DepartOne from "../../../assets/aboutSho.jpeg";
import FedelityShit from "../../../components/FedelityShit/FedelityShit";

function Ai() {
  return (
    <div>
      <Topbanner
        Bg={DepartOne}
        title="Artificial Intelligence"
        UrlName="artifical Intelligence page"
      />
      <div className="container">
        <h2 className="levbitz_title center">
          {" "}
          Artificial Intelligence Content to be provided
        </h2>

        <p>
          AI can help us change lives for the better. We want to build solutions
          that impact users in a positive manner
        </p>
        <h5>1-CLICK DEPLOYABLE AI APPLICATIONS</h5>
        <p>
          All our products and services are easy to deploy and can be tuned to
          run on even basic hardware. Try our demo to find out more
        </p>

        <FedelityShit />
      </div>
    </div>
  );
}

export default Ai;
