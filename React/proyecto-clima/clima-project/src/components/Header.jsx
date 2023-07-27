import React from 'react';
import PropType from 'prop-types';

const Header = ({titulo}) => {
    return (  
        <div className='container-fluid bg-primary pb-3'>
            <h1 className='text-light text-center pt-3'>Clima react app</h1>
        </div>
    );
}

Header.propType = {
    titulo : PropType.string.isRequired
}
export default Header;