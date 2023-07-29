//Import styles
import styles from './Currency.module.css'
//Import plugins functions
import { useEffect, useState } from 'react';
//Import mui components
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
//Import own components
import SelectCurrencyDialog from './SelectCurrencyDialog/SelectCurrencyDialog';
//Import own functions
import { getCurrency, storeCurrency } from '../../../../lib/common';

export default function Currency({ auth }) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');

    useEffect(() => {
        const currentCurrency = getCurrency()
        if (!currentCurrency) {
            storeCurrency('COP')
        } else {
            setValue(currentCurrency)
        }
    }, [])

    const handleClickListItem = () => {
        if (!auth) {
            setOpen(true);
        }
    };

    const handleClose = (newValue) => {
        setOpen(false);

        if (newValue) {
            setValue(newValue)
            storeCurrency(newValue)
        }
    };

    return (
        <Box sx={{ maxWidth: 360 }}>
            <List component="div" role="group">
                <ListItem
                    onClick={handleClickListItem}
                >
                    <ListItemText primary={value} className={styles.listItemText} />
                </ListItem>

                <SelectCurrencyDialog
                    open={open}
                    onClose={handleClose}
                    currentValue={value}
                    styles={styles}
                />
            </List>
        </Box>
    )
} 
