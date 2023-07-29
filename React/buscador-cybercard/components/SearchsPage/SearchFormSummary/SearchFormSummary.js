//Import styles
import styles from './SearchFormSummary.module.css'
//Import mui components
import IconButton from '@mui/material/IconButton'
//Import plugins functions
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
//Import icons
import EditIcon from '@mui/icons-material/Edit'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
//Import own functions
import { getSearchHotel } from '../../../lib/common';
import moment from 'moment'

export default function SearchFormSummary({ setIsLoading, handleEditSearchForm }) {
    const router = useRouter()
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')

    useEffect(() => {
        const searchHotel = getSearchHotel()
        if(searchHotel) {
            const totalPax = searchHotel.rooms.reduce((sum, room) => {
                return sum += room.adults + room.childrens
            }, 0)
            const totalRooms = searchHotel.rooms.length        
            const dateInFormat = moment(searchHotel.checkin).format('DD MMM').replace('.','')
            const dateOutFormat = moment(searchHotel.checkout).format('DD MMM').replace('.','')           
            const destination = searchHotel.destination_frontend.name.split(',')
            setTitle(`${destination[0]}, ${destination[2]}`)            
            setText(`${dateInFormat} - ${dateOutFormat} | ${totalPax} Huèsp., ${totalRooms} Hab.`)
        }
    
    })

    const routerBack = () => {
        setIsLoading(true)
        router.back()
    }

    return (
        <div className="d-flex flex-wrap">
            <div className="col col-12 col-md-12">
                <div className="card border-0 shadow-sm bg-white py-2">
                    <div className="d-flex flex-wrap">
                        <div className="col col-1 col-md-1 pt-1">
                            <IconButton onClick={() => { routerBack() }}>
                                <KeyboardArrowLeftIcon sx={{ color: '#706F6F' }} />
                            </IconButton>
                        </div>
                        <div className="col col-9 col-md-9">
                            <p className={styles.title}>{title}</p>
                            <p className={styles.text}>{text}</p>
                        </div>
                        <div className="col col-2 col-md-2 pt-1">
                            <IconButton onClick={() => { handleEditSearchForm() }}>
                                <EditIcon />
                            </IconButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}