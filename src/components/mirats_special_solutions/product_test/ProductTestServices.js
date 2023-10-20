import React, { useEffect, useState, useRef } from "react";
import banner from "./images/Banner.png";
import hand_clock from "../../services/service_img/hand_clock.svg";
import star_chat from "../../services/service_img/star_chat.svg";
import setting from "../../services/service_img/setting.svg";
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";
import image4 from "./images/iamge4.png";
import image5 from "./images/image5.png";
import plus from "./images/plus.png";
import telephonic from "../images/telephonic.svg";
import globalqual from "../images/globalqual.svg";
import inpersonal from "../images/inpersonal.svg";
import image_list_sec from "../recruitment/images/image_list_sec.svg";
import "./product_test.css";

const ProductTestServices=()=>{
    const [cardIcons, setCardIcons]= useState([]);
    const [cards, setCards] = useState([]);
    const [status1, setStattus1] = useState(true);
    const [status2, setStattus2] = useState(true);
    const [status3, setStattus3] = useState(true);
    const [status4, setStattus4] = useState(true);
    const [status5, setStattus5] = useState(true);
    const [qualSurvey, setQualSurvey] = useState([]);
    // const [scrollLeft, setScrollLeft] = useState(0);
    // const listsRef = useRef(null);
    
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
            heading: "Transcriptional Solution"
        },{
            image: inpersonal,
            heading: "Recruitment Solution"
        },{
            image: telephonic,
            heading: "Consulting Solutions"
        }])
    }, [])

    const survey_redirect= (e)=>{
        e.preventDefault();
        const id= e.currentTarget.id;
        // console.log("here is the id", e.currentTarget.id);
        if(Number(id)===0)
        {
            window.location.replace("/services/transcriptionservice");
        }
        if(Number(id)===1)
        {
            window.location.replace("/services/recruitmentservice");
        }
        if(Number(id)===2)
        {
            window.location.replace("/services/consultingservice");
        }
    }
   
    // const lists= document.querySelector('.product_test_unordered_list');

    // const prevListBtn = (e) => {
    //     e.preventDefault();
    //     let width = listsRef.current.clientWidth;
    //     setScrollLeft((prevScrollLeft) => prevScrollLeft - width);
    //   };
    
    //   const nextListBtn = (e) => {
    //     e.preventDefault();
    //     let width = listsRef.current.clientWidth;
    //     setScrollLeft((prevScrollLeft) => prevScrollLeft + width);
    //   };

    // const prevListBtn=()=>{
    //     let width= lists.clientWidth;
    //     lists.scrollLeft= lists.scrollLeft-width;
    // }
    // const nextListBtn=()=>{
    //     let width= lists.clientWidth;
    //     lists.scrollLeft= lists.scrollLeft+width; 
    // }
    return (
        <div className="product_test_body">
            <img src={banner} alt="banner" />
            <div className="product_test_level_two">
                <div className="product_test_level_two_heading">
                    <h2>Consulting solution services made </h2>
                    <h2>smarter, faster, and easier</h2>
                </div>
                <div className="product_test_level_two_heading_card_parent">
                    {cards.map((card, index)=>{
                        let i= index<= cardIcons.length-1 ? index: index%cardIcons.length;
                        return(
                            <div className="product_test_level_two_heading_card_child" key={index} id={'`${index}`'}>
                                <img src={cardIcons[i]} alt="cardIcons" />
                                <h2>{card.heading}</h2>
                                <p>{card.text}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="product_test_level_three">
                <div className="product_test_level_three_grid">
                    <section className="product_test_level_three_grid_text">
                        <h2>Taste tests</h2>
                        <img src={plus} alt="plus" onClick={()=>setStattus1(!status1)}/>
                    </section>
                    <section>
                        {status1 ? <img src={image1} alt="image1" />: 
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Donec sodales et enim lorem quam tristique. Tellus erat metus ut amet quis in nec maecenas. Sit in cum elit eget neque lorem et est at. Proin semper pulvinar pellentesque sed penatibus mi aliquet vitae hac. Purus augue luctus pellentesque aliquet egestas convallis eget. Tellus tortor scelerisque nunc porttitor. Ut justo faucibus convallis ullamcorper mauris enim vitae vulputate pellentesque. Dictum lectus id tincidunt senectus. Pretium nibh massa sed lectus sit lacus donec dui.
                            Sed semper phasellus mattis urna sollicitudin malesuada vulputate pharetra. Id eu habitant eget suscipit. Praesent risus sit non sem eget. Ornare et rutrum sit sed suspendisse pellentesque. Nec auctor neque in gravida eget elementum urna.
                        </p>
                        }
                    </section>
                </div>
                <div className="product_test_level_three_grid">
                    <section>
                        {status2 ? <img src={image2} alt="image2" />: 
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Donec sodales et enim lorem quam tristique. Tellus erat metus ut amet quis in nec maecenas. Sit in cum elit eget neque lorem et est at. Proin semper pulvinar pellentesque sed penatibus mi aliquet vitae hac. Purus augue luctus pellentesque aliquet egestas convallis eget. Tellus tortor scelerisque nunc porttitor. Ut justo faucibus convallis ullamcorper mauris enim vitae vulputate pellentesque. Dictum lectus id tincidunt senectus. Pretium nibh massa sed lectus sit lacus donec dui.
                            Sed semper phasellus mattis urna sollicitudin malesuada vulputate pharetra. Id eu habitant eget suscipit. Praesent risus sit non sem eget. Ornare et rutrum sit sed suspendisse pellentesque. Nec auctor neque in gravida eget elementum urna.
                        </p>
                        }
                    </section>
                    <section className="product_test_level_three_grid_text">
                        <h2>IHUTs/HUTs</h2>
                        <img src={plus} alt="plus" onClick={()=>setStattus2(!status2)}/>
                    </section>
                </div>
                <div className="product_test_level_three_grid">
                    <section className="product_test_level_three_grid_text">
                        <h2>Central Location Tests</h2>
                        <img src={plus} alt="plus" onClick={()=>setStattus3(!status3)}/>
                    </section>
                    <section>
                        {status3 ? <img src={image3} alt="image3" />: 
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Donec sodales et enim lorem quam tristique. Tellus erat metus ut amet quis in nec maecenas. Sit in cum elit eget neque lorem et est at. Proin semper pulvinar pellentesque sed penatibus mi aliquet vitae hac. Purus augue luctus pellentesque aliquet egestas convallis eget. Tellus tortor scelerisque nunc porttitor. Ut justo faucibus convallis ullamcorper mauris enim vitae vulputate pellentesque. Dictum lectus id tincidunt senectus. Pretium nibh massa sed lectus sit lacus donec dui.
                            Sed semper phasellus mattis urna sollicitudin malesuada vulputate pharetra. Id eu habitant eget suscipit. Praesent risus sit non sem eget. Ornare et rutrum sit sed suspendisse pellentesque. Nec auctor neque in gravida eget elementum urna.
                        </p>
                        }
                    </section>
                </div>
                <div className="product_test_level_three_grid">
                    <section>
                        {status4 ? <img src={image4} alt="image4" />: 
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Donec sodales et enim lorem quam tristique. Tellus erat metus ut amet quis in nec maecenas. Sit in cum elit eget neque lorem et est at. Proin semper pulvinar pellentesque sed penatibus mi aliquet vitae hac. Purus augue luctus pellentesque aliquet egestas convallis eget. Tellus tortor scelerisque nunc porttitor. Ut justo faucibus convallis ullamcorper mauris enim vitae vulputate pellentesque. Dictum lectus id tincidunt senectus. Pretium nibh massa sed lectus sit lacus donec dui.
                            Sed semper phasellus mattis urna sollicitudin malesuada vulputate pharetra. Id eu habitant eget suscipit. Praesent risus sit non sem eget. Ornare et rutrum sit sed suspendisse pellentesque. Nec auctor neque in gravida eget elementum urna.
                        </p>
                        }
                    </section>
                    <section className="product_test_level_three_grid_text">
                        <h2>Product Clinics</h2>
                        <img src={plus} alt="plus" onClick={()=>setStattus4(!status4)}/>
                    </section>
                </div>
                <div className="product_test_level_three_grid">
                    <section className="product_test_level_three_grid_text">
                        <h2>Product Reviews</h2>
                        <img src={plus} alt="plus" onClick={()=>setStattus5(!status5)}/>
                    </section>
                    <section>
                        {status5 ? <img src={image5} alt="image5" />: 
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Donec sodales et enim lorem quam tristique. Tellus erat metus ut amet quis in nec maecenas. Sit in cum elit eget neque lorem et est at. Proin semper pulvinar pellentesque sed penatibus mi aliquet vitae hac. Purus augue luctus pellentesque aliquet egestas convallis eget. Tellus tortor scelerisque nunc porttitor. Ut justo faucibus convallis ullamcorper mauris enim vitae vulputate pellentesque. Dictum lectus id tincidunt senectus. Pretium nibh massa sed lectus sit lacus donec dui.
                            Sed semper phasellus mattis urna sollicitudin malesuada vulputate pharetra. Id eu habitant eget suscipit. Praesent risus sit non sem eget. Ornare et rutrum sit sed suspendisse pellentesque. Nec auctor neque in gravida eget elementum urna.
                        </p>
                        }
                    </section>
                </div>
            </div>
            <div className="product_test_level_four">
                <div className="product_test_level_four_heading">
                    <h2>our product test</h2>
                    <h2>made approaches</h2>
                </div>
                <div className="product_test_level_four_unordered_list">
                    {/* <button onClick={prevListBtn}></button> */}
                    <ul className="product_test_unordered_list" >
                        <li>Innovative Data Collection Technologies</li>
                        <li>Advance Sampling Technologies</li>
                        <li>Customised Survey Design</li>
                        <li>Comprehensive Data Analysis</li>
                        <li>Innovative Advance Customised Comprehensive</li>
                    </ul>
                    {/* <button onClick={nextListBtn}></button> */}
                </div>
                <div className="product_test_level_four_sec">
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
            <div className="product_test_level_five">
                <p>Upcoming Surveys</p>
                <div className="product_test_level_five_heading">
                    <h2>Your favourite upcoming</h2>
                    <h2>Quanlitative Solution</h2>
                </div>
                <div className="product_test_level_five_surveys_parent">
                    {qualSurvey.map((element, index)=>{
                        return(
                            <div className="product_test_level_five_surveys_child" key={index} id={`${index}`} onClick={survey_redirect}>
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

export default ProductTestServices;