import styled from "styled-components";

// import { getBgGradient } from '../../utils';
/* ${props => getBgGradient(props.theme.color.yellow, props.theme.color.red)}; */

const Wrapper = styled.div`
min-height: 100%;
  height: 100vh;
  width: 100%;
  /* border: 2px solid yellow; */
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  align-items: center;

  /* position: relative; */
  overflow: hidden;
`;

export default Wrapper;
