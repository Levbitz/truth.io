import React, { useState } from "react";
import "./CourseDisplay.css";

import { TiStarFullOutline, TiStarHalfOutline } from "react-icons/ti";

import { Link } from "react-router-dom";

const MAX_RATING = 4;
const MIN_RATING = 1;

function CourseDisplay({
  courseName,
  img,
  price,
  instructor,
  bucket,
  cousrseId,
  myKey,
}) {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const [hasPrime] = useState(Math.random() > 0.5);

  // const [courseLoading, setCourseLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCourseLoading(false);
  //   }, 2000);
  //   // effect
  //   // return () => {
  //   //   cleanup
  //   // };
  // }, []);

  return (
    <Link key={myKey} to={`/course/${bucket}/${cousrseId}`}>
      <div className="lb_singleProperty_wrap">
        <div className="card z-depth-0">
          <div className="card-image">
            <img className="responsive-img" src={img} alt="" />
          </div>
          <div className="card-content">
            <p className=" course_name">{courseName}</p>
            <p className="levbitz_instructor_name ">{instructor}</p>
          </div>
          <div>
            <div className=" levbitz_ratingDiv">
              <span style={{ marginRight: 10 }} className="rating">
                {Array(rating).length}.5
              </span>
              <span className="stars">
                {Array(rating)
                  .fill()
                  .map((_, i) => (
                    <TiStarFullOutline key={i} />
                  ))}

                <TiStarHalfOutline />
              </span>
            </div>
          </div>

          <span className="black-text">{price}$</span>

          <div>
            {hasPrime && (
              <span>
                <div className="bestsellerBadge">Bestseller</div>
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CourseDisplay;
