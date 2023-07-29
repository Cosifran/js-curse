//Import react functions
import axios from 'axios';
//Import constants
import { API_ROUTES } from '../utils/constants';

export const placesSearchService = async (search) => {    
    return await axios
        .request({
            method: 'get',
            url: `${API_ROUTES.PLACES_SEARCH}/${search}`,
            maxBodyLength: Infinity,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        })
        .then((response) => {
            return response.data            
        }).catch(() => {
            return []
        })
}
