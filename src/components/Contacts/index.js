import React from "react";
import Wrapper from "./Wrapper";
import SectionTitle from "./SectionTitle";
import SectionTitleContainer from "./SectionTitleContainer";

const Contacts = () => (
  <Wrapper className="contactsSection">
    <SectionTitleContainer>
      <SectionTitle fontColor={props => props.theme.color.lightBlue}>
        Contacts
      </SectionTitle>
    </SectionTitleContainer>
  </Wrapper>
);

export default Contacts;
