import React from "react";
import Logo from "../Logo";
import Wrapper from "./Wrapper";
import NameWrapper from "./NameWrapper";
import Dot from "./Dot";
import H1 from "../H1";
import H3 from "../H3";

const Home = () => (
  <Wrapper className="homeSection">
    <Logo />
    <NameWrapper>
      <H1>Francesca Schiro</H1>
      <H3>Front End & Graphic Designer</H3>
    </NameWrapper>
    <Dot />
  </Wrapper>
);

export default Home;
