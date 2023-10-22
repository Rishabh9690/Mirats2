import React from "react";
import banner from  "../../../images/banners/atomos.png";
import call from "../../../images/images/call.png";
import location from "../../../images/images/location.png";
import mail from "../../../images/images/mail.png";
import MacerImg from "../../../images/images/MacerLucknow.png";
import MiratsImg from "../../../images/images/MiratsLucknow.png";
import UsOffice from "../../../images/images/UsOffice.png";
import Atomos from "../../../images/images/Atomos.png";
import left from "../../../images/images/left.png";
import right from "../../../images/images/right.png";
const AtomosOffice=()=>{

    const officeDetails=[{
        name: "Atomos Technologies",
        address: "305, 3rd Floor, NIBR Corporate Park, Nr. Safed Pool, Saki Naka, Andheri(E), Mumbai",
        pin: "Pin Code : 400079",
        cin: "CIN : U72900UP2021PTC153917",
        incorporationDate: "Incorporation Date : 14 Oct 2021",
        agmDate: "Date of AGM :  22 Sept 2022",
        balanceSheetDate: "Date of Balance Sheet : 31 Mar 2022",
        listingStatus: "Date of Balance Sheet : 31 Mar 2022",
        rocCode: "ROC Code : Roc-Kanpur"
    }]

    const openingHours=[{
        day: "Mon",
        time: "09:00 a.m. - 7:00 p.m"
    },{
        day: "Tue",
        time: "09:00 a.m. - 7:00 p.m"
    },{
        day: "Wed",
        time: "09:00 a.m. - 7:00 p.m"
    },{
        day: "Thu",
        time: "09:00 a.m. - 7:00 p.m"
    },{
        day: "Fri",
        time: "09:00 a.m. - 7:00 p.m"
    },{
        day: "Sat",
        time: "Closed"
    }, {
        day: "Sun",
        time: "Closed"
    }]

    const headQuarters=[{
        image: MacerImg,
        name: "Macer India Research and Technology ",
        address: "Services Private Limited, Lucknow, India",
        email: "Email Id - macerindia@gmail.com",
        contactNo: "Contact No. +91 78345 78345"
    },{
        image: MiratsImg,
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
        {/* <img src={banner} alt="banner" /> */}
        <div className="offices_level_one">
                <img style={{width: "90%"}} src={banner} alt="banner" />
                <section>
                    <p>Global Offices</p>
                    <h2>Atomos Technologies,  <br />Mumbai, India</h2>
                </section>                
            </div>
        <div className="offices_level_two">
            <section>
                <h2>Office Details</h2>
                <table>
                    <thead>
                        <tr>
                            <th className="offices_level_two_head">Atomos Technologies</th>
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

export default AtomosOffice;