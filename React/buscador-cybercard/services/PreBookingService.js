//Import react functions
import axios from 'axios';
//Import constants
import { API_ROUTES } from '../utils/constants';

export const preBookingService = async (data, redirectOnError, pathname) => {
    return await axios
        .request({
            method: 'post',
            maxBodyLength: Infinity,
            url: `${API_ROUTES.PRE_BOOKING}`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            data: data
        })
        .then(response => {
            if(!response.data.checkin)
                return redirectOnError(pathname)

            return {
                props: {
                    preBooking: response.data
                }
            }
        }).catch(() => {
            return redirectOnError(pathname)
        })
}
