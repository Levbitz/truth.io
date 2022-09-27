import React from "react";
import Topbanner from "../../../components/Topbanner/Topbanner";
import DepartOne from "../../../assets/aboutSho.jpeg";

function DMarketing() {
  return (
    <div>
      <Topbanner
        Bg={DepartOne}
        title="Digital Marketing "
        UrlName=" Digital Marketing "
      />
      <div className="container">
        <h2 className="levbitz_title center">What is Digital Marketing?</h2>
        <p>
          SEO, SEM, PPC, SMO, Content marketing and social media networking,
          etc. comprise a perfect digital marketing strategy. We are Google
          certified marketing professionals as well as Bing ads accredited
          agency, and each member of our digital marketing team flaunts a great
          deal of experience and expertise in their field of marketing and are
          always on the hunt for new and innovative ideas to connect businesses
          to people across the globe
        </p>

        <h5>SEO (Search engine Optimization)</h5>
        <h5> Website Marketing</h5>
        <h5>Pay-Per-Click (PPC) </h5>
        <h5>Advertising Content Marketing</h5>

        <p>
          The goal of content marketing is to reach potential customers through
          the use of content. Content is usually published on a website and then
          promoted through social media, email marketing, search engine
          optimization, or even PPC campaigns. The tools of content marketing
          include blogs, eBooks, online courses, infographics, podcasts, and
          webinars.
        </p>
        <h5>Email Marketing</h5>
        <p>
          Email marketing is still one of the most effective digital marketing
          channels. Many people confuse email marketing with spam email
          messages, but that’s not what email marketing is all about. This type
          of marketing allows companies to get in touch with potential customers
          and anyone interested in their brands
        </p>
        <p>
          Many digital marketers use all other digital marketing channels to add
          leads to their email lists and then, through email marketing, they
          create customer acquisition funnels to turn those leads into
          customers.
        </p>

        <h5>Social Media Marketing</h5>
        <p>
          The primary goal of a social media marketing campaign is brand
          awareness and establishing social trust. As you go deeper into social
          media marketing, you can use it to get leads or even as a direct sales
          channel. Promoted posts and tweets are two examples of social media
          marketing.
        </p>
        <h5>Affiliate Marketing</h5>
        <p>
          Affiliate marketing is one of the oldest forms of marketing, and the
          internet has brought new life to this old standby. With affiliate
          marketing, influencers promote other people’s products and get a
          commission every time a sale is made or a lead is introduced. Many
          well-known companies like Amazon have affiliate programs that pay out
          millions of dollars per month to websites that sell their products
        </p>
      </div>
    </div>
  );
}

export default DMarketing;
