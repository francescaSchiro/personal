import styled from 'styled-components';
import { getBreakpoint } from '../../utils';

const DotContainer = styled.div` 
  
  position:fixed;
  width: 100vw;
  /* border: 5px solid blue; */


  transition: all 0.2s ease-in-out;

  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: ${getBreakpoint(
    'desktop'
  )} ) and (min-width: ${getBreakpoint('tablet')})  {

    height: 30vw;
    display: block;

  }
  @media screen and (max-width: ${getBreakpoint(
    'tablet'
  )})  and (min-width: 600px) {
  
    height: 40vw;
 
  }
    
  @media screen and (max-width: 600px) {
    height: 90vw;

  }

`;

export default DotContainer;
