import React, { useState } from 'react';
import Error from './Error';

const Formulario = ({ busqueda, guardarBusqueda, guardarConsulta }) => {
    const [error, guardarError] = useState(false);
    const { ciudad} = busqueda;
    //funcion que coloca los elementos en el state
    const handleChange = e => {
        //actualizar el state
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    //funcion cuando se hace submit
    const handleSubmit = e => {
        e.preventDefault();

        //validar
        if (ciudad.trim() === '') {
            guardarError(true);
            return;
        }
        guardarError(false);
        guardarConsulta(true);
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            {error? <Error mensaje='Ambos campos son obligatorios'/> : null}
            <div className='col-12'>
                <div className="mb-3">
                    <label htmlFor="ciudad"
                        className="form-label text-white fw-bold"
                    >Ciudad
                    </label>
                    <input
                        type="text"
                        value={ciudad}
                        className="form-control"
                        name='ciudad'
                        id="ciudad"
                        placeholder="Elige tu ciudad"
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="col-12 ">
                <input
                    type="submit"
                    value='Buscar Clima'
                    className='btn btn-warning text-white w-100'
                />
            </div>
        </form>
    );
}

export default Formulario;