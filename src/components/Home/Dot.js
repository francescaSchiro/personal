import styled from "styled-components";

const Dot = styled.div`
  width: 20px;
  height: 20px;
  bottom: 20px;
  background-color: ${props => props.theme.color.fontColor};
`;

export default Dot;
