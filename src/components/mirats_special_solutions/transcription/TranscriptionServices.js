import React, { useEffect, useState } from "react";
import banner from "../../images/banners/transcription.png";
import remove from "../../images/images/Remove.png";
import image1 from "../../images/images/image1.png";
import image2 from "../../images/images/image2.png";
import listingImg2 from "../../images/images/listingImg2.png";
import Modal from "react-modal";
import Cards from "../../cards/Cards.js";
import Listing from "../../listing/Listing.js";
import SlidingShow from "../../slidings/SlidingShow.js";
import globalSurveyImg from "../../images/images/globalSurveyImg.png";
import globalQunatativeSurveyImg from "../../images/images/globalQunatativeSurveyImg.png";
import endToEndSurveyImg from "../../images/images/endToEndSurveyImg.png";
import onlineSurveyImg from "../../images/images/onlineSurveyImg.png";
import "./transcriptionServices.css";
const TranscriptionServices=()=>{
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalData, setModalData] = useState({});

    const cardsHeadings = [{
        heading1: "Your one-stop shop for ",
        heading2: "product test insight communities",
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
    const modalArr= [{
        image: image1,
        heading: "Virtual Focus Groups",
        text: `Lorem ipsum dolor sit amet consectetur. Cursus viverra augue est nisl. Gravida sem malesuada egestas justo. Integer mattis eget lorem feugiat. Fringilla enim interdum egestas iaculis sit neque duis nulla viverra. Massa felis vestibulum nunc nulla fringilla eleifend erat. Sed quis laoreet amet arcu. Accumsan metus in egestas eu ornare odio tincidunt in donec. Elit tristique mi dui pretium vel amet interdum massa morbi. Enim cursus neque interdum iaculis pellentesque facilisis vestibulum. Nibh adipiscing aliquam consequat volutpat augue augue. Tellus quis velit ut tortor semper augue proin. Cursus dolor blandit imperdiet cras lacus volutpat. Senectus gravida elementum porttitor ut.
        Amet purus eget integer praesent ipsum. Aliquam volutpat sit ultrices neque. Pharetra non tellus sit magna amet at egestas. Congue volutpat commodo dui maecenas quis aliquam mauris nibh eu. Sit congue nibh convallis nibh metus purus augue. Venenatis sapien aliquam vehicula mattis egestas ipsum eu. Mattis tempus aliquam tempor tempor dictum cum. Tellus morbi nec aliquam fringilla vel. Aliquet ipsum aliquam quam neque. Tristique imperdiet adipiscing ut turpis. Eu quis diam fermentum tellus nunc morbi mollis consequat. Tincidunt nibh ac eget eu. Turpis eleifend placerat metus tincidunt dignissim habitant tincidunt. Viverra risus justo senectus risus amet. In sit ut posuere lorem. 
        Sit vitae non rhoncus eget massa. Elementum nec sit risus et lobortis. Duis nec purus non netus enim gravida dignissim metus. Eget sed blandit a dignissim diam pulvinar id nulla. Ornare in sit enim cursus non vitae condimentum habitasse. Lorem amet mi sed libero. Ut sit sed semper suspendisse. Est senectus amet non felis gravida leo sapien mattis. A cum mattis mi netus maecenas amet. Parturient orci donec suscipit nec adipiscing nec. Sed nibh adipiscing tincidunt pharetra aliquet amet. Fermentum libero adipiscing id malesuada massa platea.
        Nulla pellentesque viverra mi risus. Quisque urna tortor nisi facilisi maecenas. Tellus tincidunt at accumsan id sed bibendum ut mauris. Vitae sit cum turpis fringilla eu ullamcorper. Etiam sagittis amet vestibulum risus fermentum a a sollicitudin nulla. Vitae volutpat pellentesque sed vel pharetra eleifend nulla. Suspendisse id venenatis elit quam viverra faucibus ullamcorper metus. Risus purus aliquet cum placerat posuere fringilla lorem consequat quisque. Enim consectetur sed volutpat lacus cursus. Nec urna ipsum orci eu dui. Gravida montes proin tincidunt sed integer. Lorem gravida habitasse eu elementum venenatis placerat bibendum dignissim et.`
    },{
        image: image2,
        heading: "Online In-Depth Interviews",
        text: `Lorem ipsum dolor sit amet consectetur. Cursus viverra augue est nisl. Gravida sem malesuada egestas justo. Integer mattis eget lorem feugiat. Fringilla enim interdum egestas iaculis sit neque duis nulla viverra. Massa felis vestibulum nunc nulla fringilla eleifend erat. Sed quis laoreet amet arcu. Accumsan metus in egestas eu ornare odio tincidunt in donec. Elit tristique mi dui pretium vel amet interdum massa morbi. Enim cursus neque interdum iaculis pellentesque facilisis vestibulum. Nibh adipiscing aliquam consequat volutpat augue augue. Tellus quis velit ut tortor semper augue proin. Cursus dolor blandit imperdiet cras lacus volutpat. Senectus gravida elementum porttitor ut.
        Amet purus eget integer praesent ipsum. Aliquam volutpat sit ultrices neque. Pharetra non tellus sit magna amet at egestas. Congue volutpat commodo dui maecenas quis aliquam mauris nibh eu. Sit congue nibh convallis nibh metus purus augue. Venenatis sapien aliquam vehicula mattis egestas ipsum eu. Mattis tempus aliquam tempor tempor dictum cum. Tellus morbi nec aliquam fringilla vel. Aliquet ipsum aliquam quam neque. Tristique imperdiet adipiscing ut turpis. Eu quis diam fermentum tellus nunc morbi mollis consequat. Tincidunt nibh ac eget eu. Turpis eleifend placerat metus tincidunt dignissim habitant tincidunt. Viverra risus justo senectus risus amet. In sit ut posuere lorem. 
        Sit vitae non rhoncus eget massa. Elementum nec sit risus et lobortis. Duis nec purus non netus enim gravida dignissim metus. Eget sed blandit a dignissim diam pulvinar id nulla. Ornare in sit enim cursus non vitae condimentum habitasse. Lorem amet mi sed libero. Ut sit sed semper suspendisse. Est senectus amet non felis gravida leo sapien mattis. A cum mattis mi netus maecenas amet. Parturient orci donec suscipit nec adipiscing nec. Sed nibh adipiscing tincidunt pharetra aliquet amet. Fermentum libero adipiscing id malesuada massa platea.
        Nulla pellentesque viverra mi risus. Quisque urna tortor nisi facilisi maecenas. Tellus tincidunt at accumsan id sed bibendum ut mauris. Vitae sit cum turpis fringilla eu ullamcorper. Etiam sagittis amet vestibulum risus fermentum a a sollicitudin nulla. Vitae volutpat pellentesque sed vel pharetra eleifend nulla. Suspendisse id venenatis elit quam viverra faucibus ullamcorper metus. Risus purus aliquet cum placerat posuere fringilla lorem consequat quisque. Enim consectetur sed volutpat lacus cursus. Nec urna ipsum orci eu dui. Gravida montes proin tincidunt sed integer. Lorem gravida habitasse eu elementum venenatis placerat bibendum dignissim et.`
    }];
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


    const handleModalOpen=()=>{
        console.log("Inside the handleModalOpen");
        setModalIsOpen(true);
    }
    const handleModalClose=()=>{
        console.log("Inside the handleModalClose");
        setModalIsOpen(false);
        // onRequestClose
    }

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

    const useModal=(e)=>{
        e.preventDefault();
        const index= e.currentTarget.id;
        console.log("Here is the code==========>", index)
        if(index==0)
        {
            setModalData({
                image: modalArr[index].image,
                heading: modalArr[index].heading,
                text:  modalArr[index].text,
            })
        }
        if(index==1)
        {
            setModalData({
                image: modalArr[index].image,
                heading: modalArr[index].heading,
                text:  modalArr[index].text,
            })
        }
        handleModalOpen();
    }
    return(
        <div className="transcription_services_body">
            <img src={banner} alt="banner" />
            <Cards cardsHeadings={cardsHeadings} cardsContent={cardsContent} />
            <div className="transcription_services_level_three">
                <h2 className="transcription_services_level_three_heading">Your one-stop for <span>product test insights communities</span></h2>
                <div className="transcription_services_level_three_sec">
                    <section>
                        <img src={image1} alt="image1" id={0} onClick={ useModal }/>
                        <p>Connect with Your Audience</p>
                    </section>
                    <section>
                        <img src={image2} alt="image2" id={1} onClick={ useModal }/>
                        <p>Leverage Our Expertise</p>
                    </section>
                    <Modal isOpen={modalIsOpen}> 
                        <div className="trnscription_modal_body">
                            <img src={modalData.image} alt="image" />
                            <img src={remove} alt="remove" onClick={handleModalClose}/>
                            <div className="trnscription_modal_body_paragraph">
                                <h2>{modalData.heading}</h2>
                                <p>{modalData.text}</p>
                            </div>
                        </div>
                    </Modal>
                </div>
            </div>
            <Listing content={content} image={listingImg2}/>
            <SlidingShow slidingHeading={slidingHeading} slidingSurveys={slidingSurveys}/>
        </div>
    )
}

export default TranscriptionServices;