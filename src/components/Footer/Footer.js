import React from "react";
import { Link } from "react-router-dom";

import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
import "./footer.css";
import UnderLine from "../UnderLine/UnderLine";

function Footer() {
  const upadate = new Date();
  const year = upadate.getFullYear();
  return (
    <>
      <div className="footer_wrapper ">
        <div>
          <div
            style={{
              marginBottom: 20,
            }}
          >
            <h3 className="levbitz_title center">
              We help you build beautifully and scale successfully.
            </h3>
            <UnderLine xyz={"auto"} />
          </div>

          <div className="container center">
            <a
              href="https://www.facebook.com/profile.php?id=100067049412559"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsFacebook size={20} style={{ marginRight: 20 }} />
            </a>
            <a
              href="https://www.instagram.com/invites/contact/?i=lmz6uhgx744a&utm_content=oueu6tl"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <BsInstagram size={20} style={{ marginRight: 20 }} />
            </a>
            <a
              href="https://twitter.com/Serpens_Tech?s=20&t=4Tx1-Q3fjNn2mQhQrFx5TQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTwitter size={20} style={{ marginRight: 20 }} />
            </a>
            <a
              href="https://www.linkedin.com/company/serpens-technology-pvt-ltd"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <BsLinkedin size={20} />
            </a>
          </div>
        </div>
        <div className="container  bottom_wrap">
          <div className="row">
            <div className="col l3 s6">
              <div>
                <h6 className="black-text">Serpens Technology</h6>

                <Link to="" className="black-text">
                  <p className="black-text">
                    <Link className="black-text" to="/">
                      Home
                    </Link>
                  </p>
                </Link>

                <p className="black-text">
                  <Link className="black-text" to="/about">
                    About
                  </Link>
                </p>
                <p className="black-text">
                  <Link className="black-text" to="/portFolio">
                    Portfolio
                  </Link>
                </p>
                <p className="black-text">
                  <Link className="black-text" to="/terms">
                    Terms And Conditions
                  </Link>
                </p>
                <p className="black-text">
                  <Link className="black-text" to="/privacy_policy">
                    Privacy Policy
                  </Link>
                </p>
                {/*<p className="black-text">
                  <a
                    href="https://about.levbitz.com/contact.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="black-text"
                  >
                    Contact
                  </a>
  </p>*/}
                <p className="black-text">
                  <Link className="black-text" to="/contact">
                    Contact
                  </Link>
                </p>

                <p className="black-text">
                  <Link to="/get_in_touch" className="black-text">
                    Get In Touch
                  </Link>
                </p>
              </div>
            </div>
            <div className="col l3 s6">
              <div>
                <h6 className="black-text">Services</h6>
                <p className="black-text">
                  <Link className="black-text" to="/android_app_development">
                    Android App Development
                  </Link>
                </p>
                <p className="black-text">
                  <Link
                    className="black-text"
                    to="/custom_software_development"
                  >
                    {" "}
                    Custom Software Development
                  </Link>
                </p>
                <p className="black-text">
                  <Link className="black-text" to="/ios_development">
                    {" "}
                    IOS Development
                  </Link>
                </p>
                <p className="black-text">Mobile App Development</p>
                <p className="black-text">
                  <Link to="/privacy_policy" className="black-text">
                    E-commerce Development
                  </Link>
                </p>
              </div>
            </div>

            <div className="col l3 s6 ">
              <div>
                <h6 className="black-text">More Services</h6>

                <p className="black-text">
                  <Link className="black-text" to="/web_development">
                    Web Development
                  </Link>
                </p>
                <p className="black-text">
                  <Link className="black-text" to="/artificial_intelligence">
                    Artificial Intelligence
                  </Link>
                </p>
                <p className="black-text">
                  <Link className="black-text" to="/digital_marketing">
                    {" "}
                    Digital Marketing
                  </Link>
                </p>
                <p className="black-text">
                  <Link className="black-text" to="/digital_marketing">
                    {" "}
                    B2B Lead Generation
                  </Link>
                </p>
                <p className="black-text">
                  <Link className="black-text" to="/digital_marketing">
                    SEO
                  </Link>
                </p>
              </div>
            </div>
            <div className="col l3 s6 ">
              <div>
                <h6 className="black-text">Address</h6>

                <p className="black-text">
                  <span
                    className=" pink-text lighten-1-text"
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    India:
                  </span>{" "}
                  36 2nd main pipeline road mathikere Bengaluru 560054
                </p>
                <p className="black-text">
                  <Link className="black-text" to="/privacy_policy">
                    <span
                      className=" pink-text lighten-1-text"
                      style={{
                        fontWeight: "bold",
                      }}
                    >
                      USA:
                    </span>{" "}
                    16415 Addison Rd #650, Addison, TX 75001
                  </Link>
                </p>
                <p className="black-text">
                  <span
                    className=" pink-text lighten-1-text"
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Singapore:
                  </span>{" "}
                  12 Little Rd Singapore 536986
                </p>

                <p className="black-text">
                  Contact Us{" "}
                  <a className="black-text" href="tel:+91 82170 64852">
                    +91 82170 64852
                  </a>
                </p>
                <p>
                  <a
                    className="black-text"
                    href="mailto:contact@serpenstech.com"
                  >
                    contact@serpenstech.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="row"></div>

          <div className="row">
            <div className="credits">
              <div className="col l6 s12">
                <p style={{ color: "#000", fontWeight: "bold" }}>
                  Serpens Technology Pvt Ltd
                </p>
              </div>
              {/*<div className="col l4 s6">
                <p
                  className="center"
                  style={{ color: "#fff", fontWeight: "bold" }}
                >
                  ⓛⓔⓥⓑⓘⓣⓩ{" "}
                </p>
  </div>*/}
              <div className="col l6 s6">
                <p className="right">Copyright ©2021- {year}™</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
