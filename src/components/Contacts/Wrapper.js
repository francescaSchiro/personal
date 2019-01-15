import styled from 'styled-components';
import { getBreakpoint } from '../../utils';


const Wrapper = styled.div`
  width: 100%;
  /* border: 2px solid blueviolet; */

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: ${getBreakpoint("tablet")}) {
    height: 100vh; 
    
  }


`;

export default Wrapper;
