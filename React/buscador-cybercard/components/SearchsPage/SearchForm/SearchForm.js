import React from 'react'
//Import styles
import styles from './Form.module.css'
//Import react functions
import moment from 'moment'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
//Inport mui components
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
//Import icons
import CancelIcon from '@mui/icons-material/Cancel'
import SwapVertIcon from '@mui/icons-material/SwapVert'
//Import own components
import ShowMessage from '../../ShowMessage/ShowMessage'
import DateRangePickerInput from '../SearchForm/InputsComponents/DateRangePicker/DateRangePicker'
import AutocompleteInputFrom from '../SearchForm/InputsComponents/AutocompleteInputFrom/AutocompleteInputFrom'
import NavegationSearch from './NavegationSearch/NavegationSearch'
import RoomsAndGuestsInput from '../SearchForm/InputsComponents/RoomsAndGuestsInput/RoomsAndGuestsInput'
//Import constants
import { APP_ROUTES } from '../../../utils/constants'
import { SET_API_SEARCH_JSON } from '../../../utils/requestConstants'
import { storeSearchHotel, getSearchHotel } from '../../../lib/common'

const rooms = [
    {
        adults: 2,
        children: 0,
        childrenAges: [],
        delete: false
    },
]

const error = [
    { message: '', status: false },
]

SearchForm.defaultProps = {
    titleSpacing: 40,
    showCloseButton: false,
    handleEditSearchForm: () => { }
}

export default function SearchForm({ setIsLoading, readonly, titleSpacing, showCloseButton, handleEditSearchForm }) {
    //Set Router
    const router = useRouter()
    const [message, setMessage] = useState('')
    const [openShowMessage, setOpenShowMessage] = useState(false)
    //Create constant
    const [destination, setDestination] = useState('')
    const [range, setRange] = useState([
        {
            startDate: new Date(),
            endDate: moment(new Date()).add(3, 'days').toDate(),
            key: 'selection'
        }
    ])
    const [roomsAndGuests, setRoomsAndGuests] = useState(rooms)
    //Create Errros
    const [destinationError, setDestinationError] = useState(error)

    useEffect(() => {
        const search = getSearchHotel()
        if (search) {
            setDestination(search.destination_frontend ? search.destination_frontend : "")
            setRange([
                {
                    startDate: moment(search.checkin).toDate(),
                    endDate: moment(search.checkout).toDate(),
                    key: 'selection'
                }
            ])
            getRoomsAndGuest(search.rooms)
        }
    }, [])

    const handleCloseShowMessage = () => {
        setOpenShowMessage(false);
    }

    const getRoomsAndGuest = (roomsAndGuests) => {
        var roomsArray = []
        roomsAndGuests.forEach(room => {
            roomsArray.push({
                adults: room.adults,
                children: room.childrens,
                childrenAges: room.children_ages ? room.children_ages.split(',') : [],
                delete: false
            })
        })
        setRoomsAndGuests(roomsArray)
    }

    const searchHotelList = () => {
        //Validate inputs
        if (!destination) {
            setMessage('Elige una ciudad, zona u hotel')
            setOpenShowMessage(true)
            return false
        }

        if (!isValidDate()) {
            return
        }

        //Start loading animation
        setIsLoading(true)

        //Set json data
        const json = SET_API_SEARCH_JSON({
            startDate: range[0].startDate,
            endDate: range[0].endDate,
            destination: destination,
            roomsAndGuests: roomsAndGuests
        })

        //Save json data in cookie
        storeSearchHotel(json)

        //Redirect or reload page
        if (router.pathname == APP_ROUTES.SEARCH_HOTEL_LIST) {
            router.reload()
        } else {
            router.push({ pathname: APP_ROUTES.SEARCH_HOTEL_LIST })
        }
    }

    const isValidDate = () => {
        if (moment(range[0].endDate).diff(range[0].startDate, 'days') < 1) {
            setMessage('Debe seleccionar fechas diferentes')
            setOpenShowMessage(true)
            return false
        }

        return true
    }



    return (
        <>
            <div className='container-sm'>
                <div className={`card z-4 ${styles.card}`} id='formSearch'>
                    <div className={`card-body ${styles.cardBody}`}>
                        <NavegationSearch/>


                        {showCloseButton && (
                            <div className='row justify-content-end'>
                                <div className="col col-2">
                                    <IconButton onClick={() => { handleEditSearchForm() }}>
                                        <CancelIcon sx={{ color: '#ff0000' }} />
                                    </IconButton>
                                </div>
                            </div>
                        )}

                        <div className="row">
                            <div className="col col-12 col-md-12 col-lg-4 pb-3 pb-md-3 pb-lg-0 pe-0">
                                <AutocompleteInputFrom
                                    data={destination}
                                    setData={setDestination}
                                    error={destinationError}
                                    setError={setDestinationError}
                                    readonly={readonly}
                                />
                            </div>
                            <div className="col col-12 col-md-12 col-lg-4 pb-3 pb-md-3 pb-lg-0">
                                <DateRangePickerInput
                                    range={range}
                                    setRange={setRange}
                                    isValidDate={isValidDate} />
                            </div>
                            <div className="col col-12 col-md-12 col-lg-3 pb-3 pb-md-3 pb-lg-0">
                                <RoomsAndGuestsInput
                                    data={roomsAndGuests}
                                    setData={setRoomsAndGuests}
                                    readonly={readonly} />
                            </div>
                            <div className="col col-12 col-md-12 col-lg-1 pb-3 pb-md-3 pb-lg-0">
                                <Button
                                    variant="contained"
                                    size="large"
                                    className={styles.button}
                                    onClick={searchHotelList} >
                                    Buscar
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ShowMessage
                open={openShowMessage}
                handleClose={handleCloseShowMessage}
                message={message}
                vertical='top'
                severity='error' />
        </>
    )
}

