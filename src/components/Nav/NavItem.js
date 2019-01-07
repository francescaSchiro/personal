import styled from "styled-components";

import { getMobileBreakpoint } from "../../utils";

const NavItem = styled.div`
  all: unset;
  cursor: pointer;
  margin-right: 7px;
  position:relative;
  /* border: 2px solid orange; */
  font-size: ${props => props.theme.font.size.l};
  /* font-weight: ${props => props.theme.font.weight.bold}; */
  &:hover {
    &:before{
      content:'';
      position:absolute;
      top:5px;
      width: 100%;
      height: 80%;
      background: ${props => props.sectionColor};
      z-index:-1;
    }
  }


  @media screen and (max-width: ${getMobileBreakpoint}) {
    /* regole CSS */
    font-size: ${props => props.theme.font.size.m};
  }
`;

export default NavItem;
