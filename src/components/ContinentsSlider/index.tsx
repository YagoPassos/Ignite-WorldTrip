import { Box, Flex, Text } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper";
import { useState } from "react";
import Link from "next/link";

interface ContinentProps {
    title: string,
    subtitle: string,
    img: string,
}

export default function Slider() {

    const continents: ContinentProps[] = [
        {
            title: 'América do Norte',
            subtitle: 'O continente mais antigo',
            img: `/images/NorthAmerica.png`,
        },
        {
            title: 'América do Sul',
            subtitle: 'O continente mais antigo',
            img: `/images/SouthAmerica.png`,
        },
        {
            title: 'Ásia',
            subtitle: 'O continente mais antigo',
            img: `/images/Asia.png`,
        },
        {
            title: 'África',
            subtitle: 'O continente mais antigo',
            img: `/images/Africa.png`,
        },
        {
            title: 'Europa',
            subtitle: 'O continente mais antigo',
            img: `/images/Europe.png`,
        },
        {
            title: 'Oceania',
            subtitle: 'O continente mais antigo',
            img: `/images/Oceania.png`,
        },
    ]
    return (
        <Flex
            w='100%'
            h='md'
            my='12'
            justifyContent='center'
        >
            <Flex
                w='100%'
                h='100%'
                maxW={1240}
                maxH={450}
                bgColor='info.dark'
                overflow='hidden'
            >
                <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="swiper"
                >
                    {continents.map(continent => (
                        <SwiperSlide className="swiper-slide">
                            <Box pos='absolute' m='auto'>
                                <Text fontWeight='bold' fontSize='5xl'>
                                    {continent.title}
                                </Text>
                                <Text fontWeight='bold' fontSize='2xl'>
                                    {continent.subtitle}
                                </Text>
                            </Box>
                            <Link href='/Europe'>
                                <Box w='100%' h='100%' bgImg={continent.img} bgRepeat='no-repeat' bgSize='cover' bgPos='center' cursor='pointer' />
                            </Link>
                        </SwiperSlide>)
                    )}
                </Swiper>
            </Flex>
        </Flex>
    )
}