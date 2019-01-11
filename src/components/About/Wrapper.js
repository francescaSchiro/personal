import styled from "styled-components";

// import { getBgGradient } from '../../utils';
/* ${props => getBgGradient(props.theme.color.yellow, props.theme.color.red)}; */

const Wrapper = styled.div`
  /* height:100%; */
  /* min-height: 100%; */
  width: 100%;
  border: 2px solid var(--yellow);
  /* scroll-snap-align: start; */
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  align-items: center;

  /* position: relative; */
  overflow: hidden;
`;

export default Wrapper;
