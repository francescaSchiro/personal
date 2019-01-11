import styled from 'styled-components';
import { getBreakpoint } from '../../utils';

const CardsSlider = styled.ul` 
  
  width: 100vw;

  border: 2px solid red;
    /* border-right: 10px solid ${props => props.theme.color.red}; */


  transition: all 0.2s ease-in-out;
  margin-top: 40px;

  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: ${getBreakpoint(
    'desktop'
  )} ) and (min-width: ${getBreakpoint('tablet')})  {
    /* display:flex;
    flex-wrap:wrap;
    justify-content:center; */
    /* prova */
    scroll-snap-type: mandatory;
    scroll-snap-type: x mandatory;
    height: 30vw;
    display: block;
    white-space: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;

  }
  @media screen and (max-width: ${getBreakpoint(
    'tablet'
  )})  and (min-width: 600px) {
    
    /* display:flex;
    flex-wrap:wrap;
    justify-content:center; */

    /* prove */
    scroll-snap-type: mandatory;
    scroll-snap-type: x mandatory;
    height: 40vw;
    display: block;
    white-space: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
  }
    
  @media screen and (max-width: 600px) {
    scroll-snap-type: mandatory;
    scroll-snap-type: x mandatory;
    height: 90vw;
    display: block;
    white-space: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
  }

`;

export default CardsSlider;
