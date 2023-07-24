import React from 'react'
import styled from '@emotion/styled';

const ContenedorFrase = styled.div`
padding: 3rem;
border-radius: .5rem;
background-color: #fff;
max-width: 800px;

@media (min-width: 992px){
    margin-top: 10rem;
}
`;

const Cita = styled.h1`
 text-align: center;
 position: relative;
 padding-left: 4rem;

 &::before{
    content: open-quote;
    font-size: 10rem;
    color: black;
    position: absolute;
    left: -1rem;
    top: -2rem;
 }
`

const Author = styled.p`
font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.6rem;
    font-weight: bold;
    text-align: right;
    color: #666;
    margin-top: 2rem;
`;

const Frase = ({frase}) => {
    const {quote, author} = frase;
    return (
        <ContenedorFrase>
            <Cita>
                {quote}
            </Cita>
            <Author> - {author}</Author>
        </ContenedorFrase>
    );
}

export default Frase;