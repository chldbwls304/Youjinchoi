import {
  Box,
  Container,
  VStack,
  HStack,
  Heading,
  Text,
  Button,
  SimpleGrid,
  Card,
  CardBody,
  CardHeader,
  Tag,
  TagLabel,
  Wrap,
  WrapItem,
  Link,
  useColorModeValue,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import { profile, education, socialLinks } from '../data/profile'
import { getFeaturedProjects } from '../data/projects'
import { news } from '../data/news'

const MotionBox = motion(Box)
const MotionHeading = motion(Heading)
const MotionText = motion(Text)

export default function Home() {
  const bgColor = useColorModeValue('bg.default', 'bg.default')
  const heroBg = useColorModeValue('bg.default', 'bg.default')
  const profileImageBg = useColorModeValue('rgba(228,226,236,0.2)', 'rgba(97,83,232,0.25)')

  const featuredProjects = getFeaturedProjects()

  return (
    <Box>
      {/* Hero Section */}
      <Box
        bg={heroBg}
        bgImage="radial-gradient(ellipse 80% 60% at 50% -10%, rgba(97,83,232,0.08) 0%, transparent 70%)"
        py={{ base: 12, md: 20 }}
        position="relative"
        overflow="hidden"
      >
        <Container maxW="1200px">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 8, md: 12 }} alignItems="center">
            {/* Left Column - Text Content */}
            <VStack spacing={6} align="flex-start">
              {/* Name */}
              <MotionHeading
                as="h1"
                size="2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {profile.name}
              </MotionHeading>

              {/* Role */}
              <MotionText
                fontSize={{ base: 'lg', md: 'xl' }}
                fontWeight="700"
                color="brand.500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Ph.D. Researcher · HCI · Inclusive AI
              </MotionText>

              {/* Keywords */}
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Wrap spacing={3}>
                  {profile.keywords.map((keyword) => (
                    <WrapItem key={keyword}>
                      <Tag
                        size="lg"
                        borderRadius="full"
                        variant="subtle"
                        colorScheme="brand"
                      >
                        <TagLabel fontSize="md" fontWeight="600">{keyword}</TagLabel>
                      </Tag>
                    </WrapItem>
                  ))}
                </Wrap>
              </MotionBox>

              {/* Bio */}
              <MotionText
                maxW="550px"
                fontSize={{ base: 'md', md: 'lg' }}
                color="text.primary"
                lineHeight="1.8"
                fontWeight="500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {profile.bio}
              </MotionText>

              {/* Affiliation */}
              <MotionText
                fontSize={{ base: 'sm', md: 'md' }}
                color="text.primary"
                fontWeight="500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {profile.affiliation} | {profile.advisor}
              </MotionText>

              {/* Social Links */}
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <HStack spacing={4} wrap="wrap">
                  {socialLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.url}
                      isExternal
                      _hover={{ textDecoration: 'none' }}
                    >
                      <Button
                        size="lg"
                        variant="outline"
                        colorScheme="brand"
                        fontSize="md"
                        fontWeight="600"
                        _hover={{ bg: 'brand.500', color: 'white' }}
                      >
                        {link.name}
                      </Button>
                    </Link>
                  ))}
                </HStack>
              </MotionBox>
            </VStack>

            {/* Right Column - Profile Image */}
            <MotionBox
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              display={{ base: 'none', md: 'flex' }}
              justifyContent="center"
              alignItems="center"
            >
              <Box
                position="relative"
                w="300px"
                h="300px"
                borderRadius="24px"
                overflow="hidden"
                border="2px solid"
                borderColor={profileImageBg}
                _before={{
                  content: '""',
                  position: 'absolute',
                  inset: '-2px',
                  borderRadius: '24px',
                  padding: '2px',
                  background: 'linear-gradient(135deg, rgba(97,83,232,0.5) 0%, rgba(166,95,240,0.5) 50%, rgba(245,166,35,0.5) 100%)',
                  WebkitMaskImage: 'linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'destination-out',
                  maskComposite: 'exclude',
                }}
                bg="bg.surface"
                boxShadow="0 8px 32px rgba(97,83,232,0.1)"
              >
                {profile.profileImage && (
                  <Box
                    as="img"
                    src={profile.profileImage}
                    alt={profile.name}
                    w="full"
                    h="full"
                    objectFit="cover"
                  />
                )}
              </Box>
            </MotionBox>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Latest News Section - Accordion List (moved to top) */}
      <Container maxW="1200px" py={12}>
        <SectionHeader label="UPDATES" title="Recent News" />
        <Accordion allowToggle defaultIndex={[0]}>
          {news.slice(0, 6).map((article, idx) => {
            const dateStr = new Date(article.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
            })

            return (
              <AccordionItem
                key={article.id}
                border="none"
                borderBottom="1px solid"
                borderColor="border.default"
                data-aos={idx < 3 ? 'fade-up' : undefined}
                data-aos-delay={idx < 3 ? idx * 100 : undefined}
              >
                <AccordionButton
                  py={5}
                  px={0}
                  _hover={{ bg: 'transparent' }}
                  _expanded={{ bg: 'rgba(97,83,232,0.05)' }}
                >
                  <HStack flex={1} spacing={{ base: 3, md: 4 }} align="center" textAlign="left">
                    <Text
                      fontSize={{ base: 'lg', md: 'xl' }}
                      color="brand.500"
                      minW={{ base: '70px', md: '90px' }}
                      flexShrink={0}
                      fontWeight="700"
                    >
                      {dateStr}
                    </Text>
                    <Tag size="lg" colorScheme="brand" variant="solid" flexShrink={0}>
                      <TagLabel fontSize="md" fontWeight="600">{article.category}</TagLabel>
                    </Tag>
                    <Text fontWeight="700" fontSize={{ base: 'lg', md: 'xl' }} flex={1} noOfLines={1}>
                      {article.title}
                    </Text>
                  </HStack>
                  <AccordionIcon fontSize="28px" />
                </AccordionButton>

                <AccordionPanel pb={5} pl={{ base: 4, md: '120px' }} pr={4} pt={4}>
                  <VStack align="start" spacing={3}>
                    <Text color="text.primary" fontSize={{ base: 'lg', md: 'lg' }} lineHeight="1.8" fontWeight="500">
                      {article.excerpt}
                    </Text>
                    <RouterLink to={`/news/${article.id}`}>
                      <Button size="md" colorScheme="brand" variant="outline" fontSize="md" fontWeight="600">
                        Read Full Story →
                      </Button>
                    </RouterLink>
                  </VStack>
                </AccordionPanel>
              </AccordionItem>
            )
          })}
        </Accordion>
      </Container>

      {/* Education Section */}
      <Container maxW="1200px" py={12}>
        <SectionHeader label="EDUCATION" title="Where I studied" />
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mb={12}>
          {education.map((edu, idx) => (
            <Card
              key={idx}
              borderRadius="16px"
              border="1px solid"
              borderColor="border.default"
              boxShadow="none"
              _hover={{
                borderColor: 'brand.500',
                boxShadow: '0 4px 24px rgba(97,83,232,0.08)',
                transform: 'translateY(-4px)',
              }}
              transition="all 0.3s"
              _dark={{
                borderColor: 'rgba(97,83,232,0.25)',
                _hover: {
                  boxShadow: '0 4px 24px rgba(97,83,232,0.25)',
                },
              }}
              data-aos={idx < 3 ? 'fade-up' : undefined}
              data-aos-delay={idx < 3 ? idx * 100 : undefined}
            >
              <CardHeader pb={2}>
                <Heading size="md" fontSize={{ base: 'lg', md: 'xl' }}>{edu.degree} in {edu.field}</Heading>
              </CardHeader>
              <CardBody py={3}>
                <VStack align="start" spacing={2}>
                  <Text fontWeight="700" fontSize={{ base: 'md', md: 'lg' }}>{edu.school}</Text>
                  <Text color="text.secondary" fontSize={{ base: 'md', md: 'md' }} fontWeight="600">
                    {edu.startYear} - {edu.endYear || 'Present'}
                  </Text>
                </VStack>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </Container>

      {/* Featured Projects Preview */}
      <Box bg={bgColor} py={12}>
        <Container maxW="1200px">
          <SectionHeader label="FEATURED" title="Things I built" />
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mb={6}>
            {featuredProjects.slice(0, 4).map((project, idx) => (
              <Card
                key={project.id}
                borderRadius="16px"
                border="1px solid"
                borderColor="border.default"
                boxShadow="none"
                overflow="hidden"
                _hover={{
                  borderColor: 'brand.500',
                  boxShadow: '0 8px 32px rgba(97,83,232,0.12)',
                  transform: 'translateY(-4px)',
                }}
                transition="all 0.3s"
                _dark={{
                  borderColor: 'rgba(97,83,232,0.25)',
                  _hover: {
                    boxShadow: '0 8px 32px rgba(97,83,232,0.25)',
                  },
                }}
                data-aos={idx < 3 ? 'fade-up' : undefined}
                data-aos-delay={idx < 3 ? idx * 100 : undefined}
              >
                {project.image && (
                  <Box
                    height="200px"
                    bg="gray.300"
                    backgroundImage={`url(${project.image})`}
                    backgroundSize="cover"
                    backgroundPosition="center"
                  />
                )}
                <CardHeader pb={2}>
                  <Heading size="md" fontSize={{ base: 'lg', md: 'xl' }}>{project.title}</Heading>
                </CardHeader>
                <CardBody py={3}>
                  <VStack align="start" spacing={2}>
                    <Text fontSize={{ base: 'md', md: 'md' }} color="text.primary" fontWeight="600">
                      {project.description}
                    </Text>
                    <Text fontSize={{ base: 'md', md: 'md' }} color="text.secondary" fontWeight="600">
                      {project.period}
                    </Text>
                    <Wrap spacing={2} pt={1}>
                      {project.tags.map((tag) => (
                        <WrapItem key={tag}>
                          <Tag size="md" variant="subtle" colorScheme="brand">
                            <TagLabel fontSize="md" fontWeight="600">{tag}</TagLabel>
                          </Tag>
                        </WrapItem>
                      ))}
                    </Wrap>
                    <HStack spacing={2} pt={2}>
                      {project.githubUrl && (
                        <Link href={project.githubUrl} isExternal>
                          <Button size="sm" variant="ghost" colorScheme="brand" fontSize="md" fontWeight="600">
                            GitHub
                          </Button>
                        </Link>
                      )}
                      {project.demoUrl && (
                        <Link href={project.demoUrl} isExternal>
                          <Button size="sm" variant="ghost" colorScheme="brand" fontSize="md" fontWeight="600">
                            Demo
                          </Button>
                        </Link>
                      )}
                    </HStack>
                  </VStack>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>

          <HStack justify="center">
            <RouterLink to="/projects">
              <Button size="lg" colorScheme="brand" px={8}>
                View All Projects
              </Button>
            </RouterLink>
          </HStack>
        </Container>
      </Box>

    </Box>
  )
}
