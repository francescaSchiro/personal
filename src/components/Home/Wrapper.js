import styled from "styled-components";

/*const getBgGradient = (a, b) => {
 return` background: ${a};
background: -moz-linear-gradient(top, ${a} 92%, ${b} 100%);
background: -webkit-linear-gradient(top, ${a} 92%,${b} 100%);
background: linear-gradient(to bottom, ${a} 92%,${b} 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='${a}', endColorstr='${b}',GradientType=0 );
`};
 ${props => getBgGradient(props.theme.color.backgroundColor, props.theme.color.yellow)}; */

const Wrapper = styled.div`
  /* height:100%; */
  /* height: 100vh; */

  top: 0;
  left: 0;
  z-index: -1;
  height: 100vh;
  min-height: 100%;
  width: 100%;
  /* border: 2px solid black; */
  /* scroll-snap-align: start; */

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;


  
`;

export default Wrapper;
