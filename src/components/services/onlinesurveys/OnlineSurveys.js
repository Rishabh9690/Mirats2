import react, { useEffect, useState } from "react";
import banner from "../../images/banners/onlineSurveys.png";
import listingImg1 from "../../images/images/listingImg1.png";
import Cards from "../../cards/Cards.js";
import Listing from "../../listing/Listing.js";
import SlidingShow from "../../slidings/SlidingShow.js";
import QuestionAnswer from "../../questionAnswer/QuestionAnswer.js";
import globalSurveyImg from "../../images/images/globalSurveyImg.png";
import globalQunatativeSurveyImg from "../../images/images/globalQunatativeSurveyImg.png";
import endToEndSurveyImg from "../../images/images/endToEndSurveyImg.png";
import onlineSurveyImg from "../../images/images/onlineSurveyImg.png";
import diySurvey from "../../images/images/diySurvey.png";
import "./onlinesurveys.css";

const OnlineSurveys =()=>{

    const cardsHeadings=[{
        heading1: "Online survey made",
        heading2: "smarter, faster, and easier",
    }]

    const cardsContent=[{
        cardHeading:"Feasibility Consulting",  
        cardText: "At Mirats Insights, we understand the importance of making informed decisions, especially when it involves market research. Our Feasibility Consulting service provides you with comprehensive analyses of your potential market, determining the viability and potential success of your projects or products. Our team of experts uses innovative tools and methodologies to assess the feasibility of your market research projects, helping you reduce risk and make strategic decisions.", 
    },{
        cardHeading:"Sampling",
        cardText: "Our Sampling service ensures that your survey results accurately reflect the opinions of your target audience. We have the expertise to design and implement effective sampling strategies for both online and offline surveys. Our samples are rigorously designed and carefully selected to minimize biases and ensure a diverse and representative respondent pool."
    },{
        cardHeading: "Programming & Hosting",
        cardText: "At Mirats Insights, we provide end-to-end services, including Programming & Hosting. We understand the nuances of online surveys and use the latest technology to create engaging and interactive surveys. Our platform ensures secure data collection, seamless respondent experience, and high-quality results. We handle everything from survey design and programming to hosting, offering you a hassle-free experience."
    },{
        cardHeading: "Topline Reporting & Analysis",
        cardText: "Our Topline Reporting & Analysis service presents an overview of your survey data in an easily digestible format. Our team of analysts provides a high-level summary of the key findings, offering insights that can drive your business strategy. We turn data into actionable insights, helping you understand the bigger picture and make informed decisions."
    },{
        cardHeading: "Data Processing & Delivery",
        cardText: "At Mirats Insights, we take care of all aspects of Data Processing & Delivery. Our experts clean, code, and analyze your data, delivering results that are accurate and reliable. Our rigorous quality checks and validation processes ensure the integrity of the data we provide. We deliver your data in a format that suits your requirements, offering you insights that can guide your business strategies."
    }]

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
        text: "Online Surveys"
    },{
        image: diySurvey,
        text: "DIY Surveys"
    }];

    const quesAnsHeadings=["Benefits of", " online survey"];
    const quesAndData=[{
        ques: "What are the benefits of reputation management software?",
        ans:  "In the digital era we live in, the internet has completely reshaped the way businesses interact with their customers. Customers are increasingly turning to online reviews and social media to voice their opinions and make purchasing decisions. As such, the reputation of a business online has never been more important, and this is where reputation management software comes into play..",
    },{
        ques: "Eliminates manual data collection",
        ans: "In the dynamic business landscape, using reputation management software offers several key advantages. One of the most significant is the elimination of manual data collection. The software automates the process of gathering reviews, comments, and feedback from various online platforms, freeing up valuable time and resources that can be better utilized elsewhere.",
    },{
        ques: "Get real-time insights?",
        ans: "Another benefit is the ability to gain real-time insights. The software provides an ongoing, live snapshot of your company's online reputation, enabling you to react quickly to any changes or trends. This means you can address negative feedback promptly or capitalize on positive comments without delay.",
    },{
        ques: "You can reach more people, faster and easier?",
        ans:  "Reputation management software enables you to reach a broader audience more rapidly and easily. With the software's ability to monitor multiple platforms simultaneously, you can engage with a larger number of people. It also simplifies the process of responding to reviews and comments, making it quicker and easier to maintain a positive online presence and build strong relationships with your customers."
    }]
    
    return (
        <div className="main_body">
            <div className="level_one">
                <img src={banner} alt="bannerImg" />
            </div>
            <Cards cardsHeadings={cardsHeadings} cardsContent={cardsContent} />
            <div className="level_four">
                <h1>Expertise to <span>support your success</span></h1>
                <div className="level_four_sides">
                    <div className="left_side">
                            <h1>Tune in to every word, on every channel</h1>
                            <p>In this digitally connected world, every voice matters, and every channel counts. At Mirats Insights, we tune into every word on every channel. Our advanced data collection methods and analytical tools capture insights from various sources, giving you a holistic view of your target audience. With Mirats Insights, you gain a deeper understanding of your market, helping you stay ahead of the competition.</p>
                    </div>
                    <div className="right_side">
                        <div className="column_one">
                            <h1>Hi there! I'm interested in conducting an online survey for my business. Can you tell me more about your online survey services?</h1>
                        </div>
                        <div className="column_two"></div>
                        <div className="column_three"></div>
                    </div>
                </div>
            </div>
            <Listing content={content} image={listingImg1} />
            <SlidingShow slidingHeading={slidingHeading} slidingSurveys={slidingSurveys}/>
            <QuestionAnswer quesAnsHeadings={quesAnsHeadings} quesAndData={quesAndData}/>
        </div>
    )
}

export default OnlineSurveys;