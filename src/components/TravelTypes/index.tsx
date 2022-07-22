import { Box, Flex, Image, Text } from "@chakra-ui/react";

export default function TravelTypes() {
    return (
        <Flex
            w='100%'
            h='lg'
            justifyContent='center'
            alignItems='center'
            flexDir='column'

        >
            <Flex
                width='100%'
                justifyContent='space-between'
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
                fontSize='4xl'
                mt='14'
            >
                Vamos nessa? <br/>
                Então escolha seu continente
            </Text>

        </Flex>
    )
}