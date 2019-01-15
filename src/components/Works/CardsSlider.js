import styled from 'styled-components';
import { getBreakpoint } from '../../utils';

const CardsSlider = styled.ul`
  position: relative;
  width: 100vw;
  /* border: 2px solid red; */

  display: block;
  white-space: nowrap;
  height: 30vw;
  /* for smooth scrolling like in iOS */
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;


  /* ------------SCROLL UI ----------*/

  /* width */
  ::-webkit-scrollbar {
    height: 15px;
  }
  #scroll::-webkit-scrollbar {
    height: 15px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
  }
  /* Track */
  #scroll::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.color.red};
    border-radius: 10px;
  }
   /* Handle */
   #scroll::-webkit-scrollbar-thumb {
    background: ${props => props.theme.color.red};
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgb(229, 121, 121);
  }
  /* Handle on hover */
  #scroll::-webkit-scrollbar-thumb:hover {
    background: rgb(229, 121, 121);
  }

  @media screen and (min-width: ${getBreakpoint('tablet')}) {
    /* 5 vw more than card height to detatch scrollbar */
    height: 30vw;
  }
  @media screen and (max-width: ${getBreakpoint(
      'tablet'
    )}) and (min-width: 600px) {
    /* 5 vw more than card height to detach scrollbar */
    height: 45vw;
  }

  @media screen and (max-width: 600px) {
    /* 10 vw more than card height to detatch scrollbar */
    height: 100vw;
  }
`;

export default CardsSlider;
