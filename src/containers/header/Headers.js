import React, { useState } from "react";
import miratsLogo from "../headerImgs/miratsLogo.jpg";
import sample from "../headerImgs/sample.png";
import { useNavigate } from "react-router-dom";
import Modal from 'react-modal';
import "./headers.css";

const Header = () => {
    const [divisions, setDivisions] = useState();
    const [subDivisions, setSubDivisions] = useState();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [type, setType] = useState();
    const [subType, setSubType]= useState();
    const navigate = useNavigate();

    const handleModalOpen = () => {
        console.log("Inside the handleModalOpen");
        setModalIsOpen(true);
    }
    const handleModalClose = () => {
        console.log("Inside the handleModalClose");
        setModalIsOpen(false);
        // onRequestClose
    }

    const handleHome = () => {
        navigate("/");
    }
    const handleServices = () => {
        setType("services");
        setSubType("Qualitative Solution");
        setDivisions([
            "Qualitative Solution", "Quantitive Solution", "Specialist Solution",
        ]);
        //Making ByDefualt
        setSubDivisions(["Online Surveys", "DIY Surveys", "Global Sample Surveys", "Global Quantitative Fieldwork", "End to End Sample Service"]);
        setSubType("Qualitative Solution");
        handleModalOpen();
    }
    const handleIndustry = () => {
        setType("industry");
        setSubType("Consumer Packaged Goods");
        setDivisions([
            "Consumer Packaged Goods", "Financial Services", "Marketing Research", "Healthcare", "Consulting", "Media and Technology"
        ]);
        //Making ByDefualt
        setSubDivisions(["B2C Audience Panel Book", "B2C Audience Panel Book", "B2C Audience Panel Book"]);
        handleModalOpen();
    }
    const handleCompany = () => {
        setType("company");
        setSubType("About Mirats Insights");
        setDivisions([
            "About Mirats Insights", "Leadership", "Global Offices", "Partnerships and Certifications", "Researcher Events", "Blogs & Articles", "Careers"
        ]);
        //Making ByDefualt
        setSubDivisions(["We are hiring", "Articles"]);
        handleModalOpen();
    }
    const handleResources = () => {
        setType("resources");
        setSubType("B2C Audience Book");
        setDivisions([
            "B2C Audience Book", "B2B Audience Book", "Healthcare Audience Book", "Quality / Security Control Docs", "Esomar 37 Answer", "One Pager"
        ]);
        //Making ByDefualt
        setSubDivisions(["We are hiring", "Articles"]);
        handleModalOpen();
    }
    const handleContacts = () => { }

    const handleSubdivisions = (e) => {
        e.preventDefault();
        const id = e.currentTarget.id;
        console.log("Id", id);
        if (type === "services") {
            if (id == 0) {
                setSubDivisions(["Online Surveys", "DIY Surveys", "Global Sample Surveys", "Global Quantitative Fieldwork", "End to End Sample Service"]);
            }
            else if (id == 1) {
                setSubDivisions(["In-Person Qual", "Digital Qual", "Telephonic Qual", "Global Qual Solution"]);
            }
            else if (id == 2) {
                setSubDivisions(["Recruitment Solution", "Consulting Solution", "Hybrid Research Solution", "Product Test", "Transcription Services"]);
            }
            setSubType(divisions[id]);
        }
        if (type === "industry") {
            if (id == 0) {
                setSubDivisions(["B2C Audience Panel Book", "B2C Audience Panel Book", "B2C Audience Panel Book"]);
            }
            else if (id == 1) {
                setSubDivisions(["B2C Audience Panel Book", "B2C Audience Panel Book", "B2C Audience Panel Book"]);
            }
            else if (id == 2) {
                setSubDivisions(["B2C Audience Panel Book", "B2C Audience Panel Book", "B2C Audience Panel Book"]);
            }
            else if (id == 3) {
                setSubDivisions(["B2C Audience Panel Book", "B2C Audience Panel Book", "B2C Audience Panel Book"]);
            }
            else if (id == 4) {
                setSubDivisions(["B2C Audience Panel Book", "B2C Audience Panel Book", "B2C Audience Panel Book"]);
            }
            else if (id == 5) {
                setSubDivisions(["B2C Audience Panel Book", "B2C Audience Panel Book", "B2C Audience Panel Book"]);
            }
            setSubType(divisions[id]);
        }
        if (type === "company") {
            if (id == 0) {
                setSubDivisions(["We’re Hiring", "We’re Hiring", "Blogs and Articles"]);
            }
            else if (id == 1) {
                setSubDivisions(["We’re Hiring", "We’re Hiring", "Blogs and Articles"]);
            }
            else if (id == 2) {
                setSubDivisions(["We’re Hiring", "We’re Hiring", "Blogs and Articles"]);
            }
            else if (id == 3) {
                setSubDivisions(["We’re Hiring", "We’re Hiring", "Blogs and Articles"]);
            }
            else if (id == 4) {
                setSubDivisions(["We’re Hiring", "We’re Hiring", "Blogs and Articles"]);
            }
            else if (id == 5) {
                setSubDivisions(["We’re Hiring", "We’re Hiring", "Blogs and Articles"]);
            }
            else if (id == 6) {
                setSubDivisions(["We’re Hiring", "We’re Hiring", "Blogs and Articles"]);
            }
            setSubType(divisions[id]);
        }
        if (type === "resources") {
            if (id == 0) {
                setSubDivisions(["", ""]);
            }
            else if (id == 1) {
                setSubDivisions(["", ""]);
            }
            else if (id == 2) {
                setSubDivisions(["", ""]);
            }
            else if (id == 3) {
                setSubDivisions(["", ""]);
            }
            else if (id == 4) {
                setSubDivisions(["", ""]);
            }
            else if (id == 5) {
                setSubDivisions(["", ""]);
            }
            else if (id == 6) {
                setSubDivisions(["", ""]);
            }
            setSubType(divisions[id]);
        }
    }

    const handleNavigations = (e) => {
        e.preventDefault();
        console.log("Clicked");
        
    }

    return (
        <div className="header_body">
            <img src={miratsLogo} alt="miratsLogo" />
            <div className="header_nav">
                <ul>
                    <li onClick={handleHome}>Home</li>
                    <li onClick={handleServices}>Services</li>
                    <li onClick={handleIndustry}>Industry</li>
                    <li onClick={handleCompany}>Company</li>
                    <li onClick={handleResources}>Resources</li>
                    <li onClick={handleContacts}>Contacts</li>
                </ul>
            </div>
            <button>Book a Call</button>

            <Modal isOpen={modalIsOpen}>
                <div className="navigation_modal">
                    <section className="navigation_modal_section_one">
                        <p>{type}</p>
                        {divisions?.map((element, index) => {
                            return (
                                <div key={index} id={index} className="" onClick={(e) => handleSubdivisions(e)}>
                                    <h3>{element}</h3>
                                </div>
                            )
                        })}
                    </section>
                    <section className="navigation_modal_section_two">
                        <p>{subType}</p>
                        {subDivisions?.map((element, index) => {
                            return (
                                <div key={index} id={index} className="" onClick={(e) => handleNavigations(e)}>
                                    <h5>{element}</h5>
                                </div>
                            )
                        })}
                    </section>
                </div>
            </Modal>
        </div>
    )
}

export default Header;