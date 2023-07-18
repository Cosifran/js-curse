import React, { Fragment, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types'

const Formulario = ({crearCita}) => {

    const [cita, setCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: '',
    });

    const [error, validaeError] = useState(false)
    //funcion que se ejecuta cada vez que se escribe en el input
    const actualizarState = (e) => {
        setCita({
            ...cita,
            [ e.target.name ] :  e.target.value
        })
    }
    //extrae los datos
    const {mascota, propietario, fecha, hora, sintomas} = cita

    //caundo el usario preciona agregar cita

    const submitCita = (e) => {
        e.preventDefault();

        console.log(mascota)

        //validacion

        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' ||
        sintomas.trim() === '' ){
            validaeError(true)
            return;
        }

        validaeError(false)
        //asignar un id 
        cita.id = uuidv4();
        console.log(cita);

        //crear una cita
        crearCita(cita)

        //resetear el formulario
        setCita({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: '',
        })
    }

    return (
        <Fragment>

            {error ? 
            <p className='text-danger bg-white py-3 rounded-4 text-center'>
                Debe llenar todos los campos para crear una nueva cita!
            </p> : null}
            <h2> Crear cita</h2>

            <form
            onSubmit={submitCita}
            >
                <label
                    className='form-label'
                    for='nombreMascota'
                >Nombre mascota</label>
                <input
                    type='text'
                    name='mascota'
                    className='w-100 form-control mb-3'
                    id='nombreMascota'
                    placeholder='Nombre mascota'
                    onChange={actualizarState}
                    value={mascota}
                />

                <label
                    className='form-label'
                    for='nombreDueño'
                >Nombre del dueño</label>
                <input
                    type='text'
                    name='propietario'
                    className='w-100 form-control mb-3'
                    id='nombreDueño'
                    placeholder='Nombre dueño de la mascota'
                    onChange={actualizarState}
                    value={propietario}
                />

                <label
                    className='form-label'
                    for='fecha'
                >Fecha</label>
                <input
                    type='date'
                    name='fecha'
                    className='w-100 form-control mb-3'
                    id='fecha'
                    onChange={actualizarState}
                    value={fecha}
                />

                <label
                    className='form-label'
                    for='time'
                >Hora</label>
                <input
                    type='time'
                    name='hora'
                    className='w-100 form-control mb-3'
                    id='hora'
                    onChange={actualizarState}
                    value={hora}
                />

                <label
                    className='form-label'
                    for='textArea'
                >Sintomas</label>
                <textarea
                    className='w-100 form-control mb-3'
                    name='sintomas'
                    id='textArea'
                    placeholder='Qué sintomas tiene tu mascota?'
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>

                <button
                type='submit'
                className='w-100 btn btn-primary fw-bold'
                >Agregar cita</button>
            </form>
        </Fragment>
    );
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}

export default Formulario;