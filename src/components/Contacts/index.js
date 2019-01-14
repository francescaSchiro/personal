import React from 'react';
import Fade from 'react-reveal/Fade';
import Wrapper from './Wrapper';
import SectionTitle from '../SectionTitle';
import SectionTitleContainer from './SectionTitleContainer';
import LinksWrapper from './LinksWrapper';
import MailFlipForm from './MailFlipForm';
import BodyWrapper from './BodyWrapper';
import LinkContacts from './LinkContacts';
import H3 from '../H3';

const Contacts = () => (
  <Wrapper>
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
    <Fade right>
      <BodyWrapper>
        <LinksWrapper>
          <H3>
          You can find me on:
          </H3>
          <div style={{marginTop: '20px'}}>
            <i className="fab fa-github-square"></i>
              <LinkContacts 
                href='https://github.com/francescaSchiro'
                target='_blank'
                rel='noopener noreferrer' 
                sectionColor={props=> props.theme.color.lightBlue} > Git Hub </LinkContacts>
          </div>
          <div style={{marginTop: '20px'}}>
            <i className="fab fa-behance-square"></i>
              <LinkContacts
                href='https://www.behance.net/francescaschiro'
                target='_blank'
                rel='noopener noreferrer'
                sectionColor={props=> props.theme.color.lightBlue}> Behance </LinkContacts>
          </div>
          <div style={{marginTop: '20px'}}>
            <i className="fab fa-linkedin"></i>
              <LinkContacts
                href='www.linkedin.com/in/francesca-schiro'
                target='_blank'
                rel='noopener noreferrer'
                sectionColor={props=> props.theme.color.lightBlue}> Linked In </LinkContacts>
          </div>
          <MailFlipForm>Mail me </MailFlipForm> 
        </LinksWrapper>
      </BodyWrapper>
    </Fade>
  </Wrapper>
);

export default Contacts;
