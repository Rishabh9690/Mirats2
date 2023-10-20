import React, { useEffect, useState } from "react";
import banner_diy from "../service_img/banner_diy.svg";
import hand_clock from "../service_img/hand_clock.svg";
import setting from "../service_img/setting.svg";
import star_chat from "../service_img/star_chat.svg";
import img2_diy from "../service_img/img2_diy.svg";
import global from "../service_img/global.svg";
import quantative from "../service_img/quantative.svg";
import endtoend from "../service_img/endtoend.svg";
import onlinesurvey from "../service_img/onlinesurvey.svg";
import diy from "../service_img/diy.svg";
import left from "../service_img/left.svg";
import right from "../service_img/right.svg";
import list_right from "../service_img/list_right.svg";
import list_left from "../service_img/list_left.svg";
import Slider from "react-slick";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "./diysurveys.css";

const DiySurveys=()=>{
    const [iconImage, setIconImage] = useState([]);
    const [cards, setCards] = useState([]);
    const [slidingSurvey, setSlidingSurvey] = useState([]);

    useEffect(()=>{
        setIconImage([hand_clock, star_chat, setting]);
        setSlidingSurvey([{
            Image: global,
            title: "Global Sample"
        },{
            Image: quantative,
            title: "Global Quantitative Fieldwork"
        },{
            Image: endtoend,
            title: "End to End Sample Surveys"
        }]);
        setCards([{
            heading: "Lorem ipsum dolor sit im, amet",
            text: "mus cras dignissim et lacinia sit maecenas. Amet egestas viverra sit vestibulum risus eget velit ut elementum. Nisl molestie facilisis non vivamus.Urna eget bibendum feugiat congue sed. Consectetur at a enim dictum tempus. Aliquet eget lorem duis scelerisque ipsum mauris augue et. Faucibus quis venenatis ultricies dignissim tincidunt sit nulla. Consequat condimentum enim bibendum dictum. Faucibus quis venenatis"
        },{
            heading: "dolor sit im, amet Lorem ipsum.",
            text: " in ornare feugiat sit tristique nibh. Neque sit ac lacinia eu. Neque consectetur enim placerat duis phasellus. Facilisis mauris nulla mi placerat. Magnis interdum nisl felis fames velit odio. Scelerisque commodo nulla vitae neque sit aliquam at commodo eu. Maecenas proin nulla mauris sit dui faucibus at vestibulum. Consequat pellentesque tincidunt neque cursus hac. Consequat condimentum enim bibendum dictum."
        },{
            heading: "Psum dolor sit im, amet Lorem ",
            text: "proin nulla mauris sit dui faucibus at vestibulum. Consequat pellentesque tincidunt neque cursus hac. In vel neque blandit amet nunc urna duis. Consequat nulla feugiat lectus amet turpis sed. Proin iaculis feugiat massa risus amet nulla. Elementum mus cras dignissim et lacinia sit maecenas. Amet egestas viverra sit vestibulum risus eget velit ut elementum. Nisl molestie facilisis non vivamus."
        }]);
    }, [])


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
    return(
        <div className="main_diy_body">
            <img src={banner_diy} alt="banner_img" />
            <div className="diy_two">
                <div className="diy_two_heading">
                    <h1>Essential characteristics of effective</h1>
                    <h1>DIY survey platforms</h1>
                </div>
                <div className="diy_cards">
                    <div className="card_parent">
                        {
                            cards.map((card, index)=>{
                                let i= index<= iconImage.length-1 ? index: index%iconImage.length;
                                return(
                                    <div className="cards" key={index} id='`${index}`' >
                                        <img src={iconImage[i]} alt="icon_image" />
                                        <h1>{card.heading}</h1>
                                        <p>{card.text}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="diy_three">
                <div className="diy_three_heading">
                    <p>Our DIY survey <span>made approaches</span></p>
                </div>
                <div className="diy_three_sliding_list_parent">
                {sliding_list()}
                </div>
                {/* <ol className="ordered_list">
                    <img src={list_left} alt="list_left" />
                    <li>Comprehensive Survey Distribution Option</li>
                    <li>Real Time Data Collection and Monitoring</li>
                    <li>Advance Data Analysis and Reporting Tools</li>
                    <li>Scalability and Integration</li>
                </ol> */}
                {/* </div> */}
                <div className="diy_four">
                    <section>
                        <img src={img2_diy} alt="image_2" />
                    </section>
                    <section className="text_diy_four">
                        <div className="text_heading_diy_four">
                            <p>User-Friendly<span> Survey Creation Tools</span></p>
                            <p>Feugiat egestas ut laoreet dolor lacinia eget nisi cursus. Maecenas elementum commodo tortor purus. Turpis sapien laoreet pharetra egestas morbi condimentum hendrerit neque. Auctor tincidunt elementum eleifend adipiscing purus. Cras nunc a tempor neque elit molestie malesuada diam morbi. Consequat aenean mi lacinia interdum eros ipsum dignissim amet pulvinar. Id ullamcorper at nisi venenatis urna nunc purus mi faucibus. Vitae aliquam pulvinar amet nulla rhoncus magna.</p>
                        </div>
                        <div className="listed_diy_four">
                            <p>Benefits of using Mirats Insights -</p>
                            <ul className="listed_unordered_list_diy">
                                <li>Lorem ipsum dolor sit amet consectetur Gravida malesua egestas a egestas.</li>
                                <li>Quis justo quisque purus at et Lorem  purus.</li>
                                <li>Massa eget elementum nunc semper. Eu laoreet mattis nec ullamcorper nunc Semper sed .</li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
            <div className="diy_five">
                <p>Upcoming Surveys</p>
                <h1>Your favourite upcoming </h1>
                <h2>quantitative solution </h2>
                <div className="diy_five_sliding_img">
                    <AliceCarousel
                        autoPlayStrategy="none"
                        animationDuration={700}
                        animationType="fadeout"
                        infinite
                        touchTracking={false}
                        disableDotsControls
                        buttonsDisabled
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

export default DiySurveys;