import React from 'react'
import Image from "next/image"
import { useEffect, useState } from "react"
import styles from "./LoadingPage.module.css"

export default function LoadingPage({ isLoading, setIsLoading, duration }) {

    useEffect(() => {
        if (duration > 0) {
            setTimeout(() => {
                setIsLoading(false)
            }, duration)
        }
    }, [])

    return (
        <>
            {isLoading && (
                <div className={`top-0 bottom-0 w-100  ${styles.loadingPage}`}>
                    <Image
                        src='/images/loading.gif'
                        width={200}
                        height={200}
                        alt="Loading"
                    />
                </div>
            )}
        </>
    )
}
