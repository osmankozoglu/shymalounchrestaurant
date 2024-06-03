import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomizeIconImage from "images/customize-icon.svg";
import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";


const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-40`}
`;

export default ({
  cards = [
    {
      imageSrc: ShieldIconImage,
      title: "Secure",
      description: "We strictly only deal with vendors that provide top notch security.",
      url: "https://timerse.com"
    },
    {
      imageSrc: SupportIconImage,
      title: "24/7 Support",
      description: "Lorem ipsum donor amet siti ceali placeholder text",
      url: "https://google.com"
    },
    {
      imageSrc: CustomizeIconImage,
      title: "Customizable",
      description: "Lorem ipsum donor amet siti ceali placeholder text",
      url: "https://reddit.com"
    }
  ],
  heading = "",
  subheading = "",
  description = "",
  imageContainerCss = null,
  imageCss = null
}) => {
  return (
    <div className="container">
      <div className="contentWithPaddingXl">
        {subheading ? <div className="subHeading">{subheading}</div> : <></>}
        {heading ? <div className="sectionHeading">{heading}</div> : <></>}
        {description ? <div className="sectionDescription">{description}</div> : <></>}
        <div className="threeColumnContainer">
          {cards.map((card, i) => (
            <div className="cardColumn" key={i}>
              <div className="cardDesign" href={card.url}>
                <span className="imageContainer" css={imageContainerCss}>
                  <img src={card.imageSrc} alt="" css={imageCss} />
                </span>
                <span className="title">{card.title}</span>
                <p className="description">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <DecoratorBlob/>
    </div>
  );
};
