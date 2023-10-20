import React, { useState } from "react";
import banner from "./images/Banner.png";
import plus from "../careers/images/plus.png";
import cross from "../careers/images/cross.png";
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import "./supportingAndInvesting.css";

const SupportingAndInvesting = () => {
  const [display1, setDisplay1] = useState(false);
  const [display2, setDisplay2] = useState(false);
  const [listDetails, setListDetails] = useState({});
  const [defaultVisible, setDefaultVisible] = useState(true);

  const details = [
    {
      heading: "Build a community with Mirats Insights​",
      text: `Mirats Insights thrives on the strength of our community. We prioritize collaboration and inclusivity, bringing together individuals with diverse backgrounds and expertise. Our team embraces a culture of teamwork, where mutual support and shared success are valued. Join us to connect and collaborate with talented individuals who share our passion. At Mirats Insights, we encourage open communication and provide platforms for collaboration and knowledge sharing. Our inclusive work environment ensures that every voice is heard and respected. Together, we achieve remarkable results by leveraging our collective talents. Through team-building activities and a supportive community, we foster lasting connections and personal growth. Join our community at Mirats Insights and experience the power of collaboration firsthand.`,
    },
    {
      heading: "Enjoy flexibility to care for you and your family",
      text: `At Mirats Insights, we value the well-being of our employees and recognize the significance of work-life balance. We provide flexible work arrangements, such as remote work options, that allow you to effectively manage your personal and family commitments. We understand that everyone's circumstances are unique, and we believe in empowering you to create a schedule that works best for you. By offering flexibility, we enable you to prioritize self-care and be present for your loved ones. We believe that when you have the freedom to balance your personal life with your professional responsibilities, you can bring a renewed sense of energy and focus to your work. Our commitment to supporting your work-life balance extends to fostering a culture of understanding and empathy. At Mirats Insights, we believe that a harmonious blend of personal and professional life leads to happier, more fulfilled employees. Join us and enjoy the flexibility to care for yourself and your family.`,
    },
    {
      heading: "Grow professionally and personally",
      text: `At Mirats Insights, we are committed to your ongoing professional and personal growth. We understand the importance of staying ahead in a dynamic business landscape. That's why we offer a diverse range of opportunities for your development. Our comprehensive training programs, engaging workshops, and mentorship initiatives are designed to sharpen your skills and broaden your knowledge.
    At Mirats Insights, your growth is our priority. We believe that by investing in your professional and personal development, we can create a motivated and empowered workforce. Join us and embark on a journey of growth, where you can thrive and make a lasting impact.`,
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

  return (
    <div className="supporting_investing_body">
      <div className="supporting_investing_level_one">
        <img src={banner} alt="banner" />
      </div>
      <div className="supporting_investing_level_two">
        <section>
          <h2>Make the most of life in Mirats insights</h2>
          <img
            src={display1 ? cross : plus}
            alt="image"
            onClick={() => {
              setDisplay1(!display1);
            }}
          />
        </section>
        <section>
          {display1 ? (
            <p>
              At Mirats Insights, we believe that work should not be the sole
              focus of your life. We promote work-life integration, recognizing
              that a fulfilling career is complemented by a healthy and balanced
              personal life. We strive to create a supportive work environment
              that encourages your overall well-being.
              <br />
              <br />
              To support your well-being, we offer a range of wellness
              initiatives, such as fitness programs, mental health resources,
              and work-life balance workshops. We organize social events and
              team-building activities to foster connections and create a sense
              of community among our employees. We believe that when you feel
              happy and fulfilled outside of work, you bring greater energy and
              enthusiasm to your professional endeavors.
            </p>
          ) : (
            <img src={image1} alt="image1" />
          )}
        </section>
      </div>
      <div className="supporting_investing_level_three">
        <section>
          {display2 ? (
            <p>
              At Mirats Insights, we believe that work should not be the sole
              focus of your life. We promote work-life integration, recognizing
              that a fulfilling career is complemented by a healthy and balanced
              personal life. We strive to create a supportive work environment
              that encourages your overall well-being.
              <br />
              <br />
              To support your well-being, we offer a range of wellness
              initiatives, such as fitness programs, mental health resources,
              and work-life balance workshops. We organize social events and
              team-building activities to foster connections and create a sense
              of community among our employees. We believe that when you feel
              happy and fulfilled outside of work, you bring greater energy and
              enthusiasm to your professional endeavors.
            </p>
          ) : (
            <img src={image2} alt="image1" />
          )}
        </section>
        <section>
          <h2>Make the most of life in Mirats insights</h2>
          <img
            src={display2 ? cross : plus}
            alt="image"
            onClick={() => {
              setDisplay2(!display2);
            }}
          />
        </section>
      </div>
      <div className="supporting_investing_level_four">
        <h2>
          Caring for <span>our employees.</span>
        </h2>
        <div className="supporting_investing_level_four_sec">
                    <section>
                        <ol>
                            <li tabIndex={1} id={0} onClick={handleList}>
                                Build a community with Mirats Insights​
                            </li>
                            <li tabIndex={1} id={1} onClick={handleList}>
                                Enjoy flexibility to care for you and your family
                            </li>
                            <li tabIndex={1} id={2} onClick={handleList}>
                                Grow professionally and personally
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
    </div>
  );
};

export default SupportingAndInvesting;
