import React from "react";
import Wrapper from "./Wrapper";
import SectionTitle from "./SectionTitle";
import SectionTitleContainer from "./SectionTitleContainer";

const Works = () => (
  <Wrapper className="worksSection">
    <SectionTitleContainer>
      <SectionTitle
        // top={"100px"}
        // left={"-30px"}
        fontColor={props => props.theme.color.red}
      >
        Works
      </SectionTitle>
    </SectionTitleContainer>
  </Wrapper>
);

export default Works;
