import React from "react";
import Zoom from "react-reveal/Zoom";
import Wrapper from "./Wrapper";
import SectionTitle from "../SectionTitle";
import SectionTitleContainer from "./SectionTitleContainer";
// import CarouselSlider from './CarouselSlider';
import CarouselHandmade from "./CarouselHandmade";

const Works = () => (
  <Wrapper>
    <SectionTitleContainer className="worksSection" id="#works">
      <Zoom>
        <SectionTitle
          margins={"90px 0 0 0"}
          sectionColor={props => props.theme.color.red}
        >
          Works
        </SectionTitle>
      </Zoom>
    </SectionTitleContainer>
    <CarouselHandmade />
  </Wrapper>
);

export default Works;

/* <CarouselSlider /> */
