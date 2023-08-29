//Import react components
import React from "react"
//Import own components
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ModalProvider from "./contex/ModalContex"
import ListaReceta from "./components/ListaRecta"
import RecetasProvider from "./contex/RecetasContex"
import CategoriaProvider from "./contex/CategoriaContex"

function App() {
  return (
    <CategoriaProvider>
      <RecetasProvider>
        <ModalProvider>
          <Header />

          <div className="container mt-5">
            <div className="row">
              <Formulario />
            </div>
            <ListaReceta />
          </div>
        </ModalProvider>
      </RecetasProvider>
    </CategoriaProvider>
  )
}

export default App
