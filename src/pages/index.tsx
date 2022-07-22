import { Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import TravelTypes from '../components/TravelTypes'


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Worldtrip </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
      flexDirection='column'
      >
        <Header />
        <Banner/>
        <TravelTypes/>
      </Flex>
    </>
  )
}

export default Home
