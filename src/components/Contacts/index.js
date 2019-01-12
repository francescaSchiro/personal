import React from "react";
import Fade from "react-reveal/Fade";
import Wrapper from "./Wrapper";
import SectionTitle from "../SectionTitle";
import SectionTitleContainer from "./SectionTitleContainer";

const Contacts = () => (
  <Wrapper>
    <SectionTitleContainer className="contactsSection" id="/contacts">
      <SectionTitle
        margins={"90px -10px 0 0"}
        sectionColor={props => props.theme.color.lightBlue}
      >
        <Fade left>Contacts</Fade>
      </SectionTitle>
    </SectionTitleContainer>
  </Wrapper>
);

export default Contacts;
