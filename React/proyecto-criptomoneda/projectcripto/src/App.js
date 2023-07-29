//import components react
import React, { useState, useEffect } from 'react'
//import emotion
import styled from '@emotion/styled'
//import components
import imagen from './cryptomonedas.png'
import Formulario from './components/Formulario'
//import axios
import axios from "axios";

const Contenedor = styled.div`
max-width: 900px;
margin: 0 auto;
@media (min-width: 992px) {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;
}
`;

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after{
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
  }
`;
function App() {
  const [moneda, guardarMoneda] = useState('')
  const [criptomoneda, guardarCriptomoneda] = useState('')

  useEffect(() => {
    const CotizarCriptomoneda = async () => {
      //we avoid execution for the first time
      if (moneda === '') return;
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
      const resultado = await axios.get(url)

      console.log(resultado)
    }
    CotizarCriptomoneda()
  }, [moneda, criptomoneda])
  return (
    <Contenedor>
      <div>
        <Imagen
          src={imagen}
          alt='imagen cripto' />
      </div>
      <div>
        <Heading >Cotiza Criptomonedas al istante</Heading>
        <Formulario
          guardarMoneda={guardarMoneda}
          guardarCriptomoneda={guardarCriptomoneda}
        />
      </div>
    </Contenedor>
  );
}

export default App;
