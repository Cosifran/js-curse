//Import mui components
import Button from '@mui/material/Button';
//Import icons
import PersonIcon from '@mui/icons-material/Person';

export default function NotAuthenticated({ styles }) {
    return (
        <Button
            className={styles.buttonSessionStart}
            href='/login'
            startIcon={<PersonIcon />}>
            Iniciar Sesión
        </Button>
    )
}