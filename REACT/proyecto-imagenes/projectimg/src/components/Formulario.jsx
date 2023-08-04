import React, { useState } from 'react'
import { alpha, styled } from '@mui/material/styles'
import { TextField} from '@mui/material'
import { red } from '@mui/material/colors'
import Button from '@mui/material/Button';

import Error from './Error';

const CssTextField = styled(TextField)({
    '& .MuiInputLabel-root': {
        color: '#f4f8f4', 
      },
    '& .MuiInputBase-input': {
        color: '#e5e2e2', 
      },
    '& label.Mui-focused': {
        color: '#ffffff',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#000000',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#ffffff',
        },
        '&:hover fieldset': {
            borderColor: '#B2BAC2',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#ffffff',
        },
    },
});

const ColorButton = styled(Button) ({
    backgroundColor: '#000000',
    width: '100%',
    padding: '16px 0px',
    color: '#edf1f5',
    '&:hover': {
      backgroundColor: '#edf1f5',
      color: '#070707'
    },
  });


const Formulario = ({ guardarBusqueda }) => {
    const [ termino, guardarTermino ] = useState('')
    const [ error, guardarError ] = useState(false)

    const buscarImagenes = e => {
        e.preventDefault()
        if (termino.trim() === ''){
            guardarError(true)
            return;
        }

        //validar
        guardarError(false)

        //send term from search component main
        guardarBusqueda(termino)
    }
    return (
        <form onSubmit={ buscarImagenes }
        className='row'>
            <div className="col-8">
                <CssTextField 
                type='text'
                label="Buscar imagen ejemplo: futbol o bailes" 
                id="custom-css-outlined-input"
                onChange={e => guardarTermino(e.target.value)}
                fullWidth 
                />
            </div>
            <div className="col-4">
                <ColorButton type='submit' className='fw-bold '>Buscar</ColorButton>
            </div>
            {error ? 
        <Error
        messange='Debe rellenar el campo'
        guardarError={guardarError}
        />: null    
        }

        </form>
    );
}

export default Formulario;