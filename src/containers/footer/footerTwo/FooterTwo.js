import React from "react";
import miratsImg from "../../../components/images/images/miratsImg.png";
import facebookIcon from "../../../components/images/images/facebook.png";
import instagramIcon from "../../../components/images/images/instagram.png";
import twitterIcon from "../../../components/images/images/twitter.png";
import callImg from "../../../components/images/images/call.png";
import mailImg from "../../../components/images/images/mail.png";
import locationImg from "../../../components/images/images/location.png";
import "./footerTwo.css";

const footerArr = [{
    tableHead: "Products",
    tableList: ["Mirats Insights One", "Mirats Insights Blaze", "Mirats Insights Quanto"]
}, {
    tableHead: "Service",
    tableList: ["Qualitative Solution", "Quantitative Solution", "Specialist Solution"]
}, {
    tableHead: "Company",
    tableList: ["About", "Leadership", "Partnership & Certification", "Research Events", "Global Offices", "Careers"]
}, {
    tableHead: "Resource",
    tableList: ["B2C Audience Book", "B2B Audience Book", "Healthcare Audience Book", "Quality/Security Control Docs", "ESOMAR 37 Answer", "One Pager"]
}, {
    tableHead: "Legal",
    tableList: ["Privacy Policy", "Cookies & Technologies", "GDPR Policy", "I.T Security", "Sitemaps"]
}, {
    tableHead: "Support",
    tableList: ["Request a bid", "Join Our Panel", "News Letter"]
}]

const contactArr = [{
    image: callImg,
    title: "Contact No.",
    data1: "310-437-2766",
    data2: ""
}, {
    image: mailImg,
    title: "Email Id",
    data1: "miratsinsights@gmail.com",
    data2: ""
}, {
    image: locationImg,
    title: "Address",
    data1: "305, 3rd Floor, 1Aerocity, NIBR Corporate Park,",
    data2: "Andheri - kurla road, Saki Naka, Mumbai - 400072"
}]

const FooterTwo = () => {

    return (
        <div className="footer_two_whole_main">
            <div className="footer_two_position_absolute">
                <h2>Sign up for <span>our newsletter</span></h2>
                <p>Lorem ipsum dolor sit amet consectetur. In risus nibh ornare egestas semper leo. aliquam penatibus a blandit elementum montes </p>
                <section>
                    <input type="text" placeholder="Email" />
                    <button>Submit</button>
                </section>
            </div>
            <div className="footer_two_bottom">
                <div className="footer_two_nav">
                    <section>
                        <img src={miratsImg} alt="miratsLogo" />
                    </section>
                    <section>
                        <img src={facebookIcon} alt="facebookIcon" />
                        <img src={instagramIcon} alt="instagramIcon" />
                        <img src={twitterIcon} alt="twitterIcon" />
                    </section>
                </div>
                <div className="footer_two_main">
                    {footerArr.map((element, index) => {
                        return (
                            <table key={index} id={index}>
                                <tr><th className="footer_two_main_head">{element.tableHead}</th></tr>
                                {element.tableList.map((list, index) => {
                                    return (
                                        <>
                                            <tr><td className="footer_two_main_data" id={index}>{list}</td></tr>
                                        </>
                                    )
                                })}
                            </table>
                        )
                    })}
                </div>
                <div className="footer_two_footer">
                    {contactArr.map((element, index) => {
                        return (
                            <div className="footer_two_footer_map" id={index} key={index}>
                                <section>
                                    <img src={element.image} alt="image" />
                                </section>
                                <section>
                                    <span>{element.title}</span>
                                    <p><b>{element.data1}</b></p>
                                    <p><b>{element.data2}</b></p>
                                </section>
                            </div>
                        )
                    })}
                </div>
                <hr></hr>
                <p className="footer_two_footer_copy_right">© 2020-2023, All Rights Reserved</p>
            </div>
        </div>
    )
}

export default FooterTwo;