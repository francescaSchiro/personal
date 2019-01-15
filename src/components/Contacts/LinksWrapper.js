import styled from "styled-components";

const LinksWrapper = styled.div`
  width: 100%;
  border: 2px solid black;
  white-space: pre-wrap;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 100px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;

  }
`;

export default LinksWrapper;
