import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
    colors: {

        'white.body': '#FFFFFF',
        'white.text': '#F5F8FA',
        'highlight': '#FFBA08',
        'highlight.50': 'rgba(255, 186, 8, 0.5)',
        'gray.text': '#47585B',
        'black.text': '#000000',
        'info.dark': '#999999',
        'info.dark.50': 'rgba(153, 153, 153, 0.5)',
        'info.light': '#DADADA'

    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins'
    },
    styles: {
        global: {
            body: {
                bg: 'white.body',
                color: 'gray.50'
            }
        }
    }
})