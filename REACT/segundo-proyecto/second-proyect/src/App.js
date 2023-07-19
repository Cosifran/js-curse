import React, { useState } from "react";
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
function App() {
  //definir el state
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarpregunta, actualizarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([]);

  const agregarNuevoGasto = gasto => {
    guardarGastos([
      ...gastos, gasto
    ])
  }
  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
      </header>

      <div className="contenido-principal contenido">
        {mostrarpregunta ?
          (
            <Pregunta
              guardarPresupuesto={guardarPresupuesto}
              guardarRestante={guardarRestante}
              actualizarPregunta={actualizarPregunta}
            />
          ) :
          (
            <div className="row">
              <div className="col-6">
                <Formulario
                agregarNuevoGasto = {agregarNuevoGasto}
                />
              </div>
              <div className="col-6">
              <Listado
              gastos={gastos}
              />
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default App;
