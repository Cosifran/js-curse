//Import plugins components
import Image from 'next/image'
//Import mui components
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import Avatar from '@mui/material/Avatar'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import ListItemText from '@mui/material/ListItemText'
import DialogContent from '@mui/material/DialogContent'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemAvatar from '@mui/material/ListItemAvatar'
//Import constant
import { CURRENCIES } from '../../../../../utils/constants'

export default function SelectCurrencyDialog({ open, onClose, currentValue, styles }) {
    return (
        <Dialog
            sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
            maxWidth="xs"
            open={open}
            onClose={() => { onClose(null) }}
        >
            <DialogTitle className='fw-bold'>Selecciona tu moneda</DialogTitle>
            <DialogContent dividers>
                <Box sx={{ width: '100%', bgcolor: 'background.paper' }} id='listItemCurrency'>
                    <List component="nav" className={styles.listItemSelected}>
                        {CURRENCIES.map(currency => (
                            <ListItemButton
                                selected={currentValue == currency.id}
                                onClick={(event) => onClose(currency.id)}
                                key={currency.id}
                            >
                                <ListItemAvatar>
                                    <Avatar>
                                        <Image
                                            src={currency.image}
                                            alt="Logo Cybercard"
                                            fill
                                        />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={currency.name} secondary={currency.id} />
                            </ListItemButton>
                        ))}
                    </List>
                </Box>
            </DialogContent>
        </Dialog>
    )
}
