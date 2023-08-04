import React from 'react'
import Imagenes from './Imagenes/Imagenes'

const ListadoImagenes = ({ imagenes }) => {
    return ( 
        <div className="row g-3 pt-4">
            {imagenes.map(imagen => (
                <Imagenes 
                key={imagen.id}
                imagenes={imagen}
                />
            )
            )}
        </div>
     );
}
 
export default ListadoImagenes;