import React, { Fragment, useState, useEffect } from 'react'
import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';
import Error from './components/Error';
function App() {
  //state busqueda
  const [busqueda, guardarBusqueda] = useState({
    ciudad: ''
  });
  //state consultar
  const [consultar, guardarConsulta] = useState(false);
  const { ciudad } = busqueda;
  //state resultado
  const [resultado, guardarResultado] = useState({});
  //state error
  const [error, guardarError] = useState(false);

  useEffect(() => {
    const consultarApi = async () => {
      if (consultar) {
        const apikey = 'f58cf7a1fc93f8b5db543f5c07d3b933'
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apikey}&units=metric`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        guardarResultado(resultado);
        guardarConsulta(false);

        if(resultado.cod === '404'){
          guardarError(true);
        }else{
          guardarError(false);
        }
      }
    }
    consultarApi();
    // eslint-disable-next-line
  }, [consultar]);

  let componente;
  if (error) {
    componente = <Error mensaje='No hay resultado' />
  } else {
    componente = <Clima resultado={resultado}  />
  }


  return (
    <Fragment>
      <Header
        titulo='Clima react'
      />

      <div className='container-fluid bg-info py-3'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 col-sm-12'>
              <Formulario
                busqueda={busqueda}
                guardarBusqueda={guardarBusqueda}
                guardarConsulta={guardarConsulta}
              />
            </div>
            <div className='col-md-6 col-sm-12 mt-3 mt-md-0'>
              {componente}
            </div>
          </div>
        </div>
      </div>

    </Fragment>
  );
}

export default App;
