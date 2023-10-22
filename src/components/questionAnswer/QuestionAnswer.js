import React from "react";
import add from "../images/images/add.png";
import "./questionAnswer.css";

const QuestionAnswer=(props)=>{

    const quesAnsHeadings= props.quesAnsHeadings;
    const quesAndData= props.quesAndData;

    return(
        <div className="ques_ans_body">
            <div className="ques_ans_body_heading">
                <h2>{quesAnsHeadings[0]} <span>{quesAnsHeadings[1]}</span></h2>
            </div>
            <div className="ques_ans_body_parent">
                {quesAndData.map((element, index)=>{

                    return(
                        <div className="ques_ans_body_child">
                            <div className="ques_ans_body_child_ques">
                                <h3>{element.ques}</h3>
                                <img src={add} alt="addImage" />
                            </div>
                            <p>{element.ans}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default QuestionAnswer;