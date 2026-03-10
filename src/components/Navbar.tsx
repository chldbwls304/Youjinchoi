import {
  Box,
  Flex,
  HStack,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  IconButton,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Publications', path: '/publications' },
  { name: 'Artwork', path: '/artwork' },
  { name: 'Misc', path: '/etc' },
]

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const glassmorph = {
    backdropFilter: 'blur(20px) saturate(180%)',
    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
  }
  const navBg = useColorModeValue('rgba(247,246,243,0.80)', 'rgba(15,14,23,0.80)')
  const borderColor = useColorModeValue('rgba(228,226,236,0.60)', 'rgba(46,43,64,0.80)')

  const isActive = (path: string) => {
    const hash = window.location.hash.slice(2) // Remove '#/'
    return hash === path || (path === '/' && hash === '')
  }

  return (
    <>
      <Box
        as="nav"
        sx={glassmorph}
        bg={navBg}
        borderBottom="1px solid"
        borderColor={borderColor}
        position="sticky"
        top={0}
        zIndex={100}
        h="64px"
      >
        <Flex maxW="1200px" mx="auto" px={4} justify="space-between" align="center" h="full">
          {/* Logo */}
          <RouterLink to="#/">
            <Box
              w="32px"
              h="32px"
              bg="brand.500"
              borderRadius="8px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontWeight="700"
              fontSize="sm"
              color="white"
              cursor="pointer"
              _hover={{ bg: 'brand.600' }}
              transition="background 0.2s"
            >
              YC
            </Box>
          </RouterLink>

          {/* Desktop Nav */}
          <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
            {navLinks.map((link) => (
              <RouterLink key={link.name} to={link.path}>
                <Box
                  as="span"
                  fontSize="md"
                  fontWeight={isActive(link.path) ? '700' : '600'}
                  color={isActive(link.path) ? 'brand.500' : 'text.primary'}
                  cursor="pointer"
                  _hover={{ color: 'brand.500' }}
                  transition="color 0.2s"
                >
                  {link.name}
                </Box>
              </RouterLink>
            ))}
          </HStack>

          {/* Theme Toggle & Mobile Menu */}
          <HStack spacing={2}>
            <IconButton
              aria-label="Toggle theme"
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
              variant="ghost"
            />
            <IconButton
              aria-label="Open menu"
              icon={<HamburgerIcon />}
              onClick={onOpen}
              variant="ghost"
              display={{ base: 'flex', md: 'none' }}
            />
          </HStack>
        </Flex>
      </Box>

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody pt={8}>
            <VStack spacing={4} align="start">
              {navLinks.map((link) => (
                <RouterLink key={link.name} to={link.path} onClick={onClose}>
                  <Box
                    as="span"
                    fontSize="xl"
                    fontWeight={isActive(link.path) ? '700' : '600'}
                    color={isActive(link.path) ? 'brand.500' : 'text.primary'}
                    cursor="pointer"
                  >
                    {link.name}
                  </Box>
                </RouterLink>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
