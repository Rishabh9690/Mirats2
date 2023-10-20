import React, { useEffect, useState } from "react";
import banner from "./images/Banner.svg";
import meet_image from "./images/meet_image.svg";
import hand_clock from "../../services/service_img/hand_clock.svg";
import star_chat from "../../services/service_img/star_chat.svg";
import setting from "../../services/service_img/setting.svg";
import right from "../../services/service_img/right.svg";
import image_list_sec from "./images/image_list_sec.svg";
import telephonic from "../images/telephonic.svg";
import globalqual from "../images/globalqual.svg";
import inpersonal from "../images/inpersonal.svg";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "./recruitmentservices.css";

const RecruitmentServices=()=>{

    const [cardIcons, setCardIcons]= useState([]);
    const [cards, setCards] = useState([]);
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
            image: telephonic,
            heading: "Consulting Solutions"
        },{
            image: globalqual,
            heading: "hybrid Research Solution"
        },{
            image: inpersonal,
            heading: "Product test Solution"
        }])
    },[])

    const responsive = {
        20: { items: 1 },
        88: { items: 2 },
        204: { items: 3 },
        454: { items: 4 },
    };

    const listItems = [
        <div className="item" data-value="1" id={0}>
            <p>Innovative Data Collection Technologies</p>
        </div>,
        <div className="item" data-value="2" id={1}>
            <p>Advance Sampling Technologies</p>
        </div>,
        <div className="item" data-value="3" id={2}>
            <p>Customised Survey Design</p>
        </div>,
        <div className="item" data-value="4" id={3}>
            <p>Comprehensive Data Analysis</p>
        </div>,
        <div className="item" data-value="5" id={4}>
            <p>Innovative Advance Customised Comprehensive</p>
        </div>,
    ];

    const survey_redirect= (e)=>{
        e.preventDefault();
        const id= e.currentTarget.id;
        // console.log("here is the id", e.currentTarget.id);
        if(Number(id)===0)
        {
            window.location.replace("/services/consultingservice");
        }
        if(Number(id)===1)
        {
            window.location.replace("/services/hybridresearchservice");
        }
        if(Number(id)===2)
        {
            window.location.replace("/services/producttestservice");
        }
    }

    return(
        <div className="recruitment_services_body">
            <img src={banner} alt="banner" />
            <div className="recruitment_services_level_two">
                <div className="recruitment_services_level_two_heading">
                    <h2>Recruitment solution services made </h2>
                    <h2>smarter, faster, and easier</h2>
                </div>
                <div className="recruitment_services__level_two_heading_card_parent">
                    {cards.map((card, index)=>{
                        let i= index<= cardIcons.length-1 ? index: index%cardIcons.length;
                        return(
                            <div className="recruitment_services__level_two_heading_card_child" key={index} id={'`${index}`'}>
                                <img src={cardIcons[i]} alt="cardIcons" />
                                <h2>{card.heading}</h2>
                                <p>{card.text}</p>
                            </div>
                        )
                    })}
                </div>
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
            <div className="recruitment_services_level_three">
                <div className="recruitment_services_level_three_heading">
                    <h2>Our recruitment solution</h2>
                    <h2>made approaches</h2>
                </div>
                <div className="recruitment_services_level_three_unordered_list">
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
                </div>
                <div className="recruitment_services_level_three_sec">
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
            <div className="recruitment_services_level_four">
                <p>Upcoming Surveys</p>
                <div className="recruitment_services_level_four_heading">
                    <h2>Your favourite upcoming</h2>
                    <h2>Quanlitative Solution</h2>
                </div>
                <div className="recruitment_services_level_four_surveys_parent">
                    {qualSurvey.map((element, index)=>{
                        return(
                            <div className="recruitment_services_level_four_surveys_child" key={index} id={`${index}`} onClick={survey_redirect}>
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
export default RecruitmentServices;