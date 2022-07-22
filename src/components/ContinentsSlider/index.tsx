import { Box, Flex, Image, Text } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper";


export default function Slider() {
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
                    <SwiperSlide className="swiper-slide">
                        <Box pos='absolute' m='auto'>
                            <Text fontWeight='bold' fontSize='5xl'>
                                América do Norte
                            </Text>
                            <Text fontWeight='bold' fontSize='2xl'>
                               O continente mais antigo. 
                            </Text>
                        </Box>
                        <Box w='100%' h='100%' bgImg="url('/images/NorthAmerica.png')" bgRepeat='no-repeat' bgSize='cover' bgPos='center' />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <Box pos='absolute' m='auto'>
                            <Text fontWeight='bold' fontSize='5xl'>
                                América do Sul <br />
                            </Text>
                            <Text fontWeight='bold' fontSize='2xl'>
                               O continente mais antigo. 
                            </Text>
                        </Box>
                        <Box w='100%' h='100%' bgImg="url('/images/SouthAmerica.png')" bgRepeat='no-repeat' bgSize='cover' bgPos='center' />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <Box pos='absolute' m='auto'>
                            <Text fontWeight='bold' fontSize='5xl'>
                                Ásia <br />
                            </Text>
                            <Text fontWeight='bold' fontSize='2xl'>
                               O continente mais antigo. 
                            </Text>
                        </Box>
                        <Box w='100%' h='100%' bgImg="url('/images/Asia.png')" bgRepeat='no-repeat' bgSize='cover' bgPos='center' />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <Box pos='absolute' m='auto'>
                            <Text fontWeight='bold' fontSize='5xl'>
                                África <br />
                            </Text>
                            <Text fontWeight='bold' fontSize='2xl'>
                               O continente mais antigo. 
                            </Text>
                        </Box>
                        <Box w='100%' h='100%' bgImg="url('/images/Africa.png')" bgRepeat='no-repeat' bgSize='cover' bgPos='center' />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <Box pos='absolute' m='auto'>
                            <Text fontWeight='bold' fontSize='5xl'>
                                Europa <br />
                            </Text>
                            <Text fontWeight='bold' fontSize='2xl'>
                               O continente mais antigo. 
                            </Text>
                        </Box>
                        <Box w='100%' h='100%' bgImg="url('/images/Europe.png')" bgRepeat='no-repeat' bgSize='cover' bgPos='center' />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <Box pos='absolute' m='auto'>
                            <Text fontWeight='bold' fontSize='5xl'>
                                Oceania <br />
                            </Text>
                            <Text fontWeight='bold' fontSize='2xl'>
                               O continente mais antigo. 
                            </Text>
                        </Box>
                        <Box w='100%' h='100%' bgImg="url('/images/Oceania.png')" bgRepeat='no-repeat' bgSize='cover' bgPos='center' />
                    </SwiperSlide>
                </Swiper>
            </Flex>
        </Flex>
    )
}