import React from "react";
import CategoryCard from "../../../SubComponents/CategoryCard/CategoryCard";
import "./TopCategories.css";
import Business from "../../../assets/category/business.jpeg";
import Marketing from "../../../assets/category/marketing.jpeg";
import Machine from "../../../assets/category/machine.jpeg";
import Devs from "../../../assets/category/development.jpeg";
import Design from "../../../assets/category/design.jpeg";
import Personal from "../../../assets/category/personal.jpeg";
import Photography from "../../../assets/category/photography.jpeg";
import Soft from "../../../assets/category/software.jpeg";
import Music from "../../../assets/category/music.jpeg";

function TopCategories() {
  return (
    <div className="topCategories">
      <h2
        style={{ marginBottom: 10 }}
        className="levbitz_course_category_title"
      >
        Top Categories
      </h2>
      <div className="categories">
        <CategoryCard
          courseCategory={"all-courses"}
          imgSrc={Design}
          title={"Design "}
        />
        <CategoryCard
          courseCategory={"all-courses"}
          imgSrc={Devs}
          title={"Development "}
        />
        <CategoryCard
          courseCategory={"marketing"}
          imgSrc={Marketing}
          title={"Marketing"}
        />
        <CategoryCard
          courseCategory={"all-courses"}
          imgSrc={Machine}
          title={"AI and Machine Learning"}
        />
        <CategoryCard
          courseCategory={"all-courses"}
          imgSrc={Personal}
          title={"Personal Development"}
        />
        <CategoryCard
          courseCategory={"all-courses"}
          imgSrc={Business}
          title={"Business"}
        />
        <CategoryCard
          courseCategory={"all-courses"}
          imgSrc={Photography}
          title={"Photography"}
        />
        <CategoryCard
          courseCategory={"all-courses"}
          imgSrc={Music}
          title={"Music"}
        />
        <CategoryCard
          courseCategory={"all-courses"}
          imgSrc={Soft}
          title={"IT and Software"}
        />
      </div>
    </div>
  );
}

export default TopCategories;
