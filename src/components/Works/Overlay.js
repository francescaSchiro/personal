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
    width:15vw;
    height:15vw;
    margin:1vw 0;
  }
  @media screen and (max-width: ${getBreakpoint('tablet')})  and (min-width: ${getBreakpoint('mobile')}) {
    width:23vw;
    height:60vw;
    /* margin:1vw 0; */
  }
    
  @media screen and (max-width: ${getBreakpoint('mobile')}) {
    width: 100vw;
    height: 100vw;
  }
  
`;

export default Overlay;
