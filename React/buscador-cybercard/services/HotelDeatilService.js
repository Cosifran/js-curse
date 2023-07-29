//Import react functions
import axios from 'axios';
//Import constants
import { API_ROUTES } from '../utils/constants';

export const getHotelDeatailService = async (id, redirectOnError) => {
    return await axios
        .request({
            method: 'get',
            url: `${API_ROUTES.HOTEL_DETAIL}/${id}`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        })
        .then(response => {            
            return {
                props: {
                    hotelDetail: response.data
                }
            }
        }).catch(() => {
            return redirectOnError()
        })
}
