import React, { Fragment, useState, useEffect } from 'react'
import Formulario from './components/Formulario'
import axios from 'axios'

function App() {
  const [ searchletter, saveSearchLetter] = useState({})

  useEffect(() => {
    if(Object.keys(searchletter).length === 0) return;

    const consultApiLetter = async () => {
      const { artista, song } = searchletter
       const url = `https://api.lyrics.ovh/v1/${artista}/${song}`

       try {
        const response = await fetch(url);
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    consultApiLetter()
  },[searchletter])

  return (
    <Fragment>
      <Formulario
      saveSearchLetter={ saveSearchLetter }
      />
    </Fragment>
  );
}

export default App;
