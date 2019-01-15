import styled from "styled-components";

const ButtonTheme = styled.button`
  margin-left: 4px;
  color: ${props => props.theme.color.fontColor};
  
  background-color: transparent;
  &:active {
    background-color: transparent;
}
  border:none;
  all: unset;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export default ButtonTheme;
