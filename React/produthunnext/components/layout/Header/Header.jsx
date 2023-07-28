//import components react
import React from 'react'
//import components next 
import Link from 'next/link'
//import components
import Buscar from './ui/Buscar'
import Navegacion from '../Navegacion/Navegacion'

const Header = () => {
    return ( 
        <header>
            <div>
                <div>
                    <p>P</p>

                    <Buscar/>

                    <Navegacion/>
                </div>

                <div>
                    <p>Hola: Juan</p>

                    <button type='button'>Cerrar Sesión</button>
                    <Link href='/'>Login</Link>
                    <Link href='/'>Crear Cuenta</Link>
                </div>
            </div>
        </header>
     );
}
 
export default Header;