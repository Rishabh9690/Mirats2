import React, { useEffect, useState } from "react";
import banner_endtoend from "../service_img/banner_endtoend.svg";
import hand_clock from "../service_img/hand_clock.svg";
import star_chat from "../service_img/star_chat.svg";
import setting from "../service_img/setting.svg";
import endtoend_img1 from "../service_img/endtoend_img1.svg";
import list_right from "../service_img/list_right.svg";
import list_left from "../service_img/list_left.svg";
import img2_diy from "../service_img/img2_diy.svg";
import onlinesurvey from "../service_img/onlinesurvey.svg";
import diy from "../service_img/diy.svg";
import global from "../service_img/global.svg";
import left from "../service_img/left.svg";
import right from "../service_img/right.svg";
import "./endtoendsurveys.css";

import Slider from "react-slick";

const EndToEndSurvey=()=>{
    const [iconImage, setIconImage]= useState([]);
    const [cards, setCards] = useState([]);
    const [slidingSurvey, setSlidingSurvey] = useState([]);

    useEffect(()=>{
        setIconImage([hand_clock, star_chat, setting]);
        setCards([{
            heading: "Lorem ipsum dolor sit im, amet",
            text: "mus cras dignissim et lacinia sit maecenas. Amet egestas viverra sit vestibulum risus eget velit ut elementum. Nisl molestie facilisis non vivamus. Urna eget bibendum feugiat congue sed. Consectetur at a enim dictum tempus. Aliquet eget lorem duis scelerisque ipsum mauris augue et. Faucibus quis venenatis ultricies dignissim tincidunt sit nulla. Consequat condimentum enim bibendum dictum. Faucibus quis venenatis "
        }, {
            heading: "dolor sit im, amet Lorem ipsum.", 
            text: " in ornare feugiat sit tristique nibh. Neque sit ac lacinia eu. Neque consectetur enim placerat duis phasellus. Facilisis mauris nulla mi placerat. Magnis interdum nisl felis fames velit odio. Scelerisque commodo nulla vitae neque sit aliquam at commodo eu. Maecenas proin nulla mauris sit dui faucibus at vestibulum. Consequat pellentesque tincidunt neque cursus hac."
        },{
            heading: "Psum dolor sit im, amet Lorem ",
            text: "proin nulla mauris sit dui faucibus at vestibulum. Consequat pellentesque tincidunt neque cursus hac. In vel neque blandit amet nunc urna duis. Consequat nulla feugiat lectus amet turpis sed. Proin iaculis feugiat massa risus amet nulla. Elementum mus cras dignissim et lacinia sit maecenas. Amet egestas viverra sit vestibulum risus eget velit ut elementum. Nisl molestie facilisis non vivamus."
        }])
        setSlidingSurvey([{
            image: onlinesurvey, 
            text: "Online Surveys"
        },{
            image: diy,
            text: "DIY Surveys"
        },{
            image: global,
            text: "Global Sample"
        }])
    }, []);

    const list_controll =()=>{
        console.log("clicked")
    }

    const reDirectToSurveys=(e)=>{
        e.preventDefault();
        console.log("Sliding image was clicked");
        console.log("Element title===>", e.currentTarget.id);
        if(Number(e.currentTarget.id)===0) window.location.replace('/services/endtoendsurveys');
        else if (Number(e.currentTarget.id)===1) window.location.replace('/services/onlinesurveys');
        else if (Number(e.currentTarget.id)===2) window.location.replace('/services/diysurveys');
    }

    const left_controll=()=>{
        console.log("Left button clicked")
    }
    const right_controll=()=>{
        console.log("Right button clicked")
    }


// const CustomNextArrow = (props) => {
//     const { onClick } = props;
//     return (
//       <div className="custom-next-arrow" onClick={onClick}>
//         <img src={list_left} alt="list_left"/>
//       </div>
//     );
//   };

    const settings_list = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <img src={list_right} />,
        prevArrow: <img src={list_left} />,
      };

    return(
        <div className="endtoend_main_body">
            <img src={banner_endtoend} alt="banner_end_to_end" />
            <div className="endtoend_level_two">
                <div className="endtoend_level_two_heading">
                    <h2>Streamlining processes and</h2>
                    <h2>delivering excellence</h2>
                </div>
                <div className="endtoend_level_two_cards_parent">
                    {cards.map((element, index)=>{
                        let i= index<= iconImage.length-1? index: index%iconImage.length;
                        return(
                            <div className="endtoend_level_two_cards_child">
                                <img src={iconImage[i]} alt="icon_image" />
                                <h2>{element.heading}</h2>
                                <p>{element.text}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="endtoend_level_two_img_and_info">
                    <img src={endtoend_img1} alt="endtoend_img1" />
                    <div className="endtoend_level_two_img_and_info_sec">
                        <section>
                            <p>Feugiat egestas ut laoreet dolor lacinia eget \</p>
                            <h2>User-friendly <span>survey creation tools</span></h2>
                        </section>
                        <section>
                            <p>Feugiat egestas ut laoreet dolor lacinia eget nisi cursus. Maecenas elementum commodo tortor purus. Turpis sapien laoreet pharetra egestas morbi condimentum hendrerit neque. Auctor tincidunt elementum eleifend adipiscing purus. Cras nunc a tempor neque elit molestie malesuada diam morbi. Consequat aenean mi lacinia interdum eros.</p>
                        </section>
                    </div>
                </div>
            </div>
            <div className="endtoend_level_three">
                <div className="endtoend_level_three_heading">
                    <h2>Our end to end sample service</h2>
                    <h2>made approaches</h2>
                </div>
                <div className="endtoend_level_three_list">
                    <ul className="endtoend_level_three_unordered_list">
                    <Slider {...settings_list}>
                        <div>
                            <li>Innovative Data Collection Technologies</li>
                        </div>
                        <div>
                            <li>Advance Sampling Technologies</li>
                        </div>
                        <div>
                            <li>Customised Survey Design</li>
                        </div>
                        <div>
                            <li>Comprehensive Data Analysis</li>
                        </div>
                        <div>
                            <li>Actionable Reporting & Visualisation</li>
                        </div>
                    </Slider>
                        {/* <img src={list_left} alt="list_left" onClick={list_controll}/> */}
                    </ul>
                </div>
                <div className="endtoend_level_three_section">
                    <section>
                        <img src={img2_diy} alt="endtoend_img2" />
                    </section>
                    <section className="endtoend_level_three_section_two">
                        <div className="endtoend_level_three_section_two_top">
                            <p>User-Friendly<span> Survey Creation Tools</span></p>
                            <p>Feugiat egestas ut laoreet dolor lacinia eget nisi cursus. Maecenas elementum commodo tortor purus. Turpis sapien laoreet pharetra egestas morbi condimentum hendrerit neque. Auctor tincidunt elementum eleifend adipiscing purus. Cras nunc a tempor neque elit molestie malesuada diam morbi. Consequat aenean mi lacinia interdum eros ipsum dignissim amet pulvinar. Id ullamcorper at nisi venenatis urna nunc purus mi faucibus. Vitae aliquam pulvinar amet nulla rhoncus magna.</p>
                        </div>
                        <div className="endtoend_level_three_section_two_bottom">
                            <p>Benefits of using Mirats Insights -</p>
                            <ul className="endtoend_level_three_section_two_bottom_list">
                                <li>Lorem ipsum dolor sit amet consectetur Gravida malesua egestas a egestas.</li>
                                <li>Quis justo quisque purus at et Lorem  purus.</li>
                                <li>Massa eget elementum nunc semper. Eu laoreet mattis nec ullamcorper nunc Semper sed .</li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
            <div className="endtoend_level_four">
                <p>Upcoming Surveys</p>
                <div className="endtoend_level_four_heading">
                    <h2>Your favourite upcoming</h2>
                    <h2>Quatitative Solution</h2>
                </div>
                <div className="endtoend_level_four_survey_slide">
                    <div className="endtoend_level_four_survey_slide_left_controll">
                        <img src={left} alt="left_image"  onClick={left_controll}/>
                    </div>
                    <div className="endtoend_level_four_survey_parent">
                        {slidingSurvey.map((element, index)=>{
                            return (
                                <div className="endtoend_level_four_survey_child" key={index} id={`${index}`} onClick={reDirectToSurveys}>
                                    <img src={element.image} alt="survey_image" />
                                    <p>{element.text}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className="endtoend_level_four_survey_slide_rightt_controll">
                        <img src={right} alt="right_image" onClick={right_controll} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EndToEndSurvey;