import { Flex, Image } from "@chakra-ui/react";

export default function Header(){
    return(
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
    )
}