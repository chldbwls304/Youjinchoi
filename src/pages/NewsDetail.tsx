import {
  Container,
  VStack,
  HStack,
  Heading,
  Text,
  Box,
  Button,
  Tag,
  TagLabel,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowBackIcon } from '@chakra-ui/icons'
import { news } from '../data/news'
import SectionHeader from '../components/SectionHeader'

export default function NewsDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const article = news.find(n => n.id === id)

  if (!article) {
    return (
      <Container maxW="1200px" py={20}>
        <VStack spacing={6} align="center">
          <Heading>Article not found</Heading>
          <Button onClick={() => navigate('/news')} leftIcon={<ArrowBackIcon />}>
            Back to News
          </Button>
        </VStack>
      </Container>
    )
  }

  // Find related articles (same category, different article)
  const relatedArticles = news
    .filter(n => n.category === article.category && n.id !== article.id)
    .slice(0, 3)

  return (
    <Box>
      {/* Hero Section with Image */}
      {article.image && (
        <Box
          height="400px"
          backgroundImage={`url(${article.image})`}
          backgroundSize="cover"
          backgroundPosition="center"
          bgColor="gray.300"
        />
      )}

      {/* Content Section */}
      <Container maxW="900px" py={20}>
        {/* Back Button */}
        <Button
          mb={8}
          leftIcon={<ArrowBackIcon />}
          variant="ghost"
          onClick={() => navigate('/news')}
        >
          Back to News
        </Button>

        {/* Article Header */}
        <VStack align="start" spacing={6} mb={12}>
          {/* Category and Date */}
          <HStack spacing={4} flexWrap="wrap">
            <Tag colorScheme="brand" variant="subtle">
              <TagLabel>{article.category}</TagLabel>
            </Tag>
            <Text fontSize="sm" color="text.secondary">
              {new Date(article.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </Text>
          </HStack>

          {/* Title */}
          <Heading as="h1" size="2xl">
            {article.title}
          </Heading>

          {/* Tags */}
          <Wrap spacing={2}>
            {article.tags.map(tag => (
              <WrapItem key={tag}>
                <Tag size="md" variant="outline" colorScheme="brand">
                  <TagLabel>{tag}</TagLabel>
                </Tag>
              </WrapItem>
            ))}
          </Wrap>
        </VStack>

        {/* Article Content */}
        <VStack align="start" spacing={6} mb={20}>
          <Text fontSize="lg" lineHeight="1.8" color="text.primary" whiteSpace="pre-wrap">
            {article.content}
          </Text>
        </VStack>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <VStack align="stretch" spacing={8} pt={12} borderTop="1px solid" borderColor="border.default">
            <Heading as="h3" size="lg">
              Related Articles
            </Heading>
            <VStack spacing={4}>
              {relatedArticles.map(relatedArticle => (
                <Box
                  key={relatedArticle.id}
                  p={6}
                  borderRadius="12px"
                  border="1px solid"
                  borderColor="border.default"
                  cursor="pointer"
                  _hover={{
                    bg: 'bg.subtle',
                    borderColor: 'brand.500',
                  }}
                  transition="all 0.2s"
                  onClick={() => navigate(`/news/${relatedArticle.id}`)}
                >
                  <HStack spacing={4} align="start">
                    <VStack align="start" spacing={2} flex={1}>
                      <Text fontSize="sm" color="text.secondary">
                        {relatedArticle.category}
                      </Text>
                      <Heading size="md">{relatedArticle.title}</Heading>
                      <Text fontSize="sm" color="text.secondary">
                        {new Date(relatedArticle.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </Text>
                    </VStack>
                    {relatedArticle.image && (
                      <Box
                        width="150px"
                        height="150px"
                        borderRadius="8px"
                        backgroundImage={`url(${relatedArticle.image})`}
                        backgroundSize="cover"
                        backgroundPosition="center"
                        bgColor="gray.300"
                        flexShrink={0}
                      />
                    )}
                  </HStack>
                </Box>
              ))}
            </VStack>
          </VStack>
        )}
      </Container>
    </Box>
  )
}
