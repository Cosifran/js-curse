//Import styles
import styles from './Header.module.css';
//Import react functions
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
//Import next components
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
//Import mui components
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
//Import own components
import Auth from './Auth/Auth';
import Currency from './Currency/Currency';
//Import own functions
import { getToken, getUser, storeCurrency } from '../../../lib/common';
//Import constant
import { APP_ROUTES } from '../../../utils/constants';
//Import services
import { validateTokenService } from '../../../services/AuthService';

export default function Header() {
    const router = useRouter()
    const [auth, setAuth] = useState(false);
    const [user, setUser] = useState();

    useEffect(() => {
        if (getToken()) {
            setAuth(true)
            setUser(getUser())
        }
    }, [])

    useEffect(() => {
        validateToken()
    }, [router])

    const validateToken = async () => {
        const token = router.query.token
        const currency = router.query.currency
        if (token && router.pathname == '/') {
            //Save currency
            if (currency) {
                storeCurrency(currency)
            }
            await validateTokenService(token)
            router.replace('/')
            setAuth(true)
            setUser(getUser())
        }
    }

    return (
        <header>
            <Head>
                <title>Cybercard</title>
                <link rel="icon" href="/favicon.png" />
            </Head>

            <AppBar className={styles.appBar} position="static" >
                <Container maxWidth="xl">
                    <Toolbar className='pt-2 d-flex flex-row'>
                        <Link href='/' className='flex-grow-1'>
                            <Image
                                src="/images/logo.png"
                                alt="Logo Cybercard"
                                width={87}
                                height={53}
                                className='p-1 pe-md-3'
                            />
                        </Link>

                        <Currency auth={auth} />

                        <Auth auth={auth} user={user} />
                    </Toolbar>
                </Container>
            </AppBar>
        </header>
    )
}
