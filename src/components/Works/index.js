import React from 'react';
import Wrapper from './Wrapper';
import SectionTitle from '../SectionTitle';
import SectionTitleContainer from './SectionTitleContainer';
// import CardsSlider from './CardsSlider';
// import CardWrapper from './CardWrapper';
// import CardTitle from './CardTitle';
// import Overlay from './Overlay';

const Works = () => (
  <Wrapper className='worksSection'>
    <SectionTitleContainer>
      <SectionTitle
        margins={'90px 0 0 0'}
        sectionColor={props => props.theme.color.red}
      >
        Works
      </SectionTitle>
    </SectionTitleContainer>
  </Wrapper>
);

export default Works;

// CAROUSEL HANDMADE
/*
    <CardsSlider>
      <CardWrapper coverUrl = {'https://404store.com/2017/08/15/4949794-random-image.jpg'}>
        <CardTitle>This is my title</CardTitle>
        <Overlay />
      </CardWrapper>

      <CardWrapper coverUrl = {'https://404store.com/2017/08/15/4949794-random-image.jpg'}>
        <CardTitle>This is my title</CardTitle>
        <Overlay />
      </CardWrapper>

      <CardWrapper coverUrl = {'https://404store.com/2017/08/15/4949794-random-image.jpg'}>
        <CardTitle>This is my title</CardTitle>
        <Overlay />
      </CardWrapper>

      <CardWrapper coverUrl = {'https://404store.com/2017/08/15/4949794-random-image.jpg'}>
        <CardTitle>This is my title</CardTitle>
        <Overlay />
      </CardWrapper>

    </CardsSlider>
    */