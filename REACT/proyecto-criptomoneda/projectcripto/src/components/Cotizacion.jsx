import React from 'react'
import styled from '@emotion/styled'

const ResultadoDiv = styled.div`
color: #fff;
font-family: Arial, Helvetica, sans-serif;
margin-top: 16px;
`

const Info = styled.p`
    font-size: 18px;

    span{
        font-weight: bold;
    }
`

const Precio = styled.span`
    font-size: 30px;
`

const Cotizacion = ({ resultado }) => {
    if(Object.keys(resultado).length === 0)return null

    return ( 
        <ResultadoDiv>
            <Precio>El precio es: <span>{ resultado.PRICE }</span> </Precio>
            <Info>El precio más alto: <span>{ resultado.HIGHDAY }</span> </Info>
            <Info>El precio más bajo: <span>{ resultado.LOWDAY }</span> </Info>
            <Info>Variación ultima 24h: <span>{ resultado.CHANGEPCT24HOUR }</span> </Info>
            <Info>Ultima actualización: <span>{ resultado.LASTUPDATE }</span> </Info>
        </ResultadoDiv>
     );
}
 
export default Cotizacion;