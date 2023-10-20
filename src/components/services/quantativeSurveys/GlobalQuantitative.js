import React, { useEffect, useState } from "react";
import banner_quantitative from "../service_img/banner_quantitative.svg";
import hand_clock from "../service_img/hand_clock.svg";
import star_chat from "../service_img/star_chat.svg";
import setting from "../service_img/setting.svg";
import quantitative_img1 from "../service_img/quantitative_img1.svg";
import quantitative_img2 from "../service_img/quantitative_img2.svg";
import quantitative_img3 from "../service_img/quantitative_img3.svg";
// import list_left from "../service_img/list_left.svg";
import img2_diy from "../service_img/img2_diy.svg";
import endtoend from "../service_img/endtoend.svg";
import onlinesurvey from "../service_img/onlinesurvey.svg";
import quantative from "../service_img/quantative.svg";
import global from "../service_img/global.svg";
import diy from "../service_img/diy.svg";
import list_left from "../service_img/list_left.svg";
import list_right from "../service_img/list_right.svg";
import Slider from "react-slick";
import "./quantitativesurvey.css";

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const GlobalQunatitative= ()=>{

    const [iconImage, setIconImage] = useState([]);
    const [iconInfo, setIconInfo] = useState([]);
    const [suveysArr, setSurveysArr] = useState([]);
    useEffect(()=>{
        setIconImage([hand_clock, star_chat, setting]);
        setIconInfo([{
            heading: "Lorem ipsum dolor sit im, amet ",
            text: "mus cras dignissim et lacinia sit maecenas. Amet egestas viverra sit vestibulum risus eget velit ut elementum. Nisl molestie facilisis non vivamus. Urna eget bibendum feugiat congue sed. Consectetur at a enim dictum tempus. Aliquet eget lorem duis scelerisque ipsum mauris augue et. Faucibus quis venenatis ultricies dignissim tincidunt sit nulla. Consequat condimentum enim bibendum dictum. Faucibus quis venenatis "
        },{
            heading: "dolor sit im, amet Lorem ipsum.",
            text: " in ornare feugiat sit tristique nibh. Neque sit ac lacinia eu. Neque consectetur enim placerat duis phasellus. Facilisis mauris nulla mi placerat. Magnis interdum nisl felis fames velit odio. Scelerisque commodo nulla vitae neque sit aliquam at commodo eu. Maecenas proin nulla mauris sit dui faucibus at vestibulum. Consequat pellentesque tincidunt neque cursus hac."
        },{
            heading: "Psum dolor sit im, amet Lorem ",
            text: "proin nulla mauris sit dui faucibus at vestibulum. Consequat pellentesque tincidunt neque cursus hac. In vel neque blandit amet nunc urna duis. Consequat nulla feugiat lectus amet turpis sed. Proin iaculis feugiat massa risus amet nulla. Elementum mus cras dignissim et lacinia sit maecenas. Amet egestas viverra sit vestibulum risus eget velit ut elementum. Nisl molestie facilisis non vivamus."
        }])

        setSurveysArr([{
            image: endtoend, 
            text: "End to End Sample Surveys"
        },{
            image: onlinesurvey,
            text: "Online Surveys"
        },{
            image: diy,
            text: "DIY Surveys"
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

    // const lists= document.useRef()
    // console.log("lists", lists);

    const settings_list = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <img src={list_right} alt="right"/>,
        prevArrow: <img src={list_left} alt="left"/>,
    };


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
        <div className="qunatitative_body">
            <img src={banner_quantitative} alt="banner_image" />
            <div className="quant_level_two">
                <h1>Unlocking insights and empowering</h1>
                <h2>decision-making</h2>
                <div className="qunatitative_card_parent">
                    {
                        iconInfo.map((element, index)=>{
                            let i= index<=iconImage.length-1 ? index: index%iconImage.length;
                            return (
                                <div className="quantitative_icons" key={index} id={`${index}`}>
                                    <img src={iconImage[i]} alt="icon_image"/>
                                    <h1>{element.heading}</h1>
                                    <p>{element.text}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="quantitative_level_three">
                <section className="quantitative_level_three_sec_one">
                    <div className="quantitative_level_three_section_left_side">
                        <h2>Complete range of services</h2>
                    </div>
                    <div className="quantitative_level_three_sec_one_right_side_img">
                        <img src={quantitative_img1} alt="quantitative_img1" />
                        <p>Lorem ipsum dolor sit amet consectetur. Donec sodales et enim lorem quam tristique. Tellus erat metus ut amet quis in nec maecenas. Sit in cum elit eget neque lorem et est at. Proin semper pulvinar pellentesque sed penatibus mi aliquet vitae hac. Purus augue luctus pellentesque aliquet egestas convallis eget. Tellus tortor scelerisque nunc porttitor. Ut justo faucibus convallis ullamcorper mauris enim vitae vulputate pellentesque. Dictum lectus id tincidunt senectus. Pretium nibh massa sed lectus sit lacus donec dui.
                        Sed semper phasellus mattis urna sollicitudin malesuada vulputate pharetra. Id eu habitant eget suscipit. Praesent risus sit non sem eget. Ornare et rutrum sit sed suspendisse pellentesque. Nec auctor neque in gravida eget elementum urna.</p>
                    </div>
                </section>
                <section className="quantitative_level_three_sec_one">
                    <div className="quantitative_level_three_sec_two_right_side_img">
                        <img src={quantitative_img2} alt="quantittative_img2" />
                        <p>Lorem ipsum dolor sit amet consectetur. Donec sodales et enim lorem quam tristique. Tellus erat metus ut amet quis in nec maecenas. Sit in cum elit eget neque lorem et est at. Proin semper pulvinar pellentesque sed penatibus mi aliquet vitae hac. Purus augue luctus pellentesque aliquet egestas convallis eget. Tellus tortor scelerisque nunc porttitor. Ut justo faucibus convallis ullamcorper mauris enim vitae vulputate pellentesque. Dictum lectus id tincidunt senectus. Pretium nibh massa sed lectus sit lacus donec dui.
                        Sed semper phasellus mattis urna sollicitudin malesuada vulputate pharetra. Id eu habitant eget suscipit. Praesent risus sit non sem eget. Ornare et rutrum sit sed suspendisse pellentesque. Nec auctor neque in gravida eget elementum urna.</p>
                    </div>
                    <div className="quantitative_level_three_section_left_side">
                        <h2>Full solution integration</h2>
                    </div>
                </section>
                <section className="quantitative_level_three_sec_one">
                    <div className="quantitative_level_three_section_left_side">
                        <h2>Leading insights community platform</h2>
                    </div>
                    <div className="quantitative_level_three_sec_three_right_side_img">
                        <img src={quantitative_img3} alt="quantittative_img3" />
                        <p>Lorem ipsum dolor sit amet consectetur. Donec sodales et enim lorem quam tristique. Tellus erat metus ut amet quis in nec maecenas. Sit in cum elit eget neque lorem et est at. Proin semper pulvinar pellentesque sed penatibus mi aliquet vitae hac. Purus augue luctus pellentesque aliquet egestas convallis eget. Tellus tortor scelerisque nunc porttitor. Ut justo faucibus convallis ullamcorper mauris enim vitae vulputate pellentesque. Dictum lectus id tincidunt senectus. Pretium nibh massa sed lectus sit lacus donec dui.
                        Sed semper phasellus mattis urna sollicitudin malesuada vulputate pharetra. Id eu habitant eget suscipit. Praesent risus sit non sem eget. Ornare et rutrum sit sed suspendisse pellentesque. Nec auctor neque in gravida eget elementum urna.</p>
                    </div>
                </section>
            </div>
            <div className="quantitative_level_four">
                <div className="quantitative_level_four_heading">
                    <h2>Our global qunatitative fieldwork</h2>
                    <h2>made approaches</h2>
                </div>
                <div className="quantitative_level_four_list">
                    {sliding_list()}
                </div>
                <div className="quantitative_level_four_section">
                    <section>
                        <img src={img2_diy} alt="image_2" />
                    </section>
                    <section className="quantitative_level_four_section_two">
                        <div className="quantitative_level_four_section_two_top">
                            <p>User-Friendly<span> Survey Creation Tools</span></p>
                            <p>Feugiat egestas ut laoreet dolor lacinia eget nisi cursus. Maecenas elementum commodo tortor purus. Turpis sapien laoreet pharetra egestas morbi condimentum hendrerit neque. Auctor tincidunt elementum eleifend adipiscing purus. Cras nunc a tempor neque elit molestie malesuada diam morbi. Consequat aenean mi lacinia interdum eros ipsum dignissim amet pulvinar. Id ullamcorper at nisi venenatis urna nunc purus mi faucibus. Vitae aliquam pulvinar amet nulla rhoncus magna.</p>
                        </div>
                        <div className="quantitative_level_four_section_two_bottom">
                            <p>Benefits of using Mirats Insights -</p>
                            <ul className="quantitative_level_four_section_two_bottom_list">
                                <li>Lorem ipsum dolor sit amet consectetur Gravida malesua egestas a egestas.</li>
                                <li>Quis justo quisque purus at et Lorem  purus.</li>
                                <li>Massa eget elementum nunc semper. Eu laoreet mattis nec ullamcorper nunc Semper sed .</li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
            <div className="quantitative_level_five">
                    <p>Upcoming surveys</p>
                <div className="quantitative_level_five_heading">
                    <h2>Your favourite upcoming</h2>
                    <h2>quantitative solution</h2>
                </div>
                <div className="quantitative_level_five_surveys_parent">
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

export default GlobalQunatitative;