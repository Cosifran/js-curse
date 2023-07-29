const API_URL = 'https://backend.cybercard.com.co/api'
//http://127.0.0.1:8000/api
//https://backend.cybercard.com.co/api 

export const API_ROUTES = {
    SIGN_UP: '/auth/sign_up',  //Falta implementar en el backend   
    SIGN_IN: `${API_URL}/auth/sign_in`,
    SIGN_OUT: `${API_URL}/auth/sign_out`,
    GET_USER: `${API_URL}/auth/me`, //Falta implementar en el backend
    VALIDATE_TOKEN: `${API_URL}/auth/validate_token`,
    PLACES_SEARCH: `${API_URL}/places_search`,
    SEARCHS: `${API_URL}/searchs`,
    HOTEL_DETAIL: `${API_URL}/hotel_details`,
    PRE_BOOKING: `${API_URL}/prebooking`,
    BOOKING: `${API_URL}/booking`,
}

export const APP_ROUTES = {
    HOME: '/',
    SIGN_IN: '/login',
    SEARCH_HOTEL_LIST: '/searchs/hotel-list',
    SEARCH_HOTEL_DETAIL: '/searchs/hotel-detail/',
    SEARCH_BOOKING: '/searchs/booking',
    MY_BOOKINGS: '/my_bookings',
    SHOW_BOOKING: 'my_bookings/booking/'
}

export const URL_GOOGLE_MAPS = 'https://www.google.com/maps/embed/v1/place?key='
export const KEY_GOOGLE_MAPS = 'AIzaSyDywUFYN4Jc3b1a1n6qTx6mWI8MAJmZHuQ'

export const DOCUMENT_TYPES = [
    {
        "id": 4,
        "name": "Cedula"
    },
    {
        "id": 5,
        "name": "Pasaporte"
    },
    {
        "id": 6,
        "name": "Resgistro Civil"
    },
    {
        "id": 7286,
        "name": "Tarjeta Identidad"
    },
    {
        "id": 7304,
        "name": "NIT"
    }
]

export const GENDERS = [
    {
        "id": 48,
        "name": "Masculino"
    },
    {
        "id": 49,
        "name": "Femenino"
    }
]

export const CURRENCIES = [
    {
        "id": "COP",
        "name": "Peso Colombiano",
        "image": "/images/countries/COL.png",
        "should_coin_convert": false,
        "coin_convert_to": "",
        "coin_search": "COP"
    },
    {
        "id": "USD",
        "name": "Dólar Americano",
        "image": "/images/countries/USD.png",
        "should_coin_convert": true,
        "coin_convert_to": "USD",
        "coin_search": "COP"
    }
]

/* {
       "id": "USD",
       "name": "Dólar Americano",
       "image": "/images/countries/USD.png",
       "should_coin_convert": false,
       "coin_convert_to": ""
   }, 
    {
        "id": "PEN",
        "name": "Sol Peruano",
        "image": "/images/countries/PEN.jpg",
        "should_coin_convert": true,
        "coin_convert_to": "PEN",
        "coin_search": "COP"
    }   
*/
