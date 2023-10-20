import React, { useState } from "react";
import banner from "./images/Banner.png";
import plus from "./images/plus.png";
import cross from "./images/cross.png";

import "./careers.css";

const Careers = () => {
  const [ques1, setQues1] = useState(false);
  const [ques2, setQues2] = useState(false);
  const [ques3, setQues3] = useState(false);
  const [ques4, setQues4] = useState(false);

  return (
    <div className="careers_body">
      <div className="careers_level_one">
        <img src={banner} alt="banner" />
      </div>
      <div className="careers_level_two">
        <h2>Join Us Be You</h2>
        <p>
          At Mirats Insights, we are actively seeking talented individuals to
          join our team and contribute to our mission of driving innovation and
          success in the data analytics and technology industries. We currently
          have exciting career opportunities available in both our research and
          tech teams, and we invite qualified candidates to apply.
          <br />
          <br />
          In our research division at Mirats Insights, we have openings for
          positions such as Sales Associates, HR Associates, Business
          Development Associates, and Finance Associates. These positions are
          based in our Lucknow office and are available as both apprenticeships
          and full-time employment opportunities, depending on the candidate's
          qualifications and experience.
          <br />
          <br />
          If you are passionate about market research, data analytics, and
          technology, and are looking for a dynamic and rewarding career, we
          encourage you to get in touch with us. To learn more about these
          positions and to apply, please contact our recruitment team at
          recruitment@miratsinsights.com.
        </p>
      </div>
      <div className="careers_level_three"></div>
      <div className="careers_level_four">
        <h2>Mirats insights job interview tips</h2>
        <div className="careers_level_four_faq">
          <section>
            <h5>What are the benefits of reputation management software?</h5>
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
              Reputation management software offers businesses the ability to
              monitor their online presence, track customer feedback, and
              address issues promptly. By maintaining a positive brand
              perception, businesses can build trust, improve customer
              satisfaction, and enhance their online reputation, leading to
              increased credibility and business success.
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
              Reputation management software offers businesses the ability to
              monitor their online presence, track customer feedback, and
              address issues promptly. By maintaining a positive brand
              perception, businesses can build trust, improve customer
              satisfaction, and enhance their online reputation, leading to
              increased credibility and business success.
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
              Reputation management software offers businesses the ability to
              monitor their online presence, track customer feedback, and
              address issues promptly. By maintaining a positive brand
              perception, businesses can build trust, improve customer
              satisfaction, and enhance their online reputation, leading to
              increased credibility and business success.
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
            Reputation management software offers businesses the ability to
            monitor their online presence, track customer feedback, and
            address issues promptly. By maintaining a positive brand
            perception, businesses can build trust, improve customer
            satisfaction, and enhance their online reputation, leading to
            increased credibility and business success.
          </p>
        ) : (
          <></>
        )}
        </div>
      </div>
    </div>
  );
};

export default Careers;
