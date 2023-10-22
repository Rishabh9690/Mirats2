import React from "react";
import banner from "../../images/banners/endToend.png";
import endtoendImg from "../../images/images/endtoendImg.png";
import listingImg2 from "../../images/images/listingImg2.png";
import Cards from "../../cards/Cards.js";
import Listing from "../../listing/Listing.js";
import SlidingShow from "../../slidings/SlidingShow.js";
import globalSurveyImg from "../../images/images/globalSurveyImg.png";
import globalQunatativeSurveyImg from "../../images/images/globalQunatativeSurveyImg.png";
import endToEndSurveyImg from "../../images/images/endToEndSurveyImg.png";
import onlineSurveyImg from "../../images/images/onlineSurveyImg.png";
import "./endtoendsurveys.css";

const EndToEndSurvey = () => {
    const cardsHeadings = [{
        heading1: "Streamlining processes and ",
        heading2: "delivering excellence",
    }]

    const cardsContent = [{
        cardHeading: "Efficiency and Consistency",
        cardText: "Handling all aspects of the sample process from start to finish ensures efficiency and consistency. This approach eliminates the need for multiple vendors, reducing coordination efforts and potential errors or discrepancies. With a single provider, the entire process is smoother, quicker, and more reliable.",
    }, {
        cardHeading: "Customization and Flexibility",
        cardText: "End-to-end services offer the advantage of customization at each step of the process, from defining the target population to delivering the final data set. This ensures that every aspect of the service can be tailored to meet specific needs, enhancing the relevancy and utility of the findings.."
    }, {
        cardHeading: "Quality Control and Assurance",
        cardText: "By managing the entire sample process, an end-to-end provider can maintain strict quality control at each stage. This includes rigorous checks and balances to ensure the accuracy, validity, and reliability of the data. The result is high-quality output that businesses can trust for making informed decisions."
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
    const content = [{
        heading1: "Our end to end sample service ",
        heading2: "made approaches",
        lists: ["Innovative Data Collection Technologies", "Advance Sampling Technologies", "Customised Survey Design", "Comprehensive Data Analysis"],
        sectionHeading1: "Innovative ",
        sectionHeading2: "Data Collection Technologiess",
        sectionText: "Mirats Insights is a forerunner in implementing innovative data collection technologies in our online surveys. We harness the power of advanced technologies, from AI-enhanced analytics to real-time data gathering methods, to ensure we capture diverse and thorough insights for our clients. Our tech-driven approach to data collection equips us with versatility and efficiency, making our market research services stand out in the industry.",
        sectionListHeading: "Benefits of using Mirats Insights -",
        sectionListPoints: ["Data Reliability and Precision: Our advanced data collection technologies ensure the collection of high-quality, trustworthy data.", "Scalability: The innovative technologies we use allow for scalability, meaning we can handle projects of any size or complexity effectively."],
    }]

    return (
        <div className="endtoend_main_body">
            <img src={banner} alt="banner_end_to_end" />
            <Cards cardsHeadings={cardsHeadings} cardsContent={cardsContent} />
            <div className="endtoend_Level_three">
                <img src={endtoendImg} />
                <div className="endtoend_Level_three_sub_division">
                    <section>
                        <p>Feugiat egestas ut laoreet dolor lacinia eget </p>
                        <h2>User-friendly <span>survey creation tools</span></h2>
                    </section>
                    <section>
                        <p>Feugiat egestas ut laoreet dolor lacinia eget nisi cursus. Maecenas elementum commodo tortor purus. Turpis sapien laoreet pharetra egestas morbi condimentum hendrerit neque. Auctor tincidunt elementum eleifend adipiscing purus. Cras nunc a tempor neque elit molestie malesuada diam morbi. Consequat aenean mi lacinia interdum eros.</p>
                    </section>
                </div>
            </div>
            <Listing content={content} image={listingImg2}/>
            <SlidingShow slidingHeading={slidingHeading} slidingSurveys={slidingSurveys} />
        </div>
    )
}

export default EndToEndSurvey;