import React, {useContext} from "react"
//import contex component
import {RecetasContex} from "../contex/RecetasContex"
import Receta from "./Receta"
const ListaReceta = () => {
  const {recipe} = useContext(RecetasContex)
  console.log(recipe)
  return (
    <>
      <div className="row mt-5">
        {recipe.map( recipeData => (
          <Receta 
          key={recipeData.idDrink}
          recipeData={recipeData}
          />
        ))}
      </div>
    </>
  )
}

export default ListaReceta
