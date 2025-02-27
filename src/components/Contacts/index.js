import React from 'react';
import Fade from 'react-reveal/Fade';

import { checkIfAppleDevice, isIE } from '../../utils';

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
      {(checkIfAppleDevice || isIE) ? (
        <SectionTitle
          margins={'80px -10px 0 0'}
          sectionColor={props => props.theme.color.lightBlue}
        >
          Contacts
        </SectionTitle>
      ) : (
        <Fade left>
          <SectionTitle
            margins={'80px -10px 0 0'}
            sectionColor={props => props.theme.color.lightBlue}
          >
            Contacts
          </SectionTitle>
        </Fade>
      )}
    </SectionTitleContainer>
    {(checkIfAppleDevice || isIE) ? (
      <BodyWrapper>
        <LinksWrapper>
          <H3 contacts>You can find me on:</H3>
          <LinkWrapper id={'LinkWrapper'}>
            <i className='fab fa-github-square' />
            <LinkContacts
              href='https://github.com/francescaSchiro'
              target='_blank'
              rel='noopener noreferrer'
              sectionColor={props => props.theme.color.lightBlue}
            >GitHub
            </LinkContacts>
          </LinkWrapper>
          <LinkWrapper>
            <i className='fab fa-behance-square' />
            <LinkContacts
              href='https://www.behance.net/francescaschiro'
              target='_blank'
              rel='noopener noreferrer'
              sectionColor={props => props.theme.color.lightBlue}
            >
              Behance
            </LinkContacts>
          </LinkWrapper>
          <LinkWrapper>
            <i className='fab fa-linkedin' />
            <LinkContacts
              href='https://www.linkedin.com/in/francesca-schiro/'
              target='_blank'
              rel='noopener noreferrer'
              sectionColor={props => props.theme.color.lightBlue}
            >
              LinkedIn
            </LinkContacts>
          </LinkWrapper>
        </LinksWrapper>

        <LinksWrapper>
          <H3 contacts>Or contact me even just to say hi!</H3>
          <LinkWrapper mail id={'mail'} href='mailto:francescaschiro.fs@gmail.com?subject=Just%20wanted%20to%20say...&body=That you are amazing'>
            <i className='fas fa-envelope-square' />
            <LinkContacts
              href='mailto:francescaschiro.fs@gmail.com?subject=Just%20wanted%20to%20say...&body=That you are amazing'
              // target='_blank'
              // rel='noopener noreferrer'
              sectionColor={props => props.theme.color.lightBlue}
            >
              {' '}
              Email me{' '}
            </LinkContacts>
          </LinkWrapper>
        </LinksWrapper>
      </BodyWrapper>
    ) : (
      <Fade right>
        <BodyWrapper>
          <LinksWrapper>
            <H3 contacts>You can find me on:</H3>
            <LinkWrapper id={'LinkWrapper'}>
              <i className='fab fa-github-square' />
              <LinkContacts
                href='https://github.com/francescaSchiro'
                target='_blank'
                rel='noopener noreferrer'
                sectionColor={props => props.theme.color.lightBlue}
              >GitHub
              </LinkContacts>
            </LinkWrapper>
            <LinkWrapper>
              <i className='fab fa-behance-square' />
              <LinkContacts
                href='https://www.behance.net/francescaschiro'
                target='_blank'
                rel='noopener noreferrer'
                sectionColor={props => props.theme.color.lightBlue}
              >
                Behance
              </LinkContacts>
            </LinkWrapper>
            <LinkWrapper>
              <i className='fab fa-linkedin' />
              <LinkContacts
                href='https://www.linkedin.com/in/francesca-schiro'
                target='_blank'
                rel='noopener noreferrer'
                sectionColor={props => props.theme.color.lightBlue}
              >
                LinkedIn
              </LinkContacts>
            </LinkWrapper>
          </LinksWrapper>
          <LinksWrapper>
            <H3 contacts>Or contact me even just to say hi!</H3>
            <LinkWrapper mail id={'mail'}>
              <i className='fas fa-envelope-square' />
              <LinkContacts
                mailto='francescaschiro.fs@gmail.com'
                href='mailto:francescaschiro.fs@gmail.com?subject=Just%20wanted%20to%20say...&body=That you are amazing"'
                // target='_blank'
                // rel='noopener noreferrer'
                sectionColor={props => props.theme.color.lightBlue}
              >
                {' '}
                Email me{' '}
              </LinkContacts>
            </LinkWrapper>
          </LinksWrapper>
        </BodyWrapper>
      </Fade>
    )}
    <Footer>
      Francesca Schiro | Front End Developer | All rights reserved ©
      2019
    </Footer>
  </Wrapper>
);

export default Contacts;

// <MailFlipForm>Mail me </MailFlipForm>
