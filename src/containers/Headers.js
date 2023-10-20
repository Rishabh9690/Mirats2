import react, { useEffect, useState } from 'react';
import "./headers.css"
import { useNavigate } from 'react-router-dom';
import Modal from "react-modal";
import { setAppElement } from "react-modal";
import image13 from "./headerImgs/image13.jpg";

const Header = () => {
    const navigate = useNavigate();
    const [isNavBar, setIsNavBar] =useState(false);
    const [serviceSubListToShow, setServiceSubListToShow]= useState([])

    const handleNavBar=()=>{
        console.log("Inside handleNavBar");
        setIsNavBar(true);
    }
    const serviceList=[{
        listOne: "Qualitative Solution",
        listTwo: "Quantitive Solution",
        listThree: "Specialist Solution"
    }]
    const serviceSubList=[{
        subListOne: "Online Surveys",
        subListTwo: "DIY Surveys",
        subListThree: "Global Sample Surveys",
        subListFour: "Global Quantitative Fieldwork",
        subListFive: "End to End Sample Service",
    },{
        subListOne: "In-Person Qual",
        subListTwo: "Digital Qual",
        subListThree: "Telephonic Qual",
        subListFour: "Global Qual Solution",
        subListFive: "",
    },{
        subListOne: "Recruitment Solution",
        subListTwo: "Consulting Solution",
        subListThree: "Hybrid Research Solution",
        subListFour: "Product Test",
        subListFive: "Transcription Services",
    }]

    const handleServiceBar=()=>{
        handleNavBar();
    }

    const handleSubList=(e)=>{
        e.preventDefault();
        const index= Number(e.currentTarget.id);
        console.log('Clicked here', index)
        setServiceSubListToShow([{
            subListOne: serviceSubList[index].subListOne,
            subListTwo: serviceSubList[index].subListTwo,
            subListThree: serviceSubList[index].subListThree,
            subListFour: serviceSubList[index].subListFour,
            subListFive: serviceSubList[index].subListFive,
        }]);
        console.log("Data===", serviceSubListToShow);
    }

    return (
        <>
            <div className='nav_head row'>
                <div className='col'>
                    <img className='image_mirats' src={image13} alt='logo_image' />
                </div>
                <div className='col-6'>
                    <ul className='nav_titles'>
                        <li className='nav_list' onClick={() => navigate('/')}>Home</li>
                        <li className='nav_list' onClick={handleServiceBar}>Services</li>
                        <li className='nav_list'>Industry</li>
                        <li className='nav_list'>Company</li>
                        <li className='nav_list'>Resources</li>
                        <li className='nav_list'>Contacts</li>
                    </ul>
                </div>
                <div className='col'>
                    <button className='nav_btn'>Book a call</button>
                </div>
            </div>
                {isNavBar?
                <>
                    <div className='nav_bar_extention_body'>
                        <div className='nav_bar_extention_serive_list'>
                            <p>Services</p>
                            {serviceList.map((element, index)=>{
                                return(
                                    <ul id={index} key={index}>
                                        <li onClick={handleSubList}>{element.listOne}</li>
                                        <li onClick={handleSubList}>{element.listTwo}</li>
                                        <li onClick={handleSubList}>{element.listThree}</li>
                                    </ul>
                                )
                            })}
                        </div>
                        <div className='nav_bar_extention_serive_sub_list'>
                            <p>Specialist Solution</p>
                            {serviceSubListToShow.map((element, index)=>{
                                return(
                                    <ul id={index} key={index}>
                                        <li>{element.subListOne}</li>
                                        <li>{element.subListTwo}</li>
                                        <li>{element.subListThree}</li>
                                        <li>{element.subListFour}</li>
                                        <li>{element.subListFive}</li>
                                    </ul>
                                )
                            })}
                        </div>

                    </div>
                </>
                :
                <></>}
        </>
    )
}
export default Header;