import React from 'react';

import CardsSlider from './CardsSlider';
import CardWrapper from './CardWrapper';
import CardTitle from './CardTitle';
// import CTitle from './CTitle';
import CSub from './CSub';

import Overlay from './Overlay';
import SeeMore from './SeeMore';

import { cards } from '../../utils';

const CarouselHandmade = () => (
  <CardsSlider>
    {cards.map(el => (
      <CardWrapper
        key={el.id}
        coverUrl={el.coverUrl}
      >
        <CardTitle>{el.title}</CardTitle>
        {/* <CSub>{el.description}</CSub> */}
        <Overlay />
        <SeeMore
          href={el.more}
          target='_blank'
        >
          See more...
        </SeeMore>
      </CardWrapper>
    ))}
  </CardsSlider>
);

export default CarouselHandmade;

// <CardWrapper
//   coverUrl={'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/9d058d46904857.586a27a7b7a94.png'}
// >
//   <CardTitle>This is my title</CardTitle>
//   <Overlay />
// </CardWrapper>

// <CardWrapper
//   coverUrl={'https://mir-s3-cdn-cf.behance.net/project_modules/1400/ea772750465831.58d15bdeb5e35.png'}
// >
//   <CardTitle>This is my title</CardTitle>

//   <Overlay/>
// </CardWrapper>

// <CardWrapper
//   coverUrl={'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a2aa4746869273.5867d56c4e52e.png/08/15/4949794-random-image.jpg'}
// >
//   <CardTitle>This is my title</CardTitle>
//   <Overlay />
// </CardWrapper>

// <CardWrapper
//   coverUrl={'https://404store.com/2017/08/15/4949794-random-image.jpg'}
// >
//   <CardTitle>This is my title</CardTitle>

//   <Overlay/>
// </CardWrapper>
