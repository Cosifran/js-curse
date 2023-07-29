import React from 'react'
//Import styles
import styles from './DialogActionsComponent.module.css'
//Import react functions
import { useState } from 'react'
import { flushSync } from 'react-dom'
//Import mui components
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
//Import own components
import ShowMessage from '../../../../../../ShowMessage/ShowMessage'

export default function dialogActionsComponent(pageProps) {
    const { data, setData = () => { }, listRoomRef, onClose, agesCount, childrenCount } = pageProps
    const [openShowMessage, setOpenShowMessage] = useState(false)

    const handleCloseShowMessage = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenShowMessage(false);
    }

    const apply = () => {
        //Validate if are different, if it are different then return function
        if (agesCount != childrenCount) {
            setOpenShowMessage(true)
            return;
        }
        //Close dialog if all is ok        
        onClose(true)
    }

    const addRoom = () => {
        flushSync(() => {
            //Add room to array
            data.push({
                adults: 1,
                children: 0,
                childrenAges: [],
                delete: true
            })
            //Update array data
            setData([...data])
        });
        //Scroll to next room
        listRoomRef.current?.lastElementChild?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
            <Grid container direction="column" className='pb-2'>
                <Grid item xs={4}>
                    <Button
                        variant="text"
                        className={styles.buttonAddRoom}
                        startIcon={<AddIcon />}
                        onClick={(e) => addRoom()}>
                        Agregar habitación
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        size="large"
                        className={styles.buttonApply}
                        onClick={(e, reason) => apply(e, reason)}>
                        Aplicar
                    </Button>
                </Grid>
            </Grid>

            <ShowMessage
                open={openShowMessage}
                handleClose={handleCloseShowMessage}
                message="Por favor indica cuales son las edades de los niños" />
        </>
    )
}
