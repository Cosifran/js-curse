import React from 'react'
//Import styles
import styles from './Auth.module.css';
//Import plugins functions
import { useState } from 'react';
import { useRouter } from 'next/router';
//Import mui components
import Box from '@mui/material/Box';
//Import own components
import Authenticated from './Authenticated/Authenticated'
import LoadingPage from '../../../LoadingPage/LoadingPage'
import NotAuthenticated from './NotAuthenticated/NotAuthenticated'
//Import own functions
import { removeCookies } from '../../../../lib/common';
//Import constant
import { APP_ROUTES } from '../../../../utils/constants';

export default function Auth({ auth, user }) {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    const logout = () => {
        setIsLoading(true)                        
        removeCookies(['user', 'access_token'])
    }

    return (
        <>
            <Box className='mt-1'>
                {auth && (<Authenticated styles={styles} user={user} logout={logout} />)}

                {!auth && (<NotAuthenticated styles={styles} />)}
            </Box>

            <LoadingPage isLoading={isLoading} setIsLoading={setIsLoading} duration={0} />
        </>
    )
} 
