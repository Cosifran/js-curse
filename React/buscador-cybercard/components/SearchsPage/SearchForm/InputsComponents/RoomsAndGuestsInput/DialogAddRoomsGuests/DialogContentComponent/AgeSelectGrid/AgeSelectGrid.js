import React from 'react'
//Import styles
import styles from './AgeSelectGrid.module.css'
//Import mui components
import Grid from '@mui/material/Grid'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl';

const childrenAges = ['Menos a 1', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];

export default function AgeSelectGrid(pageProps) {
    const { data, setData = () => { }, childIndex, room, index } = pageProps

    const selectChildAge = (value, childIndex, roomIndex) => {
        //Update value of childrenAges in the position index
        data[roomIndex].childrenAges[childIndex] = value;
        //Update array data
        setData([...data]);
    }

    return (
        <>
            <Grid item xs={6}>
                <FormControl variant="filled" className='m-0 w-100 pt-2 rounded-4'>
                    <InputLabel id="demo-simple-select-filled-label" className='pt-2 fw-bold'>Niño {childIndex + 1}</InputLabel>
                    <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        autoWidth
                        className='rounded-4'
                        value={room.childrenAges[childIndex]}
                        onChange={(e) => selectChildAge(e.target.value, childIndex, index)}
                    >
                        <MenuItem disabled value="0">
                            <em>Selecciona edad</em>
                        </MenuItem>
                        {childrenAges.map(age => (
                            <MenuItem key={age} value={age}>{age}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
        </>
    )
}
