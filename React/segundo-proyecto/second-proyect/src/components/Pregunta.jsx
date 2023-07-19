import React, { Fragment, useState } from 'react'
import Error from './Error';

const Pregunta = ({guardarPresupuesto, guardarRestante, actualizarPregunta}) => {
    //definir el state
    const [cantidad, guardarCantidad] = useState(0);

    //definir state de error
    const [error, guardarError] = useState(false);

    //funcion que lee el presupuesto
    const definirPresupuesto = e => {
        guardarCantidad(parseInt(e.target.value, 0))
    }

    //submit para definir el presupuesto

    const agregarPresupuesto = e => {
        e.preventDefault();
        //validar
        if (cantidad < 1 || isNaN(cantidad)) {
            guardarError(true);
            return;
        }

        //si se pasa la validacion
        guardarError(false);

        guardarRestante(cantidad);
        guardarPresupuesto(cantidad);
        actualizarPregunta(false);
    }

    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            {error ?
                <Error
                    mensaje={'El valor debe ser mayor a cero'}
                /> : null}
            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type='number'
                    className='form-control w-100'
                    placeholder='Coloca tu presupuesto'
                    onChange={definirPresupuesto}
                />

                <input
                    type="submit"
                    className='btn btn-primary w-100 my-3'
                    value='Definir presupuesto'
                />
            </form>
        </Fragment>
    );
}

export default Pregunta;