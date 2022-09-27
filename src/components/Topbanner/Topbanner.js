import React from "react";
import { Link } from "react-router-dom";
//import Bg from "../../assets/Image/abtImg.jpeg";
import { HiChevronDoubleRight } from "react-icons/hi";
import "./topbanner.css";

function Topbanner({ Bg, title, UrlName }) {
  return (
    <div
      style={{ backgroundImage: `url(${Bg})` }}
      className="lb_topbanner_wrap"
    >
      <div className="container">
        <div className="row">
          <div className="col l5 s12">
            <h3 className="white-text ">{title}</h3>

            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Link to="/" className=" lb_topLink">
                home
              </Link>

              <HiChevronDoubleRight color={"#fff"} size={13} />
              <span className="center lb_topLink"> {UrlName}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbanner;
