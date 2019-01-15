import styled from 'styled-components';

const DotRight = styled.div`
  /* position: absolute; */
  /* top: calc(50% - 80px); */
  right: 0;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin: 40px;
  background-color: ${props => props.theme.color.red};

  animation-name: scrollRight;
  animation-duration: 1.7s;
  animation-timing-function: cubic-bezier(0.65, -0.55, 0.25, 1.5);
  animation-iteration-count: infinite;
  transform-origin: 50% 20.5px;
  will-change: transform, opacity;
  opacity: 1;

  cursor: pointer;
  @keyframes scrollRight {
    0%,
    20% {
      transform: rotate(90deg) translateY(0) scaleY(1);
    }
    100% {
      transform: rotate(90deg) translateY(50px) scaleY(2);
      opacity: 1;
    }
  }
`;

export default DotRight;
