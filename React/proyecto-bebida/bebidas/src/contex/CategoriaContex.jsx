import axios from "axios"
import React, {createContext, useState, useEffect} from "react"

export const CategoriasContex = createContext()

const CategoriaProvider = (props) => {
  const [categorias, setCategorias] = useState([])

  useEffect(() => {
    const ObtenerCategorias = async () => {
      const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
      const categorias = await axios.get(url)
      setCategorias(categorias.data.drinks)
    }

    ObtenerCategorias()
  }, [])

  return (
    <CategoriasContex.Provider value={{categorias}}>
      {props.children}
    </CategoriasContex.Provider>
  )
}

export default CategoriaProvider
