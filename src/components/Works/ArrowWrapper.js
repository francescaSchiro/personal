import styled from 'styled-components';

const ArrowWrapper = styled.div`
  width: 100%;
  /* padding:  0 5vw; */
  /* margin-top: 10px; */
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & > i {
    font-size: 40px;
    color: ${props => props.theme.color.red};
    cursor:pointer;


  }
    /* @media screen and (max-width: 530px) {
      
      margin-bottom: 40px;
    } */
 

  
`;

export default ArrowWrapper;
