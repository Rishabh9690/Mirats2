import React, { useEffect, useState } from "react";
import banner from "./images/Banner.png";
import hand_clock from "../../services/service_img/hand_clock.svg";
import star_chat from "../../services/service_img/star_chat.svg";
import setting from "../../services/service_img/setting.svg";
import remove from "../../mirats_qual_services/in_personal/images/Remove.svg";
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";

import Modal from "react-modal";
import "./flexibleWorkTime.css";

const FlexibleWorkTime = () => {
  const [cardIcons, setCardIcons] = useState([]);
  const [cards, setCards] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  useEffect(() => {
    setCardIcons([hand_clock, star_chat, setting]);
    setCards([
      {
        heading: `Work site`,
        text: `At Mirats Insights, our worksite reflects our commitment to creating a positive and productive environment for our employees. We prioritize the well-being and comfort of our team members, providing ergonomic workstations and facilities that support work-life balance. Collaboration is at the core of our worksite culture. Our worksite is equipped with cutting-edge technology and resources to enhance efficiency and support innovation. `,
      },
      {
        heading: `Work location`,
        text: `Mirats Insights is strategically located in a vibrant and accessible area that offers convenience and a conducive work environment. Our work location provides easy access to transportation, dining options, and essential amenities for our employees. We choose work locations that foster collaboration and networking opportunities with like-minded businesses and industry leaders, promoting knowledge sharing and professional growth.`,
      },
      {
        heading: `Work hours`,
        text: `At Mirats Insights, we believe in fostering a healthy work-life balance for our employees. We prioritize flexible work hours that accommodate individual needs and promote well-being. We understand that each person has unique circumstances, and we strive to create a work environment that allows for flexibility in scheduling, ensuring our employees can effectively manage their personal and professional commitments.`,
      },
    ]);
  }, []);

  const handleModalOpen = () => {
    console.log("Inside the handleModalOpen");
    setModalIsOpen(true);
  };
  const handleModalClose = () => {
    console.log("Inside the handleModalClose");
    setModalIsOpen(false);
    // onRequestClose
  };

  const modalArr = [
    {
      image: image1,
      heading: "Virtual Focus Groups",
      text: `Lorem ipsum dolor sit amet consectetur. Cursus viverra augue est nisl. Gravida sem malesuada egestas justo. Integer mattis eget lorem feugiat. Fringilla enim interdum egestas iaculis sit neque duis nulla viverra. Massa felis vestibulum nunc nulla fringilla eleifend erat. Sed quis laoreet amet arcu. Accumsan metus in egestas eu ornare odio tincidunt in donec. Elit tristique mi dui pretium vel amet interdum massa morbi. Enim cursus neque interdum iaculis pellentesque facilisis vestibulum. Nibh adipiscing aliquam consequat volutpat augue augue. Tellus quis velit ut tortor semper augue proin. Cursus dolor blandit imperdiet cras lacus volutpat. Senectus gravida elementum porttitor ut.
        Amet purus eget integer praesent ipsum. Aliquam volutpat sit ultrices neque. Pharetra non tellus sit magna amet at egestas. Congue volutpat commodo dui maecenas quis aliquam mauris nibh eu. Sit congue nibh convallis nibh metus purus augue. Venenatis sapien aliquam vehicula mattis egestas ipsum eu. Mattis tempus aliquam tempor tempor dictum cum. Tellus morbi nec aliquam fringilla vel. Aliquet ipsum aliquam quam neque. Tristique imperdiet adipiscing ut turpis. Eu quis diam fermentum tellus nunc morbi mollis consequat. Tincidunt nibh ac eget eu. Turpis eleifend placerat metus tincidunt dignissim habitant tincidunt. Viverra risus justo senectus risus amet. In sit ut posuere lorem. 
        Sit vitae non rhoncus eget massa. Elementum nec sit risus et lobortis. Duis nec purus non netus enim gravida dignissim metus. Eget sed blandit a dignissim diam pulvinar id nulla. Ornare in sit enim cursus non vitae condimentum habitasse. Lorem amet mi sed libero. Ut sit sed semper suspendisse. Est senectus amet non felis gravida leo sapien mattis. A cum mattis mi netus maecenas amet. Parturient orci donec suscipit nec adipiscing nec. Sed nibh adipiscing tincidunt pharetra aliquet amet. Fermentum libero adipiscing id malesuada massa platea.
        Nulla pellentesque viverra mi risus. Quisque urna tortor nisi facilisi maecenas. Tellus tincidunt at accumsan id sed bibendum ut mauris. Vitae sit cum turpis fringilla eu ullamcorper. Etiam sagittis amet vestibulum risus fermentum a a sollicitudin nulla. Vitae volutpat pellentesque sed vel pharetra eleifend nulla. Suspendisse id venenatis elit quam viverra faucibus ullamcorper metus. Risus purus aliquet cum placerat posuere fringilla lorem consequat quisque. Enim consectetur sed volutpat lacus cursus. Nec urna ipsum orci eu dui. Gravida montes proin tincidunt sed integer. Lorem gravida habitasse eu elementum venenatis placerat bibendum dignissim et.`,
    },
    {
      image: image2,
      heading: "Online In-Depth Interviews",
      text: `Lorem ipsum dolor sit amet consectetur. Cursus viverra augue est nisl. Gravida sem malesuada egestas justo. Integer mattis eget lorem feugiat. Fringilla enim interdum egestas iaculis sit neque duis nulla viverra. Massa felis vestibulum nunc nulla fringilla eleifend erat. Sed quis laoreet amet arcu. Accumsan metus in egestas eu ornare odio tincidunt in donec. Elit tristique mi dui pretium vel amet interdum massa morbi. Enim cursus neque interdum iaculis pellentesque facilisis vestibulum. Nibh adipiscing aliquam consequat volutpat augue augue. Tellus quis velit ut tortor semper augue proin. Cursus dolor blandit imperdiet cras lacus volutpat. Senectus gravida elementum porttitor ut.
        Amet purus eget integer praesent ipsum. Aliquam volutpat sit ultrices neque. Pharetra non tellus sit magna amet at egestas. Congue volutpat commodo dui maecenas quis aliquam mauris nibh eu. Sit congue nibh convallis nibh metus purus augue. Venenatis sapien aliquam vehicula mattis egestas ipsum eu. Mattis tempus aliquam tempor tempor dictum cum. Tellus morbi nec aliquam fringilla vel. Aliquet ipsum aliquam quam neque. Tristique imperdiet adipiscing ut turpis. Eu quis diam fermentum tellus nunc morbi mollis consequat. Tincidunt nibh ac eget eu. Turpis eleifend placerat metus tincidunt dignissim habitant tincidunt. Viverra risus justo senectus risus amet. In sit ut posuere lorem. 
        Sit vitae non rhoncus eget massa. Elementum nec sit risus et lobortis. Duis nec purus non netus enim gravida dignissim metus. Eget sed blandit a dignissim diam pulvinar id nulla. Ornare in sit enim cursus non vitae condimentum habitasse. Lorem amet mi sed libero. Ut sit sed semper suspendisse. Est senectus amet non felis gravida leo sapien mattis. A cum mattis mi netus maecenas amet. Parturient orci donec suscipit nec adipiscing nec. Sed nibh adipiscing tincidunt pharetra aliquet amet. Fermentum libero adipiscing id malesuada massa platea.
        Nulla pellentesque viverra mi risus. Quisque urna tortor nisi facilisi maecenas. Tellus tincidunt at accumsan id sed bibendum ut mauris. Vitae sit cum turpis fringilla eu ullamcorper. Etiam sagittis amet vestibulum risus fermentum a a sollicitudin nulla. Vitae volutpat pellentesque sed vel pharetra eleifend nulla. Suspendisse id venenatis elit quam viverra faucibus ullamcorper metus. Risus purus aliquet cum placerat posuere fringilla lorem consequat quisque. Enim consectetur sed volutpat lacus cursus. Nec urna ipsum orci eu dui. Gravida montes proin tincidunt sed integer. Lorem gravida habitasse eu elementum venenatis placerat bibendum dignissim et.`,
    },
  ];
  const useModal = (e) => {
    e.preventDefault();
    const index = e.currentTarget.id;
    console.log("Here is the code==========>", index);
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
    handleModalOpen();
  };
  return (
    <div className="flexible_work_time_body">
      <div className="flexible_work_time_level_one">
        <img src={banner} alt="banner" />
      </div>
      <div className="flexible_work_time_level_two">
        {/* <div className="flexible_work_time_level_two_heading">
          <h2>Deliver what your customer want, </h2>
          <h2>every timme</h2>
        </div> */}
        <div className="flexible_work_time_level_two_heading_card_parent">
          {cards.map((card, index) => {
            let i =
              index <= cardIcons.length - 1 ? index : index % cardIcons.length;
            return (
              <div
                className="flexible_work_time_level_two_heading_card_child"
                key={index}
                id={"`${index}`"}
              >
                <img src={cardIcons[i]} alt="cardIcons" />
                <h2>{card.heading}</h2>
                <p>{card.text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flexible_work_time_level_three">
        <h2 className="flexible_work_time_level_three_heading">
          Your one-stop for <span>product test insights communities</span>
        </h2>
        <div className="flexible_work_time_level_three_sec">
          <section>
            <img src={image1} alt="image1" id={0} onClick={useModal} />
            <p>Connect with Your Audience</p>
          </section>
          <section>
            <img src={image2} alt="image2" id={1} onClick={useModal} />
            <p>Leverage Our Expertise</p>
          </section>
          <Modal isOpen={modalIsOpen}>
            <div className="flexible_work_time_modal_body">
              <img src={modalData.image} alt="image" />
              <img src={remove} alt="remove" onClick={handleModalClose} />
              <div className="flexible_work_time_modal_body_paragraph">
                <h2>{modalData.heading}</h2>
                <p>{modalData.text}</p>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default FlexibleWorkTime;
