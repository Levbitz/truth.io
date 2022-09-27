import React from "react";
import Topbanner from "../../../components/Topbanner/Topbanner";
import DepartOne from "../../../assets/port.png";

function Ecommerce() {
  return (
    <div>
      <Topbanner Bg={DepartOne} title="Ecommerce " UrlName=" Ecommerce " />
      <div>
        <h2 className="levbitz_title center">
          {" "}
          Why do businesses need an eCommerce website?
        </h2>
        <div className="container">
          <div className="row">
            <div className="col l12">
              <p>
                eCommerce website offers you the luxury to display all the
                product collections on a single platform. Webomindapps is the
                answer you are looking for! Our team will always use the best
                user interface functionalities engaging the customers
                progressively to make the tend to avail of your services or buy
                your products.
              </p>
              <p>
                eCommerce development also helps you access your dashboard for
                the management of sales and product costs with the market
                trends. To make your website stand out, we offer it the
                functionality of ease of access, lesser loading time,
                mobile-friendly, and SEO optimized.
              </p>

              <h5>Benefits of E-Commerce application</h5>
              <p>Mobile & SEO Friendly</p>
              <p>Professional & Secure</p>
              <p>Product Management</p>
              <p>Customization Options</p>
              <p>Currency & Language support</p>
              <p>Custom Integrations</p>
              <p>Easy Maintenance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ecommerce;
