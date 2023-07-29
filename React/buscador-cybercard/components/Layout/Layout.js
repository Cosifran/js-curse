import React from 'react'
//Import own components
import Header from './Header/Header';
import Footer from './Footer/Footer';


export default function Layout(pageProps) {
    return (
        <>
            <div className='container'>
                <Header />

                <main>
                    {pageProps.children}
                </main>

                <Footer />
            </div>
        </>
    )
}
