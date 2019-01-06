import styled from "styled-components";

const AppWrapper = styled.div`
  height: 100vh;

  background-color: ${props => props.theme.color.backgroundColor};
  color: ${props => props.theme.color.fontColor};

  /* border: 2px solid green; */

  scroll-snap-type: mandatory;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;

  /*hide scrollbar*/
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default AppWrapper;
