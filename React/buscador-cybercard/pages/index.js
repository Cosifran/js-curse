//Import styles
import styles from '../styles/Home.module.css'
//import react components
import React, { useState } from 'react'
//import next components
import Image from 'next/image'
//import owen components
import Layout from '@/components/Layout/Layout'
import SearchForm from '@/components/SearchsPage/SearchForm/SearchForm'


export default function Home() {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <Layout>
      <Image
        src="/images/Banner_main.png"
        fill
        alt="Banner Principal"
        className={styles.banner}
      />

      <SearchForm setIsLoading={setIsLoading} readonly={false} />
    </Layout>
  )
}
