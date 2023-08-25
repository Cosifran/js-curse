//Import react components
import React from "react"
//Import own components
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListaReceta from "./components/ListaRecta"
import RecetasProvider from "./contex/RecetasContex"
import CategoriaProvider from "./contex/CategoriaContex"

function App() {
  return (
    <CategoriaProvider>
      <RecetasProvider>
        <Header />

        <div className="container mt-5">
          <div className="row">
          <Formulario />
          </div>
          <ListaReceta />
        </div>
      </RecetasProvider>
    </CategoriaProvider>
  )
}

export default App
