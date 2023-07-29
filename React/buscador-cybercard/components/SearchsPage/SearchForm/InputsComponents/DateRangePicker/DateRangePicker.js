import React from 'react'
//Import styles
import styles from './DateRangePicker.module.css'
//Import plugins
import 'moment/locale/es'
import moment from 'moment';
import { useState, useEffect, useRef } from 'react'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import * as locales from 'react-date-range/dist/locale';
//Import mui components
import { TextField } from '@mui/material'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment'
//import icons
import EventIcon from '@mui/icons-material/Event'

export default function DateRangePickerInput({ range, setRange, isValidDate }) {
    const [open, setOpen] = useState(false)
    const [months, setMonths] = useState(2)
    const [textButton, setTextButton] = useState('Selecciona')
    const [direction, setDirection] = useState('horizontal')

    // get the target element to toggle 
    const refOne = useRef(null)

    useEffect(() => {
        // event listeners
        document.addEventListener("keydown", hideOnEscape, true)
        document.addEventListener("click", hideOnClickOutside, true)
        //Config calendar responsive or not
        if (screen.width < 768) {
            setMonths(4)
            setDirection('vertical')
        }
    }, [])

    useEffect(() => {
        //edit z-index parent contend
        if (screen.width < 768) {
            if (open) {
                document.getElementById('formSearch').style.setProperty('z-index', '4', 'important')
            } else {
                document.getElementById('formSearch').style.setProperty('z-index', '1', 'important')
            }
        }
    }, [open])

    useEffect(() => {
        const diffDate = moment(range[0].endDate).diff(range[0].startDate, 'days')
        if (diffDate > 1) {
            setTextButton(`Seleccionar estadía de ${diffDate} noches`)
        } else {
            setTextButton(`Selecciona`)
        }
    }, [range])

    // hide dropdown on ESC press
    const hideOnEscape = (e) => {
        if (!isValidDate()) {
            return
        }

        if (e.key === "Escape") {
            setOpen(false)
        }
    }

    // Hide dropdown on outside click
    const hideOnClickOutside = (e) => {
        if (!isValidDate()) {
            return
        }

        if (refOne.current && !refOne.current.contains(e.target)) {
            setOpen(false)
        }
    }

    const validateAndSelectDate = () => {
        if (!isValidDate()) {
            return
        }

        setOpen(false)
    }

    return (
        <>
            <Stack direction="row" spacing={2}>
                <TextField
                    label='Llegada'
                    variant="outlined"
                    InputProps={{
                        readOnly: true,
                        endAdornment: (
                            <InputAdornment position="end">
                                <EventIcon />
                            </InputAdornment>
                        ),
                    }}
                    onClick={() => setOpen(open => !open)}
                    value={`${moment(range[0].startDate).format('ddd DD MMM')}`}
                />

                <TextField
                    label='Salida'
                    variant="outlined"
                    InputProps={{
                        readOnly: true,
                        endAdornment: (
                            <InputAdornment position="end">
                                <EventIcon />
                            </InputAdornment>
                        ),
                    }}
                    onClick={() => setOpen(open => !open)}
                    value={`${moment(range[0].endDate).format('ddd DD MMM')}`}
                />
            </Stack>

            <div ref={refOne}>
                {open &&
                    <>
                        <DateRange
                            locale={locales['es']}
                            onChange={item => setRange([item.selection])}
                            editableDateInputs={true}
                            moveRangeOnFirstSelection={false}
                            ranges={range}
                            months={months}
                            direction={direction}
                            className={styles.calendarElement}
                            rangeColors={['#ff0000', '#f7e7e9']}
                            minDate={new Date()}
                        />

                        <div className='z-5 position-fixed bottom-0 p-3 w-100 start-0 bg-white d-block d-md-none'>
                            <Button
                                variant="contained"
                                fullWidth
                                className={styles.btnSelectDate}
                                onClick={() => { validateAndSelectDate() }}>
                                {textButton}
                            </Button>
                        </div>
                    </>
                }
            </div>
        </>
    )
}
