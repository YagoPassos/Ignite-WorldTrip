import { Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/Banner'
import Slider from '../components/ContinentsSlider'
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
        <Slider/>
      </Flex>
    </>
  )
}

export default Home
