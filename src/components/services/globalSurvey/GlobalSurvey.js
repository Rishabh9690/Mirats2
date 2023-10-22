import React, { useEffect, useState } from "react";
import banner from "../../images/banners/globalSample.png";
import globalImg from "../../images/images/globalImg.png";
import listingImg2 from "../../images/images/listingImg2.png";
import Cards from "../../cards/Cards.js";
import Listing from "../../listing/Listing.js";
import globalSurveyImg from "../../images/images/globalSurveyImg.png";
import globalQunatativeSurveyImg from "../../images/images/globalQunatativeSurveyImg.png";
import endToEndSurveyImg from "../../images/images/endToEndSurveyImg.png";
import onlineSurveyImg from "../../images/images/onlineSurveyImg.png";
import SlidingShow from "../../slidings/SlidingShow.js";
import './globalsurvey.css';

const GlobalSurvey=()=>{

    const cardsHeadings=[{
        heading1: "The role of the global sample in ",
        heading2: "modern-day applications",
    }]

    const cardsContent=[{
        cardHeading:"Cross-Cultural Analysis",  
        cardText: "Global sampling allows for a comparison of data across different countries and cultures. This is especially important in today's globalized world where businesses operate in diverse markets. It enables companies to understand cultural differences, adapt their offerings accordingly, and effectively target their marketing efforts.", 
    },{
        cardHeading:"Generalizability of Findings",
        cardText: "By collecting data from a global sample, researchers can make their findings more generalizable. If a product, concept, or theory works in multiple geographical and cultural contexts, it's likely to be more universally applicable. This is particularly important in fields like psychology and sociology, where understanding universal human behaviors and traits is a key objective."
    },{
        cardHeading: "Understanding Global Trends",
        cardText: "Global sampling can provide insights into global trends and phenomena. For instance, in public health, global sampling is often used to track the spread of diseases or to understand health behaviors across different countries. In business, it can help identify global consumer trends or market opportunities."
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
        text: "online Surveys"
    }];
    return (
        <div className="global_main_body">
            <img src={banner} alt="banner_image" />
            <Cards cardsHeadings={cardsHeadings} cardsContent={cardsContent} />
            <div  className="global_level_three">
                <div className="global_level_three_heading">
                    <h1>The only survey platform you'll ever</h1>
                    <h1>need sample</h1>
                </div>
                <div className="global_level_three_content">
                    <section>
                        <h1>Experience the power of comprehensive insights with Mirats Insights</h1>
                        <p>Mirats Insights is a comprehensive survey platform that streamlines survey design, distribution, and analysis, while offering access to global respondents. Its intuitive, user-friendly platform and robust analysis tools allow swift comprehension and action on collected data. Mirats Insights goes beyond typical survey tools by providing actionable, global insights for your business growth.</p>
                    </section>
                    <section>
                        <ul className="global_unordered_list">
                            <li>Autonomy: Take charge of your research projects without being bound by third-party timelines or processes.</li>
                            <li>Cost Efficiency: By managing research in-house, significant savings can be made, ensuring better ROI.</li>
                            <li>Data Security: Mirats Insights upholds stringent data protection standards, ensuring that all your research data remains safe and confidential.</li>
                            <li>Continuous Updates: Benefit from regular platform updates, bringing in new features, templates, and tools to enhance your DIY research journey.</li>
                        </ul>
                    </section>
                </div>
            </div>
            <div className="global_level_four">
                <div className="global_level_four_left">
                        <h1>We're experts, so you</h1>
                        <h1>don't have to be</h1>
                        <p>Rely on the expertise of Mirats Insights, so you don't have to shoulder the burden of becoming a survey expert yourself. Our team consists of seasoned professionals skilled in crafting, distributing, and analyzing surveys, enabling you to focus on what you do best - managing your business. From our user-friendly platform to our sophisticated analytical tools, we take care of the complexities, providing you with clear, actionable insights. We navigate the intricacies of global sampling, ensuring you have access to a broad respondent base for a more comprehensive understanding of your market. With Mirats Insights, you're not just leveraging a survey platform - you're partnering with experts committed to your success.</p>
                </div>
                <div className="global_level_four_right">
                    <img src={globalImg} alt="globalImg1" />
                </div>
            </div>
            <Listing content={content} image={listingImg2} />
            <SlidingShow slidingHeading={slidingHeading} slidingSurveys={slidingSurveys}/>
        </div>
    )
}

export default GlobalSurvey;