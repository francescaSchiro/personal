import styled from 'styled-components';

const BodyWrapper = styled.div`
  width: 100%;
  /* padding:  0 5vw; */

  /* border: 2px solid lightblue; */
  white-space: pre-wrap;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  &:last-child {
    margin-bottom: 100px;
    @media screen and (max-width: 530px) {
      /* regole CSS */
      margin-bottom: 40px;
    }
  }
 

  
`;

export default BodyWrapper;
