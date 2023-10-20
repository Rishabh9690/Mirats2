import React from "react";
import banner from "./images/Banner.png";
import "./researcherEvents.css";

const ResearcherEvents=()=>{

    const meeting=[{
        date: "May 24-25, 2023",
        country: "IIEX North America",
        place: "Austin, TX",
        text: "We are delighted to sponsor and exhibit at this event.",
    },{
        date: "June 24-25, 2023",
        country: "IIEX North America",
        place: "Austin, TX",
        text: "We are delighted to sponsor and exhibit at this event.",
    },{
        date: "July 24-25, 2023",
        country: "IIEX North America",
        place: "Austin, TX",
        text: "We are delighted to sponsor and exhibit at this event.",
    },{
        date: "Aug 24-25, 2023",
        country: "IIEX North America",
        place: "Austin, TX",
        text: "We are delighted to sponsor and exhibit at this event.",
    },{
        date: "Sept 24-25, 2023",
        country: "IIEX North America",
        place: "Austin, TX",
        text: "We are delighted to sponsor and exhibit at this event.",
    },{
        date: "Oct 24-25, 2023",
        country: "IIEX North America",
        place: "Austin, TX",
        text: "We are delighted to sponsor and exhibit at this event.",
    },{
        date: "Nov 24-25, 2023",
        country: "IIEX North America",
        place: "Austin, TX",
        text: "We are delighted to sponsor and exhibit at this event.",
    },{
        date: "Dec 24-25, 2023",
        country: "IIEX North America",
        place: "Austin, TX",
        text: "We are delighted to sponsor and exhibit at this event.",
    }]

    return(
        <div className="researcher_events_body">
            <img src={banner} alt="banner" />
            <div className="researcher_events_level_two">
                {
                    meeting.length>0? 
                    <>
                        <h2>Meet up at <span>Upcoming Events</span></h2>
                        <div className="researcher_events_level_two_grid_parent">
                        {meeting.map((element, index)=>{
                            return(
                                <div className="researcher_events_level_two_grid_child">
                                    <h2>{element.date}</h2>
                                    <p>{element.country}</p>
                                    <p>{element.place}</p>
                                    <p>{element.text}</p>
                                </div>
                            )
                        })}
                        </div>
                    </>:
                    <>
                        <h2>No any <span>Upcoming Events Here</span></h2>
                        
                    </>
                }
                
            </div>
        </div>
    )
}

export default ResearcherEvents;