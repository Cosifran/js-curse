import React from 'react'
import styled from '@emotion/styled'
import Layout from '@/components/layout/Layout'

const Heading = styled.h1`
color: red;
`

const Home = () => {
    return ( 
        <Layout>
            <Heading>Inicio</Heading>
        </Layout>
     );
}
 
export default Home;