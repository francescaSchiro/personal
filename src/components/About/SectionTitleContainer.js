import styled from "styled-components";

// import { getBgGradient } from '../../utils';
/* ${props => getBgGradient(props.theme.color.yellow, props.theme.color.red)}; */

const SectionTitleContainer = styled.div`
  width: 100%;
  border: 2px solid var(--yellow);
  /* scroll-snap-align: start; */
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  /* position: relative; */
  overflow: hidden;
`;

export default SectionTitleContainer;
