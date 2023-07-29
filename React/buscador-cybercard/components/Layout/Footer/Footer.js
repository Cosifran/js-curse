//Import styles
import styles from './Footer.module.css'
//Import next components
import Image from 'next/image';
//Import mui components
import Button from '@mui/material/Button'

export default function Footer() {
    return (
        <footer className={`container-fluid mt-5 p-5 ${styles.footerMain}`}>
            <div className="row">
                <div className="col col-12 col-md-4 col-lg-4 d-none d-md-block d-lg-block">
                    <Image
                        src="/images/footer/app.png"
                        fill
                        alt="Imagen Hotel"
                        className={`position-relative img-fluid`}
                        sizes="(max-width: 768px) 100vw,
                                            (max-width: 1200px) 50vw,
                                            33vw" />
                </div>
                <div className="col col-12 col-md-6 col-lg-6">
                    <p className={`mt-2 mt-d-5 mt-lg-5 ${styles.title}`}>DESCARGA TU APP</p>
                    <p className={styles.title}>CYBERCARD</p>
                    <p className={styles.text}>Y ENTRA EN UN MUNDO LLENO DE AHORROS Y BENEFICIOS</p>

                    <div className="row d-block d-md-none d-lg-none mt-2">
                        <div className="col col-12">
                            <Image
                                src="/images/footer/app.png"
                                fill
                                alt="Imagen Hotel"
                                className={`position-relative img-fluid`}
                                sizes="(max-width: 768px) 100vw,
                                            (max-width: 1200px) 50vw,
                                            33vw" />
                        </div>
                    </div>

                    <div className="row justify-content-center align-content-center mt-3 mt-d-5 mt-lg-5">
                        <div className='col col-6 col-md-4 text-center'>
                            <Button variant="text" href='https://play.google.com/store/apps/details?id=com.co.cybercard.app'>
                                <Image
                                    src="/images/footer/google_pay.png"
                                    width={146}
                                    height={149}
                                    alt="Imagen Play Store"
                                />
                            </Button>
                        </div>
                        <div className='col col-6 col-md-4 text-center'>
                            <Button variant="text" href='https://apps.apple.com/co/app/cybercard/id1482472390'>
                                <Image
                                    src="/images/footer/app_store.png"
                                    width={146}
                                    height={149}
                                    alt="Imagen App Store"
                                />
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="col col-12 col-md-2 col-lg-2 mt-2 mt-d-5 mt-lg-5 text-center">
                    <Image
                        src="/images/footer/qr.png"
                        width={157}
                        height={157}
                        alt="Imagen Hotel"
                        className={`position-relative img-fluid mt-4 mt-d-5 mt-lg-5`}
                    />
                </div>
            </div>
        </footer>
    )
}
