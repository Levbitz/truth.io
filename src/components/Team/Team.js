import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import UnderLine from "../UnderLine/UnderLine";
import TeamOne from "../../assets/darshan.jpeg";
import TeamTwo from "../../assets/ravi.jpeg";
import "./team.css";

function Team() {
  return (
    <div className="lb_core_wrap">
      <div className="container">
        <div class="row">
          <div className="center">
            <UnderLine text="LEADING TEAM" xyz="auto" />
          </div>
          <h3 className="levbitz_title center">Meet Our Team</h3>
          <div class="col s2 l2"></div>
          <SingleMember
            src={TeamOne}
            name="Darshan Achari"
            tell="tel:+919739829148"
            role="Founder and CEO"
            mail={"Darshan.Achari@serpenstech.com"}
          />
          <div class="col s2 l2"></div>
          <SingleMember
            name="Ravi Teja N"
            src={TeamTwo}
            tell="+91-9902296577"
            role="Co-founder, Owner"
            mail={"Ravi.Teja@serpenstech.com"}
          />

          <div class="col s12 l2"></div>
        </div>
      </div>
    </div>
  );
}

export default Team;

const SingleMember = ({ src, tell, name, role, mail }) => {
  return (
    <div class="col s12 l3">
      <div class="card z-depth-0 ">
        <div class="card-image">
          <img className="levbitz_team_image" src={src} alt="dpt" />
          <span class="card-title levbitz_team_name pink-text lighten-1-text">
            {name}
          </span>

          <a
            href={tell}
            class="btn-floating halfway-fab waves-effect waves-light  pink lighten-1"
          >
            <i class="material-icons">
              <FiPhoneCall
                color={"#fff"}
                size={30}
                style={{ paddingTop: 10 }}
              />
            </i>
          </a>
        </div>
        <div class="card-content">
          <p className="center lb_blogpost_title">{role}</p>
          <p className="center lb_blogpost_title">
            <small>
              <a href={`mailto:${mail}`}>{mail}</a>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};
