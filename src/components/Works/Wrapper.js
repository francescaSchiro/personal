import styled from "styled-components";
import { getBreakpoint } from '../../utils';


const Wrapper = styled.div`
  /* height:100%; */
  min-height: 100%;
  height: 100vh;
  width: 100%;
  /* border: 2px solid red; */

  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media screen and (min-width: ${getBreakpoint("tablet")}) {
    min-height: 100vh; 
  }

`;

export default Wrapper;
