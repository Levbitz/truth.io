import React, { useRef, useState } from "react";
import "./navdropdown.css";
import { useDetectOutsideClick } from "../../hooks/useDetectOutsideClick/useDetectOutsideClick";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

import { FaLocationArrow } from "react-icons/fa";
import { IoArrowRedoOutline } from "react-icons/io5";
import { IoMdApps } from "react-icons/io";

export default function NavdropDown({ closeMobileMenu }) {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => {
    if (isActive === false) {
      setIsActive(true);
    } else {
      setIsActive(false);
      closeMobileMenu();
    }
  };
  const cloud = "cloud";
  const marketing = "marketing";

  return (
    <div>
      <button onClick={onClick} className="menu-trigger z-depth-0 transparent">
        <span
          style={{
            color: "#000 !important",
          }}
          className="white-text   nav-links lb_drop_btn"
        >
          Services
          {isActive ? (
            <RiArrowDropUpLine size={30} />
          ) : (
            <RiArrowDropDownLine size={30} />
          )}
        </span>
      </button>
      <div className="menu-container">
        <nav className={`menu ${isActive ? "active" : "inactive"}`}>
          <ul
            className="z-depth-0 "
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: -50,
            }}
          >
            <li className="left">
              <Link
                to="/android_app_development"
                onClick={onClick}
                className="left black-text"
              >
                Android App Development
              </Link>
            </li>
            <li className="left">
              <Link
                onClick={onClick}
                to={`/custom_software_development`}
                className="left black-text"
              >
                Custom Software Development
              </Link>
            </li>

            <li className="left">
              <Link
                onClick={onClick}
                className="left black-text"
                to={`/ios_development`}
              >
                IOS Development
              </Link>
            </li>

            <li className="left">
              <Link
                onClick={onClick}
                to="/ecommerce_development"
                className="left black-text"
              >
                E-commerce Development
              </Link>
            </li>

            <li className="left">
              <Link
                onClick={onClick}
                to="/web_development"
                className="left black-text"
              >
                Web Development
              </Link>
            </li>
            <li className="left">
              <Link
                onClick={onClick}
                to="/mob_development"
                className="left black-text"
              >
                Mobile App Development
              </Link>
            </li>
            <li className="left">
              <Link
                onClick={onClick}
                to="/artificial_intelligence"
                className="left black-text"
              >
                Artificial Intelligence
              </Link>
            </li>
            <li className="left">
              <Link
                onClick={onClick}
                to="/digital_marketing"
                className="left black-text"
              >
                Digital Marketing
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
