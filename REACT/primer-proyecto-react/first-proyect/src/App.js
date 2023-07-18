import React, {Fragment, useEffect, useState} from 'react'
import Formulario from './components/Formulario'
import Cita from './components/Cita';


function App() {

  let citasIniciales = JSON.parse(localStorage.getItem('citas'))
  if(!citasIniciales){
    citasIniciales = [];
  }

  const [citas, guardarCitas] = useState(citasIniciales);

  useEffect( () => {
    let citasIniciales = JSON.parse(localStorage.getItem('citas'))
    if(citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citas))
    }else{
      localStorage.setItem('citas', JSON.stringify([]))
    }
  }, [citas]);

  //funcion que agrega una nueva cita
  const crearCita = (cita) =>{
    guardarCitas([...citas, cita])
  }

  //funcion que elimina la cita 
  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter(cita => cita.id !== id)
    guardarCitas(nuevasCitas);
  }

  //cambiar texto de citas

  const tittulo = citas.length === 0 ? 'No hay citas': 'Administra tus citas';

  return (
    <div className="App">
     <Fragment>
     <h1>Administrador de citas</h1>
      <div className='container'>
      <div className='row'>
        <div className='col-6'>
          <Formulario
          crearCita= {crearCita}
          />
        </div>
        <div className='col-6'>
          <h2>{tittulo}</h2>
         { citas.map(cita =>(
            <Cita
            key={cita.id}
            cita={cita}
            eliminarCita={eliminarCita}
            />
            ))
  }
        </div>
      </div>
      </div>
     </Fragment>
    </div>
  );
}

export default App;
