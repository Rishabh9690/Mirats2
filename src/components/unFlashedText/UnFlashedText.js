import React, { useState } from "react";
import add from "../images/images/add.png";
import "./unFlashedText.css";


const UnFlashedText = (props) => {
    const [isImageVisible, setIsImageVisile] = useState(true);
    
    //Need to work on it.........

    const unFlashed = props.unFlashed;

    const handleImage = (e, id) => {
        e.preventDefault();
        setIsImageVisile(!isImageVisible);
    }
    

    return (
        <div className="un_flashed_body">
            {unFlashed.map((element, index) => {
                return (
                    <div className="flash_parent" key={index} id={index}>
                        {
                            index % 2 === 0 ?
                                <>
                                    <section className="flash_child_left">
                                        <h2>{element.heading}</h2>
                                        <img src={add} alt="add_image" onClick={handleImage} />
                                    </section>
                                    <section className="flash_child_right">
                                        {
                                            isImageVisible ? <img src={element.image} alt="image" />
                                                :
                                                <p>{element.text}</p>
                                        }
                                    </section>
                                </>
                                :
                                <>
                                    <section className="flash_child_right">
                                        {
                                            isImageVisible ? <img src={element.image} alt="image" />
                                                :
                                                <p>{element.text}</p>
                                        }
                                    </section>
                                    <section className="flash_child_left">
                                        <h2>{element.heading}</h2>
                                        <img src={add} alt="add_image" onClick={handleImage} />
                                    </section>
                                </>
                        }

                    </div>
                )
            })}
        </div>
    )
}

export default UnFlashedText;