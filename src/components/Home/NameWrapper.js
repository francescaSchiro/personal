import styled from "styled-components";

const NameWrapper = styled.div`
  width: 100%;

  margin-top: -80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 430px), screen and (min-height: 600px) {
    /* regole CSS */
    margin-top: -30px;
  }
`;

export default NameWrapper;
