import { Box, Flex, Icon, Image } from "@chakra-ui/react";
import Link from "next/link";
import { FaAngleLeft } from 'react-icons/fa'

interface HeaderProps {
    backButton?: boolean;
}

export default function Header({ backButton = false }: HeaderProps) {
    return (
        <>

            {backButton ?
                <Flex
                    as='header'
                    w='100%'
                    h='20'
                    alignItems='center'
                    justifyContent='center'

                >
                    <Link href={'/'}
                    >
                        <Box
                            pos='absolute'
                            as='a'
                            fontSize='4xl'
                            color='gray.text'
                            left='36'
                        >
                            <Image cursor='pointer' src={'/images/BackButton.svg'} />
                        </Box>
                    </Link>
                    <Image
                        as='img'
                        src='/images/Logo.svg'
                        alt="Logo"
                        w='45'
                        h='10'
                    />
                </Flex>
                :

                <Flex
                    as='header'
                    w='100%'
                    h='20'
                    alignItems='center'
                    justifyContent='center'
                >
                    <Image
                        as='img'
                        src='/images/Logo.svg'
                        alt="Logo"
                        w='45'
                        h='10'
                    />
                </Flex>
            }
        </>

    )
}