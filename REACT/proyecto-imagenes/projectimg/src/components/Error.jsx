import React from 'react'
import Alert from '@mui/material/Alert'
import CloseIcon from '@mui/icons-material/Close'
import IconButton from '@mui/material/IconButton'

const Error = ({ messange, guardarError }) => {
    
    return (
        <div className="col-12">
            <Alert
            onClose={e => guardarError(false)}
                className='mt-3 mb-0' severity='error'>
                    {messange}
            </Alert>
            
        </div>
    );
}

export default Error;