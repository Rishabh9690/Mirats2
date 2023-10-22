import React from "react";
import handClock from "../images/images/handClock.png";
import starChat from "../images/images/starChat.png";
import setting from "../images/images/setting.png";
import "./cards.css";

const Cards= (props)=>{

    const cardImg=[handClock, starChat, setting];
    const cardData= props.cardsContent;
    return(
        <div className="cards_body">
            <h2>{props.cardsHeadings[0].heading1} <span>{props.cardsHeadings[0].heading2}</span></h2>
            <div className="card_data_parent">
                {cardData.map((element, index)=>{
                    let i= index <= cardImg.length - 1 ? index : index % cardImg.length;
                    return(
                        <div className="card_data_child">
                            <img src={cardImg[i]} alt="cardImafe"/>
                            <h3>{element.cardHeading}</h3>
                            <p>{element.cardText}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Cards;