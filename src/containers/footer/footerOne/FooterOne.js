import React, { useState } from "react";
import footerImage1 from "../../../components/images/images/footerImage1.png";
import "./footerOne.css";

const FooterOne = (props) => {
    const [form, setForm] = useState({});

    // const footerOneHeading = props.footerOneHeading;
    const footerOneHeading=["Get started with", "your personalised demo", "Complete the form to see the Mirats Insights platform in action. We’ll show you how you can use Mirats Insights to design and improve the experiences you deliver across your organisation."];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleForm = (e) => {
        e.preventDefault();
        console.log(form);
    }
    return (
        <div className="footer_one_body">
            <div className="footer_one">
                <div className="footer_one_heading">
                    <h2>{footerOneHeading[0]} <span>{footerOneHeading[1]}</span></h2>
                    <p>{footerOneHeading[2]}</p>
                </div>
                <div className="footer_one_form">
                    <img src={footerImage1} alt="footerIamge" />
                    <form onSubmit={handleForm} className="footer_one_main_form">
                        <input
                            type="text"
                            placeholder="Full Name *"
                            required
                            name="FullName"
                            autoComplete="off"
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            placeholder="Country *"
                            required
                            name="Country"
                            autoComplete="off"
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            placeholder="Job Title *"
                            required
                            name="JobTitle"
                            autoComplete="off"
                            onChange={handleInputChange}
                        />
                        <input
                            type="email"
                            placeholder="Email Id *"
                            required
                            name="EmailId"
                            autoComplete="off"
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            placeholder="mobile No. *"
                            required
                            name="MobileNo"
                            autoComplete="off"
                            onChange={handleInputChange}
                        />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FooterOne;