import React from "react";
import "./makeaCall.css";

const MakeaCall = () => {

    const handleTeam=(e)=>{
        e.preventDefault();
        console.log("Clicked");
    }
  return (
    <div className="make_call_body">
      <p>Book A Call</p>
      <div className="make_call_level_one">
        <div className="make_call_level_one_sec_left">
            
        </div>
        <div className="make_call_level_one_sec_right">
          <h2>Connect to Mirats Insights.</h2>
          <p>
            If you’re interested in participating in a research study, have
            questions about a study you’ve participated in previously, or want
            to learn more about how mirats insights can help you conduct your
            next research project, share your details in our form so we can get
            you to the right person or email us at miratsinsights@gmail.com
          </p>
          <h5>Looking for a career in marketing research?</h5>
          <button onClick={handleTeam} >Join our Team</button>
        </div>
      </div>
    </div>
  );
};

export default MakeaCall;
