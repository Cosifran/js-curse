import React, {createContext, useState, useEffect} from "react"
import axios from "axios"

export const RecetasContex = createContext()

const RecetasProvider = (props) => {
  const [recipe, setRecipe] = useState([])
  const [search, searchRecipe] = useState({
    name: "",
    category: "",
  })
  const [consult, setConsult] = useState(false)
  const {name, category} = search
  useEffect(() => {
    if (consult) {
      const getRecipe = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&${category}`

        const results = await axios.get(url)
        setRecipe(results.data.drinks)
      }
      getRecipe()
    }
  }, [search])
  return (
    <RecetasContex.Provider value={{recipe, searchRecipe, setConsult}}>
      {props.children}
    </RecetasContex.Provider>
  )
}

export default RecetasProvider
