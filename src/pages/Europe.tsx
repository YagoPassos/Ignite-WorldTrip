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
                h={500}
                maxH={500}
                bgImg={'/images/EuropeBanner.svg'}
                bgRepeat='no-repeat'
                bgSize='cover'
                pos='relative'
            >
                <Text
                    fontWeight='semibold'
                    fontSize='5xl'
                    pos='absolute'
                    left='36'
                    bottom='14'
                >Europe</Text>
            </Box>

            <Flex
                w='100%'
                maxW={1160}
                h='80'
                my='20'
                mx='auto'
                justifyContent='center'
                alignItems='center'
            >
                <Text w='50%' color='gray.text' fontSize='2xl' textAlign='justify'>
                    A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
                </Text>
                <HStack w='50%' justifyContent='center' spacing='10'>
                    <Flex flexDir='column' justifyContent='center' >
                        <Text color='highlight' fontSize='5xl' fontWeight='semibold' m='auto'>50</Text>
                        <Text color='gray.text'>Países</Text>
                    </Flex>
                    <Flex flexDir='column' justifyContent='center'>
                        <Text color='highlight' fontSize='5xl' fontWeight='semibold' m='auto'>60</Text>
                        <Text color='gray.text'>línguas</Text>
                    </Flex>
                    <Flex flexDir='column' justifyContent='center'>
                        <Text color='highlight' fontSize='5xl' fontWeight='semibold' m='auto'>27</Text>
                        <Text color='gray.text'>cidadas +100</Text>
                    </Flex>
                </HStack>
            </Flex>

            <Flex
                flexDir='column'
                w='100%'
                maxW={1160}
                mx='auto'
            >
                <Text fontWeight='medium' fontSize='4xl' color='gray.text'> Cidades +100</Text>

                <Flex>
                    {cidades.map(cidade => (
                        <Box
                            h='72'
                            w='64'
                            border='1px'
                            borderColor='highlight.50'
                            my='5'
                            mr='12'
                            borderRadius='5'
                        >
                            <Box bgImg={cidade.banner} w='100%' h='62%' bgRepeat='no-repeat' />

                            <Flex alignItems='center' justify='space-around'>
                                <Flex flexDir='column' justifyContent='center' >
                                    <Text fontWeight='semibold' fontSize='xl' color='gray.text' my='4'>{cidade.cityName}</Text>
                                    <Text fontWeight='medium' fontSize='md' color='info.dark'>{cidade.country}</Text>
                                </Flex>
                                <Box w='8' h='8' bgImg={cidade.flag} borderRadius='100%' />
                            </Flex>
                        </Box>
                    ))}
                </Flex>

            </Flex>
        </Flex>
    )
}