import React from 'react';

import CardsSlider from './CardsSlider';
import CardWrapper from './CardWrapper';
import CardTitle from './CardTitle';
import Overlay from './Overlay';

const CarouselHandmade = () => (
  <CardsSlider>
   
      <CardWrapper
        coverUrl={'https://404store.com/2017/08/15/4949794-random-image.jpg'}
      >
        <CardTitle>This is my title</CardTitle>
        <Overlay />
      </CardWrapper>
    

      <CardWrapper
        coverUrl={'https://404store.com/2017/08/15/4949794-random-image.jpg'}
      >
        <CardTitle>This is my title</CardTitle>
        <Overlay />
      </CardWrapper>


      <CardWrapper
        coverUrl={'https://404store.com/2017/08/15/4949794-random-image.jpg'}
      >
        <CardTitle>This is my title</CardTitle>
        <Overlay />
      </CardWrapper>


      <CardWrapper
        coverUrl={'https://404store.com/2017/08/15/4949794-random-image.jpg'}
      >
        <CardTitle>This is my title</CardTitle>
        <Overlay />
      </CardWrapper>
  </CardsSlider>
);

export default CarouselHandmade;

// CAROUSEL HANDMADE
/*
    
    */
