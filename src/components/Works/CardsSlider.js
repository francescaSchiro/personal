import styled from 'styled-components';
import { getBreakpoint } from '../../utils';

const CardsSlider = styled.ul`
  position: relative;
  width: 100vw;
  border: 2px solid red;
  transition: all 0.2s ease-in-out;
  margin-bottom: 20px;

  /* ------------SCROLL UI ----------*/

  /* width */
  ::-webkit-scrollbar {
    /* width: 5px; */
    height:15px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    
    background: ${props => props.theme.color.red};
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgb(229, 121, 121);
  }

  @media screen and (max-width: ${getBreakpoint(
      'desktop'
    )}) and (min-width: ${getBreakpoint('tablet')}) {
    /* display:flex;
    flex-wrap:wrap;
    justify-content:center; */
    /* prova */
    scroll-snap-type: mandatory;
    scroll-snap-type: x mandatory;
    /* 5 vw more than card height to detatch scrollbar */
    height: 35vw;
    display: block;
    white-space: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
  }
  @media screen and (max-width: ${getBreakpoint(
      'tablet'
    )}) and (min-width: 600px) {
    /* display:flex;
    flex-wrap:wrap;
    justify-content:center; */

    /* prove */
    scroll-snap-type: mandatory;
    scroll-snap-type: x mandatory;
    /* 5 vw more than card height to detach scrollbar */
    height: 45vw;
    display: block;
    white-space: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
  }

  @media screen and (max-width: 600px) {
    scroll-snap-type: mandatory;
    scroll-snap-type: x mandatory;
    /* 10 vw more than card height to detatch scrollbar */
    height: 100vw;
    display: block;
    white-space: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
  }
`;

export default CardsSlider;
