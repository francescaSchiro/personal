import React from "react";
import Wrapper from "./Wrapper";
import SectionTitle from "../SectionTitle";
import SectionTitleContainer from "./SectionTitleContainer";

const Contacts = () => (
  <Wrapper >
    <SectionTitleContainer className="contactsSection">
      <SectionTitle  margins={'90px -10px 0 0'} sectionColor={props => props.theme.color.lightBlue}>
        Contacts
      </SectionTitle>
    </SectionTitleContainer>
  </Wrapper>
);

export default Contacts;
