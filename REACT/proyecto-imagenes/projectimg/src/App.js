import * as React from 'react'
import './styles/index.scss'
import { styled } from '@mui/material/styles'
import Pagination from '@mui/material/Pagination'
import Formulario from './components/Formulario'
import ListadoImagenes from './components/ListadoImagenes'
//component Pagination edit
const CustomPagination = styled(Pagination)(({ theme }) => ({
  '& .MuiPaginationItem-root': {
    color: '#000000', // Cambia el color de los números de página
    borderColor: '#000000', // Cambia el color del borde de los números de página

    '&:hover': {
      backgroundColor: '#000', // Cambia el color de fondo del número de página en hover
      color: '#fff', // Cambia el color del texto del número de página en hover
    },
  },
  '& .Mui-selected': {
    backgroundColor: '#000', // Cambia el color de fondo del número de página seleccionado
    color: '#ffffff', // Cambia el color del texto del número de página seleccionado
  },
}));


function App() {
  const [busqueda, guardarBusqueda] = React.useState('')
  const [imagenes, guardarImagenes] = React.useState([])
  const [paginasactual, guardarPagina] = React.useState(1)
  const [totalpaginas, guardarTotalPaginas] = React.useState(1)

  React.useEffect(() => {
    const consultarApi = async () => {
      if (busqueda === '') return;

      const imagenesPorPagina = 12
      const key = '38555243-fefa41294de6795a7d431be8f'
      const URL = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}&page=${paginasactual}`

      const respuesta = await fetch(URL)
      const resultado = await respuesta.json()

      guardarImagenes(resultado.hits)

      //calculate total page

      const calcularTotalPaginas = Math.ceil(resultado.totalHits / imagenesPorPagina)

      //save total page

      guardarTotalPaginas(calcularTotalPaginas)

      //move screen up
      const container = document.querySelector('.container')
      container.scrollIntoView({ behavior: 'smooth' })
    }
    consultarApi()
  }, [busqueda, paginasactual])

  const handlePageChange = (event, page) => {
    guardarPagina(page)
  }
  return (
    <React.Fragment>
      <div className='container'>
        <div className='row'>
          <div className='col-12 bg-secondary py-5 rounded-3 rounded-top'>
            <p className='text-center fs-3 text-white fw-bold'>
              Buscador de imagenes
            </p>
            <Formulario
              guardarBusqueda={guardarBusqueda}
            />
          </div>
        </div>

        <ListadoImagenes
          imagenes={imagenes}
        />

      {(totalpaginas === 1)? null: 
       <div className='row'>
       <div className='col-12 justify-content-center d-flex my-3'>
       <CustomPagination 
       onChange={handlePageChange}
       count={totalpaginas} 
       variant="outlined" 
       shape="rounded"
       />
       </div>
      </div>
      }

      </div>
    </React.Fragment>
  );
}

export default App;
