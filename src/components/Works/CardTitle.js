import styled from "styled-components";

const CardTitle = styled.div`
  position:absolute;
  display:none;
  bottom: 40%;
  z-index: 2;
  text-align: center;
  
  border: 3px solid ${props=> props.theme.color.red};

  font-family: ${props => props.theme.font.family.titles};
  font-size: ${props => props.theme.font.size.xxl};
  color: white;
  padding: 20px;
  background-color: rgba(0,0,0, 0.4);
  text-shadow: 2px 2px 8px black;

  

  &:hover {
    background-color: rgba(0,0,0, 0.7);
  }

  @media only screen and (max-width: 768px){
    display: flex;
    align-items: center;
    justify-content: center;
    cursor:pointer;
    background-color: rgba(0,0,0, 0.6);


    z-index: 2;
  }
  
`; 

export default CardTitle;
