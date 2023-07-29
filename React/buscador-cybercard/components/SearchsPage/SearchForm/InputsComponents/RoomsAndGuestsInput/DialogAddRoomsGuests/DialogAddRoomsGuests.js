import React from 'react'
//Import styles
import styles from './DialogAddRoomsGuests.module.css'
//Import Mui components
import Dialog from '@mui/material/Dialog'
import InputLabel from '@mui/material/InputLabel'
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
//Import react functions
import { useRef } from 'react';
//Import own components
import DialogActionsComponent from './DialogActionsComponent/DialogActionsComponent';
import DialogContentComponent from './DialogContentComponent/DialogContentComponent';

export default function DialogAddRoomsGuests(pageProps) {
    const { onClose, open, data, setData = () => { }, agesCount, childrenCount } = pageProps;
    const listRoomRef = useRef(null);

    return (
        <>
            <Dialog fullWidth={false} onClose={onClose} open={open} maxWidth={false} className={styles.dialog}>
                <DialogTitle>
                    <p className='pb-4 fs-6 fw-bold text-capitalize text-black'>
                        HABITACIONES Y HUESPEDES
                    </p>
                </DialogTitle>
                <DialogContent className={styles.dialogContend}>
                    <DialogContentComponent
                        data={data}
                        setData={setData}
                        listRoomRef={listRoomRef} />
                </DialogContent>
                <DialogActions>
                    <DialogActionsComponent
                        data={data}
                        setData={setData}
                        listRoomRef={listRoomRef}
                        onClose={onClose}
                        agesCount={agesCount}
                        childrenCount={childrenCount} />
                </DialogActions>
            </Dialog>
        </>
    )
}
