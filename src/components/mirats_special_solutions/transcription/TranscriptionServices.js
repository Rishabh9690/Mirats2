import React, { useEffect, useState } from "react";
import banner from "./images/Banner.png";
import hand_clock from "../../services/service_img/hand_clock.svg";
import star_chat from "../../services/service_img/star_chat.svg";
import setting from "../../services/service_img/setting.svg";
import right from "../../services/service_img/right.svg";
import remove from "../../mirats_qual_services/in_personal/images/Remove.svg";
import image_list_sec from "../recruitment/images/image_list_sec.svg";
import telephonic from "../images/telephonic.svg";
import globalqual from "../images/globalqual.svg";
import inpersonal from "../images/inpersonal.svg";
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import Modal from "react-modal";
import "./transcriptionServices.css";
const TranscriptionServices=()=>{
    const [cardIcons, setCardIcons]= useState([]);
    const [cards, setCards] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalData, setModalData] = useState({});
    const [qualSurvey, setQualSurvey] = useState([]);

    useEffect(()=>{
        setCardIcons([hand_clock, star_chat, setting]);
        setCards([{
            heading: `Ideal Research Spaces`,
            text: `mus cras dignissim et lacinia sit maecenas. Amet egestas viverra sit vestibulum risus eget velit ut elementum. Nisl molestie facilisis non vivamus.
            Urna eget bibendum feugiat congue sed. Consectetur at a enim dictum tempus. Aliquet eget lorem duis scelerisque ipsum mauris augue et. Faucibus quis venenatis ultricies dignissim tincidunt sit nulla. Consequat condimentum enim bibendum dictum. Faucibus quis venenatis `,
        },{
            heading: `Flexible Environments`,
            text: ` in ornare feugiat sit tristique nibh. Neque sit ac lacinia eu. Neque consectetur enim placerat duis phasellus. Facilisis mauris nulla mi placerat. Magnis interdum nisl felis fames velit odio. Scelerisque commodo nulla vitae neque sit aliquam at commodo eu. Maecenas proin nulla mauris sit dui faucibus at vestibulum. Consequat pellentesque tincidunt neque cursus hac.`,
        },{
            heading: `A Consultative Approach`,
            text: `proin nulla mauris sit dui faucibus at vestibulum. Consequat pellentesque tincidunt neque cursus hac. In vel neque blandit amet nunc urna duis. Consequat nulla feugiat lectus amet turpis sed. Proin iaculis feugiat massa risus amet nulla. Elementum mus cras dignissim et lacinia sit maecenas. Amet egestas viverra sit vestibulum risus eget velit ut elementum. Nisl molestie facilisis non vivamus.`
        }]);
        setQualSurvey([{
            image: globalqual,
            heading: "Recruitment Service Solution"
        },{
            image: inpersonal,
            heading: "Consulting Service= Solution"
        },{
            image: telephonic,
            heading: "Hybrid Research Solutions"
        }])
    },[])

    // const responsive = {
    //     20: { items: 1 },
    //     88: { items: 2 },
    //     204: { items: 3 },
    //     454: { items: 4 },
    // };

    // const listItems = [
    //     <div className="item" data-value="1" id={0}>
    //         <p>Innovative Data Collection Technologies</p>
    //     </div>,
    //     <div className="item" data-value="2" id={1}>
    //         <p>Advance Sampling Technologies</p>
    //     </div>,
    //     <div className="item" data-value="3" id={2}>
    //         <p>Customised Survey Design</p>
    //     </div>,
    //     <div className="item" data-value="4" id={3}>
    //         <p>Comprehensive Data Analysis</p>
    //     </div>,
    //     <div className="item" data-value="5" id={4}>
    //         <p>Innovative Advance Customised Comprehensive</p>
    //     </div>,
    // ];

    const survey_redirect= (e)=>{
        e.preventDefault();
        const id= e.currentTarget.id;
        // console.log("here is the id", e.currentTarget.id);
        if(Number(id)===0)
        {
            window.location.replace("/services/recruitmentservice");
        }
        if(Number(id)===1)
        {
            window.location.replace("/services/consultingservice");
        }
        if(Number(id)===2)
        {
            window.location.replace("/services/hybridresearchservice");
        }
    }

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

    const handleModalOpen=()=>{
        console.log("Inside the handleModalOpen");
        setModalIsOpen(true);
    }
    const handleModalClose=()=>{
        console.log("Inside the handleModalClose");
        setModalIsOpen(false);
        // onRequestClose
    }

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
            <div className="transcription_services_level_two">
                <div className="transcription_services_level_two_heading">
                    <h2>Product test made </h2>
                    <h2>smarter, faster, and easier</h2>
                </div>
                <div className="transcription_services_level_two_heading_card_parent">
                    {cards.map((card, index)=>{
                        let i= index<= cardIcons.length-1 ? index: index%cardIcons.length;
                        return(
                            <div className="transcription_services_level_two_heading_card_child" key={index} id={'`${index}`'}>
                                <img src={cardIcons[i]} alt="cardIcons" />
                                <h2>{card.heading}</h2>
                                <p>{card.text}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
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
            <div className="transcription_services_level_four">
                <div className="transcription_services_level_four_heading">
                    <h2>Our recruitment solution</h2>
                    <h2>made approaches</h2>
                </div>
                {/* <div className="consulting_services_level_four_unordered_list">
                    <AliceCarousel
                        autoPlayStrategy="none"
                        animationDuration={500}
                        animationType="fadeout"
                        // infinite
                        touchTracking={false}
                        disableDotsControls
                        buttonsDisabled
                        nextButton={<img src={right} alt="right_button"/>}
                        items={listItems}
                        responsive={responsive}
                        mouseTracking
                        controlsStrategy="alternate"
                    />
                </div> */}
                <div className="transcription_services_level_four_sec">
                    <section>
                        <img src={image_list_sec} alt="image_list_sec" />
                    </section>
                    <section>
                        <div>
                            <h2>User-Friendly<span> Survey Creation Tools</span></h2>
                            <p>Feugiat egestas ut laoreet dolor lacinia eget nisi cursus. Maecenas elementum commodo tortor purus. Turpis sapien laoreet pharetra egestas morbi condimentum hendrerit neque. Auctor tincidunt elementum eleifend adipiscing purus. Cras nunc a tempor neque elit molestie malesuada diam morbi. Consequat aenean mi lacinia interdum eros ipsum dignissim amet pulvinar. Id ullamcorper at nisi venenatis urna nunc purus mi faucibus. Vitae aliquam pulvinar amet nulla rhoncus magna.</p>
                        </div>
                        <div>
                            <h3>Benefits of using Mirats Insights -</h3>
                            <ul>
                                <li>Lorem ipsum dolor sit amet consectetur Gravida malesua egestas a egestas.</li>
                                <li>Quis justo quisque purus at et Lorem  purus. </li>
                                <li>Massa eget elementum nunc semper. Eu laoreet mattis nec ullamcorper nunc Semper sed .</li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
            <div className="transcription_services_level_five">
                <p>Upcoming Surveys</p>
                <div className="transcription_services_level_five_heading">
                    <h2>Your favourite upcoming</h2>
                    <h2>Quanlitative Solution</h2>
                </div>
                <div className="transcription_services_level_five_surveys_parent">
                    {qualSurvey.map((element, index)=>{
                        return(
                            <div className="transcription_services_level_five_surveys_child" key={index} id={`${index}`} onClick={survey_redirect}>
                                <img src={element.image} alt="element_image" />
                                <h2>{element.heading}</h2>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default TranscriptionServices;