import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import remove from "../images/images/Remove.png";
import right from "../images/images/right.png";
import Modal from "react-modal";
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';
import "./slidingModals.css";

const SlidingModals = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalData, setModalData] = useState({});

    const slidingModalHeading = props.slidingModalHeading;
    const slidingModalData = props.slidingModalData;

    const responsiveList = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        }
    };

    const handleModal = (e) => {
        e.preventDefault();
        const id= e.currentTarget.id;
        console.log("Here is the code1==========>", id);
        setModalData({
            image: slidingModalData[id].image,
            heading: slidingModalData[id].heading,
            text: slidingModalData[id].text,
        });
        console.log("Here is the code==========>", id);
        handleModalOpen();
    }

    const handleModalOpen = () => {
        console.log("Inside the handleModalOpen");
        setModalIsOpen(true);
    };
    const handleModalClose = () => {
        console.log("Inside the handleModalClose");
        setModalIsOpen(false);
        // onRequestClose
    };

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };
    const items = [
        <div className="item" data-value="1" id={0} onClick={(e) => { handleModal(e) }}>
            <img src={slidingModalData[0].image} alt="image1" />
            <h2>{slidingModalData[0].heading}</h2>
        </div>,
        <div className="item" data-value="2" id={1} onClick={(e) => { handleModal(e) }}>
            <img src={slidingModalData[1].image} alt="image1" />
            <h2>{slidingModalData[1].heading}</h2>
        </div>,
        <div className="item" data-value="3" id={2} onClick={(e) => { handleModal(e) }}>
            <img src={slidingModalData[2].image} alt="image1" />
            <h2>{slidingModalData[2].heading}</h2>
        </div>,
        <div className="item" data-value="4" id={3} onClick={(e) => { handleModal(e) }}>
            <img src={slidingModalData[3].image} alt="image1" />
            <h2>{slidingModalData[3].heading}</h2>
        </div>,
        <div className="item" data-value="5" id={4} onClick={(e) => { handleModal(e) }}>
            <img src={slidingModalData[4].image} alt="image1" />
            <h2>{slidingModalData[4].heading}</h2>
        </div>,
    ];

    return (
        <div className="sliding_modal_body">
            <section className="sliding_modal_body_heading">
                <h1>{slidingModalHeading[0]} <span>{slidingModalHeading[1]}</span></h1>
            </section>
            <AliceCarousel
                autoPlayStrategy="none"
                animationDuration={500}
                animationType="fadeout"
                infinite
                touchTracking={false}
                disableDotsControls
                buttonsDisabled
                nextButton={<img src={right} alt="right_button" />}
                items={items}
                responsive={responsive}
                mouseTracking
                controlsStrategy="alternate"
            />
            <Modal isOpen={modalIsOpen}>
                <div className="modal_body">
                    <img src={modalData.image} alt="image" />
                    <img src={remove} alt="remove" onClick={handleModalClose} />
                    <div className="modal_body_paragraph">
                        <h2>{modalData.heading}</h2>
                        <p>{modalData.text}</p>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default SlidingModals;