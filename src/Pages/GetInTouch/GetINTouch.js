import React from "react";
import Address from "../../components/Address/Address";
import ContactForm from "../../components/ContactForm/ContactForm";
import Map from "../../components/Map/Map";
import Topbanner from "../../components/Topbanner/Topbanner";
import AboutBg from "../../assets/port.png";

function GetINTouch() {
  return (
    <div>
      <div style={{ marginBottom: 30 }}>
        <Topbanner Bg={AboutBg} title="Get In Touch" UrlName="Get In Touch" />
      </div>
      <div className="container">
        <div className="row">
          <ContactForm text={"Get In Touch"} />
          <div className="col l5 offset-l1">
            <div
              style={{
                marginTop: 80,
              }}
            >
              <div className="row">
                <SingleImg
                  img={
                    "https://gojilabs.com/wp-content/uploads/2021/12/book-3.png"
                  }
                />
                <SingleImg
                  img={
                    "https://gojilabs.com/wp-content/uploads/2021/12/book-4.png"
                  }
                />
                <SingleImg
                  img={
                    "https://gojilabs.com/wp-content/uploads/2021/12/book-4-1.png"
                  }
                />
                <SingleImg
                  img={
                    "https://gojilabs.com/wp-content/uploads/2021/12/book-5.png"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetINTouch;

const SingleImg = ({ img }) => {
  return (
    <div className="col l6">
      <img className="responsive-img" src={img} alt="" />
    </div>
  );
};
