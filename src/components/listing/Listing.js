import react, { useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./listing.css";

const Listing = (props) => {
    const image= props.image;
    const items = props.content[0].lists;
    const listPoints= props.content[0].sectionListPoints;

    const responsiveList = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        }
    };  

    return (
        <div className="listing_body">
            <h2>{props.content[0].heading1} <span>{props.content[0].heading2}</span></h2>
            <div className='sliding_list'>
                <Carousel responsive={responsiveList}>
                        {items.map((item, index)=>{
                            return(
                                <div className='list_div' key={index}>
                                    <p>{item}</p>
                                </div>
                            )
                        })}
                </Carousel>
            </div>
            <div className='listing_sec'>
                <section>
                    <img src={image} alt='image'/> 
                </section>
                <section>
                    <h3>{props.content[0].sectionHeading1} <span>{props.content[0].sectionHeading2}</span></h3>
                    <p>{props.content[0].sectionText}</p>
                    <h4>{props.content[0].sectionListHeading}</h4>
                    <ul>
                        {listPoints.map((element, index)=>{
                            return(
                                <li className='' key={index}>
                                    <p>{element}</p>
                                </li>
                            )
                        })}
                    </ul>
                </section>
            </div>
        </div>
    )
}

export default Listing;