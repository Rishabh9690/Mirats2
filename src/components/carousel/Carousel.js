import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./carousel.css";

const Carousel = (props) => {
    const carouselData = props.carouselData;
    const carouselInfo = props.carouselInfo;
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };
        const carouselStyle = {
          width: '90%', 
          margin: '0 auto', 
        };
    return (
        <div className="carousel_body">
            <section>
                <p>{carouselInfo[0]}</p>
                <h2>{carouselInfo[1]}<span> {carouselInfo[2]}</span></h2>
            </section>
            <Slider {...settings} style={carouselStyle}>
                {carouselData.map((data, index) => {
                    return (
                        <div className="carousel_body_child">
                            <img src={data.image} />
                            {/* <section> */}
                                <h2>{data.title}</h2>
                                <p>{data.text}</p>
                                <a href="#">Learn more</a>
                            {/* </section> */}
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}

export default Carousel;