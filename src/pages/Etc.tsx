import {
  Container,
  VStack,
  SimpleGrid,
  Heading,
  Text,
  Card,
  CardBody,
  Box,
} from '@chakra-ui/react'
import SectionHeader from '../components/SectionHeader'

export default function Etc() {

  const hobbies = [
    {
      id: 'hobby-1',
      title: 'Gaming',
      description: 'Passionate about indie games and game design. Currently exploring narrative-driven games.',
    },
    {
      id: 'hobby-2',
      title: 'Reading',
      description: 'Enjoy sci-fi novels and design thinking books. Currently reading: Design of Everyday Things',
    },
    {
      id: 'hobby-3',
      title: 'Photography',
      description: 'Street and landscape photography. Love capturing moments and exploring new perspectives.',
    },
    {
      id: 'hobby-4',
      title: 'Cooking',
      description: 'Experimenting with different cuisines. Always trying new recipes from around the world.',
    },
  ]

  const travelLocations = [
    { id: 'travel-1', city: 'Seoul, South Korea', visits: 2, image: '/travel/seoul.jpg' },
    { id: 'travel-2', city: 'Tokyo, Japan', visits: 1, image: '/travel/tokyo.jpg' },
    { id: 'travel-3', city: 'New York, USA', visits: 1, image: '/travel/newyork.jpg' },
    { id: 'travel-4', city: 'Paris, France', visits: 1, image: '/travel/paris.jpg' },
    { id: 'travel-5', city: 'Barcelona, Spain', visits: 1, image: '/travel/barcelona.jpg' },
    { id: 'travel-6', city: 'Bangkok, Thailand', visits: 1, image: '/travel/bangkok.jpg' },
  ]

  return (
    <Container maxW="1200px" py={20}>
      <SectionHeader label="HOBBIES" title="Beyond the research" />

      {/* Hobbies Section */}
      <VStack align="stretch" spacing={16} mb={20}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          {hobbies.map((hobby, idx) => (
            <Card
              key={hobby.id}
              borderRadius="16px"
              border="1px solid"
              borderColor="border.default"
              boxShadow="none"
              bg="transparent"
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
              <CardBody>
                <VStack align="start" spacing={3}>
                  <Heading size="md">{hobby.title}</Heading>
                  <Text color="text.secondary">
                    {hobby.description}
                  </Text>
                </VStack>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>

        {/* Travel Section */}
        <VStack align="stretch" spacing={6} mt={8}>
          <Box>
            <Heading as="h3" size="md" mb={2}>Travel Footprints</Heading>
            <Text fontSize="sm" color="text.secondary">
              Places I've visited and loved exploring
            </Text>
          </Box>
          <SimpleGrid columns={{ base: 2, md: 3 }} spacing={4}>
            {travelLocations.map((location, idx) => (
              <Box
                key={location.id}
                borderRadius="12px"
                overflow="hidden"
                boxShadow="none"
                border="1px solid"
                borderColor="border.default"
                _hover={{
                  borderColor: 'brand.500',
                  boxShadow: '0 8px 32px rgba(97,83,232,0.12)',
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
                {/* Image Placeholder */}
                <Box
                  height="200px"
                  bg="linear-gradient(135deg, rgba(97,83,232,0.2) 0%, rgba(166,95,240,0.2) 100%)"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  position="relative"
                  overflow="hidden"
                >
                  <Box
                    position="absolute"
                    inset={0}
                    bg={`url(${location.image})`}
                    backgroundSize="cover"
                    backgroundPosition="center"
                    opacity={0.8}
                  />
                  <VStack
                    spacing={1}
                    position="relative"
                    zIndex={1}
                    color="white"
                    textAlign="center"
                  >
                    <Heading size="sm">{location.city}</Heading>
                    <Text fontSize="xs">
                      {location.visits === 1 ? '1 visit' : `${location.visits} visits`}
                    </Text>
                  </VStack>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </VStack>
    </Container>
  )
}
