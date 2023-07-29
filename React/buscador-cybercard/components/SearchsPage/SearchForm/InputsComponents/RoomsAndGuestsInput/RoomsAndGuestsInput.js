import React from 'react'
//Import styles
import styles from './RoomsAndGuestsInput.module.css'
//Import react functions
import { useState, useEffect } from 'react'
//Import mui components
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
//Import own components
import DialogAddRoomsGuests from './DialogAddRoomsGuests/DialogAddRoomsGuests'

export default function DatePikersInputs(pageProps) {
    const { data, setData = () => { }, error, setError = () => { }, readonly } = pageProps;
    const [open, setOpen] = useState(false);
    const [roomsCount, setRoomsCount] = useState(1)
    const [guestsCount, setGuestsCount] = useState(2)
    const [agesCount, setAgesCount] = useState(0)
    const [childrenCount, setChildrenCount] = useState(0)

    const handleClickOpen = () => {
        if (!readonly) {            
            setOpen(true);
        }
    };

    const handleClose = () => {
        //Validate if are different, if it are different then return function
        if (agesCount != childrenCount) {
            return;
        }
        setOpen(false);
    };

    useEffect(() => {
        updateCounter();
    }, [data])

    const updateCounter = () => {
        //Get totals
        const { guestsTotal, agesTotal, childrenTotal, roomsTotal } = getTotals()
        //Update
        setAgesCount(agesTotal)
        setRoomsCount(roomsTotal)
        setGuestsCount(guestsTotal)
        setChildrenCount(childrenTotal)
    }

    const getTotals = () => {
        var guestsTotal = 0
        var agesTotal = 0
        var childrenTotal = 0
        var roomsTotal = data.length
        data.forEach(room => {
            guestsTotal += room.adults + room.children;
            agesTotal += room.childrenAges.filter(age => age > 0).length
            childrenTotal += room.children
        })
        return { guestsTotal, agesTotal, childrenTotal, roomsTotal };
    }

    return (
        <>
            <TextField
                label="Habitaciones y huéspedes"
                value={`${roomsCount} habitación, ${guestsCount} huesped`}
                InputProps={{
                    readOnly: true,
                    endAdornment: (
                        <InputAdornment className={styles.cursor} position="end">
                            <ArrowDropDownIcon sx={{ fontSize: '30px' }} onClick={() => handleClickOpen()} />
                        </InputAdornment>
                    )
                }}
                inputProps={{
                    style: { cursor: 'pointer' },
                    onClick: () => handleClickOpen()
                }}
                className='w-100'
            />

            <DialogAddRoomsGuests
                open={open}
                data={data}
                setData={setData}
                onClose={handleClose}
                agesCount={agesCount}
                childrenCount={childrenCount}
            />
        </>
    )
}
