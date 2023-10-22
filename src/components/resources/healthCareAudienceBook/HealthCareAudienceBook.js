import React from "react";
import banner from "../../images/banners/healthCareAudience.png"
import focusImage from "../../images/images/resourcesImg.png";
import resourcesImg1 from "../../images/images/resourceImg1.png";
import resourcesImg2 from "../../images/images/resourceImg2.png";
import resourcesImg3 from "../../images/images/resourceImg3.png";
import resourcesImg4 from "../../images/images/resourcesImg4.png";
import resourcesImg5 from "../../images/images/resourcesImg5.png";

const HealthCareAudienceBook = () => {
  const theory = [
    {
      heading: "Panel Composition",
      text: `At Mirats Insights, our Healthcare Audience Book is underpinned by a carefully curated panel composition that reflects the diversity and complexity of the healthcare landscape. Our healthcare panel comprises a wide spectrum of healthcare professionals, patients, caregivers, and key stakeholders within the industry. This comprehensive representation enables businesses to gain a profound understanding of the unique challenges, preferences, and needs of various healthcare segments. From physicians and nurses to pharmacists and administrators, our panel encompasses the expertise required to conduct in-depth research across the healthcare continuum. By incorporating a diverse range of perspectives, we equip our clients with valuable insights that drive the development of innovative solutions and services tailored to the demands of the healthcare market. At Mirats Insights, we are committed to ensuring that our Healthcare Audience Book empowers businesses to make data-driven decisions that positively impact patient care and the healthcare ecosystem as a whole.`,
    },
    {
      heading: "Panel Recruitment and Maintenance",
      text: `Our dedication to excellence in healthcare market research is mirrored in our meticulous panel recruitment and maintenance practices. Recruiting a reliable and representative healthcare panel is critical to the credibility of our research outcomes. Therefore, we employ a multifaceted approach to attract healthcare professionals and patients who willingly participate in our studies. We prioritize ethical considerations, ensuring that all panelists provide informed consent and are valued for their contributions to advancing healthcare knowledge. To maintain the integrity of our panel, we nurture a mutually beneficial relationship with our members through regular communication, personalized engagement, and appropriate incentives. Our commitment to panel maintenance includes ongoing data verification and validation, ensuring that our pool of respondents remains up-to-date and relevant. The robustness of our healthcare panel is foundational to the wealth of insights offered by our Healthcare Audience Book, driving meaningful and evidence-based decision-making for healthcare stakeholders worldwide.`,
    },
    {
      heading: "Research Capabilities",
      text: `At Mirats Insights, our Healthcare Audience Book embodies our unwavering commitment to delivering cutting-edge research capabilities within the healthcare industry. Our team of research experts, including professionals with healthcare expertise, employs a versatile range of methodologies to explore the complex dynamics of the healthcare landscape. Whether it's conducting qualitative research to delve into patient experiences and preferences or deploying quantitative analysis to identify trends and patterns within healthcare data, our comprehensive research capabilities empower businesses to make informed and strategic decisions. Furthermore, our expertise extends beyond traditional research methodologies, as we embrace technological advancements and digital innovation in healthcare research. Through real-time data access, interactive reporting, and tailored solutions, we enable our clients to uncover actionable insights that lead to enhanced patient care, improved healthcare services, and transformative advancements in the healthcare field.`,
    },
    {
      heading: " Data Security and Compliance",
      text: `Safeguarding the sensitive healthcare data we handle is an integral aspect of our operations at Mirats Insights. We recognize the significance of adhering to stringent data security and compliance measures within the healthcare sector. Our data protection framework aligns with global industry standards and complies with all relevant healthcare data privacy regulations. We prioritize data encryption and anonymization to ensure the confidentiality and integrity of healthcare information throughout its lifecycle. Our commitment to data security extends to the training and education of our team members, who are well-versed in the ethical handling of healthcare data. We conduct regular audits and assessments to verify the efficacy of our data security measures and ensure ongoing compliance with evolving regulations. At Mirats Insights, our dedication to data security and compliance is an essential component of our promise to deliver accurate, reliable, and trustworthy insights through our Healthcare Audience Book.`,
    },
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
          Healthcare Audience Book: <span>Mirats Insights</span>
        </h2>
        <p>
          The Healthcare Audience Book by Mirats Insights is a comprehensive
          guide specifically curated for businesses operating in the healthcare
          industry. With healthcare being a dynamic and rapidly evolving sector,
          this book offers essential data and insights to healthcare providers,
          pharmaceutical companies, and other stakeholders. From understanding
          patient needs and preferences to analyzing industry trends and
          regulatory changes, the Healthcare Audience Book equips businesses
          with the knowledge required to make informed decisions and deliver
          exceptional patient care.
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
};

export default HealthCareAudienceBook;
