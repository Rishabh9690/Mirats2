import React from "react";
import banner from "../../images/banners/hybrid.png";
import customerMeet from "../../images/images/customerMeet.png";
import curlyMess from "../../images/images/curlyMess.png";
import Cards from "../../cards/Cards.js";
import listingImg2 from "../../images/images/listingImg2.png";
import SlidingShow from "../../slidings/SlidingShow.js";
import QuestionAnswer from "../../questionAnswer/QuestionAnswer.js";
import Listing from "../../listing/Listing.js";
import 'react-alice-carousel/lib/alice-carousel.css';
import globalSurveyImg from "../../images/images/globalSurveyImg.png";
import globalQunatativeSurveyImg from "../../images/images/globalQunatativeSurveyImg.png";
import endToEndSurveyImg from "../../images/images/endToEndSurveyImg.png";
import onlineSurveyImg from "../../images/images/onlineSurveyImg.png";
import "./hybrid_research.css";
const HybriResearchServices =()=>{
   
    const cardsHeadings = [{
        heading1: "Hybrid research solution made ",
        heading2: "smarter, faster, and easier",
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
        <div className="hybrid_research_body">
            <img src={banner} alt="banner" />
            <Cards cardsHeadings={cardsHeadings} cardsContent={cardsContent} />
            <div className="hybrid_research_level_three">
                <div className="hybrid_research_level_three_heading">
                    <h2>Take a deep dive into your favourite </h2>
                    <h2>consulting solution topics</h2>
                </div>
                <div className="hybrid_research_level_three_sec">
                    <section>
                        <img src={customerMeet} alt="customerImg" />
                    </section>
                    <section>
                        <h2>Customer Understanding</h2>
                        <p>Lorem ipsum dolor sit amet consectetur. Eget eros habitant et scelerisque. Condimentum dictum pellentesque vitae pharetra morbi risus. Ut aliquam in id arcu interdum nulla. Adipiscing enim adipiscing massa sagittis pellentesque egestas. Pulvinar elit non </p>
                    </section>
                </div>
                <div className="hybrid_research_level_three_sec">
                    <section>
                        <h2>Brand Perception</h2>
                        <p>Adipiscing enim adipiscing massa sagittis pellentesque egestas. Pulvinar elit non donec sit orci at eu. Et sollicitudin mauris molestie blandit. Commodo varius sed donec auctor eleifend tristique vel. </p>
                    </section>
                    <section>
                        <img src={curlyMess} alt="customerImg" />
                    </section>
                </div>
            </div>
            <Listing content={content} image={listingImg2} />
            <SlidingShow slidingHeading={slidingHeading} slidingSurveys={slidingSurveys}/>
            <QuestionAnswer quesAnsHeadings={quesAnsHeadings} quesAndData={quesAndData}/>
        </div>
    )
}

export default HybriResearchServices;