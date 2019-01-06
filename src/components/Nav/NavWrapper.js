import styled from "styled-components";

const NavWrapper = styled.div`
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  height: 100px;
  width: 100%;
  border: 2px solid greenyellow;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export default NavWrapper;
