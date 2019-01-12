import styled from "styled-components";

import { getBreakpoint } from "../../utils";

const NavItem = styled.a`
  all: unset;
  cursor: pointer;
  margin-right: 4px;
  position: relative;
  /* border: 2px solid orange; */
  font-size: ${props => props.theme.font.size.l};
  
  /* @media screen and (min-width: ${getBreakpoint(
    "tablet"
  )}) and (max-width: ${getBreakpoint("desktop")}) {
    } */

    /* PUT BACK OVER when not touch*/
    @media screen and (min-width: ${getBreakpoint("tablet")}) {
      /* regole CSS */
      font-size: ${props => props.theme.font.size.xl};
                &:hover {
                  font-weight: ${props => props.theme.font.weight.bold};
                  &:before {
                    content: "";
                    position: absolute;
                    top: 5px;
                    width: 100%;
                    height: 80%;
                    background: ${props => props.sectionColor};
                    z-index: -1;
                  }
                 }
  }
`;

export default NavItem;
