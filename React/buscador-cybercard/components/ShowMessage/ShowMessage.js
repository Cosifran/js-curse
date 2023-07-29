//Import mui component
import Alert from "@mui/material/Alert"
import Snackbar from '@mui/material/Snackbar';

ShowMessage.defaultProps = {
    vertical: 'bottom',
    horizontal: 'center',
    severity: 'info',
}

export default function ShowMessage(pageProps) {
    const { open, handleClose, vertical, horizontal, message, severity } = pageProps

    return (
        <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            onClose={handleClose}
            key={vertical + horizontal + message}
            autoHideDuration={6000}
        >
            <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    )
}
