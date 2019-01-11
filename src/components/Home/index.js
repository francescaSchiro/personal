import React from "react";
import Logo from "../Logo";
import Wrapper from "./Wrapper";
import NameWrapper from "./NameWrapper";
import Dot from "./Dot";
import DotWrapper from "./DotWrapper";
import H1 from "../H1";
import H3 from "../H3";

import { scrollToSection } from "../../utils";

const Home = () => (
  <Wrapper className="homeSection">
    <Logo />
    <NameWrapper>
      <H1 home sectionColor={props => props.theme.color.gray}>
        Francesca Schiro
      </H1>
      <H3 sectionColor={props => props.theme.color.gray}>
        Front End & Graphic Designer
      </H3>
    </NameWrapper>
    <DotWrapper type="button" onClick={() => scrollToSection(".aboutSection")}>
      <Dot />
    </DotWrapper>
  </Wrapper>
);

export default Home;
