import React from "react";
import banner from "../images/b2cbanner.png";
import focusImage from "../images/focusImage.png";
import b2cImage from "../images/b2cImage.png";
import consumerImage from "../images/consumerImage.png";
import healthCareimage from "../images/healthCareImage.png";
import qualityImage from "../images/qualityImage.png";
import esomarimage from "../images/esomarImage.png";

import "../resources.css";

const B2cAudienceBook = () => {
  const theory = [
    {
      heading: "Panel Composition",
      text: `At Mirats Insights, we pride ourselves on the diversity and representativeness of our B2C panel composition. Our panel comprises a wide range of consumers from various demographics, ensuring a comprehensive representation of the target audience. Through rigorous profiling and screening processes, we recruit panelists from different age groups, genders, ethnicities, geographic locations, and socioeconomic backgrounds. This rich diversity empowers our clients to gain nuanced insights into consumer behavior and preferences across diverse markets and segments. Our commitment to maintaining a well-balanced and relevant panel composition allows us to deliver accurate and actionable data, enabling businesses to make informed decisions that resonate with their target consumers.`,
    },{
        heading: "Panel Recruitment and Maintenance",
        text: `Building and maintaining a high-quality B2C panel is essential for credible market research, and at Mirats Insights, we excel in this endeavor. Our panel recruitment process is founded on transparency, ethical practices, and engagement. We employ multiple channels, including online and offline methods, to attract potential panelists. Furthermore, we prioritize consent and ensure that all panelists willingly participate in research activities. To maintain the panel's integrity, we invest in ongoing communication, incentivization, and a seamless user experience for panelists. Regular panel refreshment and cleaning processes guarantee the relevancy and reliability of the data collected. Our diligent efforts in panel recruitment and maintenance lay the groundwork for conducting impactful market research that reflects the genuine voice of consumers worldwide.`
    },{
        heading: "Research Capabilities",
        text: `As a global leader in market research, Mirats Insights offers an extensive range of research capabilities tailored to suit the needs of diverse businesses. Our team of skilled experts brings a wealth of experience in designing and executing B2C research studies, employing a mix of qualitative and quantitative methodologies. From online surveys and focus groups to in-depth interviews and ethnographic research, we deploy cutting-edge techniques to gain a comprehensive understanding of consumer preferences, opinions, and trends. We believe in fostering innovation, and our technology-driven research solutions provide real-time access to data, enabling businesses to make swift and data-driven decisions in a dynamic market landscape. With our robust research capabilities, clients can uncover valuable insights that drive business growth and elevate their competitive advantage.`
    },{
        heading: " Data Security and Compliance",
        text: `At Mirats Insights, safeguarding data is at the forefront of our priorities. We follow industry-leading data security practices and stringent compliance measures to protect the confidentiality and integrity of the information we handle. Our data collection processes adhere to global data protection regulations, and we maintain a comprehensive framework to ensure compliance with relevant laws and guidelines. We implement advanced encryption and data anonymization techniques to secure sensitive information. Additionally, all our team members undergo thorough training on data security protocols, emphasizing the importance of ethical data handling. Our commitment to data security and compliance reinforces the trust our clients place in us, knowing that their data is in safe hands and that we prioritize the highest standards of ethical conduct throughout our research processes.`
    }
  ];

  const upcommingResources=[{
    image: b2cImage,
    title: "B2C Audience Book",
    text: "Learn more"
  },{
    image: consumerImage,
    title: "B2B Audience Book",
    text: "Learn more"
  },{
    image: healthCareimage,
    title: "Healthcare Audience Book",
    text: "Learn more"
  },{
    image: qualityImage,
    title: "Quality / Security Control Docs ",
    text: "Learn more"
  },{
    image: esomarimage,
    title: "Esomar 37 Answer",
    text: "Learn more"
  }]

  const handleRedirect = (e) => {
    e.preventDefault();
    const index = Number(e.currentTarget.id);
    console.log("Index======>", index)
    if(index===0)
    {
        window.location.replace('/resources/b2caudiencebook');
    }
    if(index===1)
    {
        window.location.replace('/resources/consumeraudiencebook');
    }
    if(index===2)
    {
        window.location.replace('/resources/healthcareaudiencebook');
    }
    if(index===3)
    {
        window.location.replace('/resources/qualityandsecuritydocs');
    }
    if(index===4)
    {
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
          B2C Audience Book : <span>Mirats Insights</span>
        </h2>
        <p>
          The B2C Audience Book by Mirats Insights is a comprehensive guide
          designed to help businesses understand and connect with their target
          consumers in the Business-to-Consumer (B2C) market. This book is a
          treasure trove of valuable insights, data, and trends that enable
          businesses to craft effective marketing strategies and foster
          meaningful relationships with their consumer base. From understanding
          consumer preferences and behavior to identifying emerging market
          opportunities, the B2C Audience Book equips businesses with the
          knowledge they need to drive success in the dynamic world of B2C
          marketing.
        </p>
      </div>
      <div className="resources_level_three">
        <img src={focusImage} alt="focusImage" />
        <div className="resources_level_three_sec_parent">
            {theory.map((element, index)=>{
                return(
                    <div className="resources_level_three_sec_child" key={index}>
                        <h2>{index+1}. {element.heading}</h2>
                        <p>{element.text}</p>
                    </div>
                )
            })}
        </div>
      </div>
      <hr></hr>
      <div className="resources_level_four">
            <h2>Upcomming Resources</h2>
            <div className="resources_level_four_sec_parent">
                {upcommingResources.map((element, index)=>{
                    return(
                        <div className="resources_level_four_sec_child" id={index}>
                            <img src={element.image} alt="image" />
                            <h2>{element.title}</h2>
                            <p onClick={handleRedirect} id={index}>{element.text}</p>
                        </div>
                    )
                })}
            </div>
      </div>
    </div>
  );
};

export default B2cAudienceBook;
