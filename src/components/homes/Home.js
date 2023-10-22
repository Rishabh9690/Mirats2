import React, { useState } from "react";
import home1 from "../images/images/home1.png";
import home2 from "../images/images/home2.png";
import home3 from "../images/images/home3.png";
import emptyHall from "../images/images/emptyHall.png";
import handShake from "../images/images/handShake.png";
import mobileCall from "../images/images/mobileCall.png";
import teamMeeting from "../images/images/teamMeeting.png";
import productone from "../images/images/productone.png";
import producttwo from "../images/images/producttwo.png";
import productthree from "../images/images/productthree.png";
import Carousel from "../carousel/Carousel.js";
import carouselImg1 from "../images/images/carouselImg1.png";
import carouselImg2 from "../images/images/carouselImg2.png";
import carouselImg3 from "../images/images/carouselImg3.png";
import carouselImg4 from "../images/images/carouselImg4.png";
import carouselImg5 from "../images/images/carouselImg5.png";
import carouselImg6 from "../images/images/carouselImg6.png";
import Testimonail from "../testimonial/Testimonial.js";
import testimonialImg1 from "../images/images/client1.png";
import testimonialImg2 from "../images/images/client2.png";
import Clients from "../clients/Clients";
import "./home.css";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = ()=>{
    
    const homeData = [{
        image: home1,
        heading: "Connecting communication to communities",
        text: "Welcome to Mirats Insights, where we believe in the power of communication to strengthen communities. Our mission is to help organizations build meaningful connections with their target audiences."
    }, {
        image: home2,
        heading: "Sustainability Services - do more, with less",
        text: "Welcome to Mirats Insights Sustainability Services, where we are committed to helping organizations do more with less by integrating sustainable practices into their operations. We believe that sustainability is not only essential for the environment but also a key driver of business success."
    }, {
        image: home3,
        heading: "Connecting communication to communities",
        text: "In a world where effective communication holds the key to creating meaningful connections, Mirats Insights stands as a bridge linking businesses to their target communities. Leveraging data-driven insights and deep market understanding, we ensure that messages resonate and build lasting relationships."
    }]

    const articleCards = [{
        image: emptyHall,
        type: "Blogs",
        title: "Sustainability Services - do more, with less"
    }, {
        image: teamMeeting,
        type: "Article",
        title: "Sustainability Services - do more, with less"
    }, {
        image: handShake,
        type: "Blogs",
        title: "Sustainability Services - do more, with less"
    }, {
        image: mobileCall,
        type: "Article",
        title: "Sustainability Services - do more, with less"
    }]

    const empoweringCards = [{
        title: "MI for",
        topic: "Industry-Specific Expertise",
        text: "At Mirats Insights, we pride ourselves on our deep understanding of various industries and sectors. Our team of experts combines extensive industry knowledge with data-driven insights to deliver valuable solutions tailored to your specific needs.",
        color: `linear-gradient(95deg, #6530FE -7.9%, #CF47FF 108.76%)`
    }, {
        title: "MI for",
        topic: "AI driven solutions for exceptional outcomes",
        text: "Welcome to Mirats Insights, where we harness the power of artificial intelligence (AI) to deliver exceptional outcomes for our clients. Our AI-driven solutions revolutionize the way businesses make decisions, uncover insights, and drive growth.",
        color: `linear-gradient(94deg, #0047FF -7.33%, #46DAE3 107.53%)`
    }, {
        title: "MI for",
        topic: "Seriously Experience Unmatched Results",
        text: "Welcome to Mirats Insights, where we harness the power of artificial intelligence (AI) to deliver exceptional outcomes for our clients. Our AI-driven solutions revolutionize the way businesses make decisions, uncover insights, and drive growth.",
        color: `linear-gradient(95deg, #0B1722 -7.9%, #7299B9 106.69%)`
    }]


    const Statistic = [[{
        num: "234K +",
        text: "Experience Profile",
        color: `linear-gradient(92deg, #6E33FF 19.06%, rgba(196, 69, 255, 0.40) 81.28%)`
    }, {
        num: "23",
        text: "Mirats Insights Product",
        color: `linear-gradient(92deg, #6E33FF 19.06%, rgba(196, 69, 255, 0.40) 81.28%)`
    }], [{
        num: "905",
        text: "Mirats Group Employee",
        color: `background: linear-gradient(92deg, #0653FD 0%, #40CDE6 100%)`
    }, {
        num: "234M +",
        text: "Happy Customer",
        color: `background: linear-gradient(92deg, #0653FD 0%, #40CDE6 100%)`
    }], [{
        num: "234 +",
        text: "Conversations Analysed",
        color: `background: linear-gradient(93deg, #0B1722 17.32%, rgba(114, 153, 185, 0.00) 100%)`
    }, {
        num: "4",
        text: "Mirats Parents Company",
        color: `background: linear-gradient(93deg, #0B1722 17.32%, rgba(114, 153, 185, 0.00) 100%)`
    }]]

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
    }, {
        image: carouselImg6,
        title: "Media & Technology",
        text: "At Mirats Insights, we understand the unique challenges and opportunities that the media and technology industries present. Our expertise in this ever-evolving landscape allows us to deliver valuable insights and innovative solutions to our clients."
    }]
    const carouselInfo = ["Our Industry", "You need insights", " we have solutions."];

    const testimonialData = [{
        image: testimonialImg1,
        name: "Cameron Green",
        position: "CEO & CTO, AB Technology",
        text: "Lorem ipsum dolor sit amet consectetur. Lacinia est eu laoreet tortor. Amet venenatis semper molestie non. Sed quis auctor consectetur nisi nunc elementum felis amet eu."
    }, {
        image: testimonialImg2,
        name: "Alice",
        position: "COO, AB Technology",
        text: "Lorem ipsum dolor sit amet consectetur. Lacinia est eu laoreet tortor. Amet venenatis semper molestie non. Sed quis auctor consectetur nisi nunc elementum felis amet eu."
    }]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const carouselStyle = {
        width: '90%',
        margin: '0 auto',
    };
    return (
        <div className="home_body">
            <div className="home_pics_parent">
                <Slider {...settings} style={carouselStyle}>
                    {homeData.map((data, index) => {
                        return (
                            <div className="home_pics_child" key={index}>
                                <img src={data.image} alt="image" />
                                <h2>{data.heading}</h2>
                                <h5>{data.text}</h5>
                            </div>
                        )
                    })}
                </Slider>
            </div>
            <div className="article_body">
                <section>
                    <p>Articles, News and Blogs</p>
                    <h2>Take a deep dive into your favourite<span> market research topics</span></h2>
                </section>
                <section className="article_body_section_map">
                    {articleCards.map((element, index) => {
                        return (
                            <div key={index} className="article_body_section_map_child">
                                <img src={element.image} />
                                <p>{element.type}</p>
                                <h5>{element.title}</h5>
                                <a href="#">Learn more</a>
                            </div>
                        )
                    })}
                </section>

            </div>
            <div className="empowering_body">
                <section className="empowering_body_section_one">
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <h2>Empowering your<span> business with insights</span></h2>
                </section>
                <section className="empowering_body_section_map">
                    {empoweringCards.map((element, index) => {
                        return (
                            <div key={index} className="empowering_body_section_map_child">
                                <section style={{ background: element.color }}>
                                    <p>{element.title}</p>
                                    <h4>{element.topic}</h4>
                                </section>
                                <h5>{element.text}</h5>
                                <a href="#">Learn more</a>
                            </div>
                        )
                    })}
                </section>
            </div>
            <div className="client_body">
                {/* <section>
                    <p>Our Clients</p>
                    <h2>Trusted by over 76+ leading <span>clients worldwide </span></h2>
                </section> */}
                
                <Clients />
            </div>
            <div className="our_products_body">
                <section>
                    <p>Our Products</p>
                    <h2>Which product<span> is right for you ?</span></h2>
                </section>
                <section>
                    <p>Product One</p>
                    <h2>Mirats insights One</h2>
                    <img src={productone} />
                    <h5>In an era of data-driven decision-making, Mirats Insights presents its flagship product, "Mirats Insights One." Designed for researchers, marketers, and businesses alike, this comprehensive platform unifies multiple research services into a seamless experience, streamlining the entire research process from inception to conclusion.</h5>
                    <a href="#">Learn more</a>
                </section>
                <div className="our_products_body_section_three">
                    <section className="products_three_one">
                        <p>Product Two</p>
                        <h3>Mirats insights Quanto</h3>
                        <img src={producttwo} />
                        <h5>The platform boasts a vast and diverse pool of respondents, ensuring that every survey reaches its target demographic. Using sophisticated algorithms and demographic filters, users can ensure that their surveys are fielded to the most relevant audience, guaranteeing meaningful insights.</h5>
                        <a href="#">Learn more</a>
                    </section>
                    <section className="products_three_two">
                        <p>Product Three</p>
                        <h2>Mirats insights Blaze</h2>
                        <img src={productthree} />
                        <h5>With an intuitive interface and a range of customizable templates, users can design surveys that align perfectly with their research objectives. Whether it's a simple questionnaire or a comprehensive study, Mirats Insights One makes survey creation a breeze.</h5>
                        <a href="#">Learn more</a>
                    </section>
                </div>
            </div>
            <div className="statistics_body">
                <section>
                    <p>Our Statistic</p>
                    <h2>Numbers speak for<span> themselves</span></h2>
                </section>
                <section className="statistics_body_parent_map">
                    {Statistic.map((stats, index) => {
                        return (
                            <div key={index} className="statistics_body_parent_first_child_map">
                                {stats.map((item, i) => {
                                    return (
                                        <div key={i} className="statistics_body_parent_second_child_map">
                                            <h2 style={{ color: item.color }}>{item.num}</h2>
                                            <p>{item.text}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </section>
            </div>
            <Carousel carouselInfo={carouselInfo} carouselData={carouselData} />
            <Testimonail testimonialData={testimonialData} />
        </div>
    )
}

export default Home;