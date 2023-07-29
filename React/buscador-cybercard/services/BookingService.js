//Import react functions
import axios from 'axios';
//Import constants
import { API_ROUTES } from '../utils/constants';
//Import own functions
import { storeOrderBooking, storeBookingNumber, getToken } from '../lib/common';

export const bookingService = async (data, setMessage, setOpenShowMessage, setIsLoading) => {
    const token = getToken()
    return await axios
        .request({
            method: 'post',
            maxBodyLength: Infinity,
            url: `${API_ROUTES.BOOKING}`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            data: data
        })
        .then(response => {
            if (response.data.booking_number && response.data.url_payment && response.data.order) {
                //Save booking
                storeOrderBooking(response.data.order)
                storeBookingNumber(response.data.booking_number)
                //Send user to payment page            
                window.location.replace(`http://${response.data.url_payment}`)
            } else {
                setIsLoading(false)
                setMessage('Lo sentimos en este momento no podemos hacer la reserva, por favor intente de nuevo mas tarde')
                setOpenShowMessage(true)
            }
        }).catch(() => {
            setIsLoading(false)
            setMessage('Lo sentimos en este momento no podemos hacer la reserva, por favor intente de nuevo mas tarde')
            setOpenShowMessage(true)
        })
}

export const getBookingsService = async (token, redirectOnError) => {
    return await axios
        .request({
            method: 'get',
            url: `${API_ROUTES.BOOKING}`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
        .then(response => {
            return {
                props: {
                    bookings: response.data.bookings,
                    totalBookings: response.data.total_bookings,
                    totalSaved: response.data.total_saved
                }
            }
        }).catch(() => {
            return redirectOnError()
        })
}

export const getBookingService = async (token, id, redirectOnError) => {
    return await axios
        .request({
            method: 'get',
            url: `${API_ROUTES.BOOKING}/${id}`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
        .then(response => {
            return {
                props: {
                    booking: response.data,
                }
            }
        }).catch(() => {
            return redirectOnError()
        })
}

export const cancelBookingService = async (id) => {
    const token = getToken()
    return await axios
        .request({
            method: 'delete',
            url: `${API_ROUTES.BOOKING}/${id}`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
        .then(() => {
            return true
        }).catch(() => {
            return false
        })
}
