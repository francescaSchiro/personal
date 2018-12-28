import styled from 'styled-components';


import { bricksCommon, bricksAnimation } from '../../utils';

const Brick = styled.div`
  ${bricksCommon}
  background-color: ${props=> props.bg};

  https://github.com/styled-components/styled-components/issues/397

  ${
  `@keyframes translateBricks {
    0%{
      transform: translateX( ${props=> props.par1}px);
    }
        10%{
        transform: translateX(${props=> props.par1}px);
        }
    20% {
      transform: translateX(${props=> props.par2}px);
    }
        40% {
        transform: translateX(${props=> props.par1}px);
        }

    60% {
      transform: translateX(${props=> props.par3}px);
    }
        80% {
        transform: translateX(${props=> props.par3}px);
        }
    
    90% {
      transform: translateX(${props=> props.par4}px);
    }
        100% {
      transform: translateX(${props=> props.par4}px);
    }`}
 

`;

export default Brick;

// ${bricksAnimation( props => (props.par1, props.par2, props.par3, props.par4))}