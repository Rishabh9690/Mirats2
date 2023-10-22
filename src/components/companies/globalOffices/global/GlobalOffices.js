import React from "react";
import banner from "../../../images/banners/globalOffices.png";
import MacerLucknow from "../../../images/images/MacerLucknow.png";
import MiratsLucknow from "../../../images/images/MiratsLucknow.png";
import UsOffice from "../../../images/images/UsOffice.png";
import Atomos from "../../../images/images/Atomos.png";

import "./globalOffices.css";

const GlobalOffices=()=>{
    
    const headquaters=[{
        image: MacerLucknow,
        companyName: "Macer India Research and Technology ",
        address: "Services Private Limited, Lucknow, India",
        email: "Email Id - macerindia@gmail.com",
        contactNo: "Contact No. +91 78345 78345"
    },{
        image: MiratsLucknow,
        companyName: "Mirats Insights Private Limited,  ",
        address: "Lucknow, India",
        email: "Email Id - miratsinsights@gmail.com",
        contactNo: "Contact No. +91 78345 78345"
    }];

    const virtualOffice=[{
        image: UsOffice,
        companyName: "Mirats Insights LLC, Wyoming, USA",
        address: "",
        email: "Email Id - miratsinsights_llc@gmail.com",
        contactNo: "Contact No. +1 782 457"
    }]

    const technologyOffice=[{
        image: Atomos,
        companyName: "Atomos Technologies, Mumbai, India",
        address: "",
        email: "Email Id - atomostechnologies@gmail.com",
        contactNo: "Contact No. +1 782 457"
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
    const handleUsOffice=(e)=>{
        e.preventDefault();
        let index=Number(e.currentTarget.id);
        if(index===0)
        {
            window.location.replace("/company/globaloffices/UsMiratsoffice");
        }
    }
    const handleTechOffice=(e)=>{
        e.preventDefault();
        let index=Number(e.currentTarget.id);
        if(index===0)
        {
            window.location.replace("/company/globaloffices/Atomosoffice");
        }
    }
    return (
        <div className="global_office_body">
            <img src={banner} alt="banner" />
            <div className="global_office_levels">
                <div className="global_office_level_two">
                    <h2>Headquarters</h2>
                    <div className="global_office_level_two_office_parent">
                        {headquaters.map((element, index)=>{
                            return(
                                <div className="global_office_level_two_office_child" id={index} onClick={handleHeadQuarters}>
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
                </div>
                <hr></hr>
                <div className="global_office_level_two">
                    <h2>Virtual Office</h2>
                    <div className="global_office_level_two_office_parent">
                        {virtualOffice.map((element, index)=>{
                            return(
                                <div className="global_office_level_two_office_child" id={index} onClick={handleUsOffice}>
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
                </div>
                <hr></hr>
                <div className="global_office_level_two">
                    <h2>Technology Corporate Office</h2>
                    <div className="global_office_level_two_office_parent">
                        {technologyOffice.map((element, index)=>{
                            return(
                                <div className="global_office_level_two_office_child" id={index} onClick={handleTechOffice}>
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
                </div>
            </div>
        </div>
    )
}

export default GlobalOffices;