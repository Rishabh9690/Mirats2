import React from "react";
import banner from "../../images/banners/productTest.png";
import Cards from "../../cards/Cards.js";
import Listing from "../../listing/Listing.js";
import listingImg2 from "../../images/images/listingImg2.png";
import SlidingShow from "../../slidings/SlidingShow.js";
import UnFlashedText from "../../unFlashedText/UnFlashedText.js";
import unFlashImg4 from "../../images/images/unFlashImg4.png";
import unFlashImg5 from "../../images/images/unFlashImg5.png";
import unFlashImg6 from "../../images/images/unFlashImg6.png";
import unFlashImg7 from "../../images/images/unFlashImg7.png";
import unFlashImg8 from "../../images/images/unFlashImg8.png";
import globalSurveyImg from "../../images/images/globalSurveyImg.png";
import globalQunatativeSurveyImg from "../../images/images/globalQunatativeSurveyImg.png";
import endToEndSurveyImg from "../../images/images/endToEndSurveyImg.png";
import onlineSurveyImg from "../../images/images/onlineSurveyImg.png";

import "./product_test.css";

const ProductTestServices=()=>{
   
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
    const cardsHeadings = [{
        heading1: "Essential characteristics of effective ",
        heading2: "DIY survey platforms",
    }]

    const cardsContent = [{
        cardHeading: "User-Friendly Interface",
        cardText: "The platform should be intuitive and easy to navigate. Users should be able to create surveys without difficulty, customize them as desired, and distribute them with just a few clicks. The interface should also be appealing and well-organized, making the process of survey creation and analysis enjoyable and efficient.",
    }, {
        cardHeading: "Customization and Flexibility",
        cardText: "An effective DIY survey platform should provide a range of customization options to ensure the survey meets the specific needs of the user. This could include a variety of question types (multiple choice, rating scale, open-ended), options for branding and design elements, and flexibility in distribution methods (email, social media, website embed)."
    }, {
        cardHeading: "Powerful Analytical Tools",
        cardText: "After the survey is conducted, users need tools to make sense of the data. A good DIY survey platform should offer robust data analysis tools. These could include real-time reporting, data visualization options (like graphs and charts), cross-tabulation for more complex analysis, and data export options for further processing in other software."
    }]

    const slidingHeading = ["Your favourite upcoming", " quantitative solution "];
    const slidingSurveys = [{
        image: globalSurveyImg,
        text: "Global Sample"
    }, {
        image: globalQunatativeSurveyImg,
        text: "Global Qunatitative Fieldwork"
    }, {
        image: endToEndSurveyImg,
        text: "End to End Sample Surveys"
    }, {
        image: onlineSurveyImg,
        text: "online Surveys"
    }];

    const unFlashed=[{
        heading: "Complete range of services",
        image: unFlashImg4,
        text: `Complete range of services
        At Mirats Insights, we offer a comprehensive suite of services as part of our Global Quantitative Fieldwork solutions. This includes everything from designing robust research methodologies and creating data collection tools to managing data processing and analysis. Our clients benefit from our end-to-end research management, saving time and resources that would otherwise be required to coordinate multiple service providers. Our team of expert researchers ensures that each step of the process is executed with precision and diligence to deliver reliable, actionable insights.`
    },{
        heading: "Full solution integration",
        image: unFlashImg5,
        text: `We understand that research data doesn't exist in a vacuum – it's most powerful when integrated with other business information systems. That's why Mirats Insights is committed to offering full solution integration as part of our Global Quantitative Fieldwork services. This means we can help incorporate the insights generated from our research into your existing business intelligence, CRM, or other data management systems. This seamless integration ensures that the valuable insights we provide can be easily accessed and utilized across your organization for maximum impact.`
    },{
        heading: "Leading insights community platform",
        image: unFlashImg6,
        text: `Our Global Quantitative Fieldwork solutions are powered by our leading insights community platform. This platform enables us to connect with respondents from around the world, ensuring that we can gather a wide range of perspectives for our research. But it's more than just a data collection tool – it's a space where respondents can engage in meaningful conversations, share their experiences, and contribute to the development of products and services that truly meet their needs. As a result, our clients don't just get data; they get deep, nuanced insights that can truly drive their business forward.`
    },{
        heading: "Leading insights community platform",
        image: unFlashImg7,
        text: `Our Global Quantitative Fieldwork solutions are powered by our leading insights community platform. This platform enables us to connect with respondents from around the world, ensuring that we can gather a wide range of perspectives for our research. But it's more than just a data collection tool – it's a space where respondents can engage in meaningful conversations, share their experiences, and contribute to the development of products and services that truly meet their needs. As a result, our clients don't just get data; they get deep, nuanced insights that can truly drive their business forward.`
    },{
        heading: "Leading insights community platform",
        image: unFlashImg8,
        text: `Our Global Quantitative Fieldwork solutions are powered by our leading insights community platform. This platform enables us to connect with respondents from around the world, ensuring that we can gather a wide range of perspectives for our research. But it's more than just a data collection tool – it's a space where respondents can engage in meaningful conversations, share their experiences, and contribute to the development of products and services that truly meet their needs. As a result, our clients don't just get data; they get deep, nuanced insights that can truly drive their business forward.`
    }]
    return (
        <div className="product_test_body">
            <img src={banner} alt="banner" />
            <Cards cardsHeadings={cardsHeadings} cardsContent={cardsContent} />
            <UnFlashedText unFlashed={unFlashed}/>
            <Listing content={content} image={listingImg2} />
            <SlidingShow slidingHeading={slidingHeading} slidingSurveys={slidingSurveys}/>
        </div>
    )
}

export default ProductTestServices;