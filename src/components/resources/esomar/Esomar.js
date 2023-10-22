import React from "react";
import banner from "../../images/banners/esomar.png";
import focusImage from "../../images/images/resourcesImg.png";
import resourcesImg1 from "../../images/images/resourceImg1.png";
import resourcesImg2 from "../../images/images/resourceImg2.png";
import resourcesImg3 from "../../images/images/resourceImg3.png";
import resourcesImg4 from "../../images/images/resourcesImg4.png";
import resourcesImg5 from "../../images/images/resourcesImg5.png";

const Esomar = () => {

  const theory = [
    {
      heading: "Company Overview",
      text: `As a responsible and ethical market research organization, Mirats Insights is proud to present our Esomar 37 Answer, demonstrating our unwavering commitment to upholding the highest standards of research integrity. Our company overview is founded on a journey of excellence that began in 2013 as Unitech Survey Solutions, providing offline qualitative and quantitative solutions. Since then, we have evolved into Mirats Insights Private Limited, a subsidiary organization of Macer India Research and Technology Services Private Limited. Today, we reach 69 countries worldwide, driven by our passion for market research and our mission to build technology that democratizes insights across the globe.
          At Mirats Insights, we prioritize accessibility, diversity, and innovation in market research. Our team of experts hailing from various fields ensures that our clients receive actionable insights and exceptional results. We take pride in our client-centric approach, collaborating closely with businesses to provide tailored solutions that drive tangible outcomes. Our commitment to excellence extends beyond words - it is reflected in our actions, relationships, and the transformative impact we strive to create in the world of insights and consulting. With a vision to be the globally dominant contributor of benchmarking data and insights, we leverage our extensive research capabilities to empower businesses worldwide with data-driven success.`,
    },
    {
      heading: "Panel Recruitment and Maintenance",
      text: `Mirats Insights understands that the quality and reliability of research outcomes depend on a well-maintained and representative panel. In our Esomar 37 Answer, we highlight our meticulous panel recruitment and management practices. We prioritize diversity and inclusivity, ensuring that our panel composition accurately reflects the demographics of the target audience. Through transparent and ethical recruitment processes, we attract panelists from various backgrounds, valuing their contributions as they participate willingly in research activities.
          Our commitment to panel management extends to fostering strong relationships with our panelists. Regular communication, engagement initiatives, and appropriate incentives ensure active participation and a high level of responsiveness. We continuously verify and validate panel data to ensure the relevancy and accuracy of information. By nurturing a thriving panel community, we create a foundation for insightful market research that provides our clients with valuable insights into their target audience's preferences, needs, and behaviors.`,
    },
    {
      heading: "Sampling and Data Collection",
      text: `In our Esomar 37 Answer, we emphasize the importance of sampling and data collection methodologies in maintaining the integrity of our research. Mirats Insights employs state-of-the-art sampling techniques to ensure that our research studies are representative and statistically sound. We carefully design our sample frameworks to capture the diversity and complexity of the target audience, thereby providing our clients with comprehensive and reliable data.
          Data collection is conducted through a combination of qualitative and quantitative research methods, tailored to suit the unique requirements of each project. From online surveys and in-depth interviews to focus groups and observational studies, our versatile approach enables us to access rich and multi-dimensional data. By utilizing innovative technology and platforms, we ensure seamless data collection processes that yield real-time insights, empowering businesses to make agile and data-driven decisions.`,
    },
    {
      heading: "Data Security and Privacy",
      text: `At Mirats Insights, data security and privacy are of paramount importance. Our Esomar 37 Answer outlines the robust measures we have implemented to safeguard the confidentiality and integrity of the data we handle. We adhere to global data protection regulations and industry best practices to ensure the highest level of data security.
          Our data protection framework includes encryption and anonymization protocols, protecting sensitive information from unauthorized access. We continuously monitor and audit our data security measures to uphold compliance with evolving data privacy regulations. Additionally, all team members undergo rigorous training on data security protocols and ethical data handling, ensuring that our commitment to data privacy permeates throughout our organization.`,
    }, {
      heading: "Ethical research practices",
      text: `Ethics is at the core of our research philosophy, and our Esomar 37 Answer reflects our dedication to ethical research practices. We embrace the ESOMAR 37 guidelines, which provide a framework for responsible and transparent market research. Mirats Insights is committed to ensuring that our research activities respect the rights and well-being of respondents and panelists.
            We prioritize informed consent and voluntary participation in all research studies, maintaining open channels of communication with our panelists and respondents. Our research team adheres to stringent ethical guidelines, ensuring that research protocols prioritize the interests of participants and adhere to the highest ethical standards. Through ethical research practices, we build trust with our panelists, clients, and stakeholders, solidifying Mirats Insights' reputation as a trusted and reliable partner in the market research industry.
            `,
    }
  ];

  const upcommingResources = [
    {
      image: resourcesImg1,
      title: "B2C Audience Book",
      text: "Learn more",
    },
    {
      image: resourcesImg2,
      title: "B2B Audience Book",
      text: "Learn more",
    },
    {
      image: resourcesImg3,
      title: "Healthcare Audience Book",
      text: "Learn more",
    },
    {
      image: resourcesImg4,
      title: "Quality / Security Control Docs ",
      text: "Learn more",
    },
    {
      image: resourcesImg5,
      title: "Esomar 37 Answer",
      text: "Learn more",
    },
  ];

  const handleRedirect = (e) => {
    e.preventDefault();
    const index = Number(e.currentTarget.id);
    console.log("Index======>", index)
    if (index === 0) {
      window.location.replace('/resources/b2caudiencebook');
    }
    if (index === 1) {
      window.location.replace('/resources/consumeraudiencebook');
    }
    if (index === 2) {
      window.location.replace('/resources/healthcareaudiencebook');
    }
    if (index === 3) {
      window.location.replace('/resources/qualityandsecuritydocs');
    }
    if (index === 4) {
      window.location.replace('/resources/esomar');
    }
  }
  return (
    <div className="b2c_audience_book_body">
      <div className="resources_level_one">
        <img src={banner} alt="banner" />
      </div>
      <div className="resources_level_two">
        <h2>
          Esomar 37 Answer: <span>Mirats Insights</span>
        </h2>
        <p>
          The ESOMAR 37 Answer by Mirats Insights demonstrates our dedication to complying with the ESOMAR 37 guidelines, which are essential for ethical and responsible market research. By adhering to these guidelines, we prioritize respondent privacy, ensure data anonymity, and uphold the integrity of the research process. Our commitment to ethical practices reinforces our credibility as a market research provider and underscores our dedication to excellence in every aspect of our operations.
        </p>
      </div>
      <div className="resources_level_three">
        <img src={focusImage} alt="focusImage" />
        <div className="resources_level_three_sec_parent">
          {theory.map((element, index) => {
            return (
              <div className="resources_level_three_sec_child" key={index}>
                <h2>
                  {index + 1}. {element.heading}
                </h2>
                <p>{element.text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <hr></hr>
      <div className="resources_level_four">
        <h2>Upcomming Resources</h2>
        <div className="resources_level_four_sec_parent">
          {upcommingResources.map((element, index) => {
            return (
              <div className="resources_level_four_sec_child" id={index}>
                <img src={element.image} alt="image" />
                <h2>{element.title}</h2>
                <p onClick={handleRedirect} id={index}>{element.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Esomar;