import {
  Container,
  VStack,
  Card,
  Heading,
  Text,
  HStack,
  Button,
  Link,
  Divider,
} from '@chakra-ui/react'
import SectionHeader from '../components/SectionHeader'
import { publications } from '../data/publications'

export default function Publications() {

  return (
    <Container maxW="1200px" py={20}>
      <SectionHeader label="RESEARCH" title="Research I published" />

      <VStack spacing={6} align="stretch">
        {publications.map((pub, idx) => (
          <Card
            key={pub.id}
            borderRadius="12px"
            borderLeft="3px solid"
            borderLeftColor="brand.500"
            boxShadow="none"
            p={6}
            bg="transparent"
            border="1px solid"
            borderColor="border.default"
            _hover={{
              bg: 'bg.subtle',
            }}
            transition="background 0.2s"
            _dark={{
              borderColor: 'rgba(97,83,232,0.25)',
              _hover: {
                bg: 'rgba(97,83,232,0.05)',
              },
            }}
            data-aos={idx < 3 ? 'fade-up' : undefined}
            data-aos-delay={idx < 3 ? idx * 100 : undefined}
          >
            <VStack align="start" spacing={3} w="full">
              {/* Title */}
              <Heading size="md">
                {pub.title}
              </Heading>

              {/* Authors */}
              <Text fontSize="sm" fontWeight="500" color="text.secondary">
                {pub.authors.join(', ')}
              </Text>

              {/* Conference/Journal and Year */}
              <HStack spacing={4} flexWrap="wrap">
                <Text fontSize="sm" fontStyle="italic" color="text.secondary">
                  {pub.conference}
                </Text>
                <Text fontSize="sm" fontWeight="600" color="brand.500">
                  {pub.year}
                </Text>
              </HStack>

              {/* Abstract */}
              {pub.abstract && (
                <>
                  <Divider />
                  <Text fontSize="sm" color="text.primary">
                    {pub.abstract}
                  </Text>
                </>
              )}

              {/* Links */}
              <HStack spacing={3} pt={2}>
                {pub.pdfUrl && (
                  <Link href={pub.pdfUrl} isExternal _hover={{ textDecoration: 'none' }}>
                    <Button size="sm" variant="outline" colorScheme="brand">
                      PDF
                    </Button>
                  </Link>
                )}
                {pub.doiUrl && (
                  <Link href={pub.doiUrl} isExternal _hover={{ textDecoration: 'none' }}>
                    <Button size="sm" variant="outline" colorScheme="brand">
                      DOI
                    </Button>
                  </Link>
                )}
              </HStack>
            </VStack>
          </Card>
        ))}
      </VStack>
    </Container>
  )
}
