/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import banner from "../../../images/images/UsOffice.png";
import call from "../../../images/images/call.png";
import location from "../../../images/images/location.png";
import mail from "../../../images/images/mail.png";
import left from "../../../images/images/left.png";
import right from "../../../images/images/right.png";
// import MacerLucknow from "../../../images/images/MacerLucknow.png";
// import MiratsLucknow from "../../../images/images/MiratsLucknow.png";
// import UsOffice from "../../../images/images/UsOffice.png";
import Atomos from "../../../images/images/Atomos.png";

const UsMirats=()=>{

    const officeDetails=[{
        name: "Mirats Insights LLC,",
        address: "Ste 1200, 1309 Coffeen Avenue, Sheridan, WY, USA - 82801",
        ein: "EIN : 61-1995859",
        formationDate: "Date of Formation : 1 Jun, 2021"
    }]

    // const openingHours=[{
    //     day: "Mon",
    //     time: "10:00 a.m. - 8:00 p.m"
    // },{
    //     day: "Tue",
    //     time: "10:00 a.m. - 8:00 p.m"
    // },{
    //     day: "Wed",
    //     time: "10:00 a.m. - 8:00 p.m"
    // },{
    //     day: "Thu",
    //     time: "10:00 a.m. - 8:00 p.m"
    // },{
    //     day: "Fri",
    //     time: "10:00 a.m. - 8:00 p.m"
    // },{
    //     day: "Sat",
    //     time: "10:00 a.m. - 8:00 p.m"
    // }, {
    //     day: "Sun",
    //     time: "Closed"
    // }]

    const headQuarters=[{
        image: Atomos,
        name: "Atomos Technologies, Mumbai, India",
        address: "",
        email: "Email Id - atomostechnologies@gmail.com",
        contactNo: "Contact No. +1 782 457"
    }]

    const handleHeadQuarters=(e)=>{
        e.preventDefault();
        let index=Number(e.currentTarget.id);
        if(index===0)
        {
            console.log("Clicked");
            window.location.replace("/company/globaloffices/Atomosoffice");
        }
    }
    return (
        <div className="officed_body">
        {/* <img src={banner} alt="banner" /> */}
        <div className="offices_level_one">
                <img style={{ width: "90%" }} src={banner} alt="banner" />
                <section>
                    <p>Global Offices</p>
                    <h2>Mirats Insights LLC,  <br />Wyoming, USA</h2>
                </section>
            </div>
        <div className="offices_level_two">
            <section>
                <h2>Office Details</h2>
                <table>
                    <thead>
                        <tr>
                            <th className="offices_level_two_head">Mirats Insights Private Limited,</th>
                        </tr>
                    </thead>
                    <tbody>
                        {officeDetails.map((element, index)=>{
                            return(
                                <tr className="offices_level_two_office_details" key={index}>
                                    <tr>{element.address}</tr>
                                    <tr>{element.ein}</tr>
                                    <tr>{element.formationDate}</tr>
                                </tr> 
                            )
                        })}
                    </tbody>
                </table>
            </section>
            {/* <section>
                <h2>Office Opening Hours</h2>
                <table>
                    <thead>
                        <tr>
                            <th className="offices_level_two_head_timmings">Days</th>
                            <th className="offices_level_two_head_timmings">Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {openingHours.map((element, index)=>{
                            return(
                                <tr className="offices_level_two_office_timmings" key={index}>
                                    <td>{element.day}</td>
                                    <td>{element.time}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </section> */}
        </div>
        <hr></hr>
        <div className="offices_level_three">
            <h2>Contact</h2>
            <div className="offices_level_three_sec">
                <section>
                    <img src={call} alt="call" />
                    <div className="offices_level_three_sec_inline">
                        <p>Contact No.</p>
                        <h5>+91 78345 78345</h5>
                    </div>
                </section>
                <section>
                    <img src={mail} alt="mail" />
                    <div className="offices_level_three_sec_inline">
                        <p>Email Id</p>
                        <h5>miratsinsights_llc@gmail.com</h5>
                    </div>
                </section>
            </div>
            <div className="offices_level_three_address">
                <img src={location} alt="location" />
                <section>
                    <p>Address</p>
                    <h5>MMS-2/12A, Ground Floor, Sector - C, SRY, Aliganj, Lucknow, Uttar Pradesh - 226021</h5>
                </section>
            </div>
        </div>
        <hr></hr>
        <div className="offices_level_four">
            <h2>Technology Corporate Office</h2>
            <div className="offices_level_four_sec">
                <img className="slideing_image" src={left} alt="left" />
                <div className="offices_level_four_sec_parent_one_office">
                {headQuarters.map((element, index)=>{
                    return(
                        <div className="offices_level_four_sec_child" id={index} onClick={handleHeadQuarters}>
                                <img src={element.image} alt="image"/>
                                <section>
                                    <h2>{element.name}</h2>
                                    <h2>{element.address}</h2>
                                    <p>{element.email}</p>
                                    <p>{element.contactNo}</p>
                                </section>
                            </div>
                    )
                })}
                </div>
                <img className="slideing_image" src={right} alt="right" />
            </div>
        </div>
    </div>
    )
}

export default UsMirats;