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
import endtoend from "../service_img/endtoend.svg";
import quantative from "../service_img/quantative.svg";
import Slider from "react-slick";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "./endtoendsurveys.css";

const EndToEndSurvey = () => {
    const [iconImage, setIconImage] = useState([]);
    const [cards, setCards] = useState([]);     
    const [active, setActive] = useState(false);

    useEffect(() => {
        setIconImage([hand_clock, star_chat, setting]);
        setCards([{
            heading: "Lorem ipsum dolor sit im, amet",
            text: "mus cras dignissim et lacinia sit maecenas. Amet egestas viverra sit vestibulum risus eget velit ut elementum. Nisl molestie facilisis non vivamus. Urna eget bibendum feugiat congue sed. Consectetur at a enim dictum tempus. Aliquet eget lorem duis scelerisque ipsum mauris augue et. Faucibus quis venenatis ultricies dignissim tincidunt sit nulla. Consequat condimentum enim bibendum dictum. Faucibus quis venenatis "
        }, {
            heading: "dolor sit im, amet Lorem ipsum.",
            text: " in ornare feugiat sit tristique nibh. Neque sit ac lacinia eu. Neque consectetur enim placerat duis phasellus. Facilisis mauris nulla mi placerat. Magnis interdum nisl felis fames velit odio. Scelerisque commodo nulla vitae neque sit aliquam at commodo eu. Maecenas proin nulla mauris sit dui faucibus at vestibulum. Consequat pellentesque tincidunt neque cursus hac."
        }, {
            heading: "Psum dolor sit im, amet Lorem ",
            text: "proin nulla mauris sit dui faucibus at vestibulum. Consequat pellentesque tincidunt neque cursus hac. In vel neque blandit amet nunc urna duis. Consequat nulla feugiat lectus amet turpis sed. Proin iaculis feugiat massa risus amet nulla. Elementum mus cras dignissim et lacinia sit maecenas. Amet egestas viverra sit vestibulum risus eget velit ut elementum. Nisl molestie facilisis non vivamus."
        }])
    }, []);

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };

    const items = [
        <div className="item" data-value="1" onClick={()=>{
            window.location.replace("/services/onlinesurveys");
        }}>
            <img src={onlinesurvey} alt="online_surveuy" />
            <p>Online Surveys</p>
        </div>,
        <div className="item" data-value="2" onClick={()=>{
            window.location.replace("/services/diysurveys");
        }}>
            <img src={diy} alt="DIY" />
            <p>DIY Surveys</p>
        </div>,
        <div className="item" data-value="3" onClick={()=>{
            window.location.replace("/services/globalsurveys");
        }}>
            <img src={global} alt="global" />
            <p>Global Sample</p>
        </div>,
        <div className="item" data-value="4" onClick={()=>{
            window.location.replace("/services/endtoendsurveys");
        }}>
            <img src={endtoend} alt="endtoend" />
            <p>End to End Surveys</p>
        </div>,
        <div className="item" data-value="5" onClick={()=>{
            window.location.replace("/services/globalqunatitativesurveys");
        }}>
            <img src={quantative} alt="quantitative" />
            <p>Global Quantitative Sample</p>
        </div>,
    ];

    const sliding_list=()=>{
        const settings_list = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            nextArrow: <img src={list_right} />,
            prevArrow: <img src={list_left} />,
        };

        return (
            <>
                <ul className="endtoend_level_three_unordered_list" >
                    <Slider {...settings_list}>
                        <div className="endtoend_level_three_unordered_list_item">
                            <li>Innovative Data Collection Technologies</li>
                        </div>
                        <div className="endtoend_level_three_unordered_list_item">
                            <li>Advance Sampling Technologies</li>
                        </div>
                        <div className="endtoend_level_three_unordered_list_item">
                            <li>Customised Survey Design</li>
                        </div>
                        <div className="endtoend_level_three_unordered_list_item">
                            <li>Comprehensive Data Analysis</li>
                        </div>
                        <div className="endtoend_level_three_unordered_list_item">
                            <li>Actionable Reporting & Visualisation</li>
                        </div>
                    </Slider>
                </ul>
            </>
        )
    }

    return (
        <div className="endtoend_main_body">
            <img src={banner_endtoend} alt="banner_end_to_end" />
            <div className="endtoend_level_two">
                <div className="endtoend_level_two_heading">
                    <h2>Streamlining processes and</h2>
                    <h2>delivering excellence</h2>
                </div>
                <div className="endtoend_level_two_cards_parent">
                    {cards.map((element, index) => {
                        let i = index <= iconImage.length - 1 ? index : index % iconImage.length;
                        return (
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
                    {sliding_list()}
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
                <p className="endtoend_level_four_paragraph">Upcoming Surveys</p>
                <div className="endtoend_level_four_heading">
                    <h2>Your favourite upcoming</h2>
                    <h2>Quatitative Solution</h2>
                </div>
                <div className="endtoend_level_four_survey_parent">
                    <AliceCarousel
                        // autoPlay
                        autoPlayStrategy="none"
                        // autoPlayInterval={5000}
                        animationDuration={700}
                        animationType="fadeout"
                        infinite
                        touchTracking={false}
                        disableDotsControls
                        // disableButtonsControls
                        buttonsDisabled
                        // prevButton={<CustomPrevButton />}
                        // nextButton={<img src={right} alt="right_button"/>}
                        items={items}
                        responsive={responsive}
                        mouseTracking
                        controlsStrategy="alternate"
                    />
                </div>
            </div>
        </div>
    )
}

export default EndToEndSurvey;