import React from 'react';
import Fade from 'react-reveal/Fade';

import Wrapper from './Wrapper';
import Brick from './Brick';
// import BackgroundImg from './BackgroundImg';

const Logo = () => (
  <Fade>
    <Wrapper>
      <Brick a={0} b={50} c={0} d={0} />
      <Brick a={0} b={0} c={-50} d={0} />
      <Brick a={0} b={50} c={0} d={0} />
      <Brick a={0} b={0} c={50} d={0} />
      <Brick a={0} b={0} c={0} d={0} />
    </Wrapper>
  </Fade>
);

export default Logo;
