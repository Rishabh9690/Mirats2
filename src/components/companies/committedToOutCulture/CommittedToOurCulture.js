import React, { useState } from "react";
import banner from "../../images/banners/committedToCulture.png";
import plus from "../../images/images/add.png";
import cross from "../../images/images/Remove.png";
import image1 from "../../images/images/image1.png";
import image2 from "../../images/images/image2.png";
import "./committedtoOurCulture.css";

const CommittedToOurCulture = () => {
  const [display1, setDisplay1] = useState(false);
  const [display2, setDisplay2] = useState(false);
  const [listDetails, setListDetails] = useState({});
  const [defaultVisible, setDefaultVisible] = useState(true);

  const details = [
    {
      heading: "Growth Mindset​",
      text: `Mirats Insights cultivates a growth mindset that fuels our success. We believe in the ability to develop intelligence and skills through dedication, effort, and continuous learning. Challenges are embraced as opportunities for growth, and setbacks are seen as valuable learning experiences. We prioritize ongoing learning and provide resources for professional development. Feedback is valued to refine skills and enhance performance. Our culture fosters innovation, resilience, and adaptability, as employees embrace change and seek opportunities to expand their knowledge. Join us to unleash your potential, embrace challenges, and achieve extraordinary results in a culture that promotes personal and professional growth. Together, we harness the power of a growth mindset for innovation and success.`,
    },
    {
      heading: "Customer obsessed",
      text: `Mirats Insights is customer-obsessed, placing our clients at the heart of everything we do. We prioritize understanding their expectations and go above and beyond to deliver exceptional value. Our focus is on providing innovative solutions that address their unique needs and challenges. We strive to build long-lasting relationships built on trust, collaboration, and a deep understanding of our clients' goals. Through effective communication and active listening, we ensure that we exceed their expectations and consistently deliver outstanding results. Join us in a culture that is dedicated to putting the customer first, where we work together to drive their success and build strong partnerships. Together, we make a meaningful impact by delivering exceptional value and tailored solutions to our valued clients.
      `,
    },
    {
      heading: "Diverse and inclusive ",
      text: `Mirats Insights prioritizes diversity and inclusion, valuing the unique backgrounds, perspectives, and experiences of our employees. By fostering an inclusive environment, we encourage collaboration, creativity, and a vibrant exchange of ideas. We firmly believe that diversity drives innovation, enabling us to deliver exceptional results to our clients. Through diverse perspectives, we gain deeper insights into the complexities of the markets we serve. Join our culture that embraces and celebrates diversity, where every voice is heard, respected, and valued. Together, we create an environment that fosters growth, creativity, and success for all, ensuring that everyone has equal opportunities to thrive and contribute to our collective success.`,
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
    <div className="committed_culture_body">
      <div className="committed_culture_level_one">
        <img src={banner} alt="banner" />
      </div>
      <div className="committed_culture_level_two">
        <section>
          <h2>Making a difference</h2>
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
              At Mirats Insights, making a difference is ingrained in our
              culture. We strive to have a positive impact, not only in the
              world of market research but also in the communities we serve. Our
              innovative solutions empower businesses to make informed decisions
              that drive growth and success. Beyond our professional pursuits,
              we actively engage in corporate social responsibility initiatives
              to create a meaningful difference. We believe that even small
              actions can create a ripple effect of change. Our employees are
              encouraged to bring their unique skills and passions to make a
              difference in their own ways. Together, we work towards leaving a
              lasting legacy of positive change. Join us at Mirats Insights and
              be part of a culture that values making a difference. Together, we
              can leverage our expertise and resources to create a brighter
              future for all.
            </p>
          ) : (
            <img src={image1} alt="image1" />
          )}
        </section>
      </div>
      <div className="committed_culture_level_three">
        <section>
          {display2 ? (
            <p>
              At Mirats Insights, giving is deeply ingrained in our culture and
              reflects who we are as an organization. We believe in the power of
              giving back to the community and making a positive impact. Giving
              back is not just a one-time event for us; it's a constant
              commitment. We encourage our employees to embrace a spirit of
              generosity and actively participate in initiatives that align with
              our core values. By combining our expertise in market research and
              analytics with our dedication to giving, we aim to create
              meaningful change in society. Together, we can make a difference
              and leave a lasting legacy of compassion and empathy. Join Mirats
              Insights and be part of a culture where giving is celebrated, and
              your contributions can make a significant impact on the lives of
              others.
            </p>
          ) : (
            <img src={image2} alt="image1" />
          )}
        </section>
        <section>
          <h2>Giving is part of who we are..!</h2>
          <img
            src={display2 ? cross : plus}
            alt="image"
            onClick={() => {
              setDisplay2(!display2);
            }}
          />
        </section>
      </div>
      <div className="committed_culture_level_four">
        <h2>
          Our cultural <span>attributes</span>
        </h2>
        <div className="committed_culture_level_four_sec">
          <section>
            <ol>
              <li tabIndex={1} id={0} onClick={handleList}>
                Growth Mindset
              </li>
              <li tabIndex={1} id={1} onClick={handleList}>
                Customer obsessed
              </li>
              <li tabIndex={1} id={2} onClick={handleList}>
                Diverse and inclusive
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

export default CommittedToOurCulture;
