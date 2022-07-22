import { Box, Flex, Image, Text } from "@chakra-ui/react";

export default function Banner() {
    return (
        <Flex
            as='header'
            w='100%'
            h='96'
        >
            <Flex
                width='100%'
                h='90%'
                bgImg="url('/images/Background.svg')"
                bgPosition='center'
                bgRepeat='no-repeat'
                bgSize='cover'
                justifyContent='space-between'
            >
                <Box
                    maxW={525}
                    ml='36'
                    my='20'

                >
                    <Text
                        fontWeight='medium'
                        fontSize='4xl'
                        color='white.text'
                        noOfLines={2}
                    >
                        5 Continentes,<br />
                        infinitas possibilidades.
                    </Text>
                    <Text
                        as='h2'
                        fontWeight='medium'
                        fontSize='xl'
                        color='info.light'
                    >
                        Chegou a hora de tirar do papel a viagem que você sempre sonhou.
                    </Text>
                </Box>
                <Image
                    w='md'
                    h='72'
                    mr='36'
                    mt='24'
                    src='/images/Airplane.svg'
                />
            </Flex>
        </Flex>
    )
}