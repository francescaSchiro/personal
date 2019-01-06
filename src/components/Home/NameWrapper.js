import styled from "styled-components";

const NameWrapper = styled.div`
  width: 100%;

  margin-top: -100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 430px) {
    /* regole CSS */
    margin-top: -30px;
  }
`;

export default NameWrapper;
