//Import react functions
import axios from 'axios';
//Import constants
import { API_ROUTES } from '../utils/constants'

export const getSearchHotelService = async (search, redirectOnError) => {
    return await axios
        .request({
            method: 'post',
            maxBodyLength: Infinity,
            url: API_ROUTES.SEARCHS,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            data: search
        })
        .then(response => {
            if (response.data.hotels.length == 0) { return redirectOnError() }

            if (!response.data) { return redirectOnError() }

            return {
                props: {
                    hotelList: response.data
                }
            }
        }).catch(() => {
            return redirectOnError()
        })
}
