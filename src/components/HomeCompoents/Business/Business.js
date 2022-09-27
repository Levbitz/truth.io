import React from "react";
import { Link } from "react-router-dom";
import "./Business.css";
import BusinessImg from "../../../assets/business.jpeg";

function BusinessPage() {
  return (
    <>
      <div className="udemyForBusiness">
        <div className="backgroundColorDiv"></div>
        <div className="contentDiv">
          <h3 className="heading">Levbitz For Business</h3>
          <p className="about ">
            Get your institution , collage students or employee get trained at
            half price per course .
          </p>
          <p className="about ">Onsite Training is provided</p>
          <div className="startTeching button">
            {" "}
            <Link to="/business" className="white-text">
              Contact Management
            </Link>{" "}
          </div>
        </div>
        <img
          src={BusinessImg}
          alt="instructorImg"
          className="Img hide-on-med-and-down"
        ></img>
      </div>
    </>
  );
}

export default BusinessPage;
