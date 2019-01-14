import React from 'react';
import Fade from 'react-reveal/Fade';
import Wrapper from './Wrapper';
import SectionTitleContainer from './SectionTitleContainer';
import PContainer from './PContainer';
import SectionTitle from '../SectionTitle';
import P from '../P';
import LinkContainer from './LinkContainer';
import Link from '../Link';
import { checkIfAppleDevice } from '../../utils';

// { checkIfAppleDevice && <div>asfkgfkwqfufgqiwu</div> }

const About = () => (
  <Wrapper>
    {checkIfAppleDevice ? (
      // if apple device
      <React.Fragment>
        <SectionTitleContainer className='aboutSection' id='about'>
          <SectionTitle
            margins={'90px 0 0 -20px'}
            sectionColor={props => props.theme.color.yellow}
          >
            About
          </SectionTitle>
        </SectionTitleContainer>

        <PContainer>
          <P sectionColor={props => props.theme.color.yellow}>
            Ciao. My Name is Francesca, I'm a graphic designer & front end
            developer based in the beautiful town of Bergamo. I love discovering
            new things. I believe that “the less you do, the less you’d do” and
            this is why I am always active, pushed by a constant curiosity. My
            experience and education enriched my graphic knowledge, for web and
            print, and increased my awareness of it as a powerful mean of
            communication, essential within a very competitive digital reality.
            After a Master in coding I embraced a career in Front End
            Development.
          </P>
        </PContainer>

        <LinkContainer>
          <Link
            sectionColor={props => props.theme.color.yellow}
            href='https://docdro.id/U6bDALF'
            target='_blank'
            rel='noopener noreferrer'
          >
            Curious? Take a look at my CV
          </Link>
        </LinkContainer>
      </React.Fragment>
    ) : (
      // if NOT apple device: import Fade animations from reactreval

      <React.Fragment>
        <SectionTitleContainer className='aboutSection' id='about'>
          <Fade left>
            <SectionTitle
              margins={'90px 0 0 -20px'}
              sectionColor={props => props.theme.color.yellow}
            >
              About
            </SectionTitle>
          </Fade>
        </SectionTitleContainer>

        <Fade right>
          <PContainer>
            <P sectionColor={props => props.theme.color.yellow}>
              Ciao. My Name is Francesca, I'm a graphic designer & front end
              developer based in the beautiful town of Bergamo. I love
              discovering new things. I believe that “the less you do, the less
              you’d do” and this is why I am always active, pushed by a constant
              curiosity. My experience and education enriched my graphic
              knowledge, for web and print, and increased my awareness of it as
              a powerful mean of communication, essential within a very
              competitive digital reality. After a Master in coding I embraced a
              career in Front End Development.
            </P>
          </PContainer>
        </Fade>
        <LinkContainer>
          <Fade>
            <Link
              sectionColor={props => props.theme.color.yellow}
              href='https://docdro.id/U6bDALF'
              target='_blank'
              rel='noopener noreferrer'
            >
              Curious? Take a look at my CV
            </Link>
          </Fade>
        </LinkContainer>
      </React.Fragment>
    )}
  </Wrapper>
);

export default About;
