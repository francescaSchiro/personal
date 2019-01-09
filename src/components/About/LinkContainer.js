import styled from "styled-components";

// import { getBgGradient } from '../../utils';
/* ${props => getBgGradient(props.theme.color.yellow, props.theme.color.red)}; */

const LinkContainer = styled.div`
  width: 100%;
  border: 2px solid var(--yellow);
  /* scroll-snap-align: start; */
  border: 2px solid lightblue;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* position: relative; */
  overflow: hidden;
`;

export default LinkContainer;
