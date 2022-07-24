import { Box, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

export default function TravelTypes() {

    const isWideVersion = useBreakpointValue({
        base: false,
        md: true,

    })
    return (
        <Flex
            w='100%'
            h={{base: '96', xl:'lg'}}
            justifyContent='center'
            alignItems='center'
            flexDir='column'
        >
            {isWideVersion
                ?

                <Flex
                    width='100%'
                    justifyContent='space-between'
                    flexWrap='wrap'
                    flexGrow='5'
                    maxH={145}
                    maxW={1160}
                    mt='20'
                >
                    <Image src="/images/Nightlife.svg" />
                    <Image src="/images/Beach.svg" />
                    <Image src="/images/Modern.svg" />
                    <Image src="/images/Classic.svg" />
                    <Image src="/images/More.svg" />
                </Flex>
                :
                <Flex
                    width='100%'
                    justifyContent='center'
                    flexWrap='wrap'
                    maxH={145}
                    maxW={1160}
                >
                    <Flex alignItems='center' m='4'>
                        <Box borderRadius='100%' w='2' h='2' bgColor='highlight' mr='2' />
                        <Text fontWeight='medium' fontSize='lg' color='gray.text' >vida noturna</Text>
                    </Flex>
                    <Flex alignItems='center' m='4'>
                        <Box borderRadius='100%' w='2' h='2' bgColor='highlight' mr='2' />
                        <Text fontWeight='medium' fontSize='lg' color='gray.text'>praia</Text>
                    </Flex>
                    <Flex alignItems='center' m='4'>
                        <Box borderRadius='100%' w='2' h='2' bgColor='highlight' mr='2' />
                        <Text fontWeight='medium' fontSize='lg' color='gray.text' >moderno</Text>
                    </Flex>
                    <Flex alignItems='center' m='4'>
                        <Box borderRadius='100%' w='2' h='2' bgColor='highlight' mr='2' />
                        <Text fontWeight='medium' fontSize='lg' color='gray.text' >clássico</Text>
                    </Flex>
                    <Flex alignItems='center' m='4'>
                        <Box borderRadius='100%' w='2' h='2' bgColor='highlight' mr='4' />
                        <Text fontWeight='medium' fontSize='lg' color='gray.text' >e mais...</Text>
                    </Flex>
                </Flex>
            }
            <Box
                w='24'
                bgColor='gray.text'
                h='0.5'
                mt='20'
            />
            <Text
                color='gray.text'
                textAlign='center'
                fontWeight='medium'
                fontSize={{base:'xl', xl:'4xl'}}
                mt='14'
            >
                Vamos nessa? <br />
                Então escolha seu continente
            </Text>

        </Flex>
    )
}