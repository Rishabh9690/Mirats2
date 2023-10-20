import React, { useEffect, useState } from "react";
import banner from "./images/Banner.png";
import hand_clock from "../../services/service_img/hand_clock.svg";
import star_chat from "../../services/service_img/star_chat.svg";
import setting from "../../services/service_img/setting.svg";
// import customerimg from "./images/customerimg.svg";
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";
import image4 from "./images/image4.png";
import image5 from "./images/image5.png";
import remove from "../../mirats_qual_services/in_personal/images/Remove.svg";
import right from "../../services/service_img/right.svg";
import AliceCarousel from 'react-alice-carousel';
import image_list_sec from "../../mirats_special_solutions/recruitment/images/image_list_sec.svg";
import blogimage1 from "../bloAndArticles/blogImages/blogImage1.png";
import blogimage2 from "../bloAndArticles/blogImages/blogImage2.png";
import blogimage3 from "../bloAndArticles/blogImages/blogImage3.png";
import blogimage4 from "../bloAndArticles/blogImages/blogImage4.png";
import BlogAndArticle from "../bloAndArticles/BlogAndArticle";
import imageCard1 from "./images/imageCard1.png";
import { Link, useNavigate } from "react-router-dom";
import 'react-alice-carousel/lib/alice-carousel.css';
import Modal from "react-modal";
import "./consumerPackagedGoods.css";

const ConsumerPackagedGoods = () => {
    const [cardIcons, setCardIcons] = useState([]);
    const [cards, setCards] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalData, setModalData] = useState({});
    const [gridCards, setGridCards] = useState([]);
    const [blog, setBlog] = useState({})
    const [blogModal, setBlogModal] = useState(false);

    useEffect(() => {
        setCardIcons([hand_clock, star_chat, setting]);
        setCards([{
            heading: `Ideal Research Spaces`,
            text: `mus cras dignissim et lacinia sit maecenas. Amet egestas viverra sit vestibulum risus eget velit ut elementum. Nisl molestie facilisis non vivamus.
            Urna eget bibendum feugiat congue sed. Consectetur at a enim dictum tempus. Aliquet eget lorem duis scelerisque ipsum mauris augue et. Faucibus quis venenatis ultricies dignissim tincidunt sit nulla. Consequat condimentum enim bibendum dictum. Faucibus quis venenatis `,
        }, {
            heading: `Flexible Environments`,
            text: ` in ornare feugiat sit tristique nibh. Neque sit ac lacinia eu. Neque consectetur enim placerat duis phasellus. Facilisis mauris nulla mi placerat. Magnis interdum nisl felis fames velit odio. Scelerisque commodo nulla vitae neque sit aliquam at commodo eu. Maecenas proin nulla mauris sit dui faucibus at vestibulum. Consequat pellentesque tincidunt neque cursus hac.`,
        }, {
            heading: `A Consultative Approach`,
            text: `proin nulla mauris sit dui faucibus at vestibulum. Consequat pellentesque tincidunt neque cursus hac. In vel neque blandit amet nunc urna duis. Consequat nulla feugiat lectus amet turpis sed. Proin iaculis feugiat massa risus amet nulla. Elementum mus cras dignissim et lacinia sit maecenas. Amet egestas viverra sit vestibulum risus eget velit ut elementum. Nisl molestie facilisis non vivamus.`
        }]);
        setGridCards([{
            heading: "Agribusiness",
            text: `mus cras dignissim et lacinia sit maecenas. Amet egestas viverra sit vestibulum risus eget velit ut elementum. Nisl molestie facilisis non vivamus.
            Urna eget bibendum feugiat congue sed. Consectetur at a enim dictum tempus. `
        },{
            heading: "Beauty",
            text: `mus cras dignissim et lacinia sit maecenas. Amet egestas viverra sit vestibulum risus eget velit ut elementum. Nisl molestie facilisis non vivamus.
            Urna eget bibendum feugiat congue sed. Consectetur at a enim dictum tempus. `
        },{
            heading: "Beverages",
            text: `mus cras dignissim et lacinia sit maecenas. Amet egestas viverra sit vestibulum risus eget velit ut elementum. Nisl molestie facilisis non vivamus.
            Urna eget bibendum feugiat congue sed. Consectetur at a enim dictum tempus. `
        },{
            heading: "Food",
            text: `mus cras dignissim et lacinia sit maecenas. Amet egestas viverra sit vestibulum risus eget velit ut elementum. Nisl molestie facilisis non vivamus.
            Urna eget bibendum feugiat congue sed. Consectetur at a enim dictum tempus. `
        },{
            heading: "Home and personal care",
            text:  `mus cras dignissim et lacinia sit maecenas. Amet egestas viverra sit vestibulum risus eget velit ut elementum. Nisl molestie facilisis non vivamus.
            Urna eget bibendum feugiat congue sed. Consectetur at a enim dictum tempus. `
        }])
    }, [])

    const modalArr = [{
        image: image1,
        heading: "Growth and innovation",
        text: `Lorem ipsum dolor sit amet consectetur. Cursus viverra augue est nisl. Gravida sem malesuada egestas justo. Integer mattis eget lorem feugiat. Fringilla enim interdum egestas iaculis sit neque duis nulla viverra. Massa felis vestibulum nunc nulla fringilla eleifend erat. Sed quis laoreet amet arcu. Accumsan metus in egestas eu ornare odio tincidunt in donec. Elit tristique mi dui pretium vel amet interdum massa morbi. Enim cursus neque interdum iaculis pellentesque facilisis vestibulum. Nibh adipiscing aliquam consequat volutpat augue augue. Tellus quis velit ut tortor semper augue proin. Cursus dolor blandit imperdiet cras lacus volutpat. Senectus gravida elementum porttitor ut.
        Amet purus eget integer praesent ipsum. Aliquam volutpat sit ultrices neque. Pharetra non tellus sit magna amet at egestas. Congue volutpat commodo dui maecenas quis aliquam mauris nibh eu. Sit congue nibh convallis nibh metus purus augue. Venenatis sapien aliquam vehicula mattis egestas ipsum eu. Mattis tempus aliquam tempor tempor dictum cum. Tellus morbi nec aliquam fringilla vel. Aliquet ipsum aliquam quam neque. Tristique imperdiet adipiscing ut turpis. Eu quis diam fermentum tellus nunc morbi mollis consequat. Tincidunt nibh ac eget eu. Turpis eleifend placerat metus tincidunt dignissim habitant tincidunt. Viverra risus justo senectus risus amet. In sit ut posuere lorem. 
        Sit vitae non rhoncus eget massa. Elementum nec sit risus et lobortis. Duis nec purus non netus enim gravida dignissim metus. Eget sed blandit a dignissim diam pulvinar id nulla. Ornare in sit enim cursus non vitae condimentum habitasse. Lorem amet mi sed libero. Ut sit sed semper suspendisse. Est senectus amet non felis gravida leo sapien mattis. A cum mattis mi netus maecenas amet. Parturient orci donec suscipit nec adipiscing nec. Sed nibh adipiscing tincidunt pharetra aliquet amet. Fermentum libero adipiscing id malesuada massa platea.
        Nulla pellentesque viverra mi risus. Quisque urna tortor nisi facilisi maecenas. Tellus tincidunt at accumsan id sed bibendum ut mauris. Vitae sit cum turpis fringilla eu ullamcorper. Etiam sagittis amet vestibulum risus fermentum a a sollicitudin nulla. Vitae volutpat pellentesque sed vel pharetra eleifend nulla. Suspendisse id venenatis elit quam viverra faucibus ullamcorper metus. Risus purus aliquet cum placerat posuere fringilla lorem consequat quisque. Enim consectetur sed volutpat lacus cursus. Nec urna ipsum orci eu dui. Gravida montes proin tincidunt sed integer. Lorem gravida habitasse eu elementum venenatis placerat bibendum dignissim et.`
    }, {
        image: image2,
        heading: "Brand experiences",
        text: `Lorem ipsum dolor sit amet consectetur. Cursus viverra augue est nisl. Gravida sem malesuada egestas justo. Integer mattis eget lorem feugiat. Fringilla enim interdum egestas iaculis sit neque duis nulla viverra. Massa felis vestibulum nunc nulla fringilla eleifend erat. Sed quis laoreet amet arcu. Accumsan metus in egestas eu ornare odio tincidunt in donec. Elit tristique mi dui pretium vel amet interdum massa morbi. Enim cursus neque interdum iaculis pellentesque facilisis vestibulum. Nibh adipiscing aliquam consequat volutpat augue augue. Tellus quis velit ut tortor semper augue proin. Cursus dolor blandit imperdiet cras lacus volutpat. Senectus gravida elementum porttitor ut.
        Amet purus eget integer praesent ipsum. Aliquam volutpat sit ultrices neque. Pharetra non tellus sit magna amet at egestas. Congue volutpat commodo dui maecenas quis aliquam mauris nibh eu. Sit congue nibh convallis nibh metus purus augue. Venenatis sapien aliquam vehicula mattis egestas ipsum eu. Mattis tempus aliquam tempor tempor dictum cum. Tellus morbi nec aliquam fringilla vel. Aliquet ipsum aliquam quam neque. Tristique imperdiet adipiscing ut turpis. Eu quis diam fermentum tellus nunc morbi mollis consequat. Tincidunt nibh ac eget eu. Turpis eleifend placerat metus tincidunt dignissim habitant tincidunt. Viverra risus justo senectus risus amet. In sit ut posuere lorem. 
        Sit vitae non rhoncus eget massa. Elementum nec sit risus et lobortis. Duis nec purus non netus enim gravida dignissim metus. Eget sed blandit a dignissim diam pulvinar id nulla. Ornare in sit enim cursus non vitae condimentum habitasse. Lorem amet mi sed libero. Ut sit sed semper suspendisse. Est senectus amet non felis gravida leo sapien mattis. A cum mattis mi netus maecenas amet. Parturient orci donec suscipit nec adipiscing nec. Sed nibh adipiscing tincidunt pharetra aliquet amet. Fermentum libero adipiscing id malesuada massa platea.
        Nulla pellentesque viverra mi risus. Quisque urna tortor nisi facilisi maecenas. Tellus tincidunt at accumsan id sed bibendum ut mauris. Vitae sit cum turpis fringilla eu ullamcorper. Etiam sagittis amet vestibulum risus fermentum a a sollicitudin nulla. Vitae volutpat pellentesque sed vel pharetra eleifend nulla. Suspendisse id venenatis elit quam viverra faucibus ullamcorper metus. Risus purus aliquet cum placerat posuere fringilla lorem consequat quisque. Enim consectetur sed volutpat lacus cursus. Nec urna ipsum orci eu dui. Gravida montes proin tincidunt sed integer. Lorem gravida habitasse eu elementum venenatis placerat bibendum dignissim et.`
    }, {
        image: image3,
        heading: "Digital commerce",
        text: `Lorem ipsum dolor sit amet consectetur. Cursus viverra augue est nisl. Gravida sem malesuada egestas justo. Integer mattis eget lorem feugiat. Fringilla enim interdum egestas iaculis sit neque duis nulla viverra. Massa felis vestibulum nunc nulla fringilla eleifend erat. Sed quis laoreet amet arcu. Accumsan metus in egestas eu ornare odio tincidunt in donec. Elit tristique mi dui pretium vel amet interdum massa morbi. Enim cursus neque interdum iaculis pellentesque facilisis vestibulum. Nibh adipiscing aliquam consequat volutpat augue augue. Tellus quis velit ut tortor semper augue proin. Cursus dolor blandit imperdiet cras lacus volutpat. Senectus gravida elementum porttitor ut.
        Amet purus eget integer praesent ipsum. Aliquam volutpat sit ultrices neque. Pharetra non tellus sit magna amet at egestas. Congue volutpat commodo dui maecenas quis aliquam mauris nibh eu. Sit congue nibh convallis nibh metus purus augue. Venenatis sapien aliquam vehicula mattis egestas ipsum eu. Mattis tempus aliquam tempor tempor dictum cum. Tellus morbi nec aliquam fringilla vel. Aliquet ipsum aliquam quam neque. Tristique imperdiet adipiscing ut turpis. Eu quis diam fermentum tellus nunc morbi mollis consequat. Tincidunt nibh ac eget eu. Turpis eleifend placerat metus tincidunt dignissim habitant tincidunt. Viverra risus justo senectus risus amet. In sit ut posuere lorem. 
        Sit vitae non rhoncus eget massa. Elementum nec sit risus et lobortis. Duis nec purus non netus enim gravida dignissim metus. Eget sed blandit a dignissim diam pulvinar id nulla. Ornare in sit enim cursus non vitae condimentum habitasse. Lorem amet mi sed libero. Ut sit sed semper suspendisse. Est senectus amet non felis gravida leo sapien mattis. A cum mattis mi netus maecenas amet. Parturient orci donec suscipit nec adipiscing nec. Sed nibh adipiscing tincidunt pharetra aliquet amet. Fermentum libero adipiscing id malesuada massa platea.
        Nulla pellentesque viverra mi risus. Quisque urna tortor nisi facilisi maecenas. Tellus tincidunt at accumsan id sed bibendum ut mauris. Vitae sit cum turpis fringilla eu ullamcorper. Etiam sagittis amet vestibulum risus fermentum a a sollicitudin nulla. Vitae volutpat pellentesque sed vel pharetra eleifend nulla. Suspendisse id venenatis elit quam viverra faucibus ullamcorper metus. Risus purus aliquet cum placerat posuere fringilla lorem consequat quisque. Enim consectetur sed volutpat lacus cursus. Nec urna ipsum orci eu dui. Gravida montes proin tincidunt sed integer. Lorem gravida habitasse eu elementum venenatis placerat bibendum dignissim et.`
    }, {
        image: image4,
        heading: "Enterprise transformation",
        text: `Lorem ipsum dolor sit amet consectetur. Cursus viverra augue est nisl. Gravida sem malesuada egestas justo. Integer mattis eget lorem feugiat. Fringilla enim interdum egestas iaculis sit neque duis nulla viverra. Massa felis vestibulum nunc nulla fringilla eleifend erat. Sed quis laoreet amet arcu. Accumsan metus in egestas eu ornare odio tincidunt in donec. Elit tristique mi dui pretium vel amet interdum massa morbi. Enim cursus neque interdum iaculis pellentesque facilisis vestibulum. Nibh adipiscing aliquam consequat volutpat augue augue. Tellus quis velit ut tortor semper augue proin. Cursus dolor blandit imperdiet cras lacus volutpat. Senectus gravida elementum porttitor ut.
        Amet purus eget integer praesent ipsum. Aliquam volutpat sit ultrices neque. Pharetra non tellus sit magna amet at egestas. Congue volutpat commodo dui maecenas quis aliquam mauris nibh eu. Sit congue nibh convallis nibh metus purus augue. Venenatis sapien aliquam vehicula mattis egestas ipsum eu. Mattis tempus aliquam tempor tempor dictum cum. Tellus morbi nec aliquam fringilla vel. Aliquet ipsum aliquam quam neque. Tristique imperdiet adipiscing ut turpis. Eu quis diam fermentum tellus nunc morbi mollis consequat. Tincidunt nibh ac eget eu. Turpis eleifend placerat metus tincidunt dignissim habitant tincidunt. Viverra risus justo senectus risus amet. In sit ut posuere lorem. 
        Sit vitae non rhoncus eget massa. Elementum nec sit risus et lobortis. Duis nec purus non netus enim gravida dignissim metus. Eget sed blandit a dignissim diam pulvinar id nulla. Ornare in sit enim cursus non vitae condimentum habitasse. Lorem amet mi sed libero. Ut sit sed semper suspendisse. Est senectus amet non felis gravida leo sapien mattis. A cum mattis mi netus maecenas amet. Parturient orci donec suscipit nec adipiscing nec. Sed nibh adipiscing tincidunt pharetra aliquet amet. Fermentum libero adipiscing id malesuada massa platea.
        Nulla pellentesque viverra mi risus. Quisque urna tortor nisi facilisi maecenas. Tellus tincidunt at accumsan id sed bibendum ut mauris. Vitae sit cum turpis fringilla eu ullamcorper. Etiam sagittis amet vestibulum risus fermentum a a sollicitudin nulla. Vitae volutpat pellentesque sed vel pharetra eleifend nulla. Suspendisse id venenatis elit quam viverra faucibus ullamcorper metus. Risus purus aliquet cum placerat posuere fringilla lorem consequat quisque. Enim consectetur sed volutpat lacus cursus. Nec urna ipsum orci eu dui. Gravida montes proin tincidunt sed integer. Lorem gravida habitasse eu elementum venenatis placerat bibendum dignissim et.`
    }, {
        image: image5,
        heading: "Cost management",
        text: `Lorem ipsum dolor sit amet consectetur. Cursus viverra augue est nisl. Gravida sem malesuada egestas justo. Integer mattis eget lorem feugiat. Fringilla enim interdum egestas iaculis sit neque duis nulla viverra. Massa felis vestibulum nunc nulla fringilla eleifend erat. Sed quis laoreet amet arcu. Accumsan metus in egestas eu ornare odio tincidunt in donec. Elit tristique mi dui pretium vel amet interdum massa morbi. Enim cursus neque interdum iaculis pellentesque facilisis vestibulum. Nibh adipiscing aliquam consequat volutpat augue augue. Tellus quis velit ut tortor semper augue proin. Cursus dolor blandit imperdiet cras lacus volutpat. Senectus gravida elementum porttitor ut.
        Amet purus eget integer praesent ipsum. Aliquam volutpat sit ultrices neque. Pharetra non tellus sit magna amet at egestas. Congue volutpat commodo dui maecenas quis aliquam mauris nibh eu. Sit congue nibh convallis nibh metus purus augue. Venenatis sapien aliquam vehicula mattis egestas ipsum eu. Mattis tempus aliquam tempor tempor dictum cum. Tellus morbi nec aliquam fringilla vel. Aliquet ipsum aliquam quam neque. Tristique imperdiet adipiscing ut turpis. Eu quis diam fermentum tellus nunc morbi mollis consequat. Tincidunt nibh ac eget eu. Turpis eleifend placerat metus tincidunt dignissim habitant tincidunt. Viverra risus justo senectus risus amet. In sit ut posuere lorem. 
        Sit vitae non rhoncus eget massa. Elementum nec sit risus et lobortis. Duis nec purus non netus enim gravida dignissim metus. Eget sed blandit a dignissim diam pulvinar id nulla. Ornare in sit enim cursus non vitae condimentum habitasse. Lorem amet mi sed libero. Ut sit sed semper suspendisse. Est senectus amet non felis gravida leo sapien mattis. A cum mattis mi netus maecenas amet. Parturient orci donec suscipit nec adipiscing nec. Sed nibh adipiscing tincidunt pharetra aliquet amet. Fermentum libero adipiscing id malesuada massa platea.
        Nulla pellentesque viverra mi risus. Quisque urna tortor nisi facilisi maecenas. Tellus tincidunt at accumsan id sed bibendum ut mauris. Vitae sit cum turpis fringilla eu ullamcorper. Etiam sagittis amet vestibulum risus fermentum a a sollicitudin nulla. Vitae volutpat pellentesque sed vel pharetra eleifend nulla. Suspendisse id venenatis elit quam viverra faucibus ullamcorper metus. Risus purus aliquet cum placerat posuere fringilla lorem consequat quisque. Enim consectetur sed volutpat lacus cursus. Nec urna ipsum orci eu dui. Gravida montes proin tincidunt sed integer. Lorem gravida habitasse eu elementum venenatis placerat bibendum dignissim et.`
    }];
    const useModal = (e) => {
        e.preventDefault();
        const index = Number(e.currentTarget.id);
        console.log("Here is the code==========>", index)
        
            setModalData({
                image: modalArr[index].image,
                heading: modalArr[index].heading,
                text: modalArr[index].text,
            })
        handleModalOpen();
    }
    const handleModalOpen = () => {
        console.log("Inside the handleModalOpen");
        setModalIsOpen(true);
    }
    const handleModalClose = () => {
        console.log("Inside the handleModalClose");
        setModalIsOpen(false);
        // onRequestClose
    }
    const blogsMap = [
        {
          title: "Financial Services",
          date: "June 21, 2023",
          topic: "Sustainability Services - do more, with less ",
          image: blogimage1,
          para1: `Blandit turpis viverra maecenas ridiculus. Posuere ante et mauris lectus lobortis pharetra id nibh pulvinar. Leo et elit mattis lectus adipiscing elementum ut cursus dolor. Id magna eget diam commodo a enim lacinia. Urna faucibus volutpat duis sapien quam nunc eget. Non quam amet elit tortor.
            Nulla maecenas egestas vitae auctor. Eget aliquam augue amet nullam leo et. Donec non imperdiet tellus vestibulum dolor. Consectetur aliquam vehicula et tincidunt interdum condimentum arcu. Varius etiam ut in massa tellus. Pharetra dui etiam risus adipiscing lorem vulputate felis sit volutpat. Tempus turpis ultrices lacus porta vivamus et. Lorem sem dolor sagittis nascetur hac et leo. Adipiscing fames at orci eu in. Ullamcorper diam id massa tempus. Non at ut tellus sed sociis nisl. Nunc vulputate eget feugiat scelerisque feugiat. Vivamus scelerisque lacus eros lectus sed.
            Fusce dignissim neque eu at nam faucibus risus ipsum volutpat. Tellus amet at a nibh. Sagittis cras aliquet metus feugiat pretium et eget. At diam suspendisse elementum sit convallis duis gravida. Pulvinar felis sagittis erat tincidunt ultricies arcu pellentesque quisque. Augue cursus elementum luctus nam. Semper mattis interdum cras neque suspendisse nec vivamus tempor. Eu in in viverra eget. Dignissim eleifend mattis vel sit congue ut nisl leo commodo. Ornare sodales vitae risus nibh potenti. Elementum sed purus porttitor in. Maecenas enim tincidunt feugiat auctor aliquam bibendum.
            Morbi et mi integer amet. Non interdum aliquam imperdiet sem vitae.`,
          para2: `Lorem ipsum dolor sit amet consectetur. Lectus eu scelerisque neque eu tortor sed. Pellentesque tellus tellus malesuada maecenas mattis ut nisi. Egestas augue nunc tristique orci augue. A sapien eu at tellus dignissim commodo at. Porttitor quam diam sed velit. Condimentum egestas pellentesque tempor arcu id id in purus. Sed mollis enim vel et mauris. Nunc facilisi in et lectus massa. Commodo nulla accumsan nulla neque a placerat. Etiam tellus at massa amet eget velit. Nulla diam vel arcu proin pellentesque maecenas arcu. Quis morbi auctorsemper. 
            Placerat curabitur amet elementum ultricies feugiat eget eget ac. Tempor neque ac sed fermentum volutpat. Metus elementum aenean ligula tempus pharetra non tortor et. Justo elementum vivamus molestie mauris fames sapien mauris a. Suspendisse est in ultrices turpis facilisis sed id orci tortor. `,
          heading: "Lorem ipsum dolor sit amet consectetur dictumst turpis ",
          para3: `Lorem ipsum dolor sit amet consectetur. Lectus eu scelerisque neque eu tortor sed. Pellentesque tellus tellus malesuada maecenas mattis ut nisi. Egestas augue nunc tristique orci augue. A sapien eu at tellus dignissim commodo at. Porttitor quam diam sed velit. Condimentum egestas pellentesque tempor arcu id id in purus. Sed mollis enim vel et mauris. Nunc facilisi in et lectus massa. Commodo nulla accumsan nulla neque a placerat. Etiam tellus at massa amet eget velit. Nulla diam vel arcu proin pellentesque maecenas arcu. Quis morbi auctorsemper. Placerat curabitur amet elementum ultricies feugiat eget eget ac. Tempor neque ac sed fermentum volutpat. Metus elementum aenean ligula tempus pharetra non tortor et. Justo elementum vivamus molestie mauris fames sapien mauris a. Suspendisse est in ultrices turpis facilisis sed id orci tortor. `,
          para4: `Blandit turpis viverra maecenas ridiculus. Posuere ante et mauris lectus lobortis pharetra id nibh pulvinar. Leo et elit mattis lectus adipiscing elementum ut cursus dolor. Id magna eget diam commodo a enim lacinia. Urna faucibus volutpat duis sapien quam nunc eget. Non quam amet elit tortor.
            Nulla maecenas egestas vitae auctor. Eget aliquam augue amet nullam leo et. Donec non imperdiet tellus vestibulum dolor. Consectetur aliquam vehicula et tincidunt interdum condimentum arcu. Varius etiam ut in massa tellus. Pharetra dui etiam risus adipiscing lorem vulputate felis sit volutpat. Tempus turpis ultrices lacus porta vivamus et. Lorem sem dolor sagittis nascetur hac et leo. Adipiscing fames at orci eu in. Ullamcorper diam id massa tempus. Non at ut tellus sed sociis nisl. Nunc vulputate eget feugiat scelerisque feugiat. Vivamus scelerisque lacus eros lectus sed.
            Fusce dignissim neque eu at nam faucibus risus ipsum volutpat. Tellus amet at a nibh. Sagittis cras aliquet metus feugiat pretium et eget. At diam suspendisse elementum sit convallis duis gravida. Pulvinar felis sagittis erat tincidunt ultricies arcu pellentesque quisque. Augue cursus elementum luctus nam. Semper mattis interdum cras neque suspendisse nec vivamus tempor. Eu in in viverra eget. Dignissim eleifend mattis vel sit congue ut nisl leo commodo. Ornare sodales vitae risus nibh potenti. Elementum sed purus porttitor in. Maecenas enim tincidunt feugiat auctor aliquam bibendum.
            Morbi et mi integer amet. Non interdum aliquam imperdiet sem vitae.`,
          para5: `Blandit turpis viverra maecenas ridiculus. Posuere ante et mauris lectus lobortis pharetra id nibh pulvinar. Leo et elit mattis lectus adipiscing elementum ut cursus dolor. Id magna eget diam commodo a enim lacinia. Urna faucibus volutpat duis sapien quam nunc eget. Non quam amet elit tortor.
            Nulla maecenas egestas vitae auctor. Eget aliquam augue amet nullam leo et. Donec non imperdiet tellus vestibulum dolor. Consectetur aliquam vehicula et tincidunt interdum condimentum arcu. Varius etiam ut in massa tellus. Pharetra dui etiam risus adipiscing lorem vulputate felis sit volutpat. Tempus turpis ultrices lacus porta vivamus et. Lorem sem dolor sagittis nascetur hac et leo. Adipiscing fames at orci eu in. Ullamcorper diam id massa tempus. Non at ut tellus sed sociis nisl. Nunc vulputate eget feugiat scelerisque feugiat. Vivamus scelerisque lacus eros lectus sed.
            Fusce dignissim neque eu at nam faucibus risus ipsum volutpat. Tellus amet at a nibh. Sagittis cras aliquet metus feugiat pretium et eget. At diam suspendisse elementum sit convallis duis gravida. Pulvinar felis sagittis erat tincidunt ultricies arcu pellentesque quisque. Augue cursus elementum luctus nam. `,
        },
        {
          title: "Financial Services",
          date: "June 21, 2023",
          topic: "Sustainability Services - do more, with less ",
          image: blogimage2,
          para1: `Blandit turpis viverra maecenas ridiculus. Posuere ante et mauris lectus lobortis pharetra id nibh pulvinar. Leo et elit mattis lectus adipiscing elementum ut cursus dolor. Id magna eget diam commodo a enim lacinia. Urna faucibus volutpat duis sapien quam nunc eget. Non quam amet elit tortor.
            Nulla maecenas egestas vitae auctor. Eget aliquam augue amet nullam leo et. Donec non imperdiet tellus vestibulum dolor. Consectetur aliquam vehicula et tincidunt interdum condimentum arcu. Varius etiam ut in massa tellus. Pharetra dui etiam risus adipiscing lorem vulputate felis sit volutpat. Tempus turpis ultrices lacus porta vivamus et. Lorem sem dolor sagittis nascetur hac et leo. Adipiscing fames at orci eu in. Ullamcorper diam id massa tempus. Non at ut tellus sed sociis nisl. Nunc vulputate eget feugiat scelerisque feugiat. Vivamus scelerisque lacus eros lectus sed.
            Fusce dignissim neque eu at nam faucibus risus ipsum volutpat. Tellus amet at a nibh. Sagittis cras aliquet metus feugiat pretium et eget. At diam suspendisse elementum sit convallis duis gravida. Pulvinar felis sagittis erat tincidunt ultricies arcu pellentesque quisque. Augue cursus elementum luctus nam. Semper mattis interdum cras neque suspendisse nec vivamus tempor. Eu in in viverra eget. Dignissim eleifend mattis vel sit congue ut nisl leo commodo. Ornare sodales vitae risus nibh potenti. Elementum sed purus porttitor in. Maecenas enim tincidunt feugiat auctor aliquam bibendum.
            Morbi et mi integer amet. Non interdum aliquam imperdiet sem vitae.`,
          para2: `Lorem ipsum dolor sit amet consectetur. Lectus eu scelerisque neque eu tortor sed. Pellentesque tellus tellus malesuada maecenas mattis ut nisi. Egestas augue nunc tristique orci augue. A sapien eu at tellus dignissim commodo at. Porttitor quam diam sed velit. Condimentum egestas pellentesque tempor arcu id id in purus. Sed mollis enim vel et mauris. Nunc facilisi in et lectus massa. Commodo nulla accumsan nulla neque a placerat. Etiam tellus at massa amet eget velit. Nulla diam vel arcu proin pellentesque maecenas arcu. Quis morbi auctorsemper. 
            Placerat curabitur amet elementum ultricies feugiat eget eget ac. Tempor neque ac sed fermentum volutpat. Metus elementum aenean ligula tempus pharetra non tortor et. Justo elementum vivamus molestie mauris fames sapien mauris a. Suspendisse est in ultrices turpis facilisis sed id orci tortor. `,
          heading: "Lorem ipsum dolor sit amet consectetur dictumst turpis ",
          para3: `Lorem ipsum dolor sit amet consectetur. Lectus eu scelerisque neque eu tortor sed. Pellentesque tellus tellus malesuada maecenas mattis ut nisi. Egestas augue nunc tristique orci augue. A sapien eu at tellus dignissim commodo at. Porttitor quam diam sed velit. Condimentum egestas pellentesque tempor arcu id id in purus. Sed mollis enim vel et mauris. Nunc facilisi in et lectus massa. Commodo nulla accumsan nulla neque a placerat. Etiam tellus at massa amet eget velit. Nulla diam vel arcu proin pellentesque maecenas arcu. Quis morbi auctorsemper. Placerat curabitur amet elementum ultricies feugiat eget eget ac. Tempor neque ac sed fermentum volutpat. Metus elementum aenean ligula tempus pharetra non tortor et. Justo elementum vivamus molestie mauris fames sapien mauris a. Suspendisse est in ultrices turpis facilisis sed id orci tortor. `,
          para4: `Blandit turpis viverra maecenas ridiculus. Posuere ante et mauris lectus lobortis pharetra id nibh pulvinar. Leo et elit mattis lectus adipiscing elementum ut cursus dolor. Id magna eget diam commodo a enim lacinia. Urna faucibus volutpat duis sapien quam nunc eget. Non quam amet elit tortor.
            Nulla maecenas egestas vitae auctor. Eget aliquam augue amet nullam leo et. Donec non imperdiet tellus vestibulum dolor. Consectetur aliquam vehicula et tincidunt interdum condimentum arcu. Varius etiam ut in massa tellus. Pharetra dui etiam risus adipiscing lorem vulputate felis sit volutpat. Tempus turpis ultrices lacus porta vivamus et. Lorem sem dolor sagittis nascetur hac et leo. Adipiscing fames at orci eu in. Ullamcorper diam id massa tempus. Non at ut tellus sed sociis nisl. Nunc vulputate eget feugiat scelerisque feugiat. Vivamus scelerisque lacus eros lectus sed.
            Fusce dignissim neque eu at nam faucibus risus ipsum volutpat. Tellus amet at a nibh. Sagittis cras aliquet metus feugiat pretium et eget. At diam suspendisse elementum sit convallis duis gravida. Pulvinar felis sagittis erat tincidunt ultricies arcu pellentesque quisque. Augue cursus elementum luctus nam. Semper mattis interdum cras neque suspendisse nec vivamus tempor. Eu in in viverra eget. Dignissim eleifend mattis vel sit congue ut nisl leo commodo. Ornare sodales vitae risus nibh potenti. Elementum sed purus porttitor in. Maecenas enim tincidunt feugiat auctor aliquam bibendum.
            Morbi et mi integer amet. Non interdum aliquam imperdiet sem vitae.`,
          para5: `Blandit turpis viverra maecenas ridiculus. Posuere ante et mauris lectus lobortis pharetra id nibh pulvinar. Leo et elit mattis lectus adipiscing elementum ut cursus dolor. Id magna eget diam commodo a enim lacinia. Urna faucibus volutpat duis sapien quam nunc eget. Non quam amet elit tortor.
            Nulla maecenas egestas vitae auctor. Eget aliquam augue amet nullam leo et. Donec non imperdiet tellus vestibulum dolor. Consectetur aliquam vehicula et tincidunt interdum condimentum arcu. Varius etiam ut in massa tellus. Pharetra dui etiam risus adipiscing lorem vulputate felis sit volutpat. Tempus turpis ultrices lacus porta vivamus et. Lorem sem dolor sagittis nascetur hac et leo. Adipiscing fames at orci eu in. Ullamcorper diam id massa tempus. Non at ut tellus sed sociis nisl. Nunc vulputate eget feugiat scelerisque feugiat. Vivamus scelerisque lacus eros lectus sed.
            Fusce dignissim neque eu at nam faucibus risus ipsum volutpat. Tellus amet at a nibh. Sagittis cras aliquet metus feugiat pretium et eget. At diam suspendisse elementum sit convallis duis gravida. Pulvinar felis sagittis erat tincidunt ultricies arcu pellentesque quisque. Augue cursus elementum luctus nam. `,
        },
        {
          title: "Financial Services",
          date: "June 21, 2023",
          topic: "Sustainability Services - do more, with less ",
          image: blogimage3,
          para1: `Blandit turpis viverra maecenas ridiculus. Posuere ante et mauris lectus lobortis pharetra id nibh pulvinar. Leo et elit mattis lectus adipiscing elementum ut cursus dolor. Id magna eget diam commodo a enim lacinia. Urna faucibus volutpat duis sapien quam nunc eget. Non quam amet elit tortor.
            Nulla maecenas egestas vitae auctor. Eget aliquam augue amet nullam leo et. Donec non imperdiet tellus vestibulum dolor. Consectetur aliquam vehicula et tincidunt interdum condimentum arcu. Varius etiam ut in massa tellus. Pharetra dui etiam risus adipiscing lorem vulputate felis sit volutpat. Tempus turpis ultrices lacus porta vivamus et. Lorem sem dolor sagittis nascetur hac et leo. Adipiscing fames at orci eu in. Ullamcorper diam id massa tempus. Non at ut tellus sed sociis nisl. Nunc vulputate eget feugiat scelerisque feugiat. Vivamus scelerisque lacus eros lectus sed.
            Fusce dignissim neque eu at nam faucibus risus ipsum volutpat. Tellus amet at a nibh. Sagittis cras aliquet metus feugiat pretium et eget. At diam suspendisse elementum sit convallis duis gravida. Pulvinar felis sagittis erat tincidunt ultricies arcu pellentesque quisque. Augue cursus elementum luctus nam. Semper mattis interdum cras neque suspendisse nec vivamus tempor. Eu in in viverra eget. Dignissim eleifend mattis vel sit congue ut nisl leo commodo. Ornare sodales vitae risus nibh potenti. Elementum sed purus porttitor in. Maecenas enim tincidunt feugiat auctor aliquam bibendum.
            Morbi et mi integer amet. Non interdum aliquam imperdiet sem vitae.`,
          para2: `Lorem ipsum dolor sit amet consectetur. Lectus eu scelerisque neque eu tortor sed. Pellentesque tellus tellus malesuada maecenas mattis ut nisi. Egestas augue nunc tristique orci augue. A sapien eu at tellus dignissim commodo at. Porttitor quam diam sed velit. Condimentum egestas pellentesque tempor arcu id id in purus. Sed mollis enim vel et mauris. Nunc facilisi in et lectus massa. Commodo nulla accumsan nulla neque a placerat. Etiam tellus at massa amet eget velit. Nulla diam vel arcu proin pellentesque maecenas arcu. Quis morbi auctorsemper. 
            Placerat curabitur amet elementum ultricies feugiat eget eget ac. Tempor neque ac sed fermentum volutpat. Metus elementum aenean ligula tempus pharetra non tortor et. Justo elementum vivamus molestie mauris fames sapien mauris a. Suspendisse est in ultrices turpis facilisis sed id orci tortor. `,
          heading: "Lorem ipsum dolor sit amet consectetur dictumst turpis ",
          para3: `Lorem ipsum dolor sit amet consectetur. Lectus eu scelerisque neque eu tortor sed. Pellentesque tellus tellus malesuada maecenas mattis ut nisi. Egestas augue nunc tristique orci augue. A sapien eu at tellus dignissim commodo at. Porttitor quam diam sed velit. Condimentum egestas pellentesque tempor arcu id id in purus. Sed mollis enim vel et mauris. Nunc facilisi in et lectus massa. Commodo nulla accumsan nulla neque a placerat. Etiam tellus at massa amet eget velit. Nulla diam vel arcu proin pellentesque maecenas arcu. Quis morbi auctorsemper. Placerat curabitur amet elementum ultricies feugiat eget eget ac. Tempor neque ac sed fermentum volutpat. Metus elementum aenean ligula tempus pharetra non tortor et. Justo elementum vivamus molestie mauris fames sapien mauris a. Suspendisse est in ultrices turpis facilisis sed id orci tortor. `,
          para4: `Blandit turpis viverra maecenas ridiculus. Posuere ante et mauris lectus lobortis pharetra id nibh pulvinar. Leo et elit mattis lectus adipiscing elementum ut cursus dolor. Id magna eget diam commodo a enim lacinia. Urna faucibus volutpat duis sapien quam nunc eget. Non quam amet elit tortor.
            Nulla maecenas egestas vitae auctor. Eget aliquam augue amet nullam leo et. Donec non imperdiet tellus vestibulum dolor. Consectetur aliquam vehicula et tincidunt interdum condimentum arcu. Varius etiam ut in massa tellus. Pharetra dui etiam risus adipiscing lorem vulputate felis sit volutpat. Tempus turpis ultrices lacus porta vivamus et. Lorem sem dolor sagittis nascetur hac et leo. Adipiscing fames at orci eu in. Ullamcorper diam id massa tempus. Non at ut tellus sed sociis nisl. Nunc vulputate eget feugiat scelerisque feugiat. Vivamus scelerisque lacus eros lectus sed.
            Fusce dignissim neque eu at nam faucibus risus ipsum volutpat. Tellus amet at a nibh. Sagittis cras aliquet metus feugiat pretium et eget. At diam suspendisse elementum sit convallis duis gravida. Pulvinar felis sagittis erat tincidunt ultricies arcu pellentesque quisque. Augue cursus elementum luctus nam. Semper mattis interdum cras neque suspendisse nec vivamus tempor. Eu in in viverra eget. Dignissim eleifend mattis vel sit congue ut nisl leo commodo. Ornare sodales vitae risus nibh potenti. Elementum sed purus porttitor in. Maecenas enim tincidunt feugiat auctor aliquam bibendum.
            Morbi et mi integer amet. Non interdum aliquam imperdiet sem vitae.`,
          para5: `Blandit turpis viverra maecenas ridiculus. Posuere ante et mauris lectus lobortis pharetra id nibh pulvinar. Leo et elit mattis lectus adipiscing elementum ut cursus dolor. Id magna eget diam commodo a enim lacinia. Urna faucibus volutpat duis sapien quam nunc eget. Non quam amet elit tortor.
            Nulla maecenas egestas vitae auctor. Eget aliquam augue amet nullam leo et. Donec non imperdiet tellus vestibulum dolor. Consectetur aliquam vehicula et tincidunt interdum condimentum arcu. Varius etiam ut in massa tellus. Pharetra dui etiam risus adipiscing lorem vulputate felis sit volutpat. Tempus turpis ultrices lacus porta vivamus et. Lorem sem dolor sagittis nascetur hac et leo. Adipiscing fames at orci eu in. Ullamcorper diam id massa tempus. Non at ut tellus sed sociis nisl. Nunc vulputate eget feugiat scelerisque feugiat. Vivamus scelerisque lacus eros lectus sed.
            Fusce dignissim neque eu at nam faucibus risus ipsum volutpat. Tellus amet at a nibh. Sagittis cras aliquet metus feugiat pretium et eget. At diam suspendisse elementum sit convallis duis gravida. Pulvinar felis sagittis erat tincidunt ultricies arcu pellentesque quisque. Augue cursus elementum luctus nam. `,
        },
        {
          title: "Financial Services",
          date: "June 21, 2023",
          topic: "Sustainability Services - do more, with less ",
          image: blogimage4,
          para1: `Blandit turpis viverra maecenas ridiculus. Posuere ante et mauris lectus lobortis pharetra id nibh pulvinar. Leo et elit mattis lectus adipiscing elementum ut cursus dolor. Id magna eget diam commodo a enim lacinia. Urna faucibus volutpat duis sapien quam nunc eget. Non quam amet elit tortor.
            Nulla maecenas egestas vitae auctor. Eget aliquam augue amet nullam leo et. Donec non imperdiet tellus vestibulum dolor. Consectetur aliquam vehicula et tincidunt interdum condimentum arcu. Varius etiam ut in massa tellus. Pharetra dui etiam risus adipiscing lorem vulputate felis sit volutpat. Tempus turpis ultrices lacus porta vivamus et. Lorem sem dolor sagittis nascetur hac et leo. Adipiscing fames at orci eu in. Ullamcorper diam id massa tempus. Non at ut tellus sed sociis nisl. Nunc vulputate eget feugiat scelerisque feugiat. Vivamus scelerisque lacus eros lectus sed.
            Fusce dignissim neque eu at nam faucibus risus ipsum volutpat. Tellus amet at a nibh. Sagittis cras aliquet metus feugiat pretium et eget. At diam suspendisse elementum sit convallis duis gravida. Pulvinar felis sagittis erat tincidunt ultricies arcu pellentesque quisque. Augue cursus elementum luctus nam. Semper mattis interdum cras neque suspendisse nec vivamus tempor. Eu in in viverra eget. Dignissim eleifend mattis vel sit congue ut nisl leo commodo. Ornare sodales vitae risus nibh potenti. Elementum sed purus porttitor in. Maecenas enim tincidunt feugiat auctor aliquam bibendum.
            Morbi et mi integer amet. Non interdum aliquam imperdiet sem vitae.`,
          para2: `Lorem ipsum dolor sit amet consectetur. Lectus eu scelerisque neque eu tortor sed. Pellentesque tellus tellus malesuada maecenas mattis ut nisi. Egestas augue nunc tristique orci augue. A sapien eu at tellus dignissim commodo at. Porttitor quam diam sed velit. Condimentum egestas pellentesque tempor arcu id id in purus. Sed mollis enim vel et mauris. Nunc facilisi in et lectus massa. Commodo nulla accumsan nulla neque a placerat. Etiam tellus at massa amet eget velit. Nulla diam vel arcu proin pellentesque maecenas arcu. Quis morbi auctorsemper. 
            Placerat curabitur amet elementum ultricies feugiat eget eget ac. Tempor neque ac sed fermentum volutpat. Metus elementum aenean ligula tempus pharetra non tortor et. Justo elementum vivamus molestie mauris fames sapien mauris a. Suspendisse est in ultrices turpis facilisis sed id orci tortor. `,
          heading: "Lorem ipsum dolor sit amet consectetur dictumst turpis ",
          para3: `Lorem ipsum dolor sit amet consectetur. Lectus eu scelerisque neque eu tortor sed. Pellentesque tellus tellus malesuada maecenas mattis ut nisi. Egestas augue nunc tristique orci augue. A sapien eu at tellus dignissim commodo at. Porttitor quam diam sed velit. Condimentum egestas pellentesque tempor arcu id id in purus. Sed mollis enim vel et mauris. Nunc facilisi in et lectus massa. Commodo nulla accumsan nulla neque a placerat. Etiam tellus at massa amet eget velit. Nulla diam vel arcu proin pellentesque maecenas arcu. Quis morbi auctorsemper. Placerat curabitur amet elementum ultricies feugiat eget eget ac. Tempor neque ac sed fermentum volutpat. Metus elementum aenean ligula tempus pharetra non tortor et. Justo elementum vivamus molestie mauris fames sapien mauris a. Suspendisse est in ultrices turpis facilisis sed id orci tortor. `,
          para4: `Blandit turpis viverra maecenas ridiculus. Posuere ante et mauris lectus lobortis pharetra id nibh pulvinar. Leo et elit mattis lectus adipiscing elementum ut cursus dolor. Id magna eget diam commodo a enim lacinia. Urna faucibus volutpat duis sapien quam nunc eget. Non quam amet elit tortor.
            Nulla maecenas egestas vitae auctor. Eget aliquam augue amet nullam leo et. Donec non imperdiet tellus vestibulum dolor. Consectetur aliquam vehicula et tincidunt interdum condimentum arcu. Varius etiam ut in massa tellus. Pharetra dui etiam risus adipiscing lorem vulputate felis sit volutpat. Tempus turpis ultrices lacus porta vivamus et. Lorem sem dolor sagittis nascetur hac et leo. Adipiscing fames at orci eu in. Ullamcorper diam id massa tempus. Non at ut tellus sed sociis nisl. Nunc vulputate eget feugiat scelerisque feugiat. Vivamus scelerisque lacus eros lectus sed.
            Fusce dignissim neque eu at nam faucibus risus ipsum volutpat. Tellus amet at a nibh. Sagittis cras aliquet metus feugiat pretium et eget. At diam suspendisse elementum sit convallis duis gravida. Pulvinar felis sagittis erat tincidunt ultricies arcu pellentesque quisque. Augue cursus elementum luctus nam. Semper mattis interdum cras neque suspendisse nec vivamus tempor. Eu in in viverra eget. Dignissim eleifend mattis vel sit congue ut nisl leo commodo. Ornare sodales vitae risus nibh potenti. Elementum sed purus porttitor in. Maecenas enim tincidunt feugiat auctor aliquam bibendum.
            Morbi et mi integer amet. Non interdum aliquam imperdiet sem vitae.`,
          para5: `Blandit turpis viverra maecenas ridiculus. Posuere ante et mauris lectus lobortis pharetra id nibh pulvinar. Leo et elit mattis lectus adipiscing elementum ut cursus dolor. Id magna eget diam commodo a enim lacinia. Urna faucibus volutpat duis sapien quam nunc eget. Non quam amet elit tortor.
            Nulla maecenas egestas vitae auctor. Eget aliquam augue amet nullam leo et. Donec non imperdiet tellus vestibulum dolor. Consectetur aliquam vehicula et tincidunt interdum condimentum arcu. Varius etiam ut in massa tellus. Pharetra dui etiam risus adipiscing lorem vulputate felis sit volutpat. Tempus turpis ultrices lacus porta vivamus et. Lorem sem dolor sagittis nascetur hac et leo. Adipiscing fames at orci eu in. Ullamcorper diam id massa tempus. Non at ut tellus sed sociis nisl. Nunc vulputate eget feugiat scelerisque feugiat. Vivamus scelerisque lacus eros lectus sed.
            Fusce dignissim neque eu at nam faucibus risus ipsum volutpat. Tellus amet at a nibh. Sagittis cras aliquet metus feugiat pretium et eget. At diam suspendisse elementum sit convallis duis gravida. Pulvinar felis sagittis erat tincidunt ultricies arcu pellentesque quisque. Augue cursus elementum luctus nam. `,
        },
      ];
    
      const handleBlogs = (e) => {
        e.preventDefault();
        const index = Number(e.currentTarget.id);
      };

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };

    const items = [
        <div className="item" data-value="1" id={0} onClick={useModal}>
            <img src={modalArr[0].image} alt="image1" />
            <h2>{modalArr[0].heading}</h2>
        </div>,
        <div className="item" data-value="2" id={1} onClick={useModal}>
            <img src={modalArr[1].image} alt="image2" />
            <h2>{modalArr[1].heading}</h2>
        </div>,
        <div className="item" data-value="3" id={2} onClick={useModal}>
            <img src={modalArr[2].image} alt="image3" />
            <h2>{modalArr[2].heading}</h2>
        </div>,
        <div className="item" data-value="4" id={3} onClick={useModal}>
            <img src={modalArr[3].image} alt="image4" />
            <h2>{modalArr[3].heading}</h2>
        </div>,
        <div className="item" data-value="5" id={4} onClick={useModal}>
            <img src={modalArr[4].image} alt="image5" />
            <h2>{modalArr[4].heading}</h2>
        </div>,
    ];

    return (
        <div className="consumer_packaged_goods_body">
            <img src={banner} alt="banner" />
            <div className="consumer_packaged_goods_level_two">
                <div className="consumer_packaged_goods_level_two_heading">
                    <h2>Mondelez International's</h2>
                    <h2>data transformation,</h2>
                </div>
                <p>At Mirats Insights, we have a deep understanding of the Consumer Packaged Goods (CPG) industry and its unique challenges. Our culture is rooted in delivering exceptional market research and insights to support CPG companies in making informed decisions and driving growth. We work closely with CPG clients, providing them with accurate data, comprehensive analysis, and actionable insights. Our expertise spans various areas, including market trends, consumer behavior, competitive landscape, and product innovation. With a customer-centric approach, we prioritize understanding the needs and preferences of consumers in the CPG industry. By leveraging advanced analytics and research methodologies, we help our clients gain a competitive edge and stay ahead in this fast-paced and dynamic market. Join Mirats Insights and become part of a culture that thrives on delivering valuable insights to the CPG industry. Together, we can make a significant impact by helping CPG companies adapt to evolving consumer demands, drive innovation, and achieve success in a highly competitive market.</p>
            </div>
            <div className="consumer_packaged_goods_level_three">
                <div className="consumer_packaged_goods_level_three__heading">
                    <h2>Consulting solution services made </h2>
                    <h2>smarter, faster, and easier</h2>
                </div>
                <div className="consumer_packaged_goods_level_three_heading_card_parent">
                    {cards.map((card, index) => {
                        let i = index <= cardIcons.length - 1 ? index : index % cardIcons.length;
                        return (
                            <div className="consumer_packaged_goods_level_three_heading_card_child" key={index} id={'`${index}`'}>
                                <img src={cardIcons[i]} alt="cardIcons" />
                                <h2>{card.heading}</h2>
                                <p>{card.text}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="consumer_packaged_goods_level_four">
                <h2>Capabilities</h2>
                <p> in ornare feugiat sit tristique nibh. Neque sit ac lacinia eu. Neque consectetur enim placerat duis phasellus. Facilisis mauris nulla mi placerat. Magnis interdum nisl felis fames velit odio. Scelerisque commodo nulla vitae neque sit aliquam at commodo eu. </p>
                <div className="consumer_packaged_goods_level_four_sliding_info">
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
                    <Modal isOpen={modalIsOpen}>
                        <div className="consumer_packaged_goods_modal_body">
                            <img src={modalData.image} alt="image" />
                            <img src={remove} alt="remove" onClick={handleModalClose} />
                            <div className="consumer_packaged_goods_modal_body_paragraph">
                                <h2>{modalData.heading}</h2>
                                <p>{modalData.text}</p>
                            </div>
                        </div>
                    </Modal>
                </div>
            </div>
            <div className="consumer_packaged_goods_level_five">
                <h2>Where we serve</h2>
                <p> in ornare feugiat sit tristique nibh. Neque sit ac lacinia eu. Neque consectetur enim placerat duis phasellus. Facilisis mauris nulla mi placerat. Magnis interdum nisl felis fames velit odio. Scelerisque commodo nulla vitae neque sit aliquam at commodo eu. </p>
                <div className="consumer_packaged_goods_level_five_card_parent">
                    {gridCards.map((element, index)=>{
                        return(
                            <div id={index} className="consumer_packaged_goods_level_five_card_child">
                                <h2>{element.heading}</h2>
                                <p>{element.text}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="consumer_packaged_goods_level_six">
                <div className="consumer_packaged_goods_level_six_heading">
                    <h2>Our hybrid research solution</h2>
                    <h2>made approaches</h2>
                </div>
                {/* <div className="hybrid_research_level_four_unordered_list">
                    <AliceCarousel
                        autoPlayStrategy="none"
                        animationDuration={500}
                        animationType="fadeout"
                        // infinite
                        touchTracking={false}
                        disableDotsControls
                        buttonsDisabled
                        nextButton={<img src={right} alt="right_button"/>}
                        items={listItems}
                        responsive={responsive}
                        mouseTracking
                        controlsStrategy="alternate"
                    />
                </div> */}
                <div className="consumer_packaged_goods_level_six_sec">
                    <section>
                        <img src={image_list_sec} alt="image_list_sec" />
                    </section>
                    <section>
                        <div>
                            <h2>User-Friendly<span> Survey Creation Tools</span></h2>
                            <p>Feugiat egestas ut laoreet dolor lacinia eget nisi cursus. Maecenas elementum commodo tortor purus. Turpis sapien laoreet pharetra egestas morbi condimentum hendrerit neque. Auctor tincidunt elementum eleifend adipiscing purus. Cras nunc a tempor neque elit molestie malesuada diam morbi. Consequat aenean mi lacinia interdum eros ipsum dignissim amet pulvinar. Id ullamcorper at nisi venenatis urna nunc purus mi faucibus. Vitae aliquam pulvinar amet nulla rhoncus magna.</p>
                        </div>
                        <div>
                            <h3>Benefits of using Mirats Insights -</h3>
                            <ul>
                                <li>Lorem ipsum dolor sit amet consectetur Gravida malesua egestas a egestas.</li>
                                <li>Quis justo quisque purus at et Lorem  purus. </li>
                                <li>Massa eget elementum nunc semper. Eu laoreet mattis nec ullamcorper nunc Semper sed .</li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
            <div className="consumer_packaged_goods_level_seven">
        <div className="consumer_packaged_goods_level_seven_heading">
          <h2>
            What <span>we think</span>
          </h2>
          <div className="consumer_packaged_goods_level_seven_heading_blogs_parent">
            {blogsMap.map((element, index) => {
              return (
                <div
                  className="consumer_packaged_goods_level_seven_heading_blogs_child"
                  id={index} key={index}
                >
                  <section>
                    <img src={element.image} alt="blogImage" />
                  </section>
                  <section>
                    <p>{element.title}</p>
                    <h2>{element.topic}</h2>
                    <Link
                      className="consumer_packaged_goods_level_seven_heading_blogs_child_blog"
                      to={{
                        pathname: `/industry/blogsandarticles/${index}`,
                      }}
                    >
                      Learn more
                    </Link>
                  </section>
                </div>
              );
            })}
          </div>
        </div>
      </div>
        </div>
    )
}

export default ConsumerPackagedGoods;