import React from "react";
import banner from "../../images/banners/searchJobs.png";
import Modal from 'react-modal';

import"./jobSearch.css";

const JobSearch=()=>{
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

    const handleJobDetails=(e)=>{
        e.preventDefault();
        const id= e.currentTarget.id;
        console.log("Here is the Id", id);
    }

    return(
        <div className="job_search_body">
            <div className="job_search_level_one">
                <img src={banner} alt="banner" />
            </div>
            <div className="job_search_levels">
                <div className="job_search_level_two">
                    <h2>Browse Open Positions</h2>
                </div>
                <div className="job_search_level_three_parent_map">
                    {jobs.map((job, index)=>{
                        return(
                            <div key={index} id={index} onClick={(e)=>handleJobDetails(e)} className="job_search_level_three_child">
                                <h2>{job.title}</h2>
                                <h4>{job.department}</h4>
                                <table>
                                    <tr>
                                        <th>Role Type</th>
                                        <th>Experience</th>
                                    </tr>
                                    <tr>
                                        <td>{job.roleType}</td>
                                        <td>{job.experience}</td>
                                    </tr>
                                </table>
                                <p>Post Date: {job.date}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default JobSearch;