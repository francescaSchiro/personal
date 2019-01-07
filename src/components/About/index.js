import React from "react";
import Wrapper from "./Wrapper";
import SectionTitle from "../SectionTitle";

const About = () => (
  <Wrapper className="aboutSection">
    <SectionTitle
      top={"40px"}
      left={"-30px"}
      fontColor={props => props.theme.color.yellow}
    >
      About
    </SectionTitle>
  </Wrapper>
);

export default About;
