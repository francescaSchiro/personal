import styled from "styled-components";

import { getBreakpoint } from '../../utils';

const Wrapper = styled.div`
/* min-height: 100%;
  
  width: 100%;
  /* border: 2px solid yellow; */
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  align-items: center;

  overflow: hidden;
  @media screen and (min-width: ${getBreakpoint("tablet")}) {
    height: 100vh; 
    
  }
`;

export default Wrapper;
