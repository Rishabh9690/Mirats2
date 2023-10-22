import React from "react";
import "./testimonial.css";

const Testimonail = (props) => {

    const testimonialData = props.testimonialData;

    return (
        <div className="testimonial_body">
            <section>
                <p>Our Testimonial</p>
                <h2>What our client says</h2>
            </section>
            <div className="testimonial_body_client_map">
                {testimonialData.map((item, index) => {
                    return (
                        <div key={index} className="testimonial_body_client_map_child">
                            <section>
                                <img src={item.image} />
                            </section>
                            <section>
                                <h2>{item.name}</h2>
                                <h5>{item.position}</h5>
                                <p>{item.text}</p>
                            </section>
                        </div>
                    )

                })}
            </div>
        </div>
    )
}

export default Testimonail;