import styled from "styled-components";

const NavItemsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  /* border: 2px solid red; */
  /* text-transform: uppercase; */
  font-family: ${props => props.theme.font.family.paragraph};
`;

export default NavItemsWrapper;
