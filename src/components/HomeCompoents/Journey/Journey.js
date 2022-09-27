import React from "react";
import possibilityImage from "../../../assets/possibility.png";
import "./Journey.css";

function Journey() {
  return (
    <div style={{ background: "#f8fbff" }} className="">
      <div className="gpt3__possibility section__padding" id="possibility">
        <div className="gpt3__possibility-image">
          <img
            className="hide-on-med-and-down"
            src={possibilityImage}
            alt="possibility"
          />
        </div>
        <div className="gpt3__possibility-content jounery_bg">
          <h4>Request Early Access to Get Started</h4>
          <h1 className="gradient__text">
            The possibilities are <br /> beyond your imagination
          </h1>
          <p>
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <h4>Request Early Access to Get Started</h4>
        </div>
      </div>
    </div>
  );
}

export default Journey;
