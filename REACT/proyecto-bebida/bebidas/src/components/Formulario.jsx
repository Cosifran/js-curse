import React, {useState, useContext} from "react"
//import mui components
import Select from "@mui/material/Select"
import Button from "@mui/material/Button"
import MenuItem from "@mui/material/MenuItem"
import TextField from "@mui/material/TextField"
//import contex component
import {CategoriasContex} from "../contex/CategoriaContex"
import {RecetasContex} from "../contex/RecetasContex"

export default function Formulario() {
  const {categorias} = useContext(CategoriasContex)
  const {searchRecipe, setConsult} = useContext(RecetasContex)
  const [search, setSearch] = useState({
    name: "",
    category: 0,
  })

  const handleChange = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <h1 className="text-center fs-2">
        Busca bebidas por categorias o ingrediente
      </h1>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          searchRecipe(search)
          setConsult(true)
        }}
      >
        <div className="row mt-5">
          <div className="col-12 col-md-4">
            <TextField
              name="name"
              className="w-100"
              id="outlined-basic"
              placeholder="Buscar por ingrediente"
              variant="outlined"
              style={{background: "white", borderRadius: "12px"}}
              value={search.name}
              onChange={handleChange}
            />
          </div>
          <div className="col-12 col-md-4">
            <Select
              name="category"
              style={{background: "white", borderRadius: "12px"}}
              className="w-100"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={search.category}
              onChange={handleChange}
            >
              <MenuItem value={0}>Selecciona categoria</MenuItem>
              {categorias.map((categoria) => (
                <MenuItem
                  key={categoria.strCategory}
                  value={categoria.strCategory}
                >
                  {categoria.strCategory}
                </MenuItem>
              ))}
            </Select>
          </div>
          <div className="col col-md-4">
            <Button
              type="submit"
              sx={{
                background: "#eb6864",
                paddingY: "14px",
                "&:hover": {
                  backgroundColor: "red",
                },
              }}
              variant="contained"
              className="w-100"
            >
              Buscar Bebidas
            </Button>
          </div>
        </div>
      </form>
    </>
  )
}
