import React, { useState } from "react";
import banner from "./images/Banner.png";
import video from "./images/Video.png";
import Evernote from "./images/Evernote.png";
import Intercom from "./images/Intercom.png";
import Miro from "./images/Miro.png";
import Stripe from "./images/Stripe.png";
import Adobe from "./images/Adobe.png";
import Gitlab from "./images/Gitlab.png";
import Pipeliner from "./images/Pipeliner.png";
import Microsoft from "./images/Microsoft.png";
import Pipedrive from "./images/Pipedrive.png";
import Wix from "./images/Wix.png";
import Okta from "./images/Okta.png";
import Hotjar from "./images/Hotjar.png";
import Quickbooks from "./images/Quickbooks.png";
import imageSec from "./images/imageSec.png";
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image_sec1 from "./images/image_sec1.png";
import image_sec2 from "./images/image_sec2.png";
import "./aboutUs.css";

const AboutUs = () => {
  const [data, setData] = useState({});
  const [defaultData, setDefaultData] = useState(true);
  const clientListOne = [Evernote, Intercom, Miro, Stripe];
  const clientListTwo = [Adobe, Gitlab, Pipeliner, Microsoft, Pipedrive];
  const clientlistThree = [Wix, Okta, Hotjar, Quickbooks];

  const listData = [
    {
      heading: "Our Commitment",
      text: `At Mirats Insights, we are committed to delivering excellence in everything we do. Our dedication to our clients, our employees, and our community drives us to continuously strive for the highest standards of quality, integrity, and innovation. At Mirats Insights, our commitment extends beyond words - it is reflected in our actions, our relationships, and the exceptional results we deliver. We invite you to join us on this journey of excellence and make a difference in the world of insights and consulting.`,
    },
    {
      heading: "Our road-map",
      text: `Feugiat egestas ut laoreet dolor lacinia eget nisi cursus. Maecenas elementum commodo tortor purus. Turpis sapien laoreet pharetra egestas morbi condimentum hendrerit neque. Auctor tincidunt elementum eleifend adipiscing purus. Cras nunc a tempor neque elit molestie malesuada diam morbi. Consequat aenean mi lacinia interdum eros ipsum dignissim amet pulvinar. Id ullamcorper at nisi venenatis urna nunc purus mi faucibus. Vitae aliquam pulvinar amet nulla rhoncus magna.`,
    },
    {
      heading: "Our Beliefs",
      text: `Feugiat egestas ut laoreet dolor lacinia eget nisi cursus. Maecenas elementum commodo tortor purus. Turpis sapien laoreet pharetra egestas morbi condimentum hendrerit neque. Auctor tincidunt elementum eleifend adipiscing purus. Cras nunc a tempor neque elit molestie malesuada diam morbi. Consequat aenean mi lacinia interdum eros ipsum dignissim amet pulvinar. Id ullamcorper at nisi venenatis urna nunc purus mi faucibus. Vitae aliquam pulvinar amet nulla rhoncus magna.`,
    },
    {
      heading: "Our Stories",
      text: `Feugiat egestas ut laoreet dolor lacinia eget nisi cursus. Maecenas elementum commodo tortor purus. Turpis sapien laoreet pharetra egestas morbi condimentum hendrerit neque. Auctor tincidunt elementum eleifend adipiscing purus. Cras nunc a tempor neque elit molestie malesuada diam morbi. Consequat aenean mi lacinia interdum eros ipsum dignissim amet pulvinar. Id ullamcorper at nisi venenatis urna nunc purus mi faucibus. Vitae aliquam pulvinar amet nulla rhoncus magna.`,
    },
  ];

  const listDetails = (e) => {
    e.preventDefault();
    let id = e.currentTarget.id;
    setData({
      heading: listData[id].heading,
      text: listData[id].text,
    });
    setDefaultData(false);
  };

  const gridOne = [
    {
      heading: "234K +",
      text: "Experience profile",
    },
    {
      heading: "23",
      text: "Mirats Insights Product",
    },
  ];
  const gridTwo = [
    {
      heading: "905",
      text: "Mirats Group Employee",
    },
    {
      heading: "234M +",
      text: "Happy Customer",
    },
  ];
  const gridThree = [
    {
      heading: "234 +",
      text: "Conversations Analysed",
    },
    {
      heading: "4",
      text: "Mirats Parents Company",
    },
  ];

  return (
    <div className="about_us_body">
      <img src={banner} alt="banner" />
      <div className="about_us_level_two">
        <h2>
          About <span>Mirats Insights</span>
        </h2>
        <p>
          Our journey began in 2013 as Unitech Survey Solutions, where we
          provided offline qualitative and quantitative solutions to our
          clients. In 2016, we introduced our online quantitative and
          qualitative solutions and rebranded as Macer. In 2020, during the
          lockdown, we successfully incorporated our company as "Macer India
          Research & Technology Services Private Limited," and we started our
          operations with 21 countries. Today, we have expanded our reach and
          cover 69 countries globally through our subsidiary organization,
          Mirats Insights Private Limited. Our team at Mirats Insights comprises
          experts from various fields who have extensive experience in market
          research. We are passionate about our work and dedicated to delivering
          actionable insights and exceptional results for our clients. Our
          parent organization, Macer India Research and Technology Services
          Private Limited, has over 70 employees, and we have a team of 30
          employees at Mirats Insights. Our team is based in two cities in
          India-
        </p>
        <p>
          Lucknow and Mumbai - and one city in Wyoming State, USA - Sheridan.
        </p>
      </div>
      <div className="about_us_level_three">
        <img src={video} alt="video" />
      </div>
      <div className="about_us_level_four">
        <div className="about_us_level_four_box">
          <div className="about_us_level_four_heading">
            <p>Our clients</p>
            <h2>
              Trusted by over 76+ leading <span>clients worldwide </span>
            </h2>
          </div>
          <div className="about_us_level_four_box_clients">
            <div className="about_us_level_four_box_clients_row_one_parent">
              {clientListOne.map((element, index) => {
                return (
                  <div className="about_us_level_four_box_clients_row_one_chlid">
                    <img src={element} alt="clientImage" />
                  </div>
                );
              })}
            </div>
            <div className="about_us_level_four_box_clients_row_two_parent">
              {clientListTwo.map((element, index) => {
                return (
                  <div className="about_us_level_four_box_clients_row_two_chlid">
                    <img src={element} alt="clientImage" />
                  </div>
                );
              })}
            </div>
            <div className="about_us_level_four_box_clients_row_three_parent">
              {clientlistThree.map((element, index) => {
                return (
                  <div className="about_us_level_four_box_clients_row_three_chlid">
                    <img src={element} alt="clientImage" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="about_us_level_five">
        <ul className="about_us_level_five_list">
          <li onClick={listDetails} id={0}>
            Our Commitment
          </li>
          <li onClick={listDetails} id={1}>
            Our road-map
          </li>
          <li onClick={listDetails} id={2}>
            Our Beliefs
          </li>
          <li onClick={listDetails} id={3}>
            Our Stories
          </li>
        </ul>
        <div className="about_us_level_five_sec">
          <section>
            <img src={imageSec} alt="imageSec" />
          </section>
          <section>
            {defaultData ? (
              <>
                <h2>{listData[0].heading}</h2>
                <p>{listData[0].text}</p>
              </>
            ) : (
              <>
                <h2>{data.heading}</h2>
                <p>{data.text}</p>
              </>
            )}
          </section>
        </div>
      </div>
      <div className="about_us_level_six">
        <div className="about_us_level_six_sec">
          <div className="about_us_level_six_details">
            <h2>Our Mission</h2>
            <p>
              Our Mission At Mirats Insights, our mission is to "Build
              technology that anyone can access and get insights with our
              innovative software and services, from any corner of the world to
              bring change." We believe that everyone should have the
              opportunity to benefit from market research, regardless of
              location or budget. Our user-friendly and intuitive solutions
              empower businesses to stay ahead of the competition. With a focus
              on customization, we collaborate closely with clients to deliver
              tailored solutions that drive tangible results. Experience the
              power of our inclusive approach to market research at Mirats
              Insights, bringing change from every corner of the world.
            </p>
          </div>
          <img src={image1} alt="image1" />
        </div>
        <div className="about_us_level_six_sec">
          <img src={image2} alt="image2" />
          <div className="about_us_level_six_details">
            <h2>Our Vision</h2>
            <p>
              At Mirats Insights, "Our vision is to be the globally dominant
              contributor of benchmarking data and insights to our clients." We
              aim to provide exceptional value and drive business growth
              worldwide. Our commitment to innovation and excellence sets us
              apart as we strive to deliver accurate and reliable market
              research to our clients. With a focus on benchmarking, we offer
              up-to-date and comprehensive information, empowering our clients
              to make informed decisions and stay ahead of the competition.
              Experience the power of data-driven success with Mirats Insights.
            </p>
          </div>
        </div>
      </div>
      <div className="about_us_level_seven">
        <div className="about_us_level_seven_heading">
          <p>Our Industry</p>
          <h2>
            You need insights <span>we have solutions.</span>
          </h2>
        </div>
      </div>
      <div className="about_us_level_eight">
        <div className="about_us_level_eight_heading">
          <p>Our Statics</p>
          <h2>
            numbers speak for <span>themselves</span>
          </h2>
        </div>
        <div className="about_us_level_eight_flex">
          <div className="about_us_level_eight_grid_one_parent">
            {gridOne.map((element, index) => {
              return (
                <div className="about_us_level_eight_grid_one_child">
                  <h2>{element.heading}</h2>
                  <p>{element.text}</p>
                </div>
              );
            })}
          </div>
          <div className="about_us_level_eight_grid_two_parent">
            {gridTwo.map((element, index) => {
              return (
                <div className="about_us_level_eight_grid_two_child">
                  <h2>{element.heading}</h2>
                  <p>{element.text}</p>
                </div>
              );
            })}
          </div>
          <div className="about_us_level_eight_grid_three_parent">
            {gridThree.map((element, index) => {
              return (
                <div className="about_us_level_eight_grid_three_child">
                  <h2>{element.heading}</h2>
                  <p>{element.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="about_us_level_nine">
        <div className="about_us_level_nine_heading">
          <p>Our Testimonial</p>
          <h2>What our client says</h2>
        </div>
        <div className="about_us_level_nine_sec">
          <section>
            <img src={image_sec1} alt="image_sec1" />
            <div className="about_us_level_nine_sec_detail">
              <h2>Cameron Green</h2>
              <h5>CEO & CTO, AB Technology</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur. Lacinia est eu laoreet
                tortor. Amet venenatis semper molestie non. Sed quis auctor
                consectetur nisi nunc elementum felis amet eu.
              </p>
            </div>
          </section>
          <section>
            <img src={image_sec2} alt="image_sec2" />
            <div className="about_us_level_nine_sec_detail">
              <h2>Alice</h2>
              <h5>COO, AB Technology</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur. Lacinia est eu laoreet
                tortor. Amet venenatis semper molestie non. Sed quis auctor
                consectetur nisi nunc elementum felis amet eu. Sapien pharetra
                tempus semper euismod cursus morbi id. Arcu est ultrices
                vulputate commodo tempus facilisis
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
