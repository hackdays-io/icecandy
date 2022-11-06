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
      300: '#FAE5E5',
      400: '#F7B6BB',
      500: '#F4969A',
    },
    candyback: '#FAE5E5',
    profileback: '#F7B6BB',
    itemsback: 'rgba(255,255,255,0.6)',
    pinkbuttonlight: '#F7B6BB',
    pinkbutton: '#F56A6A'
  },
})
export default chakraTheme
