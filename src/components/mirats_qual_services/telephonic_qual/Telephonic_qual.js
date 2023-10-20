import React, { useEffect, useState } from "react";
import banner from "./images/Banner.svg";
import hand_clock from "../../services/service_img/hand_clock.svg";
import image1 from "./images/image1.svg";
import image2 from "./images/image2.svg";
import imageModal1 from "../digital_qual/images/image1.svg";
import imageModal2 from "../digital_qual/images/image2.svg";
import imageModal3 from "../digital_qual/images/image3.svg";
import imageModal4 from "../digital_qual/images/image4.svg";
import imageModal5 from "../digital_qual/images/image5.svg";
import remove from "../in_personal/images/Remove.svg";
import right from "../../services/service_img/right.svg";
import AliceCarousel from 'react-alice-carousel';
import globalqual from "../qual_imgs/globalqual.svg";
import inpersonal from "../qual_imgs/inpersonal.svg";
import digital from "../qual_imgs/digital.svg"; 
import 'react-alice-carousel/lib/alice-carousel.css';
import Modal from "react-modal";
import "./telephonic_qual.css";

const Telephonic_qual= ()=>{

    const [cardIcons, setCardIcons]= useState([]);
    const [cards, setCards] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [secModalIsOpen, setSecModalIsOpen] = useState(false);
    const [modalData, setModalData] = useState({});
    const [qualSurvey, setQualSurvey] = useState([]);
    const [arr, setArr] = useState([]);

    useEffect(()=>{
        setCardIcons([hand_clock]);
        setCards([{
            text: 'Feasibility consulting mus cras dignissim et lacinia sit maecenas. '
        },{
            text: 'Feasibility consulting mus cras dignissim et lacinia sit maecenas. Amet egestas viverra sit vestibulum.'
        },{
            text: 'Feasibility consulting mus cras dignissim et lacinia sit maecenas Amet egestas.'
        }]);
        setQualSurvey([{
            image: globalqual,
            heading: "Global Qual Solution"
        },{
            image: inpersonal,
            heading: "In-Personal Qual"
        },{
            image: digital,
            heading: "Digital Qual"
        }])
    },[])

    const modalArr= [{
        image: imageModal1,
        heading: "Virtual Focus Groups",
        text: `Lorem ipsum dolor sit amet consectetur. Cursus viverra augue est nisl. Gravida sem malesuada egestas justo. Integer mattis eget lorem feugiat. Fringilla enim interdum egestas iaculis sit neque duis nulla viverra. Massa felis vestibulum nunc nulla fringilla eleifend erat. Sed quis laoreet amet arcu. Accumsan metus in egestas eu ornare odio tincidunt in donec. Elit tristique mi dui pretium vel amet interdum massa morbi. Enim cursus neque interdum iaculis pellentesque facilisis vestibulum. Nibh adipiscing aliquam consequat volutpat augue augue. Tellus quis velit ut tortor semper augue proin. Cursus dolor blandit imperdiet cras lacus volutpat. Senectus gravida elementum porttitor ut.
        Amet purus eget integer praesent ipsum. Aliquam volutpat sit ultrices neque. Pharetra non tellus sit magna amet at egestas. Congue volutpat commodo dui maecenas quis aliquam mauris nibh eu. Sit congue nibh convallis nibh metus purus augue. Venenatis sapien aliquam vehicula mattis egestas ipsum eu. Mattis tempus aliquam tempor tempor dictum cum. Tellus morbi nec aliquam fringilla vel. Aliquet ipsum aliquam quam neque. Tristique imperdiet adipiscing ut turpis. Eu quis diam fermentum tellus nunc morbi mollis consequat. Tincidunt nibh ac eget eu. Turpis eleifend placerat metus tincidunt dignissim habitant tincidunt. Viverra risus justo senectus risus amet. In sit ut posuere lorem. 
        Sit vitae non rhoncus eget massa. Elementum nec sit risus et lobortis. Duis nec purus non netus enim gravida dignissim metus. Eget sed blandit a dignissim diam pulvinar id nulla. Ornare in sit enim cursus non vitae condimentum habitasse. Lorem amet mi sed libero. Ut sit sed semper suspendisse. Est senectus amet non felis gravida leo sapien mattis. A cum mattis mi netus maecenas amet. Parturient orci donec suscipit nec adipiscing nec. Sed nibh adipiscing tincidunt pharetra aliquet amet. Fermentum libero adipiscing id malesuada massa platea.
        Nulla pellentesque viverra mi risus. Quisque urna tortor nisi facilisi maecenas. Tellus tincidunt at accumsan id sed bibendum ut mauris. Vitae sit cum turpis fringilla eu ullamcorper. Etiam sagittis amet vestibulum risus fermentum a a sollicitudin nulla. Vitae volutpat pellentesque sed vel pharetra eleifend nulla. Suspendisse id venenatis elit quam viverra faucibus ullamcorper metus. Risus purus aliquet cum placerat posuere fringilla lorem consequat quisque. Enim consectetur sed volutpat lacus cursus. Nec urna ipsum orci eu dui. Gravida montes proin tincidunt sed integer. Lorem gravida habitasse eu elementum venenatis placerat bibendum dignissim et.`
    },{
        image: imageModal2,
        heading: "Online In-Depth Interviews",
        text: `Lorem ipsum dolor sit amet consectetur. Cursus viverra augue est nisl. Gravida sem malesuada egestas justo. Integer mattis eget lorem feugiat. Fringilla enim interdum egestas iaculis sit neque duis nulla viverra. Massa felis vestibulum nunc nulla fringilla eleifend erat. Sed quis laoreet amet arcu. Accumsan metus in egestas eu ornare odio tincidunt in donec. Elit tristique mi dui pretium vel amet interdum massa morbi. Enim cursus neque interdum iaculis pellentesque facilisis vestibulum. Nibh adipiscing aliquam consequat volutpat augue augue. Tellus quis velit ut tortor semper augue proin. Cursus dolor blandit imperdiet cras lacus volutpat. Senectus gravida elementum porttitor ut.
        Amet purus eget integer praesent ipsum. Aliquam volutpat sit ultrices neque. Pharetra non tellus sit magna amet at egestas. Congue volutpat commodo dui maecenas quis aliquam mauris nibh eu. Sit congue nibh convallis nibh metus purus augue. Venenatis sapien aliquam vehicula mattis egestas ipsum eu. Mattis tempus aliquam tempor tempor dictum cum. Tellus morbi nec aliquam fringilla vel. Aliquet ipsum aliquam quam neque. Tristique imperdiet adipiscing ut turpis. Eu quis diam fermentum tellus nunc morbi mollis consequat. Tincidunt nibh ac eget eu. Turpis eleifend placerat metus tincidunt dignissim habitant tincidunt. Viverra risus justo senectus risus amet. In sit ut posuere lorem. 
        Sit vitae non rhoncus eget massa. Elementum nec sit risus et lobortis. Duis nec purus non netus enim gravida dignissim metus. Eget sed blandit a dignissim diam pulvinar id nulla. Ornare in sit enim cursus non vitae condimentum habitasse. Lorem amet mi sed libero. Ut sit sed semper suspendisse. Est senectus amet non felis gravida leo sapien mattis. A cum mattis mi netus maecenas amet. Parturient orci donec suscipit nec adipiscing nec. Sed nibh adipiscing tincidunt pharetra aliquet amet. Fermentum libero adipiscing id malesuada massa platea.
        Nulla pellentesque viverra mi risus. Quisque urna tortor nisi facilisi maecenas. Tellus tincidunt at accumsan id sed bibendum ut mauris. Vitae sit cum turpis fringilla eu ullamcorper. Etiam sagittis amet vestibulum risus fermentum a a sollicitudin nulla. Vitae volutpat pellentesque sed vel pharetra eleifend nulla. Suspendisse id venenatis elit quam viverra faucibus ullamcorper metus. Risus purus aliquet cum placerat posuere fringilla lorem consequat quisque. Enim consectetur sed volutpat lacus cursus. Nec urna ipsum orci eu dui. Gravida montes proin tincidunt sed integer. Lorem gravida habitasse eu elementum venenatis placerat bibendum dignissim et.`
    },{
        image: imageModal3,
        heading: "Digital diaries and ethnography",
        text: `Lorem ipsum dolor sit amet consectetur. Cursus viverra augue est nisl. Gravida sem malesuada egestas justo. Integer mattis eget lorem feugiat. Fringilla enim interdum egestas iaculis sit neque duis nulla viverra. Massa felis vestibulum nunc nulla fringilla eleifend erat. Sed quis laoreet amet arcu. Accumsan metus in egestas eu ornare odio tincidunt in donec. Elit tristique mi dui pretium vel amet interdum massa morbi. Enim cursus neque interdum iaculis pellentesque facilisis vestibulum. Nibh adipiscing aliquam consequat volutpat augue augue. Tellus quis velit ut tortor semper augue proin. Cursus dolor blandit imperdiet cras lacus volutpat. Senectus gravida elementum porttitor ut.
        Amet purus eget integer praesent ipsum. Aliquam volutpat sit ultrices neque. Pharetra non tellus sit magna amet at egestas. Congue volutpat commodo dui maecenas quis aliquam mauris nibh eu. Sit congue nibh convallis nibh metus purus augue. Venenatis sapien aliquam vehicula mattis egestas ipsum eu. Mattis tempus aliquam tempor tempor dictum cum. Tellus morbi nec aliquam fringilla vel. Aliquet ipsum aliquam quam neque. Tristique imperdiet adipiscing ut turpis. Eu quis diam fermentum tellus nunc morbi mollis consequat. Tincidunt nibh ac eget eu. Turpis eleifend placerat metus tincidunt dignissim habitant tincidunt. Viverra risus justo senectus risus amet. In sit ut posuere lorem. 
        Sit vitae non rhoncus eget massa. Elementum nec sit risus et lobortis. Duis nec purus non netus enim gravida dignissim metus. Eget sed blandit a dignissim diam pulvinar id nulla. Ornare in sit enim cursus non vitae condimentum habitasse. Lorem amet mi sed libero. Ut sit sed semper suspendisse. Est senectus amet non felis gravida leo sapien mattis. A cum mattis mi netus maecenas amet. Parturient orci donec suscipit nec adipiscing nec. Sed nibh adipiscing tincidunt pharetra aliquet amet. Fermentum libero adipiscing id malesuada massa platea.
        Nulla pellentesque viverra mi risus. Quisque urna tortor nisi facilisi maecenas. Tellus tincidunt at accumsan id sed bibendum ut mauris. Vitae sit cum turpis fringilla eu ullamcorper. Etiam sagittis amet vestibulum risus fermentum a a sollicitudin nulla. Vitae volutpat pellentesque sed vel pharetra eleifend nulla. Suspendisse id venenatis elit quam viverra faucibus ullamcorper metus. Risus purus aliquet cum placerat posuere fringilla lorem consequat quisque. Enim consectetur sed volutpat lacus cursus. Nec urna ipsum orci eu dui. Gravida montes proin tincidunt sed integer. Lorem gravida habitasse eu elementum venenatis placerat bibendum dignissim et.`
    },{
        image: imageModal4,
        heading: "Online Communities and bulletin boards",
        text: `Lorem ipsum dolor sit amet consectetur. Cursus viverra augue est nisl. Gravida sem malesuada egestas justo. Integer mattis eget lorem feugiat. Fringilla enim interdum egestas iaculis sit neque duis nulla viverra. Massa felis vestibulum nunc nulla fringilla eleifend erat. Sed quis laoreet amet arcu. Accumsan metus in egestas eu ornare odio tincidunt in donec. Elit tristique mi dui pretium vel amet interdum massa morbi. Enim cursus neque interdum iaculis pellentesque facilisis vestibulum. Nibh adipiscing aliquam consequat volutpat augue augue. Tellus quis velit ut tortor semper augue proin. Cursus dolor blandit imperdiet cras lacus volutpat. Senectus gravida elementum porttitor ut.
        Amet purus eget integer praesent ipsum. Aliquam volutpat sit ultrices neque. Pharetra non tellus sit magna amet at egestas. Congue volutpat commodo dui maecenas quis aliquam mauris nibh eu. Sit congue nibh convallis nibh metus purus augue. Venenatis sapien aliquam vehicula mattis egestas ipsum eu. Mattis tempus aliquam tempor tempor dictum cum. Tellus morbi nec aliquam fringilla vel. Aliquet ipsum aliquam quam neque. Tristique imperdiet adipiscing ut turpis. Eu quis diam fermentum tellus nunc morbi mollis consequat. Tincidunt nibh ac eget eu. Turpis eleifend placerat metus tincidunt dignissim habitant tincidunt. Viverra risus justo senectus risus amet. In sit ut posuere lorem. 
        Sit vitae non rhoncus eget massa. Elementum nec sit risus et lobortis. Duis nec purus non netus enim gravida dignissim metus. Eget sed blandit a dignissim diam pulvinar id nulla. Ornare in sit enim cursus non vitae condimentum habitasse. Lorem amet mi sed libero. Ut sit sed semper suspendisse. Est senectus amet non felis gravida leo sapien mattis. A cum mattis mi netus maecenas amet. Parturient orci donec suscipit nec adipiscing nec. Sed nibh adipiscing tincidunt pharetra aliquet amet. Fermentum libero adipiscing id malesuada massa platea.
        Nulla pellentesque viverra mi risus. Quisque urna tortor nisi facilisi maecenas. Tellus tincidunt at accumsan id sed bibendum ut mauris. Vitae sit cum turpis fringilla eu ullamcorper. Etiam sagittis amet vestibulum risus fermentum a a sollicitudin nulla. Vitae volutpat pellentesque sed vel pharetra eleifend nulla. Suspendisse id venenatis elit quam viverra faucibus ullamcorper metus. Risus purus aliquet cum placerat posuere fringilla lorem consequat quisque. Enim consectetur sed volutpat lacus cursus. Nec urna ipsum orci eu dui. Gravida montes proin tincidunt sed integer. Lorem gravida habitasse eu elementum venenatis placerat bibendum dignissim et.`
    },{
        image: imageModal5,
        heading: "Advanced analytical and reporting tools",
        text: `Lorem ipsum dolor sit amet consectetur. Cursus viverra augue est nisl. Gravida sem malesuada egestas justo. Integer mattis eget lorem feugiat. Fringilla enim interdum egestas iaculis sit neque duis nulla viverra. Massa felis vestibulum nunc nulla fringilla eleifend erat. Sed quis laoreet amet arcu. Accumsan metus in egestas eu ornare odio tincidunt in donec. Elit tristique mi dui pretium vel amet interdum massa morbi. Enim cursus neque interdum iaculis pellentesque facilisis vestibulum. Nibh adipiscing aliquam consequat volutpat augue augue. Tellus quis velit ut tortor semper augue proin. Cursus dolor blandit imperdiet cras lacus volutpat. Senectus gravida elementum porttitor ut.
        Amet purus eget integer praesent ipsum. Aliquam volutpat sit ultrices neque. Pharetra non tellus sit magna amet at egestas. Congue volutpat commodo dui maecenas quis aliquam mauris nibh eu. Sit congue nibh convallis nibh metus purus augue. Venenatis sapien aliquam vehicula mattis egestas ipsum eu. Mattis tempus aliquam tempor tempor dictum cum. Tellus morbi nec aliquam fringilla vel. Aliquet ipsum aliquam quam neque. Tristique imperdiet adipiscing ut turpis. Eu quis diam fermentum tellus nunc morbi mollis consequat. Tincidunt nibh ac eget eu. Turpis eleifend placerat metus tincidunt dignissim habitant tincidunt. Viverra risus justo senectus risus amet. In sit ut posuere lorem. 
        Sit vitae non rhoncus eget massa. Elementum nec sit risus et lobortis. Duis nec purus non netus enim gravida dignissim metus. Eget sed blandit a dignissim diam pulvinar id nulla. Ornare in sit enim cursus non vitae condimentum habitasse. Lorem amet mi sed libero. Ut sit sed semper suspendisse. Est senectus amet non felis gravida leo sapien mattis. A cum mattis mi netus maecenas amet. Parturient orci donec suscipit nec adipiscing nec. Sed nibh adipiscing tincidunt pharetra aliquet amet. Fermentum libero adipiscing id malesuada massa platea.
        Nulla pellentesque viverra mi risus. Quisque urna tortor nisi facilisi maecenas. Tellus tincidunt at accumsan id sed bibendum ut mauris. Vitae sit cum turpis fringilla eu ullamcorper. Etiam sagittis amet vestibulum risus fermentum a a sollicitudin nulla. Vitae volutpat pellentesque sed vel pharetra eleifend nulla. Suspendisse id venenatis elit quam viverra faucibus ullamcorper metus. Risus purus aliquet cum placerat posuere fringilla lorem consequat quisque. Enim consectetur sed volutpat lacus cursus. Nec urna ipsum orci eu dui. Gravida montes proin tincidunt sed integer. Lorem gravida habitasse eu elementum venenatis placerat bibendum dignissim et.`
    }];

    const useModal=(e)=>{
        e.preventDefault();
        const index= e.currentTarget.id;
        console.log("Here is the code==========>")
            setModalData({
                image: modalArr[index].image,
                heading: modalArr[index].heading,
                text:  modalArr[index].text,
            })
        handleModalOpen();
    }

    const handleModalOpen=()=>{
        console.log("Inside the handleModalOpen");
        setModalIsOpen(true);
    }
    const handleModalClose=()=>{
        console.log("Inside the handleModalClose");
        setModalIsOpen(false);
        // onRequestClose
    }

    const handleSecModalOpen=()=>{
        console.log("Inside the handleModalOpen");
        setSecModalIsOpen(true);
    }
    const handleSecModalClose=()=>{
        console.log("Inside the handleModalClose");
        setSecModalIsOpen(false);
        // onRequestClose
    }

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };

    const items = [
        <div className="item" data-value="1" id={0} onClick={ useModal }>
            <img src={modalArr[0].image} alt="image1" />
            <h2>{modalArr[0].heading}</h2>
        </div>,
        <div className="item" data-value="2" id={1} onClick={ useModal }>
            <img src={modalArr[1].image} alt="image1" />
            <h2>{modalArr[1].heading}</h2>
        </div>,
        <div className="item" data-value="3" id={2} onClick={ useModal }>
            <img src={modalArr[2].image} alt="image1" />
            <h2>{modalArr[2].heading}</h2>
        </div>,
        <div className="item" data-value="4" id={3} onClick={ useModal }>
            <img src={modalArr[3].image} alt="image1" />
            <h2>{modalArr[3].heading}</h2>
        </div>,
        <div className="item" data-value="5" id={4} onClick={ useModal }>
            <img src={modalArr[4].image} alt="image1" />
            <h2>{modalArr[4].heading}</h2>
        </div>,
    ];

    const survey_redirect= (e)=>{
        e.preventDefault();
        const id= e.currentTarget.id;
        // console.log("here is the id", e.currentTarget.id);
        if(Number(id)===0)
        {
            window.location.replace("/services/globalqual");
        }
        if(Number(id)===1)
        {
            window.location.replace("/services/inpersonalqual");
        }
        if(Number(id)===2)
        {
            window.location.replace("/services/digitalqual");
        }
    }

    const sectionModal=(e)=>{
        e.preventDefault();
        const id= e.currentTarget.id;
        console.log("Inside the section Modal", id);
        if(Number(id)===1)
        {
            console.log("Here inside the section1");
            let temp={
                image: image1,
                title: `Connect with Your Audience`,
                heading: `Inclusive representation in leadership is a powerful driver of progress. At Apple, leaders of all backgrounds are working to grow and develop our next generation of leaders from within.`,
                text: `Lorem ipsum dolor sit amet consectetur. Cursus viverra augue est nisl. Gravida sem malesuada egestas justo. Integer mattis eget lorem feugiat. Fringilla enim interdum egestas iaculis sit neque duis nulla viverra. Massa felis vestibulum nunc nulla fringilla eleifend erat. Sed quis laoreet amet arcu. Accumsan metus in egestas eu ornare odio tincidunt in donec. Elit tristique mi dui pretium vel amet interdum massa morbi. Enim cursus neque interdum iaculis pellentesque facilisis vestibulum. Nibh adipiscing aliquam consequat volutpat augue augue. Tellus quis velit ut tortor semper augue proin. Cursus dolor blandit imperdiet cras lacus volutpat. Senectus gravida elementum porttitor ut.
                Amet purus eget integer praesent ipsum. Aliquam volutpat sit ultrices neque. Pharetra non tellus sit magna amet at egestas. Congue volutpat commodo dui maecenas quis aliquam mauris nibh eu. Sit congue nibh convallis nibh metus purus augue. Venenatis sapien aliquam vehicula mattis egestas ipsum eu. Mattis tempus aliquam tempor tempor dictum cum. Tellus morbi nec aliquam fringilla vel. Aliquet ipsum aliquam quam neque. Tristique imperdiet adipiscing ut turpis. Eu quis diam fermentum tellus nunc morbi mollis consequat. Tincidunt nibh ac eget eu. Turpis eleifend placerat metus tincidunt dignissim habitant tincidunt. Viverra risus justo senectus risus amet. In sit ut posuere lorem. 
                Sit vitae non rhoncus eget massa. Elementum nec sit risus et lobortis. Duis nec purus non netus enim gravida dignissim metus. Eget sed blandit a dignissim diam pulvinar id nulla. Ornare in sit enim cursus non vitae condimentum habitasse. Lorem amet mi sed libero. Ut sit sed semper suspendisse. Est senectus amet non felis gravida leo sapien mattis. A cum mattis mi netus maecenas amet. Parturient orci donec suscipit nec adipiscing nec. Sed nibh adipiscing tincidunt pharetra aliquet amet. Fermentum libero adipiscing id malesuada massa platea.
                Nulla pellentesque viverra mi risus. Quisque urna tortor nisi facilisi maecenas. Tellus tincidunt at accumsan id sed bibendum ut mauris. Vitae sit cum turpis fringilla eu ullamcorper. Etiam sagittis amet vestibulum risus fermentum a a sollicitudin nulla. Vitae volutpat pellentesque sed vel pharetra eleifend nulla. Suspendisse id venenatis elit quam viverra faucibus ullamcorper metus. Risus purus aliquet cum placerat posuere fringilla lorem consequat quisque. Enim consectetur sed volutpat lacus cursus. Nec urna ipsum orci eu dui. Gravida montes proin tincidunt sed integer. Lorem gravida habitasse eu elementum venenatis placerat bibendum dignissim et.`
            }
            setArr(temp);
        }
        if(Number(id)===2)
        {
            console.log("Here inside the section2");
            let temp={
                image: image2,
                title: `Leverage Our Expertise`,
                heading: `Inclusive representation in leadership is a powerful driver of progress. At Apple, leaders of all backgrounds are working to grow and develop our next generation of leaders from within.`,
                text: `Lorem ipsum dolor sit amet consectetur. Cursus viverra augue est nisl. Gravida sem malesuada egestas justo. Integer mattis eget lorem feugiat. Fringilla enim interdum egestas iaculis sit neque duis nulla viverra. Massa felis vestibulum nunc nulla fringilla eleifend erat. Sed quis laoreet amet arcu. Accumsan metus in egestas eu ornare odio tincidunt in donec. Elit tristique mi dui pretium vel amet interdum massa morbi. Enim cursus neque interdum iaculis pellentesque facilisis vestibulum. Nibh adipiscing aliquam consequat volutpat augue augue. Tellus quis velit ut tortor semper augue proin. Cursus dolor blandit imperdiet cras lacus volutpat. Senectus gravida elementum porttitor ut.
                Amet purus eget integer praesent ipsum. Aliquam volutpat sit ultrices neque. Pharetra non tellus sit magna amet at egestas. Congue volutpat commodo dui maecenas quis aliquam mauris nibh eu. Sit congue nibh convallis nibh metus purus augue. Venenatis sapien aliquam vehicula mattis egestas ipsum eu. Mattis tempus aliquam tempor tempor dictum cum. Tellus morbi nec aliquam fringilla vel. Aliquet ipsum aliquam quam neque. Tristique imperdiet adipiscing ut turpis. Eu quis diam fermentum tellus nunc morbi mollis consequat. Tincidunt nibh ac eget eu. Turpis eleifend placerat metus tincidunt dignissim habitant tincidunt. Viverra risus justo senectus risus amet. In sit ut posuere lorem. 
                Sit vitae non rhoncus eget massa. Elementum nec sit risus et lobortis. Duis nec purus non netus enim gravida dignissim metus. Eget sed blandit a dignissim diam pulvinar id nulla. Ornare in sit enim cursus non vitae condimentum habitasse. Lorem amet mi sed libero. Ut sit sed semper suspendisse. Est senectus amet non felis gravida leo sapien mattis. A cum mattis mi netus maecenas amet. Parturient orci donec suscipit nec adipiscing nec. Sed nibh adipiscing tincidunt pharetra aliquet amet. Fermentum libero adipiscing id malesuada massa platea.
                Nulla pellentesque viverra mi risus. Quisque urna tortor nisi facilisi maecenas. Tellus tincidunt at accumsan id sed bibendum ut mauris. Vitae sit cum turpis fringilla eu ullamcorper. Etiam sagittis amet vestibulum risus fermentum a a sollicitudin nulla. Vitae volutpat pellentesque sed vel pharetra eleifend nulla. Suspendisse id venenatis elit quam viverra faucibus ullamcorper metus. Risus purus aliquet cum placerat posuere fringilla lorem consequat quisque. Enim consectetur sed volutpat lacus cursus. Nec urna ipsum orci eu dui. Gravida montes proin tincidunt sed integer. Lorem gravida habitasse eu elementum venenatis placerat bibendum dignissim et.`
            }
            setArr(temp);
        }
        handleSecModalOpen();
        // return(
            // <div className="section_modal_body">
            //     <Modal_sec isOpen={modalIsOpen}>
            //         <div className="section_modal_div">
            //             <div className="section_modal_div_heading">
            //                 <img src={arr[0].image} alt="image" />
            //                 <img src={remove} alt="remove" />
            //                 <h2>{arr[0].title}</h2>
            //             </div>
            //             <div className="section_modal_div_text">
            //                 <h2>{arr[0].heading}</h2>
            //                 <p>{arr[0].text}</p>
            //             </div>
            //         </div>
            //     </Modal_sec>
            // </div>
        // )
    }

    return (
        <div className="telephonic_qual_body">
            <img src={banner} alt="banner" />
            <div className="telephonic_qual__level_two">
                <div className="telephonic_qual__level_two_heading">
                    <h2>Telephonic qual made</h2>
                    <h2>smarter, faster, and easier</h2>
                </div>
                <div className="telephonic_qual__level_two_heading_card_parent">
                    {cards.map((card, index)=>{
                        let i= index<= cardIcons.length-1 ? index: index%cardIcons.length;
                        return(
                            <div className="telephonic_qual__level_two_heading_card_child" key={index} id={'`${index}`'}>
                                <img src={cardIcons[i]} alt="cardIcons" />
                                <h2>{card.text}</h2>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="telephonic_qual__level_three">
                    <div className="telephonic_qual__level_three_heading">
                        <h2>Telephonic<span> interview</span></h2>
                    </div>
                    <div className="telephonic_qual__level_three_sec">
                        <section id={1} onClick={sectionModal}>
                            <img src={image1} alt="image1" />
                            <p>Connect with Your Audience</p>
                        </section>
                        <section id={2} onClick={sectionModal}>
                            <img src={image2} alt="image2" />
                            <p>Leverage Our Expertise</p>
                        </section>
                        {/* <div className="section_modal_body"> */}
                            <Modal isOpen={secModalIsOpen}>
                                <div>
                                    <div className="section_modal_div">
                                        <div className="section_modal_div_heading">
                                            <img src={arr.image} alt="image" />
                                            <img src={remove} alt="remove" onClick={handleSecModalClose}/>
                                            <h2>{arr.title}</h2>
                                        </div>
                                        <div className="section_modal_div_text">
                                            <h2>{arr.heading}</h2>
                                            <p>{arr.text}</p>
                                        </div>
                                    </div>
                                </div>
                            </Modal>
                        {/* </div> */}
                    </div>
            </div>
            <div className="telephonic_qual__level_four">
                <h2>Why us <span>mirats insights ?</span></h2>
                <div className="telephonic_qual__level_four_sliding_info">
                    <AliceCarousel
                        autoPlayStrategy="none"
                        animationDuration={500}
                        animationType="fadeout"
                        infinite
                        touchTracking={false}
                        disableDotsControls
                        buttonsDisabled
                        nextButton={<img src={right} alt="right_button"/>}
                        items={items}
                        responsive={responsive}
                        mouseTracking
                        // paddingLeft={50}
                        // paddingRight={50}
                        controlsStrategy="alternate"
                    />
                    <Modal isOpen={modalIsOpen}> 
                        <div className="telephonic_modal_body">
                            <img src={modalData.image} alt="image" />
                            <img src={remove} alt="remove" onClick={handleModalClose}/>
                            <div className="telephonic_modal_body_paragraph">
                                <h2>{modalData.heading}</h2>
                                <p>{modalData.text}</p>
                            </div>
                        </div>
                    </Modal>
                </div>
            </div>
            <div className="telephonic_qual__level_five">
                <p>Upcoming Surveys</p>
                <div className="telephonic_qual__level_four_heading">
                    <h2>Your favourite upcoming</h2>
                    <h2>Quanlitative Solution</h2>
                </div>
                <div className="telephonic_qual__level_four_surveys_parent">
                    {qualSurvey.map((element, index)=>{
                        return(
                            <div className="telephonic_qual__level_four_surveys_child" key={index} id={`${index}`} onClick={survey_redirect}>
                                <img src={element.image} alt="element_image" />
                                <h2>{element.heading}</h2>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Telephonic_qual;