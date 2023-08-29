import styles from "../styles/home.module.css"
import React, {useContext, useState} from "react"
import Button from "@mui/material/Button"
import {ModalContex} from "../contex/ModalContex"
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
}

const Receta = ({recipeData}) => {
  const {infoecipe, setIdRecipe, setInfoRecipe} = useContext(ModalContex)
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const showIngredients = (info) => {
    let ingredients = []
    for (let i = 1; i < 16; i++) {
      if (info[`strIngredient${i}`]) {
        ingredients.push(
          <li>
            {info[`strIngredient${i}`]}: {info[`strMeasure${i}`]}
          </li>
        )
      }
    }

    return ingredients
  }
  return (
    <div className="col-md-4 mb-3 d-flex">
      <div className="card w-100">
        <h5 className="card-header">{recipeData.strDrink}</h5>
        <img
          src={recipeData.strDrinkThumb}
          className={`card-img-top ${styles.imgsize}`}
          alt=""
        />
        <div className="card-body">
          <Button
            type="button"
            sx={{
              background: "#eb6864",
              paddingY: "14px",
              "&:hover": {
                backgroundColor: "red",
              },
            }}
            variant="contained"
            className="w-100 fw-bold"
            onClick={() => {
              setIdRecipe(recipeData.idDrink)
              handleOpen()
            }}
          >
            Ver Receta
          </Button>
        </div>
        <Modal
          open={open}
          onClose={() => {
            handleClose()
            setIdRecipe(null)
            setInfoRecipe({})
          }}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <h2 id="modal-modal-title">{infoecipe.strDrink}</h2>
            <h3 id="modal-modal-description" sx={{mt: 2}}>
              Instrucciones
            </h3>
            <p>{infoecipe.strInstructions}</p>
            <img
              src={infoecipe.strDrinkThumb}
              alt=""
              className="img-fluid my-3"
            />
            <h3>Ingredientes y cantidades</h3>
            <ul>{showIngredients(infoecipe)}</ul>
          </Box>
        </Modal>
      </div>
    </div>
  )
}

export default Receta
