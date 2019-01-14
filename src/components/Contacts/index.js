import React from 'react';
import Fade from 'react-reveal/Fade';
import Wrapper from './Wrapper';
import SectionTitle from '../SectionTitle';
import SectionTitleContainer from './SectionTitleContainer';

const Contacts = () => (
  <Wrapper>
    <Fade left>Contacts</Fade>
    <SectionTitleContainer className='contactsSection' id='contacts'>
      <Fade left>
        <SectionTitle
          margins={'90px -10px 0 0'}
          sectionColor={props => props.theme.color.lightBlue}
        >
          Contacts
        </SectionTitle>
      </Fade>
    </SectionTitleContainer>
  </Wrapper>
);

export default Contacts;
