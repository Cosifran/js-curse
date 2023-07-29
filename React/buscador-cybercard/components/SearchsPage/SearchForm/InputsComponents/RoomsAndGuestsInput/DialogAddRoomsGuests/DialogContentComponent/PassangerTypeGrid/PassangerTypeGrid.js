import React from 'react'
//Import styles
import styles from './PassangerTypeGrid.module.css'
//Import mui components
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'
import InputLabel from '@mui/material/InputLabel'

export default function PassangerTypeGrid(pageProps) {
    const { data, setData = () => { }, title, room, index, passangerType } = pageProps

    const updatePassenger = (room, index, operationType, passangerType) => {
        //Return if passanger value is 0
        if (operationType == 'less' && room[passangerType] == 1 && passangerType == 'adults') {
            return;
        }
        //Doing operation
        operationType == 'plus' ? room[passangerType]++ : room[passangerType]--;
        //Update data room
        data[index] = room;
        //Add or remove value to childranAges array if passangerType is children
        if (passangerType == 'children') {
            operationType == 'plus' ? room.childrenAges.push(0) : room.childrenAges.pop();
        }
        //Set new data
        setData([...data]);
    }

    return (
        <>
            <Grid item xs={4}>
                <InputLabel className='fw-bold'>{title}</InputLabel>
            </Grid>
            <Grid item xs={8}>
                <Stack spacing={2} direction="row" alignItems="center" justifyContent="flex-end">
                    <Button
                        variant="outlined"
                        size="small"
                        className={`${styles.buttonBasePlusOrLess} ${styles.buttonLess}`}
                        onClick={(e) => updatePassenger(room, index, 'less', passangerType)}>
                        -
                    </Button>
                    <InputLabel className='fw-bold'>
                        {room[passangerType]}
                    </InputLabel>
                    <Button
                        variant="outlined"
                        size="small"
                        className={`${styles.buttonBasePlusOrLess} ${styles.buttonPlus}`}
                        onClick={(e) => updatePassenger(room, index, 'plus', passangerType)}>
                        +
                    </Button>
                </Stack>
            </Grid>
        </>
    )
}
