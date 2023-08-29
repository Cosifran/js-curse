import React, {createContext, useEffect, useState} from "react"
import axios from "axios"

export const ModalContex = createContext()
const ModalProvider = (props) => {
  const [idRecipe, setIdRecipe] = useState(null)
  const [infoecipe, setInfoRecipe] = useState({})

  useEffect(() => {
    const getRecipe = async () => {
      if (!idRecipe) return

      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRecipe}`
      const result = await axios.get(url)

      setInfoRecipe(result.data.drinks[0])
    }
    getRecipe()
  }, [idRecipe])
  return (
    <ModalContex.Provider value={{infoecipe, setIdRecipe, setInfoRecipe}}>
      {props.children}
    </ModalContex.Provider>
  )
}

export default ModalProvider
