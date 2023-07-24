import React from 'react'

const Clima = ({ resultado }) => {
    const {name, main} = resultado;
    if(!name) return null;
    return ( 
        <div className='card text-center'>
            <div className='card-body'>
                <h3 className='card-title'>
        el clima de {name} es:
                </h3>
                <p className='temperatura fw-bold'>
                    {main.temp} <span> &#x2103; </span>
                </p>

                <p> Temperatura Máxima:
                    {main.temp_max} <span> &#x2103; </span>
                </p>

                <p> Temperatura Minima:
                    {main.temp_min} <span> &#x2103; </span>
                </p>
            </div>
        </div>
     );
}
 
export default Clima;