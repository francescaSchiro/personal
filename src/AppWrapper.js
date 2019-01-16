import styled from "styled-components";

const AppWrapper = styled.div`
  height: 100vh;

  background-color: ${props => props.theme.color.backgroundColor};
  color: ${props => props.theme.color.fontColor};

  /* border: 2px solid green; */

  /* scroll-snap-type: mandatory;
  scroll-snap-type: y mandatory; */

  /*hide scrollbar*/

  -ms-overflow-style: none;
  -moz-scrollbars-none: none;

  ::-moz-scrollbar {
    display: none; 
}
  ::-webkit-scrollbar {
    display: none;
  }

  /* for smooth scrolling like in iOS */
  overflow-y: scroll;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;


`;

export default AppWrapper;
