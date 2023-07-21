import React, { useState } from 'react'
import  PropTypes  from 'prop-types';
import Error from './Error';
import shortid from 'shortid'
const Formulario = ({guardarGasto, guardarCrearGasto }) => {
    //state para guardar nombre
    const [nombre, guardarNombre] = useState('');
    //state para guardar cantidad
    const [cantidad, guardarCantidad] = useState(0);
    //state para administrar errores 
    const [error, guardarError] = useState(false);

        //funcion que hace reset al formulario
    const resetForm = () => {
        guardarNombre('');
        guardarCantidad(0);
    }
    
    //funcion que agregar el gasto al componente principal
    const agregarGasto = e => {
        e.preventDefault();

        //validar
        if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === ''){
            guardarError(true);
            return;
        }

        guardarError(false)
        //costruir el gasto
        const gasto = {
            nombre,
            cantidad,
            id : shortid.generate()
        };

       
        // pasar el gasto al componente principal
        guardarGasto(gasto);
        guardarCrearGasto(true);

        //resetear form
        resetForm();
    }

    return (
        <form
        onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos aquí</h2>

            { error ? 
            <Error 
            mensaje={'Ambos campos son obligatorios'}
            /> : null}

            <div class='mb-3'>
                <label for='nombreG' class='form-label'>Nombre de gasto</label>
                <input 
                id='nombreG'
                type='text' 
                className='w-100 form-control'
                placeholder='Ej. Transporte'
                value={nombre}
                onChange={e => guardarNombre(e.target.value)}
                />
            </div>
            <div class='mb-3'>
                <label for='cantidadG' class='form-label'>Cantidad de gasto</label>
                <input
                id='cantidadG'
                type='number' 
                className='w-100 form-control'
                placeholder='Ej. Transporte'
                value={cantidad}
                onChange={e => guardarCantidad(parseInt(e.target.value, 0))}
                />
            </div>

            <input 
            type='submit'
            className='btn btn-primary w-100'
            value='Agregar Gasto'
            />
        </form>
    );
}

Formulario.propTypes = {
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired
  }


export default Formulario;