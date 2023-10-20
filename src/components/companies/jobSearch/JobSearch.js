import React from "react";
import banner from "./images/Banner.png";
import Modal from 'react-modal';

import"./jobSearch.css";

const jobs=[{
    title: "Ui / Ux Designer and Product Designer",
    department: "Design Department",
    roleType: "Full Time",
    experience: "1-3 Year",
    date: "02 Jan 2023"
},{
    title: "Ui / Ux Designer and Product Designer",
    department: "Design Department",
    roleType: "Internship",
    experience: "1-3 Year",
    date: "02 Jan 2023"
},{
    title: "Ui / Ux Designer and Product Designer",
    department: "Design Department",
    roleType: "Internship",
    experience: "1-3 Year",
    date: "02 Jan 2023"
},{
    title: "Ui / Ux Designer and Product Designer",
    department: "Design Department",
    roleType: "Internship",
    experience: "1-3 Year",
    date: "02 Jan 2023"
},{
    title: "Ui / Ux Designer and Product Designer",
    department: "Design Department",
    roleType: "Internship",
    experience: "1-3 Year",
    date: "02 Jan 2023"
},{
    title: "Ui / Ux Designer and Product Designer",
    department: "Design Department",
    roleType: "Internship",
    experience: "1-3 Year",
    date: "02 Jan 2023"
},{
    title: "Ui / Ux Designer and Product Designer",
    department: "Design Department",
    roleType: "Part Time",
    experience: "1-3 Year",
    date: "02 Jan 2023"
},{
    title: "Ui / Ux Designer and Product Designer",
    department: "Design Department",
    roleType: "Part Time",
    experience: "1-3 Year",
    date: "02 Jan 2023"
},{
    title: "Ui / Ux Designer and Product Designer",
    department: "Design Department",
    roleType: "Full Time",
    experience: "1-3 Year",
    date: "02 Jan 2023"
}]

const JobSearch=()=>{

    return(
        <div className="job_search_body">
            <div className="job_search_level_one">
                <img src={banner} alt="banner" />
            </div>
            <div className="job_search_levels">
                <div className="job_search_level_two">
                    <h2>Browse Open Positions</h2>
                </div>
            </div>
        </div>
    )
}

export default JobSearch;