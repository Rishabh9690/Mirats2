import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./slidingShow.css";

const SlidingShow = (props) => {

    const slidingHeading = props.slidingHeading;
    const slidingSurveys = props.slidingSurveys;
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        }
    };

    const handleRedirect=(e, index)=>{
        e.preventDefault();
        console.log("Clicked", index)
    }

    return (
        <div className="slidng_show_body">
            <p>Upcoming Surveys</p>
            <h2>{slidingHeading[0]} <span>{slidingHeading[1]} </span></h2>
                <Carousel responsive={responsive}>
                    {slidingSurveys.map((item, index) => {
                        return (
                            <div className="sliding_show_cards_child" key={index} onClick={(e)=>{handleRedirect(e, index)}}>
                                <img src={item.image} alt="image" />
                                <h3>{item.text}</h3>
                            </div>
                        )
                    })}
                </Carousel>
            </div>
    )
}

export default SlidingShow;