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
const ABOUT_TEXT = <>
<b>Front-End Developer</b> with 6 years of expertise in building, maintaining, and testing responsive, scalable, and high-performance applications. <br />
<b>React & Next.js</b> specialist, with strong proficiency in <b>TypeScript</b>, <b>JavaScript (ES6+)</b>, <b>HTML</b>, <b>CSS/SCSS</b>, and modern styling libraries. Skilled in component-driven development, design systems and accessibility. Experienced in unit and end-to-end testing with <b>Jest</b> and <b>Cypress</b> to maintain code reliability. <br />
Adept at <b>remote work</b> and cross-functional collaboration with global teams, often bridging the gap between design and development while optimizing performance for the best user experience. 
Passionate about <b>continuous learning</b>, exploring new technologies, and crafting intuitive, user-centered interfaces. <br />
Outside of coding, I find inspiration in traveling, outdoor adventures and discovering new cultures.
    </>;

const About = () => (
  <Wrapper>
    {checkIfAppleDevice || isIE ? (
      // if apple device
      <>
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
        {ABOUT_TEXT}
            </P>
        </PContainer>

        <LinkContainer>
          <Link
            about
            sectionColor={props => props.theme.color.yellow}
            href="https://www.canva.com/design/DAGgOYcGXkE/l-khDVgp00C5fbhfan0J4w/view?utm_content=DAGgOYcGXkE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hbb75128c8e"
            target="_blank"
            rel="noopener noreferrer"
          >
            Curious? Take a look at my CV
          </Link>
        </LinkContainer>
      </>
    ) : (
      // if NOT apple device: import Fade animations from reactreval

      <>
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
              {ABOUT_TEXT}
              {/* Ciao. <br />
              I am Francesca, a Graphic Designer & Front End Developer living in
              Bergamo. <br />
              I think pufferfish are pretty cool. <br />
              Discovering new places and meeting new people makes me feel alive. <br />
              I like sports and getting my outdoor fix once in a while. <br />
              I give 100% in everything I do. <br />
              Knowing that there's always something to learn makes me happy. <br /> */}
            </P>
          </PContainer>
        </Fade>
        <LinkContainer>
          <Fade>
            <Link
              sectionColor={props => props.theme.color.yellow}
              href="https://www.canva.com/design/DAGgOYcGXkE/l-khDVgp00C5fbhfan0J4w/view?utm_content=DAGgOYcGXkE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hbb75128c8e"
              target="_blank"
              rel="noopener noreferrer"
            >
              Curious? Take a look at my CV
            </Link>
          </Fade>
        </LinkContainer>
      </>
    )}
  </Wrapper>
);

export default About;

// Ciao.
//             My Name is Francesca, I'm a graphic designer & front end developer based in the town of Bergamo.
//             I love discovering new things. I believe that “the less you do, the less you’d do” and this is why I am always active, pushed by a constant curiosity.
//             My experience and education enriched my graphic knowledge, for web and print, and increased my awareness of it as a powerful mean of communication, essential within a very competitive digital reality.
//             After a Master in coding I embraced a career in Front End Development.
