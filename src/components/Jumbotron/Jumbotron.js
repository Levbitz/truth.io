import React from "react";

import "./jumbotron.css";

function Jumbotron({ Jumbo, title, text }) {
  return (
    <div className="lb_jumbo_wrap ">
      <div className="">
        <div className="row">
          <div className="col l5 s12">
            <img className="responsive-img lb_jumbo_image" src={Jumbo} alt="" />
          </div>
          <div className="col l6 offset-l1 s12">
            <h4 className="levbitz_title">{title}</h4>
            <p className="lb_jumbo_text">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
