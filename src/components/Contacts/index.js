import React from 'react';
import Fade from 'react-reveal/Fade';

import { checkIfAppleDevice } from '../../utils';

import Wrapper from './Wrapper';
import Footer from './Footer';
import SectionTitle from '../SectionTitle';
import SectionTitleContainer from './SectionTitleContainer';
import LinksWrapper from './LinksWrapper';
// import MailFlipForm from './MailFlipForm';
import BodyWrapper from './BodyWrapper';
import LinkContacts from './LinkContacts';
import LinkWrapper from './LinkWrapper';
import H3 from '../H3';

const Contacts = () => (
  <Wrapper>
    <SectionTitleContainer className='contactsSection' id='contacts'>
      {checkIfAppleDevice ? (
        <SectionTitle
          margins={'90px -10px 0 0'}
          sectionColor={props => props.theme.color.lightBlue}
        >
          Contacts
        </SectionTitle>
      ) : (
        <Fade left>
          <SectionTitle
            margins={'90px -10px 0 0'}
            sectionColor={props => props.theme.color.lightBlue}
          >
            Contacts
          </SectionTitle>
        </Fade>
      )}
    </SectionTitleContainer>
  
      <BodyWrapper>

        <LinksWrapper>
          <H3 contacts>You can find me on:</H3>
          <LinkWrapper id= {'LinkWrapper'}>
            <i className='fab fa-github-square' style={{border:'2px solid blue'}}/>
            <LinkContacts
              href='https://github.com/francescaSchiro'
              target='_blank'
              rel='noopener noreferrer'
              sectionColor={props => props.theme.color.lightBlue}
            > Git Hub </LinkContacts>
          </LinkWrapper>
          <LinkWrapper>
            <i className='fab fa-behance-square' style={{border:'2px solid blue'}}/>
            <LinkContacts
              href='https://www.behance.net/francescaschiro'
              target='_blank'
              rel='noopener noreferrer'
              sectionColor={props => props.theme.color.lightBlue}
            >Behance</LinkContacts>
          </LinkWrapper>
          <LinkWrapper>
            <i className='fab fa-linkedin' style={{border:'2px solid blue'}}/>
            <LinkContacts
              href='www.linkedin.com/in/francesca-schiro'
              target='_blank'
              rel='noopener noreferrer'
              sectionColor={props => props.theme.color.lightBlue}
            >Linked In</LinkContacts>
          </LinkWrapper>
        </LinksWrapper>
        <LinksWrapper>
          <H3 contacts>Or contact me even just to say hi!</H3>
          <LinkWrapper mail id= {'mail'}>
            <i className='fas fa-envelope-square' style={{border:'2px solid blue'}}/>
            <LinkContacts
              mailto= 'francesca_schiro@yahoo.it'
              href='mailto:francesca_schiro@yahoo.it?subject=Just%20wanted%20to%20say...&body=That you are amazing"'
              // target='_blank'
              // rel='noopener noreferrer'
              sectionColor={props => props.theme.color.lightBlue}
            > Email me </LinkContacts>
          </LinkWrapper>
        </LinksWrapper>
       
      </BodyWrapper>
      <Footer>
        Francesca Schiro | Front End & Graphic Designer | Tutti i diritti riservati © 2019
      </Footer>
  </Wrapper>
);

export default Contacts;

          // <MailFlipForm>Mail me </MailFlipForm>