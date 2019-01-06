import styled from "styled-components";

import { getMobileBreakpoint } from "../../utils";

const NavItem = styled.button`
  all: unset;
  cursor: pointer;
  margin-right: 7px;
  border: 2px solid orange;
  font-size: ${props => props.theme.font.size.l};
  /* font-weight: ${props => props.theme.font.weight.bold}; */

  @media screen and (max-width: ${getMobileBreakpoint}) {
    /* regole CSS */
    font-size: ${props => props.theme.font.size.m};
  }
`;

export default NavItem;
