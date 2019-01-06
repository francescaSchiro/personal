import styled from "styled-components";

const Dot = styled.div`
  
  cursor:pointer;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin: 40px;
  background-color: ${props => props.theme.color.fontColor};



  animation-name: scroll;
	animation-duration: 1.5s;
	animation-timing-function: cubic-bezier(0.650, -0.550, 0.250, 1.500);
	animation-iteration-count: infinite;
	transform-origin: 50% 20.5px;
	will-change: transform, opacity;
	opacity: 1;
}
  @keyframes scroll {
    0%,
    20% {
      transform: translateY(0) scaleY(1);
    }

    100% {
      transform: translateY(50px) scaleY(2);
      opacity: 0;
    }
  }
`;

export default Dot;
