import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import NavdropDown from "../../SubComponents/NavdropDown/NavdropDown";
import Logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

import { GoThreeBars } from "react-icons/go";
import { FaTimes } from "react-icons/fa";
//import { MdOutlineRealEstateAgent } from "react-icons/md";
import { GiBookmarklet } from "react-icons/gi";
import { GiClothes } from "react-icons/gi";
//import { DiCodeigniter } from "react-icons/di";
import { GrCodepen } from "react-icons/gr";
import { motion } from "framer-motion";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  //toggle
  const [click, setClick] = useState(false);
  // const history = useHistory();
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  console.log(click);

  //change bg
  const [navbg, setNavbg] = useState(false);
  const [accountbg, setAccountBg] = useState(false);

  const changeBg = () => {
    // alert(window.scrollY);
    if (window.scrollY >= 90) {
      setNavbg(true);
      setAccountBg(true);
    } else {
      setNavbg(false);
      setAccountBg(false);
    }
  };

  window.addEventListener("scroll", changeBg);
  return (
    <>
      <motion.nav
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{
          delay: 0.2,
          type: "spring",
          stiffness: 120,
        }}
        className={navbg ? " z-depth-0  lb_active " : " z-depth-0 lb_nav_wrap"}
      >
        <div className="nav-wrapper ">
          <Link
            style={{
              marginTop: 10,
            }}
            to="/"
            className="brand-logo left myLogo white-text "
          >
            <img className="white" width={150} src={Logo} alt="" />
          </Link>

          <div className="menu-icon black-text " onClick={handleClick}>
            {click ? (
              <GoThreeBars
                style={{
                  color: "#000 !important",
                }}
              />
            ) : (
              <GoThreeBars
                style={{
                  color: "#fff !important",
                }}
              />
            )}
          </div>
          <ul className={click ? "nav-menu active  " : "nav-menu right "}>
            {/*<li>
              <MainSearchForm />
            </li>*/}
            <li>
              <NavdropDown topee={click} className="nav-links" />
            </li>
            <li>
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span>About</span>
                </div>
              </Link>
            </li>

            <li>
              <Link
                to="/portFolio"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span>Portfolio</span>
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span>Contact Us</span>
                </div>
              </Link>
            </li>

            <div>
              <li>
                <Link
                  to="/get_in_touch"
                  className={
                    accountbg
                      ? "nav-links btn white-text originalAccountScrolled z-depth-0"
                      : "nav-links btn white-text teal originalAccount z-depth-0"
                  }
                  onClick={closeMobileMenu}
                >
                  Get In Touch
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;

// <nav>
//   <h3>
//     <Link to="/">Messenger</Link>
//   </h3>
//   <div>
//     {user ? (
//       <>
//         <Link to="/profile">Profile</Link>
//         <button className="btn" onClick={handleSignout}>
//           Logout
//         </button>
//       </>
//     ) : (
//       <>
//         <Link to="/register">Register</Link>
//         <Link to="/login">Login</Link>
//       </>
//     )}
//   </div>
// </nav>;
