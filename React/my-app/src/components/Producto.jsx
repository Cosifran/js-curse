import React from 'react'

const Producto = ({producto, carrito, agregarAlCarrito, productos}) => {
    const {id, nombre, precio} = producto
    const agregarProducto = (id) =>{
     const producto = productos.filter(producto => producto.id === id)[0];
    agregarAlCarrito([
        ...carrito, producto
    ]);
    }
    return ( 
        <div>
        <h1>Desde producto {nombre}</h1>
        <p>precio: ${precio}</p>
        <button
        type="button" onClick={() => agregarProducto(id)}>
            agregar al carrito
        </button>
        </div>
     );
}
 
export default Producto;