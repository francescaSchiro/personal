import styled, { keyframes, css } from 'styled-components';

import { bricksCommon } from '../../utils';

function animation(props) {
  return keyframes`
  0%{
    transform: translateX(${props.a}px);
  }
      10%{
      transform: translateX(${props.a}px);
      }
  20% {
    transform: translateX(${props.b}px);
  }
      40% {
      transform: translateX(${props.a}px);
      }

  60% {
    transform: translateX(${props.c}px);
  }
      80% {
      transform: translateX(${props.c}px);
      }
  
  90% {
    transform: translateX(${props.d}px);
  }
      100% {
    transform: translateX(${props.d}px);
  }
`;
}

const Brick = styled.div`
  ${bricksCommon}
  background-color: ${props => props.bg};

 animation: ${props => css`
    ${animation(props)} 4s cubic-bezier(0.65, -0.55, 0.25, 1.5) infinite
    `};

`;

export default Brick;

// https://github.com/styled-components/styled-components/issues/397