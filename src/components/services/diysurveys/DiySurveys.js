import React, { useEffect, useState } from "react";
import banner_diy from "../../images/banners/diySurveys.png";
import listingimg2 from "../../images/images/listingImg2.png";
import Cards from "../../cards/Cards.js";
import Listing from "../../listing/Listing.js";
import SlidingShow from "../../slidings/SlidingShow.js";
import globalSurveyImg from "../../images/images/globalSurveyImg.png";
import globalQunatativeSurveyImg from "../../images/images/globalQunatativeSurveyImg.png";
import endToEndSurveyImg from "../../images/images/endToEndSurveyImg.png";
import onlineSurveyImg from "../../images/images/onlineSurveyImg.png";
import "./diysurveys.css";

const DiySurveys=()=>{
    const cardsHeadings=[{
        heading1: "Essential characteristics of effective ",
        heading2: "DIY survey platforms",
    }]

    const cardsContent=[{
        cardHeading:"User-Friendly Interface",  
        cardText: "The platform should be intuitive and easy to navigate. Users should be able to create surveys without difficulty, customize them as desired, and distribute them with just a few clicks. The interface should also be appealing and well-organized, making the process of survey creation and analysis enjoyable and efficient.", 
    },{
        cardHeading:"Customization and Flexibility",
        cardText: "An effective DIY survey platform should provide a range of customization options to ensure the survey meets the specific needs of the user. This could include a variety of question types (multiple choice, rating scale, open-ended), options for branding and design elements, and flexibility in distribution methods (email, social media, website embed)."
    },{
        cardHeading: "Powerful Analytical Tools",
        cardText: "After the survey is conducted, users need tools to make sense of the data. A good DIY survey platform should offer robust data analysis tools. These could include real-time reporting, data visualization options (like graphs and charts), cross-tabulation for more complex analysis, and data export options for further processing in other software."
    }]

    const content=[{
        heading1: "Our DIY survey ",
        heading2: "made approaches",
        lists: ["IComprehensive Survey Distribution Option", "Real Time Data Collection and Monitoring", "Advance Data Analysis and Reporting Tools", "CScalability and Integ"],
        sectionHeading1: "User-Friendly ",
        sectionHeading2: "Survey Creation Tools",
        sectionText: 'Mirats Insights, renowned for its expertise in consumer insights, unveils "Mirats DIY," a self-serve platform that empowers users to take full control of their research journey. Perfect for businesses that value flexibility and hands-on engagement, this tool ensures a tailored research experience, from start to finish.',
        sectionListHeading: "Benefits of using Mirats Insights -",
        sectionListPoints: ["User-Friendly Interface:", "Customizable Templates:", "Real-time Data Analytics:", "Comprehensive Resource Hub:"],
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
  
    return(
        <div className="main_diy_body">
            <img src={banner_diy} alt="banner_img" />
            <Cards cardsHeadings={cardsHeadings} cardsContent={cardsContent} />
            <Listing content={content} image={listingimg2}/>
            <SlidingShow slidingHeading={slidingHeading} slidingSurveys={slidingSurveys}/>
        </div>
    )
}

export default DiySurveys;