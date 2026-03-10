import {
  Container,
  SimpleGrid,
  Image,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  VStack,
  HStack,
  Heading,
  Text,
  Tag,
  TagLabel,
  Wrap,
  WrapItem,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import SectionHeader from '../components/SectionHeader'
import { artworks } from '../data/artwork'

const MotionBox = motion(Box)

export default function Artwork() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const bgColor = useColorModeValue('gray.50', 'gray.900')

  const selectedArtwork = artworks[selectedIndex]

  const openArtwork = (index: number) => {
    setSelectedIndex(index)
    onOpen()
  }

  const goToPrevious = () => {
    setSelectedIndex((prev) => (prev === 0 ? artworks.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setSelectedIndex((prev) => (prev === artworks.length - 1 ? 0 : prev + 1))
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') goToPrevious()
      if (e.key === 'ArrowRight') goToNext()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  return (
    <Container maxW="1200px" py={20}>
      <SectionHeader label="CREATIVE" title="Creative experiments" />

      {/* Gallery Grid */}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} mb={8}>
        {artworks.map((artwork, idx) => {
          const boxProps = idx < 3 ? { 'data-aos': 'fade-up', 'data-aos-delay': idx * 100 } : {}
          return (
            <MotionBox
              key={artwork.id}
              cursor="pointer"
              borderRadius="12px"
              overflow="hidden"
              boxShadow="none"
              _hover={{
                boxShadow: '0 12px 48px rgba(97,83,232,0.15)',
                transform: 'translateY(-4px)',
              }}
              transition="all 0.3s"
              onClick={() => openArtwork(idx)}
              {...(boxProps as any)}
            >
            <Box position="relative" height="280px" overflow="hidden" bg="gray.300">
              <Image
                src={artwork.thumbnail}
                alt={artwork.title}
                height="100%"
                width="100%"
                objectFit="cover"
              />
              <Box
                position="absolute"
                inset={0}
                bgGradient="linear(to-t, rgba(0,0,0,0.6), transparent)"
                opacity={0}
                _hover={{ opacity: 1 }}
                transition="opacity 0.3s"
                display="flex"
                alignItems="flex-end"
                p={4}
              >
                <VStack align="start" spacing={1} color="white">
                  <Heading size="sm">{artwork.title}</Heading>
                  <Text fontSize="xs" opacity={0.9}>{artwork.year}</Text>
                </VStack>
              </Box>
            </Box>
            </MotionBox>
          )
        })}
      </SimpleGrid>

      {/* Lightbox Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="4xl" isCentered>
        <ModalOverlay backdropFilter="blur(10px)" bg="blackAlpha.600" />
        <AnimatePresence mode="wait">
          {isOpen && (
            <MotionContent
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <ModalCloseButton zIndex={10} />
              <ModalBody p={0} overflow="hidden">
                <VStack spacing={0} align="stretch">
                  {/* Media Display */}
                  <Box position="relative" bg="black" maxHeight="600px" overflow="hidden">
                    {selectedArtwork.media.type === 'image' ? (
                      <Image
                        src={selectedArtwork.media.url}
                        alt={selectedArtwork.title}
                        width="100%"
                        height="auto"
                      />
                    ) : (
                      <Box
                        as="iframe"
                        width="100%"
                        height="600px"
                        src={selectedArtwork.media.url}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    )}

                    {/* Navigation Buttons */}
                    <HStack position="absolute" bottom={4} left={4} right={4} justify="space-between">
                      <IconButton
                        aria-label="Previous"
                        icon={<ChevronLeftIcon />}
                        onClick={goToPrevious}
                        bg="whiteAlpha.700"
                        _hover={{ bg: 'whiteAlpha.900' }}
                      />
                      <IconButton
                        aria-label="Next"
                        icon={<ChevronRightIcon />}
                        onClick={goToNext}
                        bg="whiteAlpha.700"
                        _hover={{ bg: 'whiteAlpha.900' }}
                      />
                    </HStack>
                  </Box>

                  {/* Info Section */}
                  <Box p={6} bg={bgColor}>
                    <VStack align="start" spacing={4}>
                      <VStack align="start" spacing={1}>
                        <Heading size="lg">{selectedArtwork.title}</Heading>
                        <Text color="text.secondary" fontSize="sm">
                          {selectedArtwork.year}
                        </Text>
                      </VStack>

                      <Text color="text.primary">
                        {selectedArtwork.longDescription || selectedArtwork.description}
                      </Text>

                      <VStack align="start" spacing={2} w="full">
                        <Text fontWeight="600" fontSize="sm">
                          Tools & Technologies
                        </Text>
                        <Wrap spacing={2}>
                          {selectedArtwork.tools.map((tool) => (
                            <WrapItem key={tool}>
                              <Tag size="sm" variant="subtle" colorScheme="brand">
                                <TagLabel>{tool}</TagLabel>
                              </Tag>
                            </WrapItem>
                          ))}
                        </Wrap>
                      </VStack>

                      {/* Counter */}
                      <Text fontSize="xs" color="text.secondary">
                        {selectedIndex + 1} / {artworks.length}
                      </Text>
                    </VStack>
                  </Box>
                </VStack>
              </ModalBody>
            </MotionContent>
          )}
        </AnimatePresence>
      </Modal>
    </Container>
  )
}

const MotionContent = motion(ModalContent)
