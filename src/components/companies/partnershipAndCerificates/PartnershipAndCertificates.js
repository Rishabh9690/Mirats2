import React from "react";
import banner from "../../images/banners/partnershipAndCertification.png";
import esomar from "../../images/images/esomar.png";
import greenBook from "../../images/images/greenBook.png";
import "./partnership.css";

const PartnershipAndCertificates=()=>{

    return(
        <div className="partnership_and_certificates_body">
            <img src={banner} alt="banner" />
            <div className="partnership_and_certificates_level_two">
                <div className="partnership_and_certificates_level_two_grid">
                    <section>
                        <h2>Mirats Insights is now ESOMAR Corporate Member</h2>
                        <p>Nunc facilisi in et lectus massa. Commodo nulla accumsan nulla neque a placerat. Etiam tellus at massa amet eget velit. Nulla diam vel arcu proin pellentesque maecenas arcu. </p>
                        <p>Link</p>
                    </section>
                    {/* <section> */}
                        <img src={esomar} alt="ESOMAR" />
                    {/* </section> */}
                </div>
                <div className="partnership_and_certificates_level_two_grid">
                    {/* <section> */}
                        <img src={greenBook} alt="ESOMAR" />
                    {/* </section> */}
                    <section>
                        <h2>Mirats Insights is now listed on Green Book Directory</h2>
                        <p>Placerat curabitur amet elementum ultricies feugiat eget eget ac. Tempor neque ac sed fermentum volutpat. Metus elementum aenean ligula tempus pharetra.</p>
                        <p>Link</p>
                    </section>
                </div>
            </div>
        </div>
    )
}
export default PartnershipAndCertificates;