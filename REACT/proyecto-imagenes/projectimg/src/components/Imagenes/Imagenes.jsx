import React from 'react'
import { styled } from '@mui/material/styles'
import { Link, Button } from '@mui/material'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'

const ColorButton = styled(Button) ({
    backgroundColor: '#000000',
    width: '100%',
    padding: '10px 0px',
    color: '#edf1f5',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: '#edf1f5',
      color: '#070707',
    },
  });
const Imagenes = ({ imagenes }) => {
    const { largeImageURL, likes, previewURL, tags, views } = imagenes
    return ( 
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card hvr-grow-shadow w-100">
                <img className='imgajusting card-img-top' src={previewURL} alt={ tags } />

                <div className="card-body">
                    <p>
                    <span className="badge rounded-pill bg-secondary pt-2 pb-1">{ likes }
                    <ThumbUpAltIcon className='ms-1 mb-1'/>
                    </span>
                    </p>
                    <p>
                        { views }
                        <span className='ms-2'>
                            Vistas
                        </span>
                    </p>
                </div>

                <div className="card-footer">
                    <Link href={ largeImageURL }  target="_blank" rel="noopener">
                        <ColorButton className='hvr-radial-out shadow'>
                                Ver imagen
                        </ColorButton>
                    </Link>
                </div>
            </div>
        </div>
     );
}
 
export default Imagenes;