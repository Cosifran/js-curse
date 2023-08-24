import React, {useState} from "react"
//import mui components
import Select from "@mui/material/Select"
import Button from "@mui/material/Button"
import MenuItem from "@mui/material/MenuItem"
import TextField from "@mui/material/TextField"
import FormControl from "@mui/material/FormControl"

export default function Formulario() {
  const [age, setAge] = useState(0)

  const handleChange = (event) => {
    setAge(event.target.value)
  }

  return (
    <>
      <h1 className="text-center fs-2">
        Busca bebidas por categorias o ingrediente
      </h1>

      <FormControl fullWidth>
        <div className="row mt-5">
          <div className="col-4">
            <TextField
              className="w-100"
              id="outlined-basic"
              placeholder="Buscar por ingrediente"
              variant="outlined"
              style={{background: "white", borderRadius: "12px"}}
            />
          </div>
          <div className="col-4">
            <Select
              style={{background: "white", borderRadius: "12px"}}
              className="w-100"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              onChange={handleChange}
            >
              <MenuItem value={0}>Selecciona categoria</MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </div>
          <div className="col-4">
            <Button
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
      </FormControl>
    </>
  )
}
