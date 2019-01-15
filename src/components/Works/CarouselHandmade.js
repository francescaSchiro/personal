import React, { Component } from "react";

import CardsSlider from "./CardsSlider";
import CardWrapper from "./CardWrapper";
import CardTitle from "./CardTitle";
// import CTitle from './CTitle';
import CSub from './CSub';

// import DotRight from "./DotRight";
import Overlay from "./Overlay";
import SeeMore from "./SeeMore";

import { cards } from "../../utils";
// import DotContainer from './DotContainer';

class CarouselHandmade extends Component {
  render() {
    return (
      <>
        <CardsSlider id={"slider"}>
          {cards.map(el => (
            <CardWrapper key={el.id} coverUrl={el.coverUrl}>
              <CardTitle>{el.title}</CardTitle>
              <Overlay />
              
              <CSub>{el.description}</CSub>
              <SeeMore href={el.more} target="_blank">
                See more...
              </SeeMore>
            </CardWrapper>
          ))}
        </CardsSlider>
      </>
    );
  }
}

export default CarouselHandmade;
/* <DotRight onClick={() => scrollRight("slider")} /> */
