import styled from "styled-components";

const LinkWrapper = styled.div`
  margin-top: 20px;

  &:hover > * {
    color: ${props => props.theme.color.blue};
  }
`;

export default LinkWrapper;
