import React from "react";
import { Link } from "react-router-dom";
import "./CategoryCard.css";

function CategoryCard(props) {
  return (
    <Link to={`${props.courseCategory}`}>
      <div className="categoryCard">
        <img
          src={props.imgSrc}
          alt={props.title + " img"}
          className="levbitz_topCategory_img"
        />
        <h3 className="categoryTitle">{props.title}</h3>
      </div>
    </Link>
  );
}

export default CategoryCard;
