import { Box, Flex, HStack, Image, Stack, Text } from "@chakra-ui/react";
import Header from "../components/Header";

interface Cidades {
    banner: string;
    cityName: string;
    country: string;
    flag: string;
}

export default function Europe() {

    const cidades: Cidades[] = [
        {
            banner: '/images/cidades/Londres/banner.svg',
            cityName: 'Londres',
            country: 'Reino Unido',
            flag: '/images/cidades/Londres/flag.svg',
        },
        {
            banner: '/images/cidades/Paris/banner.svg',
            cityName: 'Paris',
            country: 'França',
            flag: '/images/cidades/Paris/flag.svg',
        },
        {
            banner: '/images/cidades/Praga/banner.svg',
            cityName: 'Praga',
            country: 'Itália',
            flag: '/images/cidades/Roma/flag.svg',
        },
        {
            banner: '/images/cidades/Praga/banner.svg',
            cityName: 'Praga',
            country: 'República Tcheca',
            flag: '/images/cidades/Praga/flag.svg',
        },
        {
            banner: '/images/cidades/Amsterda/banner.svg',
            cityName: 'Amsterda',
            country: 'Holanda',
            flag: '/images/cidades/Amsterda/flag.svg',
        },
    ]


    return (
        <Flex
            flexDirection='column'
        >
            <Header backButton={true} />
            <Box
                w='100%'
                h={{ base: '150px', lg: '500px' }}
                maxH={500}
                bgImg={'/images/EuropeBanner.svg'}
                bgRepeat='no-repeat'
                bgSize='cover'
                pos='relative'
            >
                <Text
                    fontWeight='semibold'
                    fontSize={{ base: '3xl', lg: '5xl' }}
                    pos='absolute'
                    left='36'
                    bottom='14'
                >
                    Europa
                </Text>
            </Box>

            <Flex
                w='100%'
                maxW={1160}
                h='80'
                my={{ base: '5', lg: '20' }}
                mx='auto'
                flexDir={{ base: 'column', lg: 'row' }}
                justifyContent='center'
                alignItems='center'
            >
                <Text w='90%' color='gray.text' fontSize={{ base: 'md', lg: '2xl' }} textAlign='justify' m={{ base: '4', lg: '0' }}>
                    A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
                </Text>
                <HStack w='90%' justifyContent='center' spacing={{ base: '8', lg: '10' }} mx={{ base: '4', lg: '0' }}>
                    <Flex flexDir='column' justifyContent='center' >
                        <Text color='highlight' fontSize={{ base: '2xl', lg: '5xl' }} fontWeight='semibold' m='auto'>50</Text>
                        <Text color='gray.text' fontSize={{ base: 'lg', lg: '2xl' }} fontWeight='semibold'>Países</Text>
                    </Flex>
                    <Flex flexDir='column' justifyContent='center'>
                        <Text color='highlight' fontSize={{ base: '2xl', lg: '5xl' }} fontWeight='semibold' m='auto'>60</Text>
                        <Text color='gray.text' fontSize={{ base: 'lg', lg: '2xl' }} fontWeight='semibold'>línguas</Text>
                    </Flex>
                    <Flex flexDir='column' justifyContent='center'>
                        <Text color='highlight' fontSize={{ base: '2xl', lg: '5xl' }} fontWeight='semibold' m='auto'>27</Text>
                        <Text color='gray.text' fontSize={{ base: 'md', lg: '2xl' }} fontWeight='semibold'>cidades +100</Text>
                    </Flex>
                </HStack>
            </Flex>

            <Flex
                flexDir='column'
                w='100%'
                maxW={1160}
                mx='auto'
            >
                <Text fontWeight='medium' ml={{ base: '4', lg: '0' }} fontSize={{ base: '2xl', lg: '4xl' }} color='gray.text'> Cidades +100</Text>

                <Flex
                    flexWrap='wrap'
                    justifyContent={{ base: 'center' }}
                >
                    {cidades.map(cidade => (
                        <Flex
                            h='72'
                            w='64'
                            my='5'
                            mr='8'
                            flexDir='column'
                            borderRadius='4'
                            bgColor='white.body'
                            key={cidade.cityName}

                        >
                            <Box borderTopRadius='3' bgImg={cidade.banner} w='100%' h='62%' bgRepeat='no-repeat' bgSize='cover' />

                            <Flex alignItems='center' justifyContent='space-around' h='38%' borderLeft='1px' borderRight='1px' borderBottom='1px' borderColor='highlight.50' borderBottomRadius='4'>
                                <Flex flexDir='column' justifyContent='center'>
                                    <Text fontWeight='semibold' fontSize='xl' color='gray.text' my='4'>{cidade.cityName}</Text>
                                    <Text fontWeight='medium' fontSize='md' color='info.dark'>{cidade.country}</Text>
                                </Flex>
                                <Box w='8' h='8' bgImg={cidade.flag} bgRepeat='no-repeat' bgSize='cover' borderRadius='100%' />
                            </Flex>
                        </Flex>
                    ))}
                </Flex>

            </Flex>
        </Flex>
    )
}