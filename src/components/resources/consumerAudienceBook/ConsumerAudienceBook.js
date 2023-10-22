import React from "react";
import banner from "../../images/banners/consumerAudienceBook.png";
import focusImage from "../../images/images/resourcesImg.png";
import resourcesImg1 from "../../images/images/resourceImg1.png";
import resourcesImg2 from "../../images/images/resourceImg2.png";
import resourcesImg3 from "../../images/images/resourceImg3.png";
import resourcesImg4 from "../../images/images/resourcesImg4.png";
import resourcesImg5 from "../../images/images/resourcesImg5.png";

const ConsumerAudienceBook=()=>{
    const theory = [
        {
          heading: "Panel Composition",
          text: `At Mirats Insights, our Consumer Audience Book is built on the foundation of a diverse and robust panel composition. We take pride in curating a comprehensive panel that reflects the vast and varied demographics of consumers worldwide. Our panel encompasses individuals from different age groups, genders, cultural backgrounds, geographic locations, and socioeconomic statuses. By ensuring such diversity, we create a representative sample of the target consumer audience, allowing businesses to gain valuable insights into the unique needs, preferences, and behaviors of their customers. Through meticulous profiling and segmentation, we enable our clients to access relevant data that fuels their decision-making processes and empowers them to tailor their strategies to resonate with their consumer base. We pave the way for insightful and accurate market research that drives business growth and success.`,
        },{
            heading: "Panel Recruitment and Maintenance",
            text: `The success of our Consumer Audience Book is rooted in our meticulous panel recruitment and maintenance practices. We understand that the quality of the panel directly influences the reliability of the data collected. Therefore, we deploy an array of recruitment strategies to attract potential panelists from diverse backgrounds. Ethical practices and transparency lie at the heart of our recruitment process, ensuring that all panelists participate willingly and feel valued for their contributions. To uphold the integrity of our panel, we engage in continuous communication with our panelists, providing incentives to foster active participation. Regular panel maintenance, including data verification and validation, ensures that the panel remains up-to-date and relevant. At Mirats Insights, we are dedicated to cultivating a thriving panel community that trusts us as a platform to express their opinions and influence change, making our Consumer Audience Book a powerful resource for businesses seeking genuine and actionable consumer insights.`
        },{
            heading: "Research Capabilities",
            text: `Our Consumer Audience Book is a testament to the extensive research capabilities offered by Mirats Insights. As a leading market research organization, we leverage innovative and cutting-edge methodologies to delve into the minds of consumers and unlock valuable insights. From qualitative techniques such as focus groups and in-depth interviews to quantitative approaches like online surveys and data analytics, we employ a versatile toolkit to capture the full spectrum of consumer sentiments and attitudes. Our team of seasoned research experts brings a wealth of industry knowledge and cross-disciplinary expertise, allowing us to cater to a wide range of client needs across various sectors. With a commitment to staying at the forefront of market research trends, we provide clients with real-time data access, interactive reporting, and custom-tailored solutions that fuel data-driven decision-making. The comprehensive research capabilities of our Consumer Audience Book are designed to give businesses the edge they need to thrive in the ever-evolving consumer landscape.`
        },{
            heading: " Data Security and Compliance",
            text: `The trust and confidentiality of our clients and panelists are paramount at Mirats Insights, and we uphold stringent data security and compliance measures to protect their interests. Our data protection framework adheres to global industry standards and complies with relevant data privacy regulations. We implement state-of-the-art data encryption and anonymization techniques to ensure the secure storage and transmission of sensitive information. Regular audits and assessments validate our compliance practices, ensuring that we stay in alignment with the latest regulatory developments. Furthermore, all our team members undergo rigorous training on data security and ethical conduct, emphasizing the critical role they play in maintaining data integrity. At Mirats Insights, we view data security and compliance as integral components of our commitment to excellence, ensuring that our Consumer Audience Book remains a trusted and reliable resource for businesses seeking to harness consumer insights responsibly and ethically.`
        }
      ];
    
      const upcommingResources=[{
        image: resourcesImg1,
        title: "B2C Audience Book",
        text: "Learn more"
      },{
        image: resourcesImg2,
        title: "B2B Audience Book",
        text: "Learn more"
      },{
        image: resourcesImg3,
        title: "Healthcare Audience Book",
        text: "Learn more"
      },{
        image: resourcesImg4,
        title: "Quality / Security Control Docs ",
        text: "Learn more"
      },{
        image: resourcesImg5,
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
                Consumer Audience Book: <span>Mirats Insights</span>
            </h2>
            <p>
            The Consumer Audience Book by Mirats Insights is a specialized resource that delves deep into consumer demographics, preferences, and buying behavior. This book is tailored to businesses seeking to gain a competitive edge in the market by understanding their target consumers on a granular level. With in-depth data and analysis, the Consumer Audience Book provides actionable insights that help businesses tailor their products and marketing efforts to resonate with their ideal customers. Stay ahead of consumer trends and make data-driven decisions with the Consumer Audience Book from Mirats Insights.
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
}

export default ConsumerAudienceBook