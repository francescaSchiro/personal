import styled from "styled-components";

const ButtonTheme = styled.button`
  margin-left: 4px;
  all: unset;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  & > * {
    margin-left: 10px;
  }

  &:disabled {
    opacity: 0.2;
    cursor: default;
  }
`;

export default ButtonTheme;
