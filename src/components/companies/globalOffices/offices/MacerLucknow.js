import React from "react";
import banner from "../../../images/banners/MacerBanner.png";
import call from "../../../images/images/call.png";
import location from "../../../images/images/location.png";
import mail from "../../../images/images/mail.png";
import MacerLkw from "../../../images/images/MacerLucknow.png";
import MiratsLkw from "../../../images/images/MiratsLucknow.png";
import UsOffice from "../../../images/images/UsOffice.png";
import Atomos from "../../../images/images/Atomos.png";
import left from "../../../images/images/left.png";
import right from "../../../images/images/right.png";
import "./offices.css";

const MacerLucknow=()=>{

    const officeDetails=[{
        name: "Macer India Research and Technology Services Private Limited",
        address: "MMS-2/12A, Ground Floor, Sector - C, SRY, Aliganj, Lucknow, Uttar Pradesh",
        pin: "Pin Code : 226021",
        cin: "CIN : U74999UP2020PTC128760",
        incorporationDate: "Incorporation Date : 23 May 2020",
        agmDate: "Date of AGM :  30 Sept 2022",
        balanceSheetDate: "Date of Balance Sheet : 23 Mar 2022",
        listingStatus: "Listing Status :  Unlisted",
        rocCode: "ROC Code : Roc-Kanpur"
    }]

    const openingHours=[{
        day: "Mon",
        time: "10:00 a.m. - 8:00 p.m"
    },{
        day: "Tue",
        time: "10:00 a.m. - 8:00 p.m"
    },{
        day: "Wed",
        time: "10:00 a.m. - 8:00 p.m"
    },{
        day: "Thu",
        time: "10:00 a.m. - 8:00 p.m"
    },{
        day: "Fri",
        time: "10:00 a.m. - 8:00 p.m"
    },{
        day: "Sat",
        time: "10:00 a.m. - 8:00 p.m"
    }, {
        day: "Sun",
        time: "Closed"
    }]

    const headQuarters=[{
        image: MacerLkw,
        name: "Macer India Research and Technology ",
        address: "Services Private Limited, Lucknow, India",
        email: "Email Id - macerindia@gmail.com",
        contactNo: "Contact No. +91 78345 78345"
    },{
        image: MiratsLkw,
        name: "Mirats Insights Private Limited,",
        address: "Lucknow, India",
        email: "Email Id - miratsinsights@gmail.com",
        contactNo: "Contact No. +91 78245 78245"
    }]

    const handleHeadQuarters=(e)=>{
        e.preventDefault();
        let index=Number(e.currentTarget.id);
        if(index===0)
        {
            window.location.replace("/company/globaloffices/Maceroffice");
        }
        if(index===1)
        {
            window.location.replace("/company/globaloffices/Miratsoffice");
        }
    }
    return(
        <div className="officed_body">
            <div className="offices_level_one">
                <img style={{width: "90%"}} src={banner} alt="banner" />
                <section>
                    <p>Global Offices</p>
                    <h2>Macer India Research and <br />Technology Services Private Limited,<br />Lucknow, India</h2>
                </section>                
            </div>
            <div className="offices_level_two">
                <section>
                    <h2>Office Details</h2>
                    <table>
                        <thead>
                            <tr>
                                <th className="offices_level_two_head">Macer India Research and Technology Services Private Limited</th>
                            </tr>
                        </thead>
                        <tbody>
                            {officeDetails.map((element, index)=>{
                                return(
                                    <tr className="offices_level_two_office_details" key={index}>
                                        <tr>{element.address}</tr>
                                        <tr>{element.pin}</tr>
                                        <tr>{element.cin}</tr>
                                        <tr>{element.incorporationDate}</tr>
                                        <tr>{element.agmDate}</tr>
                                        <tr>{element.balanceSheetDate}</tr>
                                        <tr>{element.listingStatus}</tr>
                                        <tr>{element.rocCode}</tr>
                                    </tr> 
                                )
                            })}
                        </tbody>
                    </table>
                </section>
                <section>
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
                </section>
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
                            <h5>macerindia@gmail.com</h5>
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
                <h2>Headquarters</h2>
                <div className="offices_level_four_sec">
                    <img className="slideing_image" src={left} alt="left" />
                    <div className="offices_level_four_sec_parent">
                    {headQuarters.map((element, index)=>{
                        return(
                            <div className="offices_level_four_sec_child" id={index} onClick={handleHeadQuarters}>
                                    <img src={element.image} alt="image"/>
                                    <section>
                                        <h2>{element.companyName}</h2>
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

export default MacerLucknow;