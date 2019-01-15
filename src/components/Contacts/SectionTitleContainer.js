import styled from "styled-components";

// import { getBgGradient } from '../../utils';
/* ${props => getBgGradient(props.theme.color.yellow, props.theme.color.red)}; */

const SectionTitleContainer = styled.div`
  width: 100%;
  /* height:100%; */
  /* border: 2px solid yellow; */
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  /* margin-bottom: 40px; */
  z-index: 10;
  /* position: relative; */
  overflow: hidden;
`;

export default SectionTitleContainer;
