import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase';

const Boton = styled.button`
background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
background-size: 300px;
color: #fff;
margin-top: 3rem;
padding: 1rem 3rem;
font-size: 2rem;
border: 2px solid black;
transition: background-size 6s ease;

:hover{
  cursor: pointer;
  background-size: 400;
}
`;

const Container = styled.div`
display: flex;
align-items: center;
padding-top: 5rem;
flex-direction: column;
`;


function App() {

const [frase, obtenerFrase] = useState({});
const [error, guardarError] = useState(false)

const consultarApi = async () => {
  const api = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
  const frase =  await api.json();
  obtenerFrase(frase[0]);
  guardarError(true);
}

useEffect( () => {
  consultarApi();
}, [])
  return (
   <Container>
    {error ? 
    <Frase
    frase={frase}
    />
    : 
    null
    }
     <Boton
     onClick={consultarApi}>
      Obtener frase
    </Boton>
   </Container>
  );
}

export default App;
