import React, { useEffect, useState } from "react";
import banner from "../../images/banners/recruitmentSolution.png";
import meet_image from "../../images/images/meet_image.png";
import listingImg2 from "../../images/images/listingImg2.png";
import globalSurveyImg from "../../images/images/globalSurveyImg.png";
import globalQunatativeSurveyImg from "../../images/images/globalQunatativeSurveyImg.png";
import endToEndSurveyImg from "../../images/images/endToEndSurveyImg.png";
import onlineSurveyImg from "../../images/images/onlineSurveyImg.png";
import Cards from "../../cards/Cards.js";
import SlidingShow from "../../slidings/SlidingShow.js";
import "./recruitmentservices.css";
import Listing from "../../listing/Listing.js";

const RecruitmentServices=()=>{


    const cardsHeadings = [{
        heading1: "Recruitment solution services made ",
        heading2: "smarter, faster, and easier",
    }]

    const cardsContent = [{
        cardHeading: "Ideal Research Spaces",
        cardText: "The platform should be intuitive and easy to navigate. Users should be able to create surveys without difficulty, customize them as desired, and distribute them with just a few clicks. The interface should also be appealing and well-organized, making the process of survey creation and analysis enjoyable and efficient.",
    }, {
        cardHeading: "Flexible Environments",
        cardText: "An effective DIY survey platform should provide a range of customization options to ensure the survey meets the specific needs of the user. This could include a variety of question types (multiple choice, rating scale, open-ended), options for branding and design elements, and flexibility in distribution methods (email, social media, website embed)."
    }, {
        cardHeading: "A Consultative Approach",
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
    return(
        <div className="recruitment_services_body">
            <img src={banner} alt="banner" />
            <Cards cardsHeadings={cardsHeadings} cardsContent={cardsContent} />
            <div className="recruitment_services_level_two">
                <div className="recruitment_services_level_two_below">
                    <div className="recruitment_services_level_two_below_heading">
                        <h2>The only survey platform you’ll ever</h2>
                        <h2>need sample</h2>
                        <p>mus cras dignissim et lacinia sit maecenas. Amet egestas viverra sit vestibulum risus eget velit ut elementum. Nisl molestie facilisis non vivamus.</p>
                    </div>
                    <img src={meet_image} alt="meet_image" />
                    <div className="recruitment_services_level_two_below_sec">
                        <section>
                            <h2>Tune in to every word, on every channel</h2>
                            <p>mus cras dignissim et lacinia sit maecenas. Amet egestas viverra sit vestibulum risus eget velit ut elementum. Nisl molestie facilisis non vivamus. Urna eget bibendum feugiat congue sed. Consectetur at a enim dictum tempus. Aliquet eget lorem duis scelerisque ipsum mauris augue et.</p>
                        </section>
                        <section>
                            <h2>Every cras digni ssim et lacinia site maecenas.</h2>
                            <p>mus cras dignissim et lacinia sit maecenas. Amet egestas viverra sit vestibulum risus eget velit ut elementum. Nisl molestie facilisis non vivamus. Urna eget bibendum feugiat congue sed. Consectetur at a enim dictum tempus. Aliquet eget lorem duis scelerisque ipsum mauris augue et.</p>
                        </section>
                    </div>
                </div>
            </div>
            <Listing content={content} image={listingImg2} />
            <SlidingShow slidingHeading={slidingHeading} slidingSurveys={slidingSurveys}/>
        </div>
    )
}
export default RecruitmentServices;