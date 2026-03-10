import {
  Container,
  VStack,
  HStack,
  Heading,
  Text,
  Box,
  Tag,
  TagLabel,
  Wrap,
  WrapItem,
  Button,
  useColorModeValue,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import { news } from '../data/news'

export default function NewsList() {
  const navigate = useNavigate()
  const borderColor = useColorModeValue('border.default', 'rgba(97,83,232,0.25)')

  return (
    <Container maxW="1000px" py={20}>
      <SectionHeader label="UPDATES" title="Latest News" />

      <VStack spacing={6} align="stretch">
        {news.map((article, idx) => (
          <Box
            key={article.id}
            p={6}
            borderRadius="16px"
            border="1px solid"
            borderColor={borderColor}
            boxShadow="none"
            bg="transparent"
            _hover={{
              borderColor: 'brand.500',
              boxShadow: '0 8px 32px rgba(97,83,232,0.12)',
              transform: 'translateY(-4px)',
            }}
            transition="all 0.3s"
            cursor="pointer"
            onClick={() => navigate(`/news/${article.id}`)}
            data-aos={idx < 3 ? 'fade-up' : undefined}
            data-aos-delay={idx < 3 ? idx * 100 : undefined}
          >
            <VStack align="start" spacing={4} w="full">
              {/* Header with Category and Date */}
              <HStack spacing={4} flexWrap="wrap" w="full" justify="space-between">
                <HStack spacing={3}>
                  <Tag size="md" colorScheme="brand" variant="subtle">
                    <TagLabel>{article.category}</TagLabel>
                  </Tag>
                  <Text fontSize="sm" color="text.secondary" fontWeight="500">
                    {new Date(article.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </Text>
                </HStack>
                {article.image && (
                  <Box
                    width="120px"
                    height="100px"
                    borderRadius="8px"
                    backgroundImage={`url(${article.image})`}
                    backgroundSize="cover"
                    backgroundPosition="center"
                    bgColor="gray.300"
                    display={{ base: 'none', md: 'block' }}
                  />
                )}
              </HStack>

              {/* Title */}
              <Heading size="lg" _hover={{ color: 'brand.500' }} transition="color 0.2s">
                {article.title}
              </Heading>

              {/* Excerpt */}
              <Text color="text.secondary" fontSize="md" lineHeight="1.6">
                {article.excerpt}
              </Text>

              {/* Tags */}
              <Wrap spacing={1}>
                {article.tags.map(tag => (
                  <WrapItem key={tag}>
                    <Tag size="sm" variant="outline" colorScheme="brand">
                      <TagLabel fontSize="xs">{tag}</TagLabel>
                    </Tag>
                  </WrapItem>
                ))}
              </Wrap>

              {/* Read More Button */}
              <Button
                size="sm"
                colorScheme="brand"
                variant="ghost"
                mt={2}
                onClick={(e) => {
                  e.stopPropagation()
                  navigate(`/news/${article.id}`)
                }}
              >
                Read More →
              </Button>
            </VStack>
          </Box>
        ))}
      </VStack>
    </Container>
  )
}
