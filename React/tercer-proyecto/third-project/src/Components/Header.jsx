import React from 'react'
import styled from '@emotion/styled'     

const ContenedorHeader = styled.header`
background-color: #26C6DA;
padding: 10px;
font-weight: bold;
color: #FFF;
`;

const TextoHeader = styled.h1`
font-size: 2rem;
margin: 0;
text-align: center;
`

const Header = ({titulo}) => {
    return ( 
       <ContenedorHeader>
         <TextoHeader>{ titulo }</TextoHeader>
       </ContenedorHeader>
     );
}
 
export default Header;