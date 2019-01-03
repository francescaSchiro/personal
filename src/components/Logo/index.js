import React from 'react';
import Wrapper from './Wrapper';
import Brick from './Brick';
// import BackgroundImg from './BackgroundImg';

const Logo = () => (
  <Wrapper>
    <Brick a={0} b={40} c={0} d={0} />
    <Brick a={0} b={0} c={-40} d={0} />
    <Brick a={0} b={40} c={0} d={0} />
    <Brick a={0} b={0} c={40} d={0} />
    <Brick a={0} b={0} c={0} d={0} />
  </Wrapper>
);

export default Logo;
