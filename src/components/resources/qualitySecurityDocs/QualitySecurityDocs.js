import React from "react";
import banner from "../images/qualityBanner.png";
import focusImage from "../images/focusImage.png";
import b2cImage from "../images/b2cImage.png";
import consumerImage from "../images/consumerImage.png";
import healthCareimage from "../images/healthCareImage.png";
import qualityImage from "../images/qualityImage.png";
import esomarimage from "../images/esomarImage.png";
const QualitySecurityDocs=()=>{

    const theory = [
        {
          heading: "Panel Composition",
          text: `Lorem ipsum dolor sit amet consectetur. Lectus eu scelerisque neque eu tortor sed. Pellentesque tellus tellus malesuada maecenas mattis ut nisi. Egestas augue nunc tristique orci augue. A sapien eu at tellus dignissim commodo at. Porttitor quam diam sed velit. Condimentum egestas pellentesque tempor arcu id id in purus. Sed mollis enim vel et mauris. Nunc facilisi in et lectus massa. Commodo nulla accumsan nulla neque a placerat. Etiam tellus at massa amet eget velit. Nulla diam vel arcu proin pellentesque maecenas arcu. Quis morbi auctorsemper. Placerat curabitur amet elementum ultricies feugiat eget eget ac. Tempor neque ac sed fermentum volutpat. Metus elementum aenean ligula tempus pharetra non tortor et. Justo elementum vivamus molestie mauris fames sapien mauris a. Suspendisse est in ultrices turpis facilisis sed id orci tortor. `,
        },{
            heading: "Panel Recruitment and Maintenance",
            text: `Blandit turpis viverra maecenas ridiculus. Posuere ante et mauris lectus lobortis pharetra id nibh pulvinar. Leo et elit mattis lectus adipiscing elementum ut cursus dolor. Id magna eget diam commodo a enim lacinia. Urna faucibus volutpat duis sapien quam nunc eget. Non quam amet elit tortor.
            Nulla maecenas egestas vitae auctor. Eget aliquam augue amet nullam leo et. Donec non imperdiet tellus vestibulum dolor. Consectetur aliquam vehicula et tincidunt interdum condimentum arcu. Varius etiam ut in massa tellus. Pharetra dui etiam risus adipiscing lorem vulputate felis sit volutpat. Tempus turpis ultrices lacus porta vivamus et. Lorem sem dolor sagittis nascetur hac et leo. Adipiscing fames at orci eu in. Ullamcorper diam id massa tempus. Non at ut tellus sed sociis nisl. Nunc vulputate eget feugiat scelerisque feugiat. Vivamus scelerisque lacus eros lectus sed.
            Fusce dignissim neque eu at nam faucibus risus ipsum volutpat. Tellus amet at a nibh. Sagittis cras aliquet metus feugiat pretium et eget. At diam suspendisse elementum sit convallis duis gravida. Pulvinar felis sagittis erat tincidunt ultricies arcu pellentesque quisque. Augue cursus elementum luctus nam. Semper mattis interdum cras neque suspendisse nec vivamus tempor. Eu in in viverra eget. Dignissim eleifend mattis vel sit congue ut nisl leo commodo. Ornare sodales vitae risus nibh potenti. Elementum sed purus porttitor in. Maecenas enim tincidunt feugiat auctor aliquam bibendum.
            Morbi et mi integer amet. Non interdum aliquam imperdiet sem vitae.`
        },{
            heading: "Research Capabilities",
            text: `Lorem ipsum dolor sit amet consectetur. Lectus eu scelerisque neque eu tortor sed. Pellentesque tellus tellus malesuada maecenas mattis ut nisi. Egestas augue nunc tristique orci augue. A sapien eu at tellus dignissim commodo at. Porttitor quam diam sed velit. Condimentum egestas pellentesque tempor arcu id id in purus. Sed mollis enim vel et mauris. Nunc facilisi in et lectus massa. Commodo nulla accumsan nulla neque a placerat. Etiam tellus at massa amet eget velit. Nulla diam vel arcu proin pellentesque maecenas arcu. Quis morbi auctorsemper. Placerat curabitur amet elementum ultricies feugiat eget eget ac. Tempor neque ac sed fermentum volutpat. Metus elementum aenean ligula tempus pharetra non tortor et. Justo elementum vivamus molestie mauris fames sapien mauris a. Suspendisse est in ultrices turpis facilisis sed id orci tortor. `
        },{
            heading: " Data Security and Compliance",
            text: `Blandit turpis viverra maecenas ridiculus. Posuere ante et mauris lectus lobortis pharetra id nibh pulvinar. Leo et elit mattis lectus adipiscing elementum ut cursus dolor. Id magna eget diam commodo a enim lacinia. Urna faucibus volutpat duis sapien quam nunc eget. Non quam amet elit tortor.
            Nulla maecenas egestas vitae auctor. Eget aliquam augue amet nullam leo et. Donec non imperdiet tellus vestibulum dolor. Consectetur aliquam vehicula et tincidunt interdum condimentum arcu. Varius etiam ut in massa tellus. Pharetra dui etiam risus adipiscing lorem vulputate felis sit volutpat. Tempus turpis ultrices lacus porta vivamus et. Lorem sem dolor sagittis nascetur hac et leo. Adipiscing fames at orci eu in. Ullamcorper diam id massa tempus. Non at ut tellus sed sociis nisl. Nunc vulputate eget feugiat scelerisque feugiat. Vivamus scelerisque lacus eros lectus sed.
            Fusce dignissim neque eu at nam faucibus risus ipsum volutpat. Tellus amet at a nibh. Sagittis cras aliquet metus feugiat pretium et eget. At diam suspendisse elementum sit convallis duis gravida. Pulvinar felis sagittis erat tincidunt ultricies arcu pellentesque quisque. Augue cursus elementum luctus nam. `
        }
      ];
    
      const upcommingResources=[{
        image: b2cImage,
        title: "B2C Audience Book",
        text: "Learn more"
      },{
        image: consumerImage,
        title: "B2B Audience Book",
        text: "Learn more"
      },{
        image: healthCareimage,
        title: "Healthcare Audience Book",
        text: "Learn more"
      },{
        image: qualityImage,
        title: "Quality / Security Control Docs ",
        text: "Learn more"
      },{
        image: esomarimage,
        title: "Esomar 37 Answer",
        text: "Learn more"
      }]
    
      const handleRedirect = (e) => {
        e.preventDefault();
        const index = Number(e.currentTarget.id);
        console.log("Index======>", index)
        if(index===0)
        {
            window.location.replace('/resources/b2caudiencebook');
        }
        if(index===1)
        {
            window.location.replace('/resources/consumeraudiencebook');
        }
        if(index===2)
        {
            window.location.replace('/resources/healthcareaudiencebook');
        }
        if(index===3)
        {
            window.location.replace('/resources/qualityandsecuritydocs');
        }
        if(index===4)
        {
            window.location.replace('/resources/esomar');
        }
    }

      return (
        <div className="b2c_audience_book_body">
          <div className="resources_level_one">
            <img src={banner} alt="banner" />
          </div>
          <div className="resources_level_two">
            <h2>
            Quality / Security Control Docs: <span>Mirats Insights</span>
            </h2>
            <p>
            At Mirats Insights, we take the security and quality of our services seriously. Our Quality / Security Control Docs outline our stringent measures to ensure the confidentiality, integrity, and accuracy of the data we handle. These documents encompass our data protection protocols, quality assurance processes, and adherence to industry best practices. Our commitment to maintaining the highest standards of security and quality sets us apart as a trusted partner for businesses seeking reliable and dependable market research solutions.
            </p>
          </div>
          <div className="resources_level_three">
            <img src={focusImage} alt="focusImage" />
            <div className="resources_level_three_sec_parent">
                {theory.map((element, index)=>{
                    return(
                        <div className="resources_level_three_sec_child" key={index}>
                            <h2>{index+1}. {element.heading}</h2>
                            <p>{element.text}</p>
                        </div>
                    )
                })}
            </div>
          </div>
          <hr></hr>
          <div className="resources_level_four">
                <h2>Upcomming Resources</h2>
                <div className="resources_level_four_sec_parent">
                    {upcommingResources.map((element, index)=>{
                        return(
                            <div className="resources_level_four_sec_child" id={index}>
                                <img src={element.image} alt="image" />
                                <h2>{element.title}</h2>
                                <p onClick={handleRedirect} id={index}>{element.text}</p>
                            </div>
                        )
                    })}
                </div>
          </div>
        </div>
      );
}

export default QualitySecurityDocs;