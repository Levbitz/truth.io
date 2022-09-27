import React from "react";
import "./feature.css";

const Feature = ({ title, text, textTwo, textThree }) => (
  <div className="gpt3__features-container__feature">
    <div className="gpt3__features-container__feature-title">
      <div />
      <h1 className="">{title}</h1>
    </div>
    <div className="gpt3__features-container_feature-text">
      <p>{text}</p>
    </div>

    <p className="text_two">{textTwo}</p>
    <p className="text_two">{textThree}</p>
  </div>
);

export default Feature;
