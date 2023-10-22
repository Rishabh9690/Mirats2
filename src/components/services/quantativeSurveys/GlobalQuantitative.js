import React, { useEffect, useState } from "react";
import banner from "../../images/banners/globalQuantitative.png";
import listingImg2 from "../../images/images/listingImg2.png";
import unFlashedImg1 from "../../images/images/unFlashImg1.png";
import unFlashedImg2 from "../../images/images/unFlashImg2.png";
import unFlashedImg3 from "../../images/images/unFlashImg3.png";
import globalSurveyImg from "../../images/images/globalSurveyImg.png";
import globalQunatativeSurveyImg from "../../images/images/globalQunatativeSurveyImg.png";
import endToEndSurveyImg from "../../images/images/endToEndSurveyImg.png";
import onlineSurveyImg from "../../images/images/onlineSurveyImg.png";
import Cards from "../../cards/Cards.js";
import UnFlashedText from "../../unFlashedText/UnFlashedText.js";
import Listing from "../../listing/Listing.js";
import SlidingShow from "../../slidings/SlidingShow.js";
import "./quantitativesurvey.css";

const GlobalQunatitative= ()=>{

    const cardsHeadings=[{
        heading1: "Unlocking insights and empowering",
        heading2: "decision-making",
    }]

    const cardsContent=[{
        cardHeading:"Data-Driven Decisions",  
        cardText: "Quantitative fieldwork generates numerical data that can be analyzed statistically. This data forms the basis of robust, objective, data-driven decisions. It eliminates guesswork and enables businesses to make choices backed by solid evidence.", 
    },{
        cardHeading:"Understanding Patterns ",
        cardText: "Quantitative data is excellent for spotting patterns, trends, and relationships. With global fieldwork, these patterns can be observed across different countries and cultures, offering valuable insights into the global market and helping businesses anticipate and respond to changes effectively."
    },{
        cardHeading: "Comparative Analysis",
        cardText: "Global quantitative fieldwork allows businesses to compare their performance against competitors or industry standards. This can highlight areas of strength and areas requiring improvement, empowering businesses to strategize and prioritize effectively to gain a competitive edge."
    }]
    const slidingHeading=["Your favourite upcoming", " quantitative solution "];
    const slidingSurveys=[{
        image: globalSurveyImg,
        text: "Global Sample"
    },{
        image: globalQunatativeSurveyImg,
        text: "Global Qunatitative Fieldwork"
    },{
        image: endToEndSurveyImg,
        text: "End to End Sample Surveys"
    },{
        image: onlineSurveyImg,
        text: "online Surveys"
    }];

    const unFlashed=[{
        heading: "Complete range of services",
        image: unFlashedImg1,
        text: `Complete range of services
        At Mirats Insights, we offer a comprehensive suite of services as part of our Global Quantitative Fieldwork solutions. This includes everything from designing robust research methodologies and creating data collection tools to managing data processing and analysis. Our clients benefit from our end-to-end research management, saving time and resources that would otherwise be required to coordinate multiple service providers. Our team of expert researchers ensures that each step of the process is executed with precision and diligence to deliver reliable, actionable insights.`
    },{
        heading: "Full solution integration",
        image: unFlashedImg2,
        text: `We understand that research data doesn't exist in a vacuum – it's most powerful when integrated with other business information systems. That's why Mirats Insights is committed to offering full solution integration as part of our Global Quantitative Fieldwork services. This means we can help incorporate the insights generated from our research into your existing business intelligence, CRM, or other data management systems. This seamless integration ensures that the valuable insights we provide can be easily accessed and utilized across your organization for maximum impact.`
    },{
        heading: "Leading insights community platform",
        image: unFlashedImg3,
        text: `Our Global Quantitative Fieldwork solutions are powered by our leading insights community platform. This platform enables us to connect with respondents from around the world, ensuring that we can gather a wide range of perspectives for our research. But it's more than just a data collection tool – it's a space where respondents can engage in meaningful conversations, share their experiences, and contribute to the development of products and services that truly meet their needs. As a result, our clients don't just get data; they get deep, nuanced insights that can truly drive their business forward.`
    }]


    const content=[{
        heading1: "Our global quantitative fieldwork ",
        heading2: "made approaches",
        lists: ["Innovative Data Collection Technologies", "Advance Sampling Technologies", "Customised Survey Design", "Comprehensive Data Analysis"],
        sectionHeading1: "Innovative ",
        sectionHeading2: "Data Collection Technologiess",
        sectionText: "Mirats Insights is a forerunner in implementing innovative data collection technologies in our online surveys. We harness the power of advanced technologies, from AI-enhanced analytics to real-time data gathering methods, to ensure we capture diverse and thorough insights for our clients. Our tech-driven approach to data collection equips us with versatility and efficiency, making our market research services stand out in the industry.",
        sectionListHeading: "Benefits of using Mirats Insights -",
        sectionListPoints: ["Data Reliability and Precision: Our advanced data collection technologies ensure the collection of high-quality, trustworthy data.", "Scalability: The innovative technologies we use allow for scalability, meaning we can handle projects of any size or complexity effectively."],
    }]
    return (
        <div className="qunatitative_body">
            <img src={banner} alt="banner_image" />
            <Cards cardsHeadings={cardsHeadings} cardsContent={cardsContent} />
            <UnFlashedText unFlashed={unFlashed}/>
            <Listing content={content} image={listingImg2}/>
            <SlidingShow slidingHeading={slidingHeading} slidingSurveys={slidingSurveys}/>
        </div>
    )
}

export default GlobalQunatitative;