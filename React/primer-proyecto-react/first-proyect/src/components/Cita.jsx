import React from 'react'
import PropTypes from 'prop-types';

const Cita = ({cita, eliminarCita}) => {

    const {mascota, hora, fecha, propietario, sintomas} = cita
   
    return( 
        <div className='cita'>
            <p>Mascota: <span>{mascota}</span></p>
            <p>Dueño: <span>{propietario}</span></p>
            <p>Fecha: <span>{fecha}</span></p>
            <p>Hora: <span>{hora}</span></p>
            <p>Sintomas: <span>{sintomas}</span></p>

            <button
            className='btn button eliminar w-100 fw-bold'
            onClick={() => eliminarCita(cita.id) } >
                eliminar &times;
            </button>
        </div>
     )
}

Cita.propTypes = {
    cita : PropTypes.object.isRequired,
    eliminarCita : PropTypes.func.isRequired
}
 
export default Cita;