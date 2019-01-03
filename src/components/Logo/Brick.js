import styled, { keyframes, css } from 'styled-components';

const getPseudoBgColor = (props) => (
  props.theme.color.backgroundColor
);

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
      transform: translateX(${props.b}px);
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
  animation: ${props => css`
    ${animation(props)} 4s cubic-bezier(0.65, -0.55, 0.25, 1.5) infinite
  `};

  /* commons */
  /* height: 50px; */
  width: 100px;
  background-color: transparent;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  /* border-radius: 2px; */

  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    right: -300px;
    height: 56px;
    width: 300px;
    overflow: hidden;

    background-color: ${getPseudoBgColor};
  }
  &:before {
    content: '';
    position: absolute;
    left: -300px;
    height: 56px;
    width: 300px;
    overflow-x: hidden;
    
    background-color: ${getPseudoBgColor};
  }

  will-change: transform;
`;

export default Brick;




// https://github.com/styled-components/styled-components/issues/397
