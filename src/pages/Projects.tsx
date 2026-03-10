import {
  Container,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Text,
  HStack,
  VStack,
  Tag,
  TagLabel,
  Wrap,
  WrapItem,
  Button,
  Link,
  Box,
} from '@chakra-ui/react'
import SectionHeader from '../components/SectionHeader'
import { projects } from '../data/projects'

export default function Projects() {

  const featured = projects.filter(p => p.featured)
  const others = projects.filter(p => !p.featured)

  const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => (
    <Card
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
      data-aos={index < 3 ? 'fade-up' : undefined}
      data-aos-delay={index < 3 ? index * 100 : undefined}
    >
      {project.image && (
        <Box
          height="240px"
          bg="gray.300"
          backgroundImage={`url(${project.image})`}
          backgroundSize="cover"
          backgroundPosition="center"
        />
      )}
      <CardHeader pb={2}>
        <VStack align="start" spacing={2}>
          <Heading size="md">{project.title}</Heading>
          <Text fontSize="xs" color="text.secondary">
            {project.period}
          </Text>
        </VStack>
      </CardHeader>
      <CardBody>
        <VStack align="start" spacing={3}>
          <Text fontSize="sm" color="text.secondary">
            {project.description}
          </Text>

          <Wrap spacing={1}>
            {project.tags.map((tag) => (
              <WrapItem key={tag}>
                <Tag size="sm" variant="subtle" colorScheme="brand">
                  <TagLabel fontSize="xs">{tag}</TagLabel>
                </Tag>
              </WrapItem>
            ))}
          </Wrap>

          <HStack spacing={2} pt={2}>
            {project.githubUrl && (
              <Link href={project.githubUrl} isExternal _hover={{ textDecoration: 'none' }}>
                <Button size="sm" variant="outline" colorScheme="brand">
                  GitHub
                </Button>
              </Link>
            )}
            {project.demoUrl && (
              <Link href={project.demoUrl} isExternal _hover={{ textDecoration: 'none' }}>
                <Button size="sm" variant="outline" colorScheme="brand">
                  Demo
                </Button>
              </Link>
            )}
          </HStack>
        </VStack>
      </CardBody>
    </Card>
  )

  return (
    <Container maxW="1200px" py={20}>
      <SectionHeader label="PROJECTS" title="Things I built" />

      {/* Featured Projects */}
      {featured.length > 0 && (
        <VStack align="stretch" spacing={12} mb={20}>
          <Box>
            <Heading as="h3" size="lg" mb={6} textTransform="uppercase" fontWeight="700">
              Featured
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
              {featured.map((project, idx) => (
                <ProjectCard key={project.id} project={project} index={idx} />
              ))}
            </SimpleGrid>
          </Box>
        </VStack>
      )}

      {/* Other Projects */}
      {others.length > 0 && (
        <VStack align="stretch" spacing={6}>
          <Heading as="h3" size="lg" textTransform="uppercase" fontWeight="700">
            Other Projects
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            {others.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={featured.length + idx} />
            ))}
          </SimpleGrid>
        </VStack>
      )}
    </Container>
  )
}
