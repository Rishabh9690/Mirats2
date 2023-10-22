import React, { useState } from "react";
import banner from "../../images/banners/healthCare.png";
import Cards from "../../cards/Cards.js";
import Carousel from "../../carousel/Carousel.js";
import carouselImg1 from "../../images/images/carouselImg1.png";
import carouselImg2 from "../../images/images/carouselImg2.png";
import carouselImg3 from "../../images/images/carouselImg3.png";
import carouselImg4 from "../../images/images/carouselImg4.png";
import carouselImg5 from "../../images/images/carouselImg5.png";
import SlidingModals from "../../slidingModals/SlidingModals.js";
import ServeCards from "../../serveCards/ServeCards.js";
import Listing from "../../listing/Listing.js";
import listingImg2 from "../../images/images/listingImg2.png";
import blogimage1 from "../../images/images/blogImage1.png";
import blogimage2 from "../../images/images/blogImage1.png";
import blogimage3 from "../../images/images/blogImage1.png";
import blogimage4 from "../../images/images/blogImage1.png";
import slidingModalImg1 from "../../images/images/slidingModalImg1.png";
import slidingModalImg2 from "../../images/images/slidingModalImg2.png";
import slidingModalImg3 from "../../images/images/slidingModalImg3.png";
import slidingModalImg4 from "../../images/images/slidingModalImg4.png";
import { Link, useNavigate } from "react-router-dom";
import "./healthCare.css";

const HealthCare = () => {
  const [listDetails, setListDetails] = useState({});
  const [defaultVisible, setDefaultVisible] = useState(true);

  const cardsHeadings = [{
    heading1: "Essential characteristics of effective ",
    heading2: "DIY survey platforms",
  }]

  const cardsContent = [{
    cardHeading: "User-Friendly Interface",
    cardText: "The platform should be intuitive and easy to navigate. Users should be able to create surveys without difficulty, customize them as desired, and distribute them with just a few clicks. The interface should also be appealing and well-organized, making the process of survey creation and analysis enjoyable and efficient.",
  }, {
    cardHeading: "Customization and Flexibility",
    cardText: "An effective DIY survey platform should provide a range of customization options to ensure the survey meets the specific needs of the user. This could include a variety of question types (multiple choice, rating scale, open-ended), options for branding and design elements, and flexibility in distribution methods (email, social media, website embed)."
  }, {
    cardHeading: "Powerful Analytical Tools",
    cardText: "After the survey is conducted, users need tools to make sense of the data. A good DIY survey platform should offer robust data analysis tools. These could include real-time reporting, data visualization options (like graphs and charts), cross-tabulation for more complex analysis, and data export options for further processing in other software."
  }]

  const details = [
    {
      heading: "Patient Care Platform",
      text: `Lorem ipsum dolor sit amet consectetur. Id massa duis aliquam mauris. Duis tortor eu massa tincidunt donec proin imperdiet sed. Adipiscing dictum praesent elementum risus posuere aenean maecenas congue. Ullamcorper in sagittis vestibulum aenean aliquet sit justo. Lorem amet amet enim molestie purus. Vitae et nibh habitant et aliquam neque. Rhoncus nunc augue accumsan convallis vivamus tellus vestibulum. Diam a id sit phasellus pharetra id posuere cras. Nibh diam magna eu erat nunc facilisis netus odio. Pretium sit maecenas purus ut faucibus porta aliquam nec. Gravida enim elit ac quis vel tristique etiam ante orci. Dui quam posuere tempus orci. Gravida interdum facilisi commodo mollis nisl. Donec sem amet nisi risus risus nam. Porttitor pharetra arcu vestibulum amet integer neque nisl. Quis egestas ultrices venenatis nibh faucibus. Nibh eu sit faucibus ornare. Scelerisque suscipit sit fermentum pharetra ut blandit sollicitudin sit tempus. Posuere ante vitae urna pellentesque massa `,
    },
    {
      heading: "Reimagining the banking experience",
      text: `Lorem ipsum dolor sit amet consectetur. Id massa duis aliquam mauris. Duis tortor eu massa tincidunt donec proin imperdiet sed. Adipiscing dictum praesent elementum risus posuere aenean maecenas congue. Ullamcorper in sagittis vestibulum aenean aliquet sit justo. Lorem amet amet enim molestie purus. Vitae et nibh habitant et aliquam neque. Rhoncus nunc augue accumsan convallis vivamus tellus vestibulum. Diam a id sit phasellus pharetra id posuere cras. Nibh diam magna eu erat nunc facilisis netus odio. Pretium sit maecenas purus ut faucibus porta aliquam nec. Gravida enim elit ac quis vel tristique etiam ante orci. Dui quam posuere tempus orci. Gravida interdum facilisi commodo mollis nisl. Donec sem amet nisi risus risus nam. Porttitor pharetra arcu vestibulum amet integer neque nisl. Quis egestas ultrices venenatis nibh faucibus. Nibh eu sit faucibus ornare. Scelerisque suscipit sit fermentum pharetra ut blandit sollicitudin sit tempus. Posuere ante vitae urna pellentesque massa `,
    },
    {
      heading: "Simplifying data exchange across the ",
      text: `Lorem ipsum dolor sit amet consectetur. Id massa duis aliquam mauris. Duis tortor eu massa tincidunt donec proin imperdiet sed. Adipiscing dictum praesent elementum risus posuere aenean maecenas congue. Ullamcorper in sagittis vestibulum aenean aliquet sit justo. Lorem amet amet enim molestie purus. Vitae et nibh habitant et aliquam neque. Rhoncus nunc augue accumsan convallis vivamus tellus vestibulum. Diam a id sit phasellus pharetra id posuere cras. Nibh diam magna eu erat nunc facilisis netus odio. Pretium sit maecenas purus ut faucibus porta aliquam nec. Gravida enim elit ac quis vel tristique etiam ante orci. Dui quam posuere tempus orci. Gravida interdum facilisi commodo mollis nisl. Donec sem amet nisi risus risus nam. Porttitor pharetra arcu vestibulum amet integer neque nisl. Quis egestas ultrices venenatis nibh faucibus. Nibh eu sit faucibus ornare. Scelerisque suscipit sit fermentum pharetra ut blandit sollicitudin sit tempus. Posuere ante vitae urna pellentesque massa `,
    },
    {
      heading: `Staying connected with patients and caregivers`,
      text: `Lorem ipsum dolor sit amet consectetur. Id massa duis aliquam mauris. Duis tortor eu massa tincidunt donec proin imperdiet sed. Adipiscing dictum praesent elementum risus posuere aenean maecenas congue. Ullamcorper in sagittis vestibulum aenean aliquet sit justo. Lorem amet amet enim molestie purus. Vitae et nibh habitant et aliquam neque. Rhoncus nunc augue accumsan convallis vivamus tellus vestibulum. Diam a id sit phasellus pharetra id posuere cras. Nibh diam magna eu erat nunc facilisis netus odio. Pretium sit maecenas purus ut faucibus porta aliquam nec. Gravida enim elit ac quis vel tristique etiam ante orci. Dui quam posuere tempus orci. Gravida interdum facilisi commodo mollis nisl. Donec sem amet nisi risus risus nam. Porttitor pharetra arcu vestibulum amet integer neque nisl. Quis egestas ultrices venenatis nibh faucibus. Nibh eu sit faucibus ornare. Scelerisque suscipit sit fermentum pharetra ut blandit sollicitudin sit tempus. Posuere ante vitae urna pellentesque massa `,
    },
  ];
  const handleList = (e) => {
    e.preventDefault();
    const index = Number(e.currentTarget.id);
    setListDetails({
      heading: details[index].heading,
      text: details[index].text,
    });
    setDefaultVisible(false);
  };
 
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

  
  const carouselData = [{
    image: carouselImg1,
    title: "Consumer Packaged Goods",
    text: "At Mirats Insights, we have a deep understanding of the Consumer Packaged Goods (CPG) industry and its unique challenges. Our culture is rooted in delivering exceptional market research and insights to support CPG companies in making informed decisions and driving growth."
}, {
    image: carouselImg2,
    title: "Financial Services",
    text: "At Mirats Insights, we specialize in providing comprehensive market research and insights to the financial services industry. We understand the unique challenges and opportunities that financial institutions face in today's dynamic and competitive landscape."
}, {
    image: carouselImg3,
    title: "Healthcare",
    text: "At Mirats Insights, we have a deep understanding of the healthcare industry and its complex dynamics. Our culture is centered around delivering actionable market research and insights to support healthcare organizations in driving innovation, improving patient outcomes, and navigating the evolving healthcare landscape."
}, {
    image: carouselImg4,
    title: "Marketing Research",
    text: "At Mirats Insights, marketing research is at the core of our culture. We are dedicated to providing our clients with comprehensive insights that drive strategic marketing decisions and deliver measurable results. We work closely with businesses across industries to understand their unique marketing challenges and objectives."
}, {
    image: carouselImg5,
    title: "Consulting",
    text: "At Mirats Insights, we pride ourselves on our exceptional consulting services. Our team of experienced consultants brings together deep industry knowledge, analytical expertise, and a client-centric approach to deliver transformative solutions. We collaborate closely with our clients to understand their unique challenges and goals."
}]
const carouselInfo = ["Our Industry", "You need insights", " we have solutions."];
const slidingModalHeading = ["Why use", "mirats insights ? "]

  const slidingModalData = [{
    image: slidingModalImg1,
    heading: "Cost-effective research solution",
    text: `Lorem ipsum dolor sit amet consectetur. Cursus viverra augue est nisl. Gravida sem malesuada egestas justo. Integer mattis eget lorem feugiat. Fringilla enim interdum egestas iaculis sit neque duis nulla viverra. Massa felis vestibulum nunc nulla fringilla eleifend erat. Sed quis laoreet amet arcu. Accumsan metus in egestas eu ornare odio tincidunt in donec. Elit tristique mi dui pretium vel amet interdum massa morbi. Enim cursus neque interdum iaculis pellentesque facilisis vestibulum. Nibh adipiscing aliquam consequat volutpat augue augue. Tellus quis velit ut tortor semper augue proin. Cursus dolor blandit imperdiet cras lacus volutpat. Senectus gravida elementum porttitor ut.
          Amet purus eget integer praesent ipsum. Aliquam volutpat sit ultrices neque. Pharetra non tellus sit magna amet at egestas. Congue volutpat commodo dui maecenas quis aliquam mauris nibh eu. Sit congue nibh convallis nibh metus purus augue. Venenatis sapien aliquam vehicula mattis egestas ipsum eu. Mattis tempus aliquam tempor tempor dictum cum. Tellus morbi nec aliquam fringilla vel. Aliquet ipsum aliquam quam neque. Tristique imperdiet adipiscing ut turpis. Eu quis diam fermentum tellus nunc morbi mollis consequat. Tincidunt nibh ac eget eu. Turpis eleifend placerat metus tincidunt dignissim habitant tincidunt. Viverra risus justo senectus risus amet. In sit ut posuere lorem. 
          Sit vitae non rhoncus eget massa. Elementum nec sit risus et lobortis. Duis nec purus non netus enim gravida dignissim metus. Eget sed blandit a dignissim diam pulvinar id nulla. Ornare in sit enim cursus non vitae condimentum habitasse. Lorem amet mi sed libero. Ut sit sed semper suspendisse. Est senectus amet non felis gravida leo sapien mattis. A cum mattis mi netus maecenas amet. Parturient orci donec suscipit nec adipiscing nec. Sed nibh adipiscing tincidunt pharetra aliquet amet. Fermentum libero adipiscing id malesuada massa platea.
          Nulla pellentesque viverra mi risus. Quisque urna tortor nisi facilisi maecenas. Tellus tincidunt at accumsan id sed bibendum ut mauris. Vitae sit cum turpis fringilla eu ullamcorper. Etiam sagittis amet vestibulum risus fermentum a a sollicitudin nulla. Vitae volutpat pellentesque sed vel pharetra eleifend nulla. Suspendisse id venenatis elit quam viverra faucibus ullamcorper metus. Risus purus aliquet cum placerat posuere fringilla lorem consequat quisque. Enim consectetur sed volutpat lacus cursus. Nec urna ipsum orci eu dui. Gravida montes proin tincidunt sed integer. Lorem gravida habitasse eu elementum venenatis placerat bibendum dignissim et.`
  }, {
    image: slidingModalImg2,
    heading: "Geographical flexibiltiy",
    text: `Lorem ipsum dolor sit amet consectetur. Cursus viverra augue est nisl. Gravida sem malesuada egestas justo. Integer mattis eget lorem feugiat. Fringilla enim interdum egestas iaculis sit neque duis nulla viverra. Massa felis vestibulum nunc nulla fringilla eleifend erat. Sed quis laoreet amet arcu. Accumsan metus in egestas eu ornare odio tincidunt in donec. Elit tristique mi dui pretium vel amet interdum massa morbi. Enim cursus neque interdum iaculis pellentesque facilisis vestibulum. Nibh adipiscing aliquam consequat volutpat augue augue. Tellus quis velit ut tortor semper augue proin. Cursus dolor blandit imperdiet cras lacus volutpat. Senectus gravida elementum porttitor ut.
          Amet purus eget integer praesent ipsum. Aliquam volutpat sit ultrices neque. Pharetra non tellus sit magna amet at egestas. Congue volutpat commodo dui maecenas quis aliquam mauris nibh eu. Sit congue nibh convallis nibh metus purus augue. Venenatis sapien aliquam vehicula mattis egestas ipsum eu. Mattis tempus aliquam tempor tempor dictum cum. Tellus morbi nec aliquam fringilla vel. Aliquet ipsum aliquam quam neque. Tristique imperdiet adipiscing ut turpis. Eu quis diam fermentum tellus nunc morbi mollis consequat. Tincidunt nibh ac eget eu. Turpis eleifend placerat metus tincidunt dignissim habitant tincidunt. Viverra risus justo senectus risus amet. In sit ut posuere lorem. 
          Sit vitae non rhoncus eget massa. Elementum nec sit risus et lobortis. Duis nec purus non netus enim gravida dignissim metus. Eget sed blandit a dignissim diam pulvinar id nulla. Ornare in sit enim cursus non vitae condimentum habitasse. Lorem amet mi sed libero. Ut sit sed semper suspendisse. Est senectus amet non felis gravida leo sapien mattis. A cum mattis mi netus maecenas amet. Parturient orci donec suscipit nec adipiscing nec. Sed nibh adipiscing tincidunt pharetra aliquet amet. Fermentum libero adipiscing id malesuada massa platea.
          Nulla pellentesque viverra mi risus. Quisque urna tortor nisi facilisi maecenas. Tellus tincidunt at accumsan id sed bibendum ut mauris. Vitae sit cum turpis fringilla eu ullamcorper. Etiam sagittis amet vestibulum risus fermentum a a sollicitudin nulla. Vitae volutpat pellentesque sed vel pharetra eleifend nulla. Suspendisse id venenatis elit quam viverra faucibus ullamcorper metus. Risus purus aliquet cum placerat posuere fringilla lorem consequat quisque. Enim consectetur sed volutpat lacus cursus. Nec urna ipsum orci eu dui. Gravida montes proin tincidunt sed integer. Lorem gravida habitasse eu elementum venenatis placerat bibendum dignissim et.`
  }, {
    image: slidingModalImg3,
    heading: "Time efficiency",
    text: `Lorem ipsum dolor sit amet consectetur. Cursus viverra augue est nisl. Gravida sem malesuada egestas justo. Integer mattis eget lorem feugiat. Fringilla enim interdum egestas iaculis sit neque duis nulla viverra. Massa felis vestibulum nunc nulla fringilla eleifend erat. Sed quis laoreet amet arcu. Accumsan metus in egestas eu ornare odio tincidunt in donec. Elit tristique mi dui pretium vel amet interdum massa morbi. Enim cursus neque interdum iaculis pellentesque facilisis vestibulum. Nibh adipiscing aliquam consequat volutpat augue augue. Tellus quis velit ut tortor semper augue proin. Cursus dolor blandit imperdiet cras lacus volutpat. Senectus gravida elementum porttitor ut.
          Amet purus eget integer praesent ipsum. Aliquam volutpat sit ultrices neque. Pharetra non tellus sit magna amet at egestas. Congue volutpat commodo dui maecenas quis aliquam mauris nibh eu. Sit congue nibh convallis nibh metus purus augue. Venenatis sapien aliquam vehicula mattis egestas ipsum eu. Mattis tempus aliquam tempor tempor dictum cum. Tellus morbi nec aliquam fringilla vel. Aliquet ipsum aliquam quam neque. Tristique imperdiet adipiscing ut turpis. Eu quis diam fermentum tellus nunc morbi mollis consequat. Tincidunt nibh ac eget eu. Turpis eleifend placerat metus tincidunt dignissim habitant tincidunt. Viverra risus justo senectus risus amet. In sit ut posuere lorem. 
          Sit vitae non rhoncus eget massa. Elementum nec sit risus et lobortis. Duis nec purus non netus enim gravida dignissim metus. Eget sed blandit a dignissim diam pulvinar id nulla. Ornare in sit enim cursus non vitae condimentum habitasse. Lorem amet mi sed libero. Ut sit sed semper suspendisse. Est senectus amet non felis gravida leo sapien mattis. A cum mattis mi netus maecenas amet. Parturient orci donec suscipit nec adipiscing nec. Sed nibh adipiscing tincidunt pharetra aliquet amet. Fermentum libero adipiscing id malesuada massa platea.
          Nulla pellentesque viverra mi risus. Quisque urna tortor nisi facilisi maecenas. Tellus tincidunt at accumsan id sed bibendum ut mauris. Vitae sit cum turpis fringilla eu ullamcorper. Etiam sagittis amet vestibulum risus fermentum a a sollicitudin nulla. Vitae volutpat pellentesque sed vel pharetra eleifend nulla. Suspendisse id venenatis elit quam viverra faucibus ullamcorper metus. Risus purus aliquet cum placerat posuere fringilla lorem consequat quisque. Enim consectetur sed volutpat lacus cursus. Nec urna ipsum orci eu dui. Gravida montes proin tincidunt sed integer. Lorem gravida habitasse eu elementum venenatis placerat bibendum dignissim et.`
  }, {
    image: slidingModalImg4,
    heading: "Skilled Moderators and interviewers ",
    text: `Lorem ipsum dolor sit amet consectetur. Cursus viverra augue est nisl. Gravida sem malesuada egestas justo. Integer mattis eget lorem feugiat. Fringilla enim interdum egestas iaculis sit neque duis nulla viverra. Massa felis vestibulum nunc nulla fringilla eleifend erat. Sed quis laoreet amet arcu. Accumsan metus in egestas eu ornare odio tincidunt in donec. Elit tristique mi dui pretium vel amet interdum massa morbi. Enim cursus neque interdum iaculis pellentesque facilisis vestibulum. Nibh adipiscing aliquam consequat volutpat augue augue. Tellus quis velit ut tortor semper augue proin. Cursus dolor blandit imperdiet cras lacus volutpat. Senectus gravida elementum porttitor ut.
          Amet purus eget integer praesent ipsum. Aliquam volutpat sit ultrices neque. Pharetra non tellus sit magna amet at egestas. Congue volutpat commodo dui maecenas quis aliquam mauris nibh eu. Sit congue nibh convallis nibh metus purus augue. Venenatis sapien aliquam vehicula mattis egestas ipsum eu. Mattis tempus aliquam tempor tempor dictum cum. Tellus morbi nec aliquam fringilla vel. Aliquet ipsum aliquam quam neque. Tristique imperdiet adipiscing ut turpis. Eu quis diam fermentum tellus nunc morbi mollis consequat. Tincidunt nibh ac eget eu. Turpis eleifend placerat metus tincidunt dignissim habitant tincidunt. Viverra risus justo senectus risus amet. In sit ut posuere lorem. 
          Sit vitae non rhoncus eget massa. Elementum nec sit risus et lobortis. Duis nec purus non netus enim gravida dignissim metus. Eget sed blandit a dignissim diam pulvinar id nulla. Ornare in sit enim cursus non vitae condimentum habitasse. Lorem amet mi sed libero. Ut sit sed semper suspendisse. Est senectus amet non felis gravida leo sapien mattis. A cum mattis mi netus maecenas amet. Parturient orci donec suscipit nec adipiscing nec. Sed nibh adipiscing tincidunt pharetra aliquet amet. Fermentum libero adipiscing id malesuada massa platea.
          Nulla pellentesque viverra mi risus. Quisque urna tortor nisi facilisi maecenas. Tellus tincidunt at accumsan id sed bibendum ut mauris. Vitae sit cum turpis fringilla eu ullamcorper. Etiam sagittis amet vestibulum risus fermentum a a sollicitudin nulla. Vitae volutpat pellentesque sed vel pharetra eleifend nulla. Suspendisse id venenatis elit quam viverra faucibus ullamcorper metus. Risus purus aliquet cum placerat posuere fringilla lorem consequat quisque. Enim consectetur sed volutpat lacus cursus. Nec urna ipsum orci eu dui. Gravida montes proin tincidunt sed integer. Lorem gravida habitasse eu elementum venenatis placerat bibendum dignissim et.`
  }]

  const serveCardsHeading = ["Where we serve", " in ornare feugiat sit tristique nibh. Neque sit ac lacinia eu. Neque consectetur enim placerat duis phasellus. Facilisis mauris nulla mi placerat. Magnis interdum nisl felis fames velit odio. Scelerisque commodo nulla vitae neque sit aliquam at commodo eu. "];
  const serveCardsArr = [{
    title: "Agribusiness",
    text: `mus cras dignissim et lacinia sit maecenas. Amet egestas viverra sit vestibulum risus eget velit ut elementum. Nisl molestie facilisis non vivamus.
    Urna eget bibendum feugiat congue sed. Consectetur at a enim dictum tempus. `,
  }, {
    title: "Beauty",
    text: `mus cras dignissim et lacinia sit maecenas. Amet egestas viverra sit vestibulum risus eget velit ut elementum. Nisl molestie facilisis non vivamus.
    Urna eget bibendum feugiat congue sed. Consectetur at a enim dictum tempus. `,
  }, {
    title: "Beverages",
    text: `mus cras dignissim et lacinia sit maecenas. Amet egestas viverra sit vestibulum risus eget velit ut elementum. Nisl molestie facilisis non vivamus.
    Urna eget bibendum feugiat congue sed. Consectetur at a enim dictum tempus. `,
  }, {
    title: "Food",
    text: `mus cras dignissim et lacinia sit maecenas. Amet egestas viverra sit vestibulum risus eget velit ut elementum. Nisl molestie facilisis non vivamus.
    Urna eget bibendum feugiat congue sed. Consectetur at a enim dictum tempus. `,
  }, {
    title: "Home and personal care",
    text: `mus cras dignissim et lacinia sit maecenas. Amet egestas viverra sit vestibulum risus eget velit ut elementum. Nisl molestie facilisis non vivamus.
    Urna eget bibendum feugiat congue sed. Consectetur at a enim dictum tempus. `,
  }]
  const content=[{
    heading1: "Our online survey ",
    heading2: "made approaches",
    lists: ["Innovative Data Collection Technologies", "Advance Sampling Technologies", "Customised Survey Design", "Comprehensive Data Analysis"],
    sectionHeading1: "Innovative ",
    sectionHeading2: "Data Collection Technologiess",
    sectionText: "Mirats Insights is a forerunner in implementing innovative data collection technologies in our online surveys. We harness the power of advanced technologies, from AI-enhanced analytics to real-time data gathering methods, to ensure we capture diverse and thorough insights for our clients. Our tech-driven approach to data collection equips us with versatility and efficiency, making our market research services stand out in the industry.",
    sectionListHeading: "Benefits of using Mirats Insights -",
    sectionListPoints: ["Data Reliability and Precision: Our advanced data collection technologies ensure the collection of high-quality, trustworthy data.", "Scalability: The innovative technologies we use allow for scalability, meaning we can handle projects of any size or complexity effectively."],
}]
  return (
    <div className="health_care_body">
      <img src={banner} alt="banner" />
      <Cards cardsHeadings={cardsHeadings} cardsContent={cardsContent} />
      <div className="health_care_level_three">
        <div className="health_care_level_three_heading">
          <h2>It's time for banks to</h2>
          <h2>chanllenge everything</h2>
        </div>
        <div className="health_care_level_three_sec">
          <section>
            <ol>
              <li tabIndex={1} id={1} onClick={handleList}>
                Staying connected with patients and caregivers
              </li>
              <li tabIndex={1} id={2} onClick={handleList}>
                Simplifying data exchange across the healthcare value chain
              </li>
              <li tabIndex={1} id={3} onClick={handleList}>
                Staying connected with patients and caregivers
              </li>
            </ol>
          </section>
          <section>
            {defaultVisible ? (
              <>
                <h2>{details[0].heading}</h2>
                <p>{details[0].text}</p>
              </>
            ) : (
              <>
                <h2>{listDetails.heading}</h2>
                <p>{listDetails.text}</p>
              </>
            )}
          </section>
        </div>
      </div>
      <Carousel carouselInfo={carouselInfo} carouselData={carouselData} />
      <SlidingModals slidingModalHeading={slidingModalHeading} slidingModalData={slidingModalData} />
      <ServeCards serveCardsHeading={serveCardsHeading} serveCardsArr={serveCardsArr} />
      <Listing content={content} image={listingImg2}/>
      <div className="health_care_level_eight">
        <div className="health_care_level_eight_heading">
          <h2>
            What <span>we think</span>
          </h2>
          <div className="health_care_level_eight_heading_blogs_parent">
            {blogsMap.map((element, index) => {
              return (
                <div
                  className="health_care_level_eight_heading_blogs_child"
                  id={index} key={index}
                >
                  <section>
                    <img src={element.image} alt="blogImage" />
                  </section>
                  <section>
                    <p>{element.title}</p>
                    <h2>{element.topic}</h2>
                    <Link
                      className="health_care_level_eight_heading_blogs_child_blog"
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
  );
};

export default HealthCare;
