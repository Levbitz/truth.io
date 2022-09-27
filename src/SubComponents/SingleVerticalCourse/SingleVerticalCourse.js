import React from "react";
import { Link } from "react-router-dom";
import Rating from "../Rating/Rating";
import "./SingleVerticalCourse.css";

function SingleVerticalCourse({
  img,
  courseName,
  instructor,
  bucket,
  cousrseId,
}) {
  return (
    <>
      <Link to={`/course/${bucket}/${cousrseId}`}>
        <div
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
          className="row lebitz_vertical_course_wrap  "
        >
          <div className="col l4 valign-wrapper levbit_col_wrap">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img className="responsive-img" src={img} alt="" />
            </div>
          </div>

          <div className="col l8">
            <h6 className="">{courseName}</h6>
            <h6 className="levbitz_instructor_name">{instructor}</h6>

            <div>
              <Rating />
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default SingleVerticalCourse;
