//Import react components
import React, {Fragment} from "react"
//Import own components
import Header from "./components/Header"
import Formulario from "./components/Formulario"

function App() {
  return (
    <>
      <Header />

      <div className="container mt-5">
        <Formulario />
      </div>
    </>
  )
}

export default App
