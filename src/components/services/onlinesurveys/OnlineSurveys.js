import react, { useEffect, useState } from "react";
import {Collapse} from 'react-collapse';
// import { useNavigate } from "react-router-dom";
import banner from "../service_img/Banner.svg";
import setting from "../service_img/setting.svg";
import star_chat from "../service_img/star_chat.svg";
import hand_clock from "../service_img/hand_clock.svg";
import online_surveys from "../service_img/online_surveys.svg";
import blue_boy from "../service_img/blue_boy.svg";
import diy from "../service_img/diy.svg";
import global from "../service_img/global.svg";
import quantative from "../service_img/quantative.svg";
import endtoend from "../service_img/endtoend.svg";
import onlinesurvey from "../service_img/onlinesurvey.svg";
import left from "../service_img/left.svg";
import right from "../service_img/right.svg";
import plus from "../service_img/plus.svg";
import cross from "../service_img/cross.svg";
import list_right from "../service_img/list_right.svg";
import list_left from "../service_img/list_left.svg";
import Slider from "react-slick";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "./onlinesurveys.css";

const OnlineSurveys =()=>{

    const [cardImg, setCardImg]= useState([]);
    const [arrCard, setArrCard]=  useState([]);
    const [slidingSurvey, setSlidingSurvey]= useState([]);
    const [ques1, setQues1] = useState(false);
    const [ques2, setQues2] = useState(false);
    const [ques3, setQues3] = useState(false);
    const [ques4, setQues4] = useState(false);

    useEffect(()=>{
        setSlidingSurvey([{
            Image: diy,
            title: "DIY Surveys"
        },{
            Image: global,
            title: "Global Sample"
        },{
            Image: quantative,
            title: "Global Quantitative Fieldwork"
        }]);
        setCardImg([hand_clock, star_chat, setting]);
        setArrCard([{
            heading: "Feasibility Consulting",
            text: "mus cras dignissim et lacinia sit maecenas. Amet egestas viverra sit vestibulum risus eget velit ut elementum. Nisl molestie facilisis non vivamus. Urna eget bibendum feugiat congue sed. Consectetur at a enim dictum tempus. Aliquet eget lorem duis scelerisque ipsum mauris augue et. Faucibus quis venenatis ultricies dignissim tincidunt sit nulla. Consequat condimentum enim bibendum dictum. Faucibus quis venenatis"
        },{
            heading: "Sampling",
            text: " in ornare feugiat sit tristique nibh. Neque sit ac lacinia eu. Neque consectetur enim placerat duis phasellus. Facilisis mauris nulla mi placerat. Magnis interdum nisl felis fames velit odio. Scelerisque commodo nulla vitae neque sit aliquam at commodo eu. Maecenas proin nulla mauris sit dui faucibus at vestibulum. Consequat pellentesque tincidunt neque cursus hac."
        },{
            heading: "Programming & Hosting",
            text: "proin nulla mauris sit dui faucibus at vestibulum. Consequat pellentesque tincidunt neque cursus hac. In vel neque blandit amet nunc urna duis. Consequat nulla feugiat lectus amet turpis sed. Proin iaculis feugiat massa risus amet nulla. Elementum mus cras dignissim et lacinia sit maecenas. Amet egestas viverra sit vestibulum risus eget velit ut elementum. Nisl molestie facilisis non vivamus."
        },{
            heading: "Topline Reporting & Analysis",
            text: "mus cras dignissim et lacinia sit maecenas. Amet egestas viverra sit vestibulum risus eget velit ut elementum. Nisl molestie facilisis non vivamus. Urna eget bibendum feugiat congue sed. Consectetur at a enim dictum tempus. Aliquet eget lorem duis scelerisque ipsum mauris augue et. Faucibus quis venenatis ultricies dignissim tincidunt sit nulla. Consequat condimentum enim bibendum dictum. Faucibus quis venenatis"
        },{
            heading: "Data Processing & Delivery",
            text: " in ornare feugiat sit tristique nibh. Neque sit ac lacinia eu. Neque consectetur enim placerat duis phasellus. Facilisis mauris nulla mi placerat. Magnis interdum nisl felis fames velit odio. Scelerisque commodo nulla vitae neque sit aliquam at commodo eu. Maecenas proin nulla mauris sit dui faucibus at vestibulum. Consequat pellentesque tincidunt neque cursus hac."
        }]);

    }, [])
    
    console.log("Here====>", arrCard)
    const left_controll=()=>{
        console.log("Left button clicked")
    }
    const right_controll=()=>{
        console.log("Right button clicked")
    }

    const reDirectToSurveys=(e)=>{
        e.preventDefault();
        console.log("Sliding image was clicked");
        console.log("Element title===>", e.currentTarget.id);
        if(Number(e.currentTarget.id)===0) window.location.replace('/services/diysurveys');
        else if (Number(e.currentTarget.id)===1) window.location.replace('/services/globalsurveys');
        else if (Number(e.currentTarget.id)===2) window.location.replace('/services/globalqunatitativesurveys');
    }

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
                <ul className="online_level_five_unordered_list" >
                    <Slider {...settings_list}>
                        <div className="online_level_five_unordered_list_item">
                            <li>Innovative Data Collection Technologies</li>
                        </div>
                        <div className="online_level_five_unordered_list_item">
                            <li>Advance Sampling Technologies</li>
                        </div>
                        <div className="online_level_five_unordered_list_item">
                            <li>Customised Survey Design</li>
                        </div>
                        <div className="online_level_five_unordered_list_item">
                            <li>Comprehensive Data Analysis</li>
                        </div>
                        <div className="online_level_five_unordered_list_item">
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
    
    return (
        <div className="main_body">
            <div className="level_one">
                <img src={banner} alt="bannerImg" />
            </div>
            <div className="level_two">
                <h1>Online survey made</h1>
                <h1>smarter, faster, easier</h1>
            </div>
            <div className="level_three">
                <div className="Card_box">
                    {Array.isArray(arrCard) && arrCard.map((card, index)=>{
                        console.log("Index===>", index);
                        let i= index>cardImg.length-1 ? index%cardImg.length : index
                            console.log("Index for the array of images", i)
                            return(
                                <div className="cards" key={index} id={`id${index}`}>
                                    <img src={cardImg[i]} alt="card_image" />
                                    <h1>{card.heading}</h1>
                                    <p>{card.text}</p>
                                </div>
                            )
                        })}
                </div>
            </div>
            <div className="level_four">
                <h1>Expertise to <span>support your success</span></h1>
                <div className="level_four_sides">
                    <div className="left_side">
                            <h1>Tune in to every word, on every channel</h1>
                            <p>mus cras dignissim et lacinia sit maecenas. Amet egestas viverra sit vestibulum risus eget velit ut elementum. Nisl molestie facilisis non vivamus. Urna eget bibendum feugiat congue sed. Consectetur at a enim dictum tempus. Aliquet eget lorem duis scelerisque ipsum mauris augue et. Faucibus quis venenatis ultricies dignissim tincidunt sit nulla. Consequat condimentum enim bibendum dictum. Faucibus quis venenatis</p>
                    </div>
                    <div className="right_side">
                        <div className="column_one">
                            <h1>Hi there! I'm interested in conducting an online survey for my business. Can you tell me more about your online survey services?</h1>
                        </div>
                        <div className="column_two"></div>
                        <div className="column_three"></div>
                    </div>
                </div>
            </div>
            <div className="level_five">
                <h1>Our online survey <span>made approaches</span></h1>
                <div className="online_level_five_sliding_parent">
                    {sliding_list()}
                </div>
                <div className="level_five_section_part">
                    <section>
                        <img src={blue_boy} alt="blue_boy_img" />
                    </section>
                    <section>
                        <div>
                            <h1>Innovative <span>Data Collection Technologies</span></h1>
                            <p>Feugiat egestas ut laoreet dolor lacinia eget nisi cursus. Maecenas elementum commodo tortor purus. Turpis sapien laoreet pharetra egestas morbi condimentum hendrerit neque. Auctor tincidunt elementum eleifend adipiscing purus. Cras nunc a tempor neque elit molestie malesuada diam morbi. Consequat aenean mi lacinia interdum eros ipsum dignissim amet pulvinar. Id ullamcorper at nisi venenatis urna nunc purus mi faucibus. Vitae aliquam pulvinar amet nulla rhoncus magna.</p>
                            <h2>Benefits of using Mirats Insights -</h2>
                            <ul>
                                <li>Lorem ipsum dolor sit amet consectetur Gravida malesua egestas a egestas.</li>
                                <li>Quis justo quisque purus at et Lorem  purus. </li>
                                <li>Massa eget elementum nunc semper. Eu laoreet mattis nec ullamcorper nunc Semper sed .</li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
            <div className="level_six">
                <p>Upcoming Surveys</p>
                <h1>Your favourite upcoming </h1>
                <h2>quantitative solution </h2>
                <div className="online_survey_level_six_parent">
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
            <div className="level_seven">
                <p>Benefits of<span> online survey</span></p>
                <div className="level_sevel_faq">
          <section>
            <h5>What are the benefits of reputation management software?</h5>
            <img
              src={ques1 ? cross : plus}
              alt="image"
              onClick={() => {
                setQues1(!ques1);
              }}
            />
          </section>
          {ques1 ? (
            <p>
              Reputation management software offers businesses the ability to
              monitor their online presence, track customer feedback, and
              address issues promptly. By maintaining a positive brand
              perception, businesses can build trust, improve customer
              satisfaction, and enhance their online reputation, leading to
              increased credibility and business success.
            </p>
          ) : (
            <></>
          )}
          <section>
            <h5>Eliminates manual data collection</h5>
            <img
              src={ques2 ? cross : plus}
              alt="image"
              onClick={() => {
                setQues2(!ques2);
              }}
            />
          </section>
          {ques2 ? (
            <p>
              Reputation management software offers businesses the ability to
              monitor their online presence, track customer feedback, and
              address issues promptly. By maintaining a positive brand
              perception, businesses can build trust, improve customer
              satisfaction, and enhance their online reputation, leading to
              increased credibility and business success.
            </p>
          ) : (
            <></>
          )}
          <section>
            <h5>Get real-time insights</h5>
            <img
              src={ques3 ? cross : plus}
              alt="image"
              onClick={() => {
                setQues3(!ques3);
              }}
            />
          </section>
          {ques3 ? (
            <p>
              Reputation management software offers businesses the ability to
              monitor their online presence, track customer feedback, and
              address issues promptly. By maintaining a positive brand
              perception, businesses can build trust, improve customer
              satisfaction, and enhance their online reputation, leading to
              increased credibility and business success.
            </p>
          ) : (
            <></>
          )}
          <section>
          <h5>You can reach more people, faster and easier</h5>
          <img
            src={ques4 ? cross : plus}
            alt="image"
            onClick={() => {
              setQues4(!ques4);
            }}
          />
        </section>
        {ques4 ? (
          <p>
            Reputation management software offers businesses the ability to
            monitor their online presence, track customer feedback, and
            address issues promptly. By maintaining a positive brand
            perception, businesses can build trust, improve customer
            satisfaction, and enhance their online reputation, leading to
            increased credibility and business success.
          </p>
        ) : (
          <></>
        )}
        </div>
            </div>
        </div>
    )
}

export default OnlineSurveys;