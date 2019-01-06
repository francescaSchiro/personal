import styled from "styled-components";

const H1 = styled.p`
  margin-top: 50px;
  font-family: ${props => props.theme.font.family.paragraph};
  font-size: ${props => props.theme.font.size.xxl};
`;

export default H1;
