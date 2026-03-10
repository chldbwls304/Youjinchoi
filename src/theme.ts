import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  fonts: {
    body: "'Afacad Flux', sans-serif",
    heading: "'DM Sans', sans-serif",
    mono: "'JetBrains Mono', monospace",
  },
  colors: {
    brand: {
      50: '#F0EDFF',
      100: '#DDD7FF',
      200: '#BEB4FF',
      300: '#9B8EFF',
      400: '#7C6EF7',
      500: '#6153E8',
      600: '#4E41D4',
      700: '#3D32B8',
      800: '#2D2590',
      900: '#1C1866',
    },
    accent: {
      400: '#F5A623',
      500: '#E8920F',
    },
  },
  semanticTokens: {
    colors: {
      'bg.default': {
        default: '#F7F6F3',
        _dark: '#0F0E17',
      },
      'bg.surface': {
        default: '#FFFFFF',
        _dark: '#1A1827',
      },
      'bg.subtle': {
        default: '#F0EFEB',
        _dark: '#141222',
      },
      'text.primary': {
        default: '#16141F',
        _dark: '#EEEAF5',
      },
      'text.secondary': {
        default: '#5C5870',
        _dark: '#9B97AD',
      },
      'border.default': {
        default: '#E4E2EC',
        _dark: '#2E2B40',
      },
    },
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'brand',
      },
    },
  },
})

export default theme
