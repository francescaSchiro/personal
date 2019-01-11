import styled from "styled-components";
import { getBreakpoint } from '../../utils';

const Overlay = styled.div`
  position: absolute;
  top:0;
  left: 0;
  display: none;
  
  z-index:1;


  background-color: black;
  opacity: 0.5;

  @media screen and (max-width: ${getBreakpoint('desktop')} ) and (min-width: ${getBreakpoint('tablet')})  {
    width: 25vw;
    height: 25vw;
    
  }
  @media screen and (max-width: ${getBreakpoint('tablet')})  and (min-width:600px) {
    /* width:23vw;
    height:60vw; */
    /* prova */
    width: 40vw;
    height: 40vw;
  }
    
  @media screen and (max-width: 600px) {
    width: 90vw;
    height: 90vw;
  }
  
`;

export default Overlay;
