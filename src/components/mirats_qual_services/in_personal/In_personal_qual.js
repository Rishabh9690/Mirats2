import React, { useEffect, useState } from "react";
import in_personal_banner from "./images/in_personal_banner.svg";
import hand_clock from "../../services/service_img/hand_clock.svg";
import image1 from "./images/image1.svg";
import image2 from "./images/image2.svg";
import image3 from "./images/image3.svg";
import image4 from "./images/image4.svg";
import image5 from "./images/image5.svg";
import remove from "./images/Remove.svg";
import left from "../../services/service_img/left.svg";
import right from "../../services/service_img/right.svg";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Modal from "react-modal";
import digital from "../qual_imgs/digital.svg";
import globalqual from "../qual_imgs/globalqual.svg";
import telephonic from "../qual_imgs/telephonic.svg";
import plus from "./images/plus.png";
import cross from "./images/cross.png";

import "./in_personal_qual.css";
const In_personal_qual = () => {
  const [cardIcons, setCardIcons] = useState([]);
  const [cards, setCards] = useState([]);
  const [qualSurvey, setQualSurvey] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const [ques1, setQues1] = useState(false);
  const [ques2, setQues2] = useState(false);
  const [ques3, setQues3] = useState(false);
  const [ques4, setQues4] = useState(false);

  useEffect(() => {
    setCardIcons([hand_clock]);
    setCards([
      {
        text: "Feasibility consulting mus cras dignissim et lacinia sit maecenas. ",
      },
      {
        text: "Feasibility consulting mus cras dignissim et lacinia sit maecenas. Amet egestas viverra sit vestibulum.",
      },
      {
        text: "Feasibility consulting mus cras dignissim et lacinia sit maecenas Amet egestas.",
      },
    ]);

    setQualSurvey([
      {
        image: digital,
        heading: "Digital Qual",
      },
      {
        image: telephonic,
        heading: "Telephonic Qual",
      },
      {
        image: globalqual,
        heading: "Global Qual Solution",
      },
    ]);
  }, []);

  const modalArr = [
    {
      image: image1,
      heading: "Rich Face-to-Face Interaction",
      text: `Lorem ipsum dolor sit amet consectetur. Cursus viverra augue est nisl. Gravida sem malesuada egestas justo. Integer mattis eget lorem feugiat. Fringilla enim interdum egestas iaculis sit neque duis nulla viverra. Massa felis vestibulum nunc nulla fringilla eleifend erat. Sed quis laoreet amet arcu. Accumsan metus in egestas eu ornare odio tincidunt in donec. Elit tristique mi dui pretium vel amet interdum massa morbi. Enim cursus neque interdum iaculis pellentesque facilisis vestibulum. Nibh adipiscing aliquam consequat volutpat augue augue. Tellus quis velit ut tortor semper augue proin. Cursus dolor blandit imperdiet cras lacus volutpat. Senectus gravida elementum porttitor ut.
        Amet purus eget integer praesent ipsum. Aliquam volutpat sit ultrices neque. Pharetra non tellus sit magna amet at egestas. Congue volutpat commodo dui maecenas quis aliquam mauris nibh eu. Sit congue nibh convallis nibh metus purus augue. Venenatis sapien aliquam vehicula mattis egestas ipsum eu. Mattis tempus aliquam tempor tempor dictum cum. Tellus morbi nec aliquam fringilla vel. Aliquet ipsum aliquam quam neque. Tristique imperdiet adipiscing ut turpis. Eu quis diam fermentum tellus nunc morbi mollis consequat. Tincidunt nibh ac eget eu. Turpis eleifend placerat metus tincidunt dignissim habitant tincidunt. Viverra risus justo senectus risus amet. In sit ut posuere lorem. 
        Sit vitae non rhoncus eget massa. Elementum nec sit risus et lobortis. Duis nec purus non netus enim gravida dignissim metus. Eget sed blandit a dignissim diam pulvinar id nulla. Ornare in sit enim cursus non vitae condimentum habitasse. Lorem amet mi sed libero. Ut sit sed semper suspendisse. Est senectus amet non felis gravida leo sapien mattis. A cum mattis mi netus maecenas amet. Parturient orci donec suscipit nec adipiscing nec. Sed nibh adipiscing tincidunt pharetra aliquet amet. Fermentum libero adipiscing id malesuada massa platea.
        Nulla pellentesque viverra mi risus. Quisque urna tortor nisi facilisi maecenas. Tellus tincidunt at accumsan id sed bibendum ut mauris. Vitae sit cum turpis fringilla eu ullamcorper. Etiam sagittis amet vestibulum risus fermentum a a sollicitudin nulla. Vitae volutpat pellentesque sed vel pharetra eleifend nulla. Suspendisse id venenatis elit quam viverra faucibus ullamcorper metus. Risus purus aliquet cum placerat posuere fringilla lorem consequat quisque. Enim consectetur sed volutpat lacus cursus. Nec urna ipsum orci eu dui. Gravida montes proin tincidunt sed integer. Lorem gravida habitasse eu elementum venenatis placerat bibendum dignissim et.`,
    },
    {
      image: image2,
      heading: "Skilled Moderation and Facilitation",
      text: `Lorem ipsum dolor sit amet consectetur. Cursus viverra augue est nisl. Gravida sem malesuada egestas justo. Integer mattis eget lorem feugiat. Fringilla enim interdum egestas iaculis sit neque duis nulla viverra. Massa felis vestibulum nunc nulla fringilla eleifend erat. Sed quis laoreet amet arcu. Accumsan metus in egestas eu ornare odio tincidunt in donec. Elit tristique mi dui pretium vel amet interdum massa morbi. Enim cursus neque interdum iaculis pellentesque facilisis vestibulum. Nibh adipiscing aliquam consequat volutpat augue augue. Tellus quis velit ut tortor semper augue proin. Cursus dolor blandit imperdiet cras lacus volutpat. Senectus gravida elementum porttitor ut.
        Amet purus eget integer praesent ipsum. Aliquam volutpat sit ultrices neque. Pharetra non tellus sit magna amet at egestas. Congue volutpat commodo dui maecenas quis aliquam mauris nibh eu. Sit congue nibh convallis nibh metus purus augue. Venenatis sapien aliquam vehicula mattis egestas ipsum eu. Mattis tempus aliquam tempor tempor dictum cum. Tellus morbi nec aliquam fringilla vel. Aliquet ipsum aliquam quam neque. Tristique imperdiet adipiscing ut turpis. Eu quis diam fermentum tellus nunc morbi mollis consequat. Tincidunt nibh ac eget eu. Turpis eleifend placerat metus tincidunt dignissim habitant tincidunt. Viverra risus justo senectus risus amet. In sit ut posuere lorem. 
        Sit vitae non rhoncus eget massa. Elementum nec sit risus et lobortis. Duis nec purus non netus enim gravida dignissim metus. Eget sed blandit a dignissim diam pulvinar id nulla. Ornare in sit enim cursus non vitae condimentum habitasse. Lorem amet mi sed libero. Ut sit sed semper suspendisse. Est senectus amet non felis gravida leo sapien mattis. A cum mattis mi netus maecenas amet. Parturient orci donec suscipit nec adipiscing nec. Sed nibh adipiscing tincidunt pharetra aliquet amet. Fermentum libero adipiscing id malesuada massa platea.
        Nulla pellentesque viverra mi risus. Quisque urna tortor nisi facilisi maecenas. Tellus tincidunt at accumsan id sed bibendum ut mauris. Vitae sit cum turpis fringilla eu ullamcorper. Etiam sagittis amet vestibulum risus fermentum a a sollicitudin nulla. Vitae volutpat pellentesque sed vel pharetra eleifend nulla. Suspendisse id venenatis elit quam viverra faucibus ullamcorper metus. Risus purus aliquet cum placerat posuere fringilla lorem consequat quisque. Enim consectetur sed volutpat lacus cursus. Nec urna ipsum orci eu dui. Gravida montes proin tincidunt sed integer. Lorem gravida habitasse eu elementum venenatis placerat bibendum dignissim et.`,
    },
    {
      image: image3,
      heading: "Tailored Research Approches",
      text: `Lorem ipsum dolor sit amet consectetur. Cursus viverra augue est nisl. Gravida sem malesuada egestas justo. Integer mattis eget lorem feugiat. Fringilla enim interdum egestas iaculis sit neque duis nulla viverra. Massa felis vestibulum nunc nulla fringilla eleifend erat. Sed quis laoreet amet arcu. Accumsan metus in egestas eu ornare odio tincidunt in donec. Elit tristique mi dui pretium vel amet interdum massa morbi. Enim cursus neque interdum iaculis pellentesque facilisis vestibulum. Nibh adipiscing aliquam consequat volutpat augue augue. Tellus quis velit ut tortor semper augue proin. Cursus dolor blandit imperdiet cras lacus volutpat. Senectus gravida elementum porttitor ut.
        Amet purus eget integer praesent ipsum. Aliquam volutpat sit ultrices neque. Pharetra non tellus sit magna amet at egestas. Congue volutpat commodo dui maecenas quis aliquam mauris nibh eu. Sit congue nibh convallis nibh metus purus augue. Venenatis sapien aliquam vehicula mattis egestas ipsum eu. Mattis tempus aliquam tempor tempor dictum cum. Tellus morbi nec aliquam fringilla vel. Aliquet ipsum aliquam quam neque. Tristique imperdiet adipiscing ut turpis. Eu quis diam fermentum tellus nunc morbi mollis consequat. Tincidunt nibh ac eget eu. Turpis eleifend placerat metus tincidunt dignissim habitant tincidunt. Viverra risus justo senectus risus amet. In sit ut posuere lorem. 
        Sit vitae non rhoncus eget massa. Elementum nec sit risus et lobortis. Duis nec purus non netus enim gravida dignissim metus. Eget sed blandit a dignissim diam pulvinar id nulla. Ornare in sit enim cursus non vitae condimentum habitasse. Lorem amet mi sed libero. Ut sit sed semper suspendisse. Est senectus amet non felis gravida leo sapien mattis. A cum mattis mi netus maecenas amet. Parturient orci donec suscipit nec adipiscing nec. Sed nibh adipiscing tincidunt pharetra aliquet amet. Fermentum libero adipiscing id malesuada massa platea.
        Nulla pellentesque viverra mi risus. Quisque urna tortor nisi facilisi maecenas. Tellus tincidunt at accumsan id sed bibendum ut mauris. Vitae sit cum turpis fringilla eu ullamcorper. Etiam sagittis amet vestibulum risus fermentum a a sollicitudin nulla. Vitae volutpat pellentesque sed vel pharetra eleifend nulla. Suspendisse id venenatis elit quam viverra faucibus ullamcorper metus. Risus purus aliquet cum placerat posuere fringilla lorem consequat quisque. Enim consectetur sed volutpat lacus cursus. Nec urna ipsum orci eu dui. Gravida montes proin tincidunt sed integer. Lorem gravida habitasse eu elementum venenatis placerat bibendum dignissim et.`,
    },
    {
      image: image4,
      heading: "Comprehensive Logistics Management",
      text: `Lorem ipsum dolor sit amet consectetur. Cursus viverra augue est nisl. Gravida sem malesuada egestas justo. Integer mattis eget lorem feugiat. Fringilla enim interdum egestas iaculis sit neque duis nulla viverra. Massa felis vestibulum nunc nulla fringilla eleifend erat. Sed quis laoreet amet arcu. Accumsan metus in egestas eu ornare odio tincidunt in donec. Elit tristique mi dui pretium vel amet interdum massa morbi. Enim cursus neque interdum iaculis pellentesque facilisis vestibulum. Nibh adipiscing aliquam consequat volutpat augue augue. Tellus quis velit ut tortor semper augue proin. Cursus dolor blandit imperdiet cras lacus volutpat. Senectus gravida elementum porttitor ut.
        Amet purus eget integer praesent ipsum. Aliquam volutpat sit ultrices neque. Pharetra non tellus sit magna amet at egestas. Congue volutpat commodo dui maecenas quis aliquam mauris nibh eu. Sit congue nibh convallis nibh metus purus augue. Venenatis sapien aliquam vehicula mattis egestas ipsum eu. Mattis tempus aliquam tempor tempor dictum cum. Tellus morbi nec aliquam fringilla vel. Aliquet ipsum aliquam quam neque. Tristique imperdiet adipiscing ut turpis. Eu quis diam fermentum tellus nunc morbi mollis consequat. Tincidunt nibh ac eget eu. Turpis eleifend placerat metus tincidunt dignissim habitant tincidunt. Viverra risus justo senectus risus amet. In sit ut posuere lorem. 
        Sit vitae non rhoncus eget massa. Elementum nec sit risus et lobortis. Duis nec purus non netus enim gravida dignissim metus. Eget sed blandit a dignissim diam pulvinar id nulla. Ornare in sit enim cursus non vitae condimentum habitasse. Lorem amet mi sed libero. Ut sit sed semper suspendisse. Est senectus amet non felis gravida leo sapien mattis. A cum mattis mi netus maecenas amet. Parturient orci donec suscipit nec adipiscing nec. Sed nibh adipiscing tincidunt pharetra aliquet amet. Fermentum libero adipiscing id malesuada massa platea.
        Nulla pellentesque viverra mi risus. Quisque urna tortor nisi facilisi maecenas. Tellus tincidunt at accumsan id sed bibendum ut mauris. Vitae sit cum turpis fringilla eu ullamcorper. Etiam sagittis amet vestibulum risus fermentum a a sollicitudin nulla. Vitae volutpat pellentesque sed vel pharetra eleifend nulla. Suspendisse id venenatis elit quam viverra faucibus ullamcorper metus. Risus purus aliquet cum placerat posuere fringilla lorem consequat quisque. Enim consectetur sed volutpat lacus cursus. Nec urna ipsum orci eu dui. Gravida montes proin tincidunt sed integer. Lorem gravida habitasse eu elementum venenatis placerat bibendum dignissim et.`,
    },
    {
      image: image5,
      heading: "In-depth Data Analysis and Reporting",
      text: `Lorem ipsum dolor sit amet consectetur. Cursus viverra augue est nisl. Gravida sem malesuada egestas justo. Integer mattis eget lorem feugiat. Fringilla enim interdum egestas iaculis sit neque duis nulla viverra. Massa felis vestibulum nunc nulla fringilla eleifend erat. Sed quis laoreet amet arcu. Accumsan metus in egestas eu ornare odio tincidunt in donec. Elit tristique mi dui pretium vel amet interdum massa morbi. Enim cursus neque interdum iaculis pellentesque facilisis vestibulum. Nibh adipiscing aliquam consequat volutpat augue augue. Tellus quis velit ut tortor semper augue proin. Cursus dolor blandit imperdiet cras lacus volutpat. Senectus gravida elementum porttitor ut.
        Amet purus eget integer praesent ipsum. Aliquam volutpat sit ultrices neque. Pharetra non tellus sit magna amet at egestas. Congue volutpat commodo dui maecenas quis aliquam mauris nibh eu. Sit congue nibh convallis nibh metus purus augue. Venenatis sapien aliquam vehicula mattis egestas ipsum eu. Mattis tempus aliquam tempor tempor dictum cum. Tellus morbi nec aliquam fringilla vel. Aliquet ipsum aliquam quam neque. Tristique imperdiet adipiscing ut turpis. Eu quis diam fermentum tellus nunc morbi mollis consequat. Tincidunt nibh ac eget eu. Turpis eleifend placerat metus tincidunt dignissim habitant tincidunt. Viverra risus justo senectus risus amet. In sit ut posuere lorem. 
        Sit vitae non rhoncus eget massa. Elementum nec sit risus et lobortis. Duis nec purus non netus enim gravida dignissim metus. Eget sed blandit a dignissim diam pulvinar id nulla. Ornare in sit enim cursus non vitae condimentum habitasse. Lorem amet mi sed libero. Ut sit sed semper suspendisse. Est senectus amet non felis gravida leo sapien mattis. A cum mattis mi netus maecenas amet. Parturient orci donec suscipit nec adipiscing nec. Sed nibh adipiscing tincidunt pharetra aliquet amet. Fermentum libero adipiscing id malesuada massa platea.
        Nulla pellentesque viverra mi risus. Quisque urna tortor nisi facilisi maecenas. Tellus tincidunt at accumsan id sed bibendum ut mauris. Vitae sit cum turpis fringilla eu ullamcorper. Etiam sagittis amet vestibulum risus fermentum a a sollicitudin nulla. Vitae volutpat pellentesque sed vel pharetra eleifend nulla. Suspendisse id venenatis elit quam viverra faucibus ullamcorper metus. Risus purus aliquet cum placerat posuere fringilla lorem consequat quisque. Enim consectetur sed volutpat lacus cursus. Nec urna ipsum orci eu dui. Gravida montes proin tincidunt sed integer. Lorem gravida habitasse eu elementum venenatis placerat bibendum dignissim et.`,
    },
  ];

  const useModal = (e) => {
    e.preventDefault();
    const index = e.currentTarget.id;
    console.log("Here is the code==========>");
    if (index == 0) {
      setModalData({
        image: modalArr[index].image,
        heading: modalArr[index].heading,
        text: modalArr[index].text,
      });
    }
    if (index == 1) {
      setModalData({
        image: modalArr[index].image,
        heading: modalArr[index].heading,
        text: modalArr[index].text,
      });
    }
    if (index == 2) {
      setModalData({
        image: modalArr[index].image,
        heading: modalArr[index].heading,
        text: modalArr[index].text,
      });
    }
    if (index == 3) {
      setModalData({
        image: modalArr[index].image,
        heading: modalArr[index].heading,
        text: modalArr[index].text,
      });
    }
    if (index == 4) {
      setModalData({
        image: modalArr[index].image,
        heading: modalArr[index].heading,
        text: modalArr[index].text,
      });
    }
    handleModalOpen();
  };

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
    <div className="item" data-value="1" id={0} onClick={useModal}>
      {/* <img src={image1} alt="image1" />
        <h2>Rich Face-to-Face Interaction</h2> */}
      <img src={modalArr[0].image} alt="image1" />
      <h2>{modalArr[0].heading}</h2>
    </div>,
    <div className="item" data-value="2" id={1} onClick={useModal}>
      {/* <img src={image2} alt="image2" />
        <h2>Skilled Moderation and Facilitation</h2> */}
      <img src={modalArr[1].image} alt="image1" />
      <h2>{modalArr[1].heading}</h2>
    </div>,
    <div className="item" data-value="3" id={2} onClick={useModal}>
      {/* <img src={image3} alt="image3" />
        <h2>Tailored Research Approches</h2> */}
      <img src={modalArr[2].image} alt="image1" />
      <h2>{modalArr[2].heading}</h2>
    </div>,
    <div className="item" data-value="4" id={3} onClick={useModal}>
      {/* <img src={image4} alt="image4" />
        <h2>Comprehensive Logistics Management</h2> */}
      <img src={modalArr[3].image} alt="image1" />
      <h2>{modalArr[3].heading}</h2>
    </div>,
    <div className="item" data-value="5" id={4} onClick={useModal}>
      {/* <img src={image5} alt="image5" />
        <h2>In-depth Data Analysis and Reporting</h2> */}
      <img src={modalArr[4].image} alt="image1" />
      <h2>{modalArr[4].heading}</h2>
    </div>,
  ];

  const survey_redirect = (e) => {
    e.preventDefault();
    const id = e.currentTarget.id;
    // console.log("here is the id", e.currentTarget.id);
    if (Number(id) === 0) {
      window.location.replace("/services/digitalqual");
    }
    if (Number(id) === 1) {
      window.location.replace("/services/telephonicqual");
    }
    if (Number(id) === 2) {
      window.location.replace("/services/globalqual");
    }
  };
  return (
    <div className="main_body">
      <Modal isOpen={modalIsOpen}>
        <div className="inpersonal_modal_body">
          <img src={modalData.image} alt="image" />
          <img src={remove} alt="remove" onClick={handleModalClose} />
          <div className="inpersonal_modal_body_paragraph">
            <h2>{modalData.heading}</h2>
            <p>{modalData.text}</p>
          </div>
        </div>
      </Modal>
      <img src={in_personal_banner} alt="banner" />
      <div className="inpersonal_level_two">
        <div className="inpersonal_level_two_heading">
          <h2>Comprehensive and attentively</h2>
          <h2>executed fieldwork solutions.</h2>
        </div>
        <div className="inpersonal_level_two_card_parent">
          {cards.map((card, index) => {
            let i =
              index <= cardIcons.length - 1 ? index : index % cardIcons.length;
            return (
              <div
                className="inpersonal_level_two_card_child"
                key={index}
                id={"`${index}`"}
              >
                <img src={cardIcons[i]} alt="cardIcons" />
                <h2>{card.text}</h2>
              </div>
            );
          })}
        </div>
      </div>
      <div className="inpersonal_level_three">
        <h2>
          Why us <span>mirats insights ?</span>
        </h2>
        <div className="inpersonal_level_three_sliding_info">
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
            // paddingLeft={50}
            // paddingRight={50}
            controlsStrategy="alternate"
          />
        </div>
      </div>
      <div className="inpersonal_level_four">
        <p>Upcoming Surveys</p>
        <div className="inpersonal_level_four_heading">
          <h2>Your favourite upcoming</h2>
          <h2>Quanlitative Solution</h2>
        </div>
        <div className="inpersonal_level_four_surveys_parent">
          {qualSurvey.map((element, index) => {
            return (
              <div
                className="inpersonal_level_four_surveys_child"
                key={index}
                id={`${index}`}
                onClick={survey_redirect}
              >
                <img src={element.image} alt="element_image" />
                <h2>{element.heading}</h2>
              </div>
            );
          })}
        </div>
      </div>
      <div className="inpersonal_level_five">
        <div className="inpersonal_level_five_heading">
          <h1>Benefits of </h1>
          <h1>In-personal Qual</h1>
        </div>
        <div className="inpersonal_level_five_faq">
          <section>
            <h5>WWhat are the benefits of reputation management software?</h5>
            <img
              src={ques1 ? cross : plus}
              alt="image"
              onClick={() => {
                setQues1(!ques1);
              }}
            />
          </section>
          {ques1 ? (
            <p>
              proin nulla mauris sit dui faucibus at vestibulum. Consequat
              pellentesque tincidunt neque cursus hac. In vel neque blandit amet
              nunc urna duis. Consequat nulla feugiat lectus amet turpis sed.
              Proin iaculis feugiat massa risus amet nulla. Elementum mus cras
              dignissim et lacinia sit maecenas. Amet egestas viverra sit
              vestibulum risus eget velit ut elementum. Nisl molestie facilisis
              non vivamus.
            </p>
          ) : (
            <></>
          )}
          <section>
            <h5>Eliminates manual data collection</h5>
            <img
              src={ques2 ? cross : plus}
              alt="image"
              onClick={() => {
                setQues2(!ques2);
              }}
            />
          </section>
          {ques2 ? (
            <p>
              proin nulla mauris sit dui faucibus at vestibulum. Consequat
              pellentesque tincidunt neque cursus hac. In vel neque blandit amet
              nunc urna duis. Consequat nulla feugiat lectus amet turpis sed.
              Proin iaculis feugiat massa risus amet nulla. Elementum mus cras
              dignissim et lacinia sit maecenas. Amet egestas viverra sit
              vestibulum risus eget velit ut elementum. Nisl molestie facilisis
              non vivamus.
            </p>
          ) : (
            <></>
          )}
          <section>
            <h5>Get real-time insights</h5>
            <img
              src={ques3 ? cross : plus}
              alt="image"
              onClick={() => {
                setQues3(!ques3);
              }}
            />
          </section>
          {ques3 ? (
            <p>
              proin nulla mauris sit dui faucibus at vestibulum. Consequat
              pellentesque tincidunt neque cursus hac. In vel neque blandit amet
              nunc urna duis. Consequat nulla feugiat lectus amet turpis sed.
              Proin iaculis feugiat massa risus amet nulla. Elementum mus cras
              dignissim et lacinia sit maecenas. Amet egestas viverra sit
              vestibulum risus eget velit ut elementum. Nisl molestie facilisis
              non vivamus.
            </p>
          ) : (
            <></>
          )}
          <section>
            <h5>You can reach more people, faster and easier</h5>
            <img
              src={ques4 ? cross : plus}
              alt="image"
              onClick={() => {
                setQues4(!ques4);
              }}
            />
          </section>
          {ques4 ? (
            <p>
              proin nulla mauris sit dui faucibus at vestibulum. Consequat
              pellentesque tincidunt neque cursus hac. In vel neque blandit amet
              nunc urna duis. Consequat nulla feugiat lectus amet turpis sed.
              Proin iaculis feugiat massa risus amet nulla. Elementum mus cras
              dignissim et lacinia sit maecenas. Amet egestas viverra sit
              vestibulum risus eget velit ut elementum. Nisl molestie facilisis
              non vivamus.
            </p>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default In_personal_qual;
