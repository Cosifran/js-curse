import React, { useState, Fragment } from 'react'
import styled from '@emotion/styled';

const Label = styled.label`
  font-family: 'Bebas Neue', cursive;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
  `;

const Select = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
  `;

const useCriptomoneda = (label, stateInicial, opciones) => {

    //state de nuestro custom hook
    const [state, actualizarState] = useState(stateInicial);
    const SelectCripto = () => (
        <Fragment>
            <Label>{label}</Label>
            <Select
                onChange={e => actualizarState(e.target.value)}
                value={state}
            >
                <option value=''>-- Selecciona --</option>
                {opciones.map(opcion => (
                    <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}>{opcion.CoinInfo.FullName}</option>
                ))}
            </Select>
        </Fragment>
    );

    //retorna la interfaz, el state, y actualizarstate
    return [state, SelectCripto, actualizarState];
}

export default useCriptomoneda;