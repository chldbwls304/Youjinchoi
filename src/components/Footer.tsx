import {
  Box,
  Container,
  VStack,
  HStack,
  Text,
  Link,
  useColorModeValue,
  Divider,
} from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
import { GitHubIcon, LinkedInIcon, GoogleScholarIcon } from './icons/SocialIcons'
import { socialLinks } from '../data/profile'

const getSocialIcon = (icon: string) => {
  const iconMap: Record<string, React.ReactNode> = {
    github: <GitHubIcon w={5} h={5} />,
    linkedin: <LinkedInIcon w={5} h={5} />,
    google: <GoogleScholarIcon w={5} h={5} />,
    email: <EmailIcon w={5} h={5} />,
  }
  return iconMap[icon] || null
}

export default function Footer() {
  const bgColor = useColorModeValue('bg.subtle', 'gray.900')
  const borderColor = useColorModeValue('border.default', 'gray.700')
  const textColor = useColorModeValue('text.secondary', 'gray.400')

  return (
    <Box bg={bgColor} borderTop="1px solid" borderColor={borderColor} mt={20} py={8}>
      <Container maxW="1200px">
        <VStack spacing={8} align="stretch">
          {/* Social Links */}
          <HStack justify="center" spacing={6} wrap="wrap">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                isExternal
                display="flex"
                alignItems="center"
                gap={2}
                color="text.primary"
                _hover={{ color: 'brand.500' }}
                transition="color 0.2s"
              >
                {getSocialIcon(link.icon)}
                <Text fontSize="sm" fontWeight="500">
                  {link.name}
                </Text>
              </Link>
            ))}
          </HStack>

          <Divider />

          {/* Copyright */}
          <Text textAlign="center" fontSize="sm" color={textColor}>
            © {new Date().getFullYear()} Youjin Choi. All rights reserved.
          </Text>
        </VStack>
      </Container>
    </Box>
  )
}
