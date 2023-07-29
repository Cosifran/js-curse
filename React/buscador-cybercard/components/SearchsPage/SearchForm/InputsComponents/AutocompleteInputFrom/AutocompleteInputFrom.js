import React from 'react'
import styles from './AutocompleteInputFrom.module.css'
//Import react functions
import { useEffect, useState } from 'react';
//Import icons
import HotelIcon from '@mui/icons-material/Hotel';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
//Import mui components
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
//Import services
import { placesSearchService } from '../../../../../services/PlacesSearchService';

const optionsData = [
    { label: 'Cartagena', id: 1, type: 'city' },
    { label: 'Santa Marta', id: 2, type: 'city' },
    { label: 'San Andres', id: 3, type: 'city' },
    { label: 'Decameron', id: 5, type: 'hotel' },
    { label: 'Pereira', id: 4, type: 'city' },
    { label: 'Barranquilla', id: 5, type: 'city' },
    { label: 'Estelar', id: 5, type: 'hotel' },
];

export default function AutocompleteInputFrom(pageProps) {
    const { data, setData = () => { }, setError = () => { }, readonly } = pageProps;
    const { message, status } = pageProps.error;
    const [inputValue, setInputValue] = useState('')
    const [isLoadingData, setIsLoadingData] = useState(false)
    const [options, setOptions] = useState([])

    useEffect(() => {
        let active = true;

        if (status) {
            setError({
                message: '',
                status: false
            })
        }

        if (inputValue != '') {
            if (inputValue.length > 3) {
                setOptions([])
                setIsLoadingData(true)
                placesSearchService(inputValue).then((response) => {
                    setOptions(response)
                    setIsLoadingData(false)
                })
            }
        }
    }, [data, inputValue])

    function TypeIcon(props) {
        if (props.isHotel) {
            return <HotelIcon className={styles.iconLabel} />
        } else {
            return <LocationCityIcon className={styles.iconLabel} />
        }
    }

    const generateUUID = () => {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    }

    return (
        <>
            <Autocomplete
                freeSolo
                clearOnBlur
                autoComplete
                value={data}
                options={options}
                forcePopupIcon={true}
                readOnly={readonly}
                loading={isLoadingData}
                popupIcon={<PlaceOutlinedIcon />}
                sx={{
                    "& .MuiAutocomplete-popupIndicator": { transform: "none" },
                }}
                onChange={(event, newValue) => {
                    setOptions(newValue ? [newValue, ...options] : options)
                    setData(newValue);
                }}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                getOptionLabel={(option) =>
                    typeof option === 'string' ? option : option.name
                }
                filterOptions={(x) => x}
                includeInputInList
                filterSelectedOptions
                noOptionsText="No locations"
                renderInput={(params) => (
                    <TextField
                        {...params}
                        error={status}
                        label="Desde"
                        helperText={message}
                    />
                )}
                renderOption={(props, option) => (
                    <Box component="li" key={generateUUID()} {...props}>
                        <TypeIcon isHotel={option.id_hotel == "0" ? false : true} />
                        <label className={styles.laberAutocomplate}>{option.name}</label>
                    </Box>
                )}
            />
        </>
    );
}
