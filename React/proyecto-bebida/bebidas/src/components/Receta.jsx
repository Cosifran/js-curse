import React from "react"

const Receta = ({recipeData}) => {
  return (
    <div className="col-md-4 mb-3 d-flex">
      <div className="card w-100">
        <h2 className="card-header">{recipeData.strDrink}</h2>
        <img src={recipeData.strDrinkThumb} className="card-img-top" alt="" />
      </div>
    </div>
  )
}

export default Receta
