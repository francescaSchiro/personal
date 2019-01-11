import styled from "styled-components";

const Overlay = styled.div`
  position: absolute;
  top:0;
  left: 0;
  display: none;
  
  z-index:1;
  height: 300px;
  width: 300px;
  background-color: black;
  opacity: 0.5;
  
`;

export default Overlay;
