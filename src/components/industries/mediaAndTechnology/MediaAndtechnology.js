import React, { useEffect, useState } from "react";
import banner from "../../images/banners/media.png";
import Cards from "../../cards/Cards.js";
import SlidingModals from "../../slidingModals/SlidingModals.js";
import ServeCards from "../../serveCards/ServeCards.js";
import Listing from "../../listing/Listing.js";
import listing2 from "../../images/images/listingImg2.png"
import image1 from "../../images/images/image1.png";
import image2 from "../../images/images/image2.png";
import plus from "./images/plus.png";
import blogimage1 from "../../images/images/blogImage1.png";
import blogimage2 from "../../images/images/blogImage2.png";
import blogimage3 from "../../images/images/blogImage3.png";
import blogimage4 from "../../images/images/blogImage4.png";
import slidingModalImg1 from "../../images/images/slidingModalImg1.png";
import slidingModalImg2 from "../../images/images/slidingModalImg2.png";
import slidingModalImg3 from "../../images/images/slidingModalImg3.png";
import slidingModalImg4 from "../../images/images/slidingModalImg4.png";
import slidingModalImg5 from "../../images/images/slidingModalImg5.png";
import { Link } from "react-router-dom";
import "./mediaAndTechnology.css";

const MediaAndTechnology = ({ blogs }) => {
  const [status1, setStattus1] = useState(true);
  const [status2, setStattus2] = useState(true);

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
  }, {
    image: slidingModalImg5,
    heading: "Data analysis and reporting ",
    text: `Lorem ipsum dolor sit amet consectetur. Cursus viverra augue est nisl. Gravida sem malesuada egestas justo. Integer mattis eget lorem feugiat. Fringilla enim interdum egestas iaculis sit neque duis nulla viverra. Massa felis vestibulum nunc nulla fringilla eleifend erat. Sed quis laoreet amet arcu. Accumsan metus in egestas eu ornare odio tincidunt in donec. Elit tristique mi dui pretium vel amet interdum massa morbi. Enim cursus neque interdum iaculis pellentesque facilisis vestibulum. Nibh adipiscing aliquam consequat volutpat augue augue. Tellus quis velit ut tortor semper augue proin. Cursus dolor blandit imperdiet cras lacus volutpat. Senectus gravida elementum porttitor ut.
          Amet purus eget integer praesent ipsum. Aliquam volutpat sit ultrices neque. Pharetra non tellus sit magna amet at egestas. Congue volutpat commodo dui maecenas quis aliquam mauris nibh eu. Sit congue nibh convallis nibh metus purus augue. Venenatis sapien aliquam vehicula mattis egestas ipsum eu. Mattis tempus aliquam tempor tempor dictum cum. Tellus morbi nec aliquam fringilla vel. Aliquet ipsum aliquam quam neque. Tristique imperdiet adipiscing ut turpis. Eu quis diam fermentum tellus nunc morbi mollis consequat. Tincidunt nibh ac eget eu. Turpis eleifend placerat metus tincidunt dignissim habitant tincidunt. Viverra risus justo senectus risus amet. In sit ut posuere lorem. 
          Sit vitae non rhoncus eget massa. Elementum nec sit risus et lobortis. Duis nec purus non netus enim gravida dignissim metus. Eget sed blandit a dignissim diam pulvinar id nulla. Ornare in sit enim cursus non vitae condimentum habitasse. Lorem amet mi sed libero. Ut sit sed semper suspendisse. Est senectus amet non felis gravida leo sapien mattis. A cum mattis mi netus maecenas amet. Parturient orci donec suscipit nec adipiscing nec. Sed nibh adipiscing tincidunt pharetra aliquet amet. Fermentum libero adipiscing id malesuada massa platea.
          Nulla pellentesque viverra mi risus. Quisque urna tortor nisi facilisi maecenas. Tellus tincidunt at accumsan id sed bibendum ut mauris. Vitae sit cum turpis fringilla eu ullamcorper. Etiam sagittis amet vestibulum risus fermentum a a sollicitudin nulla. Vitae volutpat pellentesque sed vel pharetra eleifend nulla. Suspendisse id venenatis elit quam viverra faucibus ullamcorper metus. Risus purus aliquet cum placerat posuere fringilla lorem consequat quisque. Enim consectetur sed volutpat lacus cursus. Nec urna ipsum orci eu dui. Gravida montes proin tincidunt sed integer. Lorem gravida habitasse eu elementum venenatis placerat bibendum dignissim et.`
  }]
  const content = [{
    heading1: "Our online survey ",
    heading2: "made approaches",
    lists: ["Innovative Data Collection Technologies", "Advance Sampling Technologies", "Customised Survey Design", "Comprehensive Data Analysis"],
    sectionHeading1: "Innovative ",
    sectionHeading2: "Data Collection Technologiess",
    sectionText: "Mirats Insights is a forerunner in implementing innovative data collection technologies in our online surveys. We harness the power of advanced technologies, from AI-enhanced analytics to real-time data gathering methods, to ensure we capture diverse and thorough insights for our clients. Our tech-driven approach to data collection equips us with versatility and efficiency, making our market research services stand out in the industry.",
    sectionListHeading: "Benefits of using Mirats Insights -",
    sectionListPoints: ["Data Reliability and Precision: Our advanced data collection technologies ensure the collection of high-quality, trustworthy data.", "Scalability: The innovative technologies we use allow for scalability, meaning we can handle projects of any size or complexity effectively."],
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

  return (
    <div className="media_tech_body">
      <img src={banner} alt="banner" />
      <Cards cardsHeadings={cardsHeadings} cardsContent={cardsContent} />
      <div className="media_tech_level_three">
        <h2>
          Innovate to <span>excite</span>
        </h2>
        <p>
          At Mirats Insights, we believe in the transformative power of
          innovation. We continuously innovate to provide exciting, tech-enabled
          solutions that drive meaningful engagement and generate actionable
          insights. By leveraging cutting-edge technologies in media and
          communication, we've developed solutions that not only simplify data
          collection and analysis but also redefine the way our clients interact
          with their audiences. Whether it's through our interactive online
          surveys or advanced data visualization tools, we strive to create an
          experience that sparks curiosity, invites participation, and
          ultimately, leads to richer, more valuable insights. Our commitment to
          innovation fuels our pursuit of excellence, enabling us to
          consistently deliver exceptional results for our clients.
        </p>
      </div>
      <div className="media_tech_level_four">
        <div className="media_tech_level_four_grid">
          <section className="media_tech_level_four_grid_text">
            <h2>
              Strategic advisory services for businesses seeking growth and
              optimisation.
            </h2>
            <img src={plus} alt="plus" onClick={() => setStattus1(!status1)} />
          </section>
          <section>
            {status1 ? (
              <img src={image1} alt="image1" />
            ) : (
              <p>
                Lorem ipsum dolor sit amet consectetur. Donec sodales et enim
                lorem quam tristique. Tellus erat metus ut amet quis in nec
                maecenas. Sit in cum elit eget neque lorem et est at. Proin
                semper pulvinar pellentesque sed penatibus mi aliquet vitae hac.
                Purus augue luctus pellentesque aliquet egestas convallis eget.
                Tellus tortor scelerisque nunc porttitor. Ut justo faucibus
                convallis ullamcorper mauris enim vitae vulputate pellentesque.
                Dictum lectus id tincidunt senectus. Pretium nibh massa sed
                lectus sit lacus donec dui. Sed semper phasellus mattis urna
                sollicitudin malesuada vulputate pharetra. Id eu habitant eget
                suscipit. Praesent risus sit non sem eget. Ornare et rutrum sit
                sed suspendisse pellentesque. Nec auctor neque in gravida eget
                elementum urna.
              </p>
            )}
          </section>
        </div>
        <div className="media_tech_level_four_grid">
          <section>
            {status2 ? (
              <img src={image2} alt="image2" />
            ) : (
              <p>
                Lorem ipsum dolor sit amet consectetur. Donec sodales et enim
                lorem quam tristique. Tellus erat metus ut amet quis in nec
                maecenas. Sit in cum elit eget neque lorem et est at. Proin
                semper pulvinar pellentesque sed penatibus mi aliquet vitae hac.
                Purus augue luctus pellentesque aliquet egestas convallis eget.
                Tellus tortor scelerisque nunc porttitor. Ut justo faucibus
                convallis ullamcorper mauris enim vitae vulputate pellentesque.
                Dictum lectus id tincidunt senectus. Pretium nibh massa sed
                lectus sit lacus donec dui. Sed semper phasellus mattis urna
                sollicitudin malesuada vulputate pharetra. Id eu habitant eget
                suscipit. Praesent risus sit non sem eget. Ornare et rutrum sit
                sed suspendisse pellentesque. Nec auctor neque in gravida eget
                elementum urna.
              </p>
            )}
          </section>
          <section className="media_tech_level_four_grid_text">
            <h2>
              Specialised industry knowledge and deep understanding of market
              trends.
            </h2>
            <img src={plus} alt="plus" onClick={() => setStattus2(!status2)} />
          </section>
        </div>
      </div>
      <SlidingModals slidingModalHeading={slidingModalHeading} slidingModalData={slidingModalData} />
      <ServeCards serveCardsHeading={serveCardsHeading} serveCardsArr={serveCardsArr} />
      <Listing content={content} image={listing2}/>
      <div className="media_tech_level_eight">
        <div className="media_tech_level_eight_heading">
          <h2>
            What <span>we think</span>
          </h2>
          <div className="media_tech_level_eight_heading_blogs_parent">
            {blogsMap.map((element, index) => {
              return (
                <div
                  className="media_tech_level_eight_heading_blogs_child"
                  id={index} key={index}
                >
                  <section>
                    <img src={element.image} alt="blogImage" />
                  </section>
                  <section>
                    <p>{element.title}</p>
                    <h2>{element.topic}</h2>
                    <Link
                      className="media_tech_level_eight_heading_blogs_child_blog"
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

export default MediaAndTechnology;
