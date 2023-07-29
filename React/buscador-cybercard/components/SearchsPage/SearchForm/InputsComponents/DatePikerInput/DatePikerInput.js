import React from 'react'
//Import styles
import stype from './DatepikerInput.module.css'
//Import react funtions
import 'moment/locale/es'
import moment from 'moment';
import { useState, useEffect } from 'react';
//Import mui component
import InputAdornment from '@mui/material/InputAdornment'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
//Import icons
import EventIcon from '@mui/icons-material/Event'

export default function DatePikerInput(pageProps) {

    const { data, setData = () => { }, startDate, label, setError = () => { }, readonly } = pageProps;
    const { message, status } = pageProps.error;
    const [open, setOpen] = useState(false);
    const [minDate, setMinDate] = useState(moment())

    useEffect(() => {
        if (label == 'Salida') {
            setMinDate(startDate)
        }
    }, [startDate])

    useEffect(() => {
        //Validate if endDate is less that startDate
        if (status && label == "Salida") {
            if (moment(data).isBefore(startDate)) {
                const date = moment(startDate).add(1, 'days')
                setData(date)
                setMinDate(date)
            }
        } else {
            setError({
                message: '',
                status: false
            })
        }
    }, [status])

    return (
        <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale="es">
            <DatePicker
                value={data}
                open={open}
                readOnly={readonly}
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}
                onError={(e) => {
                    setError({
                        message: '',
                        status: e ? true : false
                    })
                }}
                label={label}
                className={stype.datepiker}
                disablePast
                key={label}
                onChange={(newValue) => setData(newValue)}
                minDate={minDate}
                views={['year', 'month', 'day']}
                format="ddd DD MMM"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <EventIcon />
                        </InputAdornment>
                    )
                }}
                slotProps={{
                    textField: {
                        inputProps: {
                            onClick: (e) => {
                                if (!readonly) {
                                    setOpen(true)
                                }
                            }
                        },
                        helperText: message
                    },
                }}
            />
        </LocalizationProvider>
    )
}
