import React from "react";
import Adobe from "../images/images/clientsImg/Adobe.png";
import Evernote from "../images/images/clientsImg/Evernote.png";
import Gitlab from "../images/images/clientsImg/Gitlab.png";
import Hotjar from "../images/images/clientsImg/Hotjar.png";
import Intercom from "../images/images/clientsImg/Intercom.png";
import Microsoft from "../images/images/clientsImg/Microsoft.png";
import Miro from "../images/images/clientsImg/Miro.png";
import Okta from "../images/images/clientsImg/Okta.png";
import Pipedrive from "../images/images/clientsImg/Pipedrive.png";
import Pipeliner from "../images/images/clientsImg/Pipeliner.png";
import Quickbooks from "../images/images/clientsImg/Quickbooks.png";
import Stripe from "../images/images/clientsImg/Stripe.png";
import Wix from "../images/images/clientsImg/Wix.png";
import "./clients.css";

const Clients=()=>{
    const client1 = [Intercom, Evernote, Miro, Stripe];
    const client2 = [Adobe, Gitlab, Pipeliner, Microsoft, Pipedrive];
    const client3 = [Wix, Okta, Hotjar, Quickbooks];
    return(
        <div className="client_body">
                <section>
                    <p>Our Clients</p>
                    <h2>Trusted by over 76+ leading <span>clients worldwide </span></h2>
                </section>
                <div className="client_body_section">
                    <section>
                        {client1.map((client, index) => {
                            return (
                                <div key={index} className="">
                                    <img src={client} />
                                </div>
                            )
                        })}
                    </section>
                    <section>
                        {client2.map((client, index) => {
                            return (
                                <div key={index} className="">
                                    <img src={client} />
                                </div>
                            )
                        })}
                    </section>
                    <section>
                        {client3.map((client, index) => {
                            return (
                                <div key={index} className="">
                                    <img src={client} />
                                </div>
                            )
                        })}
                    </section>
                </div>
            </div>
    )
}

export default Clients;