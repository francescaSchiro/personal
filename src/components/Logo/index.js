import React from 'react';
import Wrapper from './Wrapper';
import Brick from './Brick';
// import BackgroundImg from './BackgroundImg';

const Logo = () => (
  <Wrapper>
    {/* <BackgroundImg> */}
      <Brick a={0} b={40} c={-40} d={0} bg={'blue'}>1</Brick>
      <Brick >2</Brick>
      <Brick >3</Brick>
      <Brick >4</Brick>
      <Brick >5</Brick>
    {/* </BackgroundImg> */}
  </Wrapper>
);

export default Logo;
