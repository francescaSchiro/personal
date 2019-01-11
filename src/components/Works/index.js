import React from 'react';
import Wrapper from './Wrapper';
import SectionTitle from '../SectionTitle';
import SectionTitleContainer from './SectionTitleContainer';
import CarouselSlider from './CarouselSlider';
import CarouselHandmade from './CarouselHandmade';


const Works = () => (
  <Wrapper >
    <SectionTitleContainer className='worksSection'>
      <SectionTitle
        margins={'90px 0 0 0'}
        sectionColor={props => props.theme.color.red}
      >
        Works
      </SectionTitle>
    </SectionTitleContainer>
    <CarouselSlider />
    <CarouselHandmade />
  </Wrapper>
);

export default Works;
