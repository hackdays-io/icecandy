import { extendTheme } from '@chakra-ui/react'

export const chakraTheme = extendTheme({
  useSystemColorMode: false,
  styles: {
    global: {
      'html, body': {
        color: 'gray.600'
      },
    }
  },
  colors: {
    gray: {
      600: '#5E5E5E'
    },
    primary: {
      300: '#F4969B',
      400: '#F7B6BB',
      500: '#F4969A',
    },
    candyback: '#F7D5D5',
    profileback: '#F7B6BB',
    pinkbuttonlight: '#F7B6BB',
    pinkbutton: '#F56A6A'
  },
})
export default chakraTheme
