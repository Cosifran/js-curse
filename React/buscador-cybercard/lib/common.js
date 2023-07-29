//Import plugins
import axios from 'axios'
import moment from 'moment'
import cookies from 'js-cookie'
import FuzzySet from 'fuzzyset.js'
//Import constant
import { API_ROUTES } from '../utils/constants'
import { amenities } from '../utils/amenitiesIcons'
//Import icons
import StarIcon from '@mui/icons-material/Star'
import StarHalfIcon from '@mui/icons-material/StarHalf'
import StarBorderIcon from '@mui/icons-material/StarBorder'

/* COOKIES AND LOCALSTORAGE */

export const storeToken = (token) => {
    cookies.set('access_token', token, { expires: 1 })
}

export const getToken = () => {
    return cookies.get('access_token')
}

export const storeUser = (user) => {
    cookies.set('user', JSON.stringify(user), { expires: 1 })
}

export const getUser = () => {
    return JSON.parse(cookies.get('user'))
}

export const storeSearchHotel = (search) => {
    cookies.set('search_hotel', JSON.stringify(search), { expires: 1 })
}

export const getSearchHotel = () => {
    return cookies.get('search_hotel') ? JSON.parse(cookies.get('search_hotel')) : null
}

export const storeTariffs = (tariffs) => {
    localStorage.setItem("tariffs", JSON.stringify(tariffs))
}

export const getTariffs = () => {
    return JSON.parse(localStorage.getItem('tariffs'))
}

export const storeHotelIdSelected = (id) => {
    cookies.set("hotel_id_selected", id)
}

export const getHotelIdSelected = () => {
    return cookies.get('hotel_id_selected')
}

export const storeSessionSearchCode = (sessionSearchCode) => {
    cookies.set("session_search_code", sessionSearchCode)
}

export const getSessionSearchCode = () => {
    return cookies.get('session_search_code')
}

export const storeRoomIdSeleted = (id) => {
    cookies.set("room_id_selected", id)
}

export const getRoomIdSeleted = () => {
    return cookies.get('room_id_selected')
}

export const storeHotelInfo = (data) => {
    cookies.set("hotel_info", JSON.stringify(data))
}

export const getHotelInfo = () => {
    return JSON.parse(cookies.get('hotel_info'))
}

export const storeOrderBooking = (order) => {
    cookies.set("booking_order", order)
}

export const getOrderBooking = () => {
    return cookies.get('booking_order')
}

export const storeBookingNumber = (number) => {
    cookies.set("booking_number", number)
}

export const getBookingNumber = () => {
    return cookies.get('booking_number')
}

export const storeCurrency = (currency) => {
    cookies.set("currency", currency)
}

export const getCurrency = () => {
    return cookies.get('currency')
}

/* FUNCTIONS */

export const isAuthenticatedUser = () => {
    return getToken() ? true : false
}

export const removeCookies = (cookiesName) => {
    if (Array.isArray(cookiesName)) {
        cookiesName.forEach(name => {
            cookies.remove(name)
        })
    } else {
        cookies.remove(cookiesName)
    }
}

export const removeLocalStorage = (localStorageName) => {
    if (Array.isArray(localStorageName)) {
        localStorageName.forEach(name => {
            localStorage.removeItem(name)
        })
    } else {
        localStorage.removeItem(localStorageName)
    }
}

export const isGuestUser = () => {
    if (getToken()) {
        const user = getUser()
        return user.isGuest
    } else {
        return true
    }
}

export async function getAuthenticatedUser() {
    const defaultReturnObject = { authenticated: false, user: null }
    try {
        const token = getToken()
        if (!token) {
            return defaultReturnObject
        }
        const response = await axios({
            method: 'GET',
            url: API_ROUTES.GET_USER,
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const { authenticated = false } = response.data
        return authenticated ? response.data : false
    }
    catch (err) {
        return defaultReturnObject
    }
}

export function storeRecentSearches(hotel) {
    //Get current search
    const search = getSearchHotel()
    //Get recent searches
    let recentSearches = getRecentSearches() ? getRecentSearches() : []
    //searching similar search
    const currentIndex = recentSearches.findIndex(object => object.destination.code == search.destination_frontend.code)
    //Get destination name
    const destinationName = search.destination_frontend.name.split(',')
    //create object
    const object = {
        destination_name: `${destinationName[0]}, ${destinationName[2]}`,
        startDate: search.checkin,
        endDate: search.checkout,
        checkinFormat: moment(search.checkin).format('DD [de] MMM'),
        checkoutFormat: moment(search.checkout).format('DD [de] MMM'),
        rooms: search.rooms,
        image: hotel.images,
        destination_code: search.destination_code,
        destination: search.destination_frontend,
        totalRooms: search.rooms.length,
        totalPax: search.rooms.reduce((accumulator, room) => {
            return accumulator + room.adults + room.childrens;
        }, 0)
    }
    //valid if destinations is not isset and add object
    if (currentIndex >= 0) {
        recentSearches[currentIndex] = object
    } else {
        recentSearches.push(object)
    }
    //add search
    recentSearches.push()
    //Save in local storage    
    localStorage.setItem('recentSearches', JSON.stringify(recentSearches))
}

export function getRecentSearches() {
    return JSON.parse(localStorage.getItem('recentSearches'))
}

export const SetPrice = (price) => {
    return new Intl.NumberFormat().format(price)
}

export const GetStarType = ({ star }) => {
    switch (star) {
        case 1:
            return <StarIcon sx={{ color: '#ffd337d9' }} />
        case .5:
            return <StarHalfIcon sx={{ color: '#ffd337d9' }} />
        case 0:
            return <StarBorderIcon sx={{ color: '#ffd337d9' }} />
    }
}

export const setRoomsHotelInfoPage = (rooms, tariffs, images) => {
    rooms = rooms ? rooms : []
    var roomsByTariffs = []
    var imagesHotel = images.filter(image => image.category == 'Habitación')
    tariffs.forEach(tariff => {
        //Get rooms of the tariff
        const roomsTariff = tariff.rooms
        //unset rooms of tarriff object
        delete tariff.rooms
        //search room detail
        roomsTariff.forEach(roomTariff => {
            //Get room detail
            var roomDetail = rooms.find(roomObject => roomObject.code == roomTariff.room_category)
            if (roomDetail) {
                if (!roomDetail.imagen) {
                    roomDetail.imagen = imagesHotel.length ? imagesHotel[Math.floor(Math.random() * imagesHotel.length)].thumbnail_big : imagesHotel[Math.floor(Math.random() * imagesHotel.length)].thumbnail_big
                }
            } else {
                roomDetail = {
                    imagen: imagesHotel.length ? imagesHotel[Math.floor(Math.random() * imagesHotel.length)].thumbnail_big : images[Math.floor(Math.random() * images.length)].thumbnail_big,
                    desciption: roomTariff.room_description
                }
            }
            //Add room detail to room tariff
            roomTariff.room_detail = roomDetail
            //add tariff to room
            roomTariff.tariff = tariff
            //Add room tariff to array
            roomsByTariffs.push(roomTariff)
        })
    })
    return roomsByTariffs
}

export const YEARS = () => {
    const years = []
    var dateStart = 1930
    const dateEnd = moment().year() + 1
    const diffYears = dateEnd - dateStart
    for (var i = 1; i <= diffYears; i++) {
        years.push(dateStart)
        dateStart += 1
    }
    return years.sort((a, b) => b - a)
}

export const calculateAge = (day, month, year) => {
    const date = moment(`${month}/${day}/${year}`)
    const currentDate = moment(new Date())
    return currentDate.diff(date, 'year')
}

export const getSimilarFacilitie = (facilitie) => {
    const fuzzySet = FuzzySet(amenities.map(amenitie => amenitie.name))
    var bestMatch = ""
    const results = fuzzySet.get(facilitie.name, null, 0.7)
    if (results && results.length > 0) {
        bestMatch = results[0][1]
    }
    return bestMatch;
}
