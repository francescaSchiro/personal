import React, { Component } from 'react';

import CardsSlider from './CardsSlider';
import CardWrapper from './CardWrapper';
import CardTitle from './CardTitle';
// import CTitle from './CTitle';
import CSub from './CSub';

// import DotRight from "./DotRight";
import Overlay from './Overlay';
import SeeMore from './SeeMore';
import ArrowWrapper from './ArrowWrapper';

import { cards, scrollRight, scrollLeft, isIE } from '../../utils';

class CarouselHandmade extends Component {
  render() {
    return (
      <>
        <CardsSlider id={'slider'}>
          {cards.map(el => (
            <CardWrapper key={el.id} coverUrl={el.coverUrl}>
              <CardTitle href={el.more} target='_blank'>
                {el.title}
              </CardTitle>
              <Overlay />

              <CSub>{el.description}</CSub>
              <SeeMore href={el.more} target='_blank'>
                See more...
              </SeeMore>
            </CardWrapper>
          ))}
        </CardsSlider>
        {isIE ? (
          <ArrowWrapper>
            <i
              type='button'
              onClick={() => scrollLeft('slider')}
              class='fas fa-angle-left'
            />
            <i
              type='button'
              onClick={() => scrollRight('slider')}
              class='fas fa-angle-right'
            />{' '}
          </ArrowWrapper>
        ) : (
          <></>
        )}
      </>
    );
  }
}

export default CarouselHandmade;
