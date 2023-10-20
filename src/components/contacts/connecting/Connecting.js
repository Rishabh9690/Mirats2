import React from "react";
import call from "../images/call.png";
import mail from "../images/mail.png";
import location from "../images/location.png";

import "./connecting.css";

const Connecting = () => {

    const officeAddress=[{
        name:"Macer India Research and Technology Services Private Limited",
        contactNo: "+91 89344 90903",
        email: "macerindia@gmail.com",
        address: "MMS-2/12A, Ground Floor, Sector - C, SRY, Aliganj, Lucknow, Uttar Pradesh - 226021",

    },{
        name:"Mirats Insights Private Limited",
        contactNo: "+91 89344 90903",
        email: "macerindia@gmail.com",
        address: "1st Floor, Pitambara House, Tedhi Pulia Ring Rd, Kalyanpur, Lucknow, Uttar Pradesh - 226022",

    },{
        name:"Mirats Insights LLC",
        contactNo: "+1 89344 90903",
        email: "macerindia@gmail.com",
        address: "Ste 1200, 1309 Coffeen Avenue, Sheridan, WY, USA - 82801",

    },{
        name:"Atomos Technologies",
        contactNo: "+91 89344 90903",
        email: "macerindia@gmail.com",
        address: "305, 3rd Floor, NIBR Corporate Park, Nr. Safed Pool, Saki Naka, Andheri(E), Mumbai - 400079",

    }]
  return (
    <div className="connecting_body">
      <div className="connecting_level_one">
        <h2>
          Contacting <span>Mirats Insights</span>
        </h2>
        <div className="connecting_level_one_sec">
          <section>
            <h2>Contact Us</h2>
            <div className="connecting_level_one_sec_flex">
              <img src={call} alt="call" />
              <div className="connecting_level_one_sec_flex_details">
                <p>Contact No.</p>
                <h5>+91 78345 78345</h5>
              </div>
            </div>
            <div className="connecting_level_one_sec_flex">
              <img src={mail} alt="mail" />
              <div className="connecting_level_one_sec_flex_details">
                <p>Email Id</p>
                <h5>macerindia@gmail.com</h5>
              </div>
            </div>
            <div className="connecting_level_one_sec_flex">
              <img src={location} alt="location" />
              <div className="connecting_level_one_sec_flex_details">
                <p>Address</p>
                <h5>
                  MMS-2/12A, Ground Floor, Sector - C, SRY, Aliganj, Lucknow,
                  Uttar Pradesh - 226021
                </h5>
              </div>
            </div>
          </section>
          <section>
            <h2>Get in Touch</h2>
            <div className="connecting_level_one_sec_form">

            </div>
          </section>
        </div>
      </div>
      <div className="connecting_level_two">
        <h2> Corporate Office Address</h2>
        <div className="connecting_level_two_grid_parent">
            {officeAddress.map((element, index)=>{
                return(
                    <div className="connecting_level_two_grid_child">
                        <h5>{element.name}</h5>
                        <p>{element.contactNo}</p>
                        <p>{element.email}</p>
                        <p>{element.address}</p>

                    </div>
                )
            })}
        </div>
      </div>
    </div>
  );
};

export default Connecting;
