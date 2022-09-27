import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./PortFolioPage.css";
import Topbanner from "../../components/Topbanner/Topbanner";
import Banner from "../../assets/port.png";
import UnderLine from "../../components/UnderLine/UnderLine";
import One from "../../assets/portfolio/1.png";
import Two from "../../assets/portfolio/2.png";
import Three from "../../assets/portfolio/3.png";
import Four from "../../assets/portfolio/4.png";
import Five from "../../assets/portfolio/5.png";
import Six from "../../assets/portfolio/6.png";
import Seven from "../../assets/portfolio/7.png";
import Eight from "../../assets/portfolio/8.png";
import Nine from "../../assets/portfolio/9.png";

function PortFolioPage() {
  return (
    <div>
      <Topbanner Bg={Banner} title="Our Portfolio" UrlName="portfolio page" />
      <div data-aos="fade-up" className="container">
        <div class="row">
          <div>
            <div className="center">
              <UnderLine text="Portfolio" xyz={"auto"} />
            </div>
            <h3 className="levbitz_title center">Some of our recent works</h3>
          </div>
          <SinglePortfolio
            img={Five}
            name="Modern Tech"
            url="https://moderntechpitstop.com"
          />
          <SinglePortfolio
            img={One}
            name="Gokul Driving School"
            url={"https://gokuldrivingschool.com"}
          />

          <SinglePortfolio
            img={Two}
            name="Classic car spa"
            url="https://classiccarspa.in"
          />

          <SinglePortfolio
            img={Three}
            name="SNV Home Infra"
            url={"https://snvhomesinfra.com"}
          />

          <SinglePortfolio
            img={Four}
            name="cauvery car"
            url="https://cauverycar.com"
          />
          <SinglePortfolio
            img={Six}
            name="Ntuc Health"
            url="https://ntuchealth.sg/"
          />
          <SinglePortfolio
            img={Seven}
            name="Wadexign"
            url="https://www.wadexign.com/"
          />
          <SinglePortfolio
            img={Eight}
            name="Images Auto Spa"
            url="https://imagesautospa.com/"
          />
          <SinglePortfolio
            img={Nine}
            name="The Factory Design District"
            url="https://www.thefactorydesigndistrict.com/"
          />
        </div>
      </div>
    </div>
  );
}

export default PortFolioPage;

const SinglePortfolio = ({ url, img, name }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div data-aos="fade-up" class="col s12 l4">
      <div
        style={{
          height: 200,
        }}
      >
        <a href={url} target="_blank" rel="noopener noreferrer">
          <div className="levbitz_portfolio_wrap">
            <div class="card ">
              <div class="card-image">
                <img src={img} alt="dpt" />
                <div className="levbitz_portfolio_content">
                  <span class="card-title">{name}</span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};
