import React, {useState} from 'react'
import Header from "./components/Header";
import Flooter from "./components/Flooter";
import Producto from './components/Producto';
import Carrito from './components/Carrito';
function App() {
  const [productos, setProductos] = useState([
    {"id":1,"nombre":"Laptop","precio":200},
    {"id":2,"nombre":"Mouse","precio":50},
    {"id":3,"nombre":"Teclado","precio":75},
    {"id":4,"nombre":"Monitor","precio":89.99},
  ]);

  const [carrito, addProducto] = useState([]);

  return (
    <div className="App">
      < Header
      title = "Welcome to our website"
      />
      <h1>Lista de producto</h1>
      {
        productos.map(producto => (
          <Producto
          key= {producto.id}
          producto= {producto}
          carrito= {carrito}
          agregarAlCarrito={addProducto}
          productos= {productos}
          />
        ))
      }
      <Carrito
      carrito={carrito}
      />
      < Flooter />
    </div>
  );
}

export default App;
