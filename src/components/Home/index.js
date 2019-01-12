import React from "react";
import Fade from "react-reveal/Fade";
import Logo from "../Logo";
import Wrapper from "./Wrapper";
import NameWrapper from "./NameWrapper";
import Dot from "./Dot";
import DotWrapper from "./DotWrapper";
import H1 from "../H1";
import H3 from "../H3";

// import { scrollToSection } from "../../utils";

const Home = () => (
  <Wrapper className="homeSection" id="home">
    <Logo />
    <NameWrapper>
      <Fade bottom cascade delay={1000}>
        <H1 home sectionColor={props => props.theme.color.gray}>
          Francesca Schiro
        </H1>
      </Fade>
      <Fade bottom cascade delay={1500}>
        <H3 sectionColor={props => props.theme.color.gray}>
          Front End & Graphic Designer
        </H3>
      </Fade>
    </NameWrapper>
    <Fade delay={2000}>
      <DotWrapper>
        <a href="#about" style={{ all: "unset" }}>
          <Dot />
        </a>
      </DotWrapper>
    </Fade>
  </Wrapper>
);

export default Home;
