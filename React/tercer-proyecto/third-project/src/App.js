import React, { useState } from 'react';
import styled from '@emotion/styled';
import Header from './Components/Header';
import Formulario from './Components/Formulario';
import Resumen from './Components/Resumen';
import Resultado from './Components/Resultado';
import Spinner from './Components/Spinner';

const Contenedor = styled.div`
max-width: 600px;
margin: 0 auto;
`

const ContenedorFormulario = styled.div`
background-color: #fff;
padding: 3rem;
`
function App() {

  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  });

  const [cargando, guardarCargando] = useState(false);


  const { datos, cotizacion } = resumen;

  return (
    <Contenedor>
      <Header
        titulo='Cotizador de Seguros'
      />

      <ContenedorFormulario>
        <Formulario
          guardarResumen={guardarResumen}
          guardarCargando={guardarCargando}
        />

        {cargando ? <Spinner /> : null}

        <Resumen
          datos={datos}
        />

        {
          !cargando ?
            <Resultado
              cotizacion={cotizacion}
            /> :
            null
        }
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
