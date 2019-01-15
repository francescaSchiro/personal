import React from 'react';
import Fade from 'react-reveal/Fade';

import { checkIfAppleDevice } from '../../utils';

import Wrapper from './Wrapper';
import SectionTitle from '../SectionTitle';
import SectionTitleContainer from './SectionTitleContainer';
import LinksWrapper from './LinksWrapper';
// import MailFlipForm from './MailFlipForm';
import BodyWrapper from './BodyWrapper';
import LinkContacts from './LinkContacts';
import LinkWrapper from './LinkWrapper';
import H3 from '../H3';
import Footer from '../Footer';

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
          <H3>You can find me on:</H3>
          <LinkWrapper id= {'LinkWrapper'} style={{ marginTop: '20px' }}>
            <i className='fab fa-github-square' style={{border:'2px solid blue'}}/>
            <LinkContacts
              href='https://github.com/francescaSchiro'
              target='_blank'
              rel='noopener noreferrer'
              sectionColor={props => props.theme.color.lightBlue}
            > Git Hub </LinkContacts>
          </LinkWrapper>
          <LinkWrapper style={{ marginTop: '20px' }}>
            <i className='fab fa-behance-square' style={{border:'2px solid blue'}}/>
            <LinkContacts
              href='https://www.behance.net/francescaschiro'
              target='_blank'
              rel='noopener noreferrer'
              sectionColor={props => props.theme.color.lightBlue}
            >Behance</LinkContacts>
          </LinkWrapper>
          <LinkWrapper style={{ marginTop: '20px' }}>
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
          <H3>Or email me even just to say hi!</H3>
          <LinkWrapper mail id= {'LinkWrapper'} style={{ marginTop: '20px' }}>
            <i className='fab fa-email' style={{border:'2px solid blue'}}/>
            <LinkContacts
              mailto= 'francesca_schiro@yahoo.it'
              href='https://github.com/francescaSchiro'
              target='_blank'
              rel='noopener noreferrer'
              sectionColor={props => props.theme.color.lightBlue}
            > Mail me </LinkContacts>
          </LinkWrapper>
        </LinksWrapper>
          
      </BodyWrapper>
      <Footer>Francesca Schiro | Front End & Graphic Designer | Tutti i diritti riservati © 2019</Footer>
  </Wrapper>
);

export default Contacts;

          // <MailFlipForm>Mail me </MailFlipForm>