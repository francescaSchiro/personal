import React from "react";
import Fade from "react-reveal/Fade";
import Wrapper from "./Wrapper";
import SectionTitleContainer from "./SectionTitleContainer";
import PContainer from "./PContainer";
import SectionTitle from "../SectionTitle";
import P from "../P";
import LinkContainer from "./LinkContainer";
import Link from "../Link";
import { checkIfAppleDevice, isIE } from "../../utils";

// { checkIfAppleDevice && <div>asfkgfkwqfufgqiwu</div> }

const About = () => (
  <Wrapper>
    {checkIfAppleDevice || isIE ? (
      // if apple device
      <React.Fragment>
        <SectionTitleContainer className="aboutSection" id="about">
          <SectionTitle
            margins={"90px 0 0 -20px"}
            sectionColor={props => props.theme.color.yellow}
          >
            About
          </SectionTitle>
        </SectionTitleContainer>

        <PContainer>
          <P sectionColor={props => props.theme.color.yellow}>
            Ciao. <br />
            I am Francesca, a Graphic Designer & Front End Developer living in
            Bergamo. I strongly believe in the way 'Do what you love, love what
            you do' and this is why I always give 100%. Knowing that there's
            always something to learn makes me happy. I like sports and getting
            my outdoor fix once in a while. I love cooking, drawing, photography
            and discovering new places makes me feel alive. <br />
            ...and I also think pufferfish are pretty awesome.
          </P>
        </PContainer>

        <LinkContainer>
          <Link
            about
            sectionColor={props => props.theme.color.yellow}
            href="https://www.docdroid.net/e9iLeoj/francesca-schiro-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Curious? Take a look at my CV
          </Link>
        </LinkContainer>
      </React.Fragment>
    ) : (
      // if NOT apple device: import Fade animations from reactreval

      <React.Fragment>
        <SectionTitleContainer className="aboutSection" id="about">
          <Fade left>
            <SectionTitle
              margins={"90px 0 0 -20px"}
              sectionColor={props => props.theme.color.yellow}
            >
              About
            </SectionTitle>
          </Fade>
        </SectionTitleContainer>

        <Fade right>
          <PContainer>
            <P sectionColor={props => props.theme.color.yellow}>
              Ciao. <br />
              I am Francesca, a Graphic Designer & Front End Developer living in
              Bergamo. I strongly believe in the way 'Do what you love, love
              what you do' and this is why I always give 100%. Knowing that
              there's always something to learn makes me happy. I like sports
              and getting my outdoor fix once in a while. I love cooking,
              drawing, photography and discovering new places makes me feel
              alive. <br />
              ...and I also think pufferfish are pretty awesome.
            </P>
          </PContainer>
        </Fade>
        <LinkContainer>
          <Fade>
            <Link
              about
              sectionColor={props => props.theme.color.yellow}
              href="https://www.docdroid.net/e9iLeoj/francesca-schiro-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
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

// Ciao.
//             My Name is Francesca, I'm a graphic designer & front end developer based in the town of Bergamo.
//             I love discovering new things. I believe that “the less you do, the less you’d do” and this is why I am always active, pushed by a constant curiosity.
//             My experience and education enriched my graphic knowledge, for web and print, and increased my awareness of it as a powerful mean of communication, essential within a very competitive digital reality.
//             After a Master in coding I embraced a career in Front End Development.
