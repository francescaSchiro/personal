import styled from "styled-components";
import LinkContacts from './LinkContacts';



const LinkWrapper = styled.div`
  
  margin-top: 20px;

  &:hover > * {
    color: ${props => props.theme.color.blue}
  }


`;

export default LinkWrapper;
