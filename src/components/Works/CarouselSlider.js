import React from 'react';
import styled, { css } from 'styled-components';

import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';

import Card from './Card';
import CTitle from './CTitle';
import CSub from './CSub';
import Cover from './Cover';
import CBody from './CBody';

const width = '300px';
const height = '300px';

const Container = styled.div`
  margin-top: 40px;
  border: 2px solid red;
  position: relative;
  overflow: hidden;
  width: ${width};
  height: ${height};
`;

//every Slide (card) style
const Children = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 5px solid orange;
  width: ${width};
  position: relative;
  height: ${height};
  z-index: 100;
`;

const Arrow = styled.div`
  text-shadow: 1px 1px 1px #fff;
  color: ${props => props.theme.color.red};
  z-index: 100;
  line-height: ${height};
  text-align: center;
  position: absolute;
  top: 0;
  width: 10%;
  font-size: 2em;
  cursor: pointer;
  user-select: none;
  ${props =>
    props.right
      ? css`
          left: 85%;
        `
      : css`
          left: 5%;
        `};
`;

const Dot = styled.span`
  font-size: 1.5em;
  cursor: pointer;
  text-shadow: 1px 1px 1px #fff;
  user-select: none;
`;

const Dots = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${width};
  z-index: 100;
  border: 2px solid blue;
`;

// const Cards = [
//   {
//     id: 0,
//     title: '1st SLIDE',
//     coverUrl: 'https://404store.com/2017/08/15/4949794-random-image.jpg',
//     description: 'loprem ipsum dolor sit amet dfhfad blablablabla ablalba'
//   },
//   {
//     id: 1,
//     title: '2nd SLIDE',
//     coverUrl: 'https://vignette.wikia.nocookie.net/austinally/images/1/14/Random_picture_of_shark.png/revision/latest?cb=20150911004230',
//     description: 'little shark dudurruxidhijfjhfqwjm'
//   }
// ];

// carousel UI
const CarouselUI = ({ position, total, handleClick, children }) => (
  <div>
    <Container>
      <Children>
        {children}
        <Arrow onClick={handleClick} data-position={position - 1}>
          <i className='fas fa-angle-left' />
        </Arrow>
        <Arrow right onClick={handleClick} data-position={position + 1}>
          <i className='fas fa-angle-right' />
        </Arrow>
      </Children>
    </Container>
    <Dots>
      {Array(...Array(total)).map((val, index) => (
        <Dot key={index} onClick={handleClick} data-position={index}>
          {index === position ? '● ' : '○ '}
        </Dot>
      ))}
    </Dots>
  </div>
);

const Carousel = makeCarousel(CarouselUI);

const CarouselSlider = () => (
  <Carousel defaultWait={10000} /*wait for  milliseconds*/>
    <Slide right>
      <Card>
        <Cover
          coverUrl={'https://404store.com/2017/08/15/4949794-random-image.jpg'}
        />
        <CBody>
          <CTitle>Slide 1</CTitle>
          <CSub>Slide Description</CSub>
        </CBody>
      </Card>
    </Slide>
    <Slide right>
      <div>
        <h1>Slide 2</h1>
        <p>Slide Description</p>
      </div>
    </Slide>
    <Slide right>
      <div>
        <h1>Slide 3</h1>
        <p>Slide Description</p>
      </div>
    </Slide>
  </Carousel>
);

export default CarouselSlider;

// import { getBreakpoint } from '../../utils';
/* 
@media only screen and (max-width: ${getBreakpoint('mobile')}){
  width: 100%;
} */
