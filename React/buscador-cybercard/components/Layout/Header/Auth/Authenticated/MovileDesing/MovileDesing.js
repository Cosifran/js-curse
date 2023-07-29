//Import react functions
import { useState } from 'react';
//Import mui components
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
//Import icons
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import LuggageIcon from '@mui/icons-material/Luggage';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export default function MovileDesing({ styles, user, logout }) {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{ color: '#3F3F3F' }}
            >
                <MenuIcon />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: 'block', md: 'none' },
                }}
            >
                <MenuItem key={0}>
                    <Button
                        className={styles.buttonSessionStart}
                        startIcon={<PersonIcon />}>
                        {user.username}
                    </Button>
                </MenuItem>
                <MenuItem key={1}>
                    <Button
                        className={styles.buttonSessionStart}                        
                        startIcon={<LuggageIcon />}
                        href='/my_bookings'>
                        Mis viajes
                    </Button>
                </MenuItem>
                <MenuItem key={2}>
                    <Button
                        className={styles.buttonSessionStart}                        
                        startIcon={<ExitToAppIcon />}
                        onClick={() => { logout() }}>
                        Salir
                    </Button>
                </MenuItem>
            </Menu>
        </Box>
    )
}
