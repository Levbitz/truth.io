import React from "react";
import "./BecomeInstructor.css";
import InstructorImage from "../../../assets/instructor.jpeg";
import { Link } from "react-router-dom";

function BecomeInstructor() {
  return (
    <div className="becomeInstructorDiv">
      <div className="backgroundColorDiv"></div>
      <img
        src={InstructorImage}
        alt="instructorImg"
        className="instructorImg resposive-image  hide-on-med-and-down"
      ></img>
      <div className="contentDiv">
        <h6 className="heading ">Become an instructor</h6>
        <p className="about">
          Top instructors from around the world teach millions of students on
          Udemy. We provide the tools and skills to teach what you love.{" "}
        </p>
        <div className="startTeching button">
          <Link className="white-text" to="/teach">
            Start teaching today
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BecomeInstructor;
