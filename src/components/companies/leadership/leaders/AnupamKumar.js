import React from "react";
import image from "../images/AnupamMax.png";
import "./leaders.css";

const AnupamKumar = () => {
  return (
    <div className="leaders_body">
      <div className="leaders_level_one">
        <div className="leaders_level_one_details">
          <h2>Anupam Kumar</h2>
          <p>Chair of the Board</p>
        </div>
        <img src={image} alt="Image" />
      </div>
      <p>
        Anupam Kumar is the distinguished co-founder of Mirats Insights,
        bringing with him an impressive 16 years of experience in the market
        research industry. Having worked with prominent companies such as Kantar
        IMRB, Gfk, and TNS India, Anupam is a true veteran in the field of
        qualitative research. His in-depth knowledge and expertise have helped
        shape the company into a leading force in the research industry. Anupam
        is an avid documentary movie enthusiast, drawing inspiration from the
        life story of Dhirubhai Ambani. He firmly believes that the core values
        of transparency and trust should be present within every organization.
        At Mirats Insights, Anupam actively oversees the people's department,
        operations, and finance, ensuring the smooth functioning of the company.
      </p>
    </div>
  );
};

export default AnupamKumar;
