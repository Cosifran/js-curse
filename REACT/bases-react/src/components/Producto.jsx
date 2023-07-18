import React from 'react'

const Producto = ({ producto, carrito, agregarAlCarrito, productos }) => {
    const { id, nombre, precio } = producto

    //agrega producto al carrito
    
    const agregarProducto = (id) => {
        const producto = productos.filter(producto => producto.id === id)[0];
        agregarAlCarrito([
            ...carrito, producto
        ]);
    }

    //elimina producto del carrito

    const eliminarProducto = (id) => {
        const productos = carrito.filter(producto => producto.id !== id);
        agregarAlCarrito(productos)
    }
    return (
        <div>
            <h1>Desde producto {nombre}</h1>
            <p>precio: ${precio}</p>

            {productos
                ?
                (
                    <button
                        type="button" onClick={() => agregarProducto(id)}>
                        agregar al carrito
                    </button>
                )
                : (
                    <button
                        type="button" onClick={() => eliminarProducto(id)}>
                       Eliminar
                    </button>
                )
            }
        </div>
    );
}

export default Producto;