import React from "react";
import "./serveCards.css";

const ServeCards=(props)=>{

    const serveCardsHeading= props.serveCardsHeading;
    const serveCardsArr= props.serveCardsArr;

    return(
        <div className="serve_cards_body">
            <div className="serve_cards_body_heading">
                <h2>{serveCardsHeading[0]}</h2>
                <p>{serveCardsHeading[1]}</p>
            </div>
            <div className="serve_cards_body_card_parent">
                {serveCardsArr.map((card, index)=>{

                    return(
                        <div className="serve_cards_body_card_child" key={index}>
                            <h2>{card.title}</h2>
                            <p>{card.text}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ServeCards;