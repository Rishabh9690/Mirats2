import React from "react";
import banner from "../../images/images/leadership.png";
import AnupamSir from "../../images/images/sampleImg.png";
import MayankSir from "../../images/images/sampleImg.png";
import SparchJain from "../../images/images/sampleImg.png";
import ShashankMishra from "../../images/images/sampleImg.png";
import ShivamYadav from "../../images/images/sampleImg.png";
// import AniketSingh from "../../images/images/sampleImg.png";
import NanditaSarkar from "../../images/images/sampleImg.png";
import AbhisekhChauhan from "../../images/images/sampleImg.png";
import ShivamSharma from "../../images/images/sampleImg.png";
import AnamKhan from "../../images/images/sampleImg.png";
import AmrendraVikramSingh from "../../images/images/sampleImg.png";
import PalaxBandhara from "../../images/images/sampleImg.png";
import HrithikSharma from "../../images/images/sampleImg.png";
import AvinashPawar from "../../images/images/sampleImg.png";
import AnkitaParab from "../../images/images/sampleImg.png";
import KalpeshPol from "../../images/images/sampleImg.png";
import AltabAnsari from "../../images/images/sampleImg.png";
import VaibhavMasaye from "../../images/images/sampleImg.png";
import kajalSharma from "../../images/images/sampleImg.png";
import VarshaJadhav from "../../images/images/sampleImg.png";
import SonuShrivastava from "../../images/images/sampleImg.png";
import SachinVerma from "../../images/images/sampleImg.png";
import AbhisekSingh from "../../images/images/sampleImg.png";
import HarshitaKhare from "../../images/images/sampleImg.png";
import charmiPatel from "../../images/images/sampleImg.png";
import SaumilShah from "../../images/images/sampleImg.png";

import "./leadership.css";

const Leadership = () => {
    const directors = [{
        image: AnupamSir,
        name: "Anupam Kumar",
        post1: "Chair of the Board",
        post2: ""
    }, {
        image: MayankSir,
        name: "Mayank Patel",
        post1: "Chief Executive Officer and ",
        post2: "Chief Technology Officer"
    }];
    const executiveProfiles = [{
        image: AnupamSir,
        name: "Anupam Kumar",
        post1: "Chair of the Board",
        post2: ""
    }, {
        image: MayankSir,
        name: "Mayank Patel",
        post1: "Chief Executive Officer and ",
        post2: "Chief Technology Officer "
    }, {
        image: SparchJain,
        name: "Sparsh Jain",
        post1: "Principle - Client Servicing",
        post2: ""
    }];
    const OperationsAndSupportTeam = [{
        image: ShashankMishra,
        name: "Shashank Mishra",
        post1: "Project Manager",
        post2: ""
    }, {
        image: ShivamYadav,
        name: "Shivam Yadav",
        post1: "Project Coordinator",
        post2: ""
    }, 
    // {
    //     image: AniketSingh,
    //     name: "Aniket Singh",
    //     post1: "Project Coordinator",
    //     post2: ""
    // }, 
    {
        image: NanditaSarkar,
        name: "Nandita Sarkar",
        post1: "Project Coordinator",
        post2: ""
    }, {
        image: AbhisekhChauhan,
        name: "Abhisekh Chauhan",
        post1: "Project Executive",
        post2: ""
    }, {
        image: ShivamSharma,
        name: "Shivan Sharma",
        post1: "Project Executive",
        post2: ""
    }, {
        image: AnamKhan,
        name: "Anam Khan",
        post1: "Project Executive",
        post2: ""
    }];
    const salesAndMarketingAndBussinessTeam = [{
        image: AmrendraVikramSingh,
        name: "Amrendra Vikram Singh",
        post1: "Marketing Executive and Analyst",
        post2: ""
    }, {
        image: PalaxBandhara,
        name: "Palax Bandhara",
        post1: "Business Development Associate",
        post2: ""
    }, {
        image: HrithikSharma,
        name: "Hrithik Sharma",
        post1: "Business Development Associate",
        post2: ""
    }];
    const designTeam = [{
        image: AvinashPawar,
        name: "Avinash Pawar",
        post1: "Product Designer ",
        post2: "UI/UX Research and Designer "
    }, {
        image: AnkitaParab,
        name: "Ankita Parab",
        post1: "Product Designer ",
        post2: "UI/UX Research and Designer "
    }, {
        image: KalpeshPol,
        name: "Kalpesh Pol",
        post1: "Product Designer ",
        post2: "UI/UX Research and Designer "
    }];
    const engineeringAndDevelopmentTeam = [{
        image: AltabAnsari,
        name: "Altab Ansari",
        post1: "Full Stack Developer",
        post2: ""
    }, {
        image: VaibhavMasaye,
        name: "Vaibhav Masaye",
        post1: "Full Stack Developer",
        post2: ""
    }, {
        image: kajalSharma,
        name: "Kajal Sharma",
        post1: "Frontend Developer",
        post2: ""
    }, {
        image: VarshaJadhav,
        name: "Varsha Jadhav",
        post1: "Backend Developer",
        post2: ""
    }, {
        image: SonuShrivastava,
        name: "Sonu Shrivastava",
        post1: "Backend Developer",
        post2: ""
    }]
    const QuantoPanelTeam = [{
        image: SachinVerma,
        name: "Sachin Verma",
        post1: "Panel Manager",
        post2: ""
    }, {
        image: AbhisekSingh,
        name: "Abhisek Singh",
        post1: "Panel Coordinator",
        post2: ""
    }, {
        image: HarshitaKhare,
        name: "Harshita Khare",
        post1: "Panel Coordinator",
        post2: ""
    }]
    const corporateFunctionsTeam = [{
        image: charmiPatel,
        name: "Charmi Patel",
        post1: "Finance Manager and ",
        post2: "Compliance Coordinator"
    }, {
        image: SaumilShah,
        name: "Saumil Shah",
        post1: "People’s Manager ",
        post2: "Human Resource Manager"
    }]

    const redirectDirectors = (e) => {
        e.preventDefault();
        let index = e.currentTarget.id;
        window.location.replace('');
    }
    return (
        <div className="leqadership_body">
            <img src={banner} alt="banner" />
            <div className="leadership_levels">
                <div className="leadership_level_two">
                    <h2>Board of Directors</h2>
                    <div className="leadership_level_two_details">
                        {directors.map((element, index) => {
                            return (
                                <div id={index} className="leadership_level_two_details_sections" onClick={redirectDirectors}>
                                    <img src={element.image} alt={`${element.name}`} />
                                    <h2>{element.name}</h2>
                                    <p>{element.post1}</p>
                                    <p>{element.post2}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <hr></hr>
                <div className="leadership_level_two">
                    <h2>Executive Profiles</h2>
                    <div className="leadership_level_two_details">
                        {executiveProfiles.map((element, index) => {
                            return (
                                <div className="leadership_level_two_details_sections">
                                    <img src={element.image} alt={`${element.name}`} />
                                    <h2>{element.name}</h2>
                                    <p>{element.post1}</p>
                                    <p>{element.post2}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <hr></hr>
                <div className="leadership_level_two">
                    <h2>Operations and Support Team </h2>
                    <div className="leadership_level_two_details">
                        {OperationsAndSupportTeam.map((element, index) => {
                            return (
                                <div className="leadership_level_two_details_sections">
                                    <img src={element.image} alt={`${element.name}`} />
                                    <h2>{element.name}</h2>
                                    <p>{element.post1}</p>
                                    <p>{element.post2}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <hr></hr>
                <div className="leadership_level_two">
                    <h2>Sales / Marketing and Business Team</h2>
                    <div className="leadership_level_two_details">
                        {salesAndMarketingAndBussinessTeam.map((element, index) => {
                            return (
                                <div className="leadership_level_two_details_sections">
                                    <img src={element.image} alt={`${element.name}`} />
                                    <h2>{element.name}</h2>
                                    <p>{element.post1}</p>
                                    <p>{element.post2}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <hr></hr>
                <div className="leadership_level_two">
                    <h2>Design Team</h2>
                    <div className="leadership_level_two_details">
                        {designTeam.map((element, index) => {
                            return (
                                <div className="leadership_level_two_details_sections">
                                    <img src={element.image} alt={`${element.name}`} />
                                    <h2>{element.name}</h2>
                                    <p>{element.post1}</p>
                                    <p>{element.post2}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <hr></hr>
                <div className="leadership_level_two">
                    <h2>Engineering & Development Team</h2>
                    <div className="leadership_level_two_details">
                        {engineeringAndDevelopmentTeam.map((element, index) => {
                            return (
                                <div className="leadership_level_two_details_sections">
                                    <img src={element.image} alt={`${element.name}`} />
                                    <h2>{element.name}</h2>
                                    <p>{element.post1}</p>
                                    <p>{element.post2}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <hr></hr>
                <div className="leadership_level_two">
                    <h2>Quanto Panel Team</h2>
                    <div className="leadership_level_two_details">
                        {QuantoPanelTeam.map((element, index) => {
                            return (
                                <div className="leadership_level_two_details_sections">
                                    <img src={element.image} alt={`${element.name}`} />
                                    <h2>{element.name}</h2>
                                    <p>{element.post1}</p>
                                    <p>{element.post2}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <hr></hr>
                <div className="leadership_level_two">
                    <h2>Corporate Functions Team</h2>
                    <div className="leadership_level_two_details">
                        {corporateFunctionsTeam.map((element, index) => {
                            return (
                                <div className="leadership_level_two_details_sections">
                                    <img src={element.image} alt={`${element.name}`} />
                                    <h2>{element.name}</h2>
                                    <p>{element.post1}</p>
                                    <p>{element.post2}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Leadership;
