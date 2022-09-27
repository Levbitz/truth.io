import React from "react";
import Address from "../../components/Address/Address";
import ContactForm from "../../components/ContactForm/ContactForm";
import Map from "../../components/Map/Map";
import Topbanner from "../../components/Topbanner/Topbanner";
import AboutBg from "../../assets/port.png";

function ContactPage() {
  return (
    <div>
      <div style={{ marginBottom: 30 }}>
        <Topbanner Bg={AboutBg} title="Contact Us" UrlName="Coctact us Page" />
      </div>
      <div className="container">
        <div className="row">
          <ContactForm text={"Contact Us"} />
          <Address />
        </div>
      </div>
      {/*   <Map />*/}
    </div>
  );
}

export default ContactPage;
