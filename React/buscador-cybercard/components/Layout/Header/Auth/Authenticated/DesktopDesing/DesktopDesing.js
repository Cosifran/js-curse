//Import mui components
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
//Import icons
import PersonIcon from '@mui/icons-material/Person';
import LuggageIcon from '@mui/icons-material/Luggage';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export default function DesktopDesing({ styles, user, logout }) {
    return (
        <>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Stack
                    direction="row"
                    spacing={1}
                    divider={
                        <Divider
                            orientation="vertical"
                            variant="middle"
                            flexItem
                            sx={{ opacity: '1', border: '2px solid #C1C1C1' }} />
                    }>
                    <Button
                        className={styles.buttonSessionStart}
                        startIcon={<PersonIcon />}>
                        {user.username}
                    </Button>
                    <Button
                        className={styles.buttonSessionStart}
                        startIcon={<LuggageIcon />}
                        href='/my_bookings'>
                        Mis viajes
                    </Button>
                    <Button
                        className={styles.buttonSessionStart}
                        href='/login'
                        startIcon={<ExitToAppIcon />}
                        onClick={() => { logout() }}>
                        Salir
                    </Button>
                </Stack>
            </Box>
        </>
    )
}
