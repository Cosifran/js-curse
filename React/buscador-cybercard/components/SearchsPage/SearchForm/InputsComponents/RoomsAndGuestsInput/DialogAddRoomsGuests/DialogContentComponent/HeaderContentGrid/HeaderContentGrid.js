import React from 'react'
//Import styles
import styles from './HeaderContentGrid.module.css'
//Import mui components
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import InputLabel from '@mui/material/InputLabel'

export default function HeaderContentGrid(pageProps) {
    const { data, setData = () => { }, index, roomDelete } = pageProps;

    const deleteRoom = (index) => {
        //Delete room to array
        data.splice(index, 1)
        //Update array data
        setData([...data]);
    }

    function ShowDeleteButton(pageProps) {
        if (pageProps.show) {
            return (
                <Stack direction="row" alignItems="flex-start" justifyContent="flex-end">
                    <Button variant="text" className={styles.buttonDelete} onClick={(e) => deleteRoom(pageProps.index)}>
                        Eliminar
                    </Button>
                </Stack>
            )
        }
    }

    return (
        <>
            <Grid item xs={6}>
                <p className='pb-2 fw-bold text-black'>
                    Habitación {index + 1}
                </p>
            </Grid>
            <Grid item xs={6} className={styles.clearPadding}>
                <ShowDeleteButton show={index > 0} index={index} />
            </Grid>
        </>
    )
}
