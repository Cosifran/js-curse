//Import plugins functions
import moment from 'moment';
//Import own functions
import { getSessionSearchCode, getHotelIdSelected, getRoomIdSeleted, calculateAge, getCurrency } from '../lib/common';
//Import constants
import { CURRENCIES } from './constants';

export const API_SEARCH_JSON = {
    reference: "",
    canal: "1",
    checkin: "",
    checkout: "",
    rooms: [],
    origin_code: "0",
    destination_code: [],
    client_nationality: null,
    currency: "",
    language: "es",
    Hotel_codes: [],
    destination_frontend: {},
    search_hotel: null
}

export const API_BOOK_HOTEL = {
    sessionCode: "",
    hotelCode: "",
    productCode: "",
    Referencia: "2323332",
    Canal: null,
    customer: {},
    Guests: [],
    Observaciones: "",
    in_simular: 0
}

export const SET_API_SEARCH_JSON = (data) => {
    //Get currency
    const currency = getCurrency()
    if (currency) {
        const currencyObject = CURRENCIES.find(obj => obj.id == currency)
        if (currencyObject) {
            API_SEARCH_JSON.currency = currencyObject.coin_search
            API_SEARCH_JSON.should_coin_convert = currencyObject.should_coin_convert
            API_SEARCH_JSON.coin_convert_to = currencyObject.coin_convert_to
        } else {
            API_SEARCH_JSON.currency = currency
        }
    } else {
        API_SEARCH_JSON.currency = 'COP'
    }
    //Add destination
    API_SEARCH_JSON.destination_code = []
    API_SEARCH_JSON.destination_frontend = data.destination
    const country = data.destination.name.replaceAll(' ', '').split(',')
    const countryDestination = (data.destination.id_hotel == "0" && country.length > 1) ? country[2].toUpperCase().slice(0, 3) : ""
    API_SEARCH_JSON.destination_code.push({
        source_code: "DO",
        city_destination: data.destination.code.replaceAll(" ", ""),
        country_destination: countryDestination,
        id_city: parseInt(data.destination.id),
        in_zone: 0,
        in_package: 0
    })
    if (data.destination.id_hotel !== "0") {
        //Add search hotel
        API_SEARCH_JSON.search_hotel = {
            "source": "DO",
            "id_hotel": data.destination.id_hotel
        }
    }
    //Add dates
    API_SEARCH_JSON.checkin = moment(data.startDate).format('YYYY-MM-DD')
    API_SEARCH_JSON.checkout = moment(data.endDate).format('YYYY-MM-DD')
    //Add rooms       
    API_SEARCH_JSON.rooms = []
    if (data.roomsAndGuests) {
        data.roomsAndGuests.forEach((room, index) => {
            API_SEARCH_JSON.rooms.push({
                adults: room.adults,
                adults_ages: Array(room.adults).fill('18').join(','),
                childrens: room.children,
                children_ages: room.childrenAges.length ? room.childrenAges.join(',') : "",
                qty: index + 1
            })
        });
    } else {
        API_SEARCH_JSON.rooms = [...data.rooms]
    }
    return API_SEARCH_JSON
}

export const SET_API_BOOK_HOTEL = (guests) => {
    //init set
    API_BOOK_HOTEL.sessionCode = getSessionSearchCode()
    API_BOOK_HOTEL.hotelCode = getHotelIdSelected()
    API_BOOK_HOTEL.productCode = getRoomIdSeleted()
    API_BOOK_HOTEL.Referencia = Math.floor(Math.random() * 100000)
    API_BOOK_HOTEL.Guests = []
    guests.forEach(guest => {
        //get age
        const age = calculateAge(guest.birthDate_day, guest.birthDate_month, guest.birthDate_year)
        //Set guest
        const newGuest = {
            "Age": age.toString(),
            "Room": guest.room_number.toString(),
            "AgeQualifyingCode": guest.type == 'adult' ? "AD" : "NI",
            "VIP": true,
            "PrimaryIndicator": true,
            "customer": {
                "Id": 0,
                "PersonNameId": 0,
                "Age": age.toString(),
                "GenderId": parseInt(guest.gender),
                "MaritalStatusId": 0,
                "ChildQuantity": 0,
                "BirthDate": `${guest.birthDate_day}/${guest.birthDate_month}/${guest.birthDate_year}`,
                "PersonName": {
                    "Id": 0,
                    "NameTitleId": 0,
                    "GivenName": guest.first_name,
                    "MiddleName": guest.second_name,
                    "Surname": `${guest.first_surname} ${guest.second_surname}`,
                    "NamePrefix": "",
                    "NameTitle": {
                        "Id": 0,
                        "Title": ""
                    }
                },
                "CVV": "",
                "ExpDate": "",
                "Number": "",
                "Type": "",
                "Document": [
                    {
                        "Id": guest.identification_type.toString(),
                        "DocID": guest.identification_number,
                        "ContactName": null
                    }
                ]
            }
        }
        //Add guest
        API_BOOK_HOTEL.Guests.push(newGuest)
        if (guest.holder) {
            API_BOOK_HOTEL.customer = newGuest.customer
        }
    })
    //return json
    return API_BOOK_HOTEL
}
