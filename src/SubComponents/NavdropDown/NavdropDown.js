import React, { useRef, useState } from "react";
import "./navdropdown.css";
import { useDetectOutsideClick } from "../../hooks/useDetectOutsideClick/useDetectOutsideClick";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

import { FaLocationArrow } from "react-icons/fa";
import { IoArrowRedoOutline } from "react-icons/io5";
import { IoMdApps } from "react-icons/io";

export default function NavdropDown({ isOpen, setIsOpen, setClick, click }) {
  return (
    <div>
      <div className="menu-container">
        <div className={`menu ${isOpen ? "active" : "inactive"}`}>
          <p
            onClick={() => {
              setIsOpen(!isOpen);
              setClick(!click);
            }}
          >
            <Link to="/android_app_development" className="left black-text">
              Android App Development
            </Link>
          </p>
          <p
            onClick={() => {
              setIsOpen(!isOpen);
              setClick(!click);
            }}
          >
            <Link
              to={`/custom_software_development`}
              className="left black-text"
            >
              Custom Software Development
            </Link>
          </p>

          <p
            onClick={() => {
              setIsOpen(!isOpen);
              setClick(!click);
            }}
          >
            <Link className="left black-text" to={`/ios_development`}>
              IOS Development
            </Link>
          </p>

          <p
            onClick={() => {
              setIsOpen(!isOpen);
              setClick(!click);
            }}
          >
            <Link to="/ecommerce_development" className="left black-text">
              E-commerce Development
            </Link>
          </p>

          <p
            onClick={() => {
              setIsOpen(!isOpen);
              setClick(!click);
            }}
          >
            <Link to="/web_development" className="left black-text">
              Web Development
            </Link>
          </p>
          <p
            onClick={() => {
              setIsOpen(!isOpen);
              setClick(!click);
            }}
          >
            <Link to="/mob_development" className="left black-text">
              Mobile App Development
            </Link>
          </p>
          <p
            onClick={() => {
              setIsOpen(!isOpen);
              setClick(!click);
            }}
          >
            <Link to="/artificial_intelligence" className="left black-text">
              Artificial Intelligence
            </Link>
          </p>
          <p
            onClick={() => {
              setIsOpen(!isOpen);
              setClick(!click);
            }}
          >
            <Link to="/digital_marketing" className="left black-text">
              Digital Marketing
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
