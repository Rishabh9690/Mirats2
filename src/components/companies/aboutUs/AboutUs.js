import React from "react";
import banner from "../../images/banners/aboutUs.png";
import video from "../../images/images/Video.png";
import Clients from "../../clients/Clients";
import Listing from "../../listing/Listing";
import listingImg2 from "../../images/images/listingImg2.png";
import aboutUsImg1 from "../../images/images/aboutUsImg1.png";
import aboutUsImg2 from "../../images/images/aboutUsImg2.png";
import Carousel from "../../carousel/Carousel";
import carouselImg1 from "../../images/images/carouselImg1.png";
import carouselImg2 from "../../images/images/carouselImg2.png";
import carouselImg3 from "../../images/images/carouselImg3.png";
import carouselImg4 from "../../images/images/carouselImg4.png";
import carouselImg5 from "../../images/images/carouselImg5.png";
import Testimonail from "../../testimonial/Testimonial.js";
import testimonialImg1 from "../../images/images/client1.png";
import testimonialImg2 from "../../images/images/client2.png";
import "./aboutUs.css";

const AboutUs = () => {

  const content=[{
    heading1: "Our online survey ",
    heading2: "made approaches",
    lists: ["Innovative Data Collection Technologies", "Advance Sampling Technologies", "Customised Survey Design", "Comprehensive Data Analysis"],
    sectionHeading1: "Innovative ",
    sectionHeading2: "Data Collection Technologiess",
    sectionText: "Mirats Insights is a forerunner in implementing innovative data collection technologies in our online surveys. We harness the power of advanced technologies, from AI-enhanced analytics to real-time data gathering methods, to ensure we capture diverse and thorough insights for our clients. Our tech-driven approach to data collection equips us with versatility and efficiency, making our market research services stand out in the industry.",
    sectionListHeading: "Benefits of using Mirats Insights -",
    sectionListPoints: ["Data Reliability and Precision: Our advanced data collection technologies ensure the collection of high-quality, trustworthy data.", "Scalability: The innovative technologies we use allow for scalability, meaning we can handle projects of any size or complexity effectively."],
}]

const carouselData = [{
  image: carouselImg1,
  title: "Consumer Packaged Goods",
  text: "At Mirats Insights, we have a deep understanding of the Consumer Packaged Goods (CPG) industry and its unique challenges. Our culture is rooted in delivering exceptional market research and insights to support CPG companies in making informed decisions and driving growth."
}, {
  image: carouselImg2,
  title: "Financial Services",
  text: "At Mirats Insights, we specialize in providing comprehensive market research and insights to the financial services industry. We understand the unique challenges and opportunities that financial institutions face in today's dynamic and competitive landscape."
}, {
  image: carouselImg3,
  title: "Healthcare",
  text: "At Mirats Insights, we have a deep understanding of the healthcare industry and its complex dynamics. Our culture is centered around delivering actionable market research and insights to support healthcare organizations in driving innovation, improving patient outcomes, and navigating the evolving healthcare landscape."
}, {
  image: carouselImg4,
  title: "Marketing Research",
  text: "At Mirats Insights, marketing research is at the core of our culture. We are dedicated to providing our clients with comprehensive insights that drive strategic marketing decisions and deliver measurable results. We work closely with businesses across industries to understand their unique marketing challenges and objectives."
}, {
  image: carouselImg5,
  title: "Consulting",
  text: "At Mirats Insights, we pride ourselves on our exceptional consulting services. Our team of experienced consultants brings together deep industry knowledge, analytical expertise, and a client-centric approach to deliver transformative solutions. We collaborate closely with our clients to understand their unique challenges and goals."
}]
const carouselInfo = ["Our Industry", "You need insights", " we have solutions."];
const testimonialData = [{
  image: testimonialImg1,
  name: "Cameron Green",
  position: "CEO & CTO, AB Technology",
  text: "Lorem ipsum dolor sit amet consectetur. Lacinia est eu laoreet tortor. Amet venenatis semper molestie non. Sed quis auctor consectetur nisi nunc elementum felis amet eu."
}, {
  image: testimonialImg2,
  name: "Alice",
  position: "COO, AB Technology",
  text: "Lorem ipsum dolor sit amet consectetur. Lacinia est eu laoreet tortor. Amet venenatis semper molestie non. Sed quis auctor consectetur nisi nunc elementum felis amet eu."
}]

const Statistic = [[{
  num: "234K +",
  text: "Experience Profile",
  color: `linear-gradient(92deg, #6E33FF 19.06%, rgba(196, 69, 255, 0.40) 81.28%)`
}, {
  num: "23",
  text: "Mirats Insights Product",
  color: `linear-gradient(92deg, #6E33FF 19.06%, rgba(196, 69, 255, 0.40) 81.28%)`
}], [{
  num: "905",
  text: "Mirats Group Employee",
  color: `background: linear-gradient(92deg, #0653FD 0%, #40CDE6 100%)`
}, {
  num: "234M +",
  text: "Happy Customer",
  color: `background: linear-gradient(92deg, #0653FD 0%, #40CDE6 100%)`
}], [{
  num: "234 +",
  text: "Conversations Analysed",
  color: `background: linear-gradient(93deg, #0B1722 17.32%, rgba(114, 153, 185, 0.00) 100%)`
}, {
  num: "4",
  text: "Mirats Parents Company",
  color: `background: linear-gradient(93deg, #0B1722 17.32%, rgba(114, 153, 185, 0.00) 100%)`
}]]

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
      <Clients />
      <Listing content={content} image={listingImg2} />
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
          <img src={aboutUsImg1} alt="image1" />
        </div>
        <div className="about_us_level_six_sec">
          <img src={aboutUsImg2} alt="image2" />
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
      <Carousel carouselInfo={carouselInfo} carouselData={carouselData} />
      <div className="statistics_body">
                <section>
                    <p>Our Statistic</p>
                    <h2>Numbers speak for<span> themselves</span></h2>
                </section>
                <section className="statistics_body_parent_map">
                    {Statistic.map((stats, index) => {
                        return (
                            <div key={index} className="statistics_body_parent_first_child_map">
                                {stats.map((item, i) => {
                                    return (
                                        <div key={i} className="statistics_body_parent_second_child_map">
                                            <h2 style={{ color: item.color }}>{item.num}</h2>
                                            <p>{item.text}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </section>
            </div>
            <Testimonail testimonialData={testimonialData} />
    </div>
  );
};

export default AboutUs;
