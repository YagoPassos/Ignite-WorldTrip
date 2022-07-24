import { Box, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

export default function Banner() {
    // const breakpoint = ({
    //     lg: {1150}
    // })
    const isWideVersion = useBreakpointValue({
        base: false,
        xl: true,

    })
    return (
        <Flex
            w='100%'
            h={{ base: '48', xl: '96' }}
        >
            <Flex
                width='100%'
                h={{ base: '100%', xl: '90%' }}
                bgImg="url('/images/Background.svg')"
                bgPosition='center'
                bgRepeat='no-repeat'
                bgSize='cover'
                justifyContent={{ base: 'flex-start', xl: 'space-between' }}
            >
                <Box
                    maxW={525}
                    ml={{ base: '8', lg: '36' }}
                    mr={{base:'4'}}
                    my='auto'
                // h={{base:'100%'}}

                >
                    <Text
                        fontWeight='medium'
                        fontSize={{ base: 'xl', xl: '4xl' }}
                        color='white.text'
                    >
                        5 Continentes,<br />
                    </Text>
                    <Text
                        fontWeight='medium'
                        fontSize={{ base: 'xl', xl: '4xl' }}
                        color='white.text'
                    >
                        infinitas possibilidades.
                    </Text>
                    <Text
                        as='h2'
                        fontWeight='medium'
                        fontSize={{ base: 'md', xl: 'xl' }}
                        color='info.light'
                    >
                        Chegou a hora de tirar do papel a viagem que você sempre sonhou.
                    </Text>
                </Box>
                {isWideVersion &&
                    <Image
                        w='md'
                        h='72'
                        mr='36'
                        mt='24'
                        src='/images/Airplane.svg'
                    />}

            </Flex>
        </Flex>
    )
}