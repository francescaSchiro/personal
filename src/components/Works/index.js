import React from "react";
import Wrapper from "./Wrapper";
import SectionTitle from "../SectionTitle";
import SectionTitleContainer from "./SectionTitleContainer";

const Works = () => (
  <Wrapper className="worksSection">
    <SectionTitleContainer>
      <SectionTitle
        margins={'90px 0 0 0'}
        sectionColor={props => props.theme.color.red}
      >
        Works
      </SectionTitle>
    </SectionTitleContainer>
  </Wrapper>
);

export default Works;
