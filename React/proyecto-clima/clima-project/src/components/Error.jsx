import React from 'react'

const Error = ( { mensaje } ) => {
    return ( 
        <p className='error bg-danger'>{ mensaje }</p>
    );
}
 
export default Error;