import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomoneda';
import Error from './Error';
import axios from 'axios';

const Boton = styled.input`
margin-top: 20px;
font-weight: bold;
font-size: 20px;
padding: 10px;
background-color: #66a2fe;
border: none;
width: 100%;
border-radius: 10px;
color: #fff;
transition: background-color .3s ease;
&:hover{
background-color: #326AC0;
cursor: pointer;
}
`;

const Formulario = ({ guardarMoneda, guardarCriptomoneda }) => {

    //state de listado de criptomonedas
    const [ listacripto, guardarCriptomonedas ] = useState([]);

    //state de error
    const [ error, guardarError ] = useState(false);

    const MONEDAS = [
        { codigo: 'USD', nombre: 'Dolar de Estados Unidos' },
        { codigo: 'COP', nombre: 'Peso Colombiano' },
        { codigo: 'EUR', nombre: 'Euro' },
        { codigo: 'GBP', nombre: 'Libra Esterlina' }
    ]
    
    //utilizar useMoneda
    const [ moneda, SelectMoneda ]  = useMoneda('Elige tu moneda', '', MONEDAS);

    //utilizar useCriptomoneda
    const [ criptomoneda, SelectCripto ] = useCriptomoneda( 'Elige tu criptomoneda', '', listacripto );

    //ejecutar llamado a la API
    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

            const resultado = await axios.get( url );

            guardarCriptomonedas( resultado.data.Data );
        }
        consultarAPI();
    }, []);

    //cuando el usuario hace submit
    const cotizarMoneda = e => {
        e.preventDefault();

        //validar si ambos campos estan llenos

        if(moneda === '' || criptomoneda === ''){
            guardarError(true);
            return;
        }

        //pasar los datos al componente principal
        guardarError(false)
        guardarCriptomoneda(criptomoneda)
        guardarMoneda(moneda)

    }


    return ( 
        <form
        onSubmit={ cotizarMoneda }
        >
            {error ? 
            <Error
            mensaje='No pueden haber campos vacios'
            /> 
            : null}

            <SelectMoneda/>

            <SelectCripto/>

            <Boton
            type='submit'
            value='Calcular'
            />
        </form>
     );
}
 
export default Formulario;