import React from "react";
import banner from "../../images/banners/consultingSoultion.png";
import customerMeet from "../../images/images/customerMeet.png";
import whiteCall from "../../images/images/whiteCall.png";
import niggaImage from "../../images/images/niggaImage.png";
import virtualTrip from "../../images/images/virtualtrip.png";
import Cards from "../../cards/Cards.js";
import listingImg2 from "../../images/images/listingImg2.png";
import SlidingShow from "../../slidings/SlidingShow.js";
import 'react-alice-carousel/lib/alice-carousel.css';
import Listing from "../../listing/Listing.js";
import globalSurveyImg from "../../images/images/globalSurveyImg.png";
import globalQunatativeSurveyImg from "../../images/images/globalQunatativeSurveyImg.png";
import endToEndSurveyImg from "../../images/images/endToEndSurveyImg.png";
import onlineSurveyImg from "../../images/images/onlineSurveyImg.png";
import "./consultingservices.css";

const ConsultingSerives = () => {

    const gridCards = [{
        image: customerMeet,
        heading: `Customer Understanding`,
        text: `Lorem ipsum dolor sit amet consectetur. Eget eros habitant et scelerisque. Condimentum dictum pellentesque vitae pharetra morbi risus. Ut aliquam in id arcu interdum nulla dipiscing enim adipiscing massa sagittis`
    }, {
        image: niggaImage,
        heading: `Brand Perception`,
        text: `Ut aliquam in id arcu interdum nulla. Eget eros habitant et scelerisque. Condimentum dictum pellentesque vitae pharetra morbi risus. . Adipiscing enim adipiscing massa sagittis pellentesque egestas`
    }, {
        image: whiteCall,
        heading: `Communication`,
        text: `Condimentum dictum pellentesque vitae pharetra morbi risus.Eget eros habitant et scelerisque. Condimentum dictum pellentesque vitae pharetra morbi risus. Ut aliquam in id arcu interdum nulla.  massa sagittis Pulvinar elit non `
    }, {
        image: virtualTrip,
        heading: `Innovation`,
        text: `habitant et scelerisque. Condimentum dictum pellentesque vitae pharetra morbi risus. Ut aliquam in id arcu interdum nulla. Adipiscing enim adipiscing massa sagittis pellentesque egestas Pulvinar elit non `
    }];
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


    return (
        <div className="consulting_services_body">
            <img src={banner} alt="banner" />
            <Cards cardsHeadings={cardsHeadings} cardsContent={cardsContent} />
            <div className="consulting_services_level_three">
                <div className="consulting_services_level_three_heading">
                    <h2>To know what people think, you must <span>first understand how they think</span> </h2>
                </div>
                <div className="consulting_services_level_three_gridcards_parent">
                    {gridCards.map((card, index) => {
                        return (
                            <div className="consulting_services_level_three_gridcards_child" key={index} id={'`${index}`'}>
                                <h2>{card.heading}</h2>
                                <p>{card.text}</p>
                                <img src={card.image} alt={`iamge${index}`} />
                            </div>
                        )
                    })}
                </div>
            </div>
            <Listing content={content} image={listingImg2} />
            <SlidingShow slidingHeading={slidingHeading} slidingSurveys={slidingSurveys}/>
        </div>
    )
}

export default ConsultingSerives;